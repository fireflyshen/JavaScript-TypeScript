// Float32Array 实际上是一种“视图”，可以允许 JavaScript 运行时访问一块名为 ArrayBuffer 的 预分配内存。ArrayBuffer 是所有定型数组及视图引用的基本单位。

// ArrayBuffer()是一个普通的 JavaScript 构造函数，可用于在内存中分配特定数量的字节空间。
// constbuf=newArrayBuffer(16); //在内存中分配16字节 alert(buf.byteLength); // 16


var arrayBuffer = new ArrayBuffer(16);


// ArrayBuffer 一经创建就不能再调整大小。不过，可以使用 slice()复制其全部或部分到一个新 实例中:

// 第一种允许你读写 ArrayBuffer 的视图是 DataView。这个视图专为文件 I/O 和网络 I/O 设计，其 API 支持对缓冲数据的高度控制，但相比于其他类型的视图性能也差一些。DataView 对缓冲内容没有 任何预设，也不能迭代。
// 必须在对已有的 ArrayBuffer 读取或写入时才能创建 DataView 实例。这个实例可以使用全部或 部分 ArrayBuffer，且维护着对该缓冲实例的引用，以及视图在缓冲中开始的位置。

const buf = new ArrayBuffer(15);
// DataView 默认使用整个 ArrayBuffer
const fullDataView = new DataView(buf);
console.log(fullDataView.byteOffset); // 0
console.log(fullDataView.byteLength); // 16
console.log(fullDataView.buffer === buf); // true


var textEncoder = new TextEncoder();
const uint8Array = textEncoder.encode("你好，朋友");
uint8Array.forEach((e,index)=> {
    console.log(e)
    fullDataView.setUint8(index,e);
})
console.log("-------------------------")
console.log(fullDataView.getUint8(0));
console.log(fullDataView.getUint8(1));
console.log(fullDataView.getUint8(2));

const textDecoder = new TextDecoder();
console.log(textDecoder.decode(buf));


// 设置缓冲区,2个字节大小
var arrayBuffer1 = new ArrayBuffer(4);

// 是用DateView
var dataView = new DataView(arrayBuffer1);
// 充满整个缓冲区
// dataView.setUint32(0,235);

// 字节序
/**
 * 字节序其实就是字节在内存中存储的一种方式
 * 共有两种
 * 1. 大端序
 * 2. 小端序
 * 大端序简单点讲就是高位字节存储在低位地址中
 * 小端序则相反高位字节存储在高位地址中
 *
 * 如下就展示了这个情况
 */

/**
 * 往二进制数组中存储两个数据
 * 第一个地址存储 0x80,二进制值 10000000
 * 第二个地址存储 0x01 二进制值 00000001
 *
 * 如果按照读区单个字节读取，那么没啥说的，读出来的就是128和1
 *
 * 但是如果数据的最小单元是16位，也就是2个字节，一次读取两个字节的话就会出现字节序影响数据的情况
 */
dataView.setInt8(0,0x80);
dataView.setInt8(1,0x01);
console.log(dataView.getUint8(0));
console.log(dataView.getUint8(1))
/**
 * 使用大端序进行读区，上面说了大端序的高位字节放在了低位地址上
 * 首先：单个字节是不存在高位低位字节的，只有当读取的最小数据单元大于单个字节的时候才会出现高位字节和低位字节
 * 比如这个，刚刚像数组中放置了两个字节，然后是用getUint16来读取，也就是每16位作为一个最小数据单元处理
 * 那么读区刚刚存储的数据就会出现字节排序的问题，这里是用大端序进行排列，也就是高位字节在低位地址上
 * 刚刚那个放进去的第一个是：
 * 0x80 10000000
 * 0x01 00000001
 * 0x80是高位字节 0x01是低位字节，按照大端序的排列
 * 10000000 会放在低位地址上也就是 0地址上
 * 00000001 会放在高位地址上也就是 1地址上
 * 按照十六位读区将其组合也就是1000000000000001 转换成十进制就是32769
 */
console.log(dataView.getUint16(0));
// 使用小端序进行读
/**
 * 如果是小端序那么就是反过来高位字节放在高位地址上，低位字节放在高位地址上
 * 10000000 会放在1地址上
 * 00000001 会放在0地址上
 * 合起来就说0000000110000000
 * 转换成十进制就是384
 */
console.log(dataView.getUint16(0,true));


// DataView 完成读、写操作的前提是必须有充足的缓冲区，否则就会抛出 RangeError:
// 如下代码 就会抛出异常
// 抛出异常的情况非常简单
// 你给的缓冲区是一个字节，然而却尝试向里面写入一个16位的数据，1字节 == 8位，8< 16位，所以出现了一场
const arrayBuffer2 = new ArrayBuffer(1);
var dataView1 = new DataView(arrayBuffer2);
// dataView1.setUint16(0,1)


/**
 * 定型数组
 */

// 定性数组，可以简单理解为DataView的另外一种视图，不同于DataView原始视图，这哥们从一开始就知道自己对于字节的分组，也就是数据的最小单元是几个字节;
var arrayBuffer3 = new ArrayBuffer(4);
const int32Array = new Int8Array(arrayBuffer3);
console.log(int32Array.length);  // 1 定型数组会根据缓冲进行计算几个自己的长度是多少，
int32Array[0] = 10;
int32Array[1] = 257
console.log(int32Array[0])
console.log(int32Array[1])
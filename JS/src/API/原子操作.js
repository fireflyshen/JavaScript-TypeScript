// Atomics API 提供了一套简单的方法用以执行就地修改操作。在 ECMA 规范中，这些方法被定义为 AtomicReadModifyWrite 操作。
// 在底层，这些方法都会从 SharedArrayBuffer 中某个位置读取值， 然后执行算术或位操作，最后再把计算结果写回相同的位置。
// 这些操作的原子本质意味着上述读取、修 改、写回操作会按照顺序执行，不会被其他线程中断。

var sharedArrayBuffer = new SharedArrayBuffer(1);


class TreeNode {
    val: any;
    left: TreeNode | null;
    right: TreeNode | null;


    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? {} : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}


// 初始化二叉树
let n1 = new TreeNode(1),
    n2 = new TreeNode(2),
    n3 = new TreeNode(3),
    n4 = new TreeNode(4),
    n5 = new TreeNode(5);

n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;


// 插入节点
// let treeNode = new TreeNode(6)
// n1.left = treeNode;
// treeNode.left = n2;

// 删除节点
// n1.left = null;

function a(root: any | null): number[] {


    let queue = [root];
    let valist = [];

    while(queue.length != 0){
        let node = queue.shift() as TreeNode;        
        valist.push(node.val);


        if (node.left != null || undefined) {
            queue.push(node.left);
        }

        if(node.right != null || undefined){
            queue.push(node.right)
        }

    }

    return valist;
}


console.log(a(n1));
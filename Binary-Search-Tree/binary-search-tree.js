// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.root = null
  }

  insert(val, currentNode=this.root) {
    let newNode = new TreeNode(val)

    if(this.root === null){
      return this.root = new TreeNode(val)
    }

    if(val < currentNode.val){
      if(currentNode.left === null){
        currentNode.left = new TreeNode(val)
      }
      else{
        this.insert(val, currentNode.left)
      }
    }
    if(val > currentNode.val){
      if(currentNode.right === null){
        currentNode.right = new TreeNode(val)
      }
      else{
        this.insert(val, currentNode.right)
      }
    }

  //   while(currentNode !== null){
  //     if(currentNode.val > newNode.val ){
  //       currentNode = currentNode.left
  //   }
  //   else{
  //       currentNode = currentNode.right
  //   }
  //   currentNode = newNode
  // }

  }
  search(target) {
    let currentNode = this.root
    while (currentNode !== null){
      if(currentNode.val === target) return true

      else if(target < currentNode.val){
        currentNode = currentNode.left
      }
      else if(target > currentNode.val){
        currentNode = currentNode.right
      }
    }
    return false
  }


  preOrderTraversal(currentNode = this.root) {
    // Your code here
  }


  inOrderTraversal(currentNode = this.root) {
    // Your code here
  }


  postOrderTraversal(currentNode = this.root) {
    // Your code here
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // your code here
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // your code here
}
}

// bst = new BinarySearchTree();


// bst.insert(4);
// bst.insert(2);

// let leftNode = bst.root.left;
// console.log((leftNode.val))
// console.log(expect(leftNode.left))
// console.log(expect(leftNode.right))




module.exports = { BinarySearchTree, TreeNode };

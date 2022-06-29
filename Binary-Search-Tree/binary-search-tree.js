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

  insert(val, currentNode = this.root) {
    let newNode = new TreeNode(val)

    if (this.root === null) {
      return this.root = new TreeNode(val)
    }

    // if(val < currentNode.val){
    //   if(currentNode.left === null){
    //     currentNode.left = new TreeNode(val)
    //   }
    //   else{
    //     this.insert(val, currentNode.left)
    //   }
    // }
    // if(val > currentNode.val){
    //   if(currentNode.right === null){
    //     currentNode.right = new TreeNode(val)
    //   }
    //   else{
    //     this.insert(val, currentNode.right)
    //   }
    // }

    while (currentNode !== null) {
      //if the newNode.value is less than the current value
      if (currentNode.val > newNode.val) {
        // if our left doesn't exist (null), set it equal to the newNode
        if (currentNode.left === null) {
          currentNode.left = newNode
          return;
        }
        // if our left does exist (currentNode.left !== null), we want to reassign the currentNode to be the currentNode.left
        else if (currentNode.left !== null) {
          currentNode = currentNode.left
        }
        // then reassign the currentNode's left pointer to point at the newNode
      }
      if (currentNode.val < newNode.val) {
        // if our right doesn't exist (null), set it equal to the newNode
        if (currentNode.right === null) {
          currentNode.right = newNode
          return;
        }
        // if our right does exist (currentNode.right !== null), we want to reassign the currentNode to be the currentNode.right
        else if (currentNode.right !== null) {
          currentNode = currentNode.right
        }
      }
    }

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
    console.log(currentNode.val);

    if(currentNode.left){
      this.preOrderTraversal(currentNode.left)
    }
    if(currentNode.right){
      this.preOrderTraversal(currentNode.right)
    }


  }


  inOrderTraversal(currentNode = this.root) {
    // Your code here

    if(currentNode.left){
      this.inOrderTraversal(currentNode.left)
    }
    console.log(currentNode.val);

    if(currentNode.right){
      this.inOrderTraversal(currentNode.right)
    }



  }


  postOrderTraversal(currentNode = this.root) {
    // Your code here
    if(currentNode.left){
      this.postOrderTraversal(currentNode.left)
    }


    if(currentNode.right){
      this.postOrderTraversal(currentNode.right)
    }

    console.log(currentNode.val);
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

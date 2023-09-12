import Node from "./node.js";
import Tree from "./tree.js";

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

function sortAndRemoveDuplicates(array) {
  array.sort();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i + 1]) {
      array.splice(i, 1);
    }
  }
}

let array = [1, 4, 5, 3, 4, 5, 7, 8, 9];
sortAndRemoveDuplicates(array);

let myTree = new Tree(array);

myTree.insert(2);

console.log(myTree.find(4));

prettyPrint(myTree.root);

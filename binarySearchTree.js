class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    add(data) {
        const node = this.root;
        if (node === null) {
            this.root = new Node(data);
            return;
        } else {
            const searchTree = node => {
                if (data < node.data) {
                    if (node.left === null) {
                        node.left = new Node(data);
                        return;
                    } else if (node.left !== null) {
                        return searchTree(node.left);
                    }
                } else if (data > node.data) {
                    if (node.right === null) {
                        node.right = new Node(data);
                        return;
                    } else if (node.right !== null) {
                        return searchTree(node.right);
                    }
                } else {
                    return null;
                }
            };
            return searchTree(node);
        }
    }

    findMin() {
        let current = this.root;
        while (current.left !== null) {
            current = current.left;
        }
        return current.data;
    }

    findMax() {
        let current = this.root;
        while (current.right !== null) {
            current = current.right;
        }
        return current.data;
    }

    isPresent(data) {
        let current = this.root;
        while (current) {
            if (data === current.data) {
                return true;
            }
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right
            }
        }
        return false;
    }

    remove(data) {
        const removeNode = (node, data) => {
            if (node === null) {
                return null;
            }

            if (data === node.data) {
                if (node.left === null && node.right === null) {
                    return null;
                }

                if (node.left === null) {
                    return node.right;
                }

                if (node.right === null) {
                    return node.left;
                }

                let tempNode = node.right;
                while (tempNode.left !== null) {
                    tempNode = tempNode.left;
                }
                node.data = tempNode.data;
                node.right = removeNode(node.right, tempNode.data);
                return node;
            } else if (data < node.data ) {
                node.left = removeNode(node.left, data);
                return node;
            } else{
                node.right = removeNode(node.right, data);
                return node;
            }
        }
        this.root = removeNode(this.root, data);
    }
}

const binarySearchTree = new BST();
binarySearchTree.add(5)
binarySearchTree.add(4)
binarySearchTree.add(22)
binarySearchTree.add(2)
binarySearchTree.add(17)
binarySearchTree.add(14)
binarySearchTree.add(49)
binarySearchTree.add(82)
binarySearchTree.add(10)
binarySearchTree.add(15)

console.log(binarySearchTree.findMin())
console.log(binarySearchTree.findMax())
console.log(binarySearchTree.isPresent(49))
console.log(binarySearchTree.remove(49))
console.log(binarySearchTree.isPresent(49))

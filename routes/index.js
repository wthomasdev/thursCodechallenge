var express = require('express');
var router = express.Router();
const fs = require('fs')

router.get('/', function(req, res, next) {
  res.status(200).send("hello");
});

router.put('/', function(req, res, next) {
    // const response = traverseTree(JSON.parse(req.body), output, true, true);
    if (response) {
      res.status(200).json(response);
      
    } else {
      res.status(404)
    }
 
});

module.exports = router;


const result = [];

var obj = JSON.parse(fs.readFileSync('input.txt', 'utf8'));

const traverseTree = (input, output = "", isFirst, isLeft) => {
  if (input) {
    if (isFirst) {
      output += input['value']
    }
    if (input['left']) {
      output += input['left']['value']
      // traverseTree(input['left'], output, false, true)
    } 
  }
    return output
  
}

console.log(traverseTree(obj, "", true, true))

const caculateDepth = (input, direction) => {
  let counter = 0;
  if (input[direction] !== null) {
    counter += 1;
    let node = [direction]
    calculateDepth(input[direction], direction)
  }
  return counter
}
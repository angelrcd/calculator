export default class Calculator {
  constructor(){
    this["+"] = function(a, b){
      return a + b
    }
    this["-"] = function(a, b){
      return a - b
    }
    this["×"] = function(a, b){
      return a * b
    }
    this["÷"] = function(a, b){
      return a / b
    }
  }

  calculateTwoNumbers(operationStr) {
    const [operator1, operation, operator2] = operationStr.split(" ")

    return this[operation](+operator1, +operator2)
  }
}
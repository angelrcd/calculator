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

  calculate(operationStr){
    return this.calculateTwoNumbers(operationStr)
  }

  calculateTwoNumbers(operationStr) {
    const [operator1, operation, operator2] = operationStr.split(" ")

    return this[operation](+operator1, +operator2)
  }
}
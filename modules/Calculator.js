class Calculator {
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
}
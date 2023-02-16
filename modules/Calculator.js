import formatOperation from "./formatOperations"

export default function calculate(operationStr){
  operationStr = formatOperation(operationStr)

  return eval(operationStr)
}

import formatOperation from "./formatOperations"

export default function calculate(operationStr){
  operationStr = formatOperation(operationStr)
  try {
    if(operationStr.includes('**') || operationStr.includes('//')){
      throw new Err
    }
  
    return eval(operationStr)
  } catch(err) {
    return 'Syntax Error'
  }
}

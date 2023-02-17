import formatOperation from "./formatOperations"

export default function calculate(operationStr,ans = 0){
  try {
    operationStr = formatOperation(operationStr, ans)
    if(operationStr.includes('**') || operationStr.includes('//')){
      throw new Err
    }
  
    return eval(operationStr)
  } catch(err) {
    return 'Syntax Error'
  }
}

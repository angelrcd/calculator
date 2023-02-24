import formatOperation from "./formatOperations"

export default function calculate(operationStr,ans = 0){
  try {
    operationStr = formatOperation(operationStr, ans)
    if(operationStr.includes('**') || operationStr.includes('//')){
      throw new Err
    }
  
    const result = eval(operationStr)
    if(!isFinite(result)){
      throw new Err
    }

    return +result.toFixed(10)

  } catch(err) {
    return 'Syntax Error'
  }
}

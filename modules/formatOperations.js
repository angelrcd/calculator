export default function formatOperation(operationStr){
  const possibleOperators = '+-×÷'
  operationStr = operationStr.split('')

  for(let i=0; i<operationStr.length; i++){
    const currentChar = operationStr[i]

    if(possibleOperators.includes(currentChar)){
      operationStr.splice(i, 0, ' ')
      operationStr.splice(i+2, 0, ' ')
      i+= 3
    }
  }

  return operationStr.join('')
}
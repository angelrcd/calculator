export default function formatOperation(operationStr){
  let copy = operationStr
  
  copy = copy.replaceAll('×', '*')
             .replaceAll('÷', '/')
             
  return copy
}
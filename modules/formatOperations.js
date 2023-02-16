export default function formatOperation(operationStr){
  let copy = operationStr
  copy = copy.replace('×', '*')
             .replace('÷', '/')
             
  return copy
}
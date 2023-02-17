export default function formatOperation(operationStr, ans = 0){
  let copy = operationStr

  if(operationStr.includes('AnsA') || 
     operationStr.includes('Ans.') ||
     operationStr.includes('.Ans')){
      throw new Error
     }
  
  copy = copy.replaceAll('×', '*')
             .replaceAll('÷', '/')
             .replaceAll('Ans', String(ans))
             
  return copy
}
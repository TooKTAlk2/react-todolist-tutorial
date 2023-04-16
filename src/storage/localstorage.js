
export function getItem(key){
  return JSON.parse(localStorage.getItem(key)) || ''
}
export function setItem(key,value){
  if (key === null || value === null){
    console.log('저장할 데이터가 없습니다.')
  }
  localStorage.setItem(key, JSON.stringify(value))
}

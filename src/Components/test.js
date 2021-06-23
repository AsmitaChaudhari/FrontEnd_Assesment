let arr = [];
for (let i =1; i<=100 ; i++){
    arr.push(i)
}
console.log(arr) 
const newArr = []
arr.map( (a) => {
  
  if( a%3 === 0 && a%5 === 0){
    newArr.push('foobar')
  }
  else{
    newArr.push(a)
  }
})

console.log(newArr)
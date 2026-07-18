let exchangerate={
   USD:{
      USD:1,
      INR:6.7,
      GBP:8.9,
      EUR:6,
   },
   INR:{
      USD:1.5,
      INR:1,
      GBP:8.9,
      EUR:6,
   },
GBP:{
      USD:17,
      INR:6.7,
      GBP:1,
      EUR:6,
   },
   EUR:{
      USD:18,
      INR:6.7,
      GBP:8.9,
      EUR:1,
   }
}




let button=document.querySelector('.convert')

button.addEventListener('click',() =>{
   let input=parseFloat(document.querySelector('input').value)
   


let from=document.querySelector('.from').value


let to=document.querySelector('.to').value

if (isNaN(input)|| input <= 0) {
   alert('please enter your number')
   return;
}

let rate=exchangerate[from][to]

let convertedamt=input*rate

document.querySelector('.secp').innerHTML=`${input}${from}=${convertedamt.toFixed(2)}${to}`



} )
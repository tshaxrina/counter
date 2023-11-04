let plus = document.querySelector('.plus')
let minus = document.querySelector('.minus')
let random = document.querySelector('.random')
let o = document.querySelector('.null')
let num = document.querySelector('.num')


plus.onclick = () => {
  let number = num.textContent;    
  number++;
  num.textContent = number;

   if (num.textContent > 100) {
      num.textContent = 100
}; 

}

minus.onclick = () =>{
  let number = num.textContent;
  number--;
  num.textContent = number;
if (num.textContent < -100){
  num.textContent = -100
} 
};


o.onclick =  () => {
  num.textContent = 0;
};


random.onclick =  () => {
  let number = Math.floor(Math.random() *101)
  num.textContent = number; 
};
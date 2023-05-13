const record = document.querySelector('.record')
const points =document.querySelector('.points')
const body = document.querySelector('.body')
const obj = document.querySelector('.obj')
const obj2 = document.querySelector('.obj2')
const esquerda = document.querySelector('.esquerda')
const direita = document.querySelector('.direita')
const pular = document.querySelector('.pular')
const jogador = document.querySelector('.jogador')
const jogadorps=+window.getComputedStyle(jogador).top.replace('px','')
var x=jogadorps
function fn1(){
  
  x+=50
  jogador.style.top=`${x}px`

}
function fn2(){
  x-=50
  jogador.style.top=`${x}px`
}
function jup1(){
  jogador.classList.add('jupp')
  setTimeout(()=>{jogador.classList.remove('jupp')},1000)
}
const jogadorjup=+window.getComputedStyle(jogador).left.replace('px','')
p=jogadorjup
function jup2(){
  p+=100
  jogador.style.left=`${p}px`
  setTimeout(()=>{jogador.style.left='110px'},500)
}

const random = setInterval(()=>{
list =['20','40','80','120','160','200','240','280','320','360','400','440','480','520','560','600','640','680','720']
var ps =list[Math.floor(Math.random()*18)]
obj2.style.top=`${ps}px`
},2000)
var tempoR=0
var tempo=0
const loop = setInterval(()=>{
  const xo = +window.getComputedStyle(obj).top.replace('px', '')
  const yoy = +window.getComputedStyle(obj2).left.replace('px', '')
  const yox = +window.getComputedStyle(obj2).top.replace('px', '')
  const xj = +window.getComputedStyle(jogador).top.replace('px', '')
  const yj = +window.getComputedStyle(jogador).left.replace('px', '')
  var c2 =Math.pow((xo-xj),2)
  var c = Math.pow(c2,2)
  var t2=Math.pow((xj-yox),2)+Math.pow((yj-yoy),2)
  var t=Math.pow(t2,2)
  
  console.log(t)
  tempoR+=1
  
   if (c>0 && c<11000000 && yj<=190 || t>0 && t<11000000){
      body.style.background='red'
      
      record.innerHTML=`RECORD:${tempoR}`
      tempo=tempo-tempo
  }else{body.style.background='blue'
    tempo+=1
    points.innerHTML='SCORE: '+tempo
    tempoR=tempo
  }
},100)

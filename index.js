
function Start(){
   
setInterval(()=>{
    let time= new Date().toLocaleTimeString()
    let date1= new Date().toLocaleDateString('en-bs')
    console.log(time);
    let time1=document.getElementById('time')
    let date=document.getElementById('date')

    time1.innerHTML=`Current Time: ${time}`
    date.innerHTML=`Current Datet: ${date1}`

},1000)


setTimeout(()=>{
    let e1=document.getElementById("thero-meter")
      e1.innerHTML="&#xf2cb";
      e1.style.color='black'
},1000)

setTimeout(()=>{
    let e1=document.getElementById("thero-meter")
      e1.innerHTML="&#xf2ca";
      e1.style.color='white'
},2000)

setTimeout(()=>{
    let e1=document.getElementById("thero-meter")
    e1.innerHTML="&#xf2c9"
    e1.style.color='yellow'
},3000)

setTimeout(()=>{
    let e1=document.getElementById("thero-meter")
    e1.innerHTML="&#xf2c8;"
    e1.style.color='yellow'
},4000)

setTimeout(()=>{
    let e1=document.getElementById("thero-meter")
    e1.innerHTML="&#xf2c7;"
    e1.style.color='red'
},5000)


}
Start()
setInterval(Start,5000)




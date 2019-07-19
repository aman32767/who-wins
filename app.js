var h1=document.querySelector("h1");
var p = document.querySelector("p");
var btn = document.querySelectorAll("button")

//var txt = document.querySelector(".texta").value;
var input=document.querySelector("input")
var x=0;
var y=0;
z = input.value;

input.addEventListener("change", function () {
  z = input.value;
  p.innerHTML = `Playing to : ${z}`
})
h1.innerHTML = `${x} to ${y}`;
p.innerHTML = `Playing to : ${z}`

// h1.innerHTML=`${x} to ${y}`;
// p.innerHTML=`Playing to : ${z}`


btn[0].addEventListener('click',function(){
  // var x=1,y=0;
 
  if(x<z-1)
  {
    x++;
    h1.innerHTML = `${x} to ${y}`;

  }else{
    alert("player 1 wins !!! reset to start over")
    document.querySelector(".buttonb").disabled = true;
    document.querySelector(".buttona").disabled = true;
    h1.innerHTML = `${++x} to ${y}`;
  }
})
btn[1].addEventListener('click', function () {
  if (y < z-1) {
    y++;
    h1.innerHTML = `${x} to ${y}`;
  } else{
    alert("player 2 wins !!! reset to start over")
    h1.innerHTML = `${x} to ${++y}`;
    document.querySelector(".buttonb").disabled = true;
    document.querySelector(".buttona").disabled = true;
    
  }
})

btn[2].addEventListener('click',function(){
  x=0;
  y=0;
  document.querySelector(".buttona").disabled = false;
  document.querySelector(".buttonb").disabled = false;
  h1.innerHTML = `${x} to ${y}`;


})

input.addEventListener('click',function(){
  z=input.value;
  p.innerHTML = `Playing to : ${z}`
})
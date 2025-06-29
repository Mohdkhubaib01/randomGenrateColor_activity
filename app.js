let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let div = document.querySelector(".container");

function getRandomColor(){
    let red = Math.floor(Math.random()* 255);
    let green = Math.floor(Math.random()* 255);
    let blue = Math.floor(Math.random()* 255);

    let color = (`rgb(${red},${green},${blue})`);
    return color;
}

btn.addEventListener("click",function(){
   let randomColor=getRandomColor();
   h1.innerHTML = randomColor;
   div.style.backgroundColor=randomColor;
   
   console.log("updated color")
})
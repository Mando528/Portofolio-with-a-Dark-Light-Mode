var button=document.querySelector(".icon");
var body=document.querySelector('body');

if(localStorage.getItem("theme")===null){
    localStorage.setItem("theme","light");
}
if(localStorage.getItem("theme")==="dark"){
    body.classList.add("active");
    button.src='images/sun.png';
}
else if(localStorage.getItem("theme")==="light"){
    body.classList.remove("active");
    button.src='images/moon.png';
}
button.onclick=()=>{
    body.classList.toggle("active");
    if(body.classList.contains("active")){
        button.src='images/sun.png';
        localStorage.setItem("theme","dark")
    }
    else{
        button.src='images/moon.png';
        localStorage.setItem("theme","light")
    }
}
function answer() {
     const operator = document.querySelector('input[name="operator"]:checked').value;
     let one = parseInt(document.getElementById("one").value);
     let two = parseInt(document.getElementById("two").value);

     let result;
     switch (operator) {
        case '+':
            result = one+two;
            break;
     case '-':
            result = one-two;
            break;
            case '*':
            result = one*two;
            break;
            case '/':
            result = one/two;
            break;
        default:
            result = "Errr !"
            break;
     }
    document.getElementById("addition").innerHTML = result ;
}

const elem = document.getElementById("btn");
function movex() {
        let one = document.getElementById("one").value;
     let two = document.getElementById("two").value; 
     const operator = document.querySelector('input[name="operator"]:checked');
    //  console.log(!isNaN(parseInt(one))  , !isNaN(parseInt(two))  , operator != null);
     
     if (!(!isNaN(parseInt(one))  && !isNaN(parseInt(two))  && operator != null)){

         elem.style.top = Math.random()*200+"px";
        elem.style.left = Math.random()*200+"px";
     }

}



const hero = document.getElementsByClassName("hero")[0];

hero.addEventListener("click",()=>{
    data();
});

const data = ()=>{
    document.getElementById("who").innerHTML = "SRK";
}


// const btnn = document.getElementById("chenge");
// var black = false;
// btnn.addEventListener("click",()=>{
//     let color = black ? "black":"white";
//     document.body.style.background =color;
//     // document.body.style.color =color;

//     black=!black;
// })


const toggle = document.getElementById("chenge");
toggle.addEventListener("click",()=>{
    document.body.classList.toggle("darkMode");
});
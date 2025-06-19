function dist() {
    return new Promise((resolve,reject)=>{

        let api = fetch("/api.json");
        api.then((res)=>{
            if (res.ok == true) {
                // console.log(res.json());
                resolve(res.json());
                console.log(res);
                console.log(res.status);
                
                
            }else{
                reject("Opps !! something went wrong");
            }
        })
    })
}


// dist().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);   
// });




// async await 
function myFun() {
    return 1;
}

// console.log((myFun()));


async function myFunc() {
    return 1;
}

// console.log(myFunc());

async function hero() {
    let val =  new Promise((res,rej)=>{
        setTimeout(() => {
           res(console.log("Hi there !"));
        }, 3000);
    })
    await val;
}

// hero().then((res)=>{
//     console.log("got it !");
    
// }).catch((err)=>{
//     console.log(err);
    
// })



document.writeln("This is new item in the page !");


console.log(document.body.style.color = "green");

console.log(document.body.children);
console.log(document.body.children[0].innerHTML = "<marquee>Wow !!!</marquee>");

console.log(document.body.children[4].innerText = "<marquee>how ???</marquee>");

document.getElementById("heart").innerHTML="⚡";


console.log(

    document.getElementsByClassName("myClass")[0].innerHTML = "Haha 😁"
);

console.log(document.getElementsByTagName("div"));
console.log(document.getElementsByTagName("div")[3]);

function validate() {
    
    console.log(document.getElementsByName("inpName")[0].value);
}


console.log(document.querySelector("div"));
console.log(document.querySelectorAll("div"));

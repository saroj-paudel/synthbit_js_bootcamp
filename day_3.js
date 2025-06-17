        // Object
        // object is denoted by object literal {}

        // let obj = { key: "value" }
        // Object.freeze();
        // console.log(obj.key = "newValue");
        // console.log(obj);
        

        // let obj = {key : "value"}
        // Object.freeze(obj);
        // obj.key = "newValue";
        // console.log(obj);
        
        // new keyword is uded to invoke the constructor
        // const val =  new Object();
        // val.name="Saroj";
        // val.address="BHW"
        // console.log(val);


    //     const data = [{
    //         name:"saroj",
    //         level:"bachelor",
    //         address:[{
    //             temporary:["BHW","BTL"],
    //             permanent: ["K.V","4.No",10]
    //         }]
    //     },
    // {
    //         name:"saroj2",
    //         level:"bachelor",
    //         address:[{
    //             temporary:["BHW2","BTL2",5],
    //             permanent: ["K.V2","4.No B",10]
    //         }]
    //     }
    // ]

//     console.log(data);
//     console.log(data[0]);
//     console.log(data[0].address);
//     console.log(data[0].address[0]);
//     console.log(data[0].address[0].temporary);
//     console.log(data[0].address[0].temporary[1]);

// console.log(typeof(data));


// console.log(data.map((value,index, array)=>{
//     return value.address.map((val)=>{
//         return val.permanent.filter((value)=>{
//             return value==10
//         })
//     })
// }));



// const arr = [1,2,3,4]
// arr.map((value,index,array)=>{
//     console.log(value, index, array);    
// });


// try catch 
// let x = 20;
// let y = 10;
// try {
//     console.log(x+y);  
// } catch (error) {
//     console.error(error);   
// } finally{
//     console.log("Executed Success !");
    
// }


function validate() {
    let message = document.getElementById("message");
    message.innerHTML="";
    let texting = document.getElementById("texting").value;
    try {
        if (texting.trim()=="") {
            throw new Error("Opps ! the field cannot be emply!");
        }else if(!isNaN(texting)){
            throw new Error("Opps ! the input is not text!");
        }else if(!texting.includes("@")){
            throw new Error("Opps ! you should include @!");
        }
    } catch (error) {
        message.innerHTML=error;
    }

}


// Promise

function distance() {
    return new Promise((resolve,reject)=>{
        // resolve("I'll be there for you !");
        // reject("GoTo hell !");
        resolve({id:1,name:"saroj"})
    })
}

distance().then((res)=>{
    console.log(res);
    console.log("yes i found one !");
    
    
}).catch((err)=>{
    console.log(err);  
    console.log("Padhai karley !");
    
})
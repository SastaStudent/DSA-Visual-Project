let pushbtn=document.querySelector('#pushback')
let pushValue=document.querySelector('#ipush')
let output=document.querySelector('#output')
let display=document.querySelector('#display')
pushbtn.addEventListener('click',InsertFun)
 
let myArr=[];

function InsertFun(){
    // alert("Clicked");
    let value=pushValue.value;
    pushValue.value=""
    if(value=="") {
        display.innerHTML=""
        display.innerHTML="Pls, Insert integer value"
        return
    }
    myArr.push(value);
    let newDiv = document.createElement('div');
    newDiv.innerHTML=value;
    newDiv.style.border='1px solid red';
    newDiv.style.padding='5px'
    output.appendChild(newDiv)


}

// remove
let pop = document.querySelector('#pop')
pop.addEventListener('click',()=>{
    if(myArr.length==0)
    {
        display.innerHTML=""
        display.innerHTML="No, Item left to delete"
        return;
    }
    myArr.shift();
    output.removeChild(output.firstChild)

})
//size
let size=document.querySelector("#size")
size.addEventListener('click',()=>{
    display.innerHTML=""
        display.innerHTML=`Size of Vector is ${myArr.length}`
    
})

//front
let front=document.querySelector("#front")
front.addEventListener('click',()=>{
    if(myArr.length==0)
        {
            display.innerHTML=""
            display.innerHTML="No, Item left"
            return;
        }
        display.innerHTML=""
        display.innerHTML=`Front element is ${myArr[0]}`

})

//back
let back=document.querySelector("#back")
back.addEventListener('click',()=>{
    if(myArr.length==0)
        {
            display.innerHTML=""
            display.innerHTML="No, Item left"
            return;
        }
        display.innerHTML=""
        display.innerHTML=`Front element is ${myArr[myArr.length-1]}`

})

 
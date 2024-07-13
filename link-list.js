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
    if(output.lastChild)output.removeChild(output.lastChild)
    myArr.push(value);
    let newDiv = document.createElement('div');
    newDiv.innerHTML=value;
    newDiv.style.border='1px solid red';
    newDiv.style.padding='5px'
    output.appendChild(newDiv)
    const arrowElement = document.createElement('div');
    arrowElement.innerHTML = `
  <svg width="30" height="10">
    <line x1="0" y1="5" x2="20" y2="5" stroke="black" stroke-width="2"/>
    <line x1="20" y1="5" x2="15" y2="0" stroke="black" stroke-width="2"/>
    <line x1="20" y1="5" x2="15" y2="10" stroke="black" stroke-width="2"/>
  </svg>
`;
    output.appendChild(arrowElement);
    const nulldiv= document.createElement('div');
    nulldiv.innerHTML="NULL"
    output.appendChild(nulldiv)


}

// remove last
let pop = document.querySelector('#pop')
pop.addEventListener('click',()=>{
    if(myArr.length==0)
    {
        display.innerHTML=""
        display.innerHTML="Link-List is Empty"
        return;
    }
    myArr.pop();
    output.removeChild(output.lastChild)
    output.removeChild(output.lastChild)
    output.removeChild(output.lastChild)
    const nulldiv= document.createElement('div');
    nulldiv.innerHTML="NULL"
    output.appendChild(nulldiv)

})
// remove first
let popH = document.querySelector('#popH')
popH.addEventListener('click',()=>{
    if(myArr.length==0)
    {
        display.innerHTML=""
        display.innerHTML="Link-List is Empty"
        return;
    }
    // myArr.();
    myArr.shift();
    output.removeChild(output.firstChild)
    output.removeChild(output.firstChild)

})
// remove ith
let popI = document.querySelector('#popI')
let ithpop = document.querySelector("#ithpop")
popI.addEventListener('click',()=>{
    let value=ithpop.value
    ithpop.value=""
    if(value=="" || value<0 || value >=myArr.length)
    {
        display.innerHTML=""
        display.innerHTML="Pls, Insert integer value OR Valid index"
        return

    }
    if(myArr.length==0)
    {
        display.innerHTML=""
        display.innerHTML="Link-List is Empty"
        return;
    }
    // myArr.();
    myArr.splice(value,1)
    const index= 2*(value)

    output.removeChild(output.children[index])
    output.removeChild(output.children[index])

})
//Find ith
let findn = document.querySelector('#findn')
let ithfind = document.querySelector("#ithfind")
findn.addEventListener('click',()=>{
    let value=ithfind.value
    ithpop.value=""
    if(value=="" || value<0 || value >=myArr.length)
    {
        display.innerHTML=""
        display.innerHTML="Pls, Insert integer value OR Valid index"
        return

    }
    if(myArr.length==0)
    {
        display.innerHTML=""
        display.innerHTML="Link-List is Empty"
        return;
    }
    
    display.innerHTML=""
    display.innerHTML=`${value}-th value is ${myArr[value]}`
    

})
//size
let size=document.querySelector("#size")
size.addEventListener('click',()=>{
    display.innerHTML=""
        display.innerHTML=`Total Element is ${myArr.length}`
    
})

 
 
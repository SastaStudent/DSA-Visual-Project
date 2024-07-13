let pushbtn = document.querySelector('#pushback');
let pushValue = document.querySelector('#ipush');
let output = document.querySelector('#output');
let display = document.querySelector('#display');
let myArr = [];

pushbtn.addEventListener('click', InsertFun);

function InsertFun() {
  let value = pushValue.value;
  if(myArr.length===11){
    alert("ScreenFull")
    return
  }
  pushValue.value = "";
  if (value === "") {
    display.innerHTML = "Please insert an integer value";
    return;
  }
  myArr.push(value);
  let newDiv = document.createElement('div');
  newDiv.innerHTML = value;
  newDiv.style.border = '1px solid red';
  newDiv.style.height='50px'
  newDiv.style.width='50px'
  newDiv.style.display='flex'
  newDiv.style.justifyContent='center'
  newDiv.style.alignItems='center'
  newDiv.style.padding = '5px';
  // Insert new element at the beginning (top of stack)
  output.insertBefore(newDiv, output.firstChild);
}

// remove
let pop = document.querySelector('#pop');
pop.addEventListener('click', () => {
  if (myArr.length === 0) {
    display.innerHTML = "No item left to delete";
    return;
  }
  myArr.pop();
  output.removeChild(output.firstChild);
});

// size
let size = document.querySelector("#size");
size.addEventListener('click', () => {
  display.innerHTML = `Size of Stack is ${myArr.length}`;
});

// top
let topBtn = document.querySelector("#top");
topBtn.addEventListener('click', () => {
  if (myArr.length === 0) {
    display.innerHTML = "No item left";
    return;
  }
  display.innerHTML = `Top element is ${myArr[myArr.length - 1]}`;
});

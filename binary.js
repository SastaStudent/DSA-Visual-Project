var insert = document.querySelector("#insert");
var init = document.querySelector(".in-act");
insert.addEventListener('click', fun);
var size = 0;

function fun() {
    var input = document.querySelector("#input");
    var Pdiv=document.createElement('div');
    var mydiv = document.createElement('div');
    mydiv.style.padding = '4px';
    mydiv.style.fontSize = '2em';
    mydiv.style.background = '#09dceb';
    mydiv.style.border = '1px solid black';
    mydiv.textContent = input.value;
    var indexDiv=document.createElement('div');
    indexDiv.textContent=size;
    indexDiv.style.textAlign='center';
    
    Pdiv.appendChild(mydiv);
    Pdiv.appendChild(indexDiv);
    if (input.value != "" && size < 15) {
        init.appendChild(Pdiv);
        size++;
    }
    if (size >= 15) {
        alert("Maximum Length Reached:");
    }
    input.value = "";
}

// Main Searching
var find = document.querySelector("#find");
var target = document.querySelector("#target");
var out = document.querySelector("#out-act"); 
find.addEventListener('click', binary);

function binary() {
    if (target.value == "") {
        alert("Please Enter Target Value");
    } else {
        var value = parseInt(target.value);
        target.value = "";
        var parent = document.querySelector(".in-act");
        var childs = parent.querySelectorAll('div > div:first-child');
        
        function search(st, end) {
            // base case
            // alert(end);
            if (st > end) {

                out.innerHTML = "";
                var newDiv = document.createElement('div');
                newDiv.style.fontSize = '1.6em';
                newDiv.innerHTML=value +" is not found in the Array";
                out.prepend(newDiv);
                return;
            }
            
            var mid = Math.floor((st + end) / 2);
            // alert(mid);
            setTimeout(function(){
                childs[mid].style.transform = 'scale(1.5)';
                childs[mid].style.background='#09dceb';
                childs[mid].style.border='1px solid black';
                childs[mid].style.zIndex='5';
                childs[mid].style.transition = 'transform 1s';
                out.innerHTML = "";
                var newDiv = document.createElement('div');
                newDiv.style.fontSize = '1.6em';
                newDiv.innerHTML = 'Comparing Target ' + value + ' with ' + childs[mid].textContent;
                out.prepend(newDiv);

                setTimeout(function () {
                

                    if (parseInt(childs[mid].textContent) == value) {
                        newDiv.innerHTML += ' Match found at index '+(mid-1);
                        childs[mid].style.transform = 'scale(1)';
                    } else if (parseInt(childs[mid].textContent) > parseInt(value)) {
                        childs[mid].style.transform = 'scale(1)';
                        search(st, mid - 1);
                    } else {
                        childs[mid].style.transform = 'scale(1)';
                        search(mid + 1, end);
                    }
                }, 2000);//delay before scale out
                childs[mid].style.zIndex='0';
            },1000);//delay before scalling

            
        }

        search(1, size);
    }
}

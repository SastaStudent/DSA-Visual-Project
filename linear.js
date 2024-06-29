
var insert = document.querySelector("#insert");
var init = document.querySelector(".in-act");
insert.addEventListener('click', fun);
size = 0;
function fun() {

    var input = document.querySelector("#input");
    var mydiv = document.createElement('div');
    // mydiv.style.width = '5px';
    // mydiv.style.height = '5px';
    mydiv.style.padding = '4px';
    mydiv.style.fontSize = '2em';
    mydiv.style.background='#09dceb'
    mydiv.style.border = '1px solid black';
    mydiv.textContent = input.value;
    if (input.value != "" && size < 15) {
        init.appendChild(mydiv);
        size++;
    }
    if (size >= 15) {
        alert("Maximum Length Reached:");
    }

    input.value = "";
}


var find = document.querySelector("#find");
find.addEventListener('click', fun2);
function fun2() {
    var out=document.querySelector("#out-act");
    out.innerHTML="";
    var target = document.querySelector("#target");
    if (target.value == "") {
        alert("Insert Target Number:");
    }
    else {
        
         
        var parent = document.querySelector(".in-act");
        var childs = parent.querySelectorAll('div');
        // var out=document.querySelector("#out-act");
         var found=false;
        function delayedScale(index) {
            if (index <size) {
                
                setTimeout(function() {
                    childs[index].style.transform = 'scale(1.5)';
                    childs[index].style.zIndex='1';
                    childs[index].style.transition = 'transform 1s';
                    
                    setTimeout(function() {
                        out.innerHTML="";
                        var newDiv = document.createElement('div');
                        newDiv.style.fontSize='1.6em';
                        if (childs[index].textContent == target.value) {
                          
                            newDiv.innerHTML='Comparing Target '+ target.value +' with '+childs[index].textContent + ' Match found at '+ index;
                            out.prepend(newDiv);
                            childs[index].style.transform = 'scale(1)';
                          
                            found=true;
                            delayedScale(size);
                            
                        }else{
                            // var newDiv = document.createElement('div');
                            newDiv.innerHTML='Comparing Target '+ target.value +' with '+childs[index].textContent + ' Not Matched';
                            out.prepend(newDiv);
                            childs[index].style.transform = 'scale(1)';
                            delayedScale(index + 1);
                        }
                        childs[index].style.zIndex='0';
                    }, 2000); // Time for scaling down
                }, 1000); // Delay before each scale up
            }
            else 
            {
                if(found==false){
                    out.innerHTML="";
                    var newDiv = document.createElement('div');
                    newDiv.style.fontSize='1.6em';
                    newDiv.textContent="Given Target "+target.value+' is Not found';
                    out.prepend(newDiv);
                }
                target.value="";
            }
        }

        // Start the delayed scaling from the first child
        delayedScale(0);
        // target.value="";
    }
    // target.value="";
    // alert("target");
};
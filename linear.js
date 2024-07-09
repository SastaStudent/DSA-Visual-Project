
var insert = document.querySelector("#insert");
var init = document.querySelector(".in-act");
insert.addEventListener('click', fun);
size = 0;
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
        var childs = parent.querySelectorAll('div> div:first-child');
        var out=document.querySelector("#out-act");
         var found=false;
        function delayedScale(index) {
            if (index <=size && found===false) {
                
                setTimeout(function() {
                    childs[index].style.transform = 'scale(1.5)';
                    childs[index].style.zIndex='1';
                    childs[index].style.transition = 'transform 1s';
                    
                    setTimeout(function() {
                        out.innerHTML="";
                        var newDiv = document.createElement('div');
                        newDiv.style.fontSize='1.6em';
                        if (childs[index].textContent == target.value) {
                            childs[index].style.transform = 'scale(1)';
                            index=index-1;
                            newDiv.innerHTML=target.value +' found at '+ index;
                            out.prepend(newDiv);
                            // childs[index].style.transform = 'scale(1)';
                          
                            found=true;
                            delayedScale(size+1);
                            
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
        delayedScale(1);
        // target.value="";
    }
    // target.value="";
    // alert("target");
};
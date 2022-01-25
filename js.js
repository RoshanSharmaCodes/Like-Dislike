var counter = 0 ;
document.getElementById('counts').innerText = counter;
 
function inc(){
    counter = counter+1;
    document.getElementById('counts').innerText = counter;
}

function dec(){
    counter =counter-1;
    document.getElementById('counts').innerText = counter;
}
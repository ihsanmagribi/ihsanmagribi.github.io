const button = document.getElementById("btn");
button.addEventListener("click", function showInfo(){
    const x = document.getElementById("info");
    if(x.style.display == "none"){
        x.style.display = "block";
    }else{
        x.style.display = "none";
    }

});
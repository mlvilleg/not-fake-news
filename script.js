var button = document.getElementById("button");
var button_section = document.getElementById("button_section");

var alertCount = 0;


function createButton(){
    let btn = document.createElement("button");
    btn.innerHTML = "Random Button";
    btn.setAttribute('class',"btn btn-outline-info btn-xl animate__animated animate__bounce animate__repeat-2");
    button_section.appendChild(btn);

}


button.addEventListener("mouseenter", function() {

    if (alertCount == 0){
        alert("Are you sure you want to proceed?");
        alertCount += 1;
        
    }else if (alertCount == 1){
        alert("ARE YOU REAAAAAALY SURE YOU WANT TO PROCEEED?");
        alertCount += 1;

    }else if(alertCount == 2){
        alert("Fine, but don't say I didn't warn you.");
        alertCount += 1;
    }else if (alertCount ==3){
        alertCount += 1
        createButton();
    }

   
})


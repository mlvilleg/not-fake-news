var button = document.getElementById("button")

var alertCount = 0;


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
    }

   
})
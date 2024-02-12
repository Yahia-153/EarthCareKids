const audio = new Audio('../hi kids i am Zain i .mp3');
    function hiSound() {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    }

    

    function burger(){
        if(document.getElementById("burger").checked){
            document.getElementById("burgerDiv").style.right="0";
        }else{
        document.getElementById("burgerDiv").style.right="-100%";
    }
    }
   
    
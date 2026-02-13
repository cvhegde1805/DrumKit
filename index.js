
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var b=this.innerHTML;
        makesound(b);
});}
document.addEventListener("keypress",function(event){
    makesound(event.key);
});
function makesound(key){
    switch(key){
            case "w":
                var aud=new Audio("sounds/tom-1.mp3");
                aud.play();
                break;
             case "a":
                var au=new Audio("sounds/tom-2.mp3");
                au.play();
                break;
             case "s":
                var audi=new Audio("sounds/tom-3.mp3");
                audi.play();
                break;
             case "d":
                var audii=new Audio("sounds/tom-4.mp3");
                audii.play();
                break; 
             case "j":
                var audu=new Audio("sounds/snare.mp3");
                audu.play();
                break;
            case "k":
                var audui=new Audio("sounds/crash.mp3");
                audui.play();
                break;
            case "l":
                var audl=new Audio("sounds/kick-bass.mp3");
                audl.play();
                break;
            default:
                console.log(b)
        }
}

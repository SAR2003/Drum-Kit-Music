var n=document.querySelectorAll(".drum").length;
// detect click event
for(var i=0;i<n;i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click",function () {
    
    var text=this.textContent;
    console.log(text);
    
    makeSound(text);
    addAnimation(text);
   
    
}
);
}

// in jQuery
$(".drum").click(function(){
    var text=this.textContent;
    makeSound(text);
    addAnimation(text);
});


// to detect keboard event
document.addEventListener("keypress",function(event){
    console.log(event);
    makeSound(event.key);
    addAnimation(event.key);
});

// in jQuery
// $(document).keypress(function(event){
//     console.log(event);
//     makeSound(event.key);
//     addAnimation(event.key);

// });

function makeSound(key)
{
    var text=key;
    switch (text)
    {
        case "w":
            var a=new Audio("sounds/tom-1.mp3");
            a.play();
        break;

        case "a":
            var a=new Audio("sounds/tom-2.mp3");
            a.play();
        break;

        case "s":
            var a=new Audio("sounds/tom-3.mp3");
            a.play();
         break; 

        case "d":
                var a=new Audio("sounds/tom-4.mp3");
                a.play();
        break; 

        case "j":
            var a=new Audio("sounds/snare.mp3");
            a.play();
        break;


        case "k":
            var a=new Audio("sounds/crash.mp3");
            a.play();
        break;

        case "l":
            var a=new Audio("sounds/kick-bass.mp3");
            a.play();
        break;


        default:
            console.log(this.innerhtml);



        
             
            
    }
    
}
function addAnimation(key)
{
    var a=document.querySelector("."+key);
    a.classList.add("pressed");

    setTimeout(function(){

         a.classList.remove("pressed");
    },100);

    // setTimeout is used to execute the function after the limited time.
}


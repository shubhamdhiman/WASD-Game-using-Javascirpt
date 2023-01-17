var ball = document.getElementById("ball")
var fromTop = 0;
var fromLeft = 0;

    window.addEventListener("keypress",function(e){
        // console.log(e.keyCode)
        if(e.keyCode == 119){
            console.log("You pressed W")
            if(fromTop>=10){
                fromTop -= 10;
                ball.style.top = fromTop + "px"
            }
        }
        else if(e.keyCode == 115){
            console.log("You pressed S")
            if(fromTop<=390){
                fromTop += 10;
                ball.style.top = fromTop + "px";
            }
        }
        else if(e.keyCode == 97){
            console.log("You pressed A")
            // ball.style.left = "-10px"
            if(fromLeft>= 10){
                fromLeft -= 10;
                ball.style.left = fromLeft + "px"
            }
        }
        else if(e.keyCode == 100){
            console.log("You pressed D")
            if(fromLeft<=390){
                fromLeft += 10;
                ball.style.left = fromLeft + "px"
            }
        }
    })
    
    
    
    
    
// var buttons = document.querySelectorAll(".button")
// for(var i=0;i<buttons.length;i++){
//     buttons[i].addEventListener("keypress",function(e){
//         // console.log(e.keyCode)
//         if(e.keyCode == 119){
//             console.log("You pressed W")
//         }
//         else if(e.keyCode == 97){
//             console.log("You pressed A")
//         }
//         else if(e.keyCode == 115){
//             console.log("You pressed S")
//         }
//         else if(e.keyCode == 100){
//             console.log("You pressed D")
//         }
//     })
// }
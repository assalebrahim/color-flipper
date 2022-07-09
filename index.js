let simColors = ["blue", "red","purple", "yellow", 
                "pink", "green", "orange", "lime", "aqua", "navy",
                "coral", "teal", "black", "white", "grey", "brown",
                "indigo", "maroon"];



let h4 = document.querySelector("h4");
let anchor = document.querySelector("a");
let h3 = document.querySelector("h3");
let em = document.querySelector("em");
let buttonn = document.querySelector("button");




                document.querySelector("button").addEventListener("click", function(){
                   let simColorSelector = simColors[Math.floor(Math.random()*simColors.length)];
                    document.querySelector(".color").innerHTML = simColorSelector;
                    let colorEm = document.querySelector(".color");

                    if(simColorSelector === "white"){
                        colorEm.style.color = simColorSelector; 
                    document.body.style.backgroundColor = simColorSelector; 


                    h4.style.color = "#0088a9";


                        document.querySelectorAll("a")[0].style.color = "#0088a9";
                        document.querySelectorAll("a")[1].style.color = "#0088a9";


                        h3.style.color = "#edf0fa";
                        h3.style.backgroundColor = "#0088a9";


                        document.querySelector("em").style.backgroundColor = "#0088a9";


                        buttonn.style.backgroundColor = "white";
                        buttonn.style.border = "solid #0088a9";
                        buttonn.style.color = "#0088a9";
                     
                      

                    } else {
                    colorEm.style.color = simColorSelector; 


                    document.body.style.backgroundColor = simColorSelector; 


                    h4.style.color = "#edf0fa";


                        document.querySelectorAll("a")[0].style.color = "#edf0fa";
                        document.querySelectorAll("a")[1].style.color = "#edf0fa"; 


                        h3.style.backgroundColor = "#edf0fa"
                        h3.style.color = "#0088a9"


                        document.querySelector("em").style.backgroundColor = "#edf0fa"


                        buttonn.style.backgroundColor = "rgba(0,136,169,1)";
                        buttonn.style.border = "none";
                        buttonn.style.color = "#edf0fa";
                       
                      
                    }
                 
                })
          
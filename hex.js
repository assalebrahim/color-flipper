let  hexCode = [1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e"];

document.querySelector("button").addEventListener("click", function(){

    let hexx = '#'
    for(let i=0; i<6; i++){
        let hexCodeSelector = hexCode[Math.floor(Math.random()*hexCode.length)];

        hexx += hexCodeSelector;
        
    }
    document.body.style.backgroundColor = hexx;
    document.querySelector("em").innerHTML = hexx;
})



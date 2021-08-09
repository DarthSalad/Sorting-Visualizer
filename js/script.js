if(typeof document !== 'undefined'){
    var bars=[];
    const currentDiv = document.getElementById("bar");
    for(let i=0; i<100; i++){
        bars[i] = Math.floor(Math.random() * 100) + 1;
        var div = document.createElement("div");
        div.classList.add("bars");
        currentDiv.appendChild(div);
    }
    // console.log("done");
}



document.getElementById("btnShow").onclick = function(){
    
    let numTimes = document.getElementById("txtNumber").value;
    let sentence = document.getElementById("sentence").value;
    const unorderList = document.createElement("ul");
    
    for(let i = 1; i <= numTimes; i++ ){

      let ol = document.createElement("ol");
      ol.textContent = i + ". " + sentence;
      unorderList.appendChild(ol);

    }
    document.getElementById("results").innerHTML = "";
    document.getElementById("results").appendChild(unorderList);
}
function increment () { 
   var i = Number(document.getElementById("number").innerText)
    document.getElementById("number").innerText = i+1 

};

function decrement() {
   //var j = i+1;
var k = Number(document.getElementById("number").innerText)
    document.getElementById("number").innerText = k-1;
    
}

function neutral() {
    var l = Number(document.getElementById("number").innerText)
    document.getElementById("number").innerText = 0
}
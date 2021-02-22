//challenge 1 birth days calculator
function aDays(){
    var year = document.getElementById('myDate').Date;
    var x = document.getElementById("myDate").value;
  document.getElementById("demo").innerHTML = x;
    console.log(year)
    var d = new Date();
    var n = d.getFullYear();
    var result = (d.getFullYear() - year)*365;
    var h1 = document.createElement('h1')
    var ans = document.createTextNode('you are '+result+' days old');
    h1.setAttribute('id','age');
    h1.appendChild(ans);
    document.getElementById('flex-board-result').appendChild(h1);
}

function reset(){
    document.getElementById('age').remove();
}


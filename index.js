var left = document.getElementById("left");
var text2 = document.getElementById("text2");
var button2 = document.getElementById("button2");
var once = false;

var right = document.getElementById("right");
var text1 = document.getElementById("text1");
var button1 = document.getElementById("button1");
text1.onkeypress =function() {typing1()};
text2.onkeypress =function() {typing2()};

var para = document.createElement("p");
var t = document.createTextNode("User is typing...");
button2.addEventListener('click', handler1, false);
button1.addEventListener('click', handler2, false);


function handler1() {
    var span1 = document.createElement('p');
    var span2 = document.createElement('p');
    span1.className = "leftS";
    span2.className = "rightS";
    textarea1.appendChild(span1);
    textarea2.appendChild(span2);
    span1.textContent = text2.value;
    span2.textContent = text2.value;
    text2.value = "";
}

function handler2() {
    var span1 = document.createElement('p');//appending p - paragraph
    var span2 = document.createElement('p');
    span1.className = "rightS";
    span2.className = "leftS";
    textarea1.appendChild(span1);
    textarea2.appendChild(span2);
    span1.textContent = text1.value;
    span2.textContent = text1.value;
    text1.value = "";

}
 function typing1() {
    if(!once) {
        para.className = "center";
        para.appendChild(t);
        typingStatus2.appendChild(para);
        once=true;
    }
    button1.onclick = function() {para.removeChild(t); once=false;};
 }

function typing2() {
    if(!once) {
        para.className = "center";
        para.appendChild(t);
        typingStatus1.appendChild(para);
        once = true;
    }
    button2.onclick = function() {para.removeChild(t); once = false;};
 }
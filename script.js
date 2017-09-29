function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
document.addEventListener("DOMContentLoaded", function() {
    var add = document.createElement("button");
    add.innerText = "Add Square";
    document.body.appendChild(add);
    add.addEventListener("click", function(){
        var box = document.createElement("div");
        box.className = "box";
        box.style.backgroundColor = "black";
        document.body.appendChild(box);
        var boxLength = document.getElementsByTagName("div");
        box.id = boxLength.length;
        var num = document.createElement("h1");
        box.appendChild(num);
        box.onmouseover = function(){
            num.innerText = box.id;     
        };
        box.onmouseleave = function(){
            num.innerText= "";
        }
        box.addEventListener("click", function(){
            box.style.backgroundColor = getRandomColor(); 
        });
        box.addEventListener("dblclick", function(){
            if (box.id % 2 === 0){
                if (box.nextSibling === null) {
                    alert("you fool!");
                } else {
                    box.nextSibling.remove();
                }
            } else {
                if (box.previousSibling === add) {
                    alert("you bastard!")
                } else { 
                     box.previousSibling.remove();
                }
            }
            
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
   
    function addNewBox() {
       var newBox = document.createElement('div');
       newBox.id = "box" + String(boxNum);
       newBox.classList.add("box");
       newBox.classList.add("box" + String(boxNum));
       var newInput = document.createElement('input');
       newInput.type = 'text';
       newInput.id = 'question';
       newBox.appendChild(newInput);
 
       var newSelect = document.createElement('select');
       var op1 = document.createElement('option');
       var op2 = document.createElement('option');
       var op3 = document.createElement('option');
       newSelect.id = 'option';
       op1.value = 'number';
       op1.text = 'Number';
       op2.value = 'text';
       op2.text = 'Text';
       op3.value = 'boolean';
       op3.text = 'Boolean';
       newSelect.appendChild(op1);
       newSelect.appendChild(op2);
       newSelect.appendChild(op3);
       newBox.appendChild(newSelect);
 
       var newDelBtn = document.createElement('button');
       newDelBtn.classList.add("material-icons");
       newDelBtn.classList.add("del");
       newDelBtn.classList.add("button" + String(boxNum));
       newDelBtn.innerText = "delete_outline";
       newDelBtn.type = "button";
       newBox.appendChild(newDelBtn);
 
       getBox.insertBefore(newBox, boxes.lastElementChild);
 
       delButton = document.querySelectorAll("button.del");
       getBox = document.getElementById('boxes');
       delButton[boxNum-1].addEventListener('click', delBox);
       boxNum += 1;
    }
 
    function delBox(e) {
       getBox.removeChild(e.target.parentNode);
       boxNum -= 1;
    }
 
    var boxNum = 1;
    var plusBtn = document.getElementById('plus-btn');
    plusBtn.addEventListener('click', addNewBox);
    var getBox = document.getElementById('boxes');
    var delButton = document.querySelectorAll("button.del");
    
    // You can write your JavaScript code here that is dependent on the page being loaded
    console.log("This will appear in the developer console in Chrome AFTER the page is loaded")
 }, false);
 
 
 
 // You can have code anywhere in this file, but if you try to modify HTML elements
 // before the page is loaded, it may not work as expected (typically it will just not work).
 console.log("This gets run immediately upon the JavaScript file being loaded");
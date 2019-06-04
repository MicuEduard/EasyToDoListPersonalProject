var input = document.getElementById('input');
var ul = document.getElementById('list');
var button = document.getElementById('button');

button.onclick = function() {
  
  if(input.value) {
    
    var newThing = input.value;
    var newTextNode = document.createTextNode(newThing);
    var li = document.createElement('li');
    var spanDone = document.createElement('span');
    var spanDelete = document.createElement('span');
    spanDone.setAttribute('class', 'done fa fa-check');
    spanDelete.setAttribute('class', 'delete fa fa-times');
    li.appendChild(spanDone);
    li.appendChild(spanDelete);
    li.appendChild(newTextNode);
    ul.appendChild(li);
    
  } else {
    
    alert('Input seems to be empty, please insert a task');
    
  }
  
  spanDelete.onclick = function() {
    
    ul.removeChild(li);
    
  }
  
  spanDone.onclick = function() {
    
    if(li.hasAttribute('class', 'done-text')) {
      li.removeAttribute('class', 'done-text');
    } else {
      li.setAttribute('class', 'done-text');
    }
    
  }
  
}
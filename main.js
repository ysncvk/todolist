const taskList = document.getElementsByTagName("li");


// Create a "close" button and append it to each list item
for( let i=0; i<taskList.length; i++) {
    let span = document.createElement("span");
    let closeSign = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(closeSign);
    taskList[i].appendChild(span);
}

let close = document.getElementsByClassName("close");

for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
let list = document.querySelector('ul');
list.addEventListener('click', function(clicked) {
  if (clicked.target.tagName === 'LI') {
    clicked.target.classList.toggle('checked');
  }
});

// Create a new list item when clicking on the "Ekle" button
let inputDOM = document.querySelector("#task");
let ulDOM = document.querySelector("#list")
function newElement() {
    if (inputDOM.value.trim() === "") {
        const warningDOM = document.querySelector(".error");
        const warning= new bootstrap.Toast(warningDOM);
        warning.show();
        inputDOM.value = "";
    } else {
      var li = document.createElement("li");
      li.innerHTML = inputDOM.value;
      ulDOM.appendChild(li);
      const successDOM = document.querySelector(".success");
      const success = new bootstrap.Toast(successDOM);
      success.show();
      inputDOM.value = "";

    }

    let span = document.createElement("span");
    let closeSign = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(closeSign);
    li.appendChild(span);
   
    let close = document.getElementsByClassName("close"); 
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
        }

    }
}




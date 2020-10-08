 // ###### ADD TO DO ITEMS #### CHECK BUTTONS ##### DELETE BUTTONS #####

function addToDoItem() {
    event.preventDefault();
    
    var checkButtonS = document.getElementsByClassName("checkClass");
    var editButtonS = document.getElementsByClassName("editClass");
    var okEditButtons = document.getElementsByClassName("afterEditClass")
    var deleteButtonS = document.getElementsByClassName("deleteClass");

    var listToDo = document.getElementById("showHere");

    var lineOfToDoList = document.createElement("li");
    var paragraph = document.createElement("p")
    var inputEdit = document.createElement("input");


    // ########## BUTTONS ##########

    var spanCheck = document.createElement("span");
    var spanEdit = document.createElement("span");
    var spanOk = document.createElement("span");
    var spanDelete = document.createElement("span");

    var valueOfInput = document.getElementById("inputToDo");
    
    var textFromInput = document.createTextNode(valueOfInput.value);   

    var closeToDo = document.createTextNode("\u00D7");
    var editSign = document.createTextNode("\u270E");
    var okSign = document.createTextNode("OK");
    var checkToDo = document.createTextNode("\u2713");  

    // ####### TO DO ITEMS ######

    if ( valueOfInput.value == '' || valueOfInput.value == ' ') {
        alert("Input is empty!")
    } else {
        paragraph.appendChild(textFromInput);
        lineOfToDoList.appendChild(paragraph);
        lineOfToDoList.appendChild(inputEdit);  

        listToDo.appendChild(lineOfToDoList);
        lineOfToDoList.className = "liToDoClass";
        inputEdit.setAttribute("type", "text");
        inputEdit.className = "editField";
    }

    valueOfInput.value = "";

    // ##### CHECK BUTTON #######
 
    spanCheck.className = "checkClass";

    spanCheck.appendChild(checkToDo);
    lineOfToDoList.appendChild(spanCheck);
    
    for ( var i = 0; i <= checkButtonS.length-1; i++) {
        checkButtonS[i].onclick = function() {

            var li = this.parentElement;
                      
            if ( li.classList.contains("liToDoClass") ) {
                li.className = "checkStatus";
            } else {
                li.className = "liToDoClass";
            }            
        }       
    }   
        
    // ##### EDIT BUTTON #######

    spanEdit.className = "editClass";

    spanEdit.appendChild(editSign);
    lineOfToDoList.appendChild(spanEdit);

    for ( var i = 0; i <= editButtonS.length-1; i++) {
        editButtonS[i].onclick = function() {
            
            var proprietesOfValue  = this.parentElement.firstElementChild;
            var liValue = this.parentElement.firstElementChild.textContent;

            var proprietesOfEditField = this.parentElement.children[1];
            var editField = this.parentElement.children[1];

            var editButtonS = this.parentElement.children[3];
            var afterEditClass = this.parentElement.children[4];

            if (window.getComputedStyle(proprietesOfValue).display === "block" && window.getComputedStyle(proprietesOfEditField).display === "none" && window.getComputedStyle(editButtonS).display === "flex" && window.getComputedStyle(afterEditClass).display === "none") {
                proprietesOfValue.style.display = "none";
                proprietesOfEditField.style.display = "block";
                editButtonS.style.display = "none";
                afterEditClass.style.display = "flex";
            }
            
            editField.value = liValue;

        }
    }

    // ####### OK EDIT BUTTON #####

    spanOk.className = "afterEditClass";

    spanOk.appendChild(okSign);
    lineOfToDoList.appendChild(spanOk);

    for ( var i = 0; i <= okEditButtons.length-1; i++) {
        okEditButtons[i].onclick = function() {
            
            var proprietesOfValue  = this.parentElement.firstElementChild;
            var paragraphValue = this.parentElement.firstElementChild;

            var proprietesOfEditField = this.parentElement.children[1];
            var editField = this.parentElement.children[1];

            var editButtonS = this.parentElement.children[3];
            var afterEditClass = this.parentElement.children[4];

            if (window.getComputedStyle(proprietesOfValue).display === "none" && window.getComputedStyle(proprietesOfEditField).display === "block" && window.getComputedStyle(editButtonS).display === "none" && window.getComputedStyle(afterEditClass).display === "flex") {
                proprietesOfValue.style.display = "block";
                proprietesOfEditField.style.display = "none";
                editButtonS.style.display = "flex";
                afterEditClass.style.display = "none";
            } 

            paragraphValue.innerHTML = editField.value;
            
        }
    }
    
    // ##### DELETE BUTTON #######

    spanDelete.className = "deleteClass";

    spanDelete.appendChild(closeToDo);
    lineOfToDoList.appendChild(spanDelete);

    for ( var i = 0; i <= deleteButtonS.length; i++) {
        deleteButtonS[i].onclick = function() {
            
            var li = this.parentElement;
            li.parentNode.removeChild(li);

        }
    }
}

window.onoffline = (event) => {
    alert("Connection Lost.");
}

window.ononline = (event) => {
    alert("Back online!");
}
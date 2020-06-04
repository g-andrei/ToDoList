window.onload = function() {

    var toDoLI = document.getElementsByTagName("li");

    for ( var i = 0; i <= toDoLI.length-1; i++) {
        toDoLI[i].className = "liToDoClass";
    } 

    // ####### CHECK BUTTON #####

    for (var i = 0; i < toDoLI.length; i++) {
        var spanCheck = document.createElement("SPAN");
        var checkSign = document.createTextNode("\u2713");

        spanCheck.className = "checkClass";

        spanCheck.appendChild(checkSign);
        toDoLI[i].appendChild(spanCheck);
    }

    var checkButtonS = document.getElementsByClassName("checkClass");

        for ( var i = 0; i <= checkButtonS.length-1; i++) {
        checkButtonS[i].onclick = function() {

            var k = this.parentElement;
                      
            if ( k.classList.contains("liToDoClass")) {
                k.className = "checkStatus";
            } else {
                k.className = "liToDoClass";
            } 
            
        }       
    }

    // ##### EDIT BUTTON #######

    for (var i = 0 ; i <= toDoLI.length-1; i++ ) {
        var spanEdit = document.createElement("SPAN");
        var editSign = document.createTextNode("\u270E");

        spanEdit.className = "editClass";

        spanEdit.appendChild(editSign);
        toDoLI[i].appendChild(spanEdit);      
        
    }   

    var editButtonS = document.getElementsByClassName("editClass");

    for ( var i = 0; i <= editButtonS.length-1; i++) {
        editButtonS[i].onclick = function() {

            var proprietesOfValue  = this.parentElement.firstElementChild;
            var paragraphValue = this.parentElement.firstElementChild.textContent;

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
            
            editField.value = paragraphValue;
            
            console.log(paragraphValue);   

        }
    }

    // ####### OK EDIT BUTTON #####

    for (var i = 0 ; i <= toDoLI.length-1; i++ ) {
        var spanEdit = document.createElement("SPAN");
        var editSign = document.createTextNode("OK");

        spanEdit.className = "afterEditClass";

        spanEdit.appendChild(editSign);
        toDoLI[i].appendChild(spanEdit);      
        
    }   

    var okEditButtons = document.getElementsByClassName("afterEditClass");

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

    // ####### DELETE BUTTON #####

    for (var i = 0; i <= toDoLI.length-1; i++) {
        var spanDelete = document.createElement("SPAN");
        var deleteSign = document.createTextNode("\u00D7");

        spanDelete.className = "deleteClass";

        spanDelete.appendChild(deleteSign);
        toDoLI[i].appendChild(spanDelete);
    }

    var deleteButton = document.getElementsByClassName("deleteClass");

    for ( var i = 0; i <= deleteButton.length-1; i++) {
        deleteButton[i].onclick = function() {

            var k = this.parentElement;
            k.parentNode.removeChild(k);

        }
    }  
} 
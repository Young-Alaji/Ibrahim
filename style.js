

function validateForm() {

    // getting fullname    
    var fullname = document.getElementById('name').value;
    // getting phone number 
    var phoneNumber = document.getElementById('phone-number').value;
    // getting email 
    var email = document.getElementById('email').value;
    // getting message 
    var message = document.getElementById('message').value;
    
    // getting errorMsg 
    var error = document.getElementById('errorMsg');
    
    // getting errorMsg 
    var success = document.getElementById('success');
    
    if (fullname =="" && phoneNumber =="" && email =="" && message =="") {
        error.innerHTML ="Please Fill in All Required Fields";
        return false;
    }
    
    if (fullname =="") {
        error.innerHTML ="Please Fill in the name Field";
        return false;
    }
    if (phoneNumber =="") {
        error.innerHTML ="Please Fill in the Phone Number Field";
        return false;
    }
    if (email =="") {
        error.innerHTML ="Please Fill in the Email Field";
        return false;
    }
    if (message =="") {
        error.innerHTML ="Please Fill in the Message Field";
        return false;
    }else{
        success.innerHTML ="Congratulation All Validation successfully !!!";
       
    }
    
    }
    
    
    
    
    
    
    
    
    
    
    
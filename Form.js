function validate(){
    var fname = document.getElementById("fname").value
    var lname = document.getElementById("lname").value
    var email = document.getElementById("email").value
    var phone = document.getElementById("phone").value
    if(fname==0){
        document.getElementById("msg").
        innerHTML="**firstName field is empty"
        return false
    }
   else if (fname.length<3){
    document.getElementById("msg")
    innerHTML="**firstName field should have minimum 3 characters"
    return false

}
 else if (fname.length>=15){
    document.getElementById("msg")
    innerHTML="**firstName field should have maximum 15 characters"
    return false
}
  if(lname==0){
        document.getElementById("msg").
        innerHTML="**lastName field is empty"
        return false
    }
   else if (lname.length<3){
    document.getElementById("msg")
    innerHTML="**lastName field should have minimum 3 characters"
    return false

}
 else if (lname.length>=15){
    document.getElementById("msg")
    innerHTML="**lastName field should have maximum 15 characters"
    return false
}
if(email==0){
        document.getElementById("msg").
        innerHTML="**email field is empty"
        return false
    }
    else if (email.length<3){
    document.getElementById("msg")
    innerHTML="**lastName field should have minimum 3 characters"
    return false
}
if(phone.length==0){
        document.getElementById("msg").
        innerHTML="**phoneNumber  field is empty"
        return false
    }
    else if (isNaN(phone)){
    document.getElementById("msg")
    innerHTML="number text box should contain only integer"
    return false

}
else if (phone.length<10){
    document.getElementById("msg")
    innerHTML="number field is lessthan 10 digits"
    return false
}
else if (phone.length>10){
    document.getElementById("msg")
    innerHTML="number field is more than 10 digits"
    return false
}
else if (phone.charAt(0)<6){
    document.getElementById("msg")
    innerHTML="Indian standard number should start from 7 or 8 or 9"
    return false
}

}

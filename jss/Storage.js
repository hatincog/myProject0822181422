window.onload=(function(){
//storing all the userinputs as a local storage in a variable..
var fname= localStorage.FName;
var lname= localStorage.LName;
var country= localStorage.Country;
var email= localStorage.Mail;
var msg= localStorage.Message;

//using innerHTML to insert the variable in the respective place.
document.getElementById('nm').innerHTML = fname;
document.getElementById('em').innerHTML = email;
document.getElementById('mg').innerHTML = country;
document.getElementById('mg').innerHTML = msg;
})

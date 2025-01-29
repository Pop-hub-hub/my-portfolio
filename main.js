

// document.body.classList.add(localStorage.getItem("pagecolor"));


let header = document.querySelector('header');
window.onscroll = function(){
    if(this.scrollY >= 70){
        header.classList.add("active")
    }else{
        header.classList.remove("active")
    }
    
}
let nav_links = document.querySelector(".links")
let bars = document.querySelector(".icon-menue");
bars.addEventListener("click", function(){
    nav_links.classList.toggle("open")
});
let close_menue = document.querySelector(".close-menue");
close_menue.addEventListener("click", function(){
    nav_links.classList.remove("open")
});




let el = document.querySelectorAll(".color-switcher li");
let classeslist = [];
for(let i = 0; i < el.length; i++){
    classeslist.push(el[i].getAttribute("data-color"));

    el[i].addEventListener("click", function () {
        document.body.classList.remove(...classeslist);
        document.body.classList.add(this.getAttribute("data-color"));
        const clock = document.querySelector(".clock")
        clock.classList.remove(...classeslist);
        clock.classList.add(this.getAttribute("data-color"));

        localStorage.setItem("pagecolor", this.getAttribute("data-color"))
        
    },false);
};


function sendEmail() {
    let fullName = document.getElementById('fullName').value;
    let email = document.getElementById('email').value;
    let mobileNumber = document.getElementById('mobileNumber').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;

    let mailto_link = 'mailto:bdhm28191@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' +
        'Full Name: ' + encodeURIComponent(fullName) + '%0A' +
        'Email: ' + encodeURIComponent(email) + '%0A' +
        'Mobile Number: ' + encodeURIComponent(mobileNumber) + '%0A%0A' +
        encodeURIComponent(message);

    window.location.href = mailto_link;

    // Clear the form fields
    document.getElementById('fullName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('mobileNumber').value = '';
    document.getElementById('subject').value = '';
    document.getElementById('message').value = '';
}




// clear function
// let cleare = document.querySelector(".btnn");
// cleare.addEventListener("click", function(){
//     fullName.value="";
//     email.value="";
//     mobileNumber.value="";
//     subject.value="";
//     message.value="";
// })

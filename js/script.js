document.getElementById("button").addEventListener("click", function() {
    let name = document.forms['contact-form']['name'].value;
    let email = document.forms['contact-form']['email'].value;
    let interest = document.forms['contact-form']['interest'].value;

    if(name==""){
        document.getElementById("name-error").innerText="Name cannot be blank";
    }else{
        document.getElementById("name-error").innerText="";
    }

    if(email==""){
        document.getElementById("email-error").innerText="Email cannot be blank";
    }else{
        document.getElementById("email-error").innerText="";
    }

    if(interest==""){
        document.getElementById("interest-error").innerText="Interest cannot be blank";
    }else{
        document.getElementById("interest-error").innerText="";
    }
    
    console.log(name);
    console.log(email);
    console.log(interest);
    
});

const carouselSlides = document.querySelectorAll(".image");
let currentIndex = 0;
let interval = 3000;

function nextSlide(){
    carouselSlides[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % carouselSlides.length;
    carouselSlides [currentIndex].classList.add('active');
}

function startSlide(){
    setInterval(nextSlide, interval);
}

(function(){
    startSlide();
})()
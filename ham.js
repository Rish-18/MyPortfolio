//navbar
let selectedTab;
function changeColor(tab) {
    if(selectedTab) {
        selectedTab.classList.remove("selected");
    }
    tab.classList.add("selected");
    selectedTab = tab;
}

//hamburger
document.getElementById('mobile').addEventListener('click', function() {
    nav_list = document.querySelector('.nav-list')
    nav_list.classList.toggle('show');
});

//text animation
var typed = new Typed('#anim', {
    strings: ['a Web designer.',  'a Full Stack developer.'],
    typeSpeed: 50,
    backspeed:150,
    loop:true,
  });


//project card
  function toggleSection(sectionId) {
    // Hide all card sections
    const allSections = document.querySelectorAll('.card-section');
    allSections.forEach(section => {
        section.classList.remove('active');
    });

    // Show the selected card section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }
}
//form vallidation
function seterror (ids,error){
    //sets error inside the tag od id 
    elem=document.getElementById(ids);
    elem.getElementsByClassName('formerror')[0].innerHTML=error;  //id to main div tag 
    // document.getElementsByClassName('formerror')[0].innerHTML=error;     //searches in foll doc for error class
}
function validateform(){
    var return_val=true;
    var name=document.forms['myform']['fname'].value;
    var mail=document.forms['myform']['femail'].value;
    if(name.length == 0){
        // console.log("No name");
        seterror('iname','*Name cannot be empty');
        return return_val=false;
        //note: instead of 0 cndition we can put required attribute
    }
    if(name.length < 3){
        // console.log("Short");
        seterror('iname','*Name is too short');
        return return_val=false;
    }
    if(mail.length==0){
        // console.log("Enter email");
        seterror('iemail','*Enter email');
        return return_val=false;
    }
    return return_val;
}
//

// Function to check if an element is in the viewport
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
//onscroll animation
// Function to handle scroll events
function handleScroll() {
    // Get all elements with the class 'animate-on-scroll'
    var elements = document.querySelectorAll('.animate-on-scroll');

    // Loop through each element and check if it's in the viewport
    elements.forEach(function (element) {
        if (isElementInViewport(element)) {
            // Add a class to trigger the animation
            element.classList.add('animate');
        } 
        
    });
}
// Attach the handleScroll function to the scroll event
window.addEventListener('scroll', handleScroll);

// Initial check to handle elements that are already in the viewport on page load
document.addEventListener('DOMContentLoaded', handleScroll);

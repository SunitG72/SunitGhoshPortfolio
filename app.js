function togglePopup(projectNumber) {
    var popup = document.getElementById(`popup${projectNumber}`);
    popup.classList.add('active');
}

function closePopup(projectNumber) {
    var popup = document.getElementById(`popup${projectNumber}`);
    popup.classList.remove('active');
}

window.addEventListener('scroll', reveal);
function reveal(){
    var reveals = document.querySelectorAll('.reveal');
    for(var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;
        if(revealtop < windowheight-revealpoint){
            reveals[i].classList.add('act');
        }
        else{
            reveals[i].classList.remove('act');
        }
    }
}
  
const backToTopButton = document.querySelector('.back-to-top');

        // Add scroll event listener to toggle button visibility
        window.addEventListener('scroll', () => {
            if (window.scrollY > 0) {
                backToTopButton.classList.add('visible'); // Add "visible" class
            } else {
                backToTopButton.classList.remove('visible'); // Remove "visible" class
            }
        });
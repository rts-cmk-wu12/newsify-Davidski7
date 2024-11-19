require('../style/main.scss');
require('./images/newsify_logo1.png');
require('./images/Onboarding2.png');
require('./images/Onboarding3.png');
require('./images/Onboarding4.png');

document.addEventListener("DOMContentLoaded", () => {
    
    setTimeout(() => {
        
        document.getElementById("splash-screen").style.display = "none";

       
        document.getElementById("onboarding-container").style.display = "block";
    }, 3000); 


    window.nextOnboarding = function(currentStep) {
        
        document.getElementById(`onboarding-${currentStep}`).classList.remove('active');

        
        const nextStep = currentStep + 1;
        const nextOnboardingScreen = document.getElementById(`onboarding-${nextStep}`);
        if (nextOnboardingScreen) {
            nextOnboardingScreen.classList.add('active');
        }

      
        updateIndicators(nextStep);
    }

 
    window.endOnboarding = function() {
        
        document.getElementById("onboarding-container").style.display = "none";
        
        
        document.getElementById("main-content").style.display = "block";
        alert("Onboarding er afsluttet!");
    }

    
    function updateIndicators(step) {
       
        document.querySelectorAll('.indicator').forEach((indicator, index) => {
            indicator.classList.toggle('active', index + 1 === step);
        });
    }
    
});

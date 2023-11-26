///DECLARATIONS
const notificationButton = document.querySelector('.notification-button')
const notification = document.querySelector('.notification')
const profileButton = document.querySelector('.profile-button')
const profile = document.querySelector('.profile')
const logoButton = document.querySelector('.logo-button')
const planButton  = document.querySelector('.plan-button')
const closeButton = document.querySelector('.close-button')
const extendDiv = document.querySelector('.extend')
const setupButton = document.querySelector('.setup-button')
const mainBody = document.querySelector('.main-body')
const main = document.querySelector('.main')
const steps = document.querySelectorAll('.step')
const stepButton = document.querySelectorAll('.step-button')


//HEADER BUTTON FUNCTIONS
notificationButton.addEventListener('click', function() {
    notification.classList.toggle('open')
    profile.classList.remove('open')
})

profileButton.addEventListener('click', function() {
    profile.classList.toggle('open')
    notification.classList.remove('open')
})


//TO CLOSE PANELS AFTER CLICKING OUTSIDE
window.addEventListener('click', function (e) {
    // To check if the clicked element is inside the profile or notification sections
    const isProfileClicked = profile.contains(e.target);
    const isNotificationClicked = notification.contains(e.target);

    // If the click is outside both profile and notification, close them
    if (!isProfileClicked && !isNotificationClicked) {
        profile.classList.remove('open');
        notification.classList.remove('open');
    }
})


//REDIRECT BUTTON FUNCTIONS
logoButton.addEventListener('click', function() {
    window.location = "https://www.shopify.com"
})

planButton.addEventListener('click', function() {
    window.location = "https://www.shopify.com/pricing"
})


//CLOSE BUTTON FUNCTION
closeButton.addEventListener('click', function() {
    extendDiv.style.display = 'none'
})


//SETUP GUIDE EXPANDER 
setupButton.addEventListener('click', function() {
    mainBody.classList.toggle('close')
    setupButton.classList.toggle('close')
})


//ACCORDION LOGIC
steps.forEach(function(step) {
    const button = step.querySelector('.step-main-button')

    button.addEventListener('click', function() {
        steps.forEach(function(item) {
            if (item !== step) {
                item.classList.remove('show')
            }
        })

        step.classList.toggle('show')
    })
})


//COMPLETION BUTTON LOGIC AND PROGRESS BAR
stepButton.forEach(function(clicked) {
    const number = document.querySelector('.done')
    const bar = document.querySelector('.progress-bar-complete')


    clicked.addEventListener('click', function() {
        //TOGGLING CLICKED CLASS
        clicked.classList.toggle('loading')

        setTimeout(function() {
            clicked.classList.toggle('clicked')

            //UPDATING THE NUMBER AND PROGRESS BAR
            var progress = document.querySelectorAll('.clicked')
            var tickedButtons = progress.length
        
            number.innerHTML = tickedButtons
            bar.style.width = (tickedButtons * 20) + '%'
        }, 200)
    })
})
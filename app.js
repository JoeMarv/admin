///DECLARATIONS
const notificationBtn = document.querySelector('.notification-btn')
const notification = document.querySelector('.notification')
const profileBtn = document.querySelector('.profile-btn')
const profile = document.querySelector('.profile')
const logoBtn = document.querySelector('.logo-btn')
const planBtn  = document.querySelector('.plan-btn')
const closeBtn = document.querySelector('.close-btn')
const extendDiv = document.querySelector('.extend')
const setupBtn = document.querySelector('.setup-btn')
const mainBody = document.querySelector('.main-body')
const main = document.querySelector('.main')
const steps = document.querySelectorAll('.step')
const stepBtn = document.querySelectorAll('.step-btn')


//HEADER BUTTON FUNCTIONS
notificationBtn.addEventListener('click', function() {
    notification.classList.toggle('open')
    profile.classList.remove('open')
})

profileBtn.addEventListener('click', function() {
    profile.classList.toggle('open')
    notification.classList.remove('open')
})


//REDIRECT BUTTON FUNCTIONS
logoBtn.addEventListener('click', function() {
    window.location = "https://www.shopify.com"
})

planBtn.addEventListener('click', function() {
    window.location = "https://www.shopify.com/pricing"
})


//CLOSE BUTTON FUNCTION
closeBtn.addEventListener('click', function() {
    extendDiv.style.display = 'none'
})


//SETUP GUIDE EXPANDER 
setupBtn.addEventListener('click', function() {
    mainBody.classList.toggle('close')
    setupBtn.classList.toggle('close')
})


//ACCORDION LOGIC
steps.forEach(function(step) {
    const btn = step.querySelector('.step-main-btn')

    btn.addEventListener('click', function() {
        steps.forEach(function(item) {
            if (item !== step) {
                item.classList.remove('show')
            }
        })

        step.classList.toggle('show')
    })
})


//COMPLETION BUTTON LOGIC AND PROGRESS BAR
stepBtn.forEach(function(clicked) {
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
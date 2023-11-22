///DECLARATIONS
const notificationBtn = document.querySelector('.notification-btn')
const notification = document.querySelector('.notification')
const profileBtn = document.querySelector('.profile-btn')
const profile = document.querySelector('.profile')
const logoBtn = document.querySelector('.logo-btn')
const closeBtn = document.querySelector('.close-btn')
const extendDiv = document.querySelector('.extend')


//HEADER BUTTON FUNCTIONS
logoBtn.addEventListener('click', function() {
    location.reload()
})

notificationBtn.addEventListener('click', function() {
    notification.classList.toggle('open')
    profile.classList.remove('open')
})

profileBtn.addEventListener('click', function() {
    profile.classList.toggle('open')
    notification.classList.remove('open')
})


//CLOSE BUTTON FUNCTION
closeBtn.addEventListener('click', function() {
    extendDiv.style.display = 'none'
})
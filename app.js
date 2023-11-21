///DECLARATIONS
const notificationBtn = document.querySelector('.notification-btn')
const notification = document.querySelector('.notification')
const profileBtn = document.querySelector('.profile-btn')
const profile = document.querySelector('.profile')
const logoBtn = document.querySelector('.logo-btn')


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
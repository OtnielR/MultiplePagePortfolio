const reveals = document.querySelectorAll(".target-point");
const navbar = document.querySelector('.navbar')
const navbarInners = document.querySelector('.navbar-inner')
const contactElement = document.querySelector('.contact-container')
const contactMessageContentElement = document.querySelector('.contact-message-content')
const contactContentElement = document.querySelector('.contact-content')
const contactReplyContent = document.querySelector('.contact-reply-content')
const themeLineContainer = document.querySelectorAll('.theme-line-container')
const lightThemeLineContainer = document.querySelectorAll('.theme-line-container-light')
const darkThemeLineContainer = document.querySelectorAll('.theme-line-container-dark')
const styleSheet = document.styleSheets[0] || document.head.appendChild(document.createElement("style")).sheet;


let previousActiveLineContainer = ''

themeLineContainer.forEach((e) => {
    e.addEventListener('click', () => {
        console.log(previousActiveLineContainer)
        if (previousActiveLineContainer) {
            previousActiveLineContainer.classList.remove('active')
        }

        e.classList.add('active')

        previousActiveLineContainer = e
    })
})

lightThemeLineContainer.forEach((e) => {
    e.addEventListener('click', () => {
        document.body.classList.remove('dark')

        saveUserTheme()
    })
})

darkThemeLineContainer.forEach((e) => {
    e.addEventListener('click', () => {
        document.body.classList.add('dark')

        saveUserTheme()
    })
})

window.addEventListener("scroll", () => {
    reveals.forEach((el) => {

        const windowHeight = navbar.getBoundingClientRect().bottom;
        const elementTop = el.getBoundingClientRect().y;

        console.log(windowHeight, elementTop, elementTop < windowHeight)

        if (elementTop < windowHeight) {
            navbarInners.classList.add("active");
        } else {
            navbarInners.classList.remove('active')
        }
    });
});

function applyTransitionCss() {
    styleSheet.insertRule("* { transition: all ease-in .2s}", styleSheet.cssRules.length);
}
function applyUserTheme() {
    if (localStorage.getItem("theme") == 'dark') {
        document.body.classList.add('dark')
        randomIndex = Math.floor(Math.random() * darkThemeLineContainer.length)
        darkThemeLineContainer[randomIndex].classList.add('active')
        previousActiveLineContainer = darkThemeLineContainer[randomIndex]
    } else {
        document.body.classList.remove('dark')
        randomIndex = Math.floor(Math.random() * lightThemeLineContainer.length)
        lightThemeLineContainer[randomIndex].classList.add('active')
        previousActiveLineContainer = lightThemeLineContainer[randomIndex]
    }
}

function saveUserTheme() {
    if (document.body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark')
    } else {
        localStorage.setItem('theme', 'light')
    }

    console.log(localStorage.getItem('theme'))
}

function showContactElement() {
    contactElement.classList.add('active')

    contactReplyContent.style.display = 'none'

    setTimeout(showReplyContent, 1000)
}
function hideContactElement() {
    contactElement.classList.remove('active')
}
function toggleContactElement() {
    if (contactElement.classList.contains('active')) {
        hideContactElement()
    } else {
        showContactElement()
    }
}
function makeReplyElement(message) {
    replyElement = document.createElement('div')
    paragraphElement = document.createElement('p')

    paragraphElement.innerText = message

    replyElement.appendChild(paragraphElement)

    replyElement.classList.add('contact-message')
    replyElement.classList.add('contact-message-animation')

    return replyElement
}
function sayingHelloReply() {
    hideReplyContent()

    contactMessageContainer = document.createElement('div')
    contactMessageContainerReply = document.createElement('div')

    contactMessageContainerReply.classList.add('contact-message-container')
    contactMessageContainerReply.classList.add('contact-message-right')

    reply_message_1 = makeReplyElement('Just saying Hello!')

    contactMessageContainerReply.appendChild(reply_message_1)

    contactMessageContainer.classList.add('contact-message-container')
    contactMessageContainer.classList.add('contact-message-left')

    message_1 = makeReplyElement('Hello!')
    message_2 = makeReplyElement('Thanks for saying hi 😁')
    message_3 = makeReplyElement("I hope you've enjoyed browsing my work")
    message_4 = makeReplyElement('Can I help you with anything else?')

    contactMessageContainer.appendChild(message_1)
    contactMessageContainer.appendChild(message_2)
    contactMessageContainer.appendChild(message_3)
    contactMessageContainer.appendChild(message_4)

    contactMessageContentElement.appendChild(contactMessageContainerReply)
    contactMessageContentElement.appendChild(contactMessageContainer)

    setTimeout(showReplyContent, 1000)

    contactContentElement.scrollTop = contactContentElement.scrollHeight
}
function sayingContactReply() {
    hideReplyContent()

    contactMessageContainer = document.createElement('div')
    contactMessageContainerReply = document.createElement('div')

    contactMessageContainerReply.classList.add('contact-message-container')
    contactMessageContainerReply.classList.add('contact-message-right')

    reply_message_1 = makeReplyElement('How to contact Dennis?')

    contactMessageContainerReply.appendChild(reply_message_1)

    contactMessageContainer.classList.add('contact-message-container')
    contactMessageContainer.classList.add('contact-message-left')

    message_1 = makeReplyElement('If you want to have a talk with Dennis, you can check his credential below')
    message_2 = makeReplyElement('Email: Dennis@gmail.com')
    message_3 = makeReplyElement('Phone Number: +62888-8888-8888')

    contactMessageContainer.appendChild(message_1)
    contactMessageContainer.appendChild(message_2)
    contactMessageContainer.appendChild(message_3)

    contactMessageContentElement.appendChild(contactMessageContainerReply)

    contactMessageContentElement.appendChild(contactMessageContainer)

    setTimeout(showReplyContent, 1000)

    contactContentElement.scrollTop = contactContentElement.scrollHeight
}
function sayingAddressReply() {
    hideReplyContent()

    contactMessageContainer = document.createElement('div')
    contactMessageContainerReply = document.createElement('div')

    contactMessageContainerReply.classList.add('contact-message-container')
    contactMessageContainerReply.classList.add('contact-message-right')

    reply_message_1 = makeReplyElement('Where is Dennis house? ')

    contactMessageContainerReply.appendChild(reply_message_1)

    contactMessageContainer.classList.add('contact-message-container')
    contactMessageContainer.classList.add('contact-message-left')

    message_1 = makeReplyElement('If you want to have to know Dennis house check this maps below')
    iframe_1 = document.createElement('iframe')
    iframe_1.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d525.1837528877716!2d106.669250436926!3d-6.308319858833778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e5e05469cc29%3A0x7b93a8c6a9727a38!2sPuri%20Marlina!5e0!3m2!1sid!2sid!4v1754884507347!5m2!1sid!2sid"
    iframe_1.loading = 'lazy'
    iframe_1.classList.add("home-address-section")
    iframe_1.classList.add('contact-message')
    iframe_1.classList.add('contact-message-animation')

    contactMessageContainer.appendChild(message_1)
    contactMessageContainer.appendChild(iframe_1)

    contactMessageContentElement.appendChild(contactMessageContainerReply)

    contactMessageContentElement.appendChild(contactMessageContainer)

    setTimeout(showReplyContent, 1000)

    contactContentElement.scrollTop = contactContentElement.scrollHeight
}
function showReplyContent() {
    contactReplyContent.style.display = 'flex'
}
function hideReplyContent() {
    contactReplyContent.style.display = 'none'
}

applyUserTheme()


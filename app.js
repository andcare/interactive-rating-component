const ratingButton = document.querySelectorAll('.rating__button');
const rated = document.querySelector('.rated');
const submitButton = document.querySelector('.submit-button');
const messageBox = document.querySelector('.message-box');

ratingButton.forEach(button => {
    button.addEventListener('click', (e) => {
        let selectedButton = e.currentTarget.textContent;

        for (let i = 0; i < ratingButton.length; i++) {
            rated.textContent = selectedButton;
            console.log(`You selected ${selectedButton} out of 5!`);
        }
    })
})

const hideMessageBox = () => {
    if (messageBox.classList.contains('is-active')) {
        setTimeout(() => {
            messageBox.classList.remove('is-active');
        }, 3000);
        
        console.log(`It will hide after 3 seconds`);
    }
}

submitButton.addEventListener('click', () => {
    messageBox.classList.add('is-active');
    hideMessageBox();
})
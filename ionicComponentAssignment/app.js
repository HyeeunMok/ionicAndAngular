const nameInput = document.querySelector('#input-name');
const ratingInput = document.querySelector('#input-rating');
const addBtn = document.querySelector('#btn-add');
const courseList = document.querySelector('#course-list');
const alertCtrl = document.querySelector('ion-alert-controller');

const clear = () => {
    nameInput.value = '';
    ratingInput.value = '';
}

addBtn.addEventListener('click', () => {
    const enteredName = nameInput.value;
    const enteredRating = ratingInput.value;
    
    if (
        enteredName.trim().length <= 0 || 
        enteredRating.trim().length <= 0 || 
        enteredRating < 1 || 
        enteredRating > 5
        ) {
            alertCtrl
            .create({
                message: 'Please enter valid course name and rating!', 
                header: 'Invalid inputs',
                buttons: ['Okay']
        }).then(alertElement => {
            alertElement.present();
        });
            return;
    }
    const newItem = document.createElement('ion-item');
    newItem.innerHTML = `<strong>${enteredName}:</strong> &nbsp; ${enteredRating}/5`;

    courseList.appendChild(newItem);

    clear();
});

addBtn.addEventListener('click', clear);
function showMyBirthdayDate() {
    const myBirthday = moment("04.10.1988", "DD.MM.YYYY");
    let isDateReal = myBirthday.isValid();
    if (isDateReal) {
        const parent = document.getElementById('myBirthday');
        let date = myBirthday.format("Do, MMMM, YYYY");
        parent.innerHTML = `My birthday: ${date}`;
        //console.log(myBirthday.format("Do, MMMM, YYYY"));
    }
}


function showUserBirthdayDate(userDOB) {
    const userBirthday = moment(userDOB, "DD.MM.YYYY");
    let isDateReal = userBirthday.isValid();

    const dobFormats = ["Do, MMMM, YYYY", "MMM Do YY", "MMMM Do YYYY",]

    if (isDateReal) {
        const parent = document.querySelector('.user-dob-list');
        const element = document.createElement('h2');
        element.className = 'user-dob-title';
        element.textContent = `User birthday in different formats:`;
        parent.append(element);

        dobFormats.forEach(function (format) {
            //console.log(element);
            const element = document.createElement('h3');
            element.className = 'user-dob';
            element.textContent = userBirthday.format(format);

            parent.append(element);

        });
    }
}


function isAllInputsFilledCorrect(inputFields) {

    let verificationResults = [];

    inputFields.forEach(input => {

        let result;
        let pattern;
        let errorText;

        switch (input.name) {
            case 'dob':
                pattern = /^([1-9]|0[1-9]|[1-2][0-9]|3[0-1])\.([1-9]|0[1-9]|1[0-2])\.(19[1-9][0-9]|20[0-9][0-9]|2100)$/;
                result = pattern.test(input.value);

                if (result) {

                    const userBirthday = moment(input.value, "DD.MM.YYYY");
                    let isDateReal = userBirthday.isValid();
                    let isDateInPast = userBirthday.isBefore(moment())

                    if (!isDateReal) {
                        result = false;
                        errorText = 'Not existing date'
                    } else if (!isDateInPast) {
                        result = false;
                        errorText = 'Your date have to be in the past'
                    }

                } else {
                    errorText = 'Wrong format!'
                }

                verificationResults.push(result);

                break;
            default:
                break;
        }

        if (!result) {

            if (input.nextElementSibling && input.nextElementSibling.className === 'error-message alert alert-danger') {
                input.nextElementSibling.remove();
            }
            // Если поле не заполнено, добавляем div с сообщением об ошибке
            if (!input.nextElementSibling || input.nextElementSibling.className !== 'error-message alert alert-danger') {
                const errorMessage = document.createElement('div');
                errorMessage.className = 'error-message alert alert-danger';
                errorMessage.setAttribute('role', 'alert');
                errorMessage.textContent = input.value === '' ? `This is a required field!` : `${errorText}`;
                input.parentNode.insertBefore(errorMessage, input.nextElementSibling);
            }
        } else {
            // Если поле заполнено, удаляем сообщение об ошибке (если оно было)
            if (input.nextElementSibling && input.nextElementSibling.className === 'error-message alert alert-danger') {
                input.nextElementSibling.remove();
            }
        }
    })

    if (verificationResults.includes(false)) {
        return false;
    } else {
        return true;
    }

};



//Check name
const namePatt = /[a-zA-Z\s]{1,50}/ig;

const checkName = (str) => {
    if(!namePatt.test(str)){
        return false;
    }
    return true;
}

//Checks 10 digit phone number with or without (-)'s
const phoneNubmerPatt = /([0-9]{3})(-)?([0-9]{3})(-)?([0-9]{4})/ig;

const checkPhoneNumber = (str) => {
    if(!phoneNubmerPatt.test(str)){
        return false;
    }
    return true;
}

exports.checkName = checkName;
exports.checkPhoneNumber = checkPhoneNumber;

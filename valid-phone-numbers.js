function validPhoneNumber(phoneNumber) {
    return /^\(\d{3}\) \d{3}\-\d{4}$/.test(phoneNumber);
}
console.log(validPhoneNumber("(021) 232-3582"));

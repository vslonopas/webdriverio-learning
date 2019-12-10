class ContactUs_Page {
    get firstName() {return $("[name='first_name']");}
    get lastName() {return $("[name='last_name']");}
    get email() {return $("[name='email']");}
    get comments() {return $("textarea");}
    get submitButton() {return $("[type='submit']");}

submitAllInforamtion(firstName, lastName, email, comments) {
    if (firstName) {
        this.firstName.setValue(firstName);
    }
    if (lastName) {
        this.lastName.setValue(lastName);
    }
    if (email) {
        this.email.setValue(email);
    }
    if (comments) {
        this.comments.setValue(comments);
    }
    this.submitButton.click();
    this.confirmSussessfulSubmission();
}

setFirstName(firstName) {
    return this.firstName.setValue(firstName);
}
setLastName(lastName) {
    return this.lastName.setValue(lastName);
}
setEmail(email) {
    return this.email.setValue(email);
}
setComments(comments) {
    return this.comments.setValue(comments);
}
clickSubmit() {
    return this.submitButton.click();        
}
confirmSussessfulSubmission() {
    var successfulSubmissionHeader = "#contact_reply h1";
    var successfulSubmission = browser.waitUntil(function(){
        return browser.getText(successfulSubmissionHeader) == 'Thank You for your Message!'
    }, 3000);
    
    expect(successfulSubmission, 'Successful submission message not detected').to.be.true;
}
confirmUnsussessfulSubmission() {
    var unsuccessfulSubmissionHeader = "body";
    var unsuccessfulSubmission = browser.waitUntil(function(){
        return browser.getText(unsuccessfulSubmissionHeader)},3000);
        
    expect(unsuccessfulSubmission).to.include('Error: all fields are required');
}  

}

module.exports = new ContactUs_Page();


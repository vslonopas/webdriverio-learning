var ContactUs_Page = require("../pageObjects/ContactUs_page.js");

beforeEach(function() {
    browser.url('/Contact-Us/contactus.html');
})

describe ('Test Contact Us form WebdriverUni', function (){
   
    it ('Should be able to submit a successfull submission', function (done) {
        ContactUs_Page.submitAllInforamtion('Vovaldo', 'Superstar', 'vs@gmail.com', 'Who let the dogs out?');   
    });

    it ('Should NOT be able to submit a successfull submission as all filed are required', function (done) {
        ContactUs_Page.setFirstName('Cool');
        ContactUs_Page.setLastName('Man');
        ContactUs_Page.setEmail('cm@gmail.com');
        ContactUs_Page.clickSubmit();
        ContactUs_Page.confirmUnsussessfulSubmission();
    });

    it ('Should NOT be able to submit a successfull submission as all filed are required', function (done) {
        ContactUs_Page.setFirstName('Vassa');
        ContactUs_Page.setEmail('vassa@gmail.com');
        ContactUs_Page.clickSubmit();
        ContactUs_Page.confirmUnsussessfulSubmission();
    });

    it ('Should NOT be able to submit a successfull submission as all filed are required', function (done) {
        ContactUs_Page.setFirstName('Fred');
        ContactUs_Page.setLastName('Durst');
        ContactUs_Page.clickSubmit();
        ContactUs_Page.confirmUnsussessfulSubmission();  
    });

})
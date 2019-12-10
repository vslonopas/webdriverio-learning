describe ("Test that button is clickable when Ajax loader is done", function (){
    it ("Attempt to click the button", function (done) {
        browser.url('/Ajax-Loader/index.html');
        this.timeout('20000');
        browser.pause(7000);
        browser.click('#button1');
        browser.pause(7000);
    });
})
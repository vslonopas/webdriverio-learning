
describe ("Verify webdriveruni links on homepage", function (){
    it ("Check contact us button opens contact us page", function (done) {
        browser.url('/');
        var title = browser.getTitle();
        expect(title).to.equal('WebDriverUniversity.com');
        console.log('Title is: ' + title);

        browser.click("#contact-us");
        var tabIds = browser.getTabIds();
        console.log(tabIds);
        browser.switchTab(tabIds[1]);

        var title2 = browser.getTitle();
        expect(title2).to.equal('WebDriver | Contact Us');

        var url = browser.getUrl();
        expect(url).to.include('Contact-Us', 'URL mismatch');

        browser.pause(3000);
        browser.close();
    })
    
    it ("Check login button opens login page", function (done) {
        browser.url('/');
        var title = browser.getTitle();
        title.should.equal('WebDriverUniversity.com');
        console.log('Title is: ' + title);
        browser.click('#login-portal');
        var tabIds = browser.getTabIds();
        browser.switchTab(tabIds[1]);

        var title2 = browser.getTitle();
        expect(title2).to.equal('WebDriver | Login Portal');
        
        var url = browser.getUrl();
        expect(url).to.include('Login-Portal', 'URL mismatch');

        browser.pause(3000);
    })
    
})
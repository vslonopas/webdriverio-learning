describe('Test checkbox buttons page', function(){
    browser.url('/Dropdown-Checkboxes-RadioButtons/index.html');

    it('Should be able to focus checkbox button elements', function (done) {
        browser.click('input[type="checkbox"][value="option-1"]');
        browser.pause(3000);
        var checkboxButton1 = browser.isSelected('input[type="checkbox"][value="option-1"]');
        console.log('Checkbox button 1 has selected value of: '+ checkboxButton1);
        expect(checkboxButton1).to.be.true ;
        
        var checkboxButton2 = browser.hasFocus('input[type="checkbox"][value="option-3"]');
        console.log('Checkbox button 2 has a value of: '+ checkboxButton2);
        expect(checkboxButton2).to.be.false ;
        
    });
});
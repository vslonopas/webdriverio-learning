beforeEach(function() {
  browser.url("/Dropdown-Checkboxes-RadioButtons/index.html");
})

describe('Test Selected Dropdown Menus, Checkboxes & Radio Buttons', function() {
  it('Dropdown item Java is selected therefore should return true', function(done) {
    var isSelected = browser.isSelected("option[value='java']");
    expect(isSelected).to.equal(true);
  });
  
  it('Dropdown item maven is not selected therefore should return false', function(done) {
    var isSelected = browser.isSelected("option[value='maven']");
    expect(isSelected).to.equal(false);
  });
  
  it('Option2 is not selected therefore should return false', function(done) {
    var isSelected = browser.isSelected("input[value='option-2']");
    expect(isSelected).to.equal(false);
  });
  
  it('Option3 is selected therefore should return true', function(done) {
    var isSelected = browser.isSelected("input[value='option-3']");
    expect(isSelected).to.equal(true);
  });
  
  it('Radio button pumpkin is selected therefore should be true', function(done) {
    var isSelected = browser.isSelected("input[value='pumpkin']");
    expect(isSelected).to.equal(true);
  });
});
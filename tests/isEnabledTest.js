beforeEach(function() {
  browser.url("/Dropdown-Checkboxes-RadioButtons/index.html");
	browser.pause(2000);
})

describe('Test Enabled Dropdown Menus, Checkboxes & Radio Buttons', function() {
  it('Dropdown item orange is disabled therefore should return false', function(done) {
    var isEnabled = browser.isEnabled("option[value='orange']");
    expect(isEnabled).to.equal(false);
  });
  
  it('Dropdown item grape is enabled therefore should return true', function(done) {
    var isEnabled1 = browser.isEnabled("option[value='grape']");
    expect(isEnabled1).to.equal(true);
  });
  
  it('Option2 is enabled therefore should return true', function(done) {
    var isEnabled2 = browser.isEnabled("input[value='option-2']");
    expect(isEnabled2).to.equal(true);
  });
  
  it('Radio button pumpkin is enabled therefore should be true', function(done) {
    var isEnabled3 = browser.isEnabled("input[value='pumpkin']");
    expect(isEnabled3).to.equal(true);
  });
  
  it('Radio button cabbage is disabled therefore should be false', function(done) {
    var isEnabled4 = browser.isEnabled("input[value='cabbage']");
    expect(isEnabled4).to.equal(false);
  });
});
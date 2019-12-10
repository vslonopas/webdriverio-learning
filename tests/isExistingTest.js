beforeEach(function() {
  browser.url("/Hidden-Elements/index.html");
})

describe('Test whether hidden elements exist', function() {
  it('Button display is set to non display but still exists', function(done) {
    var isPresent = browser.isExisting('#not-displayed');
    console.log(isPresent);
    expect(isPresent).to.equal(true);
  
  });

  it('Button display is set to visibility hidden but still exists', function(done) {
    var isPresent = browser.isExisting('#visibility-hidden');
    console.log(isPresent);
    expect(isPresent).to.equal(true);
    
  });

  it('Button display is set to zero opacity but still exists', function(done) {
    var isPresent = browser.isExisting('#zero-opacity');
    console.log(isPresent);
    expect(isPresent).to.equal(true);
    
  });

  it('Header text is visible and exists in the html dom therefore should return true', function(done) {
    var isPresent = browser.isExisting('h1');
    console.log(isPresent);
    expect(isPresent).to.equal(true);
  });
  
  it('There is no such element with the id of #no-such-element therefore should return false', function(done) {
    var isPresent = browser.isExisting('#no-such-element');
    console.log(isPresent);
    expect(isPresent).to.equal(false);
    
  });
});
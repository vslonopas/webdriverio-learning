describe ("Test the webdriver university homepage", function (){
    it ("Output the height of homepage carousel1", function (done) {
      browser.url('./');
      browser.pause(2000);
      var divCarouselHeight = browser.getCssProperty('#udemy-promo-thumbnail', 'height');
      console.log(divCarouselHeight);
    });
})
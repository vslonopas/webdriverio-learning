beforeEach(function(){
	browser.url("/Accordion/index.html");
})
describe('Verify that the correct text appears on the accordion page', function() {
	it('Verify loading complete text is visible after a set duration of time', function() {
		this.timeout(20000);
		elem = $('#hidden-text');
		console.log('Current text'+elem.getText());
		elem.waitForText(1000);

		while (elem.getText() != 'LOADING COMPLETE.') {
			browser.pause(1000);
		}
		console.log(elem.getText());
		expect(elem.getText()).to.equal('LOADING COMPLETE.');

	});
});
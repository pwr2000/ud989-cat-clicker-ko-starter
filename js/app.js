var ViewModel = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
	this.nicknames = ko.observableArray(['Tabtab', 'T-bone', 'Mr. T', 'Tab2']);

	this.title = ko.computed(function () {
		var title;
		var clicks = this.clickCount();
		if (clicks < 10) {
			title = 'Child';
		} else if (clicks < 20) {
			title = 'Teenager';
		} else if (clicks < 30) {
			title = 'Adult';
		} else {
			title = 'Mature';
		}
		return title;
	}, this);

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);

		var count = 0;
		count++;
	};
}

ko.applyBindings(new ViewModel());
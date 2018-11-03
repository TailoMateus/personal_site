var il = new Il();
il.beginFlying();

function Il() {
	var talents = ['code', 'write', 'read', 'think', 'learn', 'run', 'play', 'mathematics', 'science', 'sports', 'podcasts'];
	var currentIndex = 0;
	var nextTalent = function() {
		currentIndex = currentIndex + 1 < talents.length ? currentIndex + 1 : 0;
	};
	
	var talentElement = document.querySelector('#flyup');
	var flyTalents = function() {
		nextTalent();
		talentElement.innerText = talents[currentIndex];
	};
	
	this.beginFlying = function() {
		setInterval(flyTalents, 1200);
	};
	return this;
}

setInterval(flyTalents, 1200);
console.log('Testesss')
var talents = ['code', 'to write', 'to read', 'to learn', 'to run', 'science', 'sports', 'podcasts'];
var currentIndex = 0;

var talentElement = document.querySelector('#flyup');
var flyTalents = function() {
  currentIndex = currentIndex + 1 < talents.length ? currentIndex + 1 : 0;
  talentElement.innerText = talents[currentIndex];
  console.log(talentElement)
};

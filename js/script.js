setInterval(flyTalents, 1200)
let talents = ['code', 'to write', 'to read', 'to learn', 'to run', 'science', 'sports', 'podcasts']
let currentIndex = 0

let talentElement = document.querySelector('#flyup')
function flyTalents() {
  currentIndex = currentIndex + 1 < talents.length ? currentIndex + 1 : 0
  talentElement.innerText = talents[currentIndex]
}

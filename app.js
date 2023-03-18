const pronoun = ['my', 'your', 'his', 'her', 'their', 'our', 'its', 'one', 'any', 'some'];
const adjectives = ['fluffy', 'spicy', 'hilarious', 'elegant', 'gloomy', 'radiant', 'quirky', 'frivolous', 'boisterous', 'fascinating'];
const nouns = ['cat', 'sunset', 'sapphire', 'coffee', 'rainbow', 'dragon', 'volcano', 'ocean', 'galaxy', 'jungle'];
const extensions = ['.org', '.co', '.me', '.tv', '.biz', '.info', '.online', '.store', '.tech', '.club'];


const textContainer = document.getElementById('text-container');
const generateBtn = document.getElementById('generate-btn');

function getRandomIndex(array) {
    let randomIndex = Math.floor(Math.random() * array.length);
    return randomIndex;
}

function generateRandomText(pronoun, adjectives, nouns, extensions) {
    let randomDomain = `www.${pronoun[getRandomIndex(pronoun)]}${adjectives[getRandomIndex(adjectives)]}${nouns[getRandomIndex(nouns)]}${extensions[getRandomIndex(extensions)]}`;
    textContainer.textContent = randomDomain;
    }

generateBtn.addEventListener('click', generateRandomText.bind(null, pronoun, adjectives, nouns, extensions));


const rainOverlay = document.createElement('div');
rainOverlay.classList.add('rain-overlay');
for (let i = 0; i < 100; i++) {
  const raindrop = document.createElement('div');
  raindrop.classList.add('raindrop');
  raindrop.style.left = `${Math.random() * 100}%`;
  raindrop.style.top = `${Math.random() * 100}%`;
  rainOverlay.appendChild(raindrop);
}
document.body.appendChild(rainOverlay);z
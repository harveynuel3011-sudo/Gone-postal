const introSounds = [
  new Audio('https://raw.githubusercontent.com/harveynuel3011/Going-postal/main/audio/what%20fuckin%20morron%20designed%20this%20(1).mp3'),
  new Audio('https://raw.githubusercontent.com/harveynuel3011/Going-postal/main/audio/hi%20there.mp3')
];
];

introSounds.forEach(sound => {
  sound.preload = 'auto';
  sound.volume = 1; 
});


function playRandomIntro() {
  const randomIndex = Math.floor(Math.random() * introSounds.length);
  const selectedIntro = introSounds[randomIndex];
  
  selectedIntro.currentTime = 0;
  selectedIntro.play().catch(error => {
    console.log('Sound blocked by browser (requires user interaction):', error);
  });
}


document.addEventListener('DOMContentLoaded', function() {
  const enterButton = document.querySelector('.acquired-btn');
  if (enterButton) {

    enterButton.addEventListener('click', playRandomIntro, { once: true });
  }
});

const videoIds = [
  'https://www.youtube.com/embed/njX2bu-_Vw4?si=UEFVh6ZOx2nhBwl6', //Video 1
  'https://www.youtube.com/embed/WEwgbKr5R9I?si=h_J4dWOAhzNlNqRF', //Video 2
  'https://www.youtube.com/embed/73zHZbQ3LEo?si=Ur_fXCW_fdvcX9I7'  //Video 3
];

let currentIndex = 0;

const player = document.getElementById('videoPlayer');
const prevButton = document.getElementById('prevBtn'); 
const nextButton = document.getElementById('nextBtn');

function updateVideo() {
  player.src = videoIds[currentIndex];
}

//Next Button
nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % videoIds.length;
  updateVideo();
});

//Previous Button
prevButton.addEventListener('click', () => {

  currentIndex = (currentIndex - 1 + videoIds.length) % videoIds.length;
  updateVideo();
});

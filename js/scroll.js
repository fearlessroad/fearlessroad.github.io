
const html = document.documentElement;
const canvas = document.getElementById("sars");
const context = canvas.getContext("2d");

const frameCount = 135;
const currentFrame = index => (
  `assets/cov2-2021-images/png/untitled.${index.toString().padStart(5, '0')}.png`
)

const preloadImages = () => {
  for (let i = 1; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
  }
};

const img = new Image()
img.src = currentFrame(1);
/*canvas.width=1200;*/
canvas.height=2000;
canvas.width=2000;
/*canvas.width = window.innerWidth;
canvas.height = window.innerHeight;*/
img.onload=function(){
  context.drawImage(img, 0, 0);
}

const updateImage = index => {
  img.src = currentFrame(index);
  context.drawImage(img, 0, 0);
}

window.addEventListener('scroll', () => {  
  const scrollTop = html.scrollTop;
  const maxScrollTop = html.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / maxScrollTop;
  const frameIndex = Math.min(
    frameCount - 1,
    Math.ceil(scrollFraction * frameCount)
  );
  
  requestAnimationFrame(() => updateImage(frameIndex + 1))
});

preloadImages()

// Create, load and draw the image





 //         function scrollVideo() {
 //           var video = $('#video').get(0),
 //             videoLength = video.duration,
 //             scrollPosition = $(document).scrollTop();
 //           
 //           video.currentTime = (scrollPosition / ($(document).height() - $(window).height())) * videoLength*(0.3);
 //         }
//
 //         $(window).scroll(function(e) {
 //           scrollVideo();
 //         });


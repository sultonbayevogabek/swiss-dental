function videoPlay(array, selector) {

   const videosGallery = selectElement(selector);

   array.forEach(({id, posterURL, videoTitle, videoURL}) => {
      videosGallery.innerHTML += `
         <div class="video-wrapper">
            <div class="video">
               <video poster=${posterURL}>
                  <source src=${videoURL} type="video/mp4">
               </video>
               <button class="video-play">
                  <img src="img/icons/play.svg" alt="">
               </button>
            </div>
            <div class="video-gallery__text">
              ${videoTitle}
            </div>
         </div>
      `
   })
   const playButton = selectElement('.video-play'),
      video = selectElement('video'),
      icon = playButton.querySelector('img');


   playButton.addEventListener('click', e => {
      if (video.paused) {
         video.play();
         icon.src = 'img/icons/pause.svg';
      } else {
         video.pause();
         icon.src = 'img/icons/play.svg';
      }
   })
}
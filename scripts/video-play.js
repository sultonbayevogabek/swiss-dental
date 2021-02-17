import {selectAllElements, selectElement} from "./selector-functions";

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
   const playButtons = selectAllElements('.video-play'),
      allVideos = selectAllElements('video');

   playButtons.forEach(btn => {
      btn.addEventListener('click', e => {
         allVideos.forEach(video => {
            video.pause()
            const pauseBtnIcon = video.nextElementSibling.querySelector('img');
            pauseBtnIcon.src = 'img/icons/play.svg';
         });
         
         const currentBtn = e.currentTarget,
            currentBtnIcon = currentBtn.querySelector('img'),
            currentVideo = currentBtn.previousElementSibling;

         if (currentVideo.paused) {
            currentVideo.play();
            currentBtnIcon.src = 'img/icons/pause.svg';
         } else {
            currentVideo.pause();
            currentBtnIcon.src = 'img/icons/play.svg';
         }
      })
   })
}

export default videoPlay;
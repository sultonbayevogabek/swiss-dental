import {selectElement} from "./selector-functions";

function videoPlay() {
   // const videosData = [
   //    {
   //       id
   //    }
   // ]
   const video = selectElement('video'),
      playBtn = selectElement('.video-play'),
      playBtnIcon = selectElement('.video-play img');

   playBtn.onclick = () => {
      if (video.paused) {
         video.play();
         playBtnIcon.src = 'img/icons/pause.svg';
      } else {
         video.pause();
         playBtnIcon.src = 'img/icons/play.svg';
      }
   }
}

export default videoPlay;
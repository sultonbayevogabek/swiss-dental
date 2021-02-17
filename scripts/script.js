'use strict';

import customSelect from "./custom-select";
import sliderSettings from "./sliders-settings";
import siteNav from "./site-nav";
import doctors from "./doctors";
import videoPlay from "./video-play";

document.addEventListener('DOMContentLoaded', () => {
   const videosData = [
      {
         id: 1,
         posterURL: 'img/gallery/poster.png',
         videoURL: 'media/video.mp4',
         videoTitle: 'Технологии будущего для вашего здоровья'
      }
   ];

   customSelect();
   sliderSettings();
   siteNav();
   doctors();

})
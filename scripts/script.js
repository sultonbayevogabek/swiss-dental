'use strict';
//import modules
import customSelect from "./custom-select";
import sliderSettings from "./sliders-settings";
import siteNav from "./site-nav";
import doctors from "./doctors";
import videoPlay from "./video-play";

document.addEventListener('DOMContentLoaded', () => {
   customSelect();
   sliderSettings();
   siteNav();
   doctors();
   videoPlay();
})
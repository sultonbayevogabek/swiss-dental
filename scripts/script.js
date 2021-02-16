'use strict';

document.addEventListener('DOMContentLoaded', () => {

   //slider settings

   $('.single-slider').slick({
      autoplay: true,
      dots: true,
      autoplaySpeed: 2000
   });

   $('.news-slider').slick({
      dots: false,
      infinite: true,
      speed: 300,
      autoplaySpeed: 2000,
      autoplay: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
         {
            breakpoint: 1225,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 1,
               infinite: true,
               dots: false
            }
         },
         {
            breakpoint: 900,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1
            }
         },
         {
            breakpoint: 630,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1
            }
         }
      ]
   });

   // selector functions

   function selectElement(selector) {
      return document.querySelector(selector);
   }

   function selectAllElements(selector) {
      return document.querySelectorAll(selector);
   }

   // navigation bar open and close

   const navOpenBtn = selectElement('.nav-open'),
      navCloseBtn = selectElement('.nav-close'),
      nav = selectElement('.site-nav__ul');

   navOpenBtn.addEventListener('click', () => {
      nav.classList.add('nav-show');
      document.body.style.overflow = 'hidden';
   })

   navCloseBtn.addEventListener('click', () => {
      nav.classList.remove('nav-show');
      document.body.style.overflow = '';
   })

   const doctors = [
      {
         id: 1,
         name: 'Дмитрий Нагиев',
         speciality: ['Имплантолог'],
         bio: 'Доступно множество вариаций отрывков Lorem Ipsum, но большинство из них претерпели изменения в той или иной форме из-за добавленного юмора или случайных слов, которые даже немного.',
         tel: '+998 (94) 123-45-67',
         img: 'https://i.pravatar.cc/380?img=59'
      },
      {
         id: 2,
         name: 'Анна Чапман',
         speciality: ['Маммолог', 'Гинеколог'],
         bio: 'Доступно множество вариаций отрывков Lorem Ipsum, но большинство из них претерпели изменения в той или иной форме из-за добавленного юмора или случайных слов, которые даже немного.',
         tel: '+998 (94) 123-45-67',
         img: 'https://i.pravatar.cc/380?img=45'
      },
      {
         id: 3,
         name: 'Мата Хари',
         speciality: ['Маммолог'],
         bio: 'Доступно множество вариаций отрывков Lorem Ipsum, но большинство из них претерпели изменения в той или иной форме из-за добавленного юмора или случайных слов, которые даже немного.',
         tel: '+998 (94) 123-45-67',
         img: 'https://i.pravatar.cc/380?img=13'
      },
      {
         id: 4,
         name: 'Мата Хари',
         speciality: ['Маммолог'],
         bio: 'Доступно множество вариаций отрывков Lorem Ipsum, но большинство из них претерпели изменения в той или иной форме из-за добавленного юмора или случайных слов, которые даже немного.',
         tel: '+998 (94) 123-45-67',
         img: 'https://i.pravatar.cc/380?img=44'
      },
      {
         id: 5,
         name: 'Иван Витас',
         speciality: ['Кордиолог'],
         bio: 'Доступно множество вариаций отрывков Lorem Ipsum, но большинство из них претерпели изменения в той или иной форме из-за добавленного юмора или случайных слов, которые даже немного.',
         tel: '+998 (94) 123-45-67',
         img: 'https://i.pravatar.cc/380?img=33'
      }
   ]

   // doctors info render

   const doctorsListWrapper = selectElement('.our-doctors__main');

   function doctorsListRender() {
      doctorsListWrapper.innerHTML = '';
      doctors.forEach(({id, name, img}) => {
         const doctorElement = document.createElement('div'),
            doctorImg = document.createElement('img');

         doctorElement.classList.add('doctor');
         doctorElement.id = id;
         doctorElement.addEventListener('click', () => {
            doctorInfoRender(id)
         })
         doctorImg.src = img;
         doctorImg.alt = name + ' image';
         doctorElement.append(doctorImg);
         doctorsListWrapper.append(doctorElement);
      })
   }

   doctorsListRender();

   let doctorInfoClose;
   
   function doctorInfoRender(id) {
      let selectedDoctor;

      doctors.forEach(doctor => {
         if (doctor.id === id)
            selectedDoctor = doctor
      })

      doctorsListWrapper.innerHTML = `
         <div class="doctor-info">
            <div class="doctor-info__img">
               <img src=${selectedDoctor.img} alt=${selectedDoctor.name}>
            </div>
            <div class="doctor-info__text">
               <h3 class="doctor-info__name">${selectedDoctor.name}</h3>
               <div class="doctor-info__specials">${selectedDoctor.speciality}</div>
               <p class="doctor-info__about">
                  ${selectedDoctor.bio}
               </p>
               <div class="doctor-info__tel">
                  <div>Номер врача:</div>
                  <div>${selectedDoctor.tel}</div>
               </div>
            </div>
            <div class="doctor-info__close">
               &times;
            </div>
         </div>
      `;

      doctorInfoClose = selectElement('.doctor-info__close');

      doctorInfoClose.addEventListener('click', () => {
         doctorsListRender();
      })
   }
})
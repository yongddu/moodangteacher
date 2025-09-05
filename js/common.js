document.addEventListener("DOMContentLoaded", () => {
  // 비주얼 슬라이더
  const teamSlider = new Swiper(".team-slider", {
    // 무한 루프
    loop: true,

    // 자동 재생
    autoplay: {
      delay: 3, // 3초마다 자동 슬라이드
      disableOnInteraction: false, // 사용자 상호작용 후에도 자동재생 계속
    },



    // 페이지네이션
    pagination: {
      el: ".swiper-pagination",
      clickable: true, // 페이지네이션 클릭 가능
    },

    // breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
      },
    },
  });
});

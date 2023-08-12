document.addEventListener("DOMContentLoaded", function() {
  const headerToggle = document.querySelector(".header-top-toggle");
  const headerToggleItem = document.querySelectorAll(".header-top-toggle-item");
  console.log(headerToggleItem);
  const headerMenu = document.querySelector(".header-top-menu");
  const isExpand = "is-expand";
  
  let isClicked = false;

  headerToggle.addEventListener("click", function() {
    headerMenu.classList.add(isExpand);
    if (!isClicked) {
      headerToggleItem[0].classList.add("toggle-item-1");
      headerToggleItem[headerToggleItem.length - 1].classList.add("toggle-item-3");
      headerToggleItem[1].classList.add("toggle-item-2");
    } else {
      headerToggleItem[0].classList.remove("toggle-item-1");
      headerToggleItem[headerToggleItem.length - 1].classList.remove("toggle-item-3");
      headerToggleItem[1].classList.remove("toggle-item-2");
      headerMenu.classList.remove(isExpand);
    }

    isClicked = !isClicked;
  })

  window.addEventListener("click", function(e) {
    if(!headerMenu.contains(e.target) && !e.target.matches(".header-top-toggle")) {  
      headerMenu.classList.remove(isExpand);
      headerToggleItem[0].classList.remove("toggle-item-1");
      headerToggleItem[headerToggleItem.length - 1].classList.remove("toggle-item-3");
      headerToggleItem[1].classList.remove("toggle-item-2");
    }
  })
});


// Slick slider
// $(document).ready(function () {
//   $(".quote-list").slick({
//     prevArrow:
//       "<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",
//     nextArrow:
//       "<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",
//     responsive: [
//       {
//         breakpoint: 767,
//         settings: {
//           arrows: false,
//         },
//       },
//     ],
//   });
// // });

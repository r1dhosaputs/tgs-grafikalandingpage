// document.addEventListener("DOMContentLoaded", function () {
//   const navbar = document.querySelector(".navbar");
//   const loginBtn = document.querySelector("#login");
//   const navbarHeight = navbar.offsetHeight;

//   window.addEventListener("scroll", function () {
//     if (window.scrollY > navbarHeight) {
//       // berikan bg transparan
//       navbar.removeAttribute('data-bs-theme');
//       navbar.classList.add("bg-transparent2");
//       navbar.classList.remove("bg-dark");
//       loginBtn.classList.remove("btn-light");
//       loginBtn.classList.add("btn-dark");
//     } else {
//       navbar.classList.remove("bg-transparent2");
//       navbar.classList.add("bg-dark");
//       navbar.setAttribute('data-bs-theme', 'dark');
//       loginBtn.classList.add("btn-light")
//       loginBtn.classList.remove("btn-dark");
//     }
//   });
// });



document.addEventListener("DOMContentLoaded", function () {
    const splide = new Splide("#image-carousel", {
        type: "fade", // Opsi loop
        heightRatio: 0.46,
        video: {
            loop: true,
        },
        rewind: true,
    });

    splide.mount(window.splide.Extensions);
});
document.addEventListener("DOMContentLoaded", function () {
    // Simulate delayed content loading (replace with your actual logic)
    setTimeout(function () {
        var slider = new Splide("#card-slider", {
            type: "loop", // Change type to 'slide' if needed
            perPage: 4,
            perMove: 1,
            autoplay: true,
            pagination: false,
            gap: "20px", // Menentukan jarak antar slide
            breakpoints: {
                1200: {
                    perPage: 2,
                },
                768: {
                    perPage: 1,
                },
            },
        });
        slider.mount();
    }, 2000); // Simulate a 2-second delay
});

document.addEventListener("DOMContentLoaded", function () {
    var splide = new Splide("#gallery-slider", {
        pagination: false,
        // type: "loop",
        //   arrows: false,
        heightRatio: 0.46,
    });

    var thumbnails = document.getElementsByClassName("thumbnail");
    var current;

    for (var i = 0; i < thumbnails.length; i++) {
        initThumbnail(thumbnails[i], i);
    }

    function initThumbnail(thumbnail, index) {
        thumbnail.addEventListener("click", function () {
            splide.go(index);
        });
    }

    splide.on("mounted move", function () {
        var thumbnail = thumbnails[splide.index];

        if (thumbnail) {
            if (current) {
                current.classList.remove("is-active");
            }

            thumbnail.classList.add("is-active");
            current = thumbnail;
        }
    });

    splide.mount();
});



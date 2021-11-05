document.addEventListener("DOMContentLoaded", function () {

    const mp = document.querySelectorAll(".priceannually");
    const switcher = document.querySelector(".slider.round");
    const ap = document.querySelectorAll(".pricemonthly");
    let currentPriceState = "monthly";

    switcher.addEventListener("click", function () {

        if (currentPriceState == "monthly") {

            ap.forEach((b) => {

                b.classList.add("d-none");

            });

            mp.forEach((b) => {

                b.classList.remove("d-none");

            });

            currentPriceState = "annual";

        } 
        
        else {

        mp.forEach((b) => {

            b.classList.add("d-none");

        });

        ap.forEach((b) => {

            b.classList.remove("d-none");

        });
        
        currentPriceState = "monthly";

    }});

});
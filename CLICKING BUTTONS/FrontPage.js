const images = [
    {
        suisei1: "/CLICKING BUTTONS/images/Suisei1.png",
        suisei2: "/CLICKING BUTTONS/images/Suisei2.png",
        suisei3: "/CLICKING BUTTONS/images/Suisei3.png",
        suisei4: "/CLICKING BUTTONS/images/Suisei4.png",
        suisei5: "/CLICKING BUTTONS/images/Suisei5.png"
    },
    {
        miko1: "/CLICKING BUTTONS/images/Miko1.png",
        miko2: "/CLICKING BUTTONS/images/Miko2.png",
        miko3: "/CLICKING BUTTONS/images/Miko3.png",
        miko4: "/CLICKING BUTTONS/images/Miko4.png",
        miko5: "/CLICKING BUTTONS/images/Miko5.png"
    },
    {
        sora1: "/CLICKING BUTTONS/images/Sora1.png",
        sora2: "/CLICKING BUTTONS/images/Sora2.png",
        sora3: "/CLICKING BUTTONS/images/Sora3.png",
        sora4: "/CLICKING BUTTONS/images/Sora4.png",
        sora5: "/CLICKING BUTTONS/images/Sora5.png"
    },
    {
        azki1: "/CLICKING BUTTONS/images/AZKi1.png",
        azki2: "/CLICKING BUTTONS/images/AZKi2.png",
        azki3: "/CLICKING BUTTONS/images/AZKi3.png",
        azki4: "/CLICKING BUTTONS/images/AZKi4.png",
        azki5: "/CLICKING BUTTONS/images/AZKi5.png"
    },
    {
        roboco1: "/CLICKING BUTTONS/images/Roboco1.png",
        roboco2: "/CLICKING BUTTONS/images/Roboco2.png",
        roboco3: "/CLICKING BUTTONS/images/Roboco3.png",
        roboco4: "/CLICKING BUTTONS/images/Roboco4.png",
        roboco5: "/CLICKING BUTTONS/images/Roboco5.png"
    }
]

const getImage = document.querySelector(".image-container");
const displayImage = document.querySelector(".image-display");
const placeClickedImage = document.querySelector("#place-image");
const closeBtn = document.querySelector("#close-img");

//displays all of the images 
images.forEach(group => {
    Object.values(group).forEach(src => {

    //create new div and class card.
    const card = document.createElement("div");
    card.classList.add("card");

    //create new img 
    const img = document.createElement("img");
    img.classList.add("img-filter");
    img.src = src;
    img.alt = src;
    card.appendChild(img);
    getImage.appendChild(card);

    const clickImg = document.querySelectorAll(".img-filter");

    clickImg.forEach(img => {
        img.addEventListener("click", () => {
            displayImage.style.display = "flex";
            placeClickedImage.src = img.src;
        })
    })

    closeBtn.addEventListener("click", () => {
        displayImage.style.display = "none";
    })

    displayImage.addEventListener("click", (event) => {

        if(event.target === displayImage)
        {
            displayImage.style.display = "none";
        }
    })

    });
})


function filterImage(imageFilter)
{
    getImage.innerHTML = "";

    //also displays all of the images
    if(imageFilter === "all")
    {
        images.forEach(group => {
            Object.values(group).forEach(src => {
    
            //create new div and class card.
            const card = document.createElement("div");
            card.classList.add("card");

            //create new img 
            const img = document.createElement("img");
            img.classList.add("img-filter");
            img.src = src;
            img.alt = src;
            card.appendChild(img);
            getImage.appendChild(card);

            const clickImg = document.querySelectorAll(".img-filter");

            clickImg.forEach(img => {
                img.addEventListener("click", () => {
                    displayImage.style.display = "flex";
                    placeClickedImage.src = img.src;
                })
            })

            closeBtn.addEventListener("click", () => {
                displayImage.style.display = "none";
            })

            displayImage.addEventListener("click", (event) => {

                if(event.target === displayImage)
                {
                    displayImage.style.display = "none";
                }
            })


            });
        })
    }
    //filter the display depending on the index number
    else
    {
        //converts the string value to int.
        const index = parseInt(imageFilter, 10);
        const group = images[index];

        Object.values(group).forEach(src => {
            //create new div and class card.
            const card = document.createElement("div");
            card.classList.add("card");

            //create new img 
            const img = document.createElement("img");
            img.classList.add("img-filter");
            img.src = src;
            img.alt = src;
            card.appendChild(img);
            getImage.appendChild(card);


            const clickImg = document.querySelectorAll(".img-filter");

            clickImg.forEach(img => {
                img.addEventListener("click", () => {
                    displayImage.style.display = "flex";
                    placeClickedImage.src = img.src;
                })
            })

            closeBtn.addEventListener("click", () => {
                displayImage.style.display = "none";
            })

            displayImage.addEventListener("click", (event) => {

                if(event.target === displayImage)
                {
                    displayImage.style.display = "none";
                }
            })
        })
    }

}

const selectContainer = document.querySelector(".select-container");

selectContainer.addEventListener("change", (event) => {
    filterImage(event.target.value);
    console.log(event.target.value);
});

// const footer = document.querySelector("footer");
// window.addEventListener("scroll", () => {
//     if(window.scrollY >= 150)
//     {
//         footer.style.display = "flex";
//     }
//     else
//     {
//         footer.style.display = "none";
//     }
// })



window.addEventListener("load", function () {
    function makeSlideshow(sliderName) {
        const slider = document.querySelector(sliderName);
        const sliderMain = slider.querySelector(sliderName + "-main");
        const sliderItems = slider.querySelectorAll(sliderName + "-item");
        const sliderDots = slider.querySelector(sliderName + "-dots");
        const nextBtn = slider.querySelector(sliderName + "-next");
        const prevBtn = slider.querySelector(sliderName + "-prev");
        const dotItems = slider.querySelectorAll(sliderName + "-dot-item");
        const sliderItemWidth = sliderItems[0].offsetWidth;
        const slideLength = sliderItems.length;
        let positionX = 0;
        let index = 0;

        nextBtn.addEventListener("click", function () {
            handleChangeSlideClick(1);
        });

        prevBtn.addEventListener("click", function () {
            handleChangeSlideClick(-1);
        });

        [...dotItems].forEach((item) =>
        item.addEventListener("click", function (e) {
            [...dotItems].forEach(el => el.classList.remove("active"));
            e.target.classList.add("active");
            const slideIndex = parseInt(e.target.dataset.index);
            index = slideIndex;
            positionX = -1 * index * sliderItemWidth;
            sliderMain.style = `transform: translateX(${positionX}px)`
        }));

        function handleChangeSlideClick(direction) {
            if(direction === 1) {
                if(index >= slideLength -1) {
                    index = slideLength -1;
                    return;
                }
                positionX = positionX - sliderItemWidth;
                sliderMain.style = `transform: translateX(${positionX}px)`
                index++;
            } else if(direction == -1) {
                if(index <= 0) {
                    index = 0;
                    return;
                }
                positionX = positionX + sliderItemWidth;
                sliderMain.style = `transform: translateX(${positionX}px)`
                index--;
            }
            [...dotItems].forEach(el => el.classList.remove("active"));
            dotItems[index].classList.add("active");
        }

        const handleChangeSlideAuto = () => {
            let turnBack = 0;
            if (index >= slideLength - 1) {
            index = -1;
            turnBack = 1;
            }
            positionX = turnBack === 1 ? 0 : positionX - sliderItemWidth;
            sliderMain.style = `transform: translateX(${positionX}px);`;
            index++;

            if (sliderDots) {
            sliderDots.querySelector(sliderName + "-dot-item.active").classList.remove("active");
            dotItems[index].classList.add("active");
            }
        };

        setInterval(() => {
            handleChangeSlideAuto();
        }, 5000);
    }
    
    makeSlideshow(".slider")
});


$(document).ready(function ($) {
    const gridItems = document.querySelectorAll('.grid-item');
    const servicesSection = document.getElementById('services-section');

    gridItems.forEach((item) => {
        item.addEventListener('mouseenter', function () {
            const bgImage = this.getAttribute('data-bg');
            servicesSection.style.backgroundImage = `url(${bgImage})`;
            servicesSection.style.backgroundSize = 'cover';
            servicesSection.style.backgroundPosition = 'center';
        });
    });


    const tabButtons = document.querySelectorAll('.tab-button');

    tabButtons.forEach((button) => {
        button.addEventListener('click', function (e) {
            // Remove the active class from all buttons
            tabButtons.forEach((btn) => {
                btn.classList.remove('active');
            });

            // Add the active class to the clicked button
            e.currentTarget.classList.add('active');

            // Get the data-tab attribute from the clicked button
            const tabId = e.currentTarget.getAttribute('data-tab');

            // Remove the active class from all content divs
            document.querySelectorAll('.tab-content').forEach((content) => {
                content.classList.remove('active');
            });

            // Add the active class to the appropriate content div
            const contentDiv = document.getElementById(`tab-${tabId}`);
            if (contentDiv) {
                contentDiv.classList.add('active');
            }
        });
    });


    const carousel = document.querySelector('.carousel');
    const carouselItemsContainer = document.querySelector('.carousel-items');
    let carouselItems = document.querySelectorAll('.carousel-item');
    let activeIndex = Math.floor(carouselItems.length / 2);  // Start from the middle

    function setActiveSlide() {
        carouselItems.forEach((item, index) => {
            item.classList.remove('active');
        });

        carouselItems[activeIndex].classList.add('active');

        // Re-arrange the HTML elements so that the active one is always in the middle
        while (activeIndex !== Math.floor(carouselItems.length / 2)) {
            if (activeIndex > Math.floor(carouselItems.length / 2)) {
            carouselItemsContainer.appendChild(carouselItems[0]);
            activeIndex--;
            } else {
            carouselItemsContainer.insertBefore(carouselItems[carouselItems.length - 1], carouselItems[0]);
            activeIndex++;
            }
            carouselItems = document.querySelectorAll('.carousel-item');
        }
    }

    function rearrangeItemsForward() {
        carouselItemsContainer.appendChild(carouselItems[0]);
        updateCarouselItems();
        activeIndex = (activeIndex - 1 + carouselItems.length) % carouselItems.length;
        setActiveSlide();
    }

    function rearrangeItemsBackward() {
        carouselItemsContainer.insertBefore(carouselItems[carouselItems.length - 1], carouselItems[0]);
        updateCarouselItems();
        activeIndex = (activeIndex + 1) % carouselItems.length;
        setActiveSlide();
    }

    function updateCarouselItems() {
        carouselItems = document.querySelectorAll('.carousel-item');
    }

    document.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowRight') {
            rearrangeItemsForward();
            activeIndex = (activeIndex + 1) % carouselItems.length;
            setActiveSlide();
        } else if (e.key === 'ArrowLeft') {
            rearrangeItemsBackward();
            activeIndex = (activeIndex - 1 + carouselItems.length) % carouselItems.length;
            setActiveSlide();
        }
    });

    document.getElementById('slide-left').addEventListener('click', function () {
        rearrangeItemsBackward();
        activeIndex = (activeIndex - 1 + carouselItems.length) % carouselItems.length;
        setActiveSlide();
    });

    document.getElementById('slide-right').addEventListener('click', function () {
        rearrangeItemsForward();
        activeIndex = (activeIndex + 1) % carouselItems.length;
        setActiveSlide();
    });

    // Initialize the carousel at the middle item
    function initializeCarousel() {
        const middleIndex = Math.floor(carouselItems.length / 2);
        for (let i = 0; i < middleIndex; i++) {
            rearrangeItemsForward();
        }
    }

    initializeCarousel();
    setActiveSlide();
});
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


  
});
const divData = [
    {

        text1: 'Group of 10',
        text2: '20% OFF',
        image: 'https://booking.skyjumpertrampolinepark.com/wp-content/uploads/2023/11/coupon4.webp',
    },
    {

        text1: 'Group of 5',
        text2: '15% OFF',
        image: 'https://booking.skyjumpertrampolinepark.com/wp-content/uploads/2023/11/group-of-5.webp',
    },
    {

        text1: 'Group of 3',
        text2: '10% OFF',
        image: 'https://booking.skyjumpertrampolinepark.com/wp-content/uploads/2023/11/group-of-3.webp',
    },
    {

        text1: 'Single',
        text2: '5% OFF',
        image: 'https://booking.skyjumpertrampolinepark.com/wp-content/uploads/2023/11/coupon1.webp',
    }
];

document.addEventListener('DOMContentLoaded', function () {
    const divSection = document.getElementById('Discounts');

    divData.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('dynamicDiv');


        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const button = document.createElement('button');
        const image = document.createElement('img');

        p1.textContent = item.text1;
        p2.textContent = item.text2;
        button.textContent = "Oneclick"
        image.src = item.image;

        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(button);
        div.appendChild(image);

        divSection.appendChild(div);
    });
});





// JavaScript for automatic image swipe
const cardImages = document.querySelector('.card-images');
let imageIndex = 0;

setInterval(() => {
    imageIndex = (imageIndex + 1) % 5; // Number of images, change '5' if needed
    cardImages.style.transform = `translateX(-${imageIndex * 100}%)`;
}, 2000); // Change image every 2 seconds, modify timing as needed







function initMap() {
    // Specify coordinates for the map center
    const myLatLng = { lat: 19.0728300, lng: 72.8826100 }; // Replace with your desired coordinates

    const map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        zoom: 10
    });

    // Add markers to the map
    const marker1 = new google.maps.Marker({
        position: { lat: -34.5, lng: 150.7 }, // Replace with marker 1 coordinates
        map: map,
        title: 'Marker 1'
    });

    const marker2 = new google.maps.Marker({
        position: { lat: -34.3, lng: 150.5 }, // Replace with marker 2 coordinates
        map: map,
        title: 'Marker 2'
    });

    // You can add more customization or markers to the map as needed
    // Example: map.setOptions({styles: YOUR_CUSTOM_STYLES});
    // Example: new google.maps.Marker({position: myLatLng, map: map, title: 'Marker Title'});
}
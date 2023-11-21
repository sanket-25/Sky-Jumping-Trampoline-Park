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


        const p1 = document.createElement('h4');
        const p2 = document.createElement('h3');
        const button = document.createElement('button');
        const image = document.createElement('img');

        p1.textContent = item.text1;
        p2.textContent = item.text2;
        button.textContent = "Book Now"
        image.src = item.image;

        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(button);
        div.appendChild(image);

        divSection.appendChild(div);
    });
});






const cardImages = document.querySelector('.card-images');
let imageIndex = 0;

setInterval(() => {
    imageIndex = (imageIndex + 1) % 5;
    cardImages.style.transform = `translateX(-${imageIndex * 100}%)`;
}, 2000); 







function initMap() {
    const myLatLng = { lat: 19.0728300, lng: 72.8826100 }; // Mumbai Co-ordinates

    const map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        zoom: 10
    });

    const marker1 = new google.maps.Marker({
        position: { lat: 19.0738300, lng: 72.8824100 }, 
        map: map,
        title: 'Marker 1'
    });

    const marker2 = new google.maps.Marker({
        position: { lat: 19.0423300, lng: 72.8326100}, 
        map: map,
        title: 'Marker 2'
    });

}
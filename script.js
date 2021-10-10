let data = {
    photo: 'images/car_1.jpg',
    title:'car1',
    description: 'Ez az egyik kicsiról a kép'
};
let currentPhoto = 0;
let imagesData = [{photo: 'images/car1.jpg', title: 'car1', description: "Ez az 1. számú kocsi"},
 {photo: 'images/car2.jpg', title: 'car2', description: 'Ez a 2. számú kocsi'},
{photo: 'iamges/car3.jpg', title: 'car3', description: 'Ez a 3. számú kocsi'}];

$('#photo').attr('src', data.photo);
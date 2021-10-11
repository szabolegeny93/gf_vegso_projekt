
var currentPhoto = 0;
let imagesData = [{photo: "images/car_1.jpg", title: "car1", description: "Ez az 1. számú kocsi"},
{photo: "images/car_2.jpg", title: "car2", description: "Ez a 2. számú kocsi"},
{photo: "images/car_3.jpg", title: "car3", description: "Ez a 3. számú kocsi"},
{photo: "images/car_4.jpg", title: "car4", description: "Ez a 4. számú kocsi"},
{photo: "images/car_5.jpg", title: "car5", description: "Ez az 5. számú kocsi"},
{photo: "images/car_6.jpg", title: "car6", description: "Ez a 6. számú kocsi"},];

let loadPhoto = (photoNumber) => {
    $(".image").css("background-image", `url("${imagesData[photoNumber].photo}")`);
    $(".photo-title").text(imagesData[currentPhoto].title);
    $(".photo-description").text(imagesData[currentPhoto].description);
};

//arrows
$(".left_arrow").css("background-image", `url("images/arrow.svg")`);
$(".right_arrow").css("background-image", `url("images/arrow.svg")`);

$(".left_arrow").on("click", () =>{
    
    if (currentPhoto > 0) {
        currentPhoto--;
    }
    else{
        currentPhoto = imagesData.length-1;
    }
    loadPhoto(currentPhoto);
})
$(".right_arrow").on("click", () => {
    
    
    if(currentPhoto < imagesData.length-1){
        currentPhoto++; 
    }  
    else{
        currentPhoto = 0;
    }
    loadPhoto(currentPhoto);;
})

//ready
$(document).ready(function () {
    loadPhoto(currentPhoto);
    thumbnailsLoad();
});

//thumbnails
$(".thumbnails").append($(".box").css("background-image", `url(${imagesData[0].photo})`));
function thumbnailsLoad(params) { 
};

imagesData.forEach((item, index) =>{
    
    $(".thumbnails").append(`<div class="box" data-imageNo="${index}"></div>`);
    $(`.thumbnails>.box[data-imageNo="${index}"]`).css("background-image", `url(${item.photo})`);
});


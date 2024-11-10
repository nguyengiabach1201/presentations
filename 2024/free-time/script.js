const img = document.getElementById("img");
const des = document.getElementById("des");

console.log(img, des);

const gallery = [
    {
        src: "./imgs/1.jpg",
        des: "Thời gian rảnh rỗi",
    },
    {
        src: "./imgs/2.jpg",
        des: "Vui chơi cùng bạn bè",
    },
    {
        src: "./imgs/3.jpg",
        des: "Dành thời gian cho gia đình",
    },
    {
        src: "./imgs/4.jpg",
        des: "Chơi thể thao, vận động để giải trí",
    },
    {
        src: "./imgs/5.jpg",
        des: "Nghiện game - thực trạng phổ biến!",
    },
    {
        src: "./imgs/6.jpg",
        des: "Nghiện mạng xã hội - lờ đờ, uể oải",
    },
    {
        src: "./imgs/7.jpg",
        des: "Nói xấu - hại người, hại ta",
    },
    {
        src: "./imgs/8.jpg",
        des: "Trang web đen - ác quỷ chực chờ",
    },
];

let counter = 0;

setInterval(changeImg, 1000 * 1.5);

function changeImg() {
    if (counter >= gallery.length) {
        counter = 0;
    }
    img.src = gallery[counter].src;
    des.innerHTML = gallery[counter].des;

    counter += 1;
}

changeImg();

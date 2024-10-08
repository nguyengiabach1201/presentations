const img = document.getElementById("img");
const des = document.getElementById("des");

console.log(img, des);

const gallery = [
    {
        src: "./imgs/5.jpg",
        des: "Tuổi học trò hồn nhiên, ngây thơ",
    },
    {
        src: "./imgs/6.jpg",
        des: "Tuổi học trò hồn nhiên, ngây thơ",
    },
    {
        src: "./imgs/7.jpg",
        des: "Tuổi học trò hồn nhiên, ngây thơ",
    },
    {
        src: "./imgs/8.jpg",
        des: "Tuổi học trò hồn nhiên, ngây thơ",
    },
    {
        src: "./imgs/9.jpg",
        des: "Tuổi học trò hồn nhiên, ngây thơ",
    },
    {
        src: "./imgs/10.jpg",
        des: "Tuổi học trò hồn nhiên, ngây thơ",
    },
    {
        src: "./imgs/11.jpg",
        des: "Tuổi học trò hồn nhiên, ngây thơ",
    },
    {
        src: "./imgs/12.jpg",
        des: "Tuổi học trò hồn nhiên, ngây thơ",
    },
    {
        src: "./imgs/13.jpg",
        des: "Tuổi học trò hồn nhiên, ngây thơ",
    },
    {
        src: "./imgs/14.jpg",
        des: "Tuổi học trò hồn nhiên, ngây thơ",
    },
    {
        src: "./imgs/15.jpg",
        des: "Tuổi học trò hồn nhiên, ngây thơ",
    },
    {
        src: "./imgs/16.jpg",
        des: "Tuổi học trò hồn nhiên, ngây thơ",
    },
    {
        src: "./imgs/17.jpg",
        des: "Tuổi học trò hồn nhiên, ngây thơ",
    },
    {
        src: "./imgs/18.jpg",
        des: "Tuổi học trò hồn nhiên, ngây thơ",
    },
    {
        src: "./imgs/19.jpg",
        des: "Tuổi học trò hồn nhiên, ngây thơ",
    },
    {
        src: "./imgs/20.jpg",
        des: "Tuổi học trò hồn nhiên, ngây thơ",
    },
    {
        src: "./imgs/21.jpg",
        des: "Tuổi học trò hồn nhiên, ngây thơ",
    },
    {
        src: "./imgs/22.jpg",
        des: "Tuổi học trò hồn nhiên, ngây thơ",
    },
    {
        src: "./imgs/23.jpg",
        des: "Tuổi học trò hồn nhiên, ngây thơ",
    },
    {
        src: "./imgs/24.jpg",
        des: "Tuổi học trò hồn nhiên, ngây thơ",
    },
    {
        src: "./imgs/25.jpg",
        des: "Tuổi học trò hồn nhiên, ngây thơ",
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

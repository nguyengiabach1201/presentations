const img = document.getElementById("img");
const des = document.getElementById("des");

console.log(img, des);

const gallery1 = [
    {
        src: "./imgs/1.jpg",
        des: "Biến đổi khí hậu, triều cường gây sạt lở ở bờ biển Giang Hải (Phú Lộc)",
    },
    {
        src: "./imgs/2.jpg",
        des: "Hạn hán kéo dài gây ảnh hưởng đến sản xuất nông nghiệp",
    },
    {
        src: "./imgs/3.jpg",
        des: "Tình hình sạt lở bờ sông diễn biến phức tạp",
    },
    {
        src: "./imgs/5.jpg",
        des: "Biến đổi khí hậu gây hạn hán kéo dài, triền miên",
    },
    {
        src: "./imgs/7.jpg",
        des: "Nhiều vụ cháy rừng cũng diễn ra trong các năm tại Thừa Thiên Huế",
    },
    {
        src: "./imgs/8.jpg",
        des: "Sạt lở bờ biển Vinh Hải liên tiếp trong những năm gần đây",
    },

    {
        src: "./imgs/10.jpg",
        des: "Biến đổi khí hậu gây lũ lụt diện rộng trên địa bàn tỉnh",
    },
];
const gallery2 = [
    {
        src: "./imgs/9.jpg",
        des: "Xây dựng kè chống sạt lở là nhiệm vụ cấp bách. Trong ảnh là kè Quảng Công",
    },
    {
        src: "./imgs/6.jpg",
        des: "Trồng rừng trên cát là giải pháp phi công trình tối ưu",
    },
    {
        src: "./imgs/4.jpg",
        des: "Trồng rừng ven đầm phá là một trong những giải lâu dài, bền vững",
    },
];

let counter = 0;
let set = 0;

setInterval(changeImg, 1000 * 5);

function changeImg() {
    counter += 1;

    if (set == 1) {
        if (counter >= gallery1.length) {
            counter = 0;
        }
        img.src = gallery1[counter].src;
        des.innerHTML = gallery1[counter].des;
    } else if (set == 2) {
        if (counter >= gallery2.length) {
            counter = 0;
        }
        img.src = gallery2[counter].src;
        des.innerHTML = gallery2[counter].des;
    } else if (set == 0) {
        img.src = "./imgs/main.jpg";
    }
}

function changeGallery() {
    document.addEventListener(
        "keydown",
        (event) => {
            var name = event.key;
            if (name == "ArrowDown" || name == "ArrowRight") {
                if (set < 2) {
                    set += 1;
                    counter = 0;
                    changeImg();
                }
            }
            if (name == "ArrowUp" || name == "ArrowLeft") {
                if (set > 0) {
                    set -= 1;
                    changeImg();
                }
            }
        },
        false
    );
}

changeImg();
changeGallery();

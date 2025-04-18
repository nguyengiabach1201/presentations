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
    {
        src: "./imgs/11.jpg",
        des: "Sạt lở đất gây nhiều thiệt hại về người và của",
    },
    {
        src: "./imgs/12.jpg",
        des: "Sạt lở đất do lũ lụt tại Thủy điện Rào Trăng 3",
    },
    {
        src: "./imgs/13.webp",
        des: "Trận lụt lịch sử năm 1999",
    },
    {
        src: "./imgs/14.webp",
        des: "Trận lụt lịch sử năm 1999",
    },
    {
        src: "./imgs/15.jpg",
        des: "Sản lượng thủy hải sản giảm còn một nửa so với trước năm 1975",
    },
    {
        src: "./imgs/16.jpg",
        des: "Gần 30 người chết mỗi năm do các trận lũ lụt",
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
    {
        src: "./imgs/17.jpg",
        des: "Nhặt rác để bảo vệ môi trường",
    },
    {
        src: "./imgs/18.jpg",
        des: "Phủ xanh đồi trọc để bù đắp cho các trận cháy rừng",
    },
    {
        src: "./imgs/19.webp",
        des: "Tiết kiệm điện để bảo vệ môi trường",
    },
    {
        src: "./imgs/20.jpg",
        des: "Chạy bộ, đạp xe để giảm lượng phát thải khí nhà kính",
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
            if (name == "ArrowRight") {
                if (set < 2) {
                    set += 1;
                    counter = 0;
                    changeImg();
                }
            }
            if (name == "ArrowLeft") {
                if (set > 0) {
                    set -= 1;
                    changeImg();
                }
            }
            if (name == "ArrowDown") {
                counter += 1;
                if (set == 1 && counter >= gallery1.length) {
                    counter = 0;
                } else if (set == 2 && counter >= gallery2.length) {
                    counter = 0;
                }
                changeImg();
            }
            if (name == "ArrowUp") {
                counter -= 2;
                console.log(counter);
                if (counter < 0) {
                    if (set == 1) {
                        counter = gallery1.length - 1;
                    } else if (set == 2) {
                        counter = gallery2.length - 1;
                    }
                }
                // console.log(counter);
                changeImg();
            }
        },
        false
    );
}

changeImg();
changeGallery();

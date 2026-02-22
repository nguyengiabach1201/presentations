---
title: Hệ Thức Cấp Hai (Quy Tắc Cramer)
theme: academic
paginate: true
style: |
    .slide[data-page="1"], .slide[data-page="2"] {
        display: grid;
        place-items: center;
    }
---

## **Hệ Thức Cấp Hai (Quy Tắc Cramer)**

---

Đây là phương pháp cực nhanh để giải hệ phương trình bậc nhất hai ẩn bằng cách sử dụng **định thức** (đã bị giản lược ở chương trình phổ thông, nên lên bậc Đại học các bạn sẽ được học). Không cần cộng đại số hay thế số phức tạp, chỉ cần tính toán 3 con số là ra kết quả!

---

## Hệ phương trình chuẩn

Xét hệ phương trình có dạng:

$$\begin{cases} a_1x + b_1y = c_1 \\ a_2x + b_2y = c_2 \end{cases}$$

Vậy, công thức nghiệm cho hệ phương trình trên là gì?

---

## Công thức tính các định thức

Chúng ta sẽ tính 3 giá trị định thức:

$$D = \begin{vmatrix} a_1 & b_1 \\ a_2 & b_2 \end{vmatrix} = a_1b_2 - a_2b_1$$

$$D_x = \begin{vmatrix} c_1 & b_1 \\ c_2 & b_2 \end{vmatrix} = c_1b_2 - c_2b_1$$

$$D_y = \begin{vmatrix} a_1 & c_1 \\ a_2 & c_2 \end{vmatrix} = a_1c_2 - a_2c_1$$

---

## Nghiệm của hệ phương trình

Nếu $D \neq 0$, hệ phương trình có nghiệm duy nhất $(x; y)$ được tính bằng:$$x = \frac{D_x}{D}, \quad y = \frac{D_y}{D}$$

---

## Ứng dụng của Quy tắc Cramer

Quy tắc này không chỉ mang tính _hàn lâm_ mà còn cực kỳ hữu ích trong:

- **Số học**: Tìm nghiệm của hệ phương trình bậc nhất hai ẩn
- **Hình học:** Tìm tọa độ giao điểm của hai đường thẳng cắt nhau trong mặt phẳng
- **Lập trình máy tính:** Viết các đoạn code ngắn để giải hệ phương trình (vì chỉ cần dùng phép nhân và trừ) mà không cần phải xét nhiều trường hợp

---

## Cùng thử với phần mềm mẫu

Nhấn vào [đây](https://onlinegdb.com/xvMAmJDP3) để thử với phần mềm sử dụng quy tắc Cramer để xét vị trí tương đối của hai đường thẳng trong mặt phẳng tọa độ $Oxy$ viết bằng Free Pascal!

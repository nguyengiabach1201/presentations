const questions = [
    {
        question: "Các bạn nghĩ ai sẽ là người tặng quà cho 👨‍🍳Tuyết Ngân👨‍🍳 🤔???",
        answers: [
            { text: "🤓Huỳnh Sơn🤓", correct: true },
            { text: "💪Gia Bách💪", correct: false },
            { text: "🔞Minh Khôi🔞", correct: false },
            { text: "🤓Huỳnh Sơn🤓", correct: false },
        ],
    },
    {
        question: "Ùi, đoán được rồi à? Còn 🎀Khánh Hân🎀 🤔?",
        answers: [
            { text: "💪Gia Bách💪", correct: false },
            { text: "🎄Khương Ninh🎄", correct: true },
            { text: "🏋️Trường Mẫn🏋️", correct: false },
            { text: "🩳Bá Lâm🩳", correct: false },
        ],
    },
    {
        question: "Ninh không bị Bách làm gì đâu, yên tâm!!! Vậy còn 🐷Hoài An🐷 🤔?",
        answers: [
            { text: "💧Hoài Nam💧", correct: false },
            { text: "🐷Nguyên Bảo🐷", correct: false },
            { text: "🤓Khánh Toàn🤓", correct: false },
            { text: "🐒Minh Đăng🐒", correct: true },
        ],
    },
    {
        question: "Thấy tội mà thôi cũng kệ :>> Còn ♣️Bảo Châu♣️ thì sao 🤔?",
        answers: [
            { text: "🔞Anh Quân🔞", correct: false },
            { text: "🏀Nhật Huy🏀", correct: false },
            { text: "💪Gia Bách💪", correct: true },
            { text: "🦵🏽Hoàng Vũ🦵🏽", correct: false },
        ],
    },
    {
        question: "Ủa, Bách có tặng bộ bài không ta!?? Hmmm, còn 👉Bảo Nguyên👈 🤔?",
        answers: [
            { text: "🏋️Trường Mẫn🏋️", correct: true },
            { text: "🏀Nhật Huy🏀", correct: false },
            { text: "🏀Gia Hân🏀", correct: false },
            { text: "💧Hoài Nam💧", correct: false },
        ],
    },
    {
        question: "Cặp này hay nè, 🐷Nhật Linh🐷 ai tặng ta 🤔!?",
        answers: [
            { text: "🔞Anh Quân🔞", correct: true },
            { text: "🏀Thái Bảo🏀", correct: false },
            { text: "🏋️Tiến Anh🏋️", correct: false },
            { text: "🐷Nguyên Bảo🐷", correct: false },
        ],
    },
    {
        question: "Ủa? Quân không tặng 🐷Hiếu🐷 rồi ai tặng Hiếu 🤔!!??",
        answers: [
            { text: "🤓Minh Nhật🤓", correct: false },
            { text: "🔞Minh Khôi🔞", correct: false },
            { text: "🤓Khánh Toàn🤓", correct: true },
            { text: "🦵🏽Hoàng Vũ🦵🏽", correct: false },
        ],
    },
    {
        question: "🤓Toàn🤓 với 🔞Quân🔞 là bạn mà, không sao đâu :>> Hmmm, 🐷Giang🐷 à, ai tặng quà đây ta 🤔?",
        answers: [
            { text: "🎅Thanh Minh🎅", correct: false },
            { text: "🔞Minh Khôi🔞", correct: false },
            { text: "💧Hoài Nam💧", correct: true },
            { text: "🔞Nhật Minh🔞", correct: false },
        ],
    },
    {
        question: "Mà 🎄Phương Trinh🎄 ai tặng 🤔?? ",
        answers: [
            { text: "🦵🏽Hoàng Vũ🦵🏽", correct: true },
            { text: "🔭Quang Huy (yêu Vật Lý)🔭", correct: false },
            { text: "🔭Quang Huy (yêu Tiếng Anh)🔭", correct: false },
            { text: "🎄Khương Ninh🎄", correct: false },
        ],
    },
    {
        question: "Còn 🐷Tường🐷 🤔???",
        answers: [
            { text: "🐒Minh Đăng🐒", correct: false },
            { text: "🔭Quang Huy (yêu Vật Lý)🔭", correct: false },
            { text: "🏋️Tiến Anh🏋️", correct: false },
            { text: "🐷Nguyên Bảo🐷", correct: true },
        ],
    },
    {
        question: "Vậy còn 🎀Gia Hân🎀 🤔???",
        answers: [
            { text: "🏋️Tiến Anh🏋️", correct: true },
            { text: "🏀Thái Bảo🏀", correct: false },
            { text: "🔭Quang Huy (yêu Tiếng Anh)🔭", correct: false },
            { text: "🩳Bá Lâm🩳", correct: false },
        ],
    },
    {
        question: "Vậy còn 🎀Phương Linh🎀 (Linh của 🏀Thái Bảo🏀 á, không phải 🎀Linh🎀 kia) 🤔???",
        answers: [
            { text: "🏀Gia Hân🏀", correct: true },
            { text: "🏀Thái Bảo🏀", correct: false },
            { text: "🏋️Tiến Anh🏋️", correct: false },
            { text: "🔭Quang Huy (yêu Tiếng Anh)🔭", correct: false },
        ],
    },
    {
        question: "Còn 🎀Ngọc Hân🎀 ai tặng ta🤔??",
        answers: [
            { text: "🔭Quang Huy (yêu Vật Lý)🔭", correct: true },
            { text: "🤓Minh Nhật🤓", correct: false },
            { text: "🔭Quang Huy (yêu Tiếng Anh)🔭", correct: false },
            { text: "🔞Nhật Minh🔞", correct: false },
        ],
    },
    {
        question: "Còn 🏀Ngọc Nhã🏀 🤔??",
        answers: [
            { text: "🎅Thanh Minh🎅", correct: false },
            { text: "🏀Gia Hân🏀", correct: false },
            { text: "🔞Minh Khôi🔞", correct: false },
            { text: "🤓Minh Nhật🤓", correct: true },
        ],
    },
    {
        question: "Còn 🎀Phương Linh🎀 🤔??",
        answers: [
            { text: "🔭Quang Huy (yêu Tiếng Anh)🔭", correct: false },
            { text: "🔞Minh Khôi🔞", correct: true },
            { text: "🏋️Tiến Anh🏋️", correct: false },
            { text: "🤓Minh Nhật🤓", correct: false },
        ],
    },
    {
        question: "Còn 🏀Bảo Trân🏀 🤔??",
        answers: [
            { text: "🔭Quang Huy (yêu Tiếng Anh)🔭", correct: true },
            { text: "🔞Minh Khôi🔞", correct: false },
            { text: "🏀Gia Hân🏀", correct: false },
            { text: "🔞Nhật Minh🔞", correct: false },
        ],
    },
    {
        question: "Vậy 🎀Bảo Nhi🎀 🤔??",
        answers: [
            { text: "🤓Huỳnh Sơn🤓", correct: false },
            { text: "🔞Minh Khôi🔞", correct: false },
            { text: "🎅Thanh Minh🎅", correct: true },
            { text: "🩳Bá Lâm🩳", correct: false },
        ],
    },
    {
        question: "Vậy 🎀Khánh Ngân🎀 🤔??",
        answers: [

            { text: "💧Hoài Nam💧", correct: false },
            { text: "🏀Nhật Huy🏀", correct: true },
            { text: "🤓Huỳnh Sơn🤓", correct: false },
            { text: "🦵🏽Hoàng Vũ🦵🏽", correct: false },
        ],
    },
    {
        question: "Vậy 🎀Bảo Trâm🎀 🤔??",
        answers: [

            { text: "💧Hoài Nam💧", correct: false },
            { text: "🏀Thái Bảo🏀", correct: true },
            { text: "🔞Minh Khôi🔞", correct: false },
            { text: "🔭Quang Huy (yêu Tiếng Anh)🔭", correct: false },
        ],
    },
];

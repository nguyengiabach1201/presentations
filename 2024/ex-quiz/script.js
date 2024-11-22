const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

let currentQuestionIndex;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
    if (questions.length > currentQuestionIndex + 1) {
        currentQuestionIndex++;
        setNextQuestion();
    } else {
        document.body.style.visibility = "hidden";
    }
});

function startGame() {
    startButton.classList.add("hide");
    currentQuestionIndex = 0;
    questionContainer.classList.remove("hide");
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        button.classList.add(`btn${index + 1}`);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add("hide");
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer() {
    for (button of answerButtonsElement.children) {
        setStatusClass(button, button.dataset.correct);
    }

    console.log(questions.length > currentQuestionIndex + 1);
    nextButton.classList.remove("hide");
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add("correct");
    } else {
        element.classList.add("wrong");
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");
}

const questions = [
    {
        question: "Biểu hiện thể hiện trách nhiệm với bản thân là",
        answers: [
            { text: "Đặt việc vui chơi lên hàng đầu.", correct: false },
            {
                text: "Đặt ra mục tiêu cho các hoạt động của bản thân.",
                correct: true,
            },
            { text: "Đặt việc ăn uống lên hàng đầu.", correct: false },
            { text: "Xem TV, đọc truyện vào mỗi buổi tối.", correct: false },
        ],
    },
    {
        question:
            "Biểu hiện của người có trách nhiệm với bản thân trong học tập là",
        answers: [
            { text: "Luôn trau dồi kiến thức.", correct: true },
            { text: "Điểm số thấp trong kì kiểm tra.", correct: false },
            { text: "Không làm bài tập về nhà.", correct: false },
            { text: "Thân thiện với mọi người.", correct: false },
        ],
    },
    {
        question:
            "Biểu hiện của người có trách nhiệm với bản thân đối với mọi người xung quanh là",
        answers: [
            { text: "Chia bè, chia phái với các bạn.", correct: false },
            { text: "Không tôn trọng với mọi người.", correct: false },
            { text: "Chu đáo với mọi người.", correct: true },
            { text: "Không lễ phép với ông bà, bố mẹ.", correct: false },
        ],
    },
    {
        question: "Biểu hiện của trách nhiệm bản thân với bố mẹ, người thân là",
        answers: [
            {
                text: "Làm việc nhà, thực hành tiết kiệm trong gia đình.",
                correct: true,
            },
            {
                text: "Hỗ trợ và giúp đỡ mọi người khi gặp khó khăn.",
                correct: false,
            },
            { text: "Kiểm soát cảm xúc tiêu cực.", correct: false },
            { text: "Nỗ lực hoàn thành nhiệm vụ được giao.", correct: false },
        ],
    },
    {
        question:
            "Biểu hiện của trách nhiệm bản thân với mọi người trong cộng đồng là",
        answers: [
            { text: "Tập thể dục mỗi sáng.", correct: false },
            { text: "Giữ lời hứa với mọi người.", correct: true },
            { text: "Luôn suy nghĩ theo hướng tích cực.", correct: false },
            { text: "Ăn uống lành mạnh.", correct: false },
        ],
    },
    {
        question:
            "Cách ứng xử đúng khi có người đóng góp ý kiến về điểm yếu của mình là",
        answers: [
            { text: "Trở nên tức giận.", correct: false },
            { text: "Lắng nghe để tự thay đổi.", correct: true },
            { text: "Tự ái trước lời góp ý thiện chí.", correct: false },
            { text: "Cho rằng họ là người xấu.", correct: false },
        ],
    },
    {
        question: "Đâu là cách ứng phó khi thay đổi chỗ ở?",
        answers: [
            {
                text: "Xác định trước những khó khăn, thách thức sẽ phải đối mặt khi sống ở nơi mới.",
                correct: true,
            },
            { text: "Chú ý lắng nghe thầy cô giảng bài.", correct: false },
            { text: "Chủ động học tập, tìm hiểu về bài học.", correct: false },
            { text: "Tích cực giơ tay phát biểu.", correct: false },
        ],
    },
    {
        question: "Đâu là cách ứng xử khi làm một bài Toán khó?",
        answers: [
            { text: "Thích nghi với sự thay đổi.", correct: false },
            { text: "Chuyển sang làm bài tập khác.", correct: false },
            {
                text: "Trao đổi cách làm bài cùng các bạn, học hỏi kinh nghiệm từ những bạn học tốt trong lớp.",
                correct: true,
            },
            { text: "Vui vẻ, hòa đồng với mọi người.", correct: false },
        ],
    },
    {
        question:
            "Đâu là biểu hiện của khả năng thích nghi với những thay đổi trong cuộc sống?",
        answers: [
            { text: "Buồn bã, chán nản trong học tập.", correct: false },
            { text: "Căng thẳng, áp lực trong công việc.", correct: false },
            {
                text: "Chấp nhận từ bỏ những quan điểm, thói quen cũ.",
                correct: true,
            },
            { text: "Cảm xúc thất thường.", correct: false },
        ],
    },
    {
        question: "Hành vi giao tiếp, ứng xử tích cực là",
        answers: [
            { text: "Né tránh giao tiếp.", correct: false },
            {
                text: "Không biết kết hợp các phương tiện phi ngôn ngữ khi giao tiếp.",
                correct: false,
            },
            { text: "Tạo được sự hiểu biết lẫn nhau.", correct: true },
            { text: "Chỉ trích, phê phán người khác.", correct: false },
        ],
    },
    {
        question:
            "Hành vi, lời nói, việc làm thể hiện tôn trọng sự khác biệt và sống hài hòa với các bạn, thầy cô là:",
        answers: [
            {
                text: "Chấp nhận suy nghĩ, cách làm, tính cách hoặc phong cách ăn mặc khác với mình của các bạn.",
                correct: true,
            },
            {
                text: "Chỉ giúp đỡ bạn bè khi có sự đề nghị, yêu cầu của thầy cô, người lớn.",
                correct: false,
            },
            {
                text: "Giữ thái độ khiêm tốn, biết kiểm soát cảm xúc, không kiêu căng khi giao tiếp với các bạn giỏi hơn mình.",
                correct: false,
            },
            {
                text: "Chỉ hợp tác làm việc nhóm với các bạn khi được thầy cô phân công, yêu cầu.",
                correct: false,
            },
        ],
    },
    {
        question:
            "Hành vi, lời nói, việc làm thể hiện tôn trọng sự khác biệt và sống hài hòa với thầy cô là:",
        answers: [
            {
                text: "Hợp tác với các bạn, thầy cô để thực hiện các hoạt động mà thầy cô giao khi bị bắt buộc.",
                correct: false,
            },
            {
                text: "So sánh, đánh giá sự khác biệt trong cách giao tiếp với học sinh của các thầy cô.",
                correct: false,
            },
            {
                text: "Lắng nghe góp ý, nhận xét của thầy cô về bản thân.",
                correct: true,
            },
            {
                text: "Khó chấp nhận sự khác biệt trong phong cách dạy học, làm việc của mỗi thầy cô.",
                correct: false,
            },
        ],
    },
    {
        question:
            "Đâu là cách ứng xử thể hiện tôn trọng sự khác biệt và sống hài hòa với các bạn, thầy cô?",
        answers: [
            {
                text: "So sánh, đánh giá, chỉ trích và phán xét những điểm khác biệt.",
                correct: false,
            },
            { text: "Xa lánh và mỉa mai sự khác biệt.", correct: false },
            {
                text: "Dùng ngôn ngữ cục cằn, thô lô để nhận xét về điểm khác biệt.",
                correct: false,
            },
            {
                text: "Chia sẻ cảm xúc tích cực của bản thân về sự khác biệt.",
                correct: true,
            },
        ],
    },
    {
        question:
            "Đâu là một trong các hoạt động phòng chống bắt nạt học đường?",
        answers: [
            {
                text: "Ưu tiên thời gian cho các hoạt động học tập thay vì các hoạt động phòng chống bắt nạt học đường.",
                correct: false,
            },
            {
                text: "Tổ chức các diễn đàn, thi tìm hiểu, diễn tiểu phẩm,…về phòng chống bắt nạt học đường.",
                correct: true,
            },
            {
                text: "Xem các hình ảnh, video clip về bắt nạt học đường trên mạng xã hội.",
                correct: false,
            },
            {
                text: "Tổ chức tọa đàm về chủ đề Trường học xanh – sạch – đẹp.",
                correct: false,
            },
        ],
    },
    {
        question: "Đâu là hoạt động lao động công ích ở trường?",
        answers: [
            { text: "Tổng vệ sinh trường lớp.", correct: true },
            { text: "Trồng cây xanh tại địa phương.", correct: false },
            {
                text: "Tham gia tọa đàm Trường học xanh – sạch – đẹp.",
                correct: false,
            },
            { text: "Nhặt rác và túi ni-lông tại địa phương.", correct: false },
        ],
    },
];

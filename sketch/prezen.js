// var converter = new showdown.Converter();
// converter.setOption("simplifiedAutoLink", "true");
// converter.setOption("literalMidWordUnderscores", "true");
// converter.setOption("tables", "true");
// converter.setOption("parseImgDimensions", "true");
// converter.setOption("strikethrough", "true");
// converter.setOption("emoji", "true");
// converter.setOption("tasklists", "true");
// converter.setFlavor('github');

fetch("./src/example.md")
    .then((response) => response.text())
    .then((textString) => {
        // var html = converter.makeHtml(textString);
        var html = marked.parse(textString);
        const slides = html.split(/\n<hr>/);
        let currentSlide = 0;

        console.log(html, slides);
        function changeSlide(slideIndex) {
            document.getElementById("container").innerHTML = slides[slideIndex];
            MathJax.typesetPromise();
            hljs.highlightAll();
            mermaid.init();
        }

        function moveToLeftSlide() {
            currentSlide -= 1;
            currentSlide = Math.max(currentSlide, 0);
            changeSlide(currentSlide);
        }

        function moveToRightSlide() {
            currentSlide += 1;
            currentSlide = Math.min(currentSlide, slides.length - 1);
            changeSlide(currentSlide);
        }

        changeSlide(currentSlide);

        // Keyboard support

        document.addEventListener(
            "keydown",
            (event) => {
                var name = event.key;
                if (name == "ArrowDown" || name == "ArrowRight")
                    moveToRightSlide();
                if (name == "ArrowUp" || name == "ArrowLeft") moveToLeftSlide();
            },
            false
        );

        // Touch support

        document.addEventListener("touchstart", handleTouchStart, false);
        document.addEventListener("touchmove", handleTouchMove, false);

        var xDown = null;
        var yDown = null;

        function getTouches(evt) {
            return evt.touches || evt.originalEvent.touches;
        }

        function handleTouchStart(evt) {
            const firstTouch = getTouches(evt)[0];
            xDown = firstTouch.clientX;
            yDown = firstTouch.clientY;
        }

        function handleTouchMove(evt) {
            if (!xDown || !yDown) {
                return;
            }

            var xUp = evt.touches[0].clientX;
            var yUp = evt.touches[0].clientY;

            var xDiff = xDown - xUp;
            var yDiff = yDown - yUp;

            if (Math.abs(xDiff) > Math.abs(yDiff)) {
                if (xDiff > 0) {
                    moveToRightSlide();
                } else {
                    moveToLeftSlide();
                }
            }
            xDown = null;
            yDown = null;
        }
    });

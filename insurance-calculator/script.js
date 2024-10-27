document
    .getElementById("insuranceForm")
    .addEventListener("submit", function (e) {
        e.preventDefault();

        const income = parseFloat(document.getElementById("income").value);
        const years = parseFloat(document.getElementById("years").value);
        const debt = parseFloat(document.getElementById("debt").value);
        const savings = parseFloat(document.getElementById("savings").value);
        const education = parseFloat(
            document.getElementById("education").value
        );

        const totalIncomeReplacement = income * 12 * years;
        const totalCoverage =
            totalIncomeReplacement +
            debt -
            savings * Math.pow(1.01, years) +
            education;

        document.getElementById(
            "result"
        ).textContent = `Bạn sẽ cần khoảng ${totalCoverage.toFixed(
            2
        )} triệu Đồng trong phạm vi bảo hiểm nhân thọ.`;
    });

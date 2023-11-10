document.addEventListener("DOMContentLoaded", function () {
    const numberInput = document.getElementById("numberInput");
    const addNumberButton = document.getElementById("addNumber");
    const sort1Button = document.getElementById("sort1");
    const sortAllButton = document.getElementById("sortAll");
    const numbersList = document.getElementById("numbersList");
    const oddNumbersList = document.getElementById("oddNumbersList");
    const evenNumbersList = document.getElementById("evenNumbersList");

    addNumberButton.addEventListener("click", function () {
        const number = parseInt(numberInput.value);

        if (!isNaN(number)) {
            const listItem = document.createElement("li");
            listItem.textContent = number;

            numbersList.appendChild(listItem);
            numberInput.value = "";

            if (number % 2 === 0) {
                evenNumbersList.appendChild(listItem.cloneNode(true));
            } else {
                oddNumbersList.appendChild(listItem.cloneNode(true));
            }
        }
    });

    sort1Button.addEventListener("click", function () {
        const numberBankItems = numbersList.getElementsByTagName("li");

        if (numberBankItems.length > 0) {
            const firstItem = numberBankItems[0];
            const number = parseInt(firstItem.textContent);

            if (!isNaN(number)) {
                firstItem.remove();

                if (number % 2 === 0) {
                    evenNumbersList.appendChild(firstItem);
                } else {
                    oddNumbersList.appendChild(firstItem);
                }
            }
        }
    });

    sortAllButton.addEventListener("click", function () {
        const numberBankItems = numbersList.getElementsByTagName("li");

        for (let i = 0; i < numberBankItems.length; i++) {
            const item = numberBankItems[i];
            const number = parseInt(item.textContent);

            if (!isNaN(number)) {
                item.remove();

                if (number % 2 === 0) {
                    evenNumbersList.appendChild(item);
                } else {
                    oddNumbersList.appendChild(item);
                }
            }
        }
    });
});

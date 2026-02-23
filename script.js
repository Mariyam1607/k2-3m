

const seasonButtons = document.querySelectorAll(".seasons button");
const monthsSeason = document.querySelector(".months");


const date = {
    winter: {
        months: ["Декабрь", "Январь", "Февраль"],
        bg: "url(https://glstatic.rg.ru/uploads/images/2022/12/08/winter-landscape-636634_960_720_0f6.jpg)",
        color: "#2732fb"
    },
    spring: {
        months: ["Март", "Апрель", "Май"],
        bg: "url(https://i.ytimg.com/vi/OtHGQHXgkno/maxresdefault.jpg)",
        color: "#2bc12b"
    },
    summer: {
        months: ["Июнь", "Июль", "Август"],
        bg: "url(https://yakutia.info/uploads/images/21/04/kGraXokWC9.jpg)",
        color: "#ffcd00"
    },
    autumn: {
        months: ["Сентябрь", "Октябрь", "Ноябрь"],
        bg: "url(https://adebiportal.kz/storage/tmp/resize/news/1200_0_0f7ac697e1d82f1749a9d7eba78bd14d.jpeg)",
        color: "#e34f00"
    }
};

seasonButtons.forEach(button => {
    button.addEventListener("click", () => {
        const season = button.className;
        document.body.style.backgroundImage = date[season].bg
        monthsSeason.innerHTML = ""

        date[season].months.forEach(month => {
            const monthBtn = document.createElement("button")
            monthBtn.textContent = month
            monthBtn.style.backgroundColor = date[season].color
            monthsSeason.appendChild(monthBtn)
        })
    })
})
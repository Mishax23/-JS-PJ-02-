// Получаем ссылки на элементы страницы
const navItemList = document.querySelectorAll(".nav-item");
const cityPropertyAddress = document.getElementById("Address");
const cityPropertySize = document.getElementById("Size");
const cityPropertyTime = document.getElementById("Duration");
const cityPropertyCondition = document.getElementById("Condition");
const imageItem = document.querySelector(".image_item");
const switchPageList = document.querySelectorAll(".choose");
const arrowLeft = document.getElementById("arrow_1");
const arrowRight = document.getElementById("arrow_2");

// Устанавливаем начальный индекс изображения
let currentIndex = 0;

// Определяем класс Room для хранения информации
class Room {
    constructor(address, apartmentSize, repairTime, condition, image) {
        this.address = address;
        this.apartmentSize = apartmentSize;
        this.repairTime = repairTime;
        this.condition = condition;
        this.image = image;
    }
}

// Создаем объекты и добавляем их в список
const roomList = [
    new Room(
        "Rostov-on-Don <br> LCD admiral",
        "81 m2",
        "3.5 months",
        "Upon request",
        "./img/image_1.jpg"
    ),
    new Room(
        "Sochi <br> Thieves",
        "105 m2",
        "4 months",
        "Upon request",
        "./img/image_2.jpg"
    ),
    new Room(
        "Rostov-on-Don <br> Patriotic",
        "93 m2",
        "3 months",
        "Upon request",
        "./img/image_3.jpg"
    )
];

// Обработчики событий для навигации
for (let index = 0; index < navItemList.length; index++) {
    navItemList[index].addEventListener("click", (event) => {
        event.preventDefault();
        switchImage(index);
        switchPage(index);
        currentIndex = index;
    });
}

// Обработчики событий для пагинации
for (let index = 0; index < switchPageList.length; index++) {
    switchPageList[index].addEventListener("click", (event) => {
        event.preventDefault();
        switchImage(index);
        switchPage(index);
        currentIndex = index;
    });
}

// Обработчики событий для стрелок слайдера
arrowLeft.addEventListener("click", (event) => {
    event.preventDefault();
    currentIndex = (currentIndex - 1 + roomList.length) % roomList.length;
    switchImage(currentIndex);
    switchPage(currentIndex);
});

arrowRight.addEventListener("click", (event) => {
    event.preventDefault();
    currentIndex = (currentIndex + 1) % roomList.length;
    switchImage(currentIndex);
    switchPage(currentIndex);
});

// Функция для переключения изображения
function switchImage(index) {
    cityPropertyAddress.innerHTML = roomList[index].address;
    cityPropertySize.innerHTML = roomList[index].apartmentSize;
    cityPropertyTime.innerHTML = roomList[index].repairTime;
    cityPropertyCondition.innerHTML = roomList[index].condition;
    imageItem.src = roomList[index].image;
}

// Функция для переключения пагинации
function switchPage(index) {
    switchPageList.forEach((element) => {
        element.classList.add("point-disable");
    });

    navItemList.forEach((element) => {
        element.classList.remove("active");
    });

    switchPageList[index].classList.remove("point-disable");
    navItemList[index].classList.add("active");
}


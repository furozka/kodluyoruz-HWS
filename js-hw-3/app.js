import menuData from "./menu.json" assert {type: "json"};
const menu = menuData

// Buttons

let btnContainer = document.querySelector(".btn-container");

let addButton = (buttonCategory) => {
    let newButton = document.createElement("button");
    newButton.id = `${buttonCategory}Btn`
    newButton.innerHTML = `${buttonCategory}`;
    newButton.classList = "btn btn-outline-dark btn-item"
    newButton.style.borderRadius = "5px"
    btnContainer.append(newButton)
}

/* ------------------ */

// Menu
let menuRow = document.querySelector(".section-center.row")

let itemImg = (img) => {
    let itemImgDOM = document.createElement("img")
    itemImgDOM.classList = "photo";
    itemImgDOM.src = `${img}`;
    return itemImgDOM
}

let menuTitlePrice = (title, price) => {
    let menuTitleDOM = document.createElement("div")
    menuTitleDOM.classList = "menu-title"
    let itemTitle = document.createElement("h4")
    itemTitle.innerHTML = `${title}`
    let itemPrice = document.createElement("h4")
    itemPrice.innerHTML = `${price}`
    itemPrice.classList = "price"

    menuTitleDOM.append(itemTitle, itemPrice)
    return menuTitleDOM
}

let menuText = (desc) => {
    let menuTextDOM = document.createElement("div")
    menuTextDOM.classList = "menu-text"
    menuTextDOM.innerHTML = `${desc}`
    return menuTextDOM
}


let addMenuItem = (itemId, itemCategory) => {
    // console.log("addMenuItem'a gelen item id ve item category",itemId," --- " ,itemCategory)
    let newItem = document.createElement("div")
    newItem.classList = "col-6 menu-items"
    let item = menu.filter((menuItem) => {
        if (menuItem.id == itemId) {
            let { id, title, category, price, img, desc } = menuItem
            if (itemCategory == "all") {
                let imgDOM = itemImg(img);
                let menuInfoDOM = document.createElement("div")
                menuInfoDOM.classList = "menu-info"
                let menuTitleDOM = menuTitlePrice(title, price)
                let menuTextDOM = menuText(desc)
                menuInfoDOM.append(menuTitleDOM);
                menuInfoDOM.append(menuTextDOM)
                newItem.append(imgDOM);
                newItem.append(menuInfoDOM)
                menuRow.append(newItem);
                console.log("category all added")
            } else if (category == "Korea" && itemCategory == "Korea") {
                let imgDOM = itemImg(img);
                let menuInfoDOM = document.createElement("div")
                menuInfoDOM.classList = "menu-info"
                let menuTitleDOM = menuTitlePrice(title, price)
                let menuTextDOM = menuText(desc)
                menuInfoDOM.append(menuTitleDOM);
                menuInfoDOM.append(menuTextDOM)
                newItem.append(imgDOM);
                newItem.append(menuInfoDOM)
                menuRow.append(newItem);
                console.log("category korea added")
            } else if (category == "Japan" && itemCategory == "Japan") {
                let imgDOM = itemImg(img);
                let menuInfoDOM = document.createElement("div")
                menuInfoDOM.classList = "menu-info"
                let menuTitleDOM = menuTitlePrice(title, price)
                let menuTextDOM = menuText(desc)
                menuInfoDOM.append(menuTitleDOM);
                menuInfoDOM.append(menuTextDOM)
                newItem.append(imgDOM);
                newItem.append(menuInfoDOM)
                menuRow.append(newItem);
                console.log("category japan added")
            } else if (category == "China" && itemCategory == "China") {
                let imgDOM = itemImg(img);
                let menuInfoDOM = document.createElement("div")
                menuInfoDOM.classList = "menu-info"
                let menuTitleDOM = menuTitlePrice(title, price)
                let menuTextDOM = menuText(desc)
                menuInfoDOM.append(menuTitleDOM);
                menuInfoDOM.append(menuTextDOM)
                newItem.append(imgDOM);
                newItem.append(menuInfoDOM)
                menuRow.append(newItem);
                console.log("category china added")
            } else if (category == "Turkey" && itemCategory == "Turkey") {
                let imgDOM = itemImg(img);
                let menuInfoDOM = document.createElement("div")
                menuInfoDOM.classList = "menu-info"
                let menuTitleDOM = menuTitlePrice(title, price)
                let menuTextDOM = menuText(desc)
                menuInfoDOM.append(menuTitleDOM);
                menuInfoDOM.append(menuTextDOM)
                newItem.append(imgDOM);
                newItem.append(menuInfoDOM)
                menuRow.append(newItem);
                console.log("category Turkey added")
            }

        } else {
            return "aa";
        }

    })
    // console.log(item);
}

// Show Categories

let showCategories = (category) => {
    menuRow.innerHTML = "";
    menu.forEach(item => addMenuItem(item.id, category))
    console.log(category, " button pressed")
}



// Event Listeners

let allEventListeners = () => {
    let allBtn = document.querySelector("#AllBtn")
    let koreaBtn = document.querySelector("#KoreaBtn")
    let japanBtn = document.querySelector("#JapanBtn")
    let chinaBtn = document.querySelector("#ChinaBtn")
    let turkeyBtn = document.querySelector("#TurkeyBtn")
    allBtn.addEventListener("click", function () { showCategories("all") })
    koreaBtn.addEventListener("click", function () { showCategories("Korea") })
    japanBtn.addEventListener("click", function () { showCategories("Japan") })
    chinaBtn.addEventListener("click", function () { showCategories("China") })
    turkeyBtn.addEventListener("click", function () { showCategories("Turkey") })
}

// İnitiation Function

let initiateApp = () => {
    addButton("All");
    addButton("Korea");
    addButton("Japan");
    addButton("China");
    addButton("Turkey");
    menu.forEach(item => addMenuItem(item.id, item.category));
    allEventListeners();
}
initiateApp();
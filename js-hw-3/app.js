const menu = [
  {
      id: 1,
      title: "Tteokbokki",
      category: "Korea",
      price: 10.99,
      img:
          "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
      desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
      id: 2,
      title: "Chicken Ramen",
      category: "Japan",
      price: 7.99,
      img:
          "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
      desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
      id: 3,
      title: "Bibimbap",
      category: "Korea",
      price: 8.99,
      img:
          "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
      desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
      id: 4,
      title: "Dan Dan Mian",
      category: "China",
      price: 5.99,
      img:
          "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
      desc: `Dan dan noodle, serving with green onion `,
  },
  {
      id: 5,
      title: "Yangzhou Fried Rice",
      category: "China",
      price: 12.99,
      img:
          "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
      desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
      id: 6,
      title: "Onigiri",
      category: "Japan",
      price: 9.99,
      img:
          "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
      desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
      id: 7,
      title: "Jajangmyeon",
      category: "Korea",
      price: 15.99,
      img:
          "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
      desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
      id: 8,
      title: "Ma Yi Shang Shu",
      category: "China",
      price: 12.99,
      img:
          "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
      desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
      id: 9,
      title: "Doroyaki",
      category: "Japan",
      price: 3.99,
      img:
          "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
      desc: `Red bean paste dessert, serving with honey.`,
  },
];

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

let itemInfo = (info) => {
  let itemInfoDOM = document.createElement("p");

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
  allBtn.addEventListener("click", function () { showCategories("all") })
  koreaBtn.addEventListener("click", function () { showCategories("Korea") })
  japanBtn.addEventListener("click", function () { showCategories("Japan") })
  chinaBtn.addEventListener("click", function () { showCategories("China") })

}

// İnitiation Function

let initiateApp = () => {
  addButton("All");
  addButton("Korea");
  addButton("Japan");
  addButton("China");
  menu.forEach(item => addMenuItem(item.id, item.category));
  allEventListeners();
}
initiateApp();
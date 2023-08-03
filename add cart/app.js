let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'PRODUCT NAME 1',
        image: 'https://www.digitaltrends.com/wp-content/uploads/2021/08/dell-xps-15-oled-2021-laptop.jpg?fit=720%2C720&p=1',
        price: 120000
    },
    {
        id: 2,
        name: 'PRODUCT NAME 2',
        image: 'https://cdn.vox-cdn.com/thumbor/B8-9bvVFUzMDpKSJjqyPGK12NxQ=/0x0:2040x1360/1400x1050/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/22046476/vpavic_4291_20201113_0366.0.jpg',
        price: 120000
    },
    {
        id: 3,
        name: 'PRODUCT NAME 3',
        image:'https://static.toiimg.com/thumb/msid-86835565,width-1280,resizemode-4/86835565.jpg',
        price: 220000
    },
    {
        id: 4,
        name: 'PRODUCT NAME 4',
        image: 'https://m.media-amazon.com/images/I/41QPv5h1veL._SX300_SY300_QL70_FMwebp_.jpg',
        price: 123000
    },
    {
        id: 5,
        name: 'PRODUCT NAME 5',
        image: 'https://m.media-amazon.com/images/I/61amb0CfMGL._SL1500_.jpg',
        price: 320000
    },
    {
        id: 6,
        name: 'PRODUCT NAME 6',
        image: 'https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1681132695/Croma%20Assets/Communication/Mobiles/Images/269892_wm7meq.png/mxw_1440,f_auto',
        price: 120000
    }
];
let listCards  = [];


function initApp(){
    products.forEach((value, key)=>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="${value.image}"/>
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>
            `;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        
        listCards[key] = products[key];
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>
                `;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}
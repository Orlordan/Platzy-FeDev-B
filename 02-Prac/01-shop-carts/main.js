console.log('esta conectado js al HTML?🤔')
const navEmail = document.querySelector('.navbar-email');
const emailMenu = document.querySelector('.desktop-menu');
const menuLines = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const asideShoCart = document.querySelector('.product-detail');
const cartsContainer = document.querySelector('.cards-container');
const proDetailContainer = document.querySelector('.product-detail-sec');
const closeDetailContainer = document.querySelector('.product-detail-close');


navEmail.addEventListener('click', toggleEmailMenu);
menuLines.addEventListener('click', toggleMovileMenu);
shoppingCart.addEventListener('click', toggleShoppingCart);
closeDetailContainer.addEventListener('click', closeProDetail)

function toggleEmailMenu() {
  console.log('click');
  const isShoppingCartClosed = asideShoCart.classList.contains('inactive');
  if(!isShoppingCartClosed){
    asideShoCart.classList.add('inactive')
  }
  
  emailMenu.classList.toggle('inactive');
}
function toggleMovileMenu() {
  const isShoppingCardClosed = asideShoCart.classList.contains('inactive');
  if(!isShoppingCardClosed){
    asideShoCart.classList.add('inactive')
  }
  closeProDetail()  
  mobileMenu.classList.toggle('inactive');
}
function toggleShoppingCart() {
  const isMovileMenuClosed = mobileMenu.classList.contains('inactive');
  const isEmailMenuClosed = emailMenu.classList.contains('inactive');
  const isproDetailClosed = proDetailContainer.classList.contains('inactive');
  
  if(!isproDetailClosed){
    proDetailContainer.classList.add('inactive');
  }
  if(!isMovileMenuClosed){
    mobileMenu.classList.add('inactive');
  }
  if(!isEmailMenuClosed){
    emailMenu.classList.add('inactive');
  }
  asideShoCart.classList.toggle('inactive');
  console.log('im clicking');
}
function openAsideTwo() {
  asideShoCart.classList.add('inactive');
  proDetailContainer.classList.remove('inactive');
}
function closeProDetail() {
  proDetailContainer.classList.add('inactive')
}
//-----------------------Main - Content -----------------
const productList = [];
productList.push({
  name: 'bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
  name: 'Laptop',
  price: 1000,
  image: 'https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=10',
});
productList.push({
  name: 'Book',
  price: 50,
  image: 'https://images.pexels.com/photos/256450/pexels-photo-256450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
  name: 'bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
  name: 'Laptop',
  price: 1000,
  image: 'https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=10',
});
productList.push({
  name: 'Book',
  price: 50,
  image: 'https://images.pexels.com/photos/256450/pexels-photo-256450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
  name: 'bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
  name: 'Laptop',
  price: 1000,
  image: 'https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=10',
});
productList.push({
  name: 'Book',
  price: 50,
  image: 'https://images.pexels.com/photos/256450/pexels-photo-256450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
console.log(productList)
/* for (const iterator of productList) {
  console.log(iterator.name);
}
for (const iterator in productList) {
  console.log(iterator);
} */
function renderProductList(List) {
  for (const product of List) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openAsideTwo);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
    const productInfoDiv = document.createElement('div');
    const productInfoPrice = document.createElement('p');
    productInfoPrice.innerText = '$' + product.price;
    const productInfoName = document.createElement('p');
    productInfoName.innerText = product.name;
    productInfoDiv.appendChild(productInfoPrice);
    productInfoDiv.appendChild(productInfoName);
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')
  
    productInfoFigure.appendChild(productImgCart);
    
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
    
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    cartsContainer.appendChild(productCard);
    
    
  }
}
renderProductList(productList)
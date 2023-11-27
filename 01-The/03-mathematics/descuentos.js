const btn = document.querySelector('#calculate');
const inputCoupon = document.querySelector('#coupon');
const inputPrice = document.querySelector('#price');
const pResult = document.querySelector('#result');

btn.addEventListener('click', calculateDiscount );

const couponsList = [];
couponsList.push({
  name: 'arrays1',
  discount: 30,
});
couponsList.push({
  name: 'arrays2',
  discount: 20,
});
couponsList.push({
  name: 'arrays3',
  discount: 10,
});

/*! Con objetos 
  const couponsObj = {
  'abc': 30,
  'dfg': 25,
  '123': 15,
  'yapa': 10,
  'taca': 5,  
} */

function calculateDiscount() {
  const price = Number(inputPrice.value);
  const coupon = inputCoupon.value;

  if (!price || !coupon) {
    pResult.innerText = 'Please fill the form';
    return;
  }
  let discount;
  function couponFilter(couponEl){
   return couponEl.name == coupon;
  }
  /* CON FILTER-SOLUCION *validar el array
  const couponInArray = couponsList.filter(couponFilter);
  
  if (couponInArray.length > 0) {
    discount = couponInArray[0].discount; */
  const couponInArray = couponsList.find(couponFilter);
  
  if (couponInArray) {
    discount = couponInArray.discount;
  } else {
    pResult.innerText = 'No coupon validate';
    console.log(couponInArray);
    return;
  }

  console.log({
    coupon,
    discount,
    couponInArray,
    couponsList,
  });
  /* if (couponsObj[coupon]) {
    discount = couponsObj[coupon]
  } else {
    pResult.innerText = 'No coupon validate';
    return;
  } */
  const newPrice = (price * (100 - discount)) / 100;
  pResult.innerText = 'The new price is $' + newPrice;
}










/*   2 - POCOS CUPONES

  if (!price || !coupon) {
    pResult.innerText = 'Please fill the form';
    return;
  }
  

  if (coupon == 'juan') {
    discount = 30;
  } else if (coupon == 'lucas') {
    discount = 20; 
  } else {
    pResult.innerText = 'No coupon validate';
  
  console.log({ price, discount})
   */
  


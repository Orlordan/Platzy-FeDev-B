/* AVERAGE - CON FOR 
function average(list) {
  for (let i = 0; i < list.length; i++) {
    addList += list[i]
    console.log(addList);
  }
  const averagex = addList / list.length
  console.log(averagex)
  return averagex
  // lista.length
} */
/* AVERAGE CON REDUCE */

/* function average(list) {
  function addAll(valueAccumulated, newValue) {
    return valueAccumulated + newValue;
  }
  const addList = list.reduce(addAll);
  const averagex = addList / list.length
  console.log(averagex)
  return averagex
  // lista.length
} */
/* Forma MUY reducida */
function average(list) {
  const addList = list.reduce((a, b) => a + b);
  const averagex = addList / list.length
  console.log(averagex)
  return averagex
}
function oddOrEven (list) {
  /* list.length % 2 == 0 ? console.log('Even') : console.log('Odd'); */
  return !(list.length % 2);
}
function median(list) {
  const sorted = list.sort((a, b) => a - b);
  if (oddOrEven) {
    console.log('era par')
    const lowerIndex = (sorted.length / 2) - 1;
    const higherIndex = sorted.length / 2;
    average([sorted[lowerIndex], sorted[higherIndex]])
  } else {
    let medianEven = Math.floor(sorted.length / 2);
    console.log('es inpar')
    return sorted[medianEven];
  }
}
const array99 = [20, 1, 2, 2, 20, 20, 3, 20, 4, 'abc', 'ab', 1, 2, 3, 5, 5, 5, 'abc']
function mode (list) {
  const listCount = {};
  for (let i = 0; i < list.length; i++){
    const el = list[i];
    if (listCount[el]) {
      listCount[el] += 1;
    } else {
      listCount[el] = 1;
    }
  }
  const listArray = Object.entries(listCount)
  console.log(listCount, listArray);
  const sortedBi = listArray.sort((a, b) => a[1] - b[1]);
  console.log(sortedBi);
  const theMostRepi = sortedBi[sortedBi.length - 1];
  console.log(theMostRepi);
  return theMostRepi[0];
}
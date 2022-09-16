const myArray = [
  ['One', 'Two', 'Three'],
  ['One', 'Two', 'Three'],
  ['One', 'Two', 'Three'],
]

// const myNestedArray = `${myArray[0][1]}`;

const createListItems = arr =>{
  let items = '';
  for (let i = 0; i < arr.length; i++){
    items += `<li>${arr[i][0]}, ${arr[i][1]}, ${arr[i][2]}</li>`
  }
  return items;
}



document.querySelector('main').innerHTML = `
  <ol>
    ${createListItems(myArray)}
  </ol>
`;
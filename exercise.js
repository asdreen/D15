/*    exercise 21    */
const x = "John";
const y = "Doe";
console.log(x + " " + "W" + " " + y);

/*    exercise 22    */
const cv = {
    name: "Asdren",
    surname: "Jerliu",
    email: "asdren.jerliu@gmail.com",
};
console.log(cv);

/*    exercise 23    */
delete cv.email;
console.log(cv);

/*    exercise 24    */
const arrayOfStrings = ["3", "BMW", "-5", "Linux", "0", "75", "Alfa Romeo", "121", "Volvo", "4"];
console.log(arrayOfStrings);

/*    exercise 25    */
for (arrForEach of arrayOfStrings) {
    console.log(arrForEach);
}

/*    exercise 26    */
const arrayOfNumbers = Array(100) 
				.fill()
				.map(() => Math.floor(100 * Math.random())); 
console.log(arrayOfNumbers);

/*    exercise 27    */
const minAndMax = function () {
    const min = Math.min(...arrayOfNumbers);
    console.log(min);
    const max = Math.max(...arrayOfNumbers);
    console.log(max);
}
console.log(minAndMax());

/*    exercise 28    */
let multiArray = Array(3).fill().map(
    () => Array(10).fill().map(
      () => Math.floor(Math.random() * 10)
    )
  );
  console.log(multiArray);


/*    exercise 29    */
    let first = (["Audi", "Germany", "Albania"], ["Green", "Mercedes", "South Africa"]);
    let longest = first.reduce( function( a, b ) {
        return a.length > b.length ? a : b
    }, '');
    
    console.log(longest )
  
/*    exercise 30    */
     let second = (["56", "66", "121"], ["322", "3", "44"]);
     let highest = second.reduce( function( a, b ) {
         return a.length > b.length ? a : b
     }, '');
     
     console.log(highest)


/*    exercise 31 (DOM Exercises)   */
const getElement = document.getElementById("border");
console.log(getElement);

/*    exercise 32    */
const getName = document.getElementsByTagName('td');
console.log(getName);

/*    exercise 33    */
const printTd = function () {
   for (let i = 0; i <getName.length; i++) {
       getName[i].innerText
    }
}
console.log(printTd);

/*    exercise 34    */

const h1 = document.querySelector("h1");
        h1.innerText = "My New Page";
        console.log(h1);


/*    exercise 35    */
function addRow(tableID) {
   
    let tableRef = document.getElementById(tableID);
    let newRow = tableRef.insertRow(-1);
    let newCell = newRow.insertCell(0);
    let newText = document.createTextNode('New bottom row');
    newCell.appendChild(newText);
  }
   addRow('border');
   
/*    exercise 36    */
const addClaas = function () {
    const tableRow = document.querySelectorAll("tr")
    for (let i = 0; i < tableRow.length; i++) {
        tableRow[i].classList.add("test")
    }
}
addClaas();

/*    exercise 37    */
const addBackground = function () {
    const links = document.querySelectorAll("a")
    for (let i = 0; i < links.length; i++) {
        links[i].style.backgroundColor = "red"
    }
}
addBackground();

/*    exercise 38    */
window.onload = function exampleFunction() {
    console.log('The Script will load now.');
}

/*    exercise 39    */
let node = document.createElement('li');
node.appendChild(document.createTextNode('Water'));
 
document.querySelector('ul').appendChild(node);


/*    exercise 40    */

function empty(element) {
    while(element.firstElementChild) {
       element.firstElementChild.remove();
    }
  }
  let parent = document.getElementById("parent");
  empty(parent);




/*    exercise 41 (Extras Exercises)   */
  function mouseOver() {
    document.getElementsByTagName("a:link").style.color = "Green";
  }
  
  function mouseOut() {
    document.getElementsByTagName("a:link").style.color = "black";
  }
  mouseOver();


/*    exercise 42      */
  function myFunction(){
    document.getElementsByTagName('img')[0].style.display = "none"
  }

/*    exercise 43     */
  function myFunction() {
    let x = document.getElementById("border");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }


/*    exercise 44     */
let sumTable = document.getElementById("border"), sumVal = 0;
for(let i = 1; i < sumTable.row.length; i++)
{
    sumTable = sumTable + parseInt(sumTable.rows[i].cells[2].innerHTML);
}
document.getElementById("val").innerHTML = "Sum Value = " + sumVal
console.log(sumVal);

/*    exercise 45     */
const numberOne = document.querySelector('h1');

// EVENT LISTENER TO CONCATINATE 1
numberOne.addEventListener('click', runEventOne);

function runEventOne(e) {
  if (Result.textContent === 'RESULT HERE' || Result.textContent === '0') {
    Result.textContent = 1;
  } else {
    Result.textContent += 1;
  }
}
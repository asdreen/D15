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

/*    exercise 31    */
const getElement = document.getElementById("container");
console.log(getElement);

/*    exercise 32    */
const getName = document.getElementsByTagName('td');
console.log(getName);
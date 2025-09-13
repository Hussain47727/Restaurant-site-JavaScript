// Our data
const fruits = ['Apple', 'Banana', 'Mango', 'orange']

// use map to convert array into <li> element
const fruitItems = fruits.map(fruit => `<li>${fruit}</li>`)

document.getElementById('fruit-list').innerHTML = fruitItems.join("")

const student = [
    { Name: 'Ali', age: 22, grade: 'A' },
    { Name: 'Yawer', age: 24, grade: 'B' },
    { Name: 'Hasnain', age: 20, grade: 'A+' }
];

const studentList = student.map(names => `<li> Name :${names.Name}, 
      Age : ${names.age}, Grade : ${names.grade }</li>`)
document.getElementById('student').innerHTML = studentList.join("")
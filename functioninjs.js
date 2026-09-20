//creatind an array using array literal
let arr1 = [10,20,30,40,50]
console.log("Array 1:",arr1)
console.log("Array 1 length:",arr1.length)

//creating an array using new keyword
let arr2 =['Hello','world!',1,2,3,true,false,[1,2,3],
          {id:2500031128,name:'leena',course:'cse'}]
console.log("Array 2:",arr2)
console.log("Array 2 length:",arr2.length)
for (let i=0;i<arr2.length;i++){
    console.log(arr2[i],"Type of:",typeof(arr2[i]))
}

//creating an array using new keyword
let arr3 = new Array(10,20,30,40,50)
console.log("Array 3:",arr3)
console.log("Array 3 length:",arr3.length)

console.log(arr2[3])//accessing the 4th element of an array
console.log(arr3[4])//accessing the 5th element of an array 
console.log(arr2[8].name)//accessing the name property of an object which is present in an array
console.log(arr2[7][1])//accessing the 2nd element of an array which is present in an array
//modifyung the arrray elements using index
arr1[0]=100
console.log("Modified Array 1:",arr1)
arr2[1]='everyone'
console.log("Modified Array 2:",arr2)
arr3[4]=500
console.log("Modified Array 3:",arr3)

//methods of an array
console.log("length of arr1:",arr1.length)
arr1.push(60)//adding an element at the end of an array
console.log("After push:",arr1)
arr1.pop()//removing an element from the end of an array
console.log("After pop:",arr1)
arr1.unshift(5)//adding an element at the beginning of an array
console.log("After unshift:",arr1)
arr1.shift()//removing an element from the beginning of an array
console.log("After shift:",arr1)    
//returns index of 1st occurrence of an element in an array
console.log("Index of 30:",arr1.indexOf(30))
console.log("Index of 100:",arr1.indexOf(100))
console.log("Index of 500:",arr1.indexOf(500))//returns -1 if the element is not present in an array

//adding an element at the end of array
let arr4 = [1,2,3,4,5]
arr4.push('javascript')
console.log("After push:",arr4)
//removing an element from the end of an array
arr4.pop()
console.log("After pop:",arr4)
//adding an element at the beginning of an array
arr4.unshift('welcome')
console.log("After unshift:",arr4)
//removing an element from the beginning of an array
arr4.shift()
console.log("After shift:",arr4)  
//adding element at beginning of the array using splice method
arr4.unshift('hello')
console.log("After unshift:",arr4)

//extracting a portion of an array using slice method
let arr5 =arr4.slice(1,4)//extracting elements from index 1 to 3
console.log("Extracted portion of an array:",arr5)

//inserting an element at a specific index using splice method
arr4.splice(2,0,'javascript')//inserting 'javascript' at index 2
console.log("After inserting an element at index 2:",arr4)
console.log("",arr4.includes(23))
console.log("",arr4.join('-'))
let arr6=[3,4,5,4]
let arr7=[3,6,8,6]
let arr8=arr6.concat(arr7)
let students = [
    {id: 1, name: 'Alice', age: 20},
    {id: 2, name: 'Bob', age: 22},
    {id: 3, name: 'Charlie', age: 21},
    {id: 4, name: 'David', age: 23},
    {id: 5, name: 'Eve', age: 20}
]
console.log("students array sfter sorting by id in descending order:",students)
let arr11 =[3,5,6,8]
let arr12= arr11.filtter(x=>)


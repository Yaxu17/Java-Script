//Day1

//let obj= {
//    name: "Yokshit",
//    age: 20,
//    city: "Chennai",
//}
//console.log(obj);   

// const para = document.querySelector(".para")
// para.innerText = "fewhfvigfvLWbhbwgyibxjVBUIRGRUGUBUfe"
// para.style.color = "blue"
// console.log(para)

// const para1 = document.getElementById("pa")
// para1.style.color = "red"
// para1.innerText = "New Text"
// console.log(para1)

//Day2

// const para2 = document.getElementsByClassName("para")
// para2[0].innerText = "First paragraph"
// para2[1].innerText = "Second paragraph"
// para2[0].style.color = "green"
// para2[1].style.color = "purple"
// console.log(para2)

// let arr = [12,32,43,54,65]
// arr.forEach((ele)=>console.log(ele)) // do not creates a new array
// const newArr = arr.map((ele)=> ele/2) // creates a new array
// console.log(newArr)

// const container = document.querySelector(".container")
// container.innerHTML = "<h1>This is a heading</h1><p>This is a paragraph</p>"
// console.log(container)

//Day3

const btn = document.querySelector("button")
btn.classList.add("btn")
btn.addEventListener("click", function(){alert("submited!!!")})
btn.addEventListener("mouseover",function(){console.log("tap to submit")})
function rem()
{
    alert()
}
btn.removeEventListener()
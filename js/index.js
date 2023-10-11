// nav change icon 
function myFunction(x) {
    x.classList.toggle("change");
  }

//   open navbar 

const menuIcon = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("open-navbar");
});



// faq 

var ask = document.getElementsByClassName("basic-question-ask");
var i;

for (i = 0; i < ask.length; i++) {
  ask[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var basicquestionanswer = this.nextElementSibling;
    if (basicquestionanswer.style.display === "block") {
      basicquestionanswer.style.display = "none";
    } else {
      basicquestionanswer.style.display = "block";
    }
  });
}


// pagination 

// const pageNumbers = document.querySelector(".pageNumbers");
// const paginationList = document.getElementById("paginationList");
// const listItems = paginationList.querySelectorAll(".topics-cabinets-part");
// const prevButton = document.getElementById("prev");
// const nextButton = document.getElementById("next");

// const contentLimit = 10;
// const pageCount = Math.ceil(listItems.length / contentLimit);
// let currentPage = 1;

// const displayPageNumbers = (index) =>{
//   const pageNumber = document.createElement("a");
//   pageNumber.innerText = index;
//   pageNumber.setAttribute('href', '#');
//   pageNumber.setAttribute("index", index);
//   pageNumbers.appendChild(pageNumber);
// };

// const getPageNumbers = ()=>{
//   for(let i=1; i <= pageCount; i++){
//     displayPageNumbers(i);
//   };
// };

// const disableButton = (button) => {
//   button.classList.add("disabled");
//   button.setAttribute("disabled", true);
// };

// const enableButton = (button) => {
//   button.classList.remove("disabled");
//   button.removeAttribute("disabled");
// };

// const controlButtonsStatus = () =>{
//   if(currentPage == 1){
//     disableButton(prevButton);
//   }
//   else {
//     enableButton (prevButton);
//   }
//   if(pageCount == currentPage) {
//     disableButton (nextButton);
//   }
//   else {
//     enableButton(nextButton);
//   }
// };

// const handleActivePageNumber = () => {
//   pageNumbers.querySelectorAll('a').forEach((button) =>{
//     button.classList.remove("active");
//     const pageIndex = Number(button.getAttribute("index"));
//     if(pageIndex == currentPage){
//       button.classList.add('.active');
//     }
//   });
// };

// const setCurrentPage = (pageNum) => {
//   currentPage = pageNum;

//   handleActivePageNumber();
//   controlButtonsStatus();

//   const prevRange = (pageNum -1) * contentLimit;
//   const currRange = pageNum * contentLimit;

//   listItems.forEach((item, index) => {
//     item.classList.add('hidden');
//     if(index >= prevRange && index < currRange){
//       item.classList.remove('hidden');
//     }
//   });
// };

// window.addEventListener('load', ()=>{
//   getPageNumbers();
//   setCurrentPage();

//   prevButton.addEventListener('click', ()=>{
//     setCurrentPage(currentPage - 1);
//   });

//   nextButton.addEventListener("load", ()=>{
//     setCurrentPage(currentPage + 1);
//   });

//   document.querySelector('a').forEach((button) =>{
//     const pageIndex = Number(button.getAttribute('index'));

//     if(pageIndex){
//       button.addEventListener('click', () =>{
//         setCurrentPage(pageIndex);
//       });
//     };
//   });

// });


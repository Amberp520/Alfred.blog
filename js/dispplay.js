import { blogs } from "./blog.js";
let html = "";
const display = document.querySelector("section");
//const ulList= document.querySelector("ul")
//const postInputs= document.querySelectorAll(".product input"get
//const comment = querySelector(".comment")

function view() {
  blogs.forEach((blog) => {
    console.log(blog.author)
    html+=`
    <div class="product">
      <div class = "Con"><img class="photo" src="${blog.blogImage}"></div>
      <div class="dateCon">
        <p class="time">${blog.time}</p>
        <p class="time">${blog.date}</p>
      </div>
      <h1 class="title">${blog.blogTitle}</h1>
      <p class="story">${blog.blogStory}</p>
      <p class="Author">Author : ${blog.author}</p>
      
    <script> ${blog.commen}</script>
      <i class="fa-solid fa-heart"></i> 
  </div>
`
  });

  display.innerHTML = html
}
view()

const buttons = document.querySelectorAll(".product i");
let colOr = false;
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    button.style.color = "red";
    let like = Number(button.textContent)|| 0
    like++;

    if (!colOr) {
      button.style.color = "red"
      colOr = true;
      like = 1;

    } else {
      button.style.color = ""
      colOr = false;
      like=""
    }
      button.textContent = like;
  });
});

const readMoreBtns = document.querySelector(".append")
const text = document.querySelector(".text")
 readMoreBtns.addEventListener("click",()=>{
  text.classList.toggle("show")
    if(readMoreBtns.innerHTML==="Read More"){
      readMoreBtns.innerHTML = "Read Less"
    }else{
        readMoreBtns.innerHTML = "Read More"
   }
  })

  const readMoreBtn1 = document.querySelector(".append1")
  const text1= document.querySelector(".text1")
  const list = document.querySelector(".list")
    readMoreBtn1.addEventListener("click",()=>{
      text1.classList.toggle("show1")
      if(readMoreBtn1.innerHTML==="Read More"){
        readMoreBtn1.innerHTML = "Read Less"
      }else{
          readMoreBtn1.innerHTML = "Read More"
      }
  
  
    })
  
    const readMoreBtn2 = document.querySelector(".append2")
    const text2= document.querySelector(".text2")
      readMoreBtn2.addEventListener("click",()=>{
        text2.classList.toggle("show2")
        if(readMoreBtn2.innerHTML==="Read More"){
          readMoreBtn2.innerHTML = "Read Less"
        }else{
            readMoreBtn2.innerHTML = "Read More"
        }
    
    
      })
    
      const readMoreBtn3= document.querySelector(".append3")
      const text3= document.querySelector(".text3")
      readMoreBtn3.addEventListener("click",()=>{
          text3.classList.toggle("show3")
          if(readMoreBtn3.innerHTML==="Read More"){
            readMoreBtn3.innerHTML = "Read Less"
          }else{
              readMoreBtn3.innerHTML = "Read More"
          }
      
      
        })
      
       const readMoreBtn4= document.querySelector(".append4");
       const text4 = document.querySelector(".text4");
       readMoreBtn4.addEventListener("click",()=>{
       text4.classList.toggle("show4");
       if(readMoreBtn4.innerHTML==="Read More"){
        readMoreBtn4.innerHTML="Read Less"
       }else{
       readMoreBtn4.innerHTML="Read More"
       }
       })

       const readMoreBtns5= document.querySelector(".append5");
       const text5= document.querySelector(".text5");
     readMoreBtns5.addEventListener("click",()=>{
    text5.classList.toggle("show5");
       if(readMoreBtns5.innerHTML==="Read More"){
         readMoreBtns5.innerHTML="Read Less"
       }else{
         readMoreBtns5.innerHTML="Read More"
        }
       })

       const readMoreBtns6= document.querySelector(".append6");
       const text6= document.querySelector(".text6");
       readMoreBtns6.addEventListener("click",()=>{
        text6.classList.toggle("show6");
        if(readMoreBtns6.innerHTML==="Read More"){
          readMoreBtns6.innerHTML="Read Less"
        }else{
          readMoreBtns6.innerHTML="Read More"
        }
       })

       
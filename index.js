const ratingEls = document.querySelectorAll(".rating");
const btnEle= document.getElementById("btn");
const containerEle = document.getElementById("container")
var selectedrating ="";
ratingEls.forEach((ratingEl)=>{
    ratingEl.addEventListener("click",(event)=>{
  removeActive();
  selectedrating = event.target.innerText;
  selectedrating = event.target.parentNode.innerText;
  event.target.classList.add("active")
  event.target.parentNode.classList.add("active")
    })
});
btnEle.addEventListener("click", ()=>{
    if(selectedrating != ""){
      containerEle.innerHTML =`
      <strong>Thank you! </strong>
      <br>
      <br>
      <strong> Feedback:${selectedrating}</strong>
      `
    }
})
function removeActive(){
    ratingEls.forEach((ratingEl)=>{
        ratingEl.classList.remove('active');
    })
}
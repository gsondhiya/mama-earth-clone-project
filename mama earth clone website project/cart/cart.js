var value= JSON.parse(localStorage.getItem("cartdata"))||[]

   function data (value){
     document.querySelector("#cart").innerHTML =null
  value.map(function(elem,index){

//   maindiv
    var maindiv= document.createElement("div")
    maindiv.setAttribute("class","maindiv")
// img

    var image= document.createElement("img")
    image.setAttribute("src",elem.poster)
    image.setAttribute("class","cartimg")
    var imgdiv= document.createElement("div")
    imgdiv.append(image)

   let name= document.createElement("h3")
name.innerText= elem.name
let detail= document.createElement("p")
detail.innerText= elem.detail
let rating = document.createElement("p")
rating.innerText= elem.rating
let price= document.createElement("h3")
price.innerText = elem.price
    var detaildiv= document.createElement("div")
    detaildiv.setAttribute("class","detaildiv")
   detaildiv.append(name,detail,rating,price)

    var button = document.createElement("button")
    button.innerText = "remove"
    button.setAttribute("class","remove")
   button.addEventListener("click",function(){
    removebutton(index)
 })
 var removediv= document.createElement("div")
 removediv.setAttribute("class",removediv)
 removediv.append(button)
   maindiv.append(imgdiv,detaildiv,button)
    document.querySelector("#cart").append(maindiv)
  })
  var total= value.reduce(function(acc,elem){
    return elem.price+acc
  },0)
  document.querySelector("#cart_total").textContent= total
}

  
  data (value)
  function removebutton(index){
    value.splice(index,1)
    localStorage.setItem("cartdata",JSON.stringify(value))
    data (value)
  }

document.querySelector("#but").addEventListener("click",function(){
    alert("Your order Succesfully placed")
})

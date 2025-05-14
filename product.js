//Menuicon functionality

var sidenav = document.getElementById("sidenav")
var closenav = document.getElementById("closenav")
var menuicon = document.getElementById("menuicon")

menuicon.addEventListener("click", function () {
    sidenav.style.right = 0
})

closenav.addEventListener("click", function () {
    sidenav.style.right = "-50%"
})

//search functionality

var search = document.getElementById("search")
var productcontainer = document.getElementById("product-container")
var productlist = productcontainer.querySelectorAll("div")


search.addEventListener("keyup", function () {
    var enteredValue = event.target.value.toUpperCase()

    for (count = 0; count < productlist.length; count = count + 1) {
        var productName = productlist[count].querySelector("h1").textContent
        if (productName.toUpperCase().indexOf(enteredValue) < 0) 
            {
            productlist[count].style.display = "none"
        }
        else {
            productlist[count].style.display = "block"
        }
    }
})
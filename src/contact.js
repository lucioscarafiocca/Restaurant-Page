export {PageLoadContact}

function PageLoadContact() {
    const parent = document.querySelector("#content")
    const header = document.createElement("h1")
    header.textContent = "Contact Information"
    const text = document.createElement("p")
    text.textContent = "Phone Number: +54911 74973284" 
    const text2 = document.createElement("p")
    text2.textContent = "Email Adress : realemail@gmail.com"
    const text3 = document.createElement("p")
    text3.textContent = "You can also find us on twitter at :  @bestRestaurantEver"
    
    parent.appendChild(header)
    parent.appendChild(text)
    parent.appendChild(text2)
    parent.appendChild(text3)
    
}
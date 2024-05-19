export {PageLoadMenu}

function PageLoadMenu () {
    const parent = document.querySelector("#content")
    const header = document.createElement("h1")
    const container = document.createElement("div")
    header.textContent = "Menu"
    parent.appendChild(header)
    parent.appendChild(container)
    const a = makeSection("Starter","Tomato Soup","Bean Salad","Toast")
    const b = makeSection("Main Course","Autumn Stew","Summer Salad","Spring Soup")
    const c = makeSection("Dessert","Chocolate cake","Vanilla Ice Cream","Peach Chessecake")
    container.appendChild(a)
    container.appendChild(b)
    container.appendChild(c)
}

function makeSection (h2,b1, b2,b3) {
    const container = document.createElement("div")
    const header = document.createElement("h2")
    header.textContent = h2
    const block = document.createElement("div")
    const block2 = document.createElement("div")
    const block3 = document.createElement("div")
    block.textContent = `${b1}        7.45`
    block2.textContent = `${b2}     7.45`
    block3.textContent = `${b3} 7.45`
    container.appendChild(header)
    container.appendChild(block)
    container.appendChild(block2)
    container.appendChild(block3)
    
    return container

}
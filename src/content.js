export {PageLoadWelcome}

function PageLoadWelcome () {
    const parent = document.querySelector("#content")
    const header = document.createElement("h1")
    header.textContent = "Welcome to the Restaurant"
    const text = document.createElement("p")
    text.textContent = "The Old Ebbitt Grill, Washington's oldest saloon, was founded in 1856 when, according to legend, innkeeper William E. Ebbitt bought a boarding house. Today, no one can pinpoint the house exact location, but it was most likely on the edge of present-day Chinatown.As a boarding house, the Ebbitt guest list read like a Who's Who of American History. President McKinley is said to have lived there during his tenure in Congress, and Presidents Ulysses S. Grant, Andrew Johnson, Grover Cleveland, Theodore Roosevelt and Warren Harding supposedly refreshed themselves at its stand-around bar."
    parent.appendChild(header)
    parent.appendChild(text)
    
}
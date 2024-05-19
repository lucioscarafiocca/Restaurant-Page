import './style.css';
import {PageLoadWelcome} from "./content"
import {PageLoadContact} from "./contact"
import { PageLoadMenu } from './menu';

//PageLoadWelcome()

const home = document.querySelector(".home")
const contact = document.querySelector(".contact")
const menu = document.querySelector(".menu")

PageLoadMenu()
tabSwitcher(home,PageLoadWelcome)
tabSwitcher(contact,PageLoadContact)
tabSwitcher(menu,PageLoadMenu)

function tabSwitcher (value,type) {
  value.addEventListener ("click", () => {
    const parent = document.querySelector("#content")
    parent.textContent = ""
    type()
  })
}

var el=document.getElementsByTagName('h1')
el.onClick=changeText(el)

function changeText(id) {
    id.innerHTML = "Ooops!";
}
  
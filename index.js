var element = document.getElementById('number');
var text = element.innerText || element.textContent; // or element.textContent || element.innerText
element.innerHTML = text;
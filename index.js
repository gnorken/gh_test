const p = document.querySelector('p');
p.onmouseover = logMouseOver;
p.onmouseout = logMouseOut;

function logMouseOver() {
  p.textContent = 'MOUSE OVER detected';
}

function logMouseOut() {
  p.textContent = 'MOUSE OUT detected';
  setTimeout(() => p.textContent = "That was intense.", 1200);
  setTimeout(() => p.innerHTML = `Don't&nbsp;<span id="double_lines_yo">hoover</span>&nbsp;around.`, 3000);
}


const temp = document.getElementById('myDiv');
temp.onmouseover = tempMouseOver;
temp.onmouseout = tempMouseOut;

function tempMouseOver() {
  temp.style.transform = 'rotate(0.5turn)';
  temp.classList.toggle('myToggle');
}

function tempMouseOut() {
  temp.style.transform = 'rotate(1turn)';
}
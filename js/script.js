const box = document.getElementById('box');
const widthInput = document.getElementById('widthInput');
const heightInput = document.getElementById('heightInput');
const timeInput = document.getElementById('timeInput');
const colorInput = document.getElementById('colorInput');
const submitButton = document.getElementById('btn');

const btnStyle = {
   color: 'black',
   width: '100px',
   height: '100px',
   transition: '1s',
}
box.style.backgroundColor = btnStyle.color;
box.style.width = btnStyle.width;
box.style.height = btnStyle.height;
box.style.transition = btnStyle.transition;

submitButton.addEventListener('click', function () {
   //width
   btnStyle.width = widthInput.value;
   if (widthInput.value.includes("px")) {
      box.style.width = btnStyle.width;
   } else {
      box.style.width = btnStyle.width + 'px';
   }

   //height 
   btnStyle.height = heightInput.value;
   if (heightInput.value.includes("px")) {
      box.style.height = btnStyle.height;
   } else {
      box.style.height = btnStyle.height + 'px';
   }

   //time transition
   btnStyle.time = timeInput.value;
   if (timeInput.value == "") {
      box.style.transition = btnStyle.transition;
   } else if (timeInput.value.includes("s")) {
      box.style.transition = btnStyle.time;
   } else {
      box.style.transition = btnStyle.time + 's';
   }

   //color
   btnStyle.color = colorInput.value;
   box.style.backgroundColor = btnStyle.color;

});

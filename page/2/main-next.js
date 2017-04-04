const my     = _id("my"),
      mx     = _id("mx"),
      boxY   = _id("box-y"),
      boxX   = _id("box-x"),
      sb     = _id("sb"),
      box    = _id("box"),
      next   = _id("next"),
      cong   = _id("congratulation");

const TOP    = box.getBoundingClientRect().top;
const LEFT   = box.getBoundingClientRect().left;
boxY.textContent = 0;
boxX.textContent = 0;
sb.addEventListener('click', function() {
  let x = mx.value;
  let y = +my.value;

  if ( !Number.isInteger(y) ) {
    alert('Введите целое число');
    return false;
  }
  if ( isNaN(+x) ) {
    if ( x == "auto" || x == 'auto;') {
      x = 250;
    }
  }
  if ( !isNaN(+x) ){
    if ( !Number.isInteger(+x) ) {
      alert('Введите целое число');
      return false;
    }
  }

  box.style.marginTop = y + 'px';

  box.style.marginLeft= x + 'px';
  // let rc = Math.floor(box.getBoundingClientRect().top - TOP);
  if(y == 120 && x == 250) {
    next.style.display = 'block';
    cong.style.display = 'block';
    sb.style.display = 'none';
  }
  boxY.textContent = y;
  boxX.textContent = x;
  mx.value = 0;
  my.value = 0;
});

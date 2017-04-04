const my_top     = _id("my-top"),
      my2_top    = _id("my2-top"),
      my_btn     = _id("my-btn"),
      my2_btn    = _id("my2-btn"),
      mx         = _id("mx"),
      mx2        = _id("mx2"),
      boxYT       = _id("box-yt"),
      boxYB       = _id("box-yb"),
      box2YT      = _id("box2-yt"),
      box2YB      = _id("box2-yb"),
      sb         = _id("sb"),
      box        = _id("box"),
      box2       = _id("box2"),
      next       = _id("next"),
      cong       = _id("congratulation");

const TOP    = box.getBoundingClientRect().top;
const TOP2    = box2.getBoundingClientRect().top;
const LEFT   = box.getBoundingClientRect().left;
const LEFT2   = box2.getBoundingClientRect().left;
boxYT.textContent = 0;
box2YT.textContent = 0;
boxYB.textContent = 0;
box2YB.textContent = 0;
sb.addEventListener('click', function() {
  let x = mx.value;
  let x2 = mx2.value;
  let yt = my_top.value;
  let yb = my_btn.value;
  let yt2 = my2_top.value;
  let yb2 = my2_btn.value;

  box.style.margin= yt + ' ' + x + ' ' + yb;
  box2.style.margin= yt2 + ' ' + x2 + ' ' + yb2;


  if (x == "auto" || x == "auto;" || x == "250px") {
    if (x2 == "auto" || x2 == "auto;" || x2 == "250px") {
      if ( yt == "50px" && parseInt(yb) <= 25 && parseInt(yt2) == 25) {
        next.style.display = 'block';
        cong.style.display = 'block';
        sb.style.display = 'none';
      }
    }
  }
  boxYT.textContent = yt;
  boxYB.textContent = yb;
  box2YT.textContent = yt2;
  box2YB.textContent = yb2;

});

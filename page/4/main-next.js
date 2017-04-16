const my_top     = _id("my-top"),
      display    = _id("my-display"),
      va         = _id("my-va"),
      sb         = _id("sb"),
      cong       = _id("congratulation"),
      item       = _class("item"),
      box        = _id("box"),
      box1       = _id("box1"),
      box2       = _id("box2");

sb.addEventListener('click', function() {
  var m_left  = my_top.value;
  var disp    = display.value;
  var v_align = va.value;

    var res=`margin-left: ${m_left}
    display: ${disp};
    vertical-align: ${v_align};
  `;
 console.log("v_align ", v_align);
 console.log("disp ", disp);
 console.log("m_left ", m_left);
  my_top.value = m_left;
  display.value = disp;
  va.value = v_align;

  for (var i = 0; i < item.length; i++) {
    item[i].setAttribute('style', 'display:' + disp + "vertical-align:"
    + v_align + "margin-left:" + m_left );
    // item[i].style.verticalAlign = v_align;
    // item[i].style.marginLeft = m_left;

  }
  // item.style.display = disp;
  // box.style.cssText = res;
  // box1.style.cssText = res;
  // box2.style.cssText = res;



  if ( m_left == "50px" || m_left == "50px;" ) {
    if ( disp == "inline-block" || disp == "inline-block;") {
      if ( v_align == "top" || v_align == "top;" ||  v_align == "text-top;" || v_align == "text-top") {
        // next.style.display = 'block';
        cong.style.display = 'block';
        sb.style.display = 'none';
      }
    }
  }


});

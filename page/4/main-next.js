const my_top     = _id("my-top"),
      display    = _id("my-display"),
      va         = _id("my-va"),
      sb         = _id("sb"),
      cong       = _id("congratulation"),
      box        = _id("box"),
      box1       = _id("box1"),
      box2       = _id("box2");

sb.addEventListener('click', function() {
  let  m_left = my_top.value;
  let disp    = display.value;
  let v_align = va.value;

    var res=`margin-left: ${m_left}
    display: ${disp};
    width: ${disp};
    vertical-align: ${v_align}; \
  `;
  box.style.cssText = res;
  box1.style.cssText = res;
  box2.style.cssText = res;



  if ( m_left == "50px;") {
    if ( disp == "inline-block;") {
      if ( v_align == "top" || v_align == "top;" ||  v_align == "text-top;") {
        // next.style.display = 'block';
        cong.style.display = 'block';
        sb.style.display = 'none';
      }
    }
  }


});

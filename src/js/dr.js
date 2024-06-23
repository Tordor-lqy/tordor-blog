export default {
    mounted(el) {
      el.style.cursor = 'move';
      el.onmousedown = function (e) {
        const disX = e.clientX - el.offsetLeft;
        const disY = e.clientY - el.offsetTop;
  
        document.onmousemove = function (e) {
          let left = e.clientX - disX;
          let top = e.clientY - disY;
  
          // Prevent dragging out of viewport
          left = Math.max(0, Math.min(left, document.documentElement.clientWidth - el.offsetWidth));
          top = Math.max(0, Math.min(top, document.documentElement.clientHeight - el.offsetHeight));
  
          el.style.left = left + 'px';
          el.style.top = top + 'px';
        };
  
        document.onmouseup = function () {
          document.onmousemove = null;
          document.onmouseup = null;
        };
  
        return false;
      };
    },
  };
  
var baBar = document.querySelector('.before-after__bar');
var baToogle = document.querySelector('.before-after__toggle');

function getCoords(elem) {
  var box = elem.getBoundingClientRect();
  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}

if (baBar && baToogle) {
  baToogle.addEventListener("mousedown", function(evt){
    evt.preventDefault();

    var toogleCoords = getCoords(baToogle);
    var barCoords = getCoords(baBar);
    var shiftX = evt.pageX - toogleCoords.left;

    var documentMouseMove = function(evt){
      evt.preventDefault();

      var minX = barCoords.left - toogleCoords.offsetWidth/2;
      var maxX = barCoords.left +  barCoords.offsetWidth + toogleCoords.offsetWidth/2;

      var newX = evt.pageX - shiftX - minX;
      if (newX < minX) newX = minX;
      if (newX > maxX) newX = maxX;

      baToogle.style.marginLeft = newX;
    }

    document.addEventListener("mousemove",documentMouseMove, false);

    document.addEventListener("mouseup", function(evt){
      evt.preventDefault();
      document.removeEventListener("mousemove",documentMouseMove, false);
    });
  });

}

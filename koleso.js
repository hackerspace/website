function keke() {
  var paper = Raphael(document.getElementById("rkoleso"), 280, 280);

  function rotit(x, y, rad) {
    return [x*Math.cos(rad) - y*Math.sin(rad),
            x*Math.sin(rad) + y*Math.cos(rad)];
  }

  Raphael.fn.wheel = function(x, y, r, sz, count, rot) {
    var path = "M".concat(x," ", y);
    var a = 2 * r * Math.sin(3.14/count);

    for (var i = 0; i < count; i++) {
      var xy2 = rotit(a/2,   0, 2*3.14*i/count);
      var xy1 = rotit( 0,  -sz, 2*3.14*i/count);
      var xy  = rotit(a/2,  -sz, 2*3.14*i/count);
      path = path.concat("c",xy2[0]," ", xy2[1], " ", xy1[0], " ", xy1[1], " ", xy[0], " ", xy[1]);
      var xy2 = rotit(a/2,   0, 2*3.14*i/count);
      var xy1 = rotit( 0,  sz, 2*3.14*i/count);
      var xy  = rotit(a/2, sz, 2*3.14*i/count);
      path = path.concat("c",xy2[0]," ", xy2[1], " ", xy1[0], " ", xy1[1], " ", xy[0], " ", xy[1]);
    };

    return this.path(path);
  }

  var k = paper.wheel(60, 60, 40, 15, 10, 0);
  k.attr("stroke", "#fff");
  k.attr("stroke-width", 2);
  k.attr("stroke-opacity", 0.9);
  k.attr("fill", "#444");
  var anim = Raphael.animation({transform: "r36"}, 1000);
  k.animate(anim.repeat(Infinity));

  var k = paper.wheel(60, 155, 40, 15, 10, 18);
  k.attr("stroke", "#fff");
  k.attr("stroke-width", 2);
  k.attr("stroke-opacity", 0.9);
  k.attr("fill", "#444");
  k.transform("r18");
  var anim = Raphael.animation({transform: "r-18"}, 1000);
  k.animate(anim.repeat(Infinity));

  var k = paper.wheel(155, 60, 40, 15, 10, 0);
  k.attr("stroke", "#fff");
  k.attr("stroke-width", 2);
  k.attr("stroke-opacity", 0.9);
  k.attr("fill", "#444");
  k.transform("r18");
  var anim = Raphael.animation({transform: "r-18"}, 1000);
  k.animate(anim.repeat(Infinity));

  var k = paper.wheel(155, 155, 40, 15, 10, 18);
  k.attr("stroke", "#fff");
  k.attr("stroke-width", 2);
  k.attr("stroke-opacity", 0.9);
  k.attr("fill", "#444");
  k.transform("r0");
  var anim = Raphael.animation({transform: "r36"}, 1000);
  k.animate(anim.repeat(Infinity));

}

$( function() {
  keke();
});

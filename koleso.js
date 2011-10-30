function keke() {
  var paper = Raphael(document.getElementById("rkoleso"), 280, 280);

  function rotit(x, y, rad) {
    return [x*Math.cos(rad) - y*Math.sin(rad),
            x*Math.sin(rad) + y*Math.cos(rad)];
  }

  Raphael.fn.wheel = function(x, y, r, sz, count, rot) {
    var a = 2 * r * Math.sin(3.14/count);
    var path = "M".concat(x-a/2," ", y-r);

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

  for (var i = 0; i < 6; i++) {
    for (var j = 0; j < 6; j++) {
      var k = paper.wheel(33+i*43, 33+j*43, 18, 5, 20, 0);
      paper.circle(33+i*43, 33+j*43, 5).attr({"fill": "white"});
      k.attr("stroke", "#fff");
      k.attr("stroke-width", 1);
      k.attr("stroke-opacity", 0.9);
      k.attr("fill", "#444");
      k.mouseover(
          function () {this.attr('fill', '#555');}
      ).mouseout(
          function () {this.attr('fill', '#444');});
      k.transform("r".concat(-9*((i+j) % 2)));
      var anim = Raphael.animation({transform: "r".concat((i+j) % 2 == 0 ? -18: 9)}, 2000);
      k.animate(anim.repeat(Infinity));
    }
  }
}

$( function() {
  keke();
});

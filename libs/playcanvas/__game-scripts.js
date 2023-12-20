var CameraPath = pc.createScript("cameraPath");
CameraPath.attributes.add("html", {
  type: "asset",
  assetType: "html",
  title: "HTML Asset",
}),
  CameraPath.attributes.add("css", {
    type: "asset",
    assetType: "css",
    title: "CSS Asset",
  }),
  CameraPath.attributes.add("pathRoot", { type: "entity", title: "Path Root" }),
  CameraPath.attributes.add("duration", {
    type: "number",
    default: 10,
    title: "Duration Secs",
  }),
  CameraPath.attributes.add("startTime", {
    type: "number",
    default: 0,
    title: "Start Time (Secs)",
    description: "Start the path from a specific point in time",
  }),
  (CameraPath.prototype.initialize = function () {
    this.createPath(),
      this.on("attr:pathRoot", function (t, i) {
        t && (this.createPath(), (this.time = 0));
      }),
      this.on("attr:time", function (t, i) {
        this.time = pc.math.clamp(this.startTime, 0, this.duration);
      }),
      (this.time = pc.math.clamp(this.startTime, 0, this.duration)),
      (this.lookAt = new pc.Vec3()),
      (this.up = new pc.Vec3()),
      (this.flyingThrough = !0);
  }),
  (CameraPath.prototype.update = function (t) {
    var i;
    this.flyingThrough
      ? ((this.time += t),
        this.time > this.duration && (this.time -= this.duration),
        (i = this.time / this.duration))
      : (i = this.pathSlider.value / this.pathSlider.max),
      this.entity.setPosition(
        this.px.value(i),
        this.py.value(i),
        this.pz.value(i),
      ),
      this.lookAt.set(this.tx.value(i), this.ty.value(i), this.tz.value(i)),
      this.up.set(this.ux.value(i), this.uy.value(i), this.uz.value(i)),
      this.entity.lookAt(this.lookAt, this.up);
  }),
  (CameraPath.prototype.createPath = function () {
    var t = pc.CURVE_CARDINAL;
    (this.px = new pc.Curve()),
      (this.px.type = t),
      (this.py = new pc.Curve()),
      (this.py.type = t),
      (this.pz = new pc.Curve()),
      (this.pz.type = t),
      (this.tx = new pc.Curve()),
      (this.tx.type = t),
      (this.ty = new pc.Curve()),
      (this.ty.type = t),
      (this.tz = new pc.Curve()),
      (this.tz.type = t),
      (this.ux = new pc.Curve()),
      (this.ux.type = t),
      (this.uy = new pc.Curve()),
      (this.uy.type = t),
      (this.uz = new pc.Curve()),
      (this.uz.type = t);
    var e = this.pathRoot.children,
      a = 0,
      h = [],
      s = new pc.Vec3();
    for (h.push(0), i = 1; i < e.length; i++) {
      var r = e[i - 1],
        u = e[i];
      s.sub2(r.getPosition(), u.getPosition()), (a += s.length()), h.push(a);
    }
    for (i = 0; i < e.length; i++) {
      var n = h[i] / a,
        p = e[i],
        o = p.getPosition();
      this.px.add(n, o.x), this.py.add(n, o.y), this.pz.add(n, o.z);
      var d = o.clone().add(p.forward);
      this.tx.add(n, d.x), this.ty.add(n, d.y), this.tz.add(n, d.z);
      var c = p.up;
      this.ux.add(n, c.x), this.uy.add(n, c.y), this.uz.add(n, c.z);
    }
  }),
  (CameraPath.prototype.addUi = function () {
    var t = this,
      i = document.createElement("style");
    document.head.appendChild(i),
      (i.innerHTML = this.css.resource || ""),
      (this.div = document.createElement("div")),
      this.div.classList.add("container"),
      (this.div.innerHTML = this.html.resource || ""),
      document.body.appendChild(this.div),
      (this.resumeFlythroughButton = this.div.querySelector(".button")),
      (this.pathSlider = this.div.querySelector(".slider")),
      this.resumeFlythroughButton.addEventListener("click", function () {
        t.flyingThrough = !0;
      }),
      this.pathSlider.addEventListener("input", function () {
        (t.flyingThrough = !1),
          (t.time = (t.pathSlider.value / t.pathSlider.max) * t.duration);
      });
  });
pc.script.createLoadingScreen(function (e) {
  var t, a;
  (t = [
    "body {",
    "    background-color: #ccc;",
    "}",
    "",
    "#application-splash-wrapper {",
    "    position: absolute;",
    "    top: 0;",
    "    left: 0;",
    "    height: 100%;",
    "    width: 100%;",
    "    background-color: #ccc;",
    "}",
    "",
    "#application-splash {",
    "    position: absolute;",
    "    top: calc(50% - 28px);",
    "    width: 250px;",
    "    left: calc(50% - 132px);",
    "}",
    "",
    "#application-splash img {",
    "    width: 0%;",
    "}",
    "#application-splash-div{ position:absolute; top:-50px; left:30px;}",
    "",
    "#progress-bar-container {",
    "    margin: 20px auto 0 auto;",
    "    height: 2px;",
    "    width: 100%;",
    "    background-color: #1d292c;",
    "}",
    "",
    "#progress-bar {",
    "    width: 0%;",
    "    height: 100%;",
    "    background-color: #f60;",
    "position:relative;",
    "}",
    "",
    "@media (max-width: 480px) {",
    "    #application-splash {",
    "        width: 170px;",
    "        left: calc(50% - 85px);",
    "    }",
    "}",
  ].join("\n")),
    ((a = document.createElement("style")).type = "text/css"),
    a.styleSheet
      ? (a.styleSheet.cssText = t)
      : a.appendChild(document.createTextNode(t)),
    document.head.appendChild(a),
    (function () {
      var e = document.createElement("div");
      (e.id = "application-splash-wrapper"), document.body.appendChild(e);
      var t = document.createElement("div");
      (t.id = "application-splash"),
        e.appendChild(t),
        (t.style.display = "none");
      var a = document.createElement("img");
      (a.src =
        "https://playcanvas.com/static-assets/images/play_text_252_white.png"),
        t.appendChild(a),
        (a.onload = function () {
          t.style.display = "block";
        });
      var p = document.createElement("div");
      (p.id = "progress-bar-container"), t.appendChild(p);
      var o = document.createElement("div");
      (o.id = "progress-bar"), p.appendChild(o);
    })(),
    e.on("preload:end", function () {
      e.off("preload:progress");
    }),
    e.on("preload:progress", function (e) {
      var t = document.getElementById("progress-bar"),
        a = document.getElementById("progress-bar-container"),
        p = document.createElement("div");
      (p.id = "application-splash-div"),
        a.appendChild(p),
        t &&
          ((e = Math.min(1, Math.max(0, e))),
          (t.style.width = 100 * e + "%"),
          (p.textContent = "はじめまして。おかだです。"));
    }),
    e.on("start", function () {
      var e = document.getElementById("application-splash-wrapper");
      e.parentElement.removeChild(e);
    });
});

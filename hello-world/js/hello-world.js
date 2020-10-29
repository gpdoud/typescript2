"use strict";
var hw = "Hello, world";
var myname = "Gregory";
var loaded = function () {
    var msg = hw + " " + myname;
    var ctrl = document.getElementById("myname");
    if (ctrl != null)
        ctrl.innerText = msg;
};

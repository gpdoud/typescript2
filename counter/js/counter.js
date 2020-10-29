"use strict";
var nbr = 0;
var inc = function () {
    display(++nbr);
};
var dec = function () {
    display(--nbr);
};
var display = function (nbr) {
    var ctrl = document.getElementById("nbr");
    if (ctrl != null)
        ctrl.innerText = nbr.toString();
};
var loaded = function () {
    display(nbr);
};

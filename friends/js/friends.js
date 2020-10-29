"use strict";
var Friend = /** @class */ (function () {
    function Friend(name, age, email, bff) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.bff = bff;
    }
    return Friend;
}());
var friends = [
    new Friend("Alice", 37, "alice@gmail.com", false),
    new Friend("Bob", 43, "bob@gmail.com", false),
    new Friend("Chris", 51, "chris@gmail.com", true),
    new Friend("David", 29, "david@gmail.com", true)
];
var loaded = function () {
    var tbody = document.getElementById("tbody");
    if (tbody != null)
        tbody.innerHTML = "";
    for (var _i = 0, friends_1 = friends; _i < friends_1.length; _i++) {
        var friend = friends_1[_i];
        var row = "<tr>";
        row += "<td>" + friend.name + "</td>";
        row += "<td>" + friend.age + "</td>";
        row += "<td>" + friend.email + "</td>";
        row += "<td>" + (friend.bff ? "YES" : "NO") + "</td>";
        row += "</tr>";
        if (tbody != null)
            tbody.innerHTML += row;
    }
};

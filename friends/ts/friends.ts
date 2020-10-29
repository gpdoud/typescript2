class Friend {
    name: string;
    age: number;
    email: string;
    bff: boolean;

    constructor(name: string, age: number, email: string, bff: boolean) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.bff = bff;
    }
}
let friends: Friend[] = [
    new Friend("Alice", 37, "alice@gmail.com", false), 
    new Friend("Bob", 43, "bob@gmail.com", false),
    new Friend("Chris", 51, "chris@gmail.com", true),
    new Friend("David", 29, "david@gmail.com", true)
];

const loaded = () => {
    let tbody = document.getElementById("tbody");
    if(tbody != null)
        tbody.innerHTML = ""
    for(let friend of friends) {
        let row = "<tr>";
        row += `<td>${friend.name}</td>`;
        row += `<td>${friend.age}</td>`;
        row += `<td>${friend.email}</td>`;
        row += `<td>${friend.bff ? "YES" : "NO"}</td>`;
        row += "</tr>";
        if(tbody != null)
            tbody.innerHTML += row;
    }
}
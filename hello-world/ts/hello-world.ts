let hw: string = "Hello, world";
let myname: string = "Gregory";

const loaded = () => {
    let msg = `${hw} ${myname}`;
    let ctrl = document.getElementById("myname");
    if(ctrl != null)
        ctrl.innerText = msg;
}
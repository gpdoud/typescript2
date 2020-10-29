let nbr: number = 0;

const inc = (): void => {
    display(++nbr);
}
const dec = (): void => {
    display(--nbr);
}
const display = (nbr: number): void => {
    let ctrl = document.getElementById("nbr");
    if(ctrl != null)
    ctrl.innerText = nbr.toString();
}
const loaded = (): void  => {
    display(nbr);
}
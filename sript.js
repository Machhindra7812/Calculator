function display(value) {
    document.getElementById("result").value += value;
}
function calc() {
    var v = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}

var historial = [];
var last_resulto;
let last_op;  // ultima opcion seleccionada

const action = operacion => {
    let num1 = document.getElementById("entrada").value;
    let op = operacion.value;

    switch (op) {
        case "+":
            if (last_op != '.' && last_op != '+' && last_op != '-' && last_op != '*' && last_op != '/') {
                document.getElementById('entrada').value += '+';
                last_op = "+";
            }
            break;
        case "-":
            if (last_op != '.' && last_op != '+' && last_op != '-' && last_op != '*' && last_op != '/') {
                document.getElementById('entrada').value += '-';
                last_op = "-";
            }
            break;
        case "*":
            if (last_op != '.' && last_op != '+' && last_op != '-' && last_op != '*' && last_op != '/') {
                document.getElementById('entrada').value += '*';
                last_op = "*";
            }
            break;
        case "/":
            if (last_op != '.' && last_op != '+' && last_op != '-' && last_op != '*' && last_op != '/') {
                document.getElementById('entrada').value += '/';
                last_op = "/";
            }
            break;
        case ".":
            if (last_op != '.' && last_op != '+' && last_op != '-' && last_op != '*' && last_op != '/') {
                document.getElementById('entrada').value += '.';
                last_op = ".";
            }
            break;
        case "1":
            document.getElementById('entrada').value += '1';
            last_op = null;
            break;
        case "2":
            document.getElementById('entrada').value += '2';
            last_op = null;
            break;
        case "3":
            document.getElementById('entrada').value += '3';
            last_op = null;
            break;
        case "4":
            document.getElementById('entrada').value += '4';
            last_op = null;
            break;
        case "5":
            document.getElementById('entrada').value += '5';
            last_op = null;
            break;

        case "6":
            document.getElementById('entrada').value += '6';
            last_op = null;
            break;
        case "7":
            document.getElementById('entrada').value += '7';
            last_op = null;
            break;
        case "8":
            document.getElementById('entrada').value += '8';
            last_op = null;
            break;
        case "9":
            document.getElementById('entrada').value += '9';
            last_op = null;
            break;
        case "0":
            document.getElementById('entrada').value += '0';
            last_op = null;
            break;

    }

};

function result() {

    let op = document.getElementById('entrada').value
    let result_op = eval(document.getElementById('entrada').value);
    str = op + '=' + result_op;

    if (str !== last_resulto) {
        if (op != null && op != '') {

            document.getElementById('tittle-ul-history').style.display = "block";

            historial.push(str);
            last_resulto = str;

            var ul = document.getElementById("list-historial");
            var li = document.createElement("li");
            var txt = document.createTextNode(historial.pop());

            li.appendChild(txt);
            ul.appendChild(li);
            last_op = null;

            document.getElementById('entrada').value = result_op;


        }
    }

}

function limpiar() {
    document.getElementById('tittle-ul-history').style.display = "none";
    document.getElementById('entrada').value = null;
    let list = document.getElementById("list-historial")

    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
}

function limpiar_historial() {
    document.getElementById('tittle-ul-history').style.display = "none";
    let list = document.getElementById("list-historial")


    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
}

function retry() {
    let str = document.getElementById('entrada').value;
    const str2 = str.substring(0, str.length - 1);
    if(str.substr(-1) == '+' || str.substr(-1) == '-' || str.substr(-1) == '*' || str.substr(-1) == '/' || str.substr(-1) == '.'){
        last_op = null;
    }
    document.getElementById('entrada').value = str2;

}
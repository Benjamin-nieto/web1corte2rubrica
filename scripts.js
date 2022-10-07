var historial = [];
var last_resulto;
let last_op;  // ultima opcion seleccionada
let total_point = 0;

const action = operacion => {
    let num1 = document.getElementById("entrada").value;
    let op = operacion.value;
    //    last_op =  num1.slice(-1);
    switch (op) {
        case "+":
            if (num1.slice(-1) != '.' && last_op != '+' && last_op != '-' && last_op != '*' && last_op != '/') {
                document.getElementById('entrada').value += '+';
                last_op = "+";
                total_point = countpoint();

            }
            break;
        case "-":
            if (num1.slice(-1) != '.' && last_op != '+' && last_op != '-' && last_op != '*' && last_op != '/') {
                document.getElementById('entrada').value += '-';
                last_op = "-";
                total_point = countpoint();

            }
            break;
        case "*":
            if (num1.slice(-1) != '.' && last_op != '+' && last_op != '-' && last_op != '*' && last_op != '/') {
                document.getElementById('entrada').value += '*';
                last_op = "*";
                total_point = countpoint();

            }
            break;
        case "/":
            if (num1.slice(-1) != '.' && last_op != '+' && last_op != '-' && last_op != '*' && last_op != '/') {
                document.getElementById('entrada').value += '/';
                last_op = "/";
                total_point = countpoint();

            }
            break;
        case ".":

            if (total_point <= 1 && last_op != '.' && last_op != '+' && last_op != '-' && last_op != '*' && last_op != '/') {
                document.getElementById('entrada').value += '.';
                last_op = ".";
                console.log(countpoint());
            }
            break;
        case "1":
            document.getElementById('entrada').value += '1';
            last_op = null;
            total_point = countpoint();

            break;
        case "2":
            document.getElementById('entrada').value += '2';
            last_op = null;
            total_point = countpoint();

            break;
        case "3":
            document.getElementById('entrada').value += '3';
            last_op = null;
            total_point = countpoint();

            break;
        case "4":
            document.getElementById('entrada').value += '4';
            last_op = null;
            total_point = countpoint();

            break;
        case "5":
            document.getElementById('entrada').value += '5';
            last_op = null;
            total_point = countpoint();

            break;
        case "6":
            document.getElementById('entrada').value += '6';
            last_op = null;
            total_point = countpoint();

            break;
        case "7":
            document.getElementById('entrada').value += '7';
            last_op = null;
            total_point = countpoint();

            break;
        case "8":
            document.getElementById('entrada').value += '8';
            last_op = null;
            total_point = countpoint();

            break;
        case "9":
            document.getElementById('entrada').value += '9';
            last_op = null;
            total_point = countpoint();

            break;
        case "0":
            document.getElementById('entrada').value += '0';
            last_op = null;
            total_point = countpoint();

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
            console.log(countpoint());
            total_point = countpoint();

            if (total_point == 1) {
                last_op = '.'
            }

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
    if (str.substr(-1) == '+' || str.substr(-1) == '-' || str.substr(-1) == '*' || str.substr(-1) == '/' || str.substr(-1) == '.') {
        last_op = null;
    }
    document.getElementById('entrada').value = str2;

}


const countpoint = function () {
    count = 0;
    field = document.getElementById("entrada").value;
    for (index = 0; index < field.length; index++) {
        if (field[index] == '.') {
            count++
        }
    }
    return count;
    //field.slice(-1) == '.'
    //document.getElementById('entrada').value = act.substring(0, act.length - 1);


}
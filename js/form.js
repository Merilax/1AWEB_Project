let form = document.getElementById("supportForm");

function validateForm() {
    let str = "";
    if (form.name.value === "") str += "Introduzca su nombre.\n";
    if (form.surname.value === "") str += "Introduzca sus apellidos.\n";
    if (form.birthdate.value === "") str += "Introduzca su fecha de nacimiento.\n";
    if (form.address.value === "") str += "Introduzca su correo electrónico.\n";
    if (form.inChoiceTrue.checked === false && form.inChoiceFalse.checked === false) str += "Elija si desea recibir notificaciones de soporte.\n";
    if (form.inDesc.value === "") str += "Describa su problema.\n";

    if (str == "") {
        form.submit();
    } else {
        alert(str);
    }
}

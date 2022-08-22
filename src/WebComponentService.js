function WebComponentService(framework) {
    // Unterscheidung welches Formular absendet
    if (framework === "react") {
        // Zuweise der Werte von React Formular nach Angular Formular
        var aText = document.getElementById("Atext");
        aText.value = document.getElementById("text").value;

        var aNumber = document.getElementById("Anumber");
        aNumber.value = document.getElementById("number").value;

        var aDate = document.getElementById("Adate");
        aDate.value = document.getElementById("date").value;

        return console.log("service zeit " + framework);

    } else {
        // Zuweise der Werte von Angular Formular nach React Formular
        var rText = document.getElementById("text");
        rText.value = document.getElementById("Atext").value;

        var rNumber = document.getElementById("number");
        rNumber.value = document.getElementById("Anumber").value;

        var rDate = document.getElementById("date");
        rDate.value = document.getElementById("Adate").value;

        return console.log("service zeit2 " + framework);
    }
}

export default WebComponentService
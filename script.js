
var last_word = "";

function encry(text = "ejemplo") {

    text = text.toLowerCase();

    let new_text = "";


    for (let index = 0; index < text.length; index++) {


        switch (text[index]) {
            case "e":
                new_text += "enter"

                break;
            case "i":
                new_text += "imes"

                break;
            case "a":
                new_text += "ai"

                break;
            case "o":
                new_text += "ober"

                break;
            case "u":
                new_text += "ufat"

                break;

            default:
                new_text += text[index]

                break;
        }

    }








    return new_text
}

function desencry(text = "gaitober") {
    text = text.toLowerCase()

    while (text.includes("enter")) {

        text = text.replace("enter", "e")
    }

    while (text.includes("imes")) {
        text = text.replace("imes", "i")

    }

    while (text.includes("ai")) {
        text = text.replace("ai", "a")

    }
    while (text.includes("ober")) {
        text = text.replace("ober", "o")

    }


    while (text.includes("ufat")) {
        text = text.replace("ufat", "u")

    }



    return text;

}


function encriptar() {

    var text = document.getElementById("text-prompt").value;

    document.getElementById("not-found-text").style.display = "none"

    document.getElementById("found-text").style.display = ""

    document.getElementById('result_text').innerText = encry(text);

    last_word = encry(text)

}


function desencriptar() {
    var text = document.getElementById("text-prompt").value;

    document.getElementById("not-found-text").style.display = "none"

    document.getElementById("found-text").style.display = ""

    document.getElementById('result_text').innerText = desencry(text);

    last_word = desencry(text)
}

async function copy() {
    navigator.clipboard.writeText(last_word).then(function () {

        alert("Texto copiado")
    }, function (err) {

    });
}
function calculator() { 
    let id;
    let collum;

    for (let i = 1; i <= 10; i++) {
        id = "tabuada_" + i;
        collum = document.getElementById(id);
        collum.innerText = "";

        for (let j = 0; j <= 10; j++) {
            let result = i * j;
            collum.innerText += i + " * " + j + " = " + result + "\n";
        }
    }

    collum = document.getElementById("tabuada");

    collum.classList.add("tabuada-aparecer");

    collum.addEventListener("animationend", () => {
            collum.classList.remove("tabuada-aparecer");
        }, {once: true});
}
console.log("--- Esercizio 1 ---");

function controllaNumero(num) {
    console.log("Numero:", num); 

    if (num % 2 === 0) {
        console.log("Numero pari.");
    } else {
        console.log("Numero dispari.");
    }

    if (num > 100) {
        alert("Grande!");
    }
}

controllaNumero(101);


console.log("\n-- Esercizio 2 --");

let contatore = 10;

while (contatore >= 0) {
    console.log(contatore); 

    if (contatore === 0) {
        alert("BOOM!"); 
    }

    contatore--;
}


console.log("\n--- Esercizio 3 ---");

let numeri = [3, 6, 1, 9];
console.log("Array iniziale:", numeri);

numeri.push(5);
console.log("Array dopo l'aggiunta del 5:", numeri);

numeri.sort((a, b) => a - b);
console.log("Array dopo l'ordinamento:", numeri);

console.log("Primo elemento (indice 0):", numeri[0]);

console.log("Ultimo elemento (indice length - 1):", numeri[numeri.length - 1]);


console.log("\n-- Esercizio 4 --");

function calcola(n1, n2, operazione) {
    switch (operazione) {
        case "+":
            return n1 + n2;
        case "-":
            return n1 - n2;
        case "*":
            return n1 * n2;
        case "/":
            if (n2 === 0) {
                return "Errore: Divisione per zero!";
            }
            return n1 / n2;
        default:
            return "Errore: Operazione non valida.";
    }
}

console.log("10 + 5 =", calcola(10, 5, "+"));
console.log("10 - 5 =", calcola(10, 5, "-"));
console.log("10 * 5 =", calcola(10, 5, "*"));
console.log("10 / 5 =", calcola(10, 5, "/"));


function saluta() {
    const inputElement = document.getElementById("inputNome");
    const nome = inputElement.value;
    const salutoElement = document.getElementById("saluto");
    salutoElement.textContent = "Ciao, " + nome + "!"; 
}
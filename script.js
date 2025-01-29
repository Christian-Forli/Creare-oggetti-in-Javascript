let animale1 = {
    specie: "mucca",
    razza: "chianina",
    zampe: 4
};
let animale2 = {
    specie: "cane",
    razza: "bassotto",
    zampe: 4
};
let animale3 = {
    specie: "gallina",
    razza: "andalusa",
    zampe: 2
};
function mostraAnimale(animale) {
    let descrizione = `Specie: ${animale.specie}, Razza: ${animale.razza}, Zampe: ${animale.zampe}`;
    document.getElementById("descrizione").textContent = descrizione;
}
document.getElementById("animale1").addEventListener("click", function() {
    mostraAnimale(animale1);
});

document.getElementById("animale2").addEventListener("click", function() {
    mostraAnimale(animale2);
});

document.getElementById("animale3").addEventListener("click", function() {
    mostraAnimale(animale3);
});
let animale1 = {
    specie: "mucca",
    razza: "chianina",
    zampe: 4,
    caratteristicheComplete: function() {
        return `Specie: ${this.specie}, Razza: ${this.razza}, Zampe: ${this.zampe}`;
    }
};
let animale2 = {
    specie: "cane",
    razza: "bassotto",
    zampe: 4,
    caratteristicheComplete: function() {
        return `Specie: ${this.specie}, Razza: ${this.razza}, Zampe: ${this.zampe}`;
    }
};
let animale3 = {
    specie: "gallina",
    razza: "andalusa",
    zampe: 2,
    caratteristicheComplete: function() {
        return `Specie: ${this["specie"]}, Razza: ${this["razza"]}, Zampe: ${this["zampe"]}`;
    }
};
function mostraAnimale(animale) {
    let descrizione = animale.caratteristicheComplete();
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
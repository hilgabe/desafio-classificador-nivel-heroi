const nome = "Luna";
const xp = 7500;

const faixas = [
  { ate: 1000, nivel: "Ferro" },
  { ate: 2000, nivel: "Bronze" },
  { ate: 5000, nivel: "Prata" },
  { ate: 7000, nivel: "Ouro" },
  { ate: 8000, nivel: "Platina" },
  { ate: 9000, nivel: "Ascendente" },
  { ate: 10000, nivel: "Imortal" },
];

let nivel = "Radiante";

for (const faixa of faixas) {
  if (xp <= faixa.ate) {
    nivel = faixa.nivel;
    break;
  }
}

console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);

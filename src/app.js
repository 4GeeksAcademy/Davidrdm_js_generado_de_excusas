window.onload = function () {
  //array with the words
  let who = ["Mi Amigo", "Mi padre", "Mi vecino", "El cartero"];
  let action = ["conducir", "pasear", "nadar", "correr"];
  let what = ["mi telefono", "mi perro", "mi bicicleta", "mi compra"];
  let when = ["por la mañana", "en el desayuno", " al atarceder", "en verano"];
  let where = ["en la carretera", "por la playa", "en el rio", "en el parque"];

  let rdm1 = Math.floor(Math.random() * who.length);
  let rdm2 = Math.floor(Math.random() * action.length);
  let rdm3 = Math.floor(Math.random() * what.length);
  let rdm4 = Math.floor(Math.random() * when.length);
  let rdm5 = Math.floor(Math.random() * where.length);

  // creating a sentence (the excuse)
  const excusa = document.querySelector("#excuse");

  excusa.innerHTML = `${who[rdm1]} ${action[rdm2]} ${what[rdm3]} ${when[rdm4]} ${where[rdm5]}`;
};

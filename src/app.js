window.onload = function() {
  function generateExcuse() {
      let who = ["Mi hermano", "Mi papa", "El cartero", "Mi suegra"];
      let action = ["saltando", "comiendo", "conduciendo", "llamando"];
      let what = ["mis documentos", "mi portatil", "mi furgoneta"];
      let when = [
          "por la mañana",
          "mientras hacia ejercicio",
          "en la comida",
          "en una reunion",
          "mientras iba en barca"
      ];
      let excuse = `${who[Math.floor(Math.random() * who.length)]} ${action[Math.floor(Math.random() * action.length)]} ${what[Math.floor(Math.random() * what.length)]} ${when[Math.floor(Math.random() * when.length)]}`;
      document.getElementById("textoExcusa").innerText = excuse;
  }
  generateExcuse();
};












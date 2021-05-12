<!DOCTYPE html>
<html lang="pt">
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <title>VueJS</title>

    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>

    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0"
      crossorigin="anonymous"
    />
  </head>
  <style type="text/css">
    .class0 {
      background-color: #33ffaa;
      color: #2288cc;
    }
  </style>
  <body>
    <h1>Vue JS</h1>
    <div id="contenedor">
      <div id="calculador">
        <label>Calculadora de I.M.C</label>
        <table style="width: 334px">
          <tbody>
            <tr>
              <td style="width: 59px">Peso</td>
              <td style="width: 32px">
                <input id="" type="number" v-model="newEntry.peso" />
              </td>
              <td style="width: 104px"></td>
            </tr>
            <tr>
              <td style="width: 59px">Tamanho</td>
              <td style="width: 32px">
                <input type="number" v-model="newEntry.tamanho" />
              </td>
              <td style="width: 104px">
                <button
                  @click="calcular()"
                  type="button"
                  class="btn btn-primary"
                >
                  Calcular
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <label @click="limpar()">{{newEntry.resultado}}</label>
      </div>
      <script>
        var app = new Vue({
          el: "#calculador",
          data: {
            newEntry: {
              peso: 0,
              tamanho: 0,
              resultado: "",
            },
          },
          methods: {
            calcular() {
              if (this.newEntry.peso == 0) {
                this.newEntry.resultado = "Falta preenchimento do peso";
              } else if (this.newEntry.tamanho == 0) {
                this.newEntry.resultado = "Falta o preenchimento do tamanho";
              } else {
                var imc =
                  this.newEntry.peso /
                  (this.newEntry.tamanho * this.newEntry.tamanho);
                this.newEntry.resultado =
                  "O I.M.C. calculado é: " + imc.toFixed(2);
              }
            },
            limpar() {
              this.newEntry.resultado = "";
              this.newEntry.peso = 0;
              this.newEntry.tamanho = 0;
            },
          },
        });
      </script>
    </div>
  </body>
</html>

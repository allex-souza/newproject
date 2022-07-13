function tapInProduction() {
    marcca = prompt('Qual a marca do seu aparelho?')
    modelo = prompt('Qual o modelo?')
    Defeito = prompt('Qual o defeito?')

    var Relatotio = "Marca: "  + marcca  + "  Modelo: " + modelo+ "  Defeito: " + Defeito + '.'

    if (window.confirm(Relatotio + '  Os dados estão corretos?')) {
        window.open('https://api.whatsapp.com/send?phone=5562992936607&text='+ Relatotio);
      }

}

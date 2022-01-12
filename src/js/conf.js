const dom = {
    paroleWrapper: document.getElementById('parole-wrapper'),
    input: document.getElementById('inp'),
    timer: document.getElementById('timer'),
    risultatoTest: document.getElementById('risultato-test')
}

const App = {
    dom,
    parole: { corrente : 0, giuste : 0, sbagliate : 0, elenco : []},
    secondiRimanenti: 60,
    paroleVisualizzate: 50,
    testAvviato: false
}

export default App
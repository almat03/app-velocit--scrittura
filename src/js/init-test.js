function impostaTimer(App) {
    App.dom.timer.textContent = App.secondiRimanenti
}

function impostaParoleTest(App) {
    for (let i=0;i<App.paroleVisualizzate;i++) {
        aggiungiParola(App,i === 0 ? 'corrente' : '')
    }
}

function aggiungiParola(App, classe) {
    const parola = App.dizionario[(Math.random() * App.dizionario.length) | 0]
    
    const span = document.createElement('span')
    span.setAttribute('class' , classe)
    span.appendChild(document.createTextNode(parola))
    App.dom.paroleWrapper.appendChild(span)
}

export default App => {
    impostaTimer(App)
    impostaParoleTest(App)
}
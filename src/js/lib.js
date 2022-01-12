function inputEvent ( e , App) {
    if(!App.testAvviato){
        avviaTest(App)
    }
    if(e.key === ' '){
        const digitata = e.target.value.trim()
        const spanCorrente = parolaInPosizione(App, App.parole.corrente)
        controllaParolaDigitata(App,digitata,spanCorrente)
        parolaInPosizione( App, ++App.parole.corrente).className = 'corrente'
        e.target.value = ''
    }

    function controllaParolaDigitata(App,digitata,spanCorrente){
        if (digitata === spanCorrente.textContent){
            App.parole.giuste++
            spanCorrente.className = 'parola-corretta'
            
        } else {
            App.parole.sbagliate++
            spanCorrente.className = 'parola-errata'

        }
    }

    function parolaInPosizione (App, posizione){
        return App.dom.paroleWrapper.children[posizione]
    }
}

function avviaTest(App){
    App.testAvviato = true
    const intervalloTimer = setInterval(() => {
        App.dom.timer.textContent = --App.secondiRimanenti
        if(App.secondiRimanenti === 0) {
            clearInterval(intervalloTimer)
            terminaTest(App)
        }
    },1000)
}
function terminaTest(App){
 App.dom.input.setAttribute('disabled', 'disabled')
 App.dom.risultatoTest.innerHTML = `Parole corrette: ${App.parole.giuste} <br> Parole sbagliate: ${App.parole.sbagliate}`
}

export default inputEvent

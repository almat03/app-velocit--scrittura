import dizionario from './dizionario.js'
import initTest from './init-test.js'
import inputEvent from './lib.js'
import App from './conf.js'


export default () => {
    App.dizionario = dizionario;
    initTest(App)
    App.dom.input.addEventListener('keyup', e => inputEvent ( e, App))
}
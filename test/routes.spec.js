import { onNavigate } from '../src/main.js';
jest.mock('../src/lib/firebase.js');


const mockRegister = () => {
    const containRegis = document.createElement('section');
    const textRegis = document.createElement('h1');
    textRegis.setAttribute('id', 'registro')
    textRegis.textContent = 'Hola Registro';
    containRegis.append(textRegis);
    return containRegis;
};

const mockLogin = () => {
    const container = document.createElement('section');
    const title = document.createElement('h1');
    title.textContent = 'Hola Login';
    container.appendChild(title);
    return container;
}

const mockRoutes = {
    '/register': mockRegister,
    '/login': mockLogin,
  };
  
describe('Test de función on Navigate', () => {
    it('Mostrando la prueba del template de registro', () => {
        document.body.innerHTML = `<div id="root"></div>`;
        onNavigate('/register', mockRoutes)
        expect(document.getElementById('registro').textContent).toEqual('Hola Registro');
    })
});

describe('Test de función on Navigate', () => {
    it('Mostrando la prueba del template de ingresar', () => {
        document.body.innerHTML = `<section id="root"></section>`
        onNavigate('/login', mockRoutes)
        expect(document.getElementById('root').textContent).toEqual('Hola Login')
    })
})


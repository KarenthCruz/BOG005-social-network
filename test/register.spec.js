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

const mockRoutes = {
    '/register': mockRegister,
  };
  
  describe('Test de función on Navigate', () => {
    it('Mostrando la prueba del template de registro', () => {
        document.body.innerHTML = `<div id="root"></div>`;
        onNavigate('/register', mockRoutes)
        expect(document.getElementById('registro').textContent).toEqual('Hola Registro');
    })
});


const mockLoginButton = () => {
    const container = document.createElement('section');
    const buttonSign = document.createElement('button');
    buttonSign.className = 'buttonEnter';
    buttonSign.textContent = 'Registrarme';
    container.appendChild(buttonSign);
    return container;
}

const mockRouteRegister = {
    '/Register': mockLoginButton,
}

describe("Should test button Register", () => {
    it("Call mockRegisterButton", () => {
        document.body.innerHTML = `<section id="root"></section>`
        onNavigate('/Register', mockRouteRegister)
        expect(document.getElementById('root').textContent).toEqual('Registrarme');
        expect(document.getElementById('root').textContent).toBeDefined();
        expect(mockRouteRegister).not.toBeNull();
    })
})

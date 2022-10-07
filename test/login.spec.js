import { onNavigate } from '../src/main.js';
jest.mock('../src/lib/firebase.js');


const mockLogin = () => {
    const container = document.createElement('section');
    const title = document.createElement('h1');
    title.textContent = 'Hola Login';
    container.appendChild(title);
    return container;
}

const mockRoutes = {
    '/login': mockLogin,
};


describe('Test de función on Navigate', () => {
    it('Mostrando la prueba del template de ingresar', () => {
        document.body.innerHTML = `<section id="root"></section>`
        onNavigate('/login', mockRoutes)
        expect(document.getElementById('root').textContent).toEqual('Hola Login')
    })
})


const mockLoginButton = () => {
    const container = document.createElement('section');
    const buttonLogin = document.createElement('button');
    buttonLogin.className = 'buttonEnter';
    buttonLogin.textContent = 'Registrarme';
    container.appendChild(buttonLogin);
    return container;
}

const mockRouteLogin = {
    '/Register': mockRegisterButton,
}

describe("Should test button Register", () => {
    it("Call mockRegisterButton", () => {
        document.body.innerHTML = `<section id="root"></section>`
        onNavigate('/Register', mockRouteLogin)
        expect(document.getElementById('root').textContent).toEqual('Registrarme');
        expect(document.getElementById('root').textContent).toBeDefined();
        expect(mockRouteLogin).not.toBeNull();
    })
})

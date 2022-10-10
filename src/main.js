import { login } from './views/login.js';
import { register } from './views/register.js';
import { wall } from './views/wall.js';


const routes = {
  '/': login, // clave y valor
  '/login': login,
  '/register': register,
  '/wall': wall,
};

// función para anexar un registro al historial del navegador (.pushState)
const onNavigate = (pathname, routesList=routes) => {
  const root = document.getElementById('root');
  window.history.pushState( // pusState anexa un registro en la sesión de historial del navegador
    {}, // estado vacio
    pathname, // title
    window.location.origin + pathname, // URL + (Ruta)
  );
  root.replaceChildren(routesList[pathname]());
};

window.addEventListener('load', () => onNavigate(window.location.pathname));

export { onNavigate }
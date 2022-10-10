import { login } from './views/login.js';
import { register } from './views/register.js';
import { wall } from './views/wall.js';


const routes = {
  '': login,
  '/': login, // clave y valor
  '/login': login,
  '/register': register,
  '/wall': wall,
};

// función para anexar un registro al historial del navegador (.pushState)
const onNavigate = (pathname, routesList=routes) => {
  const root = document.getElementById('root');
  // window.history.pushState(
  //   {}, // estado vacio
  //   pathname, // title
  //   window.location.origin + pathname, // URL + (Ruta)
  // );
  root.replaceChildren(routesList[pathname]());
};
// Renderiza sólo ésta parte de la ruta
const component = routes[window.location.pathname];


window.addEventListener('load', () => onNavigate(window.location.pathname));



export { onNavigate }
import icons from './icons-library.js';

const MenuItems = [
  { icon: icons.faThLarge, text: 'Dashboard', href: '/dashboard' },
  { icon: icons.faTag, text: 'Req. Pendientes', href: '/pending-requirements' },
  { icon: icons.faTags, text: 'Req. Cerrados', href: '/closed-requirements' },
  { icon: icons.faScrewdriverWrench, text: 'Sol. Pendientes', href: '/pending-requests' },
  { icon: icons.faCheck, text: 'Sol. Cerrados', href: '/closed-requests' },
  { icon: icons.faBarsProgress, text: 'Temas', href: '/themes' },
  { icon: icons.faUser, text: 'Usuarios', href: '/users' },
  { icon: icons.faBell, text: 'Notificaciones', href: '/notifications' },
];

export default MenuItems;
import { publicRoutes, privateRoutes } from '../routes';

export default function (role) {
  const allRoutes = [...publicRoutes, ...privateRoutes];
  const clientPages = [...publicRoutes, 'dashboard', 'profile'];
  const managerPages = [...clientPages, 'management'];
  switch (role) {
    case 'client':
      return clientPages;
    case 'manager':
      return managerPages;
    case 'admin':
      return allRoutes;
    default:
      return publicRoutes;
  }
}

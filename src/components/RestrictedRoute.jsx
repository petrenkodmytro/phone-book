import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

/**
 * - If the route is restricted and the user is logged in, render a <Navigate> to redirectTo
 * - Otherwise render the component
 */

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  // це для того щоб не було редіректу на логін поки не завантажиться токен
  const { isLoggedIn } = useAuth();
  // якщо залогінений, то рендеримо компонент
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';


/**
 * - If the route is private and the user is logged in, render the component
 * - Otherwise render <Navigate> to redirectTo
 */

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
    // це для того щоб не було редіректу на логін поки не завантажиться токен
  const { isLoggedIn, isRefreshing } = useAuth();
  // якщо не залогінений і не завантажується токен, то редірект на логін
  const shouldRedirect = !isLoggedIn && !isRefreshing;
// якщо залогінений, то рендеримо компонент
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

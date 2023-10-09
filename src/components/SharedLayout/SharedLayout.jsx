import React, { Suspense } from 'react';
import { Author, Footer, Header, Main, Wrapper } from './SharedLayout.styled';
import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';

export const SharedLayout = () => {
  return (
    <Wrapper>
      <Header>
        <AppBar />
      </Header>

      <Main>
        <Suspense fallback={<div>Loading...</div>}>
          {/* вказати де саме в компоненті батьківського маршруту ми хочемо рендерувати дочірні маршрути */}
          <Outlet />
        </Suspense>
      </Main>

      <Footer>
        <Author>Developed by Dmytro Petrenko</Author>
      </Footer>
    </Wrapper>
  );
};

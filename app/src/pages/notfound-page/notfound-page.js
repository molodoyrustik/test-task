import React from 'react';
import { Container } from 'react-bootstrap';

import MainLayout from '../../layouts/MainLayout';

function NotfoundPage(props) {
  return (
    <MainLayout>
      <Container className="mt-5 mb-6">
        <h1 className="text-center">Not Found 404!</h1>
      </Container>
    </MainLayout>
  );
}

export default NotfoundPage;

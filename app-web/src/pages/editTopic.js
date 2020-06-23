import React from 'react';
import Layout from '../hoc/Layout';
import { useKeycloak } from '@react-keycloak/web';

// components
import { SEO } from '../components/SEO/SEO';
import { Title } from '../components/Page';
import Main from '../components/Page/Main';
import ExistingResourceForm from '../components/Form/ExistingResourceForm';

export const editTopic = () => {
  // eslint-disable-next-line
  const [keycloak] = useKeycloak();
  const isAuthenticated = true; //keycloak && keycloak.authenticated;
  return (
    <Layout>
      <SEO title="Edit topic" />
      <Main>
        <Title
          title="Content Contribution"
          subtitle={!isAuthenticated ? 'Login via IDIR or Github to continue' : 'Edit a topic'}
        />
        {isAuthenticated ? (
          <ExistingResourceForm></ExistingResourceForm>
        ) : (
          <h4 css={{ color: 'red' }}>Not Authorized</h4>
        )}
      </Main>
    </Layout>
  );
};

export default editTopic;

import styled from 'styled-components';

export const Box = styled.div`
  padding: 1rem;
  background-color: #003d5b;
  border-radius: 3px;
  box-sizing: border-box;
  color: #f5f5f5;
  margin-bottom: 1rem;
`;

const frontPageExample = `
  class BasicUsage extends React.Component {
    render() {
      return (
        <Layout 
          container 
          xs={{
            gap: 8,
            wrap: 'wrap'
          }}
        >
          <Layout 
            xs={{ basis: 12 }} 
            md={{ basis: 6 }} 
            lg={{ basis: 6 }} 
            item
          >
            <Box>Hello item one</Box>
          </Layout>
          <Layout 
            xs={{ basis: 12 }} 
            md={{ basis: 6 }} 
            lg={{ basis: 6 }} 
            item
          >
            <Box>Hello item two</Box>
          </Layout>
          <Layout 
            xs={{ basis: 12 }}
            md={{ basis: 6 }} 
            lg={{ basis: 4 }} 
            item
          >
            <Box>Hello item three</Box>
          </Layout>
          <Layout 
            xs={{ basis: 12 }} 
            md={{ basis: 6 }} 
            lg={{ basis: 8 }} 
            item
          >
            <Box>Hello item four</Box>
          </Layout>
        </Layout>
      )
    }
  }
`;

export { frontPageExample };

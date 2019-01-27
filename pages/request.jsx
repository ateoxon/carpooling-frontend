// @ts-check
import Request from '../components/Request';

const RequestPage = ({ requests, query: { id } }) => (
  <Request {...requests.find(item => item.id === id)} />
);

RequestPage.getInitialProps = ({ reduxStore, query }) => {
  const { requests } = reduxStore.getState();

  return {
    requests,
    query,
  };
};

export default RequestPage;

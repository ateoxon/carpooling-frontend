// @ts-check
import { useEffect } from 'react';
import Request from '../components/Request';

const RequestsPage = ({ dispatch, requests }) => {
  useEffect(() => {
    dispatch({
      type: 'REQUESTS_SEEN',
    });
  });

  return requests.map(req => <Request key={req.id} {...req} />);
};

RequestsPage.getInitialProps = ({ dispatch, reduxStore }) => {
  const { requests } = reduxStore.getState();

  return {
    dispatch,
    requests,
  };
};

export default RequestsPage;

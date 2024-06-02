import { Link, useRouteError } from 'react-router-dom';
import img from '../assets/images/not-found.svg';
import Wrapper from '../assets/wrappers/ErrorPage';

function Error() {
  const error = useRouteError();
  console.log(error);

  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="not found" />
          <h3>Page not found</h3>
          <p>We can&apos;t find the page you are looking for...</p>
          <Link to="/dashboard">Back home</Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h3>Something went wrong...</h3>
    </Wrapper>
  );
}

export default Error;

import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';
import { Link } from 'react-router-dom';
import { Logo } from '../components';

function Landing() {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            dicta atque labore odio. Libero, magnam!
          </p>
          <Link to="/register" className="btn register-link">
            register
          </Link>
          <Link to="/login" className="btn ">
            login / demo user
          </Link>
        </div>
        <img src={main} alt="jon hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
}

export default Landing;

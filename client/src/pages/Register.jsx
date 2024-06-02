import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { FormRow, Logo } from '../components';

function Register() {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>register</h4>
        <FormRow type="text" name="name" labelText="name" defaultValue="guy" />
        <FormRow
          type="text"
          name="lastName"
          labelText="last name"
          defaultValue="saloniki"
        />
        <FormRow type="text" name="location" defaultValue="jerusalem" />
        <FormRow type="email" name="email" defaultValue="guy@gmail.com" />
        <FormRow type="password" name="password" defaultValue="123456" />

        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
}

export default Register;

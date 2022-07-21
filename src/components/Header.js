import logo from "../assets/logo.png";

const Header = ({ name, description, picture }) => {
  return (
    <>
      <div className='header'>
        <div className='header-logo'>
          <img src={logo} alt='logo'></img>
        </div>
      </div>

      <div className='header-container'>
        <div>
          <h2> {name} </h2>
          <p> {description} </p>
        </div>
        <div>
          <img src={picture} alt='header'></img>
        </div>
      </div>
    </>
  );
};

export default Header;

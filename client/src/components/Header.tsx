import Headshot from './Headshot';
import Info from './Info';
import Nav from './Nav';

interface HeaderProps {
  setContent: React.Dispatch<React.SetStateAction<string>>;
  setVisibility: React.Dispatch<React.SetStateAction<string>>;
}

const Header = ({ setVisibility }: HeaderProps) => {
  return (
    <header>
      <Headshot />
      <Info />
      <Nav setVisibility={setVisibility} />
    </header>
  );
};

export default Header;

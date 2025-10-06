import formatToClass from '../utils/formatToClass';

interface TabProps {
  name: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
}

const Tab = ({ name, setContent }: TabProps) => {
  const handleTabClick = () => {
    setContent(name);
  };

  return (
    <li onClick={handleTabClick} className={formatToClass(name)}>
      {name}
    </li>
  );
};

export default Tab;

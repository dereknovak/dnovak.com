import formatToClass from '../utils/formatToClass';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Media from './Media';
import Portfolio from './Portfolio';
import Tab from './Tab';

interface MainProps {
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
}

const Main = ({ content, setContent }: MainProps) => {
  let pageContent;

  switch (content) {
    case 'About Me':
      pageContent = <AboutMe />;
      break;
    case 'Media':
      pageContent = <Media />;
      break;
    case 'Contact':
      pageContent = <Contact />;
      break;
    default:
      pageContent = <Portfolio />;
  }

  return (
    <main>
      <div id="main-divider" className={formatToClass(content)}>
        <nav className="tabs">
          <ul>
            <Tab name="Portfolio" setContent={setContent} />
            <Tab name="About Me" setContent={setContent} />
          </ul>
        </nav>
        <div id="main-background">
          <div id="main-content">{pageContent}</div>
        </div>
      </div>
    </main>
  );
};

export default Main;

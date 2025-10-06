interface NavProps {
  setVisibility: React.Dispatch<React.SetStateAction<string>>;
}

const Nav = ({ setVisibility }: NavProps) => {
  const links = [
    {
      id: 1,
      name: 'github',
      title: 'Click to see my GitHub',
      path: 'src/assets/images/github_logo.png',
      url: 'https://github.com/dereknovak',
    },
    {
      id: 2,
      name: 'linkedin',
      title: 'Click to see my Linkedin',
      path: 'src/assets/images/linkedin_logo.png',
      url: 'https://www.linkedin.com/in/derek-novak-2754a3289/',
    },
    {
      id: 3,
      name: 'resume',
      title: 'Click to download my resume',
      path: 'src/assets/images/resume_icon.svg',
      url: 'src/assets/DerekNovak-resume.pdf',
      download: true,
    },
  ];

  const showModal = () => {
    setVisibility('visible');
  };

  return (
    <nav className="profile">
      <ul id="links">
        {links.map((link) => (
          <a
            key={link.id}
            href={link.url}
            title={link.title}
            download={link.download || undefined}
          >
            <li>
              <img id={link.name} src={link.path} />
            </li>
          </a>
        ))}
      </ul>
      <button id="contact-button" type="button" onClick={showModal}>
        Contact Me!
      </button>
    </nav>
  );
};

export default Nav;

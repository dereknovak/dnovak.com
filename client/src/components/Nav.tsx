const Nav = ({ setContent }) => {
  const links = [
    {
      id: 1,
      name: 'github',
      path: 'src/assets/images/github_logo.png',
      url: 'https://github.com/dereknovak',
    },
    {
      id: 2,
      name: 'linkedin',
      path: 'src/assets/images/linkedin_logo.png',
      url: 'https://www.linkedin.com/in/derek-novak-2754a3289/',
    },
  ];

  return (
    <nav className='profile'>
      <ul>
        {links.map(link =>
          <a key={link.id} href={link.url}>
            <li>
              <img id={link.name} src={link.path} />
            </li>
          </a>
        )}
      </ul>
      <button
          id='contact-button'
          type='button'
          onClick={() => setContent('Contact')}>
            Contact Me!
        </button>
    </nav>
  );
};

export default Nav;

export function TheFooter() {
    const date = new Date();

    const year = date.getFullYear();

  return (
    <footer className='bg-primary py-5'>
      <div className='container grid grid-3'>
        <div>
          <h1>Tatilbul</h1>
          <p>Copyright &copy; {year}</p>
        </div>
        <nav>
          <ul>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#'>Profile</a>
            </li>
            <li>
              <a href='#'>Docs</a>
            </li>
          </ul>
        </nav>
        <div className='social'>
          <a href='#'>
            <i className='fab fa-github fa-2x'></i>
          </a>          
        </div>
      </div>
    </footer>
  );
}

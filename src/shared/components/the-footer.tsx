import Link from "next/link";
import { SiGithub } from "react-icons/si";

export function TheFooter() {
    const date = new Date();

    const year = date.getFullYear();

  return (
    <footer className='bg-primary py-5'>
      <div className='mx-auto max-w-7xl px-4 py-6 grid grid-cols-3'>
        <div>
          <h1>Tatilbul</h1>
          <p>Copyright &copy; {year}</p>
        </div>
        <nav>
          <ul>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/profile'>Profile</Link>
            </li>
            <li>
              <Link href='/chat'>Chat</Link>
            </li>
          </ul>
        </nav>
        <div className='social'>
          <Link href='https://github.com/natrenakres/tatilbul'>
            <SiGithub size={'2rem'} />
          </Link>          
        </div>
      </div>
    </footer>
  );
}

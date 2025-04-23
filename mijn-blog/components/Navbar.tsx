import Link from 'next/link';

export default function Navbar() {
  return (
      <nav className='nav_container'>
        <Link href="/">Ali Soujaa</Link>
        <ul className="nav_list">
          <li><Link href="/" className="nav_link nav_active">Welkom</Link></li>
          <li><Link href="/over-mij" className="nav_link nav_active">Over mij</Link></li>
          <li><Link href="/blogs" className="nav_link nav_active">Blogs</Link></li>
          <li><Link href="/projects" className="nav_link nav_active">Projects</Link></li>
          <li><Link href="/contact" className="nav_link nav_active">Contact</Link></li>
        </ul>
      </nav>
  );
}
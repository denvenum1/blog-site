import Link from 'next/link';
import { FaGithub, FaLinkedin} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="footer mt-20">
            <div className="footer-container">
                <div className="footer-content">
                    <h3 className="text-gray-500 text-sm">
                      © 2025 Ali Ayoub Soujaa <br />
                      Alle rechten voorbehouden.
                    </h3>
                    <div className="social-icons">
                        <Link href="https://github.com/denvenum1" className="social-icon" target="_blank"><FaGithub className="text-lg"/></Link>
                        <Link href="https://www.linkedin.com/in/ali-ayoub-soujaa-86181113b/" className="social-icon" target="_blank"><FaLinkedin className="text-lg"/></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

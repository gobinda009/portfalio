import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import styles from "./Navbar.module.css";

export default function NavBar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarContainer}>
                <ul className={styles.navbarLinks}>
                    <li><Link href="/home">About</Link></li>
                    <li><Link href="#about">Education</Link></li>
                    <li><Link href="#services">Skills</Link></li>
                    <li><Link href="#projects">Projects</Link></li>
                    <li><Link href="#experience">Experience</Link></li>
                    <li><Link href="#contact">Contact</Link></li>
                    <li>
                        <Link href="https://linkedin.com/in/gobindabauri" target="_blank">
                            <FontAwesomeIcon icon={faLinkedin} style={{ width: "24px", height: "22px" }} />
                        </Link>
                    </li>

                </ul>
            </div>
        </nav>
    );
}

"use client"
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import styles from "./Navbar.module.css";

export default function NavBar() {
    const pathname = usePathname(); // Get the current path

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarContainer}>
                <ul className={styles.navbarLinks}>
                    <li className={pathname === "/about" ? styles.active : ""}>
                        <Link href="/about">About</Link>
                    </li>
                    <li className={pathname === "/education" ? styles.active : ""}>
                        <Link href="/education">Education</Link>
                    </li>
                    <li className={pathname === "/skills" ? styles.active : ""}>
                        <Link href="/skills">Skills</Link>
                    </li>
                    <li className={pathname === "/projects" ? styles.active : ""}>
                        <Link href="/projects">Projects</Link>
                    </li>
                    <li className={pathname === "/experience" ? styles.active : ""}>
                        <Link href="/experience">Experience</Link>
                    </li>
                    <li className={pathname === "/contact" ? styles.active : ""}>
                        <Link href="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link href="https://linkedin.com/in/gobindabauri" target="_blank">
                            <FontAwesomeIcon
                                icon={faLinkedin}
                                style={{ width: "24px", height: "22px" }}
                            />
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

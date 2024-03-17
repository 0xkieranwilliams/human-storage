import Link from 'next/link';
import styles from './header.module.css';
import {signIn, signOut, useSession} from "next-auth/react";
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Header() {
  const {data: session, status} = useSession();

  const handleLogout = async () => {
    await signOut();
    window.location.href = '/';
  }

  const handleContact = () => {
    window.location.href = '/about';
  }

  return (
      <header className={styles.header}>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/">Home</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/about">About Us</Link>
            </li>
          </ul>
          {session?.user ? (
            <div style={{width:'400px', display: "flex", justifyContent:"space-between"}}>
              <ConnectButton />
              <button className={styles.loginButton} onClick={handleLogout}>Sign out</button>
            </div>
          )
              :
                (
                    <button className={styles.loginButton} onClick={handleContact}>Contact Us</button>
                )
          }
          {/* <button className={styles.loginButton} onClick={handleLogin}>Log in</button>*/}
        </nav>
      </header>
  );
}

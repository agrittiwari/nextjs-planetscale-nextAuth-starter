import Link from "next/link";
import NavStyle from "./Nav.module.css";
import { useSession, signIn, signOut } from "next-auth/react";

import Styles from "./Nav.module.css";

const Nav = () => {
  const { data: session, status } = useSession();

  return (
    <div className={Styles.nav}>
      <nav className={Styles.navDiv}>
        <Link href='/' style={{ textDecoration: "none" }}>
          <a className={Styles.mainLink}>Funny Incidents</a>
        </Link>
        <Link href='/add'>
          <a className={Styles.link}>Add</a>
        </Link>
        {!session && (
          <li className={Styles.link}>
            {" "}
            <button className={Styles.linkBtn} onClick={() => signIn("google")}>
              Sign in
            </button>
          </li>
        )}

        {session && (
          <li className={Styles.link}>
            <button className={Styles.linkBtn} onClick={() => signOut()}>
              Sign out <i className='fas fa-sign-out-alt'></i>
            </button>
          </li>
        )}
      </nav>
    </div>
  );
};

export default Nav;

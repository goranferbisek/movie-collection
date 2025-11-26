import classes from "./page-header.module.css";
import Link from "next/link";
import {logout} from "@/actions/auth-actions";

export default function PageHeader({username}) {
    return (<header className={classes.header}>
        <div className={classes.logo}><Link href="/">Movie Collection</Link></div>
        <div>
            {!username && <Link href="/login"><button className={classes.loginButton}>Login</button></Link> }
            {username && (<>
                <span className={classes.username}>Hi, {username}</span>
                <form action={logout} >
                    <button>Logout</button>
                </form>
            </>)
            }
        </div>
    </header>);
}
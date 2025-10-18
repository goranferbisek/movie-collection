import classes from "./page-header.module.css";
import Link from "next/link";

export default function PageHeader() {
    const authUser = null; // TODO add user auth check
    //const authUser = {name: "John"}


    return (<header className={classes.header}>
        <div className={classes.logo}>Movie Collection</div>
        <div>
            {!authUser && <button className={classes.loginButton}>Login</button> }
            {authUser && (<>
                <span className={classes.username}>Hi, {authUser.name}</span>
                <Link href="">Logout</Link>
            </>)
            }
        </div>
    </header>);
}
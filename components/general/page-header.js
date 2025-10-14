import classes from "./page-header.module.css";

export default function PageHeader() {
    return (<header className={classes.header}>
        <div className={classes.logo}>Movie Collection</div>
        <button className={classes.loginButton}>Login</button>
    </header>);
}
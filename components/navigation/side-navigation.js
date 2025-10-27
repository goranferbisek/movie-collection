import classes from "./side-navigation.module.css";
import Link from "next/link";

export default function SideNavigation() {
    return (
        <nav className={classes.navigation}>
            <menu>
                <li className={classes.navItem}>
                    <Link href="/library">Library</Link>
                </li>
                <li className={classes.navItem}>
                    <Link href="/discover">Discover</Link>
                </li>
            </menu>
        </nav>
    )
}
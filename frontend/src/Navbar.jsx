import styles from "./Navbar.module.css"

function Navbar(){
    return <div className={styles.navbar}>
        <h1>LocateLost</h1>
        <ul className={styles.list}>
            <li><a href="#">Home</a></li>
            <li><a href="#">Report Missing</a></li>
            <li><a href="#">Search Cases</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Community Help</a></li>
        </ul>
    </div>
}

export default Navbar
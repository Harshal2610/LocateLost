import styles from './SearchForm.module.css'
import Navbar from "./Navbar"
import { useState } from 'react'

function SearchForm() {
    const [image, setImage] = useState(null)
    async function handelSubmit(e) {
        e.preventDefault()
        const res = await fetch('http://localhost:5000/api/runpy')
        const data = await res.json()
        console.log(data)
    }

    return <div >
        <Navbar />
        <div className={styles.container}>

            <form onSubmit={handelSubmit} className={styles.form}>
            <h1 className={styles.heading}>
               Provide an Image to find Missing Person
            </h1>
                <input type='file' onChange={(e) => setImage(e.target.files[0])} />
                <button className={styles.button}>Search</button>
            </form>

            <div className={styles.details}>
                <div className={styles.img}/>
                <div className={styles.detail}>Details</div>
            </div>
        </div>
    </div>
}

export default SearchForm
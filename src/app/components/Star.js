// src/components/Asteroid.js
"use client"
import { useEffect, useRef } from 'react'
import styles from './Star.module.scss'

const Asteroid = () => {
    return (
        <div className={styles.stars}>
            {[...Array(20)].map((_, index) => (
                <div key={index} className={styles.star}></div>
            ))}
        </div>
    )
}

export default Asteroid

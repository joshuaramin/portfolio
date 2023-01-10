import React from 'react'
import styles from '../../styles/pages/pagesThree.module.scss'

export default function PageThree() {


    const educations = [
        { name: "Children School of Tomorrow", year: "2006 - 2013" },
        { name: "Theresian School of Cavite", year: "2013 - 2017" },
        { name: "University of Santo Tomas - Senior High School", year: "2017 - 2019" },
        { name: "University of Santo Tomas - College of Information and Computing Sciences", year: "2019 - Present" },
    ]
    return (
        <div className={styles.container}>
            <div className={styles.con}>
                <h2>Education</h2>
                <div className={styles.edc}>
                    {educations.map(({ name, year }) => (
                        <div className={styles.educContainer} key={name}>
                            <h2>{name}</h2>
                            <span>{year}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import styles from '../../styles/pages/pageFour.module.scss'


const projects = [
    {
        id: "1",
        name: "Inventory Management System",
        description: "Simple inventory management system with integrated of Point of sale that track stock, and supplies.",
        lang: [ 'GraphQL', 'NodeJS', 'NextJS' ],
        status: "Incomplete",
        link: [

        ]
    }
]

export default function PagesFour() {
    return (
        <div className={styles.container}>
            <div className={styles.con}>
                <h2>Projects</h2>
                <div className={styles.projCon}>
                    {projects.map(({ name, lang, description, id, status }) => (
                        <div className={styles.proj} key={name}>
                            <div className={styles.head}>
                                <h2 className={styles.title}>{name}</h2>
                                <div className={status === "Incomplete" ? styles.stats : ""} />
                            </div>
                            <div className={styles.description}>
                                <span>{description}</span>
                            </div>
                            <div className={styles.language} >
                                {lang.map((prog: any) => (

                                    <span key={prog}> {prog}</span>
                                ))}

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

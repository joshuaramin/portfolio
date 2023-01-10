import React from 'react'
import styles from '../../styles/pages/pageTwo.module.scss'
import Image from 'next/image'

export default function PageTwo() {

    const pl = [
        { name: "GraphQL", image: "/pl/graphql-plain.svg" },
        { name: "NextJS", image: "/pl/nextjs-original.svg" },
        { name: "NodeJS", image: "/pl/nodejs-original.svg" },
        { name: "NPM", image: "/pl/npm-original-wordmark.svg" },
        { name: "VSCODE", image: "/pl/vscode-original.svg" },
        { name: "GIT", image: "/pl/git-original.svg" },
        { name: "Github", image: "/pl/github-original.svg" },
        { name: "Sass", image: "/pl/sass-original.svg" },
        { name: "PostgreSQL", image: "/pl/postgresql-original.svg" },
        { name: "MongoDB", image: "/pl/mongodb-original.svg" },
        { name: "Amazon Services", image: "/pl/amazonwebservices-original.svg" }

    ]
    return (
        <div className={styles.container}>
            <div className={styles.con}>
                <h2>About</h2>
                <p>I am currently a student at the <a href="https://www.ust.edu.ph/information-and-computing-sciences/" target={"_blank"} rel="noreferrer">University of Santo Tomas- College of Information and Computing Sciences.</a> I spend most of my time coding for school (project, software engineering I or II, etc.) or fun only. I like doing a minimalist website. Trying to learn some new things like Artificial Intelligence, and 3D websites. </p>
                <br />
                <p>Here are my techology stack: </p>
            </div>
            <div className={styles.techStack}>
                {pl.map(({ image, name }) => (
                    <div className={styles.pl} key={name}>
                        <div className={styles.avatar}>
                            <Image src={image} alt="" height={40} width={40} />
                        </div>
                        <span>{name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

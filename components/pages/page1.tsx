import React from 'react'
import styles from '../../styles/pages/pagesOne.module.scss';
import useSWR from 'swr'
import Image from 'next/image'
import { useRouter } from 'next/router';
export default function PageOne() {

    const router = useRouter()
    const fetcher = (url: any) => fetch(url).then(r => r.json())

    const { data } = useSWR('/api/spotify', fetcher, {
        refreshInterval: 200
    })


    const smLink = [
        { name: "Instagram", link: "https://www.instagram.com/raminjoshua/", image: "/icons/instagram.svg" },
        { name: "Github", link: "https://github.com/joshuaramin", image: "/icons/github.svg" }
    ]

    return (
        <div className={styles.container}>

            <div className={styles.con}>
                <div className={styles.header}>
                    <h1 className={styles.main}>Hello, I{"'"}m Joshua 🙋‍♂️ </h1>
                    <p>This portfolio is very minimal content and design.</p>
                    <div className={styles.sm}>
                        {smLink.map(({ link, name, image }) => (
                            <div className={styles.smc} key={name}>
                                <button onClick={() => router.push(link)} >
                                    <Image src={image} alt="" height={30} width={30} />
                                </button>
                                <span>{name}</span>
                            </div>
                        ))}
                    </div>
                </div>
                {data?.ispPlaying ?
                    <div className={styles.spotify}>
                        <div className={styles.spotifyHeader}>
                            <h2>Spotify Playing</h2>
                            <Image src="/icons/spotify.png" alt="" height={20} width={20} />
                        </div>
                        <div className={styles.music}>
                            <div className={styles.avatar}>
                                <Image src={data?.previewURL} alt="" height={60} width={60} />
                            </div>
                            <div className={styles.avarCon}>
                                <h2>{data?.title}</h2>
                                <span className={styles.art}>{data?.artist}</span>
                            </div>
                        </div>
                    </div> :
                    <div className={styles.notPlaying}>
                        <Image src="/icons/spotify.png" alt="" height={25} width={25}
                        />
                        <h2>Not Playing -</h2>
                        <span>Spotify</span>
                    </div>}
            </div>
        </div >
    )
}

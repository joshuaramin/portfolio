import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { useState } from 'react'
import PageOne from '../components/pages/page1'
import PageTwo from '../components/pages/page2'
import PageThree from '../components/pages/pages3'
import PagesFour from '../components/pages/pages4'
export default function Home() {

  const [ count, setCount ] = useState(1)


  return (
    <div className={styles.container}>
      <Head>
        <title>Joshua Ramin</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        {count == 1 ? <PageOne /> : null}
        {count == 2 ? <PageTwo /> : null}
        {count == 3 ? <PageThree /> : null}
        {count == 4 ? <PagesFour /> : null}

        <div className={styles.btnContainer}>
          <div className={styles.con}>
            <button disabled={count == 1} onClick={() => setCount(count - 1)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-left" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="5" y1="12" x2="19" y2="12" />
                <line x1="5" y1="12" x2="11" y2="18" />
                <line x1="5" y1="12" x2="11" y2="6" />
              </svg>
            </button>
            <div className={styles.btnCon}>
              <h2>{count}</h2>
              <span>{" "}/ 4</span>
            </div>
            <button disabled={count == 4} onClick={() => setCount(count + 1)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-right" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="5" y1="12" x2="19" y2="12" />
                <line x1="13" y1="18" x2="19" y2="12" />
                <line x1="13" y1="6" x2="19" y2="12" />
              </svg>
            </button>
          </div>
        </div>
      </>
    </div>
  )
}

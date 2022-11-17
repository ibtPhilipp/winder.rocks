import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [text, setText] = useState("I'm a PhD student at the University of St. Gallen");

  useEffect(() => {
    const fetchData = async () => {
      await new Promise(f => setTimeout(f, 4000));
    };

    const elem = document.getElementById("testa");

    const loop = async () => {
      setText("I'm a PhD student at the University of St. Gallen.");
      elem?.classList.add(styles.roles_container_list_item_intro);

      await fetchData();
      elem?.classList.remove(styles.roles_container_list_item_intro);
      setText("I'm a behavioral scientist at the IBT.");
      elem?.classList.add(styles.roles_container_list_item_intro);
  
      await fetchData()
      elem?.classList.remove(styles.roles_container_list_item_intro);
      setText("I'm a personal financial well-being enthusiast.");
      elem?.classList.add(styles.roles_container_list_item_intro);
  
      await fetchData()
      setText("I consult individuals on financial well-being.")
      elem?.classList.add(styles.roles_container_list_item_intro);
  
      await fetchData()
      setText("I consult founders and small business owners.")
      elem?.classList.add(styles.roles_container_list_item_intro);

      await fetchData()
      setText("I'm Philipp Winder.")
      elem?.classList.add(styles.roles_container_list_item_intro);

      await fetchData()
      loop();
    }

    loop()

  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Philipp Winder</title>
        <meta name="description" content="Philipp Winder's online home. Say hi and get in touch." />
        <meta name="keywords" content="philipp, winder, science, financial well-being, financial health, consultant, behavioral science"></meta>
        <link rel="shortcut icon" href="/favicon.ico"/>
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.intro}>
          <div className={styles.name}>
            <div className={styles.first}>
              philipp
            </div>
            <div className={styles.last}>
              WINDER
            </div>
          </div>
          <div className={styles.image}>
            <img src='/images/avatar_round.png' alt="Philipp Winder" />
          </div>
        </div>
        <div className={styles.roles}>
          <div className={styles.roles_container}>
            <div id="testa" className={styles.roles_container_list_item}>{text}</div>
          </div>
        </div>
        <div className={styles.buttons}>
          <div className={styles.button1}>
            <a href='https://www.linkedin.com/in/philippwinder/' target="_blank" rel="noopener noreferrer">
              <svg className={styles.svg} width="195" height="64" viewBox="0 0 195 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className={styles.button} d="M130.089 3.38145C149.497 3.38145 162.551 4.7629 182.584 4.7629C198.481 4.7629 192.254 41.9358 192.254 52.4229C192.254 59.1422 188.986 61.4023 182.584 61.4023C175.811 61.4023 144.782 61.0653 138.378 61.4023C97.9505 63.5301 55.9387 59.1141 15.4287 61.4023C2.36216 61.4023 2.99563 54.499 2.99563 43.4435C2.99563 34.8931 0.70514 22.1044 3.07238 13.8191C3.83203 11.1603 3.85743 4.7629 7.8307 4.7629H21.6452C32.3827 4.7629 43.4756 3.38145 53.8023 3.38145C65.417 3.38145 77.968 2 90.0269 2C103.555 2 116.713 3.38145 130.089 3.38145Z" stroke-width="3" stroke-linecap="round"/>
                <text x="50%" y="50%" className={styles.button_text}>LinkedIn</text> 
              </svg>
            </a>
          </div>
          <div className={styles.button1}>
            <a href='https://www.ibt.unisg.ch/team/philipp-winder/' target="_blank" rel="noopener noreferrer">
              <svg className={styles.svg} width="199" height="64" viewBox="0 0 199 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className={styles.button} d="M130.11 1.96597C149.975 1.96597 165.565 3.37997 186.07 3.37997C201.373 1.96597 195.968 41.4289 195.968 52.1632C195.968 59.0408 192.623 61.3542 186.07 61.3542C179.136 61.3542 147.376 61.0092 140.821 61.3542C99.4415 63.5321 56.4396 59.012 14.9749 61.3542C1.60047 61.3542 2.24887 54.2882 2.24887 42.9721L2.24887 28.6023C3.02643 25.8808 2.48454 3.37997 7.19789 3.37997C11.9112 3.37997 19.6773 1.96597 25.7422 1.96597C36.7328 1.96597 44.9479 3.37997 54.2528 1.96597C66.1413 1.96597 79.1026 3.37997 91.4457 3.37997C105.293 3.37997 116.419 1.96597 130.11 1.96597Z" stroke="black" stroke-width="3" stroke-linecap="round"/>
                <text x="50%" y="50%" className={styles.button_text}>IBT</text> 
              </svg>
            </a>
          </div>
          <div className={styles.button1}>
            <a href='mailto:philipp.winder@unisg.ch'>
              <svg className={styles.svg} width="205" height="64" viewBox="0 0 205 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className={styles.button} d="M153.143 1.79773C173.213 1.79773 169.56 3.2263 190.276 3.2263C206.715 3.2263 202.928 28.3313 202.928 39.1761C202.928 46.1246 196.896 61.7977 190.276 61.7977C183.271 61.7977 115.852 58.7417 109.23 59.0902C67.4236 61.2905 59.1892 58.069 17.5738 61.7977C4.06162 61.7977 2 53.6725 2 42.2398C2 33.3978 2.19283 21.1593 4.64081 12.5914C5.42638 9.8419 5.45264 3.2263 9.56145 3.2263H23.8472C34.951 3.2263 46.4222 1.79773 57.1011 1.79773C69.1121 1.79773 82.4622 3.2263 94.9324 3.2263C108.922 3.2263 139.311 1.79773 153.143 1.79773Z" stroke="black" stroke-width="3" stroke-linecap="round"/>
                <text x="50%" y="50%" className={styles.button_text}>E-Mail</text> 
              </svg>
            </a>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
          Created with ❤️ in Austria
      </footer>
    </div>
  )
}

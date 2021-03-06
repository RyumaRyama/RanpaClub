import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>らんぱくらぶ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>らんぱくたま</h1>
      <img class='face' src="/face.png" />
      <h3>なんかつくるよ</h3>
    </div>
  )
}

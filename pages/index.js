import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Addtodo from '../components/additem'

export default function Home() {
  return (
    <div className={styles.container}>

      <Addtodo />
     
      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}

import styles from './page.module.css'
import { Grid } from './components/Grid'

export default function Home() {
  return (
    <main className={styles.main}>
      <Grid />
    </main>
  )
}

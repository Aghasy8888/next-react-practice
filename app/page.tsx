import { fetchInfo } from '@/lib/fetchInfo';
import { ShowData } from './components';

import styles from './page.module.css';

export default async function Home() {
  const info = await fetchInfo();

  return (
    <main className={styles.main}>
      <ShowData anyData={info} />
    </main>
  );
}

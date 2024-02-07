'use client'
import { GoSignIn } from "react-icons/go";
import styles from './page.module.css'
import { polls } from "@/components/logical/data";
import Link from 'next/link'
export default function Home() {

  return (
      <>
        <div className={styles.main}>
          <div className={styles.content}>
            <h1 className={styles.homeTitle}>EACH VOTE MATTERS</h1>
            <button className={styles.ButtonPrimary}>Vote</button>
            <button className={styles.ButtonSecondary}>Register</button>
          </div>
        </div>
        <div className={styles.polls}>
          {
            polls.map((poll) => (
              <div  key={poll.id} >
                <div className={styles.pollCard}>
                <h1>{poll.title}</h1>
                <div className={styles.cardbuttons}>
                  
                  <Link role="button" href={`/vote/${poll.id}/analytic`}>
                      View votes Count
                  </Link>
                  <Link role="button" className={styles.votebtn} href={`/vote/${poll.id}`}>
                      vote
                  </Link>
                </div>
              </div>
              </div>
            ))
          }
        </div>
      </>
    );
}

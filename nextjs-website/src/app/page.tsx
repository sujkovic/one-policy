'use client';
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import React from 'react';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
      <main className={styles.main}>
        <div className={styles.Home}>
          <div className={styles.home_main}>
            <div className={styles.home_main_text}>
              <div className={styles.home_main_text_title}>
                <span className="font-bold">OnePolicy: </span>
                A hub for your insurance policies.
              </div>
              <div className={styles.home_main_text_subtitle}>
                Select a product to compare quotes:
              </div>
              <div className={styles.home_main_categories}>
                  <Link
                    href="/life"
                    className={styles.home_main_category_life}
                    >Life
                  </Link>
                <div className={styles.home_main_category}>
                  <div className="font-semibold ">Home</div>
                </div>
                <div className={styles.home_main_category}>
                  <div className="font-semibold">Auto</div>
                </div>
                <div className={styles.home_main_category}>
                  <div className="font-semibold">Disability</div>
                </div>
                <div className={styles.home_main_subtext}>
                  Don't worry, we won't share your information
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
  )
}

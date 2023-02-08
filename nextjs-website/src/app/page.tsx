'use client';
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import React, {useState, useEffect} from 'react';
import header_logo from '../images/header_logo.png'
import Header from '../components/Header'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
      <main className={styles.main}>
        <Header />
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
                  <button
                  className={styles.home_main_category_life}
                  onClick={() => {
                    
                  }}
                  >Life</button>
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
        {/* <Image alt="Main" className={styles.home_main_img_rect} src={header_logo} /> */}
        <Footer />
      </main>
  )
}

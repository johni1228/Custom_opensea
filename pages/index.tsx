import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Layout from '../components/layout/layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
   <div className=''>
     <Head>
       <title>Custome opensea</title>
     </Head>
     <Layout>
       <section>
         Welcome to Layout
       </section>
     </Layout>
   </div>
  )
}

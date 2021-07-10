import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Layout from '../components/layout/layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
   <div className='text-center text-yellow-600'>
     <Head>
       <title>Custome opensea</title>
     </Head>
     Welcome to Next.js
     <Layout>
       <section>
         Welcome to Layout
       </section>
     </Layout>
   </div>
  )
}

import Head from 'next/head'
import React from 'react'
import Form from '../components/InputForm'
import Nav from '../components/Nav/Nav'

const add = () => {

  return (
    
    <div>
        <Head>
        <title>Share your Funny Incident/Memory with the world</title>
        <meta name="description" content="Add your funny moment" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
            <Nav/>
        <p>Add YOUR FUNNY iNCIDENT here</p>
        <Form/>
        </main>
        <footer>

        </footer>
    </div>
  )
}

export default add
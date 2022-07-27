/* eslint-disable react/jsx-key */
import Head from "next/head";

import Nav from "../components/Nav/Nav";
import { useSession } from "next-auth/react";
// import prisma from '../lib/prisma';
import Link from "next/link";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Card from "../components/Card";

export default function Home({ products }) {
  const { data: session, status } = useSession();
  const [incidents, setIncidents] = useState([]);
  const getIncidents = async () => {
    try {
      const response = await fetch("/api/addincident", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const res = await response.json();
      setIncidents(res.incidents);
    } catch (error) {
      console.log("There was an error getting data", error);
    }
  };

  useEffect(() => {
    getIncidents();
  }, []);

  return (
    <div>
      <Head>
        <title>Read Funny Incidents</title>
        <meta
          name='description'
          content='People all across the world shared their Funny Incidents and memories'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='app-container'>
        <Nav />
        <main className='xl:container xl:mx-auto p-4'>
          <div>List of Incidents</div>
          {status === "loading" && (
            <div>
              <p>loading..</p>
            </div>
          )}
          {status === "unauthenticated" && (
            <div>
              <strong>Sign up to share your funny Incident</strong>
            </div>
          )}
          <div className='list'>
            {incidents?.map((val, idx) => (
              <Card key={idx} val={val} />
            ))}
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}

// export async function getStaticProps(context) {
//   const data = await prisma.product.findMany({
//     include: {
//       category: true,
//     },
//   });

//   //convert decimal value to string to pass through as json
//   const products = data.map((product) => ({
//     ...product,
//     price: product.price.toString(),
//   }));
//   return {
//     props: { products },
//   };
// }

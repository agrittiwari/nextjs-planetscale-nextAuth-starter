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
  const [loading, setLoading] = useState(false);

  const handleLoading = () => {
    setLoading(!loading);
  };

  const getIncidentsById = async () => {
    try {
      const response = await fetch(`/api/addincident/${session?.user.id}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const res = await response.json();
      console.log(res);
      // setIncidents(res.incidents);
    } catch (error) {
      console.log("There was an error getting data", error);
    }
  };
  const getIncidents = async () => {
    try {
      handleLoading();
      const response = await fetch(`/api/addincident`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const res = await response.json();
      setIncidents(res.incidents);
      setLoading(false);
    } catch (error) {
      console.log("There was an error getting data", error);
    }
  };

  useEffect(() => {
    getIncidents();
    // getIncidentsById();
  }, [session]);

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
        <main>
          <Nav />
          <div >
          
            {status === "loading" && <div className='loading' />}
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
          </div>
          {loading && <div className='loading' />}
          <Footer />
        </main>
      </div>
    </div>
  );
}

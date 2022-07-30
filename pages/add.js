import { useSession } from "next-auth/react";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Form from "../components/InputForm";
import Nav from "../components/Nav/Nav";

const Add = () => {
  const { data: session, status } = useSession();
  const [authorId, setAuthorId] = useState(session?.user.id);
  const [event, setEvent] = useState("");
  const [loading, setLoading] = useState(false);
  const [yearsAgo, setYearsAgo] = useState(2022);
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState(undefined);
  const resetToDefault = () => {
    setEvent("");
    setCountry(undefined);
    setYearsAgo(2022);
  };

  const getCountries = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const res = await response.json();
      setCountries(res);
    } catch (error) {
      console.error({ msg: error.message });
    }
  };

  const onSave = async (e) => {
    e.preventDefault();
    const body = { event, yearsAgo, country, authorId };
    try {
      setLoading(true);
      const res = await fetch("/api/addincident", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(await res.json());

      if (res.status === 200) {
        resetToDefault();
        setLoading(false);
        alert("Funny Incident Shared!");
      }
    } catch (err) {
      console.error({ msg: err.message });
    }
  };

  useEffect(() => {
    setAuthorId(session?.user.id);
    getCountries();
  }, [session]);

  return (
    <div>
      <Head>
        <title>Share your Funny Incident/Memory with the world</title>
        <meta name='description' content='Add your funny moment' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='app-container'>
        <main>
          <Nav />
          <div className='min-h-[71vh]'>
            {status === "unauthenticated" && (
              <span>Sign In to make your Entry</span>
            )}
            {status === "loading" && <div className='loading' />}
            {status === "authenticated" && (
              <Form
                setCountry={setCountry}
                setEvent={setEvent}
                countries={countries}
                yearsAgo={yearsAgo}
                event={event}
                country={country}
                setYearsAgo={setYearsAgo}
                onSave={onSave}
              />
            )}
          </div>
          {loading && <div className='loading' />}
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Add;

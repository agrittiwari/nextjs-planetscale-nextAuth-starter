import { useSession } from "next-auth/react";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Form from "../components/InputForm";
import Nav from "../components/Nav/Nav";

const Add = () => {
  const { data: session, status } = useSession();
  const [authorId, setAuthorId] = useState(session?.user.id);
  // const [author, setAuthor] = useState();
  const [event, setEvent] = useState("");
  const [yearsAgo, setYearsAgo] = useState(0);
  const [country, setCountry] = useState("");

  const resetToDefault = () => {
    setEvent("");
    setCountry("");
    setYearsAgo("");
  };

  const onSave = async (e) => {
    e.preventDefault();
    const body = { event, yearsAgo, country, authorId };
    try {
      const res = await fetch("/api/addincident", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(await res.json());

      if (res.status === 200) {
        alert("Funny Incident Shared!");
        resetToDefault();
      }
    } catch (err) {
      console.error({ msg: err.message });
    }
  };
  // useEffect(() => {
  //   onSave();
  // }, []);

  return (
    <div>
      <Head>
        <title>Share your Funny Incident/Memory with the world</title>
        <meta name='description' content='Add your funny moment' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Nav />
        <p>Add YOUR FUNNY iNCIDENT here</p>
        <Form
          setCountry={setCountry}
          setEvent={setEvent}
          setYearsAgo={setYearsAgo}
          onSave={onSave}
        />
      </main>
      <footer><Footer/></footer>
    </div>
  );
};

export default Add;

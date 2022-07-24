import Head from "next/head";
import React, { useEffect, useState } from "react";
import Form from "../components/InputForm";
import Nav from "../components/Nav/Nav";

const Add = () => {
  const [author, setAuthor] = useState("");
  const [event, setEvent] = useState("");
  const [yearsAgo, setYearsAgo] = useState("");
  const [country, setCountry] = useState("");
  const [authorId, setauthorId] = useState("");

  const handleSubmit = async () => {
    const form = { event, yearsAgo, country, author, authorId };
    try {
      const response = await fetch("/api/addincident", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: form,
      });
      if (response.status === 200) {
        console.log(await response.json());
        setIncidents(await response.json().incidents);
      } else {
        console.log(
          "There was ana error getting data",
          await response.json().msg
        );
      }
    } catch (error) {
      console.log("There was an error getting data", error);
    }
  };

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
        <Form />
      </main>
      <footer></footer>
    </div>
  );
};

export default Add;

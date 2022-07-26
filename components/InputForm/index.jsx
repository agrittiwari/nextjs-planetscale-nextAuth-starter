import { useSession } from "next-auth/react";
import { useState } from "react";
// import prisma from '../../lib/prisma'
import Styles from "./Form.module.css";

const Form = ({ setCountry, setEvent, setYearsAgo, onSave }) => {
  const { data: session, status } = useSession();
  if (status === "unauthenticated")
    return <span>Sign In to make your Entry</span>;
  if (status === "loading") return <strong>Loading your form...</strong>;
  if (status === "authenticated")
    return (
      <div className={Styles.formDiv}>
        <form className='w-1/2' onSubmit={onSave}>
          <label className={Styles.label}>Share your Funny Memory</label>
          <textarea
            type='text'
            //   value={incident.event}
            name='event'
            onChange={(e) => setEvent(e.target.value)}
            className={Styles.inputClass1}
            width='48'
            height='48'
          ></textarea>
          <div className={Styles.subForm}>
            <div className={Styles.subFormPart}>
              <label className={Styles.label}>
                When did this funny story happened?
              </label>
              <input
                className={Styles.inputClass2}
                type='number'
                placeholder='like in 2021'
                name='yearsAgo'
                onChange={(e) => setYearsAgo(JSON.parse(e.target.value))}
              />
            </div>
            <div className={Styles.subFormPart}>
              <label className={Styles.label}>Where did you enjoyed it?</label>
              <input
                className={Styles.inputClass2}
                type='text'
                placeholder='e.g.- Memphis, America '
                //   value={incident.country}
                name='country'
              />
            </div>
          </div>
          <input className={Styles.submit} type='submit' value='submit' />
        </form>
      </div>
    );
};

export default Form;

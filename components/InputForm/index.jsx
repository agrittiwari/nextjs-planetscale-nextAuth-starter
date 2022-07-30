import { useSession } from "next-auth/react";
import { useState } from "react";
// import prisma from '../../lib/prisma'
import Styles from "./Form.module.css";

const Form = ({
  setCountry,
  yearsAgo,
  country,
  countries,
  event,
  setEvent,
  setYearsAgo,
  onSave,
}) => {
  const { data: session, status } = useSession();
  return (
    <div className={Styles.formDiv}>
      <form className='w-1/2' onSubmit={onSave}>
        <label className={Styles.label}>Share your Funny Memory</label>
        <textarea
          type='text'
          placeholder='Incidents ......'
          value={event}
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
              min='1900'
              max='2022'
              step='1'
              value={yearsAgo}
              placeholder='like in 2021'
              name='yearsAgo'
              onChange={(e) => setYearsAgo(parseInt(e.target.value, 10))}
            />
          </div>
          <div className={Styles.subFormPart}>
            <label className={Styles.label}>Where are you from?</label>
            <select
              name='country'
              className={Styles.inputClass2}
              placeholder='Select any country'
              onChange={(e) => {
                setCountry(e.target.value);
              }}
            >
              {countries?.map((val) => (
                <option
                  key={val.cca2}
                  value={`${val.name.common},${val.flags.svg}`}
                >
                  {val.name.common}
                </option>
              ))}
            </select>
          </div>
        </div>
        <input className={Styles.submit} type='submit' value='submit' />
      </form>
    </div>
  );
};

export default Form;

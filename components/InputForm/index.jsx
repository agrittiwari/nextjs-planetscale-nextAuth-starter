
import { useSession } from "next-auth/react";
import { useState } from "react";
// import prisma from '../../lib/prisma'
import Styles from './Form.module.css'

const Form = () => {

    const {session:data, status} = useSession()
    const [incident, setIncident] = useState({
      event:'',
      yearsAgo:'',
      author: data?.user.name,
      country:''        
    })
    const onSave = async (e) => {
        e.preventDefault()
        console.log(e.target);
        try {
            const res = await fetch('api/add',{method:'POST', body: JSON.stringify(incident)})

            let data = await res.json()  
        if(data){
            alert('Funny Incident Shared!')
            setIncident({
            event:'',
      yearsAgo:'',
      author: data?.user.name,
      country:'' 
        })}
        } catch (err) {
            console.error({msg:err.message})
        }
        

    }
if (status=== 'unauthenticated') return <span>Sign In to make your Entry</span>
    if(status==='loading') return <strong>Loading your form...</strong>
 if (status === 'authenticated') return (
    <div className={Styles.formDiv}>
<form className="w-1/2" onSubmit={onSave}>
            <label className={Styles.label}>
              Share your Funny Memory 
                </label> 
                <textarea type="text" value={incident.event} name="event"  onChange={(e)=>setIncident({event:e.target.value})}className={Styles.inputClass1} width="48" height="48"></textarea>
           <div className={Styles.subForm}>
                <div className={Styles.subFormPart}>
                    <label className={Styles.label}>When did this funny story happened?</label>
                    <input className={Styles.inputClass2} type="number" placeholder="like in 2021" value={incident.yearsAgo} name="yearsAgo" onChange={(e)=>setIncident({yearsAgo:e.target.value})}/>
                </div>
                <div className={Styles.subFormPart}>
                    <label className={Styles.label}>Where did you enjoyed it?</label>
                    <input className={Styles.inputClass2} type="text" placeholder="e.g.- Memphis, America " value={incident.country} name="country" onChange={(e)=> setIncident({country:e.value.target})}/>
                </div>
                
           </div>
            <input className={Styles.submit} type="submit" value='Submit'/>
            
        </form>
    </div>
        
    );
};

export default Form;
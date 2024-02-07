'use client'
import styles from './page.module.css'
import { useState } from 'react'

import axios from 'axios';
import { useRouter } from 'next/navigation';
 
export default function SignIn(params) {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("")
    const [Reqerror, setReqError] = useState(false) 
    const router = useRouter();

  

    const  handleLogIn  =  (e)=>{
        e.preventDefault()
        axios({
            url:"/api/users",
            method:"POST",
            data:{
                email:email,
                password:password
            },
            headers:{
                "Content-Type":"appication/json"
            }
        }).then((result) => {
            console.log(result)
            
            if(result.status === 200){
                // cook
                router.push('/dashboard')
            }else if(result.status === 400){
                console.log(result.statusText);
                setReqError(true)
            }
            
        }).catch((err) => {
           setReqError(true)

        });
     
        
    }


    return(
        <>
        <main className={styles.main}>
            {Reqerror 
                ?
                <div className={styles.Reqerror}>
                    <p>Wrong password or email</p>
                </div>
                :
                <></>
            }
            <form onSubmit={handleLogIn} className={`${styles.formContainer}`}>
                <label htmlFor="email" className={`${styles.formLabel}`} style={{color:Reqerror && "red"}}>
                    Email
                    <input type="email" required autoComplete='on' id="email" value={email}  onChange={(e)=>setEmail(e.target.value)}  className={`${styles.input} ${Reqerror && styles.hasError} `} />
                </label>
                <label htmlFor="password" className={`${styles.formLabel}`} style={{color:Reqerror && "red"}}>
                    password
                    <input type="password" required autoComplete='on' id="password" value={password}  onChange={(e)=>setPassword(e.target.value)} className={`${styles.input} ${Reqerror && styles.hasError} `}/>
                </label>
                <button className={styles.submitBtn} >submit</button>

            </form>
        </main>
        </>
    )
};
  
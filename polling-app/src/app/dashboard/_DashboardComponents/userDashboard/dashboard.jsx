'use client'
import styles from './styles.module.css'
import { FaInfoCircle,FaCheck } from 'react-icons/fa'
import { RiCheckboxBlankLine } from "react-icons/ri";
import { 
    presidentialCandidates,
    secretariatCandidates,
    vicePresidential,
    treasury,
    presidentialVotes,
    secretariatVotes,
    vicePresidentialVotes,
    treasuryVotes
 } from '@/components/logical/data'
import Image from 'next/image'
import axios from 'axios'
import { useEffect,useState } from 'react'
export default function UserDashboard(props) {
    const userProfile = props.props 
    const userId = userProfile.id;
    
   
    const[ notvoted,setVoted] = useState([])
   


   
    useEffect(()=>{
        
    })

    function Castvote(CandidateId,VoterId,Position){
        axios({
            method:"POST",
            url:"/dashboard/api/vote",
            headers:{
                "Content-Type":"application/json"
            },
            data:{
                position:Position,
                candidateId:CandidateId,
                voterId:VoterId,
                date:new Date(),
            }
        }).then((result) => {
            console.log(result)
        }).catch((err) => {
            console.log(err);
        });
    }



    return(
        <>
            <main className={styles.main}>
                {userProfile.gender === "female" && <h1 className={styles.welcomeMessage}>Welcome back Mrs {userProfile.firstName} </h1> }
                {userProfile.gender === "male" && <h1 className={styles.welcomeMessage}>Welcome Back Mr {userProfile.firstName} </h1> }

                <div className={styles.infoContainer}>
                    <span className={styles.infoIcon}><FaInfoCircle/></span>
                    {notvoted.length < 1  ? <span className={styles.infoText}>You have cast all your votes</span> :<span className={styles.infoText}>You have not casted your votes for :{notvoted.map(((position,index)=>(
                        <h3 key={index}>{position},</h3>
                    )))} </span>}
                </div>

                <div className={styles.votingBoard}>
                    <h3>Presidential</h3>
                        <div className={styles.presidentialTab}>
                            
                            {presidentialCandidates.map((candidate) => (
                               <div key={candidate.id} className={styles.candidateContainer}>
                                
                                   <Image 
                                        src={candidate.avatar}
                                        height={40}
                                        width={40}
                                        alt="candidate"
                                        className={styles.candidateAvatar}
                                   />
                                <div className={styles.candidateDetails}>
                                    <p className={styles.candidateName}>{candidate.firstName} {candidate.lastName}</p>
                                    
                                    {
                                        notvoted.includes("presidential") === true 
                                            ? 
                                            <span  className={styles.voteBTN} disabled={true}></span>
                                            :
                                            <span onClick={()=>Castvote(candidate.id,userProfile.id,"presidential")} className={styles.voteBTN} disabled={ false}><FaCheck /></span>
                                    }
                                    
                                </div>
                               </div>



                            ) )}
                        </div>
                    <h3>Vice Presidential</h3>
                        <div className={styles.presidentialTab}>
                            
                            {vicePresidential.map((candidate) => (
                               <div key={candidate.id} className={styles.candidateContainer}>
                                
                                   <Image 
                                        src={candidate.avatar}
                                        height={40}
                                        width={40}
                                        alt="candidate"
                                        className={styles.candidateAvatar}
                                   />
                                <div className={styles.candidateDetails}>
                                    <p className={styles.candidateName}>{candidate.firstName} {candidate.lastName}</p>
                                    
                                    {
                                        notvoted.includes("vice presidential") === true 
                                            ? <button className={styles.voteBTN} disabled={true}>Vote</button>
                                            : <span onClick={()=>Castvote(candidate.id,userProfile.id,"presidential")} className={styles.voteBTN} disabled={ false}><FaCheck /></span>

                                    }
                                    
                                </div>
                               </div>



                            ) )}
                        </div>
                    <h3>Secretariat</h3>
                        <div className={styles.presidentialTab}>
                            
                            {secretariatCandidates.map((candidate) => (
                               <div key={candidate.id} className={styles.candidateContainer}>
                                
                                   <Image 
                                        src={candidate.avatar}
                                        height={40}
                                        width={40}
                                        alt="candidate"
                                        className={styles.candidateAvatar}
                                   />
                                <div className={styles.candidateDetails}>
                                    <p className={styles.candidateName}>{candidate.firstName} {candidate.lastName}</p>
                                    
                                    {
                                        notvoted.includes("secretariat") === true 
                                        ? <button className={styles.voteBTN} disabled={true}>Vote</button>
                                        : <span onClick={()=>Castvote(candidate.id,userProfile.id,"presidential")} className={styles.voteBTN} disabled={ false}><FaCheck /></span>

                                    }
                                    
                                </div>
                               </div>



                            ) )}
                        </div>
                    <h3>Treasury</h3>
                        <div className={styles.presidentialTab}>
                            
                            {treasury.map((candidate) => (
                               <div key={candidate.id} className={styles.candidateContainer}>
                                
                                   <Image 
                                        src={candidate.avatar}
                                        height={40}
                                        width={40}
                                        alt="candidate"
                                        className={styles.candidateAvatar}
                                   />
                                <div className={styles.candidateDetails}>
                                    <p className={styles.candidateName}>{candidate.firstName} {candidate.lastName}</p>
                                    
                                    {
                                        notvoted.includes("Treasury") === true 
                                        ? <button className={styles.voteBTN} disabled={true}>Vote</button>
                                        : <span onClick={()=>Castvote(candidate.id,userProfile.id,"presidential")} className={styles.voteBTN} disabled={ false}><FaCheck /></span>

                                    }
                                    
                                </div>
                               </div>



                            ) )}
                        </div>
                </div>
            </main>
        </>
    )
};

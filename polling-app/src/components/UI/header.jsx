'use client'
import { MdOutlineDashboard,MdHome } from "react-icons/md";
import { GiVote } from "react-icons/gi";
import { LuLogOut } from "react-icons/lu";
import styles from './styles/header.module.css'
import Link from 'next/link'
import { usePathname } from "next/navigation";
import { useState,useEffect } from "react";
import Image from 'next/image'
import wallP from '../../../public/wall1.png';
import { FaRegUser } from "react-icons/fa";
import { useRouter} from "next/navigation";
// import ProfileData from "./profileCard";

import axis from 'axios'

export default function Header(props) {

    const user = props.user
    const pathname = usePathname();
    const isActive = pathname
    
    
    const router = useRouter()
    function handleLogOut(){
        
        axis({
            method:"POST",
            url:"/api/signOut",
            headers:{
                "Content-Type": "application/json"
            },
            data:user
        }).then((result) => {
            if(result.status === 200){
                router.push("/")
                
                
            }
        }).catch((err) => {
            console.log(err);
        });
    }
    
    
    return(
        
        <div className={styles.header}>
            <Link href={'/'} className={`${styles.logo} `}>
                Poll.Wank
            </Link>
            {user &&
                <div className={styles.profile}>
                    <div className={styles.image}>
                        <Image
                            src={wallP}
                            height={100}
                            width={200}
                            alt="image alt"
                            className={styles.img}
                            
                        />
                    </div>
                    <div className={styles.userData}>
                       
                        <p className={styles.userName}>{user.firstName}</p>
                        <p className={styles.userName}>{user.id}</p>
                    </div>
                </div>}
            <Link href='/' className={`${styles.home} ${styles.headerItem} ${pathname === '/' && styles.isActive}`}>
                <span className={styles.icon}><MdHome/></span>
                <span className={styles.text}>Home</span>
            </Link>
            <Link href='/dashboard' className={`${styles.dashboard} ${styles.headerItem} ${pathname === '/dashboard' && styles.isActive} `}>
                <span className={styles.icon}><MdOutlineDashboard/></span>
                <span className={styles.text}>Dashboard</span>
            </Link>
            <Link href="/vote" className={`${styles.vote} ${styles.headerItem} ${pathname === '/vote' && styles.isActive}`}>
                <span className={styles.icon}><GiVote/></span>
                <span className={styles.text}>Vote</span>
            </Link>
            { user ? 
                <span onClick={handleLogOut} className={`${styles.signout} ${styles.headerItem}  `}>
                    <span className={styles.icon}><LuLogOut/></span>
                    <span className={styles.text}>Logout</span>
                </span>
                :
                <Link href={'/sign-in'} className={`${styles.signIn} ${styles.headerItem}  `}>
                    <span className={styles.icon}><LuLogOut/></span>
                    <span className={styles.text}>Log In</span>
                </Link>
            }
           
            
        </div> 
    )
};

import MiniHeader from "./_DashboardComponents/miniHeader";
import { cookies } from "next/headers"
import Link from 'next/link'
import { users } from "@/components/logical/data";
import UserDashboard from "./_DashboardComponents/userDashboard/dashboard";
import AdminDashboard from "./_DashboardComponents/adminDashboard/dashboard";
export default function Layout({
    children,
    
  
   

}) {

    const cookie = cookies();
    const UID =cookie.get("UID")?.value 
    
    const userProfile  = users.find((user)=> (
        JSON.stringify(user.id) ===  UID
    ))
    return (
        <>
        <MiniHeader />
        
        {children}

        {
            userProfile 
                ?    
                    userProfile.role === "user" ? <UserDashboard props={userProfile}/>
                    : userProfile.role === "admin" ? <AdminDashboard props ={userProfile}/>
                        :<>
                        <h1>Your Account hass access issues Please contact admin</h1>
                        </>

                    
                :
                <>
                <h1>Please logIn first to access this page</h1>
                </>

        }
        
        </>
    )
};

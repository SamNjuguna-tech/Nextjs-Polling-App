import { users } from "@/components/logical/data";
import { cookies } from "next/headers";
export async function POST(request){
    const userCred = await request.json();

    const userProfile = users.find((user) =>(
        user.password === userCred.password && user.email ===  userCred.email
    ))

    const uid = userProfile.id;
    const cookie = cookies();
    cookie.set("UID",JSON.stringify(uid))
    

    if (userProfile) {
        return new Response(JSON.stringify(userProfile),{
            status:200
        })
    }
    return new Response({
        status:400
    })
   
}


import { cookies } from "next/headers";
export async function POST(request) {
  
    let cookiesLibrary = cookies();
    try {
        cookiesLibrary.delete("UID")
        return new Response({
            status:200
        })
    } catch (error) {
        return new Response({
            status:500
        })
    }
    
    

    
};

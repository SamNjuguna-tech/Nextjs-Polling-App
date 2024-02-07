import {
    presidentialVotes,
    secretariatVotes,
    vicePresidentialVotes,
    treasuryVotes
} from '@/components/logical/data'
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
export async function GET(request) {
    const Cookies = cookies();
    let UID = JSON.parse(Cookies.get("UID"))
    const voted = []
    
    let allVotes
    
    // check for presidential 


    
    
  return NextResponse.json({ error: 'request recieved' }, { status: 200 })
}
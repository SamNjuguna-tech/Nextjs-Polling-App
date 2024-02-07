import { 
    vicePresidentialVotes,
    presidentialVotes,
    secretariatVotes,
    treasuryVotes
 } from "@/components/logical/data"
import {NextResponse} from 'next/server'

export async function POST(request){
    const body = await request.json()
    // console.log(body)
    let poll = body.position;
    let newVote = {
        voterId: body.voterId,
        candidateId:body.candidateId,
        dateVoted:body.date
    }

    switch (poll) {
        case "presidential":
            var voted = presidentialVotes.find((vote) =>{
               return vote.voterId === newVote.voterId   
            })
           
            if (!voted) {
                presidentialVotes.push(newVote)
                return new NextResponse(JSON.stringify({message:"vote casted" }),{
                    status:201
                })
            }else{
                return new NextResponse(JSON.stringify({error:"Transaction already processed"}),{status:409})
                
            }
            break;
         case "vicePresidential":
            var voted = vicePresidentialVotes.find((vote) =>{
               return vote?.voterId === newVote.voterId   
            })
            if (!voted) {
                vicePresidentialVotes.push(newVote)
                return new NextResponse(JSON.stringify({message:"vote casted"}),{
                    status:201          
                })
            }else{

                return new NextResponse(JSON.stringify({
                    error:"Transaction already processed"
                }),{status:409})

            }
            break;
         case "secretariat":
            var voted = secretariatVotes.find((vote) =>{
                vote?.voterId === newVote.voterId   
            })
            if (!voted) {
                secretariatVotes.push(newVote)
                return new NextResponse(JSON.stringify({message:voted}),{
                    status:201,
                   
                })
            }else{
                return new NextResponse(JSON.stringify({error:"Transaction already processed"}),{status:409})
                
            }
            break;
         case "treasury":
            var voted = treasuryVotes.find((vote) =>{
                vote?.voterId === newVote.voterId   
            })
            if (!voted) {
                treasuryVotes.push(newVote)
                return new NextResponse(JSON.stringify({message:"vote casted"}),{
                    status:201,
                    
                })
            }else{
                return new NextResponse(JSON.stringify({error:"Transaction already processed"}),{
                   status:409,
                })
            }
            break;
    
        default:
            return new NextResponse(JSON.stringify({error:"server Error"}),{
                status:500,
               
             })
            break;
    }

    
}




import {
    vicePresidentialVotes,
    presidentialVotes,
    secretariatVotes,
    treasuryVotes
} from '@/components/logical/data'
export default function Vote({params}) {
    console.log(presidentialVotes);
    return(
        <>
        <div>
            <p>presidential :{presidentialVotes.length}</p>
            <p>Vice Presidential : {vicePresidentialVotes.length}</p>


        </div>

        </>
    )
};

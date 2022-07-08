//import the use router hooj to get the path params

import { useRouter } from "next/router";

export default function UserIdPage(){
    const router = useRouter()
    const { uid } = router.query
    return (
        <h1> Hello user at id {uid} hehehe</h1>
    )
}
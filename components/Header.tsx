import { Head } from "https://deno.land/x/fresh@1.1.5/runtime.ts"

export default function Header(){
    return(
        <>
            <Head>
                <link rel="stylesheet" href="./Css/style.css"></link>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');
                </style>    
            </Head>
        </>
    )
}
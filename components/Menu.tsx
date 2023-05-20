export default function Menu(prop:{activ:number}){
    return(
        <nav>
            <a id={(prop.activ === 0)? "active":"b0"} class="button" href="/">O mnie</a>
            <a id={(prop.activ === 1)? "active":"b1"} class="button" href="websites">Strony</a>
            <a id={(prop.activ === 2)? "active":"b2"} class="button" href="games">Gry</a>
            <a id={(prop.activ === 3)? "active":"b3"} class="button" href="buy">Kup stronę</a>
        </nav>
    );
}
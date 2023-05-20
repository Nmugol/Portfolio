

export default function Bacgroun(prop:{variab:string}){
    return(
        <>
            <div id="blob"></div>
            <div class={"bacground"} id={prop.variab}></div>
        </>
    );
}
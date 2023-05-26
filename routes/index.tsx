import Bacgroun from "../components/Bacground.tsx";
import Header from "../components/Header.tsx";
import Menu from "../components/Menu.tsx";
import { GetDataFromDatabase } from "../components/GetDtaFromDatabase.ts";

async function getdata() {
  const data = await GetDataFromDatabase("select * from About_Me");
  return data;
}


let data = await getdata();

export default function Home() {
  return (
    <>
      <Header/>
        <Bacgroun variab="bg0"/>
        <Menu activ={0}/>
      <div id="content">
        
        <article>
          <div id="gallery">
            <div id="logo" style={"background-image: url(../Img/"+data[0].Img+")"}></div>
          </div>
          <div id="description">
            <p>{data[0].Description}</p>
          </div>
        </article>
      </div>
    </>
  );
}


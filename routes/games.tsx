import Bacgroun from "../components/Bacground.tsx";
import Header from "../components/Header.tsx";
import Menu from "../components/Menu.tsx";


  // let apiurl = 'https://api.mymemory.translated.net/get?q=cześć&langpair=pl|en';
  // fetch(apiurl).then(res => res.json()).then(data2 => {
  //     console.log(data2)
  // })


  

export default function Games() {
  return (
    <>
      <Header/>
        <Bacgroun variab="bg2"/>
        <Menu activ={2}/>
      <div id="content">
        <article>
          <div id="gallery"></div>
        </article>
      </div>
    </>
  );
}

import Bacgroun from "../components/Bacground.tsx";
import Header from "../components/Header.tsx";
import Menu from "../components/Menu.tsx";

export default function Website() {
  return (
    <>
      <Header/>
      <Bacgroun variab="bg1"/>
      <Menu activ={1}/>
    </>
  );
}

import Bacgroun from "../components/Bacground.tsx";
import Header from "../components/Header.tsx";
import Menu from "../components/Menu.tsx";

export default function Games() {
  return (
    <>
      <Header/>
      <Bacgroun variab="bg2"/>
      <Menu activ={2}/>
    </>
  );
}

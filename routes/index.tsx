import Bacgroun from "../components/Bacground.tsx";
import Header from "../components/Header.tsx";
import Menu from "../components/Menu.tsx";

export default function Home() {
  return (
    <>
      <Header/>
      <Bacgroun variab="bg0"/>
      <Menu activ={0}/>
    </>
  );
}

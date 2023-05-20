import Bacgroun from "../components/Bacground.tsx";
import Header from "../components/Header.tsx";
import Menu from "../components/Menu.tsx";

export default function Buy() {
  return (
    <>
      <Header/>
      <Bacgroun variab="bg3"/>
      <Menu activ={3}/>
    </>
  );
}

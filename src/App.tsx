import { Header } from "./common/components/header/header.component";
import { MenuList } from "./modules/menu/components/menu-list/menu-list.component";
import clothes from "./mocks/cloth.json";
import { Footer } from "./common/components/footer/footer.component";

export const App = () => {
  return (
    <>
      <Header />
     <div className="mb-24"> <MenuList clothes={clothes} /></div>
      <Footer />
    </>
  );
};

export default App;

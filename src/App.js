import Header from "./components/ui/Header";
import Banner from "./components/ui/Banner";
import Info from "./components/app/Info";
import Meals from "./components/app/Meals";

function App() {
  return (
    <div className="App bg-gray-800 font-os">
      <Header></Header>
      <Banner></Banner>
      <Info></Info>
      <Meals></Meals>
    </div>
  );
}

export default App;

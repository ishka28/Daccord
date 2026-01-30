import LeftMenu from "./LeftMenu";
import MiddleMenu from "./MiddleMenu";
import RightMenu from "./RightMenu";

function App() {
  return (
    <div className="flex h-screen w-full bg-gradient-to-b from-purple-500 to-purple-200 p-10 items-center justify-center">
      <LeftMenu />
      <MiddleMenu/>
      <RightMenu/>
    </div>
  );
}

export default App;

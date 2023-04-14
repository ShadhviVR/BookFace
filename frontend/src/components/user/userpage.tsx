import Profile from "./Profile/Profile";
import Test from "./allpost/test"
function App() {
  return (
    <div className="App bg-gray-20">
        <div className="blur" style={{top: '-18%', right: '0'}}></div>
        <div className="blur" style={{top: '36%', left: '-8rem'}}></div>
        {/* <Home/> */}
        <Profile/>
        {/* <Auth/> */}
        <br/>
        <div className="bg-gray-20">
        <Test/>
        </div>
    </div>
  );
}

export default App;
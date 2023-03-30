import Profile from "./Profile/Profile";
function App() {
  return (
    <div className="App bg-gray-20">
        <div className="blur" style={{top: '-18%', right: '0'}}></div>
        <div className="blur" style={{top: '36%', left: '-8rem'}}></div>
        {/* <Home/> */}
        <Profile/>
        {/* <Auth/> */}
    </div>
  );
}

export default App;
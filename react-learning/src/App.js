import Navbar from './components/Navbar';

function App() {
  return (
    <>
    {/* i have created one module with Navbar and adding props inside */}
    <Navbar title="TextUtils" />
    {/* if no props are set then default will be loded */}
    {/* <Navbar /> */}
   </>
  );
}

export default App;

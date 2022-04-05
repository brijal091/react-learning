import Navbar from './components/Navbar';
import Form from './components/Form';

function App() {
  return (
    <>
    {/* i have created one module with Navbar and adding props inside */}
    <Navbar title="TextUtils" />
    {/* if no props are set then default will be loded */}
    {/* <Navbar /> */}
    <div className="container">
      <Form heading="Enter the Text to Analyze"/>
    </div>
   </>
  );
}

export default App;

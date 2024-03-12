import BrowserEvent from "./Components/BrowserEvent";
import DocumentTitle from "./Components/DocumentTitle";
import FetchProducts from "./Components/FetchProducts";


function App() {
  return (
    <div className="App">
      <FetchProducts/>
      <br/><br/>
      <hr/>
      <BrowserEvent/>
      <br/><br/>
      <hr/>
      <DocumentTitle title={"This is a title"}/>
    </div>
  );
}

export default App;

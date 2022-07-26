import logo from './logo.svg';
import './App.css';
import ResizePanel from "react-resize-panel";

import DataList from './list/components/DataList';

function App() {
  return (
    <>
      <ResizePanel direction="e">
        <DataList/>
      </ResizePanel> 
      <ResizePanel direction="e">
        <Window/>
      </ResizePanel> 
    </>
  );
}

export default App;

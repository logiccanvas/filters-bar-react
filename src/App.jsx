import HorizontalFilterBar from "./components/HorizontalFilterBar";
import SelectBox from "./components/SelectBox";
import Input from "./components/Input";

import "./styles.scss";

function App() {
  const onClearAll = () => console.log("onClearAll called");

  return (
    <div className="container">
      <h1>Filters Bar with Dropdown</h1>
      <HorizontalFilterBar className="mb-4" onClearAll={onClearAll}>
        <SelectBox className="form-control" />
        <SelectBox className="form-control" />
        <Input
          name="test-input-filter"
          className="form-control"
          placeholder="Enter keyword"
        />
        <SelectBox className="form-control" />
        <SelectBox className="form-control" />
        <SelectBox className="form-control" />
        <SelectBox className="form-control" />
        <SelectBox className="form-control" />
        <SelectBox className="form-control" />
      </HorizontalFilterBar>

      <p>
        Resize window to see, filters get into horizontal bar or in the dropdown
        depending on window size
      </p>
      <p><strong>Note:</strong> minimal style is applied, so that developers can adopt any style</p>
    </div>
  );
}

export default App;

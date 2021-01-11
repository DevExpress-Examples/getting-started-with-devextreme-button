import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';

import { Button } from 'devextreme-react/button';
import notify from 'devextreme/ui/notify';

function showMessage() {
  notify("The button was clicked");
}

function App() {
  return (
    <div className="App">
      <Button
        text="Click me!"
        onClick={showMessage}
        stylingMode="outlined"
        type="success"
        icon="comment"
      />
    </div>
  );
}

export default App;

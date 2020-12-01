import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';

import { Button } from 'devextreme-react/button';
import notify from 'devextreme/ui/notify';

function onClick() {
  notify("The button was clicked");
}

function App() {
  return (
    <div className="App">
      <div id="app-container">
        <Button
          text="Show the message"
          type="success"
          stylingMode="outlined"
          width={200}
          height={40}
          icon="comment"
          hint="Click to show the message"
          onClick={onClick}
        />
      </div>
    </div>
  );
}

export default App;

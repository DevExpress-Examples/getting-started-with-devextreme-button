import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import './App.css';

import { Button } from 'devextreme-react/button';
import type { ButtonTypes } from 'devextreme-react/button';
import notify from 'devextreme/ui/notify';

function showMessage(e: ButtonTypes.ClickEvent): void {
  notify(`The button ${e.component.option('text')} was clicked`);
}

function App(): JSX.Element {
  return (
    <div className="app">
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

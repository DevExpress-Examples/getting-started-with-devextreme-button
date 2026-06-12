import { Component, ChangeDetectionStrategy } from '@angular/core';
import notify from 'devextreme/ui/notify';
import { DxButtonTypes } from 'devextreme-angular/ui/button';

import { DxButtonModule } from 'devextreme-angular';

@Component({
    selector: 'app-root',
    imports: [DxButtonModule],
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showMessage = (e: DxButtonTypes.ClickEvent): void => {
    notify(`The button ${e.component.option('text')} was clicked`);
  };
}

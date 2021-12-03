import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedFeature: string = 'gifts';

  title = 'WDD430FinalProject';

  switchView(selectedFeature: string){
    this.selectedFeature = selectedFeature;
  }
}

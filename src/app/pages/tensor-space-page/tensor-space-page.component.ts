import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-tensor-space-page',
  templateUrl: './tensor-space-page.component.html',
  styleUrls: ['./tensor-space-page.component.scss'],
})
export class TensorSpacePageComponent {
  // ngAfterViewInit() {
  //   const container = document.getElementById('container');
  //   const model = new TSP.models.Sequential(container);
  //   model.add(new TSP.layers.GreyscaleInput());
  //   model.add(new TSP.layers.Padding2d());
  //   model.add(new TSP.layers.Conv2d());
  //   model.add(new TSP.layers.Pooling2d());
  //   model.add(new TSP.layers.Conv2d());
  //   model.add(new TSP.layers.Pooling2d());
  //   model.add(new TSP.layers.Dense());
  //   model.add(new TSP.layers.Dense());
  //   model.add(
  //     new TSP.layers.Output1d({
  //       outputs: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  //     })
  //   );
  //   // Load model
  //   model.load({
  //     type: 'tfjs',
  //     url: './assets/model/mnist.json',
  //     onComplete: function () {
  //       console.log('"Hello Angular!" from TensorSpace Loader.');
  //     },
  //   });
  //   // Load data
  //   model.init(function () {
  //     fetch('./assets/data/5.json')
  //       .then((res) => res.json())
  //       .then((data) => {
  //         model.predict(data);
  //       });
  //   });
  // }
}

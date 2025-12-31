import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-signale-lea',
  imports: [],
  templateUrl: './signale-lea.html',
  styleUrls: ['./signale-lea.scss']
})
export class SignaleLea {

  hello : string='Hello World';
  Hello1 = signal('kaushik jagani');

  cityLight = signal<string[]>(["surat","ahemdabad","vadodara"]);
  changHelloVal(){
    this.Hello1.set("new value");
  }

  updateCityLight(val:string){
    this.cityLight.update(function(old:string[]){
      return [...old,val];
    });

    // way2:
    //   this.cityLight.update(old => {
    //     return [...old, val];
    //   });
  }
}

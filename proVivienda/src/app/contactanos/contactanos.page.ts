import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.page.html',
  styleUrls: ['./contactanos.page.scss'],
})
export class ContactanosPage implements OnInit {
  slideOpts = {
    loop: false,
    effect: 'slide',
    // loopFillGroupWithBlank: true,
    autoplay: {
      delay: 1000,
      // stopOnLastSlide:false
    },
    speed:2000
  };

  constructor(private callNumber: CallNumber) { }

  ngOnInit() {
  }

  openCallNumber(data){
    // this.addaccion('llamada');
    this.callNumber.callNumber(data, true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
  }
}

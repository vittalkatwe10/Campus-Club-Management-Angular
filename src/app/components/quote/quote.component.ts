import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-quote',
  templateUrl: 'quote.component.html',
  styleUrls: ['quote.component.css'],
})
export class Quote {
  @Input()
  Quote: string =
    '“I love lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaation ullamco 100%."'
  @Input()
  rootClassName: string = ''
  @Input()
  Title: string = 'Manager @Vista Social'
  @Input()
  Author: string = 'Andy Smith'
  @Input()
  Avatar: string = '/assets/pastedimage-8jmb-200w.png'
  constructor() {}
}

import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-faq',
  templateUrl: 'faq.component.html',
  styleUrls: ['faq.component.css'],
})
export class FAQ {
  @Input()
  Title2: string = 'What is sit amet, consectetur adipiscing elit, sed do? '
  @Input()
  Title4: string = 'What is sit amet, consectetur adipiscing elit, sed do? '
  @Input()
  Title3: string = 'What is sit amet, consectetur adipiscing elit, sed do? '
  @Input()
  Description1: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
  @Input()
  Description2: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
  @Input()
  Title: string = 'What is sit amet, consectetur adipiscing elit, sed do? '
  @Input()
  Title5: string = 'What is sit amet, consectetur adipiscing elit, sed do? '
  @Input()
  Description: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. '
  @Input()
  Title1: string = 'What is sit amet, consectetur adipiscing elit, sed do? '
  @Input()
  heading: string = 'Frequently Asked Questions'
  @Input()
  Description3: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
  rawif60: string = ' '
  rawcm7o: string = ' '
  rawvami: string = ' '
  rawgikd: string = ' '
  constructor() {}
}

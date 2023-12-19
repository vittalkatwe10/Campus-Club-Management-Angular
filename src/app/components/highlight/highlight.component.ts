import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-highlight',
  templateUrl: 'highlight.component.html',
  styleUrls: ['highlight.component.css'],
})
export class Highlight {
  @Input()
  Description: string =
    'Sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam, quis nostrud'
  @Input()
  Title: string = 'Everything you get with Finbest'
  constructor() {}
}

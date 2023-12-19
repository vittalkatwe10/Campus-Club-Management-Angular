import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-social',
  templateUrl: 'social.component.html',
  styleUrls: ['social.component.css'],
})
export class Social {
  @Input()
  Insider_alt: string = 'pastedImage'
  @Input()
  Insider_src: string = '/assets/pastedimage-9nha.svg'
  @Input()
  rootClassName: string = ''
  constructor() {}
}

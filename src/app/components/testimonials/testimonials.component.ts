import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-testimonials',
  templateUrl: 'testimonials.component.html',
  styleUrls: ['testimonials.component.css'],
})
export class Testimonials {
  @Input()
  Logo_src: string = '/assets/pastedimage-idcu.svg'
  @Input()
  Logo_alt: string = 'pastedImage'
  constructor() {}
}

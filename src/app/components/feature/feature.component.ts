import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-feature',
  templateUrl: 'feature.component.html',
  styleUrls: ['feature.component.css'],
})
export class Feature {
  @Input()
  Title: string = 'Account'
  @Input()
  Thumbnail_alt: string = 'image'
  @Input()
  Thumbnail: string = '/assets/vector.svg'
  @Input()
  rootClassName: string = ''
  @Input()
  Description: string =
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa'
  constructor() {}
}

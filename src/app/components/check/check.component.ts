import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-check',
  templateUrl: 'check.component.html',
  styleUrls: ['check.component.css'],
})
export class Check {
  @Input()
  rootClassName: string = ''
  @Input()
  Feature: string = 'Sed ut perspiciatis unde'
  constructor() {}
}

import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-announcement',
  templateUrl: 'announcement.component.html',
  styleUrls: ['announcement.component.css'],
})
export class Announcement {
  @Input()
  Title: string = 'We updated our Terms and Conditions.\n'
  @Input()
  rootClassName: string = ''
  @Input()
  Button: string = 'See now ->'
  constructor() {}
}

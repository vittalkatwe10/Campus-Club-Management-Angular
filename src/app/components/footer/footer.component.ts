import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.css'],
})
export class Footer {
  @Input()
  Link9: string = 'Careers'
  @Input()
  Link1: string = 'Responsive Prototypes'
  @Input()
  Link: string = 'Responsive Web Design'
  @Input()
  Link8: string = 'Partners'
  @Input()
  Link3: string = 'Static Website Builder'
  @Input()
  Link10: string = 'Press & Media'
  @Input()
  text1: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  @Input()
  Header1: string = 'Company'
  @Input()
  pastedImage_src: string = '/assets/pastedimage-qqc.svg'
  @Input()
  pastedImage_alt: string = 'pastedImage'
  @Input()
  Link7: string = 'News'
  @Input()
  Link2: string = 'Design to Code'
  @Input()
  Link5: string = 'About'
  @Input()
  text: string = '© 2022 finbest. All Rights Reserved.'
  @Input()
  Header: string = 'Solutions'
  @Input()
  Link6: string = 'Team'
  @Input()
  Link4: string = 'Static Website Generator'
  constructor() {}
}

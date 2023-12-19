import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
})
export class Navbar {
  @Input()
  Link_3: string = 'Prices'
  @Input()
  text1: string = 'Features'
  @Input()
  text12: string = 'Prices'
  @Input()
  Link_4: string = 'Testimonials'
  @Input()
  Branding_src: string =
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/4a46e3f6-a2fb-4002-a0ce-bb246bd8698d/afed3d97-066a-440a-a27e-491fdc7ac2b5?org_if_sml=15413'
  @Input()
  Link_1: string = 'Clubs'
  @Input()
  text131: string = 'Log in'
  @Input()
  rootClassName: string = ''
  @Input()
  image_alt: string = 'image'
  @Input()
  pastedImage_src: string =
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/4a46e3f6-a2fb-4002-a0ce-bb246bd8698d/191f70d5-9a02-4b3a-a398-d21659aa57d0?org_if_sml=1195'
  @Input()
  text1311: string = 'Sign up'
  @Input()
  text13: string = 'Contact'
  @Input()
  Link_2: string = 'FAQs'
  @Input()
  pastedImage_alt: string = 'pastedImage'
  @Input()
  image_src: string = '/assets/pastedimage-cx4wqj.svg'
  @Input()
  Branding_alt: string = 'pastedImage'
  @Input()
  text: string = 'CAMPUS CLUB MANAGEMENT'
  @Input()
  Link: string = 'FAQs'
  @Input()
  text11: string = 'How it works'
  constructor() {}
}

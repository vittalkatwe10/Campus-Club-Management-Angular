import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { Feature } from './feature/feature.component'
import { Check } from './check/check.component'
import { Accordion } from './accordion/accordion.component'
import { Quote } from './quote/quote.component'
import { FAQ } from './faq/faq.component'
import { Point } from './point/point.component'
import { Footer } from './footer/footer.component'
import { Highlight } from './highlight/highlight.component'
import { Clubs } from './clubs/clubs.component'
import { Announcement } from './announcement/announcement.component'
import { FAQ1 } from './faq1/faq1.component'
import { Testimonials } from './testimonials/testimonials.component'
import { Navbar } from './navbar/navbar.component'
import { Social } from './social/social.component'

@NgModule({
  declarations: [
    Feature,
    Check,
    Accordion,
    Quote,
    FAQ,
    Point,
    Footer,
    Highlight,
    Clubs,
    Announcement,
    FAQ1,
    Testimonials,
    Navbar,
    Social,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    Feature,
    Check,
    Accordion,
    Quote,
    FAQ,
    Point,
    Footer,
    Highlight,
    Clubs,
    Announcement,
    FAQ1,
    Testimonials,
    Navbar,
    Social,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}

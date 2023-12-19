import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class Home {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Campus Club Management')
    this.meta.addTags([
      {
        name: 'description',
        content: 'Description of the website',
      },
      {
        property: 'og:title',
        content: 'Campus Club Management',
      },
      {
        property: 'og:description',
        content: 'Description of the website',
      },
    ])
  }
}

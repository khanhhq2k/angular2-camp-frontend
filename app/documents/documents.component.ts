import {Component} from '@angular/core';
import {Document} from './document';
@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: './documents.component.html'
})

export class DocumentsComponent {
  pageTitle: string = "Document Dashboard"
  documents: Document[] = [
    {
      title: "My first Doc",
      description: "sample",
      file_url: "www.google.com",
      updated_at: "17/01/2017",
      image_url: "http://myfreelanceacademy.com/wp-content/uploads/2013/11/Freelance-home.jpg"
    },
    {
      title: "My Second Doc",
      description: "sample",
      file_url: "www.google.com",
      updated_at: "18/01/2017",
      image_url: "https://www.justfrom5k.com/new/assets/img/Blogs/find-freelance-work.jpg"
    },
    {
      title: "My Last Doc",
      description: "sample",
      file_url: "www.google.com",
      updated_at: "19/01/2017",
      image_url: "https://cdn.elegantthemes.com/blog/wp-content/uploads/2016/01/How-to-increase-freelancer-rates.jpg"
    }

  ]
}
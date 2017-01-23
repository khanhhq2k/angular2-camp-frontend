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
      image_url: "www.imgur.com/abc"
    },
    {
      title: "My Second Doc",
      description: "sample",
      file_url: "www.google.com",
      updated_at: "18/01/2017",
      image_url: "www.imgur.com/a"
    },
    {
      title: "My Last Doc",
      description: "sample",
      file_url: "www.google.com",
      updated_at: "19/01/2017",
      image_url: "www.imgur.com/c"
    }

  ]
}
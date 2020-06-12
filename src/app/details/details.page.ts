import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  data = null

  constructor(private route: ActivatedRoute, private store: StorageService) {
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id')
    this.data = this.store.store[Number.parseInt(id)]
  }

}

import {Component, OnInit} from '@angular/core';
import {PartsService} from '../../services/parts.service';
import {Part} from '../../models/part.model';

@Component({
  selector: 'app-part-list',
  templateUrl: './part-list.component.html',
  styleUrls: ['./part-list.component.scss'],
  providers: [PartsService]
})
export class PartListComponent implements OnInit {
  parts: Part[];

  constructor(private partsService: PartsService) {
  }

  ngOnInit() {
    this.partsService.getParts().subscribe(partsFromAPI => this.parts = partsFromAPI);
  }


}


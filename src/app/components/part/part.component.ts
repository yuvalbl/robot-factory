import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Part} from '../../models/part.model';
import {PartsService} from '../../services/parts.service';

@Component({
  selector: 'app-part-detail',
  templateUrl: './part.component.html',
  styleUrls: ['./part.component.scss'],
  providers: [PartsService]
})
export class PartComponent implements OnInit {
  @Input() part: Part;

  constructor(private robotsService: PartsService, private route: ActivatedRoute, private location: Location) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.robotsService.getPart(id)
      .subscribe(part => this.part = part);
    this.getCurrectUrl();
  }
  getCurrectUrl() {
    return this.route.url;
  }
  goBack() {
    this.location.back();
  }

}

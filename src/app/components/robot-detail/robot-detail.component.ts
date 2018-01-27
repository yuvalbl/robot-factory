import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Robot} from '../../models/robot.model';
import {RobotService} from '../../services/robot.service';

@Component({
  selector: 'app-robot-detail',
  templateUrl: './robot-detail.component.html',
  styleUrls: ['./robot-detail.component.scss'],
  providers: [RobotService]
})
export class RobotDetailComponent implements OnInit {
  @Input() robot: Robot;

  constructor(private robotsService: RobotService, private route: ActivatedRoute, private location: Location) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.robotsService.getRobot(id)
      .subscribe(robot => this.robot = robot);
    this.getCurrectUrl();
  }
  getCurrectUrl() {
    return this.route.url;
  }
  goBack() {
    this.location.back();
  }

}

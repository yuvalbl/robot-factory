import {Component, OnInit} from '@angular/core';
import {Robot} from '../../models/robot.model';
import {RobotService} from '../../services/robot.service';

@Component({
  selector: 'app-robot-list',
  templateUrl: './robot-list.component.html',
  styleUrls: ['./robot-list.component.scss'],
  providers: [RobotService]
})
export class RobotListComponent implements OnInit {
  robots: Robot[];

  constructor(private robotsService: RobotService) {
  }

  ngOnInit() {
    this.robotsService.getRobots().subscribe(robotsFromAPI => this.robots = robotsFromAPI);
  }


}

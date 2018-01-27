import {Injectable} from '@angular/core';
import {of} from 'rxjs/observable/of';
import {ROBOTS} from '../mocks/robots.mocks';
import {Observable} from 'rxjs/Observable';
import {Robot} from '../models/robot.model';

@Injectable()
export class RobotService {

  constructor() {
  }

  getRobots() {
    return of(ROBOTS);
  }
  getRobot(id: number): Observable<Robot> {
    return of(ROBOTS.find(robot => robot.id === id));
  }
}

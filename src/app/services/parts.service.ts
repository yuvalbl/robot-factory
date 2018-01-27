import {Injectable} from '@angular/core';
import {of} from 'rxjs/observable/of';
import {Observable} from 'rxjs/Observable';
import {Robot} from '../models/robot.model';
import {ROBOTS} from '../mocks/robots.mocks';
import {PARTS} from '../mocks/parts.mocks';
import {Part} from '../models/part.model';

@Injectable()
export class PartsService {

  constructor() {
  }

  getParts() {
    return of(PARTS);
  }
  getPart(id: number): Observable<Part> {
    return of(PARTS.find(part => part.id === id));
  }
}

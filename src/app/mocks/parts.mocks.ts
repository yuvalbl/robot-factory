import {Robot} from '../models/robot.model';
import {Part} from '../models/part.model';


export const PARTS: Part[] = [
  {
    cpu: 'i5',
    engine: 'GPU',
    id: 1,
    name: 'Lidar',
    type: 'Sensors'
  },
  {
    cpu: 'Core 2 Duo',
    engine: 'GPU',
    id: 2,
    name: 'Cytron 13A',
    type: 'Cameras'
  },
  {
    cpu: 'Core M',
    engine: 'Volta',
    id: 3,
    name: 'LIDAR-Lite 3',
    type: 'Control Systems'
  },
  {
    cpu: 'Merom-L',
    engine: 'Quadro',
    id: 4,
    name: 'Lidar',
    type: 'hydraulics'
  },
  {
    cpu: 'Penryn',
    engine: '\tTesla',
    id: 4,
    name: 'Lynxmotion',
    type: 'Pneumatics'
  }
];

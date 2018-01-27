import {Robot} from '../models/robot.model';


export const ROBOTS: Robot[] = [
  {
    id: 1,
    age: 15,
    name: 'Dave',
    parts: [{
      part: {
        cpu: 'Merom-L',
        engine: 'Quadro',
        id: 4,
        name: 'Lidar',
        type: 'hydraulics'
      },
      condition: 35
    }],
    type: 'droid'
  },
  {
    id: 2,
    age: 16,
    name: 'Dave2',
    parts: [{
      part: {
        cpu: 'Penryn',
        engine: '\tTesla',
        id: 4,
        name: 'Lynxmotion',
        type: 'Pneumatics'
      },
      condition: 90
    }, {
      part: {
        cpu: 'i5',
        engine: 'GPU',
        id: 3,
        name: 'Lidar',
        type: 'Sensors'
      },
      condition: 90
    }
    ],
    type: 'droid'
  },
  {
    id: 3,
    age: 17,
    name: 'Dave3',
    parts: [{
      part: {
        cpu: 'Merom-L',
        engine: 'Quadro',
        id: 4,
        name: 'Lidar',
        type: 'hydraulics'
      },
      condition: 23
    }
    ],
    type: 'droid'
  },
  {
    id: 4,
    age: 18,
    name: 'Dave4',
    parts: [
      {
        part: {
          cpu: 'i5',
          engine: 'GPU',
          id: 1,
          name: 'Lidar',
          type: 'Sensors'
        },
        condition: 99
      },
      {
        part: {
          cpu: 'Core 2 Duo',
          engine: 'GPU',
          id: 2,
          name: 'Cytron 13A',
          type: 'Cameras'
        },
        condition: 76
      },
      {
        part: {
          cpu: 'Core M',
          engine: 'Volta',
          id: 3,
          name: 'LIDAR-Lite 3',
          type: 'Control Systems'
        },
        condition: 87
      }],
    type: 'droid'
  }
];


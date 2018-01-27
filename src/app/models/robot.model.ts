import {Part} from './part.model';

export class Robot {
  id: number;
  name: string;
  type: string;
  age: number;
  parts: Array<InUsePart>;
}

class InUsePart {
  part: Part;
  condition: number;  // 0-100
}

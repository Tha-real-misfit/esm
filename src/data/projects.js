import { v4 as uuidv4 } from 'uuid';
import img1 from '../assets/images/butterfly.jpg';
import img2 from '../assets/images/flower4.jpg';
import img3 from '../assets/images/butterfly3.jpg';
import img4 from '../assets/images/flower1.jpg';
import img5 from '../assets/images/waterfall.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Relaxing on a leaf',
    desc: 'Contrast, Mackay Qld - Canon 100mm lens',
    img: img1,
  },
  {
    id: uuidv4(),
    name: 'Pretty in pink',
    desc: 'Color pop, Mackay Qld - Canon 100mm lens',
    img: img2,
  },
  {
    id: uuidv4(),
    name: 'This smells nice',
    desc: 'Focal points, Mackay Qld - Canon 100mm lens',
    img: img3,
  },
  {
    id: uuidv4(),
    name: 'Look at me',
    desc: 'Highlighting colors, Mackay Qld - Canon 100mm lens',
    img: img4,
  },
  {
    id: uuidv4(),
    name: 'Water water water',
    desc: 'Freezing waterfalls, Mackay Qld - Canon 18 - 55mm lens',
    img: img5,
  },
];

export default projects;

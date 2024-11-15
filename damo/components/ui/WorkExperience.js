// components/VerticalTimelineComponent.js

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@mui/icons-material/Work'; // Ensure you have Material UI installed
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';
import Particles from './particles';

const VerticalTimelineComponent = () => {
  return (
    <VerticalTimeline>
       <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#1e1e1e', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid #1e1e1e' }}
        date="2011 - present"
        iconStyle={{ background: '#1e1e1e', color: '#fff' }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Java Developer</h3>
        <h4 className="vertical-timeline-element-subtitle">Henotic,Remote</h4>
        <p>JavaFx, User Experience, Visual Design, Java Swing, Frontend development</p>
      </VerticalTimelineElement>

     
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2002 - 2006"
        iconStyle={{ background: '#ff4081', color: '#fff' }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
        <h4 className="vertical-timeline-element-subtitle">Black Bucks</h4>
        <p>React.js,Redux Framework,Git Version Control,Postman,Rest API, Visual Design</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        iconStyle={{ background: '#16c172', color: '#fff' }}
        icon={<StarIcon />}
      />
    </VerticalTimeline>
  );
};

export default VerticalTimelineComponent;
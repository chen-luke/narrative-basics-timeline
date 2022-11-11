import logo from './logo.svg';
import './App.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import globe from './globe.jpg';
import { FcGlobe } from "react-icons/fc";
import { BsFillPlayFill } from "react-icons/bs";

function App() {

  return (
  <VerticalTimeline
    lineColor = {"lightblue"}>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="1971"
    icon={<img class= "img" src={globe} alt="Globe" />} 
  >
    <h3 className="vertical-timeline-element-title">Convention on International Wetlands</h3>
    <h4 className="vertical-timeline-element-subtitle">Listen to the story here <BsFillPlayFill color="white"/></h4>
    <p>
      This treaty was signed in the city of Ramsar in Iran, hence why it is known as the Ramsar Convention...
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="1987"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<img class= "img" src={globe} alt="Globe" />} 
  >
    <h3 className="vertical-timeline-element-title">Vienna Convention and Montreal Protocol on the Ozone Layer</h3>
    <h4 className="vertical-timeline-element-subtitle">Listen to the story here <BsFillPlayFill color="lightblue"/></h4>
    <p>
      This convention established a treaty to combat dangerous human interference with the climate system...
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="1989"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<img class= "img" src={globe} alt="Globe" />} 
  >
    <h3 className="vertical-timeline-element-title">Basal Convention on Transboundary Movements of Hazardous Wastes</h3>
    <h4 className="vertical-timeline-element-subtitle">Listen to the story here <BsFillPlayFill color="lightblue"/></h4>
    <p>
      This new treaty put in place covers the transportation of toxic, poisonous, explosive, corrosive, and flammable...
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="1992"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<img class= "img" src={globe} alt="Globe" />} 
  >
    <h3 className="vertical-timeline-element-title">UN Framework Convention on Climate Change</h3>
    <h4 className="vertical-timeline-element-subtitle">Listen to the story here <BsFillPlayFill color="lightblue"/></h4>
    <p>
      The UNFCCC focused most of their efforts on reducing the amount of greenhouse gas pollution in the atmosphere...
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="1992"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<img class= "img" src={globe} alt="Globe" />} 
  >
    <h3 className="vertical-timeline-element-title">Convention on Biological Diversity</h3>
    <h4 className="vertical-timeline-element-subtitle">Listen to the story here <BsFillPlayFill color="lightblue"/></h4>
    <p>
      This treaty has three main goals: sustainable use of its components, fair and equitable sharing of benefits...
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="1994"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<img class= "img" src={globe} alt="Globe" />} 
  >
    <h3 className="vertical-timeline-element-title">UN Convention to Combat Desertification</h3>
    <h4 className="vertical-timeline-element-subtitle">Listen to the story here <BsFillPlayFill color="lightblue"/></h4>
    <p>
      The UNCCD was put in place to control desertification, especially in Africa, and to ensure a safer, just future with...
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2001"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<img class= "img" src={globe} alt="Globe" />} 
  >
    <h3 className="vertical-timeline-element-title">Stockholm Convention on Persistent Organic Pollutants</h3>
    <h4 className="vertical-timeline-element-subtitle">Listen to the story here <BsFillPlayFill color="lightblue"/></h4>
    <p>
      This treaty was signed in Stockholm in an effort to protect human health and the environment from effects of...
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={<img class= "img" src={globe} alt="Globe" />} 
  />
</VerticalTimeline>
  );
}

export default App;

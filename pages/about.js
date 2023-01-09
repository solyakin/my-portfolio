import Boxed from '../components/Boxed';
import Skills from '../components/Skill';
import WhoAmI from '../components/WhoAmI';

export default function About() {
  return (
    <Boxed>
      <WhoAmI />
      <Skills />
    </Boxed>
  );
}

About.meta = {
  title: 'About'
};

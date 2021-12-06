
import { MintHome } from './components/home';
import { InformationMenber } from './components/information';
import { RevisedRoadMap } from './components/roadMapRevised';
import { StepsFlags } from './components/stepsFlags';
import './styles/global.scss'

function App() {
  return (
    <>
      <MintHome />
      <InformationMenber />
      <StepsFlags />
      <RevisedRoadMap />
    </>
  );
}

export default App;

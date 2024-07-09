import Scene from './components/Scene';
import { Model } from './components/Model';
export default function App() {
  return (
    <div className="relative h-screen">
      <Scene>
        <Model />
      </Scene>
    </div>
  );
}

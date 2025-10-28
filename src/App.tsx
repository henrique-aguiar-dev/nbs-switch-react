import { useState } from 'react'
import './App.css'
import CustomSwitch from './CustomSwitch/CustomSwich';
/* 
* Demonstration page for the switch
* The parent component holds all responsibility for managing states and executing functions.
*/
function App() {
  // Using 6 switches for demonstration: each one have a state
  const [switchValue0, setSwitchValue0] = useState(false);
  const [switchValue1, setSwitchValue1] = useState(false);
  const [switchValue2, setSwitchValue2] = useState(false);
  const [switchValue3, setSwitchValue3] = useState(true);
  const [switchValue4, setSwitchValue4] = useState(true);
  const [switchValue5, setSwitchValue5] = useState(false);

  // One handler for each;
  const handleSwitchOn0 = () => setSwitchValue0((prev) => !prev);
  const handleSwitchOn1 = () => setSwitchValue1((prev) => !prev);
  const handleSwitchOn2 = () => setSwitchValue2((prev) => !prev);
  const handleSwitchOn3 = () => setSwitchValue3((prev) => !prev);
  const handleSwitchOn4 = () => setSwitchValue4((prev) => !prev);
  const handleSwitchOn5 = () => setSwitchValue5((prev) => !prev);

  return (
    <div className='main'>
      <h1 className='text-title'>NBS Switch for React (web)</h1>
      <div className='card'>
        <p className='text-body'>NBS = No BullShit! That's it: a simple switch for react-js web</p>
        <div className='space-vert-32'></div>
        <div className="flex-row">
          {/* See configs in README.MD */}
          <CustomSwitch
            onSwitchCallback={handleSwitchOn0}
            size="tiny"
            label="Label here"
            labelPosition="left"
            statusTextOn="Active"
            statusTextOff="Inactive"
            defaultValue={switchValue0}
            disabled={false}
          />
        </div>
        <div className="flex-row">
          <CustomSwitch
            onSwitchCallback={handleSwitchOn1}
            label="Label here"
            labelPosition="left"
            statusTextOn="Active"
            statusTextOff="Inactive"
            defaultValue={switchValue1}
            disabled={false}
          />
        </div>
        <div className="flex-row">
          <CustomSwitch
            onSwitchCallback={handleSwitchOn2}
            size="medium"
            label="Label here"
            labelPosition="left"
            statusTextOn="Active"
            statusTextOff="Inactive"
            defaultValue={switchValue2}
            disabled={false}
            textColor="#69ffebff"
            trackColors={{ on: "#949494ff", off: "#5a5a5aff" }}
            thumbColors={{ on: "#69ffebff", off: "#558881ff" }}
          />
        </div>
        <div className="flex-row">
          <CustomSwitch
            onSwitchCallback={handleSwitchOn3}
            size="large"
            label="Label here"
            labelPosition="left"
            statusTextOn="Active"
            statusTextOff="Inactive"
            defaultValue={switchValue3}
            disabled={false}
            textColor="#7476eeff"
            trackColors={{ on: "#ffffffff", off: "#ffffffff" }}
            thumbColors={{ on: "#3336e9ff", off: "#999ac2ff" }}
          />
        </div>
        <div className="flex-row">
          <CustomSwitch
            onSwitchCallback={handleSwitchOn4}
            size="huge"
            label="Label here"
            labelPosition="left"
            statusTextOn="Active"
            statusTextOff="Inactive"
            defaultValue={switchValue4}
            disabled={false}
            trackColors={{ on: "rgba(255, 71, 184, 0.3)", off: "#7c7c7cff" }}
            thumbColors={{
              on: "rgba(255, 71, 184, 1)", off: "#ffffffff"
            }}
          />
        </div>
        <div className="flex-row">
          <CustomSwitch
            onSwitchCallback={handleSwitchOn5}
            label="Label here"
            labelPosition="left"
            statusTextOn="Active"
            statusTextOff="disabled = true"
            defaultValue={switchValue5}
            disabled={true}
          />
        </div>
      </div>
      <footer>
        <p className="text-label">Henrique Aguiar - Web & mobile Development - 2025</p>
        <a
          href="https://github.com/henrique-aguiar-dev/nbs-switch-react"
          target="_blank"
          className="text-label"
        >
          Repository;
        </a>
        <a
          href="https://github.com/henrique-aguiar-dev"
          target="_blank"
          className="text-label"
        >
          Github;
        </a>
      </footer>
    </div>
  )
}

export default App;

## NBS Switch for React (web)

![](/public/nbs-switch.png)

Demo:

https://henrique-aguiar-dev.github.io/nbs-switch-react/

Why?
I wanted a simple mobile-like switch for a React project.
Tried a huge library, thousands of lines of code, many contributors and complications, 30 closed issues plus 16 open ones, lots of dependencies, etc., etc., etc.

All this just for a switch? I want just that, no bullshit!
So, I decided to make one for myself, and that's how the NBS (No BullShit) Switch for React was born.

- No installation;
- No dependencies;
- No animation libraries;
- Just React, CSS, and Javascript (with TS);

It's here for anyone who wants it too.
No installations, just the old-school copy-and-paste and customize it.
All that matters is in src/CustomSwitch.

Grab it and go!

## How to use:

Parent component (anyone who imports and handle the Switch, states and functions)
Example:

```
import { useState } from 'react'
import './App.css'
import CustomSwitch from './CustomSwitch/CustomSwich';

function App() {
  const [switchValue, setSwitchValue] = useState(false);

  const handleSwitchOn = () => setSwitchValue((prev) => !prev);

  return (
    <div className='main'>
      <div className="flex-row">
        <CustomSwitch
          onSwitchCallback={handleSwitchOn}
          size="small"
          label="Label here"
          labelPosition="left"
          statusTextOn="Active"
          statusTextOff="Inactive"
          defaultValue={switchValue}
          disabled={false}
        />
      </div>
    </div>
  )
}

export default App;
```

## Old-school customization

Component: open ./CustomSwitch/CustomSwitch.tsx and do the changes;
Style: Open ./CustomSwitch/CustomSwitch.css and do the old scholl customization;

OR

Use the props

## CustomSwitch Properties

defaultValue: true | false; Mandatory. Default: false;

onSwitchCallback: function; Mandatory. Callback function for when switch is on. Use the parent to handle states;

size: "tiny" | "small" | "medium" | "large" | "huge"; Optional. Default: "small";

label: text / string; Optional. Label to appear on top or left of the Switch;

labelPosition: "top" | "left"; Default: "left"; (Do I really need to explain this?);

statusTextOn: text / string; Optional. Custom string to show when status is ON ("ON", "Active", etc);

statusTextOff: text / string; Optional. Custom string to show when status is OFF ("OFF", "Inactive", etc);

trackColors: Object: on/off: color string (hex, rgb etc); Optional. Colors for the track. Default: { on: "#c8c8c8ff", off: "#262626ff" };

thumbColors: Object: on/off: color string (hex, rgb etc); Optional. Colors for the thumb. Default: { on: "rgb(38, 38, 38)", off: "#6d6d6dff" };

textColor: color string (hex, rgb etc); Optional: Text color for the label and actual status. Default: "#e1e1e1ff";

disabled: true | false; Optional. If you want to keep it disabled until some condition is met. Default: false;

## Advanced

Colors set through props use inline style. if you need to comply with strict CSP rules (Content Security Policy: No inline styles or scripts), you can replace the inline style and js code in CustomSwitch.tsx and uncomment the hard-coded background colors in the CustomSwitch.css file:

import "./CustomSwitch.css";

const swicthSizes = Object.freeze({
  tiny: "tiny",
  small: "small",
  medium: "medium",
  large: "large",
  huge: "huge",
} as const);

type SwitchSize = keyof typeof swicthSizes;

interface CustomSwitchProps {
  // Mandatory: the parent component set the default value. Default: false;
  defaultValue: boolean;
  // Mandatory: Callback function for when switch is on. Use the parent to handle states;
  onSwitchCallback: () => void;
  // Optional: size = number (in px). This define the width. All others values are calculated from it; Default: 40px
  size?: SwitchSize;
  // Optional: Label to appear on top or left of the Switch;
  label?: string;
  labelPosition?: "top" | "left"; // Default: "left"
  // Optional: Custom string when status is ON;
  statusTextOn?: string;
  // Optional: Custom string when status is OFF;
  statusTextOff?: string;
  // Optional: Color for the track. Default: { on: "#c8c8c8ff", off: "#262626ff" }
  trackColors?: { on: string; off: string };
  // Optional: Color for the thumb. Default: { on: "rgb(38, 38, 38)", off: "#6d6d6dff" }
  thumbColors?: { on: string; off: string };
  // Optional: Text color for the label and actual status. Default: "#e1e1e1ff"
  textColor?: string;
  disabled?: boolean; // Optional. Default: false
}

const defaultTrackColors = Object.freeze({
  on: "#c8c8c8ff",
  off: "#262626ff",
} as const);

const defaultThumbColors = Object.freeze({
  on: "#262626ff",
  off: "#6d6d6dff",
} as const);

const CustomSwitch = ({
  defaultValue = false,
  onSwitchCallback,
  size = swicthSizes.small,
  label,
  labelPosition = "left",
  statusTextOn = "",
  statusTextOff = "",
  trackColors = defaultTrackColors,
  thumbColors = defaultThumbColors,
  textColor = "#e1e1e1ff",
  disabled = false,
}: CustomSwitchProps) => {
  const getTrackSizeClass = () => {
    switch (size) {
      case swicthSizes.tiny:
        return "tiny-track";
      case swicthSizes.medium:
        return "medium-track";
      case swicthSizes.large:
        return "large-track";
      case swicthSizes.huge:
        return "huge-track";
      default:
        return "small-track";
    }
  };

  const getThumbSizeClass = () => {
    switch (size) {
      case swicthSizes.tiny:
        return "tiny-thumb";
      case swicthSizes.medium:
        return "medium-thumb";
      case swicthSizes.large:
        return "large-thumb";
      case swicthSizes.huge:
        return "huge-thumb";
      default:
        return "small-thumb";
    }
  };

  const getThumbOnClass = () => {
    switch (size) {
      case swicthSizes.tiny:
        return "thumb-on-tiny";
      case swicthSizes.medium:
        return "thumb-on-medium";
      case swicthSizes.large:
        return "thumb-on-large";
      case swicthSizes.huge:
        return "thumb-on-huge";
      default:
        return "thumb-on-small";
    }
  };

  const handleClick = () => {
    if (disabled) return;

    onSwitchCallback();
  };

  return (
    <div className="flex-column">
      {label && labelPosition === "top" && (
        <p className="text-label" style={{ color: textColor }}>
          {label}
        </p>
      )}
      <div className="flex-row">
        {label && labelPosition === "left" && (
          <p className="text-label" style={{ color: textColor }}>
            {label}
          </p>
        )}
        <div
          className={`switch-track ${getTrackSizeClass()} ${defaultValue ? "track-on" : ""} ${disabled ? "disabled-track" : ""}`}
          style={!disabled ? { backgroundColor: defaultValue ? trackColors.on : trackColors.off } : undefined}
          onClick={handleClick}
        >
          <span
            className={`switch-thumb ${getThumbSizeClass()} ${defaultValue ? getThumbOnClass() : ""} ${disabled ? "disabled-thumb" : ""}`}
            style={!disabled ? { backgroundColor: defaultValue ? thumbColors.on : thumbColors.off } : undefined}
          />
        </div>
        <p className="text-label" style={{ color: textColor }}>
          {defaultValue ? statusTextOn : statusTextOff}
        </p>
      </div>
    </div>
  );
};

export default CustomSwitch;

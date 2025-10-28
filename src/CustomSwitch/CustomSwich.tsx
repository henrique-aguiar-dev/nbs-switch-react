"use client";
import { useEffect, useState } from "react";
import "./CustomSwitch.css";

interface CustomSwitchProps {
  // Mandatory: the parent component set the default value. Default: false;
  defaultValue: boolean;
  // Mandatory: Callback function for when switch is on. Use the parent to handle states;
  onSwitchCallback: () => void;
  // Optional: size = number (in px). This define the width. All others values are calculated from it; Default: 40px
  size?: "tiny" | "small" | "medium" | "large" | "huge";
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
  size = "small",
  label,
  labelPosition = "left",
  statusTextOn = "",
  statusTextOff = "",
  trackColors = defaultTrackColors,
  thumbColors = defaultThumbColors,
  textColor = "#e1e1e1ff",
  disabled = false,
}: CustomSwitchProps) => {
  const [trackSizeClass, setTrackSizeClass] = useState("");
  const [thumbSizeClass, setThumbSizeClass] = useState("");
  const [thumbOnClass, setThumbOnClass] = useState("");

  useEffect(() => {
    switch (size) {
      case "tiny":
        setTrackSizeClass("tiny-track");
        setThumbSizeClass("tiny-thumb");
        setThumbOnClass("thumb-on-tiny");
        break;
      case "medium":
        setTrackSizeClass("medium-track");
        setThumbSizeClass("medium-thumb");
        setThumbOnClass("thumb-on-medium");
        break;
      case "large":
        setTrackSizeClass("large-track");
        setThumbSizeClass("large-thumb");
        setThumbOnClass("thumb-on-large");
        break;
      case "huge":
        setTrackSizeClass("huge-track");
        setThumbSizeClass("huge-thumb");
        setThumbOnClass("thumb-on-huge");
        break;
      default:
        setTrackSizeClass("small-track");
        setThumbSizeClass("small-thumb");
        setThumbOnClass("thumb-on-small");
    }
  }, [size]);

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
          className={`switch-track ${trackSizeClass} ${defaultValue ? "track-on" : ""} ${disabled ? "disabled-track" : ""}`}
          style={!disabled ? { backgroundColor: defaultValue ? trackColors.on : trackColors.off } : undefined}
          onClick={handleClick}
        >
          <span
            className={`switch-thumb ${thumbSizeClass} ${defaultValue ? thumbOnClass : ""} ${disabled ? "disabled-thumb" : ""}`}
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

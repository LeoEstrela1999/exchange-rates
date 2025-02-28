import React from "react";
import { NumberInput } from "@heroui/react";

interface InputProps {
  value: number;
  onChange: (newValue: number) => void;
  defaultValue?: number;
}

const Input = ({ value, onChange, defaultValue }: InputProps) => {
  return (
    <NumberInput
      value={value}
      onValueChange={onChange}
      disableAnimation
      className="input"
      defaultValue={defaultValue}
      minValue={0}
      aria-label={'number input'}
    />
  );
};

export default Input;

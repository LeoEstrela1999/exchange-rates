import { NumberInput } from "@heroui/react";
import { ChangeEvent } from "react";

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
      className="flex w-60"
      defaultValue={defaultValue}
      minValue={0}
    />
  );
};

export default Input;

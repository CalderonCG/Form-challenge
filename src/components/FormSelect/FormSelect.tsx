
import { forwardRef, type SelectHTMLAttributes } from "react";
import './FormSelect.scss';
import clsx from "clsx";

type Option = { label: string; value: string };

type SelectProps = {
  label: string;
  options: Option[];
} & SelectHTMLAttributes<HTMLSelectElement>;

const FormSelect = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, options, ...props }, ref) => {
    return (
      <div className="input">
        <label className="input_label">{label}</label>
        <select
          className={clsx("input_field")}
          ref={ref}
          {...props}
        >
            <option value={''} >--Select priority--</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    );
  }
);

export default FormSelect;

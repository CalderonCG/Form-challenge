import { forwardRef, type SelectHTMLAttributes } from "react";
import "./FormSelect.scss";
import clsx from "clsx";

type Option = { label: string; value: string };

type SelectProps = {
  label: string;
  options: Option[];
  error?: string;
} & SelectHTMLAttributes<HTMLSelectElement>;

const FormSelect = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, options, error, ...props }, ref) => {
    return (
      <div className="input">
        <label className="input_label">{label}</label>
        <select className={clsx("input_field")} ref={ref} {...props}>
          <option value={""}>--Select priority--</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        {error && <p className="input_error">{error}</p>}
      </div>
    );
  }
);

export default FormSelect;

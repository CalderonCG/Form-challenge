import { forwardRef, type InputHTMLAttributes } from "react";
import './FormInput.scss'
import clsx from "clsx";

type InputProps = {
  label: string;
  placeholder: string;
  type: 'text'| 'number' | 'date'
  error?: string
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput = forwardRef<HTMLInputElement, InputProps>(
  ({ label, type,placeholder, error, ...props }, ref) => {
    return (
      <div className='input'>
        <label className="input_label">{label}</label>
        <input className={clsx('input_field')} ref={ref} {...props} 
        type={type} placeholder={placeholder} />
        
        {error && (<p className="input_error">{error}</p>)}
      </div>
    );
  }
);


export default FormInput;
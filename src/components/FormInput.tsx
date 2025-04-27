import React from 'react';
import { UseFormRegister, FieldValues, FieldErrors, RegisterOptions } from 'react-hook-form';

interface FormInputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  validationRules?: RegisterOptions;
  className?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  name,
  type = 'text',
  placeholder = '',
  register,
  errors,
  validationRules,
  className = '',
}) => {
  return (
    <div className={`form-group ${className}`}>
      <label htmlFor={name} className="block mb-1 font-medium text-gray-700">
        {label}
      </label>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        {...register(name, validationRules)}
        className={`input-field ${errors[name] ? 'border-red-500 focus:ring-red-500' : ''}`}
      />
      {errors[name] && (
        <p className="error-message">
          {errors[name]?.message?.toString()}
        </p>
      )}
    </div>
  );
};

export default FormInput;
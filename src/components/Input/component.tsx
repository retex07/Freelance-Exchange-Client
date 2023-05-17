import React from 'react';
import './styles.scss';

interface InputComponentProps {
  type: string;
  name: string;
  placeholder: string;
  label?: string;
  register?: any;
  error?: string;
  required?: boolean;
}

export default function InputComponent({
  type,
  required,
  name,
  placeholder,
  label,
  register,
  error,
}: InputComponentProps) {
  return (
    <div className="input-block">
      <label className="label" htmlFor={name}>
        {label}
      </label>
      {error ? (
        <>
          <input
            required={required}
            className="input-error"
            type={type}
            id={name}
            name={name}
            placeholder={placeholder}
            {...register}
          />
          <label className="label-error">{error}</label>
        </>
      ) : (
        <input
          className="input-normal"
          required={required}
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          {...register}
        />
      )}
    </div>
  );
}

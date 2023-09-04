import React, { HTMLInputTypeAttribute } from "react";
import { useFormContext } from "react-hook-form";

type Props = {
  name: string;
  label?: string;
  required?: boolean;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const InputField = ({ label, name, required = false, ...res }: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="flex-1">
      {label && (
        <label className="mb-1 block text-blue-900 text-md font-semibold leading-loose">
          {label}{" "}
          {!required && (
            <span className="text-slate-300 text-md">(Optional)</span>
          )}
        </label>
      )}
      <input
        className=" placeholder:text-slate-400 block bg-white w-full outline-none border border-slate-400 shadow-md rounded-md py-3 pl-9 pr-3 sm:text-sm "
        {...register(name, {
          ...(required && {
            required: true,
          }),
        })}
        {...res}
      />
      {errors[name] && (
        <span className="text-red-500 text-[12px]">
          {errors[name]?.message as string}
        </span>
      )}
    </div>
  );
};

export default InputField;

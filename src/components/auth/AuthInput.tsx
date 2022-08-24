type AuthInputProps = {
  label: string;
  value: any;
  type: "text" | "password" | "email";
  isMandatory?: boolean;
  shouldHidde?: boolean;
  handleChange: (newValue: any) => void;
};

const AuthInput = ({
  value,
  label,
  type,
  isMandatory,
  shouldHidde,
  handleChange,
}: AuthInputProps) => {
  return shouldHidde ? null : (
    <div className="flex flex-col mt-4">
      <label htmlFor="">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        required={isMandatory}
        className={`
          px-4 py-3 rounded-lg bg-gray-200 
          mt-1 border focus:border-blue-500 focus:bg-white
          focus:outline-none
        `}
      />
    </div>
  );
};

export default AuthInput;

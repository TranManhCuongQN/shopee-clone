import type { RegisterOptions, UseFormRegister } from 'react-hook-form'
interface Props {
  type: React.HTMLInputTypeAttribute
  errorMessage?: string
  placeholder?: string
  className?: string
  name: string
  register: UseFormRegister<any>
  rules?: RegisterOptions
  autoComplete?: string
}

const Input = ({ type, errorMessage, name, register, className, placeholder, rules, autoComplete }: Props) => {
  return (
    <div>
      <div className={className}>
        <input
          type={type}
          className='w-full rounded-sm border border-gray-300 p-3 outline-none focus:border-gray-500 focus:shadow-sm'
          placeholder={placeholder}
          autoComplete={autoComplete}
          {...register(name, rules)}
        />
        <div className='mt-1 min-h-[1rem] text-sm text-red-600'>{errorMessage}</div>
      </div>
    </div>
  )
}

export default Input
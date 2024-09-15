import { Checkbox } from '@headlessui/react'

interface CheckButtonProps {
  checked?: boolean
  onChange?: () => void
  label: string
}

const CheckButton = ({ checked, onChange, label }: CheckButtonProps) => {
  return (
    <Checkbox
      checked={checked}
      onChange={onChange}
      className="group flex w-24 cursor-pointer select-none justify-center rounded border bg-white p-4 data-[checked]:bg-blue-500"
    >
      <span className="stroke-white group-data-[checked]:text-white">{label}</span>
    </Checkbox>
  )
}

export default CheckButton

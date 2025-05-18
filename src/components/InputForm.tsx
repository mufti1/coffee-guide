import { useState } from 'react'

interface Props {
  onChange: (grams: number) => void
}


export default function InputForm({ onChange }: Props) {
  const [value, setValue] = useState('')

  return (
    <div className="mb-4">
      <label className="block mb-2 text-lg">Grams of Coffee Beans</label>
      <input
        type="number"
        className="p-2 border rounded w-full"
        value={value}
        onChange={(e) => {
          const val = Number(e.target.value)
          setValue(e.target.value)
          onChange(val)
        }}
      />
    </div>
  )
}

import { BrewMethod } from '../data/methods'

interface Props {
  methods: BrewMethod[]
  selected: string
  onSelect: (id: string) => void
}

export default function MethodSelector({ methods, selected, onSelect }: Props) {
  return (
    <div className="mb-4">
      <label className="block mb-2 text-lg">Select Brew Method</label>
      <select
        className="p-2 border rounded w-full"
        value={selected}
        onChange={(e) => onSelect(e.target.value)}
      >
        <option value="">-- Choose a method --</option>
        {methods.map((m) => (
          <option key={m.id} value={m.id}>
            {m.name}
          </option>
        ))}
      </select>
    </div>
  )
}

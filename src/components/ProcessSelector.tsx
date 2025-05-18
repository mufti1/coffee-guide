import { ProcesMethod } from '../data/methods'

interface Props {
  processes: ProcesMethod[]
  selected: string
  onSelect: (id: string) => void
}

export default function ProcessSelector({ processes, selected, onSelect }: Props) {
  return (
    <div className="mb-4">
      <label className="block mb-2 text-lg">Select Beans Process Method</label>
      <select
        className="p-2 border rounded w-full"
        value={selected}
        onChange={(e) => onSelect(e.target.value)}
      >
        <option value="">-- Choose a bean process --</option>
        {processes.map((p) => (
          <option key={p.id} value={p.id}>
            {p.name}
          </option>
        ))}
      </select>
    </div>
  )
}

import { BrewMethod, ProcesMethod } from '../data/methods'

interface Props {
  method: BrewMethod
  grams: number
  process: ProcesMethod
}

export default function GuideDisplay({ method, grams, process }: Props) {
  const steps = method.guide(grams)
  const totalWater = steps.reduce((sum, step) => sum + step.water, 0)

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">Brewing Guide</h2>
      <div className="mt-6 p-4 border-t">
        <p><strong>Total Hot Water:</strong> {totalWater.toFixed(1)}g</p>
        <p><strong>Ice:</strong> {method.ice(grams)}</p>
        <p>Recomended Temperature for: <strong>{process.name} </strong> {process.temperature}</p>
      </div>
      <ul className="space-y-3">
        {steps.map((step, idx) => (
          <li key={idx} className="p-3 border rounded">
            <strong>{step.time}</strong> – {step.water.toFixed(1)}g water
            <div className="text-gray-600">{step.detail}</div>
          </li>
        ))}
      </ul>
      <div className="mt-6 p-4 border-t">
        <p><strong>If too bitter:</strong> {method.tips.bitter}</p>
        <p><strong>If too acidic:</strong> {method.tips.acidic}</p>
      </div>
    </div>
  )
}

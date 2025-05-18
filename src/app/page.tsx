'use client'

import { useState } from 'react'
import { brewMethods, procesMethods } from '../data/methods'
import InputForm from '../components/InputForm'
import MethodSelector from '../components/MethodSelector'
import ProcessSelector from '@/components/ProcessSelector'
import GuideDisplay from '../components/GuideDisplay'

export default function Home() {
  const [grams, setGrams] = useState<number>(0)
  const [selectedId, setSelectedId] = useState<string>('')
  const [selectedProcessId, setSelectedProcessId] = useState<string>('')

  const selectedMethod = brewMethods.find((m) => m.id === selectedId)
  const selectedProcess = procesMethods.find((p) => p.id === selectedProcessId)

  return (
    <main className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Pour Over Coffee Guide</h1>
      <InputForm onChange={setGrams} />
      <MethodSelector
        methods={brewMethods}
        selected={selectedId}
        onSelect={setSelectedId}
      />
      <ProcessSelector
        processes={procesMethods}
        selected={selectedProcessId}
        onSelect={setSelectedProcessId}
      />

      {selectedMethod && selectedProcess && grams > 0 && (
        <GuideDisplay method={selectedMethod} grams={grams} process={selectedProcess} />
      )}
    </main>
  )
}

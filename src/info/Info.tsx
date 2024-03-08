import { ReactNode } from "react"

interface InfoProps {
    children: ReactNode
}

export default function Info({children}: InfoProps) {
  return (
    <div className="p-10 rounded-xl bg-white">
        {children}
    </div>
  )
}

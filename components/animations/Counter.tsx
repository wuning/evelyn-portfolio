"use client"

import { useCountUp } from "@/hooks/useCountUp"

interface CounterProps {
  value: number
  suffix?: string
  prefix?: string
  decimals?: number
  duration?: number
  className?: string
}

export function Counter({
  value,
  suffix = "",
  prefix = "",
  decimals = 0,
  duration = 1500,
  className = "",
}: CounterProps) {
  const { ref, displayValue } = useCountUp({
    end: value,
    suffix,
    prefix,
    decimals,
    duration,
  })

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  )
}

import { useEffect, useState } from 'react'

export function useCountUp(target: number, start: boolean, durationMs = 1600) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!start) return

    let raf: number
    const startTime = performance.now()

    function tick(now: number) {
      const progress = Math.min((now - startTime) / durationMs, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * target))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [start, target, durationMs])

  return value
}

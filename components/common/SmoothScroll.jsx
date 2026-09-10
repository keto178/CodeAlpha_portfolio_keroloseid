'use client'

import { useEffect } from 'react'

export default function SmoothScroll() {
    useEffect(() => {
        let current = window.scrollY
        let target = current
        let frame

        const updateScroll = () => {
            current += (target - current) * 0.12

            if (Math.abs(target - current) < 0.5) {
                current = target
                window.scrollTo(0, current)
                frame = undefined
                return
            }

            window.scrollTo(0, current)
            frame = requestAnimationFrame(updateScroll)
        }

        const onWheel = (event) => {
            if (event.ctrlKey) return

            event.preventDefault()
            if (!frame) {
                current = window.scrollY
                target = current
            }
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight
            target = Math.max(0, Math.min(target + event.deltaY, maxScroll))

            if (!frame) frame = requestAnimationFrame(updateScroll)
        }

        window.addEventListener('wheel', onWheel, { passive: false })

        return () => {
            window.removeEventListener('wheel', onWheel)
            if (frame) cancelAnimationFrame(frame)
        }
    }, [])

    return null
}

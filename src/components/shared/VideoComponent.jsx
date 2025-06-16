


import React, { useEffect, useRef } from 'react'
import FactoryVideo from '../../assets/factoryVideo.mp4'

const VideoComponent = () => {

    const videoRef = useRef(null)

    useEffect(() => {
        // Only run if IntersectionObserver is supported
        if (!("IntersectionObserver" in window)) return

        const video = videoRef.current
        if (!video) return

        const options = {
            root: null, // viewport
            rootMargin: "0px",
            threshold: 0.5, // 50% of the element is visible
        }

        const handleIntersect = (entries) => {
            entries.forEach((entry) => {
                // Play when in view, pause when out of view
                if (entry.isIntersecting) {
                    video.play().catch((err) => {
                        // Autoplay might be blocked, we'll just continue silently
                        console.log("Autoplay prevented:", err)
                    })
                } else {
                    video.pause()
                }
            })
        }

        const observer = new IntersectionObserver(handleIntersect, options)
        observer.observe(video)

        return () => {
            observer.unobserve(video)
            observer.disconnect()
        }
    }, [])


    return (
        <div className="relative z-10 rounded-xl overflow-hidden shadow-xl border border-[#FBFBFB] border-dashed"
        >
            <video ref={videoRef} className="w-full aspect-video object-cover" muted playsInline loop preload="metadata">
                <source src={FactoryVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default VideoComponent
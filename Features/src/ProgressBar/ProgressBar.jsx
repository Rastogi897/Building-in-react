import React, { use, useEffect, useState } from 'react'
import "./PBstyle.css"

const ProgressBar = () => {

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (progress < 100) {
            const timer = setTimeout(() => setProgress(prev => prev + 5), 1000)

            // gets called before the next useEffect call
            return () => clearTimeout(timer)
        }
    }, [progress])

    return (
        <div className='outer'>
            <div className='inner' style={{ transform: `translateX(-${100 - progress}%)` }}>
                {progress}%
            </div>
        </div>
    )
}

export default ProgressBar
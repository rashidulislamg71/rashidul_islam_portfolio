
import React from 'react'

function SectionLabel({children}) {
    return (
        <div className="flex items-center gap-4 mb-0">
            <span className="text-cyan-400 font-mono text-xs uppercase tracking-[0.5em]">
                {children}
            </span>
            <div className="h-[1px] w-20 bg-cyan-400/30"></div>
        </div>
    )
}

export default SectionLabel
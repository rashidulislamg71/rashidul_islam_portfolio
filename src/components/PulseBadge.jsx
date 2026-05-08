import React from "react";

function PulseBadge() {
    return (
        <span className="relative flex h-4 w-4 items-center justify-center">

            {/* Outer Glow */}
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-40 animate-ping" />

            {/* Inner Pulse */}
            <span className="absolute inline-flex h-2 w-2 rounded-full bg-green-400 opacity-70 animate-pulse" />

            {/* Core Dot */}
            <span className="relative h-2 w-2 rounded-full bg-green-500" />
        </span>
    );
}

export default PulseBadge;
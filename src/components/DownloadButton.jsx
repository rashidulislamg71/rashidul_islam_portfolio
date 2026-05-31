import Link from "next/link";
import { FiDownload } from "react-icons/fi";


const DownloadButton = ({
  children = "Download Resume",
}) => {
  return (
    <div className="flex justify-center items-center ">
      <Link
       target="_blank"
        href={
          "https://drive.google.com/file/d/1LpMaNYA8clUXIjb5GsHA6SmTKyZ2rHol/view?usp=sharing"
        }
        download
        className="
          group relative inline-flex items-center justify-center 
          px-6 py-4 rounded-full overflow-hidden 
          text-white  border border-white/10
          transition-all duration-300 active:scale-95
        "
      >
        {/* 1. Rotating Glow Ring (Always Animated) */}
        <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000_0%,#000_40%,#3b82f6_50%,#fff_55%,#3b82f6_60%,#000_70%,#000_100%)]"></span>

        {/* 2. Inner Dark Layer (Masking for the Border look) */}
        <span className="absolute inset-[1.5px] rounded-full bg-[#020617] backdrop-blur-3xl"></span>

        {/* Content */}
        <span className="relative z-10 flex items-center gap-3">
          {/* Always Bouncing Icon */}
          <span className="animate-caret-blink text-cyan-600">
            <FiDownload size={20} className="text-cyan-400" />
          </span>

          {/* Breathing Text Animation */}
          <span className="uppercase tracking-widest text-sm font-bold animate-pulse">
            {children}
          </span>
        </span>

        {/* 3. Subtle Inner Glow (Optional) */}
        <span className="absolute inset-0 rounded-full bg-blue-500/4 group-hover:bg-blue-500/10 transition-colors"></span>
      </Link>
    </div>
  );
};

export default DownloadButton;

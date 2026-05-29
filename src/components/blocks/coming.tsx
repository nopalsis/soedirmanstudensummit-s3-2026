import * as React from "react"
import { motion, useScroll, useTransform } from "motion/react"
import { ContainerSticky } from "@/components/ui/animated-video-on-scroll"

const ComingSoon = () => {
  const scrollRef = React.useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  })

  // ===== LOGO =====
  // Awal: besar di tengah sebagai background
  // Scroll: mengecil + naik ke atas
  const logoScale = useTransform(scrollYProgress, [0, 0.4], [2.5, 0.18])
  const logoY = useTransform(scrollYProgress, [0, 0.4], [0, -340])
  const logoX = useTransform(scrollYProgress, [0, 0.4], [0, 0])
  const logoOpacityBg = useTransform(scrollYProgress, [0, 0.15], [0.15, 0]) // opacity sebagai background
  const logoOpacitySmall = useTransform(scrollYProgress, [0.25, 0.45], [0, 1]) // opacity saat jadi kecil di atas

  // ===== COMING SOON TEXT =====
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const textY = useTransform(scrollYProgress, [0, 0.3], [0, -50])
  const textScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9])

  // ===== SUBTITLE (Soedirman Student Summit) =====
  const subtitleOpacity = useTransform(scrollYProgress, [0.35, 0.55], [0, 1])
  const subtitleY = useTransform(scrollYProgress, [0, 0.4], [0, -340])

  // ===== PATUNG =====
  const imageOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1])
  const imageScale = useTransform(scrollYProgress, [0.3, 0.7], [0.88, 1])
  const insetY = useTransform(scrollYProgress, [0.3, 0.8], [45, 0])
  const insetX = useTransform(scrollYProgress, [0.3, 0.8], [35, 0])
  const rounded = useTransform(scrollYProgress, [0.3, 0.8], [999, 0])
  const clipPath = useTransform(
    [insetY, insetX, rounded],
    ([y, x, r]: number[]) => `inset(${y}% ${x}% ${y}% ${x}% round ${r}px)`
  )

  // ===== TEXT OVERLAY di atas patung =====
  const overlayOpacity = useTransform(scrollYProgress, [0.65, 0.9], [0, 1])
  const overlayY = useTransform(scrollYProgress, [0.65, 0.9], [30, 0])

  return (
    <div ref={scrollRef} className="relative h-[400vh] w-full">
      <ContainerSticky
        className="flex flex-col items-center justify-center overflow-hidden"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 30%, #0a1628 0%, #060e1c 40%, #020509 100%)",
        }}
      >
        {/* Grid lines */}
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(#C9A84C22 1px, transparent 1px), linear-gradient(90deg, #C9A84C22 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* ===== LOGO — background besar di awal ===== */}
        {/* Layer background (opacity rendah, blur) */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center"
          style={{ opacity: logoOpacityBg }}
        >
          <img
            src="/images/logo.png"
            alt=""
            className="w-[80%] max-w-[600px] object-contain"
            style={{ filter: "blur(2px) brightness(1.2)" }}
          />
        </motion.div>

        {/* ===== LOGO — bergerak dari tengah ke atas ===== */}
        <motion.div
          className="absolute z-30 flex flex-col items-center"
          style={{
            scale: logoScale,
            y: logoY,
            x: logoX,
          }}
        >
          <img
            src="/images/logo.png"
            alt="Logo S3"
            className="w-24 object-contain"
          />

          {/* Subtitle muncul di bawah logo saat naik */}
          <motion.div
            className="mt-2 text-center"
            style={{ opacity: subtitleOpacity }}
          >
            <p
              className="text-xs font-semibold tracking-[0.2em] uppercase whitespace-nowrap"
              style={{ color: "#C9A84C" }}
            >
              Soedirman Student Summit
            </p>
            <p
              className="text-[10px] tracking-widest"
              style={{ color: "#C9A84C70" }}
            >
              2026
            </p>
          </motion.div>
        </motion.div>

        {/* ===== COMING SOON — hilang saat scroll ===== */}
        <motion.div
          className="relative z-10 flex flex-col items-center gap-3 text-center px-6"
          style={{ opacity: textOpacity, y: textY, scale: textScale }}
        >
          <h1
            className="text-6xl md:text-8xl font-black tracking-tighter leading-none font-poppins"
            style={{
              color: "#C9A84C",
              textShadow: "0 0 60px #C9A84C80, 0 0 120px #C9A84C30",
            }}
          >
            COMING
          </h1>
          <h1
            className="text-6xl md:text-8xl font-black tracking-tighter leading-none font-poppins"
            style={{
              WebkitTextStroke: "2px #C9A84C",
              color: "transparent",
            }}
          >
            SOON
          </h1>

          <p
            className="mt-4 text-sm tracking-widest uppercase"
            style={{ color: "#C9A84C80" }}
          >
            2026 · Universitas Jenderal Soedirman
          </p>

          {/* Scroll hint */}
          <div
            className="mt-10 flex flex-col items-center gap-2 text-xs tracking-widest uppercase"
            style={{ color: "#C9A84C50" }}
          >
            <span>Scroll untuk reveal</span>
            <div className="flex flex-col items-center gap-1 animate-bounce">
              <div
                className="w-4 h-4 rotate-45"
                style={{
                  borderRight: "1.5px solid #C9A84C50",
                  borderBottom: "1.5px solid #C9A84C50",
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* ===== PATUNG — reveal saat scroll ===== */}
        <motion.div
          className="absolute inset-0 z-20"
          style={{ opacity: imageOpacity, scale: imageScale, clipPath }}
        >
          {/* Gradient atas */}
          <div
            className="absolute inset-x-0 top-0 h-40 z-10 pointer-events-none"
            style={{
              background: "linear-gradient(to bottom, #020509 0%, transparent 100%)",
            }}
          />
          {/* Gradient bawah */}
          <div
            className="absolute inset-x-0 bottom-0 h-48 z-10 pointer-events-none"
            style={{
              background: "linear-gradient(to top, #020509 0%, transparent 100%)",
            }}
          />

          {/* Gambar patung */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Soedirman.jpg/800px-Soedirman.jpg"
            alt="Patung Jenderal Soedirman"
            className="w-full h-full object-cover object-top"
            style={{ filter: "sepia(20%) brightness(0.65) contrast(1.15)" }}
          />

          {/* Gold overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, #02050990 0%, #C9A84C10 50%, #020509CC 100%)",
            }}
          />

          {/* Text overlay di atas patung */}
          <motion.div
            className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 text-center w-full px-6"
            style={{ opacity: overlayOpacity, y: overlayY }}
          >
            <p
              className="text-xs tracking-[0.3em] uppercase mb-2"
              style={{ color: "#C9A84C90" }}
            >
              Panglima Besar
            </p>
            <h2
              className="text-3xl md:text-5xl font-black tracking-tight font-poppins"
              style={{
                color: "#C9A84C",
                textShadow: "0 0 40px #C9A84C60",
              }}
            >
              Jenderal Soedirman
            </h2>
            <p
              className="mt-2 text-sm tracking-widest"
              style={{ color: "#C9A84C70" }}
            >
              1916 – 1950
            </p>
          </motion.div>
        </motion.div>
      </ContainerSticky>
    </div>
  )
}

export default ComingSoon
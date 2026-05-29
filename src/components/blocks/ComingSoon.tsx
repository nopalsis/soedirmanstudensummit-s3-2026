import * as React from "react"
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react"
import { ContainerSticky } from "@/components/ui/animated-video-on-scroll"
import "@/styles/global.css"

const ComingSoon = () => {
  const scrollRef = React.useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  })

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768
  const shouldReduce = useReducedMotion()
  const simplify = isMobile || shouldReduce

  // Lalu gunakan simplify di transform
  

  // Coming Soon: terlihat di awal, menghilang saat scroll
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const textY = useTransform(scrollYProgress, [0, 0.3], [0, -60])
  const textScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.85])

  // Patung: muncul setelah Coming Soon hilang
  const imageOpacity = useTransform(scrollYProgress, [0.25, 0.55], [0, 1])
  const imageScale = useTransform(scrollYProgress, [0.25, 0.65], [0.88, 1])

  // Clip path: dari bulat kecil di tengah → full screen
  const insetY = useTransform(scrollYProgress, [0.25, 0.75], simplify ? [30, 0] : [45, 0])
  const insetX = useTransform(scrollYProgress, [0.25, 0.75], simplify ? [20, 0] : [35, 0])
  const rounded = useTransform(scrollYProgress, [0.25, 0.75], simplify ? [0, 0] : [999, 0])
  const clipPath = useTransform(
    [insetY, insetX, rounded],
    ([y, x, r]: number[]) => `inset(${y}% ${x}% ${y}% ${x}% round ${r}px)`
  )

  // Text overlay di atas patung
  const overlayOpacity = useTransform(scrollYProgress, [0.6, 0.85], [0, 1])
  const overlayY = useTransform(scrollYProgress, [0.6, 0.85], [30, 0])

  return (
    <div ref={scrollRef} className="relative h-[250vh] md:h-[350vh] w-full"
      style={{ touchAction: "pan-y" }}>
      <ContainerSticky
        className="flex flex-col items-center justify-center overflow-clip"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 30%, #0a1628 0%, #060e1c 40%, #020509 100%)",
          transform: "translateZ(0)",
          willChange: "transform",
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

        {/* Gold glow */}
        <div
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-150 h-75 opacity-20 blur-3xl hidden md:block"
          style={{
            background: "radial-gradient(ellipse, #C9A84C 0%, transparent 70%)",
          }}
        />

        {/* ===== COMING SOON — hilang saat scroll ===== */}
        <motion.div
          className="relative z-10 flex flex-col items-center gap-3 text-center px-6"
          style={{ opacity: textOpacity, y: textY, scale: textScale, willChange: "transform, opacity" }}
        >
          <h1
            className="text-6xl md:text-8xl font-poppins tracking-tighter leading-none"
            style={{
              color: "#C9A84C",
              textShadow: "0 0 60px #C9A84C80, 0 0 120px #C9A84C30",
            }}
          >
            COMING
          </h1>
          <h1
            className="text-6xl md:text-8xl font-poppins tracking-tighter leading-none"
            style={{
              WebkitTextStroke: "2px #C9A84C",
              color: "transparent",
            }}
          >
            SOON
          </h1>

          <div
            className="mt-10 flex flex-col items-center gap-2 text-xs tracking-widest uppercase"
            style={{ color: "#C9A84C50" }}
          >
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

        {/* ===== PATUNG KUDA — muncul setelah Coming Soon hilang ===== */}
        <motion.div
          className="absolute inset-0 z-20"
          style={{ opacity: imageOpacity, scale: imageScale, clipPath, willChange: "transform, opacity" }}
        >
          {/* Gradient atas */}
          <div
            className="absolute inset-x-0 top-0 h-40 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, #020509 10%, transparent 100%)",
            }}
          />
          {/* Gradient bawah */}
          <div
            className="absolute inset-x-0 bottom-0 h-48 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, #020509 10%, transparent 100%)",
            }}
          />

          {/* Gambar patung */}
          <img
            src="/images/patung-kuda-halaman-rektor.webp"
            alt="Patung Jenderal Soedirman"
            className="w-full h-full object-cover object-top"
            style={{ filter: "sepia(20%) brightness(0.4) contrast(1.15)" }}
          />

          {/* Gold overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, #02050990 0%, #C9A84C10 50%, #020509CC 100%)",
            }}
          />

          {/* Text overlay */}
          <motion.div
            className="absolute inset-0 left-1/2 -translate-x-1/2 z-20 text-center w-full px-6 flex flex-col items-center justify-center"
            style={{ opacity: overlayOpacity, y: overlayY, willChange: "transform, opacity" }}
          >

            {/* <!-- Main headline --> */}
            <h1
              className="font-poppins font-semibold leading-none tracking-tighter mb-8 text-white text-4xl md:text-6xl lg:text-7xl"
            >
              Soedirman Student Summit<br />
              <span className="font-poppins text-s3-gold">2026</span>
            </h1>

            {/* <!-- Glass info card --> */}
            <div className="s3-glass rounded-3xl mx-auto max-w-3xl py-10 px-10 mb-8"
            >
              <p className="font-poppins text-lg md:text-xl leading-relaxed text-center text-blue-100">
                Soedirman Student Summit (S3) adalah acara tahunan Unsoed untuk menyambut
                mahasiswa baru dan memperkenalkan kehidupan kampus.
              </p>
            </div>

            {/* <!-- Social Icons --> */}
            <div className="flex items-center justify-center gap-4 mb-8 flex-wrap">

              {/* <!-- Instagram --> */}
              <a href="https://www.instagram.com/soedirmanstudentsummit?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" title="Instagram" className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-white transition-all duration-200 hover:bg-s3-gold hover:text-s3-blue hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* <!-- TikTok --> */}
              <a href="https://www.tiktok.com/@soedirmanstudentsummit?is_from_webapp=1&sender_device=pc" title="TikTok" className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-white transition-all duration-200 hover:bg-s3-gold hover:text-s3-blue hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" />
                </svg>
              </a>

              {/* <!-- WhatsApp --> */}
              <a href="#" title="WhatsApp" className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-white transition-all duration-200 hover:bg-s3-gold hover:text-s3-blue hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>

              {/* <!-- Spotify --> */}
              <a href="#" title="Spotify" className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-white transition-all duration-200 hover:bg-s3-gold hover:text-s3-blue hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.508 17.302c-.216.354-.674.465-1.028.249-2.855-1.744-6.448-2.139-10.681-1.171-.406.092-.817-.16-.908-.567-.092-.406.16-.817.567-.908 4.639-1.06 8.599-.611 11.8 1.343.353.216.464.674.25 1.054zm1.469-3.262c-.272.443-.849.585-1.293.313-3.268-2.009-8.25-2.593-12.114-1.42-.499.151-1.025-.13-1.176-.629s.13-1.025.629-1.176c4.417-1.341 9.907-.69 13.641 1.609.444.272.586.849.313 1.303zm.127-3.409C15.222 8.24 8.784 8.027 5.034 9.165c-.598.181-1.231-.147-1.413-.745-.181-.598.147-1.231.745-1.413 4.298-1.304 11.419-1.05 16.002 1.67.538.319.714 1.01.395 1.548-.319.539-1.01.715-1.548.396z" />
                </svg>
              </a>

              {/* <!-- Email --> */}
              <a href="mailto:contact@summit2026.unsoed.ac.id" title="Email" className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-white transition-all duration-200 hover:bg-s3-gold hover:text-s3-blue hover:scale-110">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>

            {/* <!-- Copyright --> */}
            <p className="text-sm font-plus-jakarta-sans text-text-muted">
              Copyright &copy; 2026 Panitia Soedirman Student Summit
            </p>

          </motion.div>
        </motion.div>
      </ContainerSticky>
    </div >
  )
}

export default ComingSoon
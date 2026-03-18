export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-20 overflow-hidden"
      style={{ backgroundColor: "#FEFAE0" }}
    >
      {/* Decorative background elements */}
      <div
        className="absolute top-20 left-10 w-48 h-48 rounded-full opacity-20 hidden md:block"
        style={{ backgroundColor: "#DDA15E" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-16 right-8 w-32 h-32 rounded-full opacity-15 hidden md:block"
        style={{ backgroundColor: "#BC6C25" }}
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-16 w-16 h-16 rounded-full opacity-20 hidden lg:block"
        style={{ backgroundColor: "#606C38" }}
        aria-hidden="true"
      />
      {/* Decorative horizontal rule accent */}
      <div
        className="absolute top-24 left-0 right-0 h-0.5 opacity-10"
        style={{ backgroundColor: "#606C38" }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-6">
        {/* Badge */}
        <span
          className="inline-block text-xs font-sans font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full border"
          style={{ color: "#606C38", borderColor: "#606C38", backgroundColor: "transparent" }}
        >
          Student Government 2026
        </span>

        {/* Name */}
        <h1
          className="font-serif text-6xl md:text-8xl font-bold text-balance leading-tight"
          style={{ color: "#283618" }}
        >
          Jay Tailor
        </h1>

        {/* Title */}
        <p
          className="font-sans text-base md:text-lg font-medium tracking-wide uppercase"
          style={{ color: "#606C38" }}
        >
          Grade 9 Representative Candidate
        </p>

        {/* Divider */}
        <div
          className="w-16 h-0.5 rounded-full"
          style={{ backgroundColor: "#DDA15E" }}
          aria-hidden="true"
        />

        {/* Slogan */}
        <p
          className="font-serif italic text-2xl md:text-3xl text-pretty"
          style={{ color: "#BC6C25" }}
        >
          "A voice you can count on."
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <a
            href="#signup"
            className="font-sans font-semibold text-base px-8 py-3.5 rounded transition-opacity hover:opacity-85 text-center"
            style={{ backgroundColor: "#283618", color: "#FEFAE0" }}
          >
            Vote for Me
          </a>
          <a
            href="#about"
            className="font-sans font-semibold text-base px-8 py-3.5 rounded border-2 transition-colors hover:opacity-80 text-center"
            style={{ borderColor: "#606C38", color: "#606C38", backgroundColor: "transparent" }}
          >
            Learn More
          </a>
        </div>

        {/* Scroll cue */}
        <div className="mt-10 flex flex-col items-center gap-2 opacity-40" aria-hidden="true">
          <div
            className="w-px h-10"
            style={{ backgroundColor: "#283618" }}
          />
          <span className="font-sans text-xs tracking-widest uppercase" style={{ color: "#283618" }}>
            Scroll
          </span>
        </div>
      </div>
    </section>
  )
}

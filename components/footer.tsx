export default function Footer() {
  return (
    <footer
      className="py-8 px-6"
      style={{ backgroundColor: "#283618" }}
    >
      {/* Top divider */}
      <div
        className="max-w-5xl mx-auto border-t mb-8 opacity-20"
        style={{ borderColor: "#DDA15E" }}
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        {/* Left */}
        <p
          className="font-serif text-sm font-semibold"
          style={{ color: "#FEFAE0" }}
        >
          Jay Tailor — Grade 9 Representative
        </p>

        {/* Center */}
        <p
          className="font-sans text-sm"
          style={{ color: "#FEFAE0", opacity: 0.65 }}
        >
          Election Day:{" "}
          <span className="font-semibold" style={{ color: "#DDA15E", opacity: 1 }}>
            [Date TBD]
          </span>
        </p>

        {/* Right */}
        <p
          className="font-serif italic text-sm"
          style={{ color: "#DDA15E" }}
        >
          Vote Jay Tailor.
        </p>
      </div>
    </footer>
  )
}

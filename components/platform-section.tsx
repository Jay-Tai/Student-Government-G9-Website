const platforms = [
  {
    number: "01",
    title: "Student Events",
    description:
      "Organizing more Grade 9 social events and class activities to build a stronger, more connected community from the very first year.",
  },
  {
    number: "02",
    title: "Your Voice",
    description:
      "Bringing your ideas and concerns directly to student council — because every student's opinion deserves to be heard, not just the loudest ones.",
  },
  {
    number: "03",
    title: "Better Communication",
    description:
      "Creating a regular update system so Grade 9 students always know what's happening in student government and how decisions affect them.",
  },
  {
    number: "04",
    title: "Grade 9 Pride",
    description:
      "Building a sense of pride and belonging for new students — through traditions, recognition, and making Grade 9 feel like a place you actually want to be.",
  },
]

export default function PlatformSection() {
  return (
    <section
      id="platform"
      className="py-20 md:py-28 px-6"
      style={{ backgroundColor: "#FEFAE0" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-0.5" style={{ backgroundColor: "#DDA15E" }} aria-hidden="true" />
          <span
            className="font-sans text-xs font-semibold tracking-widest uppercase"
            style={{ color: "#606C38" }}
          >
            My Platform
          </span>
        </div>

        <h2
          className="font-serif text-4xl md:text-5xl font-bold text-balance mb-12 md:mb-16"
          style={{ color: "#283618" }}
        >
          What I Stand For
        </h2>

        {/* 2x2 Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {platforms.map((item) => (
            <div
              key={item.number}
              className="group relative rounded-lg p-7 border-l-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              style={{
                backgroundColor: "#f5edd5",
                borderLeftColor: "#606C38",
              }}
            >
              {/* Number */}
              <span
                className="font-serif text-4xl font-bold block mb-3 transition-colors duration-200 group-hover:opacity-80"
                style={{ color: "#BC6C25" }}
              >
                {item.number}
              </span>

              {/* Title */}
              <h3
                className="font-serif text-xl font-bold mb-3"
                style={{ color: "#283618" }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                className="font-sans text-sm leading-relaxed"
                style={{ color: "#283618", opacity: 0.85 }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

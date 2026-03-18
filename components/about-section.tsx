export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 md:py-28 px-6"
      style={{ backgroundColor: "#FEFAE0" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-12 md:mb-16">
          <div className="w-8 h-0.5" style={{ backgroundColor: "#DDA15E" }} aria-hidden="true" />
          <span
            className="font-sans text-xs font-semibold tracking-widest uppercase"
            style={{ color: "#606C38" }}
          >
            About Me
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Photo */}
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              <div
                className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4"
                style={{ borderColor: "#DDA15E" }}
              >
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Professional%20pfp%20logo-pn3959jit7TMaBOwcBB9TOK7l5xsRR.png"
                  alt="Jay Tailor - Grade 9 Representative Candidate"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative ring */}
              <div
                className="absolute -inset-3 rounded-full border-2 opacity-30"
                style={{ borderColor: "#DDA15E" }}
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col gap-5">
            <h2
              className="font-serif text-4xl md:text-5xl font-bold text-balance"
              style={{ color: "#283618" }}
            >
              Hi, I'm Jay
            </h2>

            <p
              className="font-sans text-base leading-relaxed"
              style={{ color: "#283618" }}
            >
              I'm a Grade 9 student with a genuine passion for making our school a better place for everyone. From day one, I've been the kind of person who listens first and acts second — because real change starts with understanding what matters to you.
            </p>

            <p
              className="font-sans text-base leading-relaxed"
              style={{ color: "#283618" }}
            >
              Outside of school, I'm into basketball, creative writing, and community volunteering. These experiences have taught me how to bring people together and get things done — skills I'm ready to bring into student government.
            </p>

            <p
              className="font-sans text-base leading-relaxed"
              style={{ color: "#283618" }}
            >
              I'm running because Grade 9 students deserve a representative who actually shows up — at meetings, in the hallways, and wherever decisions get made. If you give me your vote, I'll give you my full effort. Every single day.
            </p>

            {/* Small accent */}
            <div className="flex items-center gap-3 mt-2">
              <div className="w-8 h-0.5" style={{ backgroundColor: "#BC6C25" }} aria-hidden="true" />
              <span
                className="font-serif italic text-base"
                style={{ color: "#BC6C25" }}
              >
                Grade 9, Section A
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

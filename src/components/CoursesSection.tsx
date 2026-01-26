import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Play, X, ExternalLink } from "lucide-react";

const courses = [
  {
    title: "Signals & Systems",
    source: "NPTEL",
    description: "Master the fundamentals of signal processing",
    playlistId: "PLbMVogVj5nJQqNPz0E5YO2lyH7uZOvnqT",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Analog Electronics",
    source: "Neso Academy",
    description: "Deep dive into analog circuit design",
    playlistId: "PLBlnK6fEyqRiw-GZRqfnlVIBz9dxrqHJS",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Digital Electronics",
    source: "Neso Academy",
    description: "Logic gates to digital systems",
    playlistId: "PLBlnK6fEyqRjMH3mWf6kwqiTbT798eAOm",
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Communication Systems",
    source: "NPTEL",
    description: "Principles of modern communication",
    playlistId: "PLbRMhDVUMngc-dJhyOh-vY13WRX8R9DSC",
    color: "from-orange-500 to-red-500"
  },
  {
    title: "VLSI Design",
    source: "NPTEL",
    description: "Chip design fundamentals",
    playlistId: "PLJ5C_6qdAvBFux0X9t04FcKfl0zrW8X2j",
    color: "from-indigo-500 to-violet-500"
  },
  {
    title: "Embedded Systems",
    source: "Neso Academy",
    description: "Program microcontrollers & hardware",
    playlistId: "PLBlnK6fEyqRjT3oJxFXRgjPNzeS-ip0HJ",
    color: "from-teal-500 to-cyan-500"
  }
];

const CoursesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activePlaylist, setActivePlaylist] = useState<string | null>(null);

  const activeCourse = courses.find(c => c.playlistId === activePlaylist);

  return (
    <section className="section-padding" ref={ref}>
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full bg-secondary/10 text-secondary">
            Learn ECE
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Interactive <span className="gradient-text">Courses</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Click on any course to start learning with curated YouTube playlists
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              className="card-glass rounded-2xl p-6 cursor-pointer group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setActivePlaylist(course.playlistId)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-start gap-4">
                <div className={`w-14 h-14 shrink-0 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <Play className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-display font-bold text-foreground truncate">
                      {course.title}
                    </h3>
                  </div>
                  <p className="text-xs font-medium text-primary mb-2">
                    {course.source}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {course.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* YouTube Embed Modal */}
        <AnimatePresence>
          {activePlaylist && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActivePlaylist(null)}
            >
              <motion.div
                className="relative w-full max-w-4xl bg-card rounded-2xl overflow-hidden shadow-2xl"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between p-4 border-b border-border">
                  <div>
                    <h3 className="font-display font-bold text-lg">
                      {activeCourse?.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {activeCourse?.source}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={`https://www.youtube.com/playlist?list=${activePlaylist}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-muted rounded-lg transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    <button
                      onClick={() => setActivePlaylist(null)}
                      className="p-2 hover:bg-muted rounded-lg transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/videoseries?list=${activePlaylist}`}
                    title={activeCourse?.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CoursesSection;
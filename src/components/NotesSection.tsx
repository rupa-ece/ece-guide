import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { 
  BookOpen, 
  ChevronDown, 
  Download, 
  Lightbulb, 
  Target, 
  Cpu, 
  Radio, 
  Activity, 
  Zap,
  CheckCircle2,
  FileText,
  GraduationCap,
  AlertCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface Chapter {
  id: string;
  title: string;
  explanation: string;
  keyConcepts: string[];
  formulas?: { name: string; formula: string }[];
  applications: string[];
  examPoints: string[];
  summary: string;
}

interface Subject {
  id: string;
  name: string;
  icon: React.ElementType;
  color: string;
  overview: string;
  chapters: Chapter[];
}

const subjects: Subject[] = [
  {
    id: "digital-electronics",
    name: "Digital Electronics",
    icon: Cpu,
    color: "from-blue-500 to-cyan-500",
    overview: "Digital Electronics forms the backbone of modern computing and communication systems. This subject covers the fundamental concepts of binary systems, logic gates, combinational and sequential circuits, and their practical applications in processors and memory systems.",
    chapters: [
      {
        id: "number-systems",
        title: "Chapter 1: Number Systems & Binary Arithmetic",
        explanation: "Number systems are the foundation of digital electronics. Computers use the binary system (base-2) because electronic circuits can easily represent two states: ON (1) and OFF (0). Understanding how to convert between decimal, binary, octal, and hexadecimal is essential for every ECE student.",
        keyConcepts: [
          "**Binary (Base-2)**: Uses only 0 and 1, fundamental to all digital systems",
          "**Octal (Base-8)**: Uses digits 0-7, compact representation of binary",
          "**Hexadecimal (Base-16)**: Uses 0-9 and A-F, widely used in programming",
          "**BCD (Binary Coded Decimal)**: Each decimal digit represented by 4 bits",
          "**1's and 2's Complement**: Methods for representing negative numbers"
        ],
        formulas: [
          { name: "Binary to Decimal", formula: "(aₙ × 2ⁿ) + (aₙ₋₁ × 2ⁿ⁻¹) + ... + (a₀ × 2⁰)" },
          { name: "2's Complement", formula: "1's Complement + 1" },
          { name: "Range (n-bit signed)", formula: "-2ⁿ⁻¹ to 2ⁿ⁻¹ - 1" }
        ],
        applications: [
          "Computer memory addressing and data storage",
          "Digital signal processing in smartphones",
          "Network IP address representation",
          "Color codes in web development (Hex)"
        ],
        examPoints: [
          "Practice conversions between all number systems quickly",
          "Remember: 2's complement is used for subtraction in ALUs",
          "BCD is inefficient but useful for display systems"
        ],
        summary: "Number systems enable digital circuits to process information. Master binary arithmetic and complement methods for a strong foundation in digital design."
      },
      {
        id: "logic-gates",
        title: "Chapter 2: Logic Gates & Boolean Algebra",
        explanation: "Logic gates are the building blocks of all digital circuits. They perform basic logical operations on binary inputs to produce binary outputs. Boolean algebra provides the mathematical framework to analyze and simplify these circuits, making designs more efficient.",
        keyConcepts: [
          "**AND Gate**: Output is 1 only when ALL inputs are 1",
          "**OR Gate**: Output is 1 when ANY input is 1",
          "**NOT Gate (Inverter)**: Output is opposite of input",
          "**NAND & NOR**: Universal gates - can create any other gate",
          "**XOR & XNOR**: Used for parity checking and arithmetic"
        ],
        formulas: [
          { name: "De Morgan's Theorem", formula: "(A·B)' = A' + B' and (A+B)' = A'·B'" },
          { name: "Absorption Law", formula: "A + A·B = A and A·(A+B) = A" },
          { name: "Consensus Theorem", formula: "AB + A'C + BC = AB + A'C" }
        ],
        applications: [
          "CPU arithmetic logic units (ALU)",
          "Digital door locks and security systems",
          "Traffic light controllers",
          "Calculator circuits"
        ],
        examPoints: [
          "NAND and NOR are universal gates - memorize their implementations",
          "Use K-maps for simplification up to 4 variables",
          "XOR is essential for adders and parity generators"
        ],
        summary: "Logic gates form the foundation of digital circuits. Master Boolean simplification techniques and understand universal gates for efficient circuit design."
      },
      {
        id: "combinational-circuits",
        title: "Chapter 3: Combinational Logic Circuits",
        explanation: "Combinational circuits produce outputs that depend only on current inputs, with no memory of past states. These circuits include multiplexers, decoders, encoders, and arithmetic circuits that are essential components in processors and digital systems.",
        keyConcepts: [
          "**Multiplexer (MUX)**: Selects one input from many based on select lines",
          "**Demultiplexer (DEMUX)**: Routes one input to one of many outputs",
          "**Encoder**: Converts 2ⁿ inputs to n-bit binary code",
          "**Decoder**: Converts n-bit input to 2ⁿ outputs",
          "**Adders**: Half adder, Full adder, Ripple carry adder"
        ],
        formulas: [
          { name: "Half Adder", formula: "Sum = A ⊕ B, Carry = A·B" },
          { name: "Full Adder", formula: "Sum = A ⊕ B ⊕ Cᵢₙ, Cₒᵤₜ = AB + Cᵢₙ(A ⊕ B)" },
          { name: "MUX as Function Generator", formula: "Any n-variable function using 2ⁿ:1 MUX" }
        ],
        applications: [
          "Data routing in communication systems",
          "Address decoding in memory chips",
          "Arithmetic operations in processors",
          "Seven-segment display drivers"
        ],
        examPoints: [
          "A 2ⁿ:1 MUX can implement any n-variable Boolean function",
          "Priority encoders handle multiple simultaneous inputs",
          "Carry look-ahead adders are faster than ripple carry"
        ],
        summary: "Combinational circuits process data without memory. Understanding MUX, decoders, and adders is crucial for designing efficient digital systems."
      }
    ]
  },
  {
    id: "analog-electronics",
    name: "Analog Electronics",
    icon: Activity,
    color: "from-purple-500 to-pink-500",
    overview: "Analog Electronics deals with continuous signals and their processing. This subject covers semiconductor devices, amplifier circuits, oscillators, and operational amplifiers - essential knowledge for designing audio systems, sensors, and communication circuits.",
    chapters: [
      {
        id: "semiconductor-basics",
        title: "Chapter 1: Semiconductor Physics & PN Junction",
        explanation: "Semiconductors are materials with conductivity between conductors and insulators. By adding impurities (doping), we create N-type (excess electrons) and P-type (excess holes) semiconductors. When joined, they form PN junctions - the basis of all electronic devices.",
        keyConcepts: [
          "**Intrinsic Semiconductor**: Pure silicon/germanium with equal electrons and holes",
          "**N-type Doping**: Adding pentavalent impurities (Phosphorus, Arsenic)",
          "**P-type Doping**: Adding trivalent impurities (Boron, Gallium)",
          "**Depletion Region**: Zone at PN junction with no free carriers",
          "**Barrier Potential**: ~0.7V for Silicon, ~0.3V for Germanium"
        ],
        formulas: [
          { name: "Diode Equation", formula: "I = Iₛ(e^(V/ηVₜ) - 1)" },
          { name: "Thermal Voltage", formula: "Vₜ = kT/q ≈ 26mV at 300K" },
          { name: "Conductivity", formula: "σ = q(nμₑ + pμₕ)" }
        ],
        applications: [
          "Solar cells for renewable energy",
          "LED lighting and displays",
          "Photodiodes in optical communication",
          "Temperature sensors"
        ],
        examPoints: [
          "Silicon barrier potential (0.7V) is frequently asked",
          "Reverse saturation current doubles for every 10°C rise",
          "Zener diodes work in reverse breakdown region"
        ],
        summary: "Semiconductor physics explains how modern electronics work. The PN junction is the fundamental building block for diodes, transistors, and integrated circuits."
      },
      {
        id: "bjt-transistor",
        title: "Chapter 2: Bipolar Junction Transistor (BJT)",
        explanation: "The BJT is a three-terminal device that can amplify signals or act as a switch. It consists of two PN junctions and comes in NPN and PNP types. Current flowing into the base controls a much larger current between collector and emitter.",
        keyConcepts: [
          "**NPN vs PNP**: Current direction and biasing are opposite",
          "**Active Region**: Used for amplification (BE forward, BC reverse biased)",
          "**Saturation**: Both junctions forward biased (transistor as switch ON)",
          "**Cutoff**: Both junctions reverse biased (transistor as switch OFF)",
          "**Current Gain (β)**: Ratio of collector to base current (typically 50-200)"
        ],
        formulas: [
          { name: "Current Relationship", formula: "Iₑ = Iᵦ + Iᶜ" },
          { name: "Current Gain", formula: "β = Iᶜ/Iᵦ, α = Iᶜ/Iₑ" },
          { name: "Alpha-Beta Relation", formula: "β = α/(1-α)" }
        ],
        applications: [
          "Audio amplifiers in speakers",
          "Switching circuits in power supplies",
          "Oscillator circuits",
          "Current mirrors in IC design"
        ],
        examPoints: [
          "For saturation: Vᶜₑ(sat) ≈ 0.2V",
          "Common emitter provides both voltage and current gain",
          "Common collector (emitter follower) has unity voltage gain"
        ],
        summary: "BJT is a current-controlled device essential for amplification and switching. Understanding its regions of operation is key to designing analog circuits."
      },
      {
        id: "op-amp",
        title: "Chapter 3: Operational Amplifiers",
        explanation: "The operational amplifier (op-amp) is a high-gain differential amplifier IC. With just a few external components, it can perform mathematical operations like addition, subtraction, integration, and differentiation. It's the most versatile analog building block.",
        keyConcepts: [
          "**Ideal Op-amp**: Infinite gain, infinite input impedance, zero output impedance",
          "**Virtual Ground**: In negative feedback, V+ ≈ V-",
          "**Inverting Amplifier**: Input at inverting terminal, output phase inverted",
          "**Non-inverting Amplifier**: Input at non-inverting terminal, in-phase output",
          "**CMRR**: Ability to reject common-mode signals"
        ],
        formulas: [
          { name: "Inverting Gain", formula: "Aᵥ = -Rᶠ/Rᵢₙ" },
          { name: "Non-inverting Gain", formula: "Aᵥ = 1 + Rᶠ/Rᵢₙ" },
          { name: "Summing Amplifier", formula: "Vₒ = -Rᶠ(V₁/R₁ + V₂/R₂ + ...)" }
        ],
        applications: [
          "Active filters in audio equipment",
          "Signal conditioning in sensors",
          "Voltage regulators",
          "Instrumentation amplifiers in medical devices"
        ],
        examPoints: [
          "741 op-amp has open-loop gain of ~10⁵",
          "Slew rate limits high-frequency performance",
          "Integrator and differentiator are frequency-dependent"
        ],
        summary: "Op-amps are versatile ICs that simplify analog circuit design. Master the basic configurations and virtual ground concept for solving complex problems."
      }
    ]
  },
  {
    id: "signals-systems",
    name: "Signals & Systems",
    icon: Radio,
    color: "from-green-500 to-emerald-500",
    overview: "Signals & Systems is the mathematical foundation of ECE. This subject covers signal analysis, system characterization, and transforms like Fourier and Laplace that are essential for understanding communication, control, and signal processing systems.",
    chapters: [
      {
        id: "signal-basics",
        title: "Chapter 1: Classification of Signals",
        explanation: "Signals are functions that carry information. They can be classified based on various properties: continuous vs discrete time, periodic vs aperiodic, deterministic vs random. Understanding these classifications helps in choosing the right analysis techniques.",
        keyConcepts: [
          "**Continuous-time (CT)**: Defined for all time values (analog signals)",
          "**Discrete-time (DT)**: Defined only at integer time values (digital signals)",
          "**Energy Signal**: Finite total energy, zero average power",
          "**Power Signal**: Finite average power, infinite energy",
          "**Causal Signal**: Zero for t < 0"
        ],
        formulas: [
          { name: "Energy (CT)", formula: "E = ∫|x(t)|² dt from -∞ to ∞" },
          { name: "Power (CT)", formula: "P = lim(T→∞) 1/2T ∫|x(t)|² dt" },
          { name: "Unit Step", formula: "u(t) = 1 for t≥0, 0 for t<0" }
        ],
        applications: [
          "Audio and video signal processing",
          "Biomedical signal analysis (ECG, EEG)",
          "Radar and sonar systems",
          "Financial market analysis"
        ],
        examPoints: [
          "Periodic signals are power signals",
          "Unit impulse δ(t) has unit area but zero duration",
          "Even signals: x(t) = x(-t), Odd signals: x(t) = -x(-t)"
        ],
        summary: "Signal classification is the first step in analysis. Knowing whether a signal is CT/DT, energy/power, or causal determines which mathematical tools to apply."
      },
      {
        id: "lti-systems",
        title: "Chapter 2: LTI Systems & Convolution",
        explanation: "Linear Time-Invariant (LTI) systems are the most important class of systems in signal processing. Their behavior is completely characterized by the impulse response, and the output can be found using convolution - a fundamental operation that combines input signals with system response.",
        keyConcepts: [
          "**Linearity**: Superposition holds (scaling + additivity)",
          "**Time-Invariance**: System behavior doesn't change with time",
          "**Impulse Response h(t)**: Output when input is δ(t)",
          "**Convolution**: Integral operation to find system output",
          "**Causality**: h(t) = 0 for t < 0 (system doesn't predict future)"
        ],
        formulas: [
          { name: "Convolution (CT)", formula: "y(t) = x(t) * h(t) = ∫x(τ)h(t-τ)dτ" },
          { name: "Convolution (DT)", formula: "y[n] = Σ x[k]h[n-k]" },
          { name: "BIBO Stability", formula: "∫|h(t)|dt < ∞" }
        ],
        applications: [
          "Digital filters in audio processing",
          "Image blurring and sharpening",
          "Echo and reverb effects",
          "Channel equalization in communication"
        ],
        examPoints: [
          "Convolution is commutative: x*h = h*x",
          "Convolution with impulse: x(t)*δ(t) = x(t)",
          "Cascade LTI systems: h = h₁ * h₂"
        ],
        summary: "LTI systems are predictable and analyzable. Convolution is the key operation - master graphical convolution for exam success."
      },
      {
        id: "fourier-transform",
        title: "Chapter 3: Fourier Transform",
        explanation: "The Fourier Transform decomposes signals into their frequency components. It's a powerful tool that converts time-domain signals to frequency-domain, revealing hidden patterns and enabling frequency-based processing like filtering and modulation.",
        keyConcepts: [
          "**Frequency Domain**: Representation showing signal's frequency content",
          "**Magnitude Spectrum**: Amplitude of each frequency component",
          "**Phase Spectrum**: Phase angle of each frequency component",
          "**Bandwidth**: Range of significant frequencies in a signal",
          "**Parseval's Theorem**: Energy is preserved in both domains"
        ],
        formulas: [
          { name: "Fourier Transform", formula: "X(jω) = ∫x(t)e^(-jωt)dt" },
          { name: "Inverse FT", formula: "x(t) = (1/2π)∫X(jω)e^(jωt)dω" },
          { name: "Time-Shifting", formula: "x(t-t₀) ↔ X(jω)e^(-jωt₀)" }
        ],
        applications: [
          "Audio compression (MP3)",
          "Image compression (JPEG)",
          "Spectrum analyzers",
          "MRI imaging in medicine"
        ],
        examPoints: [
          "FT of rectangular pulse is sinc function",
          "Convolution in time = multiplication in frequency",
          "Duality: if x(t)↔X(jω), then X(jt)↔2πx(-ω)"
        ],
        summary: "Fourier Transform is essential for frequency analysis. It converts complex time signals into understandable frequency components, enabling powerful signal processing techniques."
      }
    ]
  },
  {
    id: "communication-systems",
    name: "Communication Systems",
    icon: Zap,
    color: "from-orange-500 to-red-500",
    overview: "Communication Systems covers the transmission of information over various channels. This subject includes modulation techniques, noise analysis, and digital communication fundamentals that power everything from mobile phones to satellite links.",
    chapters: [
      {
        id: "am-modulation",
        title: "Chapter 1: Amplitude Modulation (AM)",
        explanation: "Amplitude Modulation is the oldest modulation technique where the message signal varies the amplitude of a high-frequency carrier. Despite being less efficient than FM, AM is still used in broadcasting due to its simplicity and wide coverage.",
        keyConcepts: [
          "**Carrier Signal**: High-frequency sinusoid that carries information",
          "**Modulation Index (μ)**: Ratio of message amplitude to carrier amplitude",
          "**Sidebands**: New frequencies created by modulation (fc ± fm)",
          "**DSB-FC**: Double Sideband Full Carrier (standard AM)",
          "**DSB-SC**: Double Sideband Suppressed Carrier (more efficient)"
        ],
        formulas: [
          { name: "AM Signal", formula: "s(t) = Ac[1 + μcos(ωmt)]cos(ωct)" },
          { name: "Modulation Index", formula: "μ = Am/Ac = (Amax-Amin)/(Amax+Amin)" },
          { name: "Power Efficiency", formula: "η = μ²/(2+μ²) × 100%" }
        ],
        applications: [
          "AM radio broadcasting (530-1700 kHz)",
          "Aircraft communication",
          "Two-way radio systems",
          "Garage door openers"
        ],
        examPoints: [
          "For μ > 1, overmodulation causes distortion",
          "Maximum efficiency is 33.33% at μ = 1",
          "AM bandwidth = 2fm (twice message bandwidth)"
        ],
        summary: "AM is simple but inefficient, with most power in the carrier. Understanding modulation index and power calculations is crucial for communication system design."
      },
      {
        id: "fm-modulation",
        title: "Chapter 2: Frequency Modulation (FM)",
        explanation: "In Frequency Modulation, the message signal varies the frequency of the carrier while amplitude remains constant. FM provides better noise immunity than AM and is used for high-fidelity audio broadcasting and modern wireless systems.",
        keyConcepts: [
          "**Frequency Deviation (Δf)**: Maximum change in carrier frequency",
          "**Modulation Index (β)**: Ratio of frequency deviation to message frequency",
          "**Narrowband FM**: β << 1, similar bandwidth to AM",
          "**Wideband FM**: β >> 1, better quality, larger bandwidth",
          "**Carson's Rule**: Practical bandwidth estimation"
        ],
        formulas: [
          { name: "FM Signal", formula: "s(t) = Ac cos[ωct + β sin(ωmt)]" },
          { name: "Modulation Index", formula: "β = Δf/fm" },
          { name: "Carson's Bandwidth", formula: "BW = 2(Δf + fm) = 2fm(β + 1)" }
        ],
        applications: [
          "FM radio broadcasting (88-108 MHz)",
          "Television audio",
          "Two-way radio communication",
          "Telemetry systems"
        ],
        examPoints: [
          "FM is constant envelope - good for non-linear amplifiers",
          "FM has capture effect - stronger signal dominates",
          "Pre-emphasis and de-emphasis improve SNR"
        ],
        summary: "FM trades bandwidth for noise immunity. Its constant amplitude makes it robust against amplitude noise, ideal for high-quality audio transmission."
      },
      {
        id: "digital-modulation",
        title: "Chapter 3: Digital Modulation Techniques",
        explanation: "Digital modulation converts digital data into analog signals for transmission. Techniques like ASK, FSK, and PSK offer different trade-offs between bandwidth efficiency, power efficiency, and noise immunity, forming the basis of modern wireless communication.",
        keyConcepts: [
          "**ASK (Amplitude Shift Keying)**: Amplitude changes with data",
          "**FSK (Frequency Shift Keying)**: Frequency changes with data",
          "**PSK (Phase Shift Keying)**: Phase changes with data",
          "**QAM**: Combines amplitude and phase modulation",
          "**Bit Error Rate (BER)**: Probability of bit errors"
        ],
        formulas: [
          { name: "BPSK BER", formula: "Pb = Q(√(2Eb/N0))" },
          { name: "Bandwidth Efficiency", formula: "η = Rb/BW bits/s/Hz" },
          { name: "Symbol Rate", formula: "Rs = Rb/log₂(M) for M-ary" }
        ],
        applications: [
          "WiFi (OFDM with QAM)",
          "4G/5G cellular networks",
          "Satellite communication",
          "Bluetooth and Zigbee"
        ],
        examPoints: [
          "BPSK is most robust but least bandwidth efficient",
          "Higher order modulation = more bits/symbol but needs higher SNR",
          "QPSK: 2 bits/symbol, same BER as BPSK"
        ],
        summary: "Digital modulation enables efficient data transmission. Choose the technique based on the required trade-off between bandwidth, power, and error performance."
      }
    ]
  }
];

const NotesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [openChapters, setOpenChapters] = useState<Set<string>>(new Set());

  const toggleChapter = (chapterId: string) => {
    setOpenChapters(prev => {
      const newSet = new Set(prev);
      if (newSet.has(chapterId)) {
        newSet.delete(chapterId);
      } else {
        newSet.add(chapterId);
      }
      return newSet;
    });
  };

  const handleDownload = (chapterTitle: string) => {
    // In a real implementation, this would trigger a PDF download
    alert(`Download feature coming soon for: ${chapterTitle}\n\nPDF notes will be available shortly!`);
  };

  const currentSubject = subjects.find(s => s.id === selectedSubject);

  return (
    <section className="section-padding bg-gradient-to-b from-background to-muted/30" ref={ref} id="notes">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary">
            <BookOpen className="w-4 h-4 inline mr-2" />
            Study Materials
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            ECE <span className="gradient-text">Study Notes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive, exam-oriented notes covering all major ECE subjects. 
            Clear explanations, key formulas, and real-world applications to help you excel.
          </p>
        </motion.div>

        {/* Subject Selection */}
        {!selectedSubject ? (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {subjects.map((subject, index) => {
              const Icon = subject.icon;
              return (
                <motion.button
                  key={subject.id}
                  className="card-glass p-6 rounded-2xl text-left group hover:border-primary/30 transition-all"
                  onClick={() => setSelectedSubject(subject.id)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${subject.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{subject.name}</h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">{subject.overview}</p>
                  <div className="flex items-center gap-2 mt-4 text-primary text-sm font-medium">
                    <FileText className="w-4 h-4" />
                    {subject.chapters.length} Chapters
                  </div>
                </motion.button>
              );
            })}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {/* Back Button & Subject Header */}
            <div className="max-w-4xl mx-auto mb-8">
              <Button
                variant="ghost"
                onClick={() => {
                  setSelectedSubject(null);
                  setOpenChapters(new Set());
                }}
                className="mb-6 hover:bg-primary/10"
              >
                ← Back to Subjects
              </Button>

              {currentSubject && (
                <div className="card-glass p-6 rounded-2xl mb-8">
                  <div className="flex items-start gap-4">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${currentSubject.color} flex items-center justify-center shrink-0`}>
                      <currentSubject.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">{currentSubject.name}</h3>
                      <p className="text-muted-foreground">{currentSubject.overview}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Chapters Accordion */}
            <div className="max-w-4xl mx-auto space-y-4">
              {currentSubject?.chapters.map((chapter, index) => {
                const isOpen = openChapters.has(chapter.id);
                
                return (
                  <motion.div
                    key={chapter.id}
                    className="card-glass rounded-2xl overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    {/* Chapter Header */}
                    <button
                      className="w-full p-5 flex items-center gap-4 text-left hover:bg-muted/50 transition-colors"
                      onClick={() => toggleChapter(chapter.id)}
                    >
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${currentSubject.color} flex items-center justify-center shrink-0`}>
                        <GraduationCap className="w-5 h-5 text-white" />
                      </div>
                      <span className="flex-1 font-semibold text-foreground text-lg">
                        {chapter.title}
                      </span>
                      <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Chapter Content */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-6 space-y-6">
                            {/* Explanation */}
                            <div className="pl-14">
                              <p className="text-muted-foreground leading-relaxed">
                                {chapter.explanation}
                              </p>
                            </div>

                            {/* Key Concepts */}
                            <div className="pl-14">
                              <div className="flex items-center gap-2 mb-3">
                                <Lightbulb className="w-5 h-5 text-primary" />
                                <h4 className="font-semibold text-foreground">Key Concepts</h4>
                              </div>
                              <ul className="space-y-2">
                                {chapter.keyConcepts.map((concept, i) => (
                                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-1 shrink-0" />
                                    <span dangerouslySetInnerHTML={{ 
                                      __html: concept.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') 
                                    }} />
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Formulas */}
                            {chapter.formulas && chapter.formulas.length > 0 && (
                              <div className="pl-14">
                                <div className="flex items-center gap-2 mb-3">
                                  <FileText className="w-5 h-5 text-primary" />
                                  <h4 className="font-semibold text-foreground">Important Formulas</h4>
                                </div>
                                <div className="grid gap-2">
                                  {chapter.formulas.map((formula, i) => (
                                    <div key={i} className="bg-muted/50 rounded-lg p-3 flex items-center gap-3">
                                      <span className="text-muted-foreground text-sm">{formula.name}:</span>
                                      <code className="text-primary font-mono font-medium">{formula.formula}</code>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Applications */}
                            <div className="pl-14">
                              <div className="flex items-center gap-2 mb-3">
                                <Target className="w-5 h-5 text-primary" />
                                <h4 className="font-semibold text-foreground">Real-World Applications</h4>
                              </div>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {chapter.applications.map((app, i) => (
                                  <div key={i} className="bg-primary/5 rounded-lg p-3 text-sm text-muted-foreground">
                                    {app}
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Exam Points */}
                            <div className="pl-14">
                              <div className="flex items-center gap-2 mb-3">
                                <AlertCircle className="w-5 h-5 text-orange-500" />
                                <h4 className="font-semibold text-foreground">Exam-Oriented Points</h4>
                              </div>
                              <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4 space-y-2">
                                {chapter.examPoints.map((point, i) => (
                                  <p key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                    <span className="text-orange-500 font-bold">{i + 1}.</span>
                                    {point}
                                  </p>
                                ))}
                              </div>
                            </div>

                            {/* Summary */}
                            <div className="pl-14">
                              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-4 border border-primary/20">
                                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                                  <BookOpen className="w-4 h-4 text-primary" />
                                  Chapter Summary
                                </h4>
                                <p className="text-muted-foreground text-sm">{chapter.summary}</p>
                              </div>
                            </div>

                            {/* Download Button */}
                            <div className="pl-14">
                              <Button 
                                onClick={() => handleDownload(chapter.title)}
                                className="gradient-bg text-primary-foreground gap-2"
                              >
                                <Download className="w-4 h-4" />
                                Download PDF Notes
                              </Button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Disclaimer */}
        <motion.div
          className="max-w-4xl mx-auto mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="bg-muted/50 rounded-xl p-4 text-center">
            <p className="text-sm text-muted-foreground">
              <strong>Disclaimer:</strong> These notes are for educational purposes only. 
              Content is original and designed to supplement your academic learning. 
              For official course materials, please refer to your institution's resources.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NotesSection;

import {
  Users,
  Baby,
  User,
  HeartHandshake,
  Armchair,
  Briefcase,
  Leaf,
  Scale,
  BrainCircuit,
  Activity,
  AlertTriangle,
  DollarSign,
  Flower2,
  ShieldCheck,
  XCircle,
  CheckCircle2
} from 'lucide-react';

export function WellnessInfographic() {

  // --- DATA ---
  const problemNodesLeft = [
    {
      title: "Kanak-kanak",
      desc: "Kekurangan pendedahan awal kepada pengurusan emosi menyebabkan mudah cemas & tantrum.",
      icon: Baby
    },
    {
      title: "Remaja",
      desc: "Tekanan akademik & media sosial mencipta krisis keyakinan diri.",
      icon: User
    },
  ];

  const problemNodesRight = [
    {
      title: "Ibu-ibu",
      desc: "Beban berganda kerjaya & rumahtangga mengakibatkan keletihan mental (burnout).",
      icon: HeartHandshake
    },
    {
      title: "Warga Emas",
      desc: "Kesunyian akibat isolasi sosial meningkatkan risiko kemurungan.",
      icon: Armchair
    },
  ];

  const corporateNode = {
    title: "Sektor Korporat",
    desc: "9/10 pekerja alami tekanan tinggi. Keletihan mental menjejaskan produktiviti.",
    icon: Briefcase
  };

  const solutionNodesLeft = [
    {
      title: "Sains Pernafasan",
      desc: "Teknik berasaskan data untuk mengoptimumkan oksigen & fokus kognitif.",
      icon: Activity
    },
    {
      title: "Mindfulness Somatik",
      desc: "Latihan kesedaran tubuh untuk mengenali tanda awal stres.",
      icon: User
    },
  ];

  const solutionNodesRight = [
    {
      title: "Regulasi Emosi",
      desc: "Strategi praktikal mengawal emosi di tempat kerja secara profesional.",
      icon: BrainCircuit
    },
    {
      title: "Elemen Holistik",
      desc: "Pendekatan menyantuni nilai spiritual & budaya tempatan.",
      icon: Flower2
    },
  ];

  const esgNodes = [
    {
      letter: "E",
      title: "Alam Sekitar",
      desc: "Gaya hidup minimalis & tenaga 'hijau' tanpa jejak karbon.",
      icon: Leaf,
      color: "text-emerald-700",
      bg: "bg-emerald-100",
      border: "border-emerald-300"
    },
    {
      letter: "S",
      title: "Sosial",
      desc: "Memperkasa golongan rentan & melatih fasilitator komuniti.",
      icon: Users,
      color: "text-blue-700",
      bg: "bg-blue-100",
      border: "border-blue-300"
    },
    {
      letter: "G",
      title: "Tadbir Urus",
      desc: "Latihan telus diiktiraf HRDC dengan penjejakan ROI jelas.",
      icon: Scale,
      color: "text-purple-700",
      bg: "bg-purple-100",
      border: "border-purple-300"
    },
  ];

  return (
      <section className="py-24 px-6 bg-[#F8FDFF] overflow-hidden font-sans">
        <div className="max-w-7xl mx-auto">

          {/* MAIN TITLE */}
          <div className="text-center mb-24">
          <span className="text-[#0E6175] font-semibold tracking-wider uppercase text-sm mb-3 block font-sans">
            Peta Minda Kesejahteraan
          </span>
            <h2 className="text-4xl md:text-5xl text-[#0E6175] font-serif font-medium mb-6">
              Ekosistem <span className="italic">Healing Village</span>
            </h2>
          </div>

          {/* =========================================
            MAP 1: THE PROBLEM WEB (HIERARCHY)
           ========================================= */}
          <div className="mb-40">

            {/* 1. CONTEXT (TEXT BLOCK) */}
            <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-50 text-red-600 rounded-full text-sm font-bold uppercase tracking-wide mb-4 border border-red-100">
                <XCircle className="w-4 h-4" />
                Punca Masalah
              </div>
              <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">
                Realiti Semasa Rakyat Malaysia
              </h3>
              <p className="text-gray-600 leading-relaxed font-sans text-lg">
                Rakyat Malaysia dari pelbagai lapisan umur sedang berhadapan dengan krisis kesejahteraan. Rajah di bawah memetakan bagaimana tekanan emosi saling berkait antara rumah dan tempat kerja, mencipta kitaran yang sukar diputuskan.
              </p>
            </div>

            {/* 2. VISUAL DIAGRAM (PURE) */}
            <div className="relative">
              {/* Desktop Connector Lines */}
              <div className="hidden lg:block absolute top-[60px] left-1/2 w-px h-16 bg-red-300 -translate-x-1/2 z-0" /> {/* Stem */}
              <div className="hidden lg:block absolute top-[124px] left-[16%] right-[16%] h-px border-t-[3px] border-red-200 z-0 rounded-full" /> {/* Crossbar */}
              <div className="hidden lg:block absolute top-[124px] left-[16%] w-px h-12 bg-red-300 z-0" /> {/* Left Drop */}
              <div className="hidden lg:block absolute top-[124px] right-[16%] w-px h-12 bg-red-300 z-0" /> {/* Right Drop */}
              <div className="hidden lg:block absolute top-[124px] left-1/2 w-px h-12 bg-red-300 z-0 -translate-x-1/2" /> {/* Middle Drop */}

              {/* ROOT NODE (Visual Only) */}
              <div className="flex justify-center mb-16 relative z-10">
                <div className="w-32 h-32 rounded-full bg-white border-[6px] border-red-100 shadow-xl flex items-center justify-center z-10">
                  <h4 className="text-xl font-serif font-bold text-red-600 text-center leading-none">
                    Cabaran<br/>Utama
                  </h4>
                </div>
              </div>

              {/* BRANCHES */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Left Branch */}
                <div className="space-y-4">
                  {problemNodesLeft.map((node, idx) => (
                      <div key={idx} className="bg-white p-6 rounded-2xl border-2 border-red-50 shadow-sm hover:border-red-200 transition-colors">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-2 bg-red-100 text-red-600 rounded-lg"><node.icon className="w-5 h-5" /></div>
                          <h5 className="font-serif font-bold text-gray-800">{node.title}</h5>
                        </div>
                        <p className="text-sm text-gray-600 font-medium">{node.desc}</p>
                      </div>
                  ))}
                </div>

                {/* Middle Branch */}
                <div className="lg:pt-4">
                  <div className="bg-red-50 p-6 rounded-2xl border-2 border-red-200 shadow-sm text-center">
                    <div className="inline-block p-3 bg-red-600 text-white rounded-xl mb-3 shadow-md">
                      <corporateNode.icon className="w-8 h-8" />
                    </div>
                    <h5 className="font-serif font-bold text-gray-900 text-xl mb-2">{corporateNode.title}</h5>
                    <p className="text-sm text-gray-700 font-medium">{corporateNode.desc}</p>
                  </div>
                </div>

                {/* Right Branch */}
                <div className="space-y-4">
                  {problemNodesRight.map((node, idx) => (
                      <div key={idx} className="bg-white p-6 rounded-2xl border-2 border-red-50 shadow-sm hover:border-red-200 transition-colors">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-2 bg-red-100 text-red-600 rounded-lg"><node.icon className="w-5 h-5" /></div>
                          <h5 className="font-serif font-bold text-gray-800">{node.title}</h5>
                        </div>
                        <p className="text-sm text-gray-600 font-medium">{node.desc}</p>
                      </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* SECTION DIVIDER */}
          <div className="flex justify-center mb-32">
            <div className="h-24 w-[2px] bg-gradient-to-b from-red-200 to-blue-200"></div>
          </div>

          {/* =========================================
            MAP 2: THE SOLUTION CORE (HUB & SPOKE)
           ========================================= */}
          <div className="mb-40">

            {/* 1. CONTEXT */}
            <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-bold uppercase tracking-wide mb-4 border border-blue-100">
                <CheckCircle2 className="w-4 h-4" />
                Solusi Kami
              </div>
              <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">
                Program Nafas Tenang
              </h3>
              <p className="text-gray-600 leading-relaxed font-sans text-lg">
                Kami menawarkan sistem holistik yang menggabungkan 4 tunjang utama di bawah untuk membina ketahanan dalaman dan memulihkan keseimbangan semula jadi tubuh anda.
              </p>
            </div>

            {/* 2. VISUAL DIAGRAM */}
            <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">

              {/* Desktop Lines */}
              <div className="hidden lg:block absolute top-1/2 left-[25%] right-[25%] h-px border-t-[3px] border-blue-200 -z-10" />

              {/* LEFT NODES */}
              <div className="space-y-8 order-2 lg:order-1">
                {solutionNodesLeft.map((node, idx) => (
                    <div key={idx} className="bg-white p-5 rounded-2xl border-2 border-blue-50 shadow-sm relative group hover:border-blue-300 transition-colors text-right flex flex-col items-end">
                      <div className="hidden lg:block absolute top-1/2 -right-12 w-12 h-[3px] bg-blue-200" /> {/* Connector */}
                      <div className="p-2 bg-blue-100 text-[#0E6175] rounded-lg mb-2 inline-block"><node.icon className="w-6 h-6" /></div>
                      <h4 className="font-serif font-bold text-gray-800 text-lg">{node.title}</h4>
                      <p className="text-sm text-gray-600 font-medium">{node.desc}</p>
                    </div>
                ))}
              </div>

              {/* HUB NODE */}
              <div className="order-1 lg:order-2 flex justify-center">
                <div className="w-48 h-48 rounded-full bg-[#0E6175] text-white shadow-2xl flex flex-col items-center justify-center text-center p-4 z-20 border-8 border-blue-100">
                  <h3 className="text-2xl font-serif font-bold leading-none mb-1">
                    Nafas<br/>Tenang
                  </h3>
                  <p className="text-xs text-blue-200 mt-1">Metodologi Teras</p>
                </div>
              </div>

              {/* RIGHT NODES */}
              <div className="space-y-8 order-3 lg:order-3">
                {solutionNodesRight.map((node, idx) => (
                    <div key={idx} className="bg-white p-5 rounded-2xl border-2 border-blue-50 shadow-sm relative group hover:border-blue-300 transition-colors text-left flex flex-col items-start">
                      <div className="hidden lg:block absolute top-1/2 -left-12 w-12 h-[3px] bg-blue-200" /> {/* Connector */}
                      <div className="p-2 bg-blue-100 text-[#0E6175] rounded-lg mb-2 inline-block"><node.icon className="w-6 h-6" /></div>
                      <h4 className="font-serif font-bold text-gray-800 text-lg">{node.title}</h4>
                      <p className="text-sm text-gray-600 font-medium">{node.desc}</p>
                    </div>
                ))}
              </div>
            </div>
          </div>

          {/* SECTION DIVIDER */}
          <div className="flex justify-center mb-32">
            <div className="h-24 w-[2px] bg-gradient-to-b from-blue-200 to-emerald-200"></div>
          </div>

          {/* =========================================
            MAP 3: ESG TREE (HIERARCHY)
           ========================================= */}
          <div className="relative">

            {/* 1. CONTEXT */}
            <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 text-emerald-600 rounded-full text-sm font-bold uppercase tracking-wide mb-4 border border-emerald-100">
                <ShieldCheck className="w-4 h-4" />
                Impak Mampan
              </div>
              <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">
                Piawaian E.S.G
              </h3>
              <p className="text-gray-600 leading-relaxed font-sans text-lg">
                Apabila individu pulih, organisasi berkembang. Kami memastikan setiap program menyumbang secara langsung kepada piawaian Alam Sekitar, Sosial, dan Tadbir Urus korporat anda.
              </p>
            </div>

            {/* 2. VISUAL DIAGRAM */}
            <div className="relative">
              {/* Desktop Lines */}
              <div className="hidden lg:block absolute top-[-30px] left-1/2 w-px h-24 bg-gray-300 -translate-x-1/2 z-0" />
              <div className="hidden lg:block absolute top-[66px] left-[16%] right-[16%] h-px border-t-[3px] border-gray-200 z-0 rounded-full" />
              <div className="hidden lg:block absolute top-[66px] left-[16%] w-px h-12 bg-gray-300 z-0" />
              <div className="hidden lg:block absolute top-[66px] right-[16%] w-px h-12 bg-gray-300 z-0" />
              <div className="hidden lg:block absolute top-[66px] left-1/2 w-px h-12 bg-gray-300 -translate-x-1/2 z-0" />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
                {esgNodes.map((node, idx) => (
                    <div key={idx} className={`bg-white rounded-3xl p-8 border-2 ${node.border} shadow-sm flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300 h-full relative z-10`}>
                      <div className={`w-16 h-16 rounded-2xl ${node.bg} flex items-center justify-center mb-6 text-2xl font-black font-serif ${node.color} shadow-inner`}>
                        {node.letter}
                      </div>
                      <h4 className={`text-2xl font-serif font-bold mb-3 ${node.color.replace('text-', 'text-gray-900 ')}`}>
                        {node.title}
                      </h4>
                      <p className="text-gray-600 font-sans leading-relaxed font-medium">
                        {node.desc}
                      </p>
                    </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
  );
}
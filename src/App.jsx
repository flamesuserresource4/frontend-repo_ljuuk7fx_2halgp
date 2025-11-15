import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Menu, X, ChevronRight, ShieldCheck, Workflow, Gauge, LineChart, Settings, Rocket, CalendarClock, Handshake, Layers, Code2 } from 'lucide-react'

function App() {
  const [open, setOpen] = React.useState(false)

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ]

  const services = [
    {
      icon: <Workflow className="w-6 h-6" />, 
      title: 'Workflow Platforms',
      desc: 'Custom internal tools that streamline approvals, handoffs, and collaboration.'
    },
    {
      icon: <Gauge className="w-6 h-6" />,
      title: 'Operations Dashboards',
      desc: 'Real-time visibility across teams with KPIs, alerts, and automations.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: 'Access & Compliance',
      desc: 'Role-based systems, audit logs, and secure integrations that scale.'
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: 'Data & Analytics',
      desc: 'Warehouse integrations, reporting layers, and decision-driving insights.'
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: 'Systems Integration',
      desc: 'Unify CRM, ERP, HRIS, and bespoke tools with dependable pipelines.'
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'Automation',
      desc: 'Eliminate busywork with event-driven flows, webhooks, and bots.'
    },
  ]

  const work = [
    {
      tag: 'Operations',
      title: 'Unified Logistics OS',
      points: ['Fleet tracking', 'Smart dispatching', 'Exception management'],
    },
    {
      tag: 'Finance',
      title: 'Revenue Command Center',
      points: ['Forecast accuracy +18%', 'Automated reconciliations', 'Self-serve reports'],
    },
    {
      tag: 'People',
      title: 'Talent Lifecycle Hub',
      points: ['ATS sync', 'Skills graph', 'Onboarding automation'],
    },
  ]

  return (
    <div className="min-h-screen bg-[#05060A] text-white">
      {/* Top gradient glow */}
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(50%_40%_at_50%_0%,black,transparent)]">
        <div className="absolute inset-x-0 top-0 h-[60vh] bg-gradient-to-b from-indigo-500/40 via-fuchsia-500/20 to-transparent blur-3xl opacity-60" />
      </div>

      {/* Navigation */}
      <header className="relative z-20">
        <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-white/10 backdrop-blur flex items-center justify-center border border-white/10">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold tracking-wide text-white/90">webnovasolution</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors">{l.label}</a>
            ))}
            <a href="#contact" className="ml-2 inline-flex items-center gap-2 rounded-full bg-white text-black px-4 py-2 font-medium hover:bg-white/90 transition">
              Start a project <ChevronRight className="w-4 h-4" />
            </a>
          </nav>

          <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg bg-white/10 border border-white/10" onClick={() => setOpen(v => !v)}>
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
        {open && (
          <div className="md:hidden px-6 pb-6">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-4 space-y-2">
              {navLinks.map(l => (
                <a key={l.href} href={l.href} className="block px-3 py-2 rounded-lg hover:bg-white/10">{l.label}</a>
              ))}
              <a href="#contact" className="block px-3 py-2 rounded-lg bg-white text-black text-center font-medium">Start a project</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section with Spline */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-8 pb-20 md:pb-28 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-3 py-1 text-xs text-white/80 mb-5">
                <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" /> Internal Management Software Experts
              </div>
              <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
                Launch the systems your teams actually love using
              </h1>
              <p className="mt-5 text-white/70 text-lg max-w-xl">
                We design and build bespoke platforms that align operations, unlock data, and scale with your business. From idea to adoption — fast.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-3 font-medium hover:bg-white/90 transition">
                  Book a discovery call <ChevronRight className="w-4 h-4" />
                </a>
                <a href="#work" className="inline-flex items-center gap-2 rounded-full bg-transparent border border-white/20 px-5 py-3 font-medium text-white/80 hover:text-white hover:border-white/40 transition">
                  See our work
                </a>
              </div>
              <div className="mt-8 flex items-center gap-6 text-white/60">
                <div className="flex items-center gap-2"><CalendarClock className="w-4 h-4" /><span>2–6 week sprints</span></div>
                <div className="flex items-center gap-2"><Handshake className="w-4 h-4" /><span>Co-created with your team</span></div>
              </div>
            </motion.div>
          </div>

          <div className="relative aspect-[4/3] md:aspect-[5/4] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-indigo-500/10 to-fuchsia-500/10">
            <Spline
              scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            {/* soft gradient edge so the 3D sits nicely */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#05060A] via-transparent to-transparent opacity-60" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 md:mb-14 flex items-end justify-between">
            <div>
              <h2 className="text-2xl md:text-4xl font-semibold">What we build</h2>
              <p className="text-white/60 mt-2">Systems that turn messy processes into elegant products.</p>
            </div>
            <a href="#contact" className="hidden md:inline-flex items-center gap-2 text-sm rounded-full bg-white/10 border border-white/10 px-4 py-2 hover:bg-white/15">Discuss your stack <ChevronRight className="w-4 h-4" /></a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur overflow-hidden"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-indigo-500/20 to-fuchsia-500/20 blur-2xl" />
                <div className="h-11 w-11 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center text-white mb-4">
                  {s.icon}
                </div>
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-white/70 text-sm leading-relaxed">{s.desc}</p>
                <div className="mt-4 inline-flex items-center gap-1 text-white/80 text-sm">
                  Learn more <ChevronRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="relative py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 md:mb-14">
            <h2 className="text-2xl md:text-4xl font-semibold">Selected work</h2>
            <p className="text-white/60 mt-2">A taste of the internal platforms we deliver.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {work.map((w, i) => (
              <motion.div
                key={w.title}
                className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 overflow-hidden"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(1200px_400px_at_-20%_-20%,#8B5CF6,transparent),radial-gradient(800px_300px_at_120%_120%,#EC4899,transparent)]" />
                <div className="relative">
                  <span className="text-[11px] tracking-wide uppercase text-white/60">{w.tag}</span>
                  <h3 className="text-xl font-semibold mt-1">{w.title}</h3>
                  <ul className="mt-4 space-y-2 text-sm text-white/70">
                    {w.points.map(p => (
                      <li key={p} className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/60" /> {p}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="relative py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 md:mb-14">
            <h2 className="text-2xl md:text-4xl font-semibold">How we partner</h2>
            <p className="text-white/60 mt-2">Lean, transparent, and outcomes-first.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {[{
              icon: <Layers className="w-5 h-5" />, title: 'Discovery & Design', desc: 'We align stakeholders, map workflows, and prototype the ideal state.'
            }, {
              icon: <Settings className="w-5 h-5" />, title: 'Build in Sprints', desc: 'Deliverables every 1–2 weeks, with clear demos and rapid iteration.'
            }, {
              icon: <Rocket className="w-5 h-5" />, title: 'Enable & Scale', desc: 'Training, documentation, and ongoing enhancements as you grow.'
            }].map((step, i) => (
              <motion.div key={step.title} className="rounded-2xl border border-white/10 bg-white/5 p-6" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <div className="h-10 w-10 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center text-white mb-4">{step.icon}</div>
                <h3 className="font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="relative py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold">Let’s build your internal platform</h2>
            <p className="text-white/70 mt-3">Share your goals — we’ll recommend a path that balances speed, reliability, and delight.</p>
            <ul className="mt-6 space-y-2 text-white/70 text-sm">
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Fixed-scope pilots available</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Transparent weekly reporting</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Security-first approach</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <form onSubmit={(e) => { e.preventDefault(); alert('Thanks! We\'ll reach out shortly.'); }} className="space-y-4">
              <div>
                <label className="text-sm text-white/70">Name</label>
                <input required placeholder="Your name" className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-white/20" />
              </div>
              <div>
                <label className="text-sm text-white/70">Work Email</label>
                <input type="email" required placeholder="you@company.com" className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-white/20" />
              </div>
              <div>
                <label className="text-sm text-white/70">What do you want to build?</label>
                <textarea required rows={4} placeholder="Tell us about your internal tools, pain points, and goals." className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-white/20" />
              </div>
              <button className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-white text-black px-5 py-3 font-medium hover:bg-white/90 transition">
                Send message <ChevronRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-10 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center">
              <Code2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-medium">webnovasolution</div>
              <div className="text-xs text-white/60">Internal management software</div>
            </div>
          </div>
          <div className="text-xs text-white/60">© {new Date().getFullYear()} webnovasolution. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}

export default App

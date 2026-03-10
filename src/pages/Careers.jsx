import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import {
  HiOutlineLocationMarker,
  HiOutlineBriefcase,
  HiOutlineCode,
  HiOutlineUserGroup,
  HiOutlineLightBulb,
  HiOutlineGlobeAlt,
  HiOutlineHeart,
  HiOutlineAcademicCap,
  HiOutlineSparkles,
  HiOutlineClock,
  HiArrowRight,
  HiOutlineCheckCircle,
  HiOutlineChevronDown,
  HiOutlineX,
  HiOutlineUpload,
} from 'react-icons/hi';
import api from '../services/api';


/* ─────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────── */

// Section 1: Open Positions
const departments = ['All', 'Engineering', 'AI/ML Research', 'Product', 'Consulting', 'Sales'];

// Dynamic Job Data Fetched Below

// Section 2: Innovation Culture
const cultureValues = [
  { icon: HiOutlineLightBulb, title: 'AI-First Thinking', desc: 'We don\'t just build AI for clients — we dogfood it everywhere internally. Every team uses AI tools to move faster, think bigger, and automate the mundane.', color: 'var(--color-primary)' },
  { icon: HiOutlineGlobeAlt, title: 'Radically Remote', desc: 'Our team spans 12+ countries. We believe the best talent is everywhere, so we built an async-first culture with intentional synchronous touchpoints.', color: 'var(--color-accent)' },
  { icon: HiOutlineHeart, title: 'Ownership Over Hierarchy', desc: 'Everyone is an owner. All Nebulytix team members have genuine equity in problems they solve — no gatekeeping, no bureaucracy, just ideas and impact.', color: 'var(--color-text-primary)' },
  { icon: HiOutlineAcademicCap, title: 'Learning Is the Job', desc: 'AI evolves weekly. We invest 10% learning time into every team member\'s schedule — conferences, certifications, research time, course budgets, no strings attached.', color: 'var(--color-primary)' },
  { icon: HiOutlineSparkles, title: 'Ship Fast, Iterate Faster', desc: 'We embrace rapid prototyping and learning from real-world use. Perfection is the enemy of impact. Ship, measure, double-down on what works.', color: 'var(--color-accent)' },
  { icon: HiOutlineUserGroup, title: 'Radical Transparency', desc: 'Company metrics, client feedback, strategic pivots — we share it all with the team. We trust our people enough to handle the truth.', color: 'var(--color-text-primary)' },
];

const perks = [
  { emoji: '💰', label: 'Competitive Equity' },
  { emoji: '🌍', label: 'Remote-First' },
  { emoji: '📚', label: '$3,000 Learning Budget' },
  { emoji: '🏖️', label: 'Unlimited PTO' },
  { emoji: '💻', label: 'Premium Hardware Setup' },
  { emoji: '🏥', label: 'Global Health Insurance' },
  { emoji: '🤝', label: 'Mentorship Program' },
  { emoji: '🚀', label: 'Fast Career Growth' },
];

// Section 3: Developer Community
const communityPrograms = [
  {
    icon: '🔓',
    title: 'Open Source Contributions',
    desc: 'Nebulytix engineers actively contribute to and maintain open-source projects in the AI and enterprise tooling ecosystem.',
    points: ['Dedicated 10% open source time for engineers', 'Internal OSS bounty program', 'Sponsored maintainerships', 'Community-first licensing approach'],
    color: 'var(--color-primary)',
  },
  {
    icon: '⚡',
    title: 'Internal Hackathons',
    desc: 'Quarterly 48-hour hackathons where any team member can pitch and build ideas — some of our best platform features started life as hackathon projects.',
    points: ['Quarterly hack cycles with real prizes', 'Cross-team idea pitching', 'Client challenge tracks', 'Best hacks ship to production'],
    color: 'var(--color-accent)',
  },
  {
    icon: '🛠️',
    title: 'Engineering Guilds',
    desc: 'Horizontal communities of practice across the engineering org — guilds for AI, platform, frontend, security, and data — run by engineers, for engineers.',
    points: ['Weekly guild sessions & AMAs', 'Shared standards & tooling ownership', 'Cross-team architecture reviews', 'Speaker & writing opportunities'],
    color: 'var(--color-text-primary)',
  },
  {
    icon: '📖',
    title: 'Learning & Research',
    desc: 'A culture where reading papers, building side experiments, and attending global conferences are actively encouraged and funded by Nebulytix.',
    points: ['Monthly research paper reading club', 'Conference speaking sponsorship', 'Internal tech blog & publishing', 'Access to every major AI research tool'],
    color: 'var(--color-primary)',
  },
];


/* ─────────────────────────────────────────────────────────────
   SUBCOMPONENTS
───────────────────────────────────────────────────────────── */
const JobCard = ({ job, isOpen, onToggle, index, onApply }) => {
  const colors = ['var(--color-primary)', 'var(--color-accent)', '#10b981', '#f59e0b', '#8b5cf6'];
  const color = colors[index % colors.length];

  return (
    <div
      className="rounded-2xl overflow-hidden transition-all duration-300"
      style={{ background: '#ffffff', border: `1px solid ${isOpen ? color : 'rgba(0,102,255,0.08)'}`, boxShadow: isOpen ? `0 8px 32px ${color}20` : '0 4px 12px rgba(0,0,0,0.02)' }}
    >
      {/* Header — always visible */}
      <button
        onClick={onToggle}
        className="w-full text-left p-6 flex items-start justify-between gap-4"
      >
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded"
              style={{ background: `${color}10`, color: color }}>
              {job.department || 'General'}
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded"
              style={{ background: 'rgba(0,0,0,0.04)', color: 'var(--color-text-muted)' }}>
              {job.type?.replace('_', ' ') || 'Full Time'}
            </span>
          </div>
          <h3 className="text-base font-bold mb-1" style={{ color: 'var(--color-text-primary)' }}>{job.title}</h3>
          <div className="flex flex-wrap gap-4 text-[11px]" style={{ color: 'var(--color-text-muted)' }}>
            <span className="flex items-center gap-1"><HiOutlineLocationMarker />{job.location}</span>
          </div>
        </div>
        <HiOutlineChevronDown
          className="shrink-0 mt-1 transition-transform duration-300 text-xl"
          style={{ color: 'var(--color-text-muted)', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      </button>

      {/* Expanded body */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 border-t pt-5" style={{ borderColor: 'rgba(0,102,255,0.07)' }}>
              <p className="text-sm leading-relaxed mb-5 whitespace-pre-line" style={{ color: 'var(--color-text-secondary)' }}>
                {job.description}
              </p>
              {job.requirements && (
                <div className="mb-6">
                  <h4 className="font-semibold text-sm mb-2" style={{ color: 'var(--color-text-primary)' }}>Requirements</h4>
                  <p className="text-sm leading-relaxed whitespace-pre-line" style={{ color: 'var(--color-text-secondary)' }}>
                    {job.requirements}
                  </p>
                </div>
              )}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onApply(job);
                }}
                className="btn-primary px-6 py-2.5 text-sm inline-flex items-center gap-2"
              >
                Apply Now <HiArrowRight />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


/* ─────────────────────────────────────────────────────────────
   PAGE
───────────────────────────────────────────────────────────── */
const Careers = () => {
  const [activeDept, setActiveDept] = useState('All');
  const [openJobIndex, setOpenJobIndex] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [applyingTo, setApplyingTo] = useState(null); // The job user is currently applying for

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const handleApplySubmit = async (data) => {
    if (!applyingTo) return;

    try {
      const formData = new FormData();
      formData.append('candidateName', `${data.firstName} ${data.lastName}`);
      formData.append('email', data.email);
      formData.append('phone', data.phone);
      formData.append('coverLetter', data.coverLetter || '');
      // Fallback API if custom backend missing, we post to the leads API because applications endpoint might not be perfectly matched
      await api.post(`/public/applications?jobId=${applyingTo.id}`, data)
        .catch(() => api.post('/public/leads/contact', {
          name: `${data.firstName} ${data.lastName}`,
          email: data.email,
          phone: data.phone,
          message: `Application for ${applyingTo.title}: ${data.coverLetter || ''}`,
          source: 'CAREERS_PAGE'
        }));

      toast.success(`Application received for ${applyingTo.title}!`);
      setApplyingTo(null);
      reset();
    } catch (error) {
      toast.error('Failed to submit application. Please try again.');
    }
  };

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setIsLoading(true);
        // Using /hr/jobs to fetch the successfully created jobs from the dashboard
        const response = await api.get('/hr/jobs?page=0&size=100');
        const fetchedJobs = response.data?.data?.content || [];
        // Only show active jobs (handling both 'active' and 'isActive' backend possibilities)
        setJobs(fetchedJobs.filter(j => j.active !== false && j.isActive !== false));
      } catch (error) {
        console.error('Failed to fetch jobs:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchJobs();
  }, []);

  const dynamicDepartments = ['All', ...new Set(jobs.map(j => j.department).filter(Boolean))];

  const filteredJobs = activeDept === 'All'
    ? jobs
    : jobs.filter(j => j.department === activeDept);

  return (
    <>
      <Helmet>
        <title>Careers - Nebulytix Technologies</title>
        <meta name="description" content="Join Nebulytix. Explore open positions, our innovation culture, and our thriving developer community." />
      </Helmet>
      <Navbar />
      <main>

        {/* ── HERO ────────────────────────────────────────────── */}
        <section className="pt-36 pb-24 relative overflow-hidden" style={{ background: 'var(--color-bg)' }}>
          <div className="glow-orb" style={{ width: 800, height: 700, top: '-25%', left: '50%', transform: 'translateX(-50%)', background: 'radial-gradient(circle, rgba(0,102,255,0.09) 0%, transparent 70%)' }} />
          <div className="container-custom relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}>
              <span className="section-eyebrow" style={{ color: 'var(--color-primary)', background: 'rgba(0,102,255,0.06)', border: '1px solid rgba(0,102,255,0.12)' }}>
                Company · Careers
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black mt-4 mb-6 leading-tight"
              style={{ color: 'var(--color-text-primary)', letterSpacing: '-0.03em' }}
            >
              Build the Future of <span className="text-gradient">Enterprise AI</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="text-lg max-w-2xl mx-auto mb-10"
              style={{ color: 'var(--color-text-secondary)', lineHeight: 1.75 }}
            >
              We are a team of engineers, researchers, and consultants who believe AI will fundamentally reshape every industry.
              Join us and build the platforms making that transformation real.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-3">
              {['Engineering', 'AI/ML Research', 'Product', 'Consulting'].map((tag, i) => (
                <span key={i} className="px-3 py-1 rounded-full text-xs font-semibold"
                  style={{ background: 'rgba(0,102,255,0.06)', border: '1px solid rgba(0,102,255,0.12)', color: 'var(--color-text-secondary)' }}>
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── SECTION 1: OPEN POSITIONS ────────────────────── */}
        <section className="py-20" id="open-positions" style={{ background: 'var(--color-bg-surface)' }}>
          <div className="container-custom">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
              <span className="section-eyebrow" style={{ color: 'var(--color-primary)', background: 'rgba(0,102,255,0.06)', border: '1px solid rgba(0,102,255,0.12)' }}>
                01 · Open Positions
              </span>
              <h2 className="section-title mt-3 text-3xl md:text-4xl">
                Open <span className="text-gradient">Positions</span>
              </h2>
              <p className="section-subtitle max-w-2xl">
                We're building across engineering, research, product, and go-to-market functions.
                Find your place in the Nebulytix team.
              </p>
            </motion.div>

            {/* Department Filters */}
            {!isLoading && jobs.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {dynamicDepartments.map((dept) => (
                  <button key={dept} onClick={() => { setActiveDept(dept); setOpenJobIndex(null); }}
                    className="px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200"
                    style={{
                      background: activeDept === dept ? 'var(--color-primary)' : '#ffffff',
                      color: activeDept === dept ? '#ffffff' : 'var(--color-text-secondary)',
                      border: `1px solid ${activeDept === dept ? 'var(--color-primary)' : 'rgba(0,102,255,0.15)'}`,
                      boxShadow: activeDept === dept ? '0 4px 12px rgba(0,102,255,0.2)' : 'none',
                    }}>
                    <HiOutlineBriefcase className="inline mr-1.5 text-sm" />
                    {dept}
                  </button>
                ))}
              </div>
            )}

            {/* Loading State */}
            {isLoading && (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600 mx-auto"></div>
                <p className="mt-4 text-sm" style={{ color: 'var(--color-text-muted)' }}>Loading positions...</p>
              </div>
            )}

            {/* Job Accordion List */}
            <div className="flex flex-col gap-3">
              <AnimatePresence mode="popLayout">
                {filteredJobs.map((job, i) => (
                  <motion.div key={job.id || job.title}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.25 }}
                  >
                    <JobCard
                      job={job}
                      index={i}
                      isOpen={openJobIndex === i}
                      onToggle={() => setOpenJobIndex(openJobIndex === i ? null : i)}
                      onApply={(selectedJob) => {
                        setApplyingTo(selectedJob);
                        reset();
                      }}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* No matches */}
            {!isLoading && filteredJobs.length === 0 && (
              <div className="text-center py-12" style={{ color: 'var(--color-text-muted)' }}>
                <HiOutlineBriefcase className="text-4xl mx-auto mb-3 opacity-30" />
                <p className="text-sm">No open positions right now. <Link to="/contact" className="font-semibold" style={{ color: 'var(--color-primary)' }}>Send a speculative application →</Link></p>
              </div>
            )}
          </div>
        </section>

        {/* ── SECTION 2: INNOVATION CULTURE ────────────────── */}
        <section className="py-20" style={{ background: 'var(--color-bg)' }}>
          <div className="container-custom">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
              <span className="section-eyebrow" style={{ color: 'var(--color-accent)', background: 'rgba(0,200,255,0.07)', border: '1px solid rgba(0,200,255,0.15)' }}>
                02 · Innovation Culture
              </span>
              <h2 className="section-title mt-3 text-3xl md:text-4xl">
                Innovation <span className="text-gradient">Culture</span>
              </h2>
              <p className="section-subtitle max-w-2xl">
                We don't hang inspirational quotes on walls. We build culture through the practices, decisions, and values we live every day.
              </p>
            </motion.div>

            {/* Culture Values */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
              {cultureValues.map((val, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                  className="p-6 rounded-2xl hover:-translate-y-1 transition-all duration-300"
                  style={{ background: '#ffffff', border: '1px solid rgba(0,102,255,0.08)', borderTop: `3px solid ${val.color}`, boxShadow: '0 4px 20px rgba(0,102,255,0.05)' }}
                >
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-4" style={{ background: `${val.color}10`, color: val.color }}>
                    <val.icon size={18} />
                  </div>
                  <h3 className="text-sm font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>{val.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{val.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Perks Banner */}
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="p-8 rounded-2xl"
              style={{ background: 'linear-gradient(160deg, #0a2560 0%, #0066ff 100%)' }}
            >
              <h3 className="text-lg font-bold text-white text-center mb-6">What We Offer</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {perks.map((perk, i) => (
                  <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.08)' }}>
                    <span className="text-xl shrink-0">{perk.emoji}</span>
                    <p className="text-xs font-semibold text-white">{perk.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── SECTION 3: DEVELOPER COMMUNITY ───────────────── */}
        <section className="py-20" style={{ background: 'var(--color-bg-surface)' }}>
          <div className="container-custom">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
              <span className="section-eyebrow" style={{ color: 'var(--color-primary)', background: 'rgba(0,102,255,0.06)', border: '1px solid rgba(0,102,255,0.12)' }}>
                03 · Developer Community
              </span>
              <h2 className="section-title mt-3 text-3xl md:text-4xl">
                Developer <span className="text-gradient">Community</span>
              </h2>
              <p className="section-subtitle max-w-2xl">
                At Nebulytix, engineers are first-class citizens. We invest in building a thriving internal developer community that grows together through open collaboration, shared craft, and continuous learning.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
              {communityPrograms.map((prog, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="p-7 rounded-2xl hover:-translate-y-1 transition-all duration-300"
                  style={{ background: '#ffffff', border: '1px solid rgba(0,102,255,0.08)', borderLeft: `4px solid ${prog.color}`, boxShadow: '0 4px 20px rgba(0,102,255,0.05)' }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{prog.icon}</span>
                    <h3 className="text-base font-bold" style={{ color: 'var(--color-text-primary)' }}>{prog.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--color-text-secondary)' }}>{prog.desc}</p>
                  <div className="space-y-2">
                    {prog.points.map((point, pi) => (
                      <div key={pi} className="flex items-center gap-2">
                        <HiOutlineCheckCircle className="shrink-0" style={{ color: prog.color }} />
                        <p className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>{point}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Community CTA strip */}
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="p-8 rounded-2xl text-center"
              style={{ background: '#ffffff', border: '1px solid rgba(0,102,255,0.1)', boxShadow: '0 4px 24px rgba(0,102,255,0.07)' }}
            >
              <HiOutlineCode className="text-3xl mx-auto mb-3" style={{ color: 'var(--color-primary)' }} />
              <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>
                Not ready to apply? Stay connected.
              </h3>
              <p className="text-sm max-w-lg mx-auto mb-6" style={{ color: 'var(--color-text-secondary)' }}>
                Follow our engineering blog, contribute to our open-source projects, or attend a community tech talk.
                The Nebulytix community is open to all senior engineers and researchers.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="btn-secondary px-6 py-2.5 text-sm inline-flex items-center gap-2">
                  GitHub <HiArrowRight />
                </a>
                <Link to="/insights" className="btn-secondary px-6 py-2.5 text-sm inline-flex items-center gap-2">
                  Engineering Blog <HiArrowRight />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── FINAL CTA ─────────────────────────────────────── */}
        <section className="py-20 relative overflow-hidden" style={{ background: 'var(--color-bg)' }}>
          <div className="glow-orb" style={{ width: 600, height: 500, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', background: 'radial-gradient(circle, rgba(0,102,255,0.06) 0%, transparent 70%)' }} />
          <div className="container-custom relative z-10 text-center max-w-2xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-black mb-5" style={{ color: 'var(--color-text-primary)' }}>
                Ready to <span className="text-gradient">Join the Team?</span>
              </h2>
              <p className="mb-8 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                Don't see a role that fits? If you're exceptional, we want to hear from you regardless. Send us your story.
              </p>
              <Link to="/contact" className="btn-primary px-10 py-3 text-sm inline-flex items-center gap-2">
                Send a Speculative Application <HiArrowRight />
              </Link>
            </motion.div>
          </div>
        </section>

      </main>

      {/* Application Modal */}
      {applyingTo && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[100] overflow-y-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-8 max-w-xl w-full mx-auto relative shadow-2xl"
          >
            <button
              onClick={() => setApplyingTo(null)}
              className="absolute top-6 right-6 text-secondary-400 hover:text-secondary-800 transition-colors"
            >
              <HiOutlineX size={24} />
            </button>
            <h3 className="text-2xl font-bold mb-1" style={{ color: 'var(--color-text-primary)' }}>Apply for {applyingTo.title}</h3>
            <p className="text-sm mb-6" style={{ color: 'var(--color-text-secondary)' }}>
              {applyingTo.department} · {applyingTo.location}
            </p>

            <form onSubmit={handleSubmit(handleApplySubmit)} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: 'var(--color-text-secondary)' }}>First Name *</label>
                  <input type="text" {...register('firstName', { required: 'Required' })} className={`input-field ${errors.firstName ? 'border-red-500' : ''}`} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: 'var(--color-text-secondary)' }}>Last Name *</label>
                  <input type="text" {...register('lastName', { required: 'Required' })} className={`input-field ${errors.lastName ? 'border-red-500' : ''}`} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: 'var(--color-text-secondary)' }}>Email *</label>
                  <input type="email" {...register('email', { required: 'Required', pattern: /^\S+@\S+$/i })} className={`input-field ${errors.email ? 'border-red-500' : ''}`} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: 'var(--color-text-secondary)' }}>Phone / Mobile</label>
                  <input type="tel" {...register('phone')} className="input-field" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: 'var(--color-text-secondary)' }}>Cover Letter / Why Nebulytix?</label>
                <textarea rows="3" {...register('coverLetter')} className="input-field resize-none" placeholder="Tell us briefly why you're a great fit..."></textarea>
              </div>

              <button type="submit" className="btn-primary w-full py-3 mt-4 text-base shadow-lg shadow-blue-500/30">
                Submit Application
              </button>
            </form>
          </motion.div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Careers;
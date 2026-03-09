import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { HiStar } from 'react-icons/hi';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  { id: 1, name: 'Sarah Johnson', position: 'CEO, TechStart Inc.', content: 'Nebulytix transformed our business with their innovative software solutions. Their team is professional, responsive, and delivered beyond our expectations.', rating: 5, image: 'https://images.unsplash.com/photo-1494790108777-2961285f6ab9?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
  { id: 2, name: 'Michael Chen', position: 'CTO, Global Finance', content: 'The mobile app they developed for us has received outstanding feedback from our users. Their attention to detail and technical expertise is impressive.', rating: 5, image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
  { id: 3, name: 'Emily Rodriguez', position: 'Product Manager, HealthCare Plus', content: 'Working with Nebulytix was a game-changer for our healthcare platform. They understood our requirements perfectly and delivered a robust solution.', rating: 5, image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
  { id: 4, name: 'David Kim', position: 'Founder, EduTech Solutions', content: 'Their cloud solutions helped us scale our platform efficiently. The team is knowledgeable, supportive, and always goes the extra mile.', rating: 5, image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
];

const Testimonials = () => {
  return (
    <section className="py-20 relative overflow-hidden" style={{ background: 'var(--color-bg)' }}>
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="section-eyebrow" style={{ color: '#00c8b0', background: 'rgba(0,200,176,0.07)', border: '1px solid rgba(0,200,176,0.15)' }}>
            Testimonials
          </span>
          <h2 className="section-title">What Our <span className="text-gradient">Clients Say</span></h2>
          <p className="section-subtitle max-w-lg mx-auto">
            Don't just take our word for it — hear from some of our satisfied clients.
          </p>
        </motion.div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="pb-12"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id} className="h-auto">
              <div
                className="rounded-xl p-6 h-full flex flex-col"
                style={{
                  background: 'var(--glass-bg)',
                  border: '1px solid rgba(0,102,255,0.08)',
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                <div className="flex mb-3 gap-0.5">
                  {[...Array(t.rating)].map((_, i) => (
                    <HiStar key={i} style={{ color: '#f59e0b' }} size={14} />
                  ))}
                </div>
                <p className="text-sm mb-5 leading-relaxed flex-1 italic" style={{ color: 'var(--color-text-secondary)' }}>
                  &ldquo;{t.content}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-9 h-9 rounded-full object-cover flex-shrink-0"
                    style={{ border: '1.5px solid rgba(0,102,255,0.2)' }}
                  />
                  <div>
                    <h4 className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>{t.name}</h4>
                    <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>{t.position}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
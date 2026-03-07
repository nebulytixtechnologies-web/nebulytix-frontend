import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { HiOutlineUserGroup, HiOutlineHeart, HiOutlineLightBulb } from 'react-icons/hi';
import { HiOutlineTrophy } from 'react-icons/hi2';

const About = () => {
    const values = [
        {
            icon: HiOutlineLightBulb,
            title: 'Innovation',
            description: 'We stay ahead of the curve with cutting-edge technologies and creative solutions.',
        },
        {
            icon: HiOutlineUserGroup,
            title: 'Collaboration',
            description: 'We work closely with our clients to understand and achieve their goals.',
        },
        {
            icon: HiOutlineTrophy,
            title: 'Excellence',
            description: 'We strive for excellence in every project, no matter the size.',
        },
        {
            icon: HiOutlineHeart,
            title: 'Integrity',
            description: 'We build trust through transparency, honesty, and ethical practices.',
        },
    ];

    const team = [
        {
            name: 'John Smith',
            position: 'CEO & Founder',
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            bio: '20+ years of experience in software development and business strategy.',
        },
        {
            name: 'Sarah Johnson',
            position: 'CTO',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            bio: 'Expert in cloud architecture and scalable systems.',
        },
        {
            name: 'Michael Chen',
            position: 'Lead Developer',
            image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            bio: 'Full-stack developer with passion for clean code and best practices.',
        },
        {
            name: 'Emily Rodriguez',
            position: 'Project Manager',
            image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            bio: 'Ensuring projects are delivered on time and within budget.',
        },
    ];

    return (
        <>
            <Helmet>
                <title>About Us - Nebulytix Technologies</title>
                <meta name="description" content="Learn about Nebulytix Technologies - our mission, values, and the team behind our innovative software solutions." />
            </Helmet>

            <Navbar />

            <main>
                {/* Hero Section */}
                <section className="pt-32 pb-20 bg-gradient-to-br from-primary-50 to-white">
                    <div className="container-custom">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center max-w-3xl mx-auto"
                        >
                            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
                                About <span className="text-primary-600">Nebulytix</span>
                            </h1>
                            <p className="text-lg text-secondary-600">
                                We're a team of passionate technologists dedicated to transforming businesses through innovative software solutions.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Story Section */}
                <section className="py-20 bg-white">
                    <div className="container-custom">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl font-bold text-secondary-900 mb-6">Our Story</h2>
                                <p className="text-secondary-600 mb-4">
                                    Founded in 2019, Nebulytix Technologies started with a simple mission: to help businesses leverage technology for growth and success. What began as a small team of developers has grown into a full-service software development company serving clients worldwide.
                                </p>
                                <p className="text-secondary-600 mb-4">
                                    Over the years, we've helped startups, SMEs, and enterprises transform their ideas into powerful software solutions. Our approach combines technical expertise with business acumen to deliver solutions that not only work but also drive real business value.
                                </p>
                                <p className="text-secondary-600">
                                    Today, we're proud to have a team of 50+ talented professionals working across web development, mobile apps, cloud solutions, and emerging technologies.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                                    alt="Our team collaborating"
                                    className="rounded-2xl shadow-2xl"
                                />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="py-20 bg-secondary-50">
                    <div className="container-custom">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="section-title">Our Values</h2>
                            <p className="section-subtitle max-w-3xl mx-auto">
                                The principles that guide everything we do
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {values.map((value, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="text-center"
                                >
                                    <div className="inline-flex p-4 bg-primary-100 rounded-2xl text-primary-600 mb-4">
                                        <value.icon size={32} />
                                    </div>
                                    <h3 className="text-xl font-semibold text-secondary-900 mb-2">{value.title}</h3>
                                    <p className="text-secondary-600">{value.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-20 bg-white">
                    <div className="container-custom">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="section-title">Meet Our Team</h2>
                            <p className="section-subtitle max-w-3xl mx-auto">
                                The talented people behind our success
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {team.map((member, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="text-center"
                                >
                                    <div className="mb-4 overflow-hidden rounded-2xl">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                    <h3 className="text-xl font-semibold text-secondary-900 mb-1">{member.name}</h3>
                                    <p className="text-primary-600 font-medium mb-2">{member.position}</p>
                                    <p className="text-secondary-600 text-sm">{member.bio}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
};

export default About;
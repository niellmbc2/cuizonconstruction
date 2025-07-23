'use client';

import { useState } from 'react';

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);

  const jobOpenings = [
    {
      id: 'plasterer',
      title: 'Experienced Plasterer',
      location: 'Auckland',
      type: 'Full-time',
      salary: '$25 - $35/hour',
      description: 'We are seeking an experienced plasterer to join our team. You will be responsible for applying plaster to walls, ceilings, and other surfaces.',
      requirements: [
        'Minimum 3 years of plastering experience',
        'Knowledge of solid plastering techniques',
        'Ability to work with concrete block and brick walls',
        'Own hand tools preferred',
        'Valid driver\'s license',
        'Physically fit and able to work at heights'
      ],
      benefits: [
        'Competitive hourly rate',
        'Regular work opportunities',
        'Training and development',
        'Team environment',
        'Tools and equipment provided'
      ]
    },
    {
      id: 'painter',
      title: 'Interior/Exterior Painter',
      location: 'Auckland',
      type: 'Full-time',
      salary: '$22 - $30/hour',
      description: 'Looking for a skilled painter to handle both interior and exterior painting projects across Auckland residential and commercial properties.',
      requirements: [
        'Minimum 2 years of painting experience',
        'Knowledge of paint types and application methods',
        'Experience with spray painting and brush work',
        'Attention to detail and quality finish',
        'Valid driver\'s license',
        'Reliable and punctual'
      ],
      benefits: [
        'Competitive wages',
        'Flexible working hours',
        'Career advancement opportunities',
        'Company vehicle for work',
        'Safety equipment provided'
      ]
    },
    {
      id: 'concrete-worker',
      title: 'Concrete Worker',
      location: 'Auckland',
      type: 'Full-time',
      salary: '$24 - $32/hour',
      description: 'Join our concrete team for footpath, driveway, and foundation work. Experience with concrete mixing, pouring, and finishing required.',
      requirements: [
        'Experience in concrete work',
        'Knowledge of concrete mixing and finishing',
        'Ability to work with forms and reinforcement',
        'Physical strength and stamina',
        'Team player with good communication',
        'Valid driver\'s license'
      ],
      benefits: [
        'Above-average pay rates',
        'Overtime opportunities',
        'Skills development',
        'Safety training provided',
        'Long-term employment'
      ]
    },
    {
      id: 'apprentice',
      title: 'Construction Apprentice',
      location: 'Auckland',
      type: 'Full-time',
      salary: '$18 - $22/hour',
      description: 'Perfect opportunity for someone starting their career in construction. Learn plastering, painting, and concrete work from experienced professionals.',
      requirements: [
        'Keen to learn and develop skills',
        'Basic understanding of construction',
        'Physical fitness and willingness to work',
        'Reliable and punctual',
        'Good attitude and work ethic',
        'Valid driver\'s license preferred'
      ],
      benefits: [
        'Comprehensive training program',
        'Mentorship from experienced tradespeople',
        'Career progression opportunities',
        'Competitive apprentice wages',
        'Hands-on learning experience'
      ]
    },
    {
      id: 'tiler',
      title: 'Floor & Wall Tiler',
      location: 'Auckland',
      type: 'Full-time',
      salary: '$26 - $36/hour',
      description: 'Experienced tiler needed for residential and commercial projects. Must have expertise in floor and wall tiling with various materials.',
      requirements: [
        'Minimum 4 years of tiling experience',
        'Knowledge of different tile types and installation',
        'Precision and attention to detail',
        'Own tiling tools and equipment',
        'Ability to read plans and measurements',
        'Valid driver\'s license'
      ],
      benefits: [
        'High hourly rates',
        'Steady work flow',
        'Professional development',
        'Quality project involvement',
        'Supportive team environment'
      ]
    },
    {
      id: 'supervisor',
      title: 'Site Supervisor',
      location: 'Auckland',
      type: 'Full-time',
      salary: '$60,000 - $75,000/year',
      description: 'Lead our construction teams and ensure projects are completed on time and to high standards. Supervise plastering, painting, and concrete operations.',
      requirements: [
        'Minimum 5 years of construction experience',
        'Leadership and team management skills',
        'Knowledge of construction processes',
        'Strong organizational abilities',
        'Excellent communication skills',
        'Valid driver\'s license'
      ],
      benefits: [
        'Salary position with bonuses',
        'Company vehicle provided',
        'Leadership development opportunities',
        'Health and safety training',
        'Career advancement potential'
      ]
    }
  ];

  const handleApply = (jobId: string) => {
    setSelectedJob(jobId);
  };

  const handleCloseModal = () => {
    setSelectedJob(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20construction%20workers%20team%20wearing%20safety%20helmets%20and%20high-visibility%20vests%20working%20together%20on%20a%20construction%20site%20with%20modern%20building%20background%2C%20bright%20natural%20lighting%2C%20teamwork%20and%20collaboration%2C%20clean%20professional%20appearance%2C%20construction%20equipment%20visible&width=1200&height=600&seq=careers-hero&orientation=landscape')`
          }}
        >
          <div className="absolute inset-0 bg-blue-900/70"></div>
        </div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Work With Us</h1>
            <p className="text-xl mb-8 leading-relaxed">
              Join Cuizon Construction and build your career with Auckland's premier plastering and painting specialists. We offer competitive wages, professional development, and a supportive team environment.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                <i className="ri-medal-line text-yellow-300 mr-2"></i>
                <span>Professional Development</span>
              </div>
              <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                <i className="ri-money-dollar-circle-line text-green-300 mr-2"></i>
                <span>Competitive Wages</span>
              </div>
              <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                <i className="ri-team-line text-blue-300 mr-2"></i>
                <span>Great Team Environment</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Work With Us Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Cuizon Construction?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're not just about getting the job done – we're about building careers and creating a workplace where everyone can thrive.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-trophy-line text-2xl text-blue-600"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3">Professional Excellence</h3>
            <p className="text-gray-600">
              Work on high-quality projects with experienced professionals who take pride in their craftsmanship.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-line-chart-line text-2xl text-green-600"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3">Career Growth</h3>
            <p className="text-gray-600">
              Advance your skills and career with training opportunities and clear progression paths.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-shield-check-line text-2xl text-purple-600"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3">Safety First</h3>
            <p className="text-gray-600">
              Comprehensive safety training and equipment provided. Your wellbeing is our priority.
            </p>
          </div>
        </div>
      </div>

      {/* Job Openings Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Current Job Openings</h2>
          <p className="text-lg text-gray-600">
            Explore our available positions and find your next career opportunity
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobOpenings.map((job) => (
            <div key={job.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{job.title}</h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <i className="ri-map-pin-line mr-1"></i>
                    <span className="text-sm">{job.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-2">
                    <i className="ri-time-line mr-1"></i>
                    <span className="text-sm">{job.type}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-blue-600">{job.salary}</div>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4 text-sm line-clamp-3">{job.description}</p>
              
              <button
                onClick={() => handleApply(job.id)}
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer"
              >
                View Details & Apply
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-800">
                  {jobOpenings.find(job => job.id === selectedJob)?.title}
                </h2>
                <button
                  onClick={handleCloseModal}
                  className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 cursor-pointer"
                >
                  <i className="ri-close-line text-xl"></i>
                </button>
              </div>

              {(() => {
                const job = jobOpenings.find(job => job.id === selectedJob);
                if (!job) return null;

                return (
                  <div>
                    <div className="mb-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center text-gray-600">
                          <i className="ri-map-pin-line mr-1"></i>
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <i className="ri-time-line mr-1"></i>
                          <span>{job.type}</span>
                        </div>
                        <div className="text-blue-600 font-bold">{job.salary}</div>
                      </div>
                      <p className="text-gray-700 mb-4">{job.description}</p>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-3">Requirements</h3>
                      <ul className="space-y-2">
                        {job.requirements.map((req, index) => (
                          <li key={index} className="flex items-start">
                            <i className="ri-check-line text-green-500 mr-2 mt-0.5"></i>
                            <span className="text-gray-700">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-3">Benefits</h3>
                      <ul className="space-y-2">
                        {job.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <i className="ri-star-line text-blue-500 mr-2 mt-0.5"></i>
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t pt-6">
                      <h3 className="text-lg font-semibold mb-4">Apply Now</h3>
                      <form id="job-application-form" className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                          />
                          <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                          />
                        </div>
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone Number"
                          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                        <textarea
                          name="experience"
                          placeholder="Tell us about your relevant experience..."
                          rows={4}
                          maxLength={500}
                          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                          required
                        ></textarea>
                        <div className="text-sm text-gray-500 text-right">
                          Maximum 500 characters
                        </div>
                        <input
                          type="hidden"
                          name="position"
                          value={job.title}
                        />
                        <div className="flex gap-3">
                          <button
                            type="button"
                            onClick={handleCloseModal}
                            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap cursor-pointer"
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer"
                          >
                            Submit Application
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
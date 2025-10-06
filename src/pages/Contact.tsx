import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  ClockIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const Contact: React.FC = () => {
  const mailTo = `mailto:team@recuitbot.com?subject=${encodeURIComponent('Inquiry from Recuitbot website')}&body=${encodeURIComponent('Hi Recuitbot Team,%0D%0A%0D%0AMy name is ...%0D%0ACompany (optional): ...%0D%0APhone (optional): ...%0D%0A%0D%0AHere are the details of my request: ...%0D%0A%0D%0AThank you!')}`;

  const contactInfo = [
    {
      icon: MapPinIcon,
      title: 'Address',
      details: ['237 South Street, Suite #108', 'Waukesha, WI 53186']
    },
    {
      icon: PhoneIcon,
      title: 'Phone',
      details: ['(262) 336-1142']
    },
    {
      icon: EnvelopeIcon,
      title: 'Email',
      details: ['team@recuitbot.com']
    },
    {
      icon: ClockIcon,
      title: 'Business Hours',
      details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 4:00 PM', 'Sunday: Closed']
    }
  ];

  // No backend form submission; users will contact via direct email

  return (
    <>
      <Helmet>
        <title>Contact Us - Get in Touch | Recuitbot</title>
        <meta 
          name="description" 
          content="Contact Recuitbot for IT staffing, development, and digital marketing solutions. Get a free consultation today." 
        />
        <meta name="keywords" content="contact recuitbot, IT consulting, free consultation, get quote" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Ready to transform your business with our technology solutions? Get in touch with our team for a free consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact via Email */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Prefer email? Click below to open your mail app. We typically respond within 24 hours.
              </p>
              <a
                href={mailTo}
                className="inline-flex items-center justify-center w-full bg-primary-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors duration-200"
              >
                Email team@recuitbot.com
              </a>
              <p className="text-sm text-gray-500 mt-3">
                Or email us directly at <a href="mailto:team@recuitbot.com" className="text-primary-700 hover:text-primary-800">team@recuitbot.com</a>
              </p>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We're here to help! Reach out to us through any of the channels below.
              </p>

              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-primary-100 p-3 rounded-lg mr-4 flex-shrink-0">
                      <info.icon className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {info.title}
                      </h3>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Our Location
                </h3>
                <div className="rounded-lg overflow-hidden shadow-sm ring-1 ring-gray-200">
                  <iframe
                    title="Recuitbot Office Location"
                    src="https://www.google.com/maps?q=237%20South%20Street,%20Suite%20%23108,%20Waukesha,%20WI%2053186&output=embed"
                    width="100%"
                    height="280"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Having trouble loading the map? 
                  <a
                    href="https://www.google.com/maps?q=237%20South%20Street,%20Suite%20%23108,%20Waukesha,%20WI%2053186"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary-700 hover:text-primary-800 font-medium ml-1"
                  >
                    Open in Google Maps
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here are some common questions we receive. Don't see your question? Contact us directly!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: 'How quickly can you start a project?',
                answer: 'We can typically begin new projects within 1-2 weeks of contract signing, depending on project complexity and our current workload.'
              },
              {
                question: 'Do you work with small businesses?',
                answer: 'Absolutely! We work with businesses of all sizes, from startups to enterprise companies. Our solutions are scalable to meet your needs and budget.'
              },
              {
                question: 'What industries do you specialize in?',
                answer: 'We have experience across multiple industries including IT, finance, healthcare, retail, education, and government sectors.'
              },
              {
                question: 'Do you provide ongoing support?',
                answer: 'Yes, we offer comprehensive support and maintenance services for all our solutions to ensure long-term success and optimal performance.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

import React from 'react';
import { 
  BookOpen, 
  Clock, 
  Globe2, 
  Target, 
  PenTool, 
  BarChart3, 
  Image as ImageIcon, 
  LayoutGrid,
  Layers,
  Gift,
  FileText,
  Eye,
  FileSpreadsheet,
  Star,
  Play,
  CircleDot,
  Smile,
  Plus
} from 'lucide-react';

const features = [
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Understanding the Psychology Behind Ads',
    description: 'Explore the critical role psychology plays in ads and learn how to tailor your campaigns to trigger emotional and logical responses in your target audience.'
  },
  {
    icon: <PenTool className="w-6 h-6" />,
    title: 'Write Compelling Ad Copy',
    description: 'Discover the art of writing ad copy that not only grabs attention but also drives action.'
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'Metrics that Matter: Measuring Success',
    description: 'Understand key metrics like ROAS, CTR, and conversion rates. Learn how to monitor and optimize campaign performance in real-time.'
  },
  {
    icon: <ImageIcon className="w-6 h-6" />,
    title: 'Generate High-Quality Ad Creatives',
    description: 'Unleash the power of both static and video ad creatives. Learn how to design stunning visuals that resonate with your audience.'
  },
  {
    icon: <LayoutGrid className="w-6 h-6" />,
    title: 'Build a High-Converting Landing Page',
    description: 'Learn the elements of a successful landing page and how to align it with your ad campaign to increase conversions.'
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: 'Design a Winning META Campaign Structure',
    description: 'Learn the best practices for structuring your campaigns, from choosing the right objectives to optimizing ad placements.'
  }
];

const bonuses = [
  {
    number: '01',
    title: '30+ High-Performing META Ad Scripts Prompts',
  },
  {
    number: '02',
    title: 'Exclusive Access to Ad Copywriting Templates',
  },
  {
    number: '03',
    title: 'Competitor Ad Spy Toolkit',
  },
  {
    number: '04',
    title: 'Step-by-Step Campaign Setup Guide',
  }
];

const targetAudience = [
  {
    number: '1',
    title: 'Product Managers',
    description: "If you're managing products and need to drive more traffic and conversions, this workshop will teach you how to utilize META Ads to hit your KPIs and scale efficiently."
  },
  {
    number: '2',
    title: 'Content Creators & Influencers',
    description: 'Learn how to create high-performing ads that grow your audience and convert your followers into paying customers. Perfect for those wanting to elevate their brand.'
  },
  {
    number: '3',
    title: 'Small Business Owners & E-commerce Managers',
    description: 'Struggling to reach the right customers online? This workshop will teach you how to leverage META Ads to increase visibility and boost sales.'
  },
  {
    number: '4',
    title: 'Freelance Advertisers & Startups',
    description: 'Want to grow faster? Discover how to optimize META Ads for lead generation and customer acquisition on a budget.'
  },
  {
    number: '5',
    title: 'Sales & Lead Generation Teams',
    description: 'For teams focused on driving qualified leads, this workshop will teach you strategies to generate more leads using targeted META Ads campaigns.'
  },
  {
    number: '6',
    title: 'SEO/SEM Specialists',
    description: 'Expand your skill set with META Ads. Learn how to integrate paid ads into your existing search marketing strategies for better performance.'
  }
];

const faqs = [
  {
    question: 'Can I expect hands-on training and practical examples during the workshop?',
    answer: 'Yes, this workshop is highly practical with real-world examples and hands-on exercises.'
  },
  {
    question: 'What kind of support and resources will be available to me after the workshop?',
    answer: 'You get lifetime access to workshop recordings, resources, and our private community.'
  },
  {
    question: 'When does the workshop start?',
    answer: 'The workshop starts on [Date]. You will receive access details via email.'
  },
  {
    question: 'What happens if I miss the session? Will there be a recording?',
    answer: "Yes, you'll get lifetime access to the workshop recording and all materials."
  },
  {
    question: 'How do I get access to the bonuses?',
    answer: 'All bonuses will be shared immediately after the workshop via email.'
  },
  {
    question: 'Who is this workshop for?',
    answer: 'This workshop is perfect for business owners, marketers, and anyone looking to master META Ads.'
  }
];

function LiveSection() {
  return (
    <div className="fixed top-24 right-4 w-80 bg-black rounded-lg shadow-lg p-6 z-40 border border-yellow-500">
      <div className="flex items-center gap-2 mb-4">
        <CircleDot className="w-4 h-4 text-red-500 animate-pulse" />
        <span className="font-semibold text-white">Live</span>
      </div>

      <h3 className="text-xl font-bold text-yellow-400 mb-4">Get Our Bestselling Workshop</h3>

      <div className="flex items-center gap-2 mb-4">
        <span className="font-semibold text-white">5,000+</span>
        <span className="text-yellow-300">Happy Students</span>
        <Smile className="w-5 h-5 text-yellow-400" />
      </div>

      <button className="w-full bg-yellow-500 text-black py-2 rounded-lg mb-6 font-semibold hover:bg-yellow-600 transition">
        Registration Closed
      </button>

      <div>
        <h4 className="font-semibold text-yellow-400 mb-4">What you'll learn</h4>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <div className="mt-1 text-yellow-400">
                <CircleDot className="w-4 h-4" />
              </div>
              <span className="text-white text-sm">{feature.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function App() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  return (
    <div className="min-h-screen bg-black">
       {/* Header */}
       <header className="bg-black shadow-md fixed w-full z-50">
            <nav className="container mx-auto px-6 py-4 flex justify-center">
              <h1  className="text-yellow-400 font-bold text-xl">U</h1>
              <h1  className="text-white font-bold text-xl">ptor</h1>
            </nav>
          </header>



      {/* Live Section */}
      <LiveSection />

      {/* Main Content */}
      <div className="pr-96">
  {/* Hero Section */}
  <section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-black text-white">
    <div className="container mx-auto px-6">
      <div className="max-w-4xl">
        <div className="inline-block bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold mb-6">
          Trending 🔥
        </div>

        <h1 className="text-6xl font-bold mb-6">
          STOP Scrolling!{' '}
          <div className="text-yellow-400">Master META Ads</div>
          <div>in 3 Hours</div>
        </h1>

        <p className="text-white/80 text-lg mb-6">
          Struggling with META Ads that burn your budget without delivering results? You're not alone. 
          99% of marketers think they've figured out META Ads, but they're missing the mark.
        </p>

        <p className="text-white/80 text-lg mb-8">
          In this power-packed workshop, I'll teach you the exact strategies used by the top 1% of 
          marketers to drive conversions, lower ad costs, and outsmart your competitors.
        </p>

        <div className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-lg text-sm font-semibold mb-8">
          Live Workshop
        </div>

        <div className="flex items-center gap-4 mb-8">
          <div className="flex -space-x-2">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                className="w-8 h-8 rounded-full border-2 border-white"
                src={`https://i.pravatar.cc/150?img=${i + 1}`}
                alt="Student"
              />
            ))}
          </div>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <span className="text-yellow-400 font-semibold">5,000+</span>
          <span className="text-white/70">Happy Students</span>
          <Smile className="w-5 h-5 text-yellow-400" />
        </div>

        {/* Video Section */}
        <div className="relative w-full aspect-video bg-gray-900 rounded-lg overflow-hidden mb-8">
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src="https://i.imgur.com/your-thumbnail.jpg" 
              alt="Workshop Preview" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="relative">
              <div className="bg-yellow-500 w-20 h-20 rounded-full flex items-center justify-center cursor-pointer hover:bg-yellow-600 transition-colors">
                <Play className="w-10 h-10 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Workshop Details */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-yellow-400 p-4 rounded-lg text-center text-black">
                    <h3 className="font-semibold mb-1">Mode</h3>
                    <p>Online</p>
                  </div>
                  <div className="bg-yellow-400 p-4 rounded-lg text-center text-black">
                    <h3 className="font-semibold mb-1">Duration</h3>
                    <p>3 Hours</p>
                  </div>
                  <div className="bg-yellow-400 p-4 rounded-lg text-center text-black">
                    <h3 className="font-semibold mb-1">Language</h3>
                    <p>Tamil</p>
                  </div>
                </div>
              </div>
            </div>
          </section>


       {/* Features Section */}
            <section className="py-16 bg-black">
              <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-4 text-white">Why You Shouldn't Miss This Workshop</h2>
                <p className="text-yellow-400 mb-12">Here's what you'll learn</p>

                <div className="grid md:grid-cols-2 gap-8">
                  {features.map((feature, index) => (
                    <div key={index} className="flex flex-col gap-4">
                      <div className="bg-yellow-500 w-12 h-12 rounded-lg flex items-center justify-center text-black">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                      <p className="text-yellow-300">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

{/* Bonus Section */}
              <section className="py-16 bg-black-500">
                <div className="container mx-auto px-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 text-center">
                    And Also Enjoy Bonuses Worth ₹5000 for FREE!
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {/* Bonus Items */}
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="flex items-center bg-black rounded-xl p-4 shadow-sm">
                        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-yellow-400 text-black font-bold text-sm mr-4">
                          0{i + 1}
                        </div>
                        <p className="text-white font-medium">
                          {[
                            "30+ High-Performing META Ad Scripts Prompts",
                            "Exclusive Access to Ad Copywriting Templates",
                            "Competitor Ad Spy Toolkit",
                            "Step-by-Step Campaign Setup Guide"
                          ][i]}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Mentor Section */}
            <section className="py-16 bg-black">
              <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-4  text-white hover:text-yellow-400 transition-colors">Meet Your Mentor</h2>

                <p className="text-yellow-400 mb-8">Gain valuable insights and skills from an experienced mentor.</p>

                <div className="bg-black-500 p-8 rounded-lg">
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80"
                      alt="Aravinth Rajagopalan"
                      className="w-16 h-16 rounded-full border-2 border-black"
                    />
                    <div>
                      <h3 className="text-xl font-semibold  text-white hover:text-yellow-400 transition-colors">Aravinth Rajagopalan</h3>
                      <p className="text-black">Digital Marketing Manager • META Ads Specialist • Host of The AravinthX Podcast</p>
                    </div>
                  </div>

                  <p className=" text-white hover:text-yellow-400 transition-colors mb-6">
                    Hey there! I'm Aravinth Rajagopalan, and I'm excited to guide you through this META Ads Workshop.
                  </p>

                  <p className=" text-white hover:text-yellow-400 transition-colors mb-6">
                    Over the past decade, I've helped over <span className="font-semibold">800 clients</span> build their digital presence, grow their brands, and generate over <span className="font-semibold">$28 million</span> in revenue. My strategies have driven <span className="font-semibold">49,028+</span> leads and ranked more than <span className="font-semibold">43,000</span> keywords for various businesses.
                  </p>

                  <p className=" text-white hover:text-yellow-400 transition-colors">
                    My journey has been featured in Business Insider, Yahoo! News, and Indian Express, where I've shared my insights on entrepreneurship and digital marketing strategies. I'm also the host of The AravinthX Podcast, where I inspire the next generation of digital marketers.
                  </p>
                </div>
              </div>
            </section>


             {/* Target Audience Section */}
            <section className="py-16 bg-black text-white">
              <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12">Who Can Attend This Workshop?</h2>

                <div className="grid md:grid-cols-2 gap-8">
                  {targetAudience.map((audience, index) => (
                    <div key={index} className="bg-black-500 p-6 rounded-lg shadow-sm">
                      <div className="bg-yellow-400 w-12 h-12 rounded-lg flex items-center justify-center text-black  mb-4 font-bold">
                        {audience.number}
                      </div>
                      <h3 className="font-semibold text-xl mb-2">{audience.title}</h3>
                      <p>{audience.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

          {/* Testimonials Section */}
          <section className=" text-white hover:text-yellow-400 transition-colors">
            <div className="max-w-6xl mx-auto px-6 text-center">
              <h2 className="text-4xl md:text-6xl font-bold mb-2">What Our Students Say</h2>
              <p className="mb-6">Don’t just take our words!</p>

              <div className="flex justify-center mb-4">
                <div className="flex -space-x-3">
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" className="w-10 h-10 rounded-full border-2 border-white" />
                  <img src="https://randomuser.me/api/portraits/women/44.jpg" className="w-10 h-10 rounded-full border-2 border-white" />
                  <img src="https://randomuser.me/api/portraits/men/45.jpg" className="w-10 h-10 rounded-full border-2 border-white" />
                  <img src="https://randomuser.me/api/portraits/women/55.jpg" className="w-10 h-10 rounded-full border-2 border-white" />
                </div>
              </div>

              <div className="flex justify-center mb-6">
                <div className="flex items-center text-black text-lg font-bold">
                  ★★★★★
                  <span className="ml-2">5,000+ Happy Students</span>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 text-left">
               {/* Testimonial Cards */}
                {[{
                  name: "Karthik Muthukumar",
                  role: "Freelancer",
                  comment: "Nallā guide pannanga! Ippove ads create pannirathukku confidence iruku!",
                  detail: "Before this, I was nervous about running ads myself. But Aravinth's step-by-step guidance made it easy to understand and apply. I’m now confidently running my own META Ads campaigns!",
                  img: "https://randomuser.me/api/portraits/men/12.jpg"
                }, {
                  name: "Dinesh Ravi",
                  role: "Sales Manager",
                  comment: "Leads increase pannirathukku intha workshop romba use aachu.",
                  detail: "Our sales team struggled to generate quality leads through digital ads. After the workshop, we learned powerful strategies that have significantly increased our lead volume.",
                  img: "https://randomuser.me/api/portraits/men/33.jpg"
                }, {
                  name: "Lakshmi R.",
                  role: "Content Creator",
                  comment: "Ad creative la major improvements iruku ippo than puriyuthu!",
                  detail: "I didn’t realize my creatives were holding me back. This workshop taught us how to make effective ads that get more clicks.",
                  img: "https://randomuser.me/api/portraits/women/60.jpg"
                }].map((t, i) => (
                  <div key={i} className="bg-black border border-white p-6 rounded-xl shadow-md">
                    <div className="flex items-center mb-2 text-yellow-400">★★★★★</div>
                    <span className="inline-block text-green-400 text-sm font-semibold mb-3">✅ Verified</span>
                    <p className="font-semibold mb-2">{t.comment}</p>
                    <p className="text-gray-300 mb-4">{t.detail}</p>
                    <div className="flex items-center gap-3">
                      <img src={t.img} className="w-10 h-10 rounded-full" />
                      <div>
                        <h4 className="font-semibold text-white">{t.name}</h4>
                        <p className="text-yellow-300 text-sm">{t.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

      {/* Why Uptor Section */}
        <section className="py-12 bg-black text-white">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl md:text-6xl font-bold mb-4">Why Uptor?</h2>
            <p className="text-lg leading-relaxed">
              At <span className="font-semibold text-yellow-400">Uptor</span>, we’re committed to helping you become an expert in your field with 
              industry-focused courses designed to drive real-world results. Whether you're looking to 
              <span className="font-semibold text-yellow-400"> upskill</span>, 
              <span className="font-semibold text-yellow-400"> shift your career</span>, or 
              <span className="font-semibold text-yellow-400"> grow your business</span>, 
              we provide the tools and knowledge you need to succeed.
            </p>
          </div>
        </section>



              {/* FAQ Section */}
              <section className="py-16 bg-black text-white">
                <div className="container mx-auto px-6">
                  <h2 className="text-3xl font-bold text-yellow-400 mb-4">FAQ's</h2>
                  <p className="text-white mb-8">Anything you need to know?</p>

                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-yellow-600 pb-4">
                        <button
                          className="w-full flex items-center justify-between py-2 text-white hover:text-yellow-400 transition-colors"
                          onClick={() => setOpenFaq(openFaq === index ? null : index)}
                        >
                          <span className="font-semibold text-left">{faq.question}</span>
                          <Plus className={`w-5 h-5 text-yellow-400 transition-transform ${openFaq === index ? 'transform rotate-45' : ''}`} />
                        </button>
                        {openFaq === index && (
                          <p className="text-white pt-2 transition-opacity duration-300 ease-in-out">
                            {faq.answer}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </section>


        {/* CTA Section */}
                <section className="py-16 bg-black">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Sign up now for just ₹99 <span className="line-through text-yellow-300">(₹999)</span> and secure your spot before it's too late<span className="text-yellow-400">.</span>
            </h2>

            <div className="max-w-2xl mx-auto">
              <div className="bg-yellow-500 rounded-xl p-4 flex items-center justify-between shadow-lg">
                <div className="text-black text-left">
                  <p className="text-lg font-semibold leading-tight">Hurry!</p>
                  <p className="text-sm font-semibold leading-tight">Limited Spots Available!</p>
                </div>
                <button className="bg-black text-white px-4 py-2 rounded-lg font-semibold text-sm shadow">
                  Registration Closed
                </button>
              </div>
            </div>
          </div>
        </section>


      </div>
    </div>
  );
}

export default App;

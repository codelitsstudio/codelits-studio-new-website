'use client';

import Image from 'next/image';
import Link from 'next/link';

const teamMembers = [
  { name: 'Karri Saarinen', position: 'Co-founder, CEO', avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJhbmRvbSUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D' },
  { name: 'Jori Lallo', position: 'Co-founder', avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJhbmRvbSUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D' },
  { name: 'Tuomas Artman', position: 'Co-founder, CTO', avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJhbmRvbSUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D' },
  { name: 'Tom Moor', position: 'Head of Engineering', avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJhbmRvbSUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D' },
  { name: 'Nan Yu', position: 'Head of Product', avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJhbmRvbSUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D' },
  { name: 'Cristina Cordova', position: 'COO', avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJhbmRvbSUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D' },
  { name: 'Casey Bertenthal', position: 'Head of Sales', avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJhbmRvbSUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D' },
];

// Titles on the left side below the video
const infoTitles = [
  "We're crafting the project planning tool for teams that care about quality",
  "Computers used to be magical.",
  "What started as a simple issue tracker",
  "Today, thousands of teams around the globe",
  "We care deeply about the quality of our work",
];

// Descriptions on the right side below the video
const infoDescriptions = [
  "Computers used to be magical. But much of that magic has been lost over time, replaced by subpar tools and practices that slow teams down and hold back great work. Frustrated with the status quo, we decided to build something better. Something that teams would actually enjoy using. We named it Linear to signify progress.",
  "But much of that magic has been lost over time, replaced by subpar tools and practices that slow teams down and hold back great work.",
  "Has since evolved into a powerful project and issue tracking system that streamlines workflows across the entire product development process. We don't think of Linear as just a better 'tool', but as a better 'way' to build software.",
  "From early-stage startups to public companies — use Linear to build their products. Linear helps them to focus on what they do best: Crafting software experiences that feel magical again.",
  "Linear has always been a fully remote company. Today, our small but mighty team is distributed across North America and Europe. What unites us is relentless focus, fast execution, and our passion for software craftsmanship. We are all makers at heart and care deeply about the quality of our work, down to the smallest detail.",
];

export default function TeamPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 max-w-7xl">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">
          About Us
        </h1>

        {/* Video Box */}
        <div className="mt-8 relative aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Intro Video"
            allowFullScreen
            className="w-full h-full"
          />
        </div>

        {/* Split info titles and descriptions */}
        <div className="mt-12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left column - Titles */}
          <div className="flex flex-col justify-start space-y-6 text-left text-xl font-semibold">
            {infoTitles.map((title, idx) => (
              <h3 key={idx} className="text-gray-900">
                {title}
              </h3>
            ))}
          </div>

          {/* Right column - Descriptions */}
          <div className="flex flex-col justify-start space-y-6 text-gray-700 text-base leading-relaxed">
            {infoDescriptions.map((desc, idx) => (
              <p key={idx}>{desc}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Hiring Button */}
      <div className="mt-12 text-center">
        <Link
          href="/careers"
          className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
        >
          We are Hiring
        </Link>
      </div>

      {/* Team Section */}
      <section className="mt-16">
        <h2 className="font-headline text-3xl font-bold mb-8 text-center">
          Meet the Team
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 justify-center max-w-5xl mx-auto">
          {teamMembers.map(({ name, position, avatar }) => (
            <div key={name} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-md overflow-hidden border-2 border-gray-300 shadow-sm">
                <Image
                  src={avatar}
                  alt={name}
                  width={64}
                  height={64}
                  className="object-cover"
                  priority
                />
              </div>
              <p className="mt-2 text-sm font-semibold">{name}</p>
              <p className="text-xs text-muted-foreground">{position}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

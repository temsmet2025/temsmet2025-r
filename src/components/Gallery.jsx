import React from "react";

const Gallery = () => {
  const stats = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="lucide lucide-users w-8 h-8 mx-auto  group-hover:scale-110 transition-smooth"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      value: "500+",
      label: "Attendees",
      sub: "Industry professionals",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="lucide lucide-calendar w-8 h-8 mx-auto  group-hover:scale-110 transition-smooth"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M8 2v4" />
          <path d="M16 2v4" />
          <rect width="18" height="18" x="3" y="4" rx="2" />
          <path d="M3 10h18" />
        </svg>
      ),
      value: "3",
      label: "Days",
      sub: "Of innovation",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="lucide lucide-map-pin w-8 h-8 mx-auto  group-hover:scale-110 transition-smooth"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      value: "12",
      label: "Sessions",
      sub: "Technical presentations",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="lucide lucide-award w-8 h-8 mx-auto  group-hover:scale-110 transition-smooth"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
          <circle cx="12" cy="8" r="6" />
        </svg>
      ),
      value: "12+",
      label: "Speakers",
      sub: "Expert presenters",
    },
  ];
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl text-sky-600 font-bold mb-4">Event Overview</h2>
        <p className="text-lg text-muted-foreground">
          A gathering of minds shaping the future of technology
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="text-sky-600 rounded-lg border bg-card text-card-foreground shadow-sm text-center group hover:shadow-card transition-smooth"
          >
            <div className="p-6 pt-6">
              <div className="mb-4 text-sky-600">{stat.icon}</div>
              <div className="text-3xl font-bold text-sky-600 mb-2">
                {stat.value}
              </div>
              <div className="font-semibold mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.sub}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Image Gallery Section */}
      <div className="mt-8">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold mb-2 text-sky-600">Gala Dinner</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:mx-32">
          {[1, 2, 3, 4].map((num) => (
            <div
              key={num}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 bg-gray-50 flex justify-center items-center"
            >
              <img
                src={`/gallery/gallery_${num}.webp`}
                alt={`Gallery image ${num}`}
                className="w-full h-48 sm:h-56 lg:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              {/* <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;

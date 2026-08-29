import type { Guest } from "@/types/content";

/**
 * Real guests from the show. Bios are drawn from the descriptions on each
 * episode's YouTube upload. `image` currently points at the episode's
 * YouTube thumbnail as an honest stand-in — swap in a real headshot per
 * guest when available (see `image` on each entry).
 */
export const guests: Guest[] = [
  {
    slug: "janet-campbell",
    name: "Janet Campbell",
    title: "Opera Singer & Vocal Teacher",
    organization: "San Francisco Opera",
    shortBio:
      "A classically trained opera singer and vocal teacher who traded the uncertainty of freelance life for a place with the San Francisco Opera.",
    bio: [
      "Janet Campbell is an opera singer and vocal teacher whose career path has been as adventurous as her travel log. Early on, she balanced six different freelance jobs at once — teaching voice, playing piano in a club, and more — as a self-described \"reluctant musician\" piecing together a living in music.",
      "Eventually, Janet traded the instability of that freelance life for the surprising stability and benefits of a place with the San Francisco Opera, a shift she discusses candidly on the show.",
    ],
    image: "/images/guests/janet-campbell.webp",
    topics: [
      "Building a career in music",
      "Freelance life vs. institutional stability",
      "Vocal training and teaching",
      "Reinventing a creative career",
    ],
  },
  {
    slug: "andrew-ly",
    name: "Andrew Ly",
    title: "Founder",
    organization: "Sugar Bowl Bakery",
    shortBio:
      "Escaped Vietnam by boat after three failed attempts and a harrowing month at sea — and went on to build Sugar Bowl Bakery into a national brand.",
    bio: [
      "Andrew Ly grew up in a small, war-torn village in Vietnam. As a young man, he escaped by boat — on his third attempt, after two earlier tries failed — and survived a harrowing month at sea before eventually reaching the United States.",
      "Decades later, Andrew is the founder of Sugar Bowl Bakery, a national brand he built from nothing into a multi-million dollar business. On the show, he recounts the full, unfiltered journey — a story almost too dramatic to believe.",
    ],
    image: "/images/guests/andrew-ly.jpg",
    topics: [
      "Escaping Vietnam as a refugee",
      "Building a national food brand from scratch",
      "Resilience and starting over",
      "Immigrant entrepreneurship",
    ],
    featured: true,
  },
  {
    slug: "jason-ting",
    name: "Jason Ting",
    title: "Wealth Management Advisor",
    organization: "Merrill Lynch",
    shortBio:
      "A top-ranked Wealth Management Advisor at Merrill Lynch whose guiding philosophy — finding the 'win-win-win' — took root running the TV station at UC San Diego.",
    bio: [
      "Jason Ting is a top-ranked Wealth Management Advisor at Merrill Lynch with a distinctive approach to both life and business. On the show, he traces the formative moments that shaped his core philosophy of finding a \"win-win-win\" in every interaction.",
      "That principle took root well before his finance career — Jason first applied it while running the TV station at UC San Diego, and it's shaped the way he thinks about his professional niche ever since.",
    ],
    image: "/images/guests/jason-ting.jpg",
    topics: [
      "Wealth management and finance",
      "Finding win-win-win outcomes",
      "Building a personal philosophy",
      "Leadership in college media",
    ],
  },
  {
    slug: "arif-janmohamed",
    name: "Arif Janmohamed",
    title: "Partner",
    organization: "Lightspeed Venture Partners",
    shortBio:
      "A Partner at Lightspeed Venture Partners whose path started with teaching himself to program as a severely sick child, through building robots in a garage and a hard setback in 2003.",
    bio: [
      "Arif Janmohamed is a Partner at Lightspeed Venture Partners. His story begins with teaching himself to program on an ancient computer as a severely sick child — the start of a winding, persistence-driven path.",
      "From there, Arif built robots in a garage and designed chips for WebTV, before hitting a personal low point in 2003 when he was rejected in a moment that could have ended the journey. He shares how he pushed through it on the show.",
    ],
    image: "/images/guests/arif-janmohamed.webp",
    topics: [
      "Venture capital and investing",
      "Persistence through setbacks",
      "Early hardware and chip design",
      "Self-taught programming",
    ],
    featured: true,
  },
  {
    slug: "ethel-salins",
    name: "Ethel Salins",
    title: "Nathan's Grandmother",
    shortBio:
      "Nathan's grandmother, whose journey of resilience runs from the vibrant streets of 1950s Bombay to the harsh winters of Montreal as a new immigrant.",
    bio: [
      "Ethel Salins is Nathan's grandmother. In this deeply personal episode, she shares a raw and inspiring journey of resilience that spans from the vibrant streets of 1950s Bombay to the harsh winters of Montreal after immigrating.",
      "Ethel pulls back the curtain on what she calls the \"nightmare\" of her early immigrant years — including living in a converted basement and scraping by in a new country — offering a family history rarely told this openly.",
    ],
    image: "/images/guests/ethel-salins.jpg",
    topics: [
      "Immigrant resilience",
      "1950s Bombay",
      "Starting over in Montreal",
      "Family history",
    ],
    featured: true,
  },
  {
    slug: "jose-avila",
    name: "Jose Avila",
    title: "Tech Entrepreneur & Co-Founder",
    organization: "CrowdStar",
    shortBio:
      "A tech entrepreneur and video game co-founder who survived three near-death experiences growing up in Guatemala before moving to the U.S. in 2005.",
    bio: [
      "Jose Avila is a tech entrepreneur and video game co-founder. He grew up in Guatemala, where he survived three near-death experiences, before moving to the United States in 2005.",
      "Jose went on to take on pivotal roles at companies including Easyboard and CrowdStar, where he helped manage massive social gaming platforms — a path he traces from a dramatic childhood to the tech industry on the show.",
    ],
    image: "/images/guests/jose-avila.jpg",
    topics: [
      "Video game industry",
      "Tech entrepreneurship",
      "Immigrating from Guatemala",
      "Scaling social platforms",
    ],
  },
  {
    slug: "teri-handelman",
    name: "Teri Handelman",
    title: "Founder & Educator",
    organization: "Julia Morgan School for Girls & Field Middle School",
    shortBio:
      "Founder of the Julia Morgan School for Girls and Field Middle School, who teaches financial literacy through real-world stock market simulations and champions single-gender education.",
    bio: [
      "Teri Handelman has spent her career transforming education in the Bay Area — founding both the Julia Morgan School for Girls and Field Middle School, and teaching financial literacy through real-world stock market simulations.",
      "On the show, she dives into the unique power of single-gender learning environments, explaining how they foster deep emotional agency and academic growth for both girls and boys.",
    ],
    image: "/images/guests/teri-handelman.webp",
    topics: [
      "Founding independent schools",
      "Financial literacy education",
      "Single-gender education",
      "Bay Area education",
    ],
    featured: true,
  },
];

export function getGuestBySlug(slug: string) {
  return guests.find((guest) => guest.slug === slug);
}

export function getFeaturedGuests() {
  return guests.filter((guest) => guest.featured);
}

// All site copy lives here, so it's easy to edit without touching layout code.

export const site = {
  name: 'Street Motion Studio',
  email: 'hannan@thestreetmotionstudio.com',
  url: 'https://thestreetmotionstudio.com',
  // Add handles when the accounts exist, e.g. 'https://instagram.com/streetmotionstudio'
  socials: {
    instagram: '',
    tiktok: '',
    facebook: '',
    linkedin: '',
  },
}

export const niches = [
  'Cafés',
  'Bakeries',
  'Gyms & boxing clubs',
  'Holiday parks',
  'Cider farms',
  'Breweries',
  'Florists',
  'Barbers & salons',
  'Restaurants',
  'Gift shops',
  'Wedding venues',
  'Car detailers',
]

// Seasonal campaigns. Dates are local UK time. Update these each year.
export const seasons = [
  {
    key: 'black-friday',
    name: 'Black Friday',
    date: '2026-11-27T00:00:00',
    label: 'Fri 27 Nov',
    text: 'Flash-sale ads, countdown posts and offer videos that get people to act now, not "maybe later".',
  },
  {
    key: 'christmas',
    name: 'Christmas',
    date: '2026-12-25T00:00:00',
    label: 'Thu 25 Dec',
    text: 'Festive product shots, gift-guide posts and the kind of feel-good ad people actually share.',
  },
  {
    key: 'new-year',
    name: 'New Year',
    date: '2027-01-01T00:00:00',
    label: 'Fri 1 Jan',
    text: 'January is huge for gyms, wellness and sales. Have your "new year" content ready before everyone else.',
  },
]

export const services = [
  {
    icon: 'play',
    title: 'Promo videos',
    text: '30–60 second cinematic ads built around your real products, your space and your story. Made for Instagram, Facebook, TikTok and your website.',
  },
  {
    icon: 'image',
    title: 'Product & brand images',
    text: 'Campaign-quality product shots, lifestyle scenes and seasonal visuals in your brand style. No photoshoot needed.',
  },
  {
    icon: 'phone',
    title: 'Reels & TikToks',
    text: 'Short vertical clips with a hook in the first two seconds, made to stop the scroll and get shared.',
  },
  {
    icon: 'home',
    title: 'Property walkthroughs',
    text: 'Smooth video tours made from your floor plans and photos. Ideal for holiday parks, lets, venues and agents.',
  },
  {
    icon: 'calendar',
    title: 'Monthly content packs',
    text: 'A steady flow of fresh videos and images every month, planned around your offers and the seasons.',
  },
]

export const packages = [
  {
    name: 'Free sample set',
    price: '£0',
    unit: '',
    blurb: 'See what we can do before you spend a penny.',
    features: [
      '3–5 AI images of your real products',
      'Made in your brand style',
      'Yours to keep and use, no strings',
    ],
    cta: 'Claim free samples',
    featured: false,
  },
  {
    name: 'One-off campaign',
    price: 'from £150',
    unit: '',
    blurb: 'A single promo video or image set for a launch, an offer or a season.',
    features: [
      '30–60s promo video',
      'Vertical and square versions',
      'Up to 2 rounds of tweaks',
      'Add 3 Reels/TikToks for £75',
    ],
    badge: 'Founding offer: see it first, pay what it’s worth',
    cta: 'Start a campaign',
    featured: true,
  },
  {
    name: 'Monthly content',
    price: 'from £300',
    unit: '/month',
    blurb: 'Always-on content so your feed never goes quiet.',
    features: [
      'Fresh videos and images every month',
      'Planned around your offers and seasons',
      'Priority turnaround',
      'Rolling monthly, no long contract',
    ],
    cta: 'Talk to us',
    featured: false,
  },
]

// Concept work for fictional brands. Replace the images in /public/portfolio
// with your Higgsfield renders (same file names), and swap in real client
// work as you get it (with the client's permission).
export const work = [
  { brand: 'Larkspur Bakehouse', project: 'Christmas cookie campaign', category: 'Food & drink', image: '/portfolio/concept-bakery.jpg' },
  { brand: 'Ember & Bean Coffee', project: 'Winter menu launch', category: 'Food & drink', image: '/portfolio/concept-coffee.jpg' },
  { brand: 'Kinetic Boxing Lab', project: 'New Year membership drive', category: 'Fitness', image: '/portfolio/concept-boxing.jpg' },
  { brand: 'Old Thorn Cider Co.', project: 'Gift set product shots', category: 'Food & drink', image: '/portfolio/concept-cider.jpg' },
  { brand: 'Saltmarsh Lodges', project: 'Lodge walkthrough stills', category: 'Hospitality', image: '/portfolio/concept-lodges.jpg' },
  { brand: 'Wildbloom Florals', project: 'Festive wreath collection', category: 'Retail', image: '/portfolio/concept-florist.jpg' },
]

export const steps = [
  {
    title: 'Tell us about your business',
    text: 'Send your website or Instagram. We study your products, branding and customers.',
  },
  {
    title: 'Get your free samples',
    text: 'Within a couple of days you get a set of AI images of your real products, free to keep.',
  },
  {
    title: 'We make your video',
    text: 'We write the idea, script and shots, then produce it. You approve every step.',
  },
  {
    title: 'Post it. Sell more. Repeat.',
    text: 'You get files sized for every platform. Keep the momentum going with monthly content.',
  },
]

export const values = [
  {
    title: 'Local first',
    text: 'We’re based in Bristol and work with independent businesses across Bristol and Somerset.',
  },
  {
    title: 'Honest about AI',
    text: 'We tell you exactly what’s AI-made and never pass it off as anything else.',
  },
  {
    title: 'True to your products',
    text: 'Your products shown as they really are. Nothing you don’t sell, no misleading shots.',
  },
  {
    title: 'Fast and flexible',
    text: 'Days, not weeks. Small tweaks are included, and you sign off before anything goes live.',
  },
]

export const faqs = [
  {
    q: 'What exactly do you make?',
    a: 'Promo videos, product and brand images, short-form Reels and TikToks, property walkthrough videos and monthly content packs, all made with AI for local businesses.',
  },
  {
    q: 'Is everything made with AI?',
    a: 'Yes. We use the latest AI image and video tools, guided by your real photos, products and branding. We’re always upfront about it.',
  },
  {
    q: 'Will it actually look like my products?',
    a: 'That’s the whole point. We work from your real product photos, packaging and branding, and you approve everything before you post it. We never add products you don’t sell.',
  },
  {
    q: 'Do I need to film anything or book a photoshoot?',
    a: 'No. A few photos of your products or space help, and that’s it. No film crew, no studio, no disruption to your day.',
  },
  {
    q: 'How long does it take?',
    a: 'Free samples usually take a couple of days. Most promo videos are ready within 3–5 days, depending on how complex the idea is.',
  },
  {
    q: 'How much does it cost?',
    a: 'Sample sets are free. One-off campaigns start from £150 and monthly content starts from £300 a month. Founding clients this season can see their video first and pay what they think it’s worth.',
  },
  {
    q: 'Who owns the content?',
    a: 'Once it’s paid for, it’s yours to use on your social media, website, in-store screens and ads.',
  },
  {
    q: 'Do you only work in Bristol?',
    a: 'We’re based in Bristol and focus on Bristol and Somerset, including Bath, Weston-super-Mare, Taunton and Wells. Everything is done online, so we can work with businesses anywhere in the UK.',
  },
  {
    q: 'Can you help with Black Friday, Christmas and New Year?',
    a: 'Yes, it’s our busiest season. We can plan a run of offer videos, festive product shots and January promos so you’re ready before your competitors.',
  },
]

export const areas = [
  'Bristol',
  'Bath',
  'Weston-super-Mare',
  'Clevedon',
  'Portishead',
  'Keynsham',
  'Taunton',
  'Wells',
  'Cheddar',
  'Frome',
  'Glastonbury',
  'Yeovil',
]

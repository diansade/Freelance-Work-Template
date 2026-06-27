import {
  FaBowlFood,
  FaBreadSlice,
  FaClock,
  FaEnvelope,
  FaFacebookF,
  FaFire,
  FaInstagram,
  FaLeaf,
  FaLocationDot,
  FaMugHot,
  FaPhone,
  FaShieldHeart,
  FaSquareParking,
  FaStar,
  FaTruckFast,
  FaTwitter,
  FaUserTie,
  FaUtensils,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa6';

export const restaurant = {
  name: 'Aurora Table',
  tagline: 'Contemporary Indian dining with fire, craft, and comfort.',
  description:
    'A warm, premium neighborhood restaurant where chef-led cooking, fresh market ingredients, and family-friendly service meet in a polished modern space.',
  phone: '+91 98765 43210',
  whatsapp: '+919876543210',
  email: 'hello@auroratable.com',
  address: '24 Ember Street, Park District, Kolkata, India',
  mapQuery: 'Park Street Kolkata India',
  parking: 'Valet parking and two-wheeler parking available from 12 PM onward.',
  hours: [
    'Mon - Thu: 12:00 PM - 10:30 PM',
    'Fri - Sun: 12:00 PM - 11:30 PM',
  ],
  socials: [
    { label: 'Instagram', href: 'https://instagram.com', icon: FaInstagram },
    { label: 'Facebook', href: 'https://facebook.com', icon: FaFacebookF },
    { label: 'Twitter', href: 'https://twitter.com', icon: FaTwitter },
    { label: 'YouTube', href: 'https://youtube.com', icon: FaYoutube },
  ],
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Reservation', href: '#reservation' },
  { label: 'Contact', href: '#contact' },
];

export const heroImage =
  'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1800&q=85';

export const aboutImage =
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1100&q=85';

export const specials = [
  {
    name: 'Tandoori Prawn Flame',
    description: 'Charred tiger prawns, smoked chili butter, coriander lime dust.',
    price: 'Rs. 649',
    image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Saffron Murgh Biryani',
    description: 'Dum-cooked basmati rice, tender chicken, saffron, fried onion.',
    price: 'Rs. 429',
    image: 'https://images.unsplash.com/photo-1633945274309-2c16c9682a8c?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Molten Gulab Cheesecake',
    description: 'Cardamom cheesecake, rose syrup glaze, toasted pistachio.',
    price: 'Rs. 299',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=900&q=80',
  },
];

export const menuCategories = [
  {
    category: 'Starters',
    icon: FaBreadSlice,
    items: [
      {
        name: 'Crispy Lotus Stem',
        description: 'Honey chili glaze, sesame, scallions.',
        price: 'Rs. 279',
        image: 'https://images.unsplash.com/photo-1604909052743-94e838986d24?auto=format&fit=crop&w=700&q=80',
      },
      {
        name: 'Paneer Tikka Trio',
        description: 'Three marinades, mint chutney, onion laccha.',
        price: 'Rs. 349',
        image: 'https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&w=700&q=80',
      },
    ],
  },
  {
    category: 'Main Course',
    icon: FaUtensils,
    items: [
      {
        name: 'Butter Chicken Royale',
        description: 'Slow tomato makhani, kasuri methi, cream.',
        price: 'Rs. 449',
        image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=700&q=80',
      },
      {
        name: 'Dal Bukhara',
        description: 'Black lentils simmered overnight with smoked butter.',
        price: 'Rs. 329',
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80',
      },
    ],
  },
  {
    category: 'Biryani',
    icon: FaBowlFood,
    items: [
      {
        name: 'Hyderabadi Mutton Biryani',
        description: 'Aromatic rice, tender mutton, salan, raita.',
        price: 'Rs. 549',
        image: 'https://images.unsplash.com/photo-1642821373181-696a54913e93?auto=format&fit=crop&w=700&q=80',
      },
      {
        name: 'Subz Dum Biryani',
        description: 'Seasonal vegetables, saffron, fried onion.',
        price: 'Rs. 359',
        image: 'https://images.unsplash.com/photo-1563379091339-03246963d4f6?auto=format&fit=crop&w=700&q=80',
      },
    ],
  },
  {
    category: 'Chinese',
    icon: FaFire,
    items: [
      {
        name: 'Schezwan Noodles',
        description: 'Wok-tossed noodles, chili garlic, garden vegetables.',
        price: 'Rs. 289',
        image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=700&q=80',
      },
      {
        name: 'Dragon Chicken',
        description: 'Crisp chicken, peppers, cashew, sweet heat.',
        price: 'Rs. 389',
        image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=700&q=80',
      },
    ],
  },
  {
    category: 'South Indian',
    icon: FaLeaf,
    items: [
      {
        name: 'Ghee Roast Dosa',
        description: 'Crisp fermented crepe, potato masala, chutneys.',
        price: 'Rs. 219',
        image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=700&q=80',
      },
      {
        name: 'Idli Podi Platter',
        description: 'Steamed idli, gunpowder, sambar, coconut chutney.',
        price: 'Rs. 179',
        image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&w=700&q=80',
      },
    ],
  },
  {
    category: 'Desserts',
    icon: FaStar,
    items: [
      {
        name: 'Sizzling Brownie',
        description: 'Walnut brownie, vanilla bean ice cream, hot fudge.',
        price: 'Rs. 259',
        image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=80',
      },
      {
        name: 'Phirni Brulee',
        description: 'Rice custard, caramelized sugar, pistachio.',
        price: 'Rs. 229',
        image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=700&q=80',
      },
    ],
  },
  {
    category: 'Drinks',
    icon: FaMugHot,
    items: [
      {
        name: 'Kokum Cooler',
        description: 'Kokum, lime, mint, sparkling soda.',
        price: 'Rs. 169',
        image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=700&q=80',
      },
      {
        name: 'Masala Cold Brew',
        description: 'Slow coffee, jaggery syrup, spice foam.',
        price: 'Rs. 199',
        image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=700&q=80',
      },
    ],
  },
];

export const features = [
  { title: 'Fresh Ingredients', text: 'Daily market produce and house-ground spices.', icon: FaLeaf },
  { title: 'Fast Service', text: 'Thoughtful prep keeps dine-in and takeaway smooth.', icon: FaTruckFast },
  { title: 'Experienced Chefs', text: 'A senior kitchen team trained in regional classics.', icon: FaUserTie },
  { title: 'Affordable Prices', text: 'Premium plating without uncomfortable bills.', icon: FaShieldHeart },
  { title: 'Clean Environment', text: 'Visible hygiene standards across kitchen and service.', icon: FaStar },
  { title: 'Best Taste', text: 'Balanced spice, bold aroma, memorable finishing touches.', icon: FaFire },
];

export const popularDishes = [
  {
    name: 'Charcoal Chicken Kebab',
    price: 'Rs. 399',
    rating: '4.9',
    description: 'Juicy boneless kebabs finished over live charcoal.',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Creamy Truffle Pasta',
    price: 'Rs. 479',
    rating: '4.8',
    description: 'Silky cream sauce, mushrooms, parmesan, herbs.',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Kolkata Kathi Roll',
    price: 'Rs. 249',
    rating: '4.7',
    description: 'Layered paratha, spiced filling, onion, signature sauce.',
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80',
  },
];

export const galleryImages = [
  {
    alt: 'Premium restaurant dining room with warm lights',
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
  },
  {
    alt: 'Chef plating a modern dish',
    src: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=900&q=80',
  },
  {
    alt: 'Shared restaurant table with Indian dishes',
    src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80',
  },
  {
    alt: 'Elegant cocktail on a restaurant table',
    src: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=900&q=80',
  },
  {
    alt: 'Restaurant dessert with fruit garnish',
    src: 'https://images.unsplash.com/photo-1488477304112-4944851de03d?auto=format&fit=crop&w=900&q=80',
  },
  {
    alt: 'Restaurant kitchen preparing fresh food',
    src: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=80',
  },
];

export const reviews = [
  {
    name: 'Aarav Sen',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    rating: 5,
    text: 'The biryani had depth, the service was warm, and the dining room feels premium without being stiff.',
  },
  {
    name: 'Maya Kapoor',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80',
    rating: 5,
    text: 'Beautifully balanced flavors. The staff handled our family dinner with real care and perfect timing.',
  },
  {
    name: 'Rohan Mehta',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    rating: 5,
    text: 'Every plate looked intentional. The prawn starter and kokum cooler are absolutely worth returning for.',
  },
];

export const contactCards = [
  { label: 'Phone', value: restaurant.phone, href: `tel:${restaurant.phone.replaceAll(' ', '')}`, icon: FaPhone },
  { label: 'WhatsApp', value: 'Message us', href: `https://wa.me/${restaurant.whatsapp.replace('+', '')}`, icon: FaWhatsapp },
  { label: 'Email', value: restaurant.email, href: `mailto:${restaurant.email}`, icon: FaEnvelope },
  { label: 'Address', value: restaurant.address, href: '#location', icon: FaLocationDot },
  { label: 'Parking', value: 'Valet available', href: '#location', icon: FaSquareParking },
  { label: 'Hours', value: 'Open daily', href: '#location', icon: FaClock },
];

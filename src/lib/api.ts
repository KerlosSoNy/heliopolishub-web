export async function fetchProducts() {
  // Simulating API call with delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  return [
    {
      id: 1,
      name: 'Premium Headphones',
      price: '\$299.99',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
      description: 'High-quality audio experience'
    },
    {
      id: 2,
      name: 'Wireless Keyboard',
      price: '\$79.99',
      image: 'https://images.unsplash.com/photo-1587829191301-4b5e1f07dcc6?w=500&h=500&fit=crop',
      description: 'Ergonomic wireless keyboard'
    },
    {
      id: 3,
      name: 'USB-C Hub',
      price: '\$49.99',
      image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&h=500&fit=crop',
      description: 'Multi-port connectivity hub'
    },
    {
      id: 4,
      name: '4K Webcam',
      price: '\$199.99',
      image: 'https://images.unsplash.com/photo-1598986646514-8c6d1ca8f3e3?w=500&h=500&fit=crop',
      description: 'Crystal clear video quality'
    },
  ];
}

export async function fetchBlogPosts() {
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  return [
    {
      id: 1,
      title: 'Getting Started with Next.js 14',
      excerpt: 'Learn the latest features and improvements...',
      date: '2024-06-10'
    },
    {
      id: 2,
      title: 'Mastering Tailwind CSS',
      excerpt: 'Advanced styling techniques and best practices...',
      date: '2024-06-08'
    },
    {
      id: 3,
      title: 'React Server Components Deep Dive',
      excerpt: 'Understanding the future of React development...',
      date: '2024-06-05'
    },
  ];
}
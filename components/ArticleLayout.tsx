import React from 'react';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';

interface ArticleLayoutProps {
  children: React.ReactNode;
  category: string;
  title: string;
  slug: string;
  datePublished: string;
}

const ArticleLayout: React.FC<ArticleLayoutProps> = ({ children, category, title, slug, datePublished }) => {
  
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "image": `https://picsum.photos/seed/${slug}/800/500`,
    "datePublished": datePublished,
    "dateModified": datePublished,
    "author": {
      "@type": "Organization",
      "name": "JelantahGO"
    },
    "publisher": {
      "@type": "Organization",
      "name": "JelantahGO",
      "logo": {
        "@type": "ImageObject",
        "url": "https://jelantahgo.example.com/logo.png"
      }
    },
    "description": category
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "name": "Blog",
      "item": "https://jelantahgo.example.com/#/blog"
    },{
      "@type": "ListItem",
      "position": 2,
      "name": title
    }]
  };

  return (
    <div className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="relative py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-12">
            
            <main className="lg:col-span-2">
                <div className="text-lg max-w-prose mx-auto">
                    <h1>
                        <span className="block text-base text-center text-[#c4a648] font-semibold tracking-wide uppercase">{category}</span>
                        <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl font-serif">{title}</span>
                    </h1>
                </div>
                <div className="mt-6 prose prose-lg text-gray-500 mx-auto">
                    {children}
                </div>
            </main>

            <div className="mt-16 lg:mt-0">
              <Sidebar />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleLayout;
import React from 'react';
import { Link } from 'react-router-dom';
import { blogs } from '../data/blogs';

export default function Blog() {
  return (
    <div className="pt-24 lg:pt-32 pb-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-[4rem] text-primary font-['Work_Sans',sans-serif] font-medium tracking-tight mb-6">
            Insights & Resources
          </h1>
          <p className="text-[17px] text-text-muted max-w-2xl mx-auto leading-relaxed">
            Stay updated with the latest trends, tips, and strategies in finance, accounting, and business growth.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-border-subtle flex flex-col h-full">
              <div className="h-[240px] overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-[13px] font-medium text-text-secondary mb-4">
                  <span>{blog.date}</span>
                  <span className="w-1 h-1 rounded-full bg-primary/30"></span>
                  <span>{blog.author}</span>
                </div>
                
                <h3 className="text-2xl text-primary font-medium leading-snug mb-4">
                  {blog.title}
                </h3>
                
                <p className="text-[15px] text-text-muted leading-relaxed mb-8 flex-grow">
                  {blog.excerpt}
                </p>
                
                <Link 
                  to={`/blog/${blog.id}`}
                  className="inline-flex items-center gap-2 text-primary font-semibold text-[14px] hover:text-secondary transition-colors mt-auto"
                >
                  Read More 
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

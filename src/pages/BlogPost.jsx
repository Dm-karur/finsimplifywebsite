import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogs } from '../data/blogs';

export default function BlogPost() {
  const { id } = useParams();
  const blog = blogs.find(b => b.id === id);

  if (!blog) {
    return (
      <div className="pt-32 pb-20 text-center min-h-[60vh] flex flex-col justify-center items-center">
        <h1 className="text-4xl text-primary font-medium mb-4">Blog not found</h1>
        <Link to="/blog" className="text-secondary hover:underline">Return to all blogs</Link>
      </div>
    );
  }

  return (
    <div className="pt-4 lg:pt-8 pb-20 bg-surface">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link to="/blog" className="inline-flex items-center gap-2 text-text-secondary hover:text-primary transition-colors mb-10 text-[14px] font-medium">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to all blogs
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-12 lg:gap-16 items-start">
          
          {/* Main Article Content */}
          <article className="flex flex-col">
            {/* Header */}
            <div className="mb-10">
              <div className="flex items-center gap-4 text-[14px] font-medium text-text-secondary mb-6">
                <span>{blog.date}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-primary/30"></span>
                <span>{blog.author}</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] text-black font-['Work_Sans',sans-serif] font-medium tracking-tight mb-8">
                {blog.title}
              </h1>
            </div>
            
            {/* Featured Image */}
            <div className="rounded-[2rem] overflow-hidden mb-12 shadow-sm">
              <img 
                src={blog.image} 
                alt={blog.title} 
                className="w-full h-auto md:h-[500px] object-cover"
              />
            </div>
            
            {/* Content */}
            <div 
              className="prose prose-lg max-w-none text-black [&_p]:text-black [&_p]:text-[16px] md:[&_p]:text-[17px] [&_p]:leading-relaxed [&_p]:mb-6 [&_h3]:text-2xl md:[&_h3]:text-3xl [&_h3]:text-black [&_h3]:font-medium [&_h3]:mt-10 [&_h3]:mb-4 [&_ul]:list-none [&_ul]:pl-0 [&_ul]:mb-6 [&_li]:text-black [&_li]:mb-2"
              dangerouslySetInnerHTML={{ __html: blog.content }} 
            />
            
            {/* Blog CTA */}
            {blog.ctaText && (
              <div className="mt-16 bg-[#F9F9F8] rounded-[2rem] p-10 md:p-12 border border-border-subtle text-center shadow-sm">
                <h3 className="text-3xl md:text-4xl text-primary font-medium mb-6 leading-snug max-w-2xl mx-auto">
                  {blog.ctaText}
                </h3>
                <Link 
                  to="/contact" 
                  className="inline-flex bg-primary text-white text-[15px] font-semibold px-10 py-4 rounded-full hover:bg-secondary hover:text-primary transition-colors shadow-md"
                >
                  Contact Us
                </Link>
              </div>
            )}
          </article>

          {/* Right Sidebar: Other Blogs */}
          <aside className="lg:sticky lg:top-32 flex flex-col space-y-10 mt-10 lg:mt-0">
            <div>
              <h3 className="text-[22px] text-primary font-medium border-b border-border-subtle pb-4 mb-6">
                Recent Insights
              </h3>
              <div className="flex flex-col space-y-6">
                {blogs.filter(b => b.id !== blog.id).slice(0, 4).map((otherBlog) => (
                  <Link key={otherBlog.id} to={`/blog/${otherBlog.id}`} className="group flex gap-4 items-center">
                    <div className="w-[90px] h-[90px] shrink-0 rounded-xl overflow-hidden bg-gray-100 shadow-sm">
                      <img src={otherBlog.image} alt={otherBlog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-text-secondary uppercase tracking-[0.1em] mb-1.5">{otherBlog.date}</span>
                      <h4 className="text-[15px] font-medium text-primary leading-snug group-hover:text-secondary transition-colors line-clamp-2">
                        {otherBlog.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Sidebar CTA Card */}
            <div className="p-8 bg-secondary rounded-[2rem] shadow-sm flex flex-col justify-between relative overflow-hidden">
              <div className="relative z-10">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mb-6">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <h4 className="text-[22px] text-primary font-medium mb-3 leading-snug">Need Expert Financial Advice?</h4>
                <p className="text-[14px] text-primary/80 mb-8 leading-relaxed">Speak directly with our team to discover how we can optimize your business strategy.</p>
                <Link to="/contact" className="inline-flex bg-primary text-white text-[13px] font-semibold px-6 py-3 rounded-full hover:bg-primary-hover transition-colors shadow-md">
                  Get in Touch
                </Link>
              </div>
            </div>
          </aside>

        </div>
        
      </div>
    </div>
  );
}

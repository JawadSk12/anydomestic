import React from 'react';
import { BLOG_POSTS } from '../constants/data';
import { Calendar, Clock, ArrowRight, Sparkles } from 'lucide-react';

export const Blog: React.FC = () => {
  return (
    <div className="container-page py-16 text-left flex flex-col gap-12">
      <div className="text-center flex flex-col gap-3">
        <span className="text-xs font-bold uppercase text-verified-500 tracking-wider">Safety & Help Guides</span>
        <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-ink leading-tight">
          Any Domestic Knowledge Base
        </h1>
        <p className="text-sm sm:text-base text-ink-soft max-w-xl mx-auto leading-relaxed">
          Expert advice, employer legal guidelines, safety checklists, and tips for managing household helper relationships.
        </p>
      </div>

      {/* Featured Post */}
      {BLOG_POSTS.length > 0 && (
        <article className="bg-paper-raised border border-line rounded-3xl overflow-hidden shadow-soft group hover:shadow-lifted transition-shadow grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-7 h-64 lg:h-96 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=800&q=80"
              alt="Featured post"
              className="w-full h-full object-cover group-hover:scale-101 transition-transform duration-500"
            />
          </div>
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col gap-4">
            <span className="text-[10px] font-extrabold uppercase text-verified-500 tracking-widest flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 fill-current" /> Featured Article
            </span>
            <h2 className="font-display text-2xl font-bold text-ink group-hover:text-verified-500 transition-colors">
              {BLOG_POSTS[0].title}
            </h2>
            <p className="text-sm text-ink-soft leading-relaxed">
              {BLOG_POSTS[0].summary}
            </p>
            <div className="flex items-center gap-4 text-xs text-slate font-medium">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" /> {BLOG_POSTS[0].date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> {BLOG_POSTS[0].readTime}
              </span>
            </div>
            <button className="inline-flex items-center gap-1.5 text-xs font-bold text-verified-500 hover:text-verified-600 mt-2 transition-colors focus:outline-none">
              <span>Read Full Article</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </article>
      )}

      {/* Grid of Other Posts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
        {BLOG_POSTS.map((post) => (
          <article key={post.id} className="bg-paper-raised border border-line rounded-2xl overflow-hidden shadow-soft flex flex-col h-full group hover:shadow-lifted transition-shadow">
            <div className="h-48 overflow-hidden bg-paper-sunken">
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="p-5 flex flex-col flex-1 gap-3.5">
              <span className="text-[10px] font-extrabold uppercase text-verified-500 tracking-wider">
                {post.category}
              </span>
              <h3 className="font-display text-base sm:text-lg font-bold text-ink group-hover:text-verified-500 transition-colors leading-snug">
                {post.title}
              </h3>
              <p className="text-xs sm:text-sm text-ink-soft leading-relaxed line-clamp-3">
                {post.summary}
              </p>
              <div className="flex items-center justify-between border-t border-line/60 pt-4 mt-auto">
                <div className="flex items-center gap-3 text-[10px] text-slate font-semibold">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                </div>
                <button className="text-[10px] font-bold text-verified-500 hover:text-verified-600 flex items-center gap-0.5">
                  <span>Read</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

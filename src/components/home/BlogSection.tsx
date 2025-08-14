import React from 'react';
import { ArrowRight } from 'lucide-react';
import Container from '../ui/Container';
import { blogPosts } from '../../data/blog';

const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="py-16 bg-pink-50">
      <Container>
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">From Our Blog</h2>
            <p className="mt-2 text-gray-600">Latest news, tips, and updates</p>
          </div>
          <a 
            href="#" 
            className="mt-4 md:mt-0 text-black font-medium flex items-center gap-1 hover:text-pink-400 transition-colors"
          >
            View All Posts <ArrowRight size={16} />
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2 flex items-center justify-between">
                  <span>{post.date}</span>
                  <span>By {post.author}</span>
                </div>
                <h3 className="font-semibold text-xl mb-2 hover:text-pink-400 transition-colors">
                  <a href="#">{post.title}</a>
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a 
                  href="#" 
                  className="text-black font-medium inline-flex items-center gap-1 hover:text-pink-400 transition-colors"
                >
                  Read More <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default BlogSection;
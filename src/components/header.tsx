import React from 'react';
import { Menu, X } from 'lucide-react';
import { navItems } from '@/data/navItems';

function header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleScroll = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };
  return (
    <header className="bg-[#020202] tablet:w-[750px] laptop:w-[900px] sticky mx-auto top-0 tablet:top-12 z-50 tablet:rounded-full tablet:border-[0.5px] tablet:border-[#2BC016]">
      <nav className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div className="flex-shrink-0">
            <a href="/">
              <img src="/D.svg" alt="" />
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={handleScroll(item.href.substring(1))}
                className="text-white/50 hover:text-white/75 transition-colors duration-200 text-base font-medium font-onest"
              >
                {item.label}
              </a>
            ))}
          </div>
          <button className="hidden md:flex items-center">
            <img
              src="https://images.unsplash.com/photo-1529528744093-6f8abeee511d?auto=format&fit=crop&w=32"
              alt="Spanish"
              className="h-6 w-8 object-cover rounded"
            />
          </button>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white/50 hover:text-white/75 p-2"
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={`#${item.href.substring(1)}`}
                  onClick={handleScroll(item.href.substring(1))}
                  className="text-white/50 hover:text-white/75 block px-3 py-2 text-base font-onest"
                >
                  {item.label}
                </a>
              ))}
              <div className="px-3 py-2">
                <img
                  src="https://images.unsplash.com/photo-1529528744093-6f8abeee511d?auto=format&fit=crop&w=32"
                  alt="Spanish"
                  className="h-6 w-8 object-cover rounded"
                />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default header;

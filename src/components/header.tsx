import React, { useContext } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { LanguageContext } from '@/context/LanguageContext';
import { navItems } from '@/data/navItems';

function header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { language, setLanguage, translations } = useContext(LanguageContext);
  const [isLangMenuOpen, setIsLangMenuOpen] = React.useState(false);
  const handleScroll = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    setIsLangMenuOpen(false);
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
          <div className="relative hidden md:flex items-center ">
            <button
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className="flex items-center "
            >
              <img
                src={`${language}.svg`}
                alt={language}
                className="h-6 w-8 object-cover rounded"
              />
              <ChevronDown
                className={`ml-2 transition-transform ${
                  isLangMenuOpen ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </button>
            {isLangMenuOpen && (
              <div className="absolute top-full left-0 mt-4 bg-[#020202] rounded shadow-md text-[18px] font-onest">
                <ul>
                  {['es', 'en', 'pt'].map((lang) => (
                    <li key={lang}>
                      <button
                        className="flex items-center hover:bg-gray-700 w-[70px] justify-center"
                        onClick={() => handleLanguageChange(lang)}
                      >
                        <img
                          src={`${lang}.svg`}
                          alt={lang}
                          className="w-12 h-12 rounded px-2"
                        />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className="flex items-center ml-4"
            >
              <img
                src={`${language}.svg`}
                alt={language}
                className="h-6 w-8 object-cover rounded"
              />
              <ChevronDown
                className={`ml-2 transition-transform ${
                  isLangMenuOpen ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </button>
          </div>
        </div>

        {isLangMenuOpen && (
          <div className="md:hidden absolute top-full left-0 mt-4 bg-[#020202] rounded shadow-md text-[18px] font-onest">
            <ul>
              {['es', 'pt', 'en'].map((lang) => (
                <li key={lang}>
                  <button
                    className="flex items-center hover:bg-gray-700 w-[70px] justify-center"
                    onClick={() => handleLanguageChange(lang)}
                  >
                    <img
                      src={`${lang}.svg`}
                      alt={lang}
                      className="w-12 h-12 rounded px-2"
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

export default header;

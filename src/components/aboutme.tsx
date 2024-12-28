import React, { useContext } from 'react';
import { socialLinks } from '@/data/socialLinks';
import { skillCards } from '@/data/skillCards';
import { LanguageContext } from '@/context/LanguageContext';

interface SkillBoxProps {
  textKey: 'skill1' | 'skill2';
  circleClassName: string;
}

const BlurCircle: React.FC<{
  className: string;
}> = ({ className }) => (
  <div
    id="circle"
    className={`absolute rounded-full opacity-80 ${className}`}
  />
);

const SocialLinks: React.FC = () => {
  return (
    <div className="flex flex-row gap-x-6 justify-center">
      {socialLinks.map((link) => (
        <a
          key={link.alt}
          href={link.href}
          className="w-5 h-5 tablet:w-3.5  tablet:h-3.5 laptop:w-6 laptop:h-6"
        >
          <img src={link.icon} alt={link.alt} />
        </a>
      ))}
    </div>
  );
};

const SkillBox: React.FC<SkillBoxProps> = ({ textKey, circleClassName }) => {
  const { translations } = useContext(LanguageContext);

  return (
    <div className="bg-[#020202] rounded-tl-[35px] rounded-br-[35px] rounded-tr-[12px] rounded-bl-[12px] border-[#BEFFC7] border-[0.5px] relative overflow-hidden p-6 h-[220px] tablet:h-[140px] laptop:h-[200px] items-center flex flex-col justify-center">
      <p className="max-w-[200px] opacity-75 text-center font-onest text-[13px] tablet:text-[12px] laptop:text-[17px] z-10">
        {translations[textKey]}
      </p>
      <BlurCircle className={circleClassName} />
    </div>
  );
};

const aboutme: React.FC = () => {
  const { translations } = useContext(LanguageContext);
  return (
    <section
      id="aboutme"
      className="relative z-10 justify-center mx-auto items-center flex flex-col bg-[#020202] pb-60"
    >
      <div className="flex justify-center  pt-24">
        <h1 className="font-timegoing text-[#2BC016] text-[50px] laptop:text-[90px]">
          {translations.aboutMeTitle}
        </h1>
      </div>

      <div className="flex flex-col tablet:flex-row items-center gap-4 mb-4 m-8">
        <article className="text-white">
          <div className="bg-[#020202] rounded-tl-[15px] rounded-br-[15px] rounded-tr-[35px] rounded-bl-[35px] border-[#BEFFC7] border-[0.5px] relative overflow-hidden p-6">
            <BlurCircle className="w-[250px] h-[250px] bg-[#A9D8B8] blur-[60px] left-[0%] -translate-x-1/2 -translate-y-[80%]" />
            <div className="flex flex-col tablet:flex-row">
              <h1 className="font-onest text-[24px] max-w-[400px] laptop:max-w-64 mb-4 tablet:text-[16px] laptop:text-[28px] laptop:mr-32">
                {translations.aboutMePassion}
              </h1>
              <SocialLinks />
            </div>
            <p className="mt-4 max-w-[320px] opacity-75 font-onest text-[13px] tablet:text-[12px] laptop:text-[18px] font-light">
              {translations.aboutMeDescription}
            </p>
            <BlurCircle className="w-[450px] h-[450px] bg-[#72705B] blur-[125px] left-[100%] -translate-x-1/2 -translate-y-[40%]" />
          </div>
        </article>

        <article className="text-white">
          <div className="bg-[#020202] rounded-tl-[25px] rounded-br-[25px] rounded-tr-[10px] rounded-bl-[10px] border-[#BEFFC7] border-[0.5px] relative overflow-hidden mb-4">
            <h1 className="font-onest text-[25px] text-center p-1 tablet:text-[18px] laptop:text-[30px]">
              {translations.skillsTitle}
            </h1>
            <BlurCircle className="w-[250px] h-[250px] bg-[#387D7A] blur-[60px] left-[100%] -translate-x-1/2 -translate-y-[80%]" />
          </div>
          <div className="flex flex-row items-center gap-4 font-light">
            {skillCards.map((card, index) => (
              <SkillBox
                key={index}
                textKey={card.textKey}
                circleClassName={card.circleClassName}
              />
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};

export default aboutme;

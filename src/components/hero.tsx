import React, { useContext } from 'react';
import { LanguageContext } from '@/context/LanguageContext';

function hero() {
  const { translations } = useContext(LanguageContext);
  return (
    <section
      id="home"
      className="relative top-0 left-0 w-full h-screen justify-center mx-auto items-center flex flex-col z-0 min-h-[40vh]"
    >
      <div className="z-10 justify-center items-center flex flex-col mb-8">
        <h1
          className="font-onest text-white text-[30px] laptop:text-[50px] -mb-5"
          style={{ fontWeight: 700 }}
        >
          {translations.hello}
        </h1>
        <div className="flex flex-row gap-4 text-[50px] laptop:text-[100px] laptop:-mt-6">
          <p className="font-timegoing text-[#2BC016] tracking-[0.01em] ">
            David
          </p>
          <p className="font-timegoing text-[#2BC016]  ml-[5px] tracking-[0.04em]">
            Montaño
          </p>
        </div>
        <h2
          className="font-onest text-[18px] text-[#fff] max-w-64 tablet:max-w-96 text-center laptop:max-w-[650px] laptop:text-[24px]"
          style={{ fontWeight: 200 }}
        >
          {translations.heroSubtext}
        </h2>
      </div>
      <div
        className="flex flex-col tablet:flex-row gap-y-5 z-10 text-[14px] tablet:space-x-6 laptop:text-[20px] laptop:space-x-12"
        style={{ fontWeight: 600 }}
      >
        <button
          className="px-12 py-2 rounded-xl font-onest border-[0.5px] border-[#2BC016] bg-[#395E66] bg-opacity-15 text-white hover:bg-opacity-20 transition-all"
          onClick={() =>
            window.open(
              'https://www.linkedin.com/in/davidmonta%C3%B1o25?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BvkbHAtPGSFe5tfDelUna%2BA%3D%3D',
              '_blank',
              'noopener,noreferrer'
            )
          }
        >
          {translations.contactMe}
        </button>
        <button
          className="px-12 py-2 rounded-xl font-onest border-[0.5px] border-white text-[#2BBD1A] bg-[#2BBD1C] bg-opacity-15 hover:bg-opacity-20 transition-all"
          onClick={() => (window.location.href = '#projects')}
        >
          {translations.projectsButton}
        </button>
        <button
          className="px-12 py-2 rounded-xl font-onest border-[0.5px] border-[#b1f049] text-white bg-[#b1f049] bg-opacity-15 hover:bg-opacity-20 transition-all"
          onClick={() => {
            const link = document.createElement('a');
            link.href = '/CV.pdf';
            link.setAttribute('download', 'CV.pdf');
            link.click();
          }}
        >
          {translations.CV}
        </button>
      </div>
      <div className=" absolute w-[320px] h-[1000px] m:w-[375px] tablet:w-[800px] laptopL:w-[1400px] rounded-full bg-[#26A96C] opacity-30 blur-[200px] left-1/2 top-[120%] -translate-x-1/2 -translate-y-1/2" />
    </section>
  );
}

export default hero;

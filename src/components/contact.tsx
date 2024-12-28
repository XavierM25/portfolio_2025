import React from 'react';
import IconCloudDemo from './IconsCloud';

const BlurCircle: React.FC<{
  className: string;
}> = ({ className }) => (
  <div
    id="circle"
    className={`absolute rounded-full opacity-80 ${className}`}
  />
);

function contact() {
  return (
    <section
      id="contact"
      className="z-10 flex flex-col relative items-center justify-center bg-[#020202] pb-60"
    >
      <div className="flex ">
        <h1 className="font-timegoing text-[#2BC016] text-[50px] laptop:text-[90px]">
          Contacto
        </h1>
      </div>

      <article className="text-white font-onest flex flex-col tablet:flex-row gap-x-4 m-6 gap-y-12">
        <div className="bg-[#020202] rounded-tl-[15px] rounded-br-[15px] rounded-tr-[35px] rounded-bl-[35px] border-[#BEFFC7] border-[0.5px] relative overflow-hidden p-6 flex flex-col tablet:flex-row tablet:space-x-2 items-center laptop:p-10">
          <div className="space-y-4 laptop:mr-10">
            <h1
              className="text-[16px] tablet:text-[14px] laptop:text-[18px]"
              style={{ fontWeight: 500 }}
            >
              Intento superarme constantemente.
            </h1>
            <h1
              className="max-w-96 text-[24px] tablet:text-[16px] laptop:text-[24px] laptop:max-w-[300px]"
              style={{ fontWeight: 500 }}
            >
              Actualmente estoy aprendiendo en Platzi.
            </h1>
            <p
              className="max-w-96 text-[14px] tablet:text-[12px] laptop:text-[18px] laptop:max-w-[400px]"
              style={{ fontWeight: 300 }}
            >
              También estoy aprendiendo TypeScript y otros frameworks a través
              de mis repositorios de código abierto. Aparte de eso, también
              practico constantemente el backend.
            </p>
          </div>
          <div className="z-10 mt-8 tablet:mt-0">
            <IconCloudDemo />
          </div>
          <BlurCircle className="w-[450px] h-[450px] bg-[#72705B] blur-[125px] left-[0%] -translate-x-1/2 -translate-y-[40%]" />
          <BlurCircle className="w-[450px] h-[450px] bg-[#A7C4B5] blur-[125px] left-[100%] -translate-x-1/2 -translate-y-[-40%]" />
        </div>
        <div className="bg-[#020202] rounded-tl-[15px] rounded-br-[15px] rounded-tr-[35px] rounded-bl-[35px] border-[#BEFFC7] border-[0.5px] relative overflow-hidden p-6 laptop:p-8 flex flex-col tablet:flex-row items-center">
          <div>
            <div className="space-y-4 mb-6">
              <h1
                className="max-w-96 text-[24px] tablet:text-[18px] laptop:text-[32px] laptop:max-w-72"
                style={{ fontWeight: 500 }}
              >
                Ponte en contacto conmigo
              </h1>
              <p
                className="max-w-96 text-[14px] tablet:text-[14px] laptop:text-[18px] laptop:max-w-80"
                style={{ fontWeight: 300 }}
              >
                Póngase en contacto conmigo por correo electrónico u otra red
                social.
              </p>
            </div>
            <div className="flex flex-row gap-x-8 justify-center items-center">
              <a
                className="z-10 border border-[#387D7A] p-3 bg-[#FFFFFF] bg-opacity-10 rounded-xl hover:bg-opacity-25 transition-500 transition-colors"
                href=""
              >
                <img
                  src="/icon/linkedin.svg"
                  className="w-5 h-5 tablet:w-4 tablet:h-4 laptop:w-6 laptop:h-6"
                  alt=""
                />
              </a>
              <a
                className="z-10 border border-[#387D7A] p-3 bg-[#FFFFFF] bg-opacity-10 rounded-xl hover:bg-opacity-25 transition-500 transition-colors"
                href=""
              >
                <img
                  src="/icon/threads.svg"
                  className="w-5 h-5 tablet:w-4 tablet:h-4 laptop:w-6 laptop:h-6"
                  alt=""
                />
              </a>
              <a
                className="z-10 border border-[#387D7A] p-3 bg-[#FFFFFF] bg-opacity-10 rounded-xl hover:bg-opacity-25 transition-500 transition-colors"
                href=""
              >
                <img
                  src="/icon/mail.svg"
                  className="w-5 h-5 tablet:w-4 tablet:h-4 laptop:w-6 laptop:h-6"
                  alt=""
                />
              </a>
            </div>
          </div>
          <BlurCircle className="w-[450px] h-[450px] bg-[#387D7A] blur-[125px] left-[0%] -translate-x-1/2 -translate-y-[-40%]" />
          <BlurCircle className="w-[450px] h-[450px] bg-[#2BC016] blur-[125px] left-[100%] -translate-x-1/2 -translate-y-[40%]" />
        </div>
      </article>
    </section>
  );
}

export default contact;
import type { FC } from 'react';
import { educationDetails } from '@/data/educationDetails';
import { blurCircles } from '@/data/blurCirclesEducation';

interface BlurCircleProps {
  className: string;
}

const BlurCircle: FC<BlurCircleProps> = ({ className }) => (
  <div
    id="circle"
    className={`absolute rounded-full opacity-80 ${className}`}
  />
);

const STYLES = {
  textContent:
    'max-w-[320px] opacity-75 font-onest text-[16px] laptop:text-[20px] font-light z-10',
};

const Education: FC = () => {
  return (
    <section
      id="education"
      className="z-10 flex flex-col relative items-center justify-center bg-[#020202] pb-60"
    >
      <h1 className="font-timegoing text-[#2BC016] text-[50px] laptop:text-[90px]">
        Educación
      </h1>

      <article className="text-white m-8">
        <div className="relative overflow-hidden p-6 border-[0.5px] border-[#BEFFC7] bg-[#020202] rounded-tl-[15px] rounded-br-[15px] rounded-tr-[35px] rounded-bl-[35px]">
          <div className="flex gap-12">
            <h2 className="font-onest text-[20px] max-w-[300px] tablet:max-w-56 laptop:text-[30px] laptop:max-w-64 mb-4 z-10 laptop:mr-12">
              Universidad César Vallejo
            </h2>
            <a href="https://www.ucv.edu.pe/" className="z-10">
              <img
                src="/UCV.webp"
                alt="Logo UCV"
                className="w-[30px] h-auto tablet:w-[20px] laptop:w-[25px]"
                loading="lazy"
              />
            </a>
          </div>

          {educationDetails.map((detail, index) => (
            <p key={index} className={STYLES.textContent}>
              {detail}
            </p>
          ))}

          {blurCircles.map((circle, index) => (
            <BlurCircle key={index} className={circle.className} />
          ))}
        </div>
      </article>
    </section>
  );
};

export default Education;

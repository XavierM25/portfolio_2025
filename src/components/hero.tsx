import React from 'react';

function hero() {
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
          Hola, soy
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
          tu próximo aliado en tecnología y desarrollo.
        </h2>
      </div>
      <div
        className="flex flex-col tablet:flex-row gap-y-5 z-10 text-[14px] tablet:space-x-6 laptop:text-[20px] laptop:space-x-12"
        style={{ fontWeight: 600 }}
      >
        <button className="px-12 py-2 rounded-xl font-onest border-[0.5px] border-[#2BC016] bg-[#395E66] bg-opacity-15 text-white hover:bg-opacity-20 transition-all">
          Contáctame
        </button>
        <button className="px-12 py-2 rounded-xl font-onest border-[0.5px] border-white text-[#2BBD1A] bg-[#2BBD1C] bg-opacity-15 hover:bg-opacity-20 transition-all">
          Proyectos
        </button>
      </div>
      <div className=" absolute w-[320px] h-[1000px] m:w-[375px] tablet:w-[800px] laptopL:w-[1400px] rounded-full bg-[#26A96C] opacity-30 blur-[200px] left-1/2 top-[120%] -translate-x-1/2 -translate-y-1/2" />
    </section>
  );
}

export default hero;

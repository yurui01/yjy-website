export const Hero = () => {
  return (
    <section className="flex min-h-screen flex-nowrap items-center justify-center overflow-hidden md:ml-0 md:w-full lg:overflow-visible flex-col">
      <div className="flex overflow-y-hidden isolate max-h-dvh backdrop-brightness-50 bg-black/30">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center justify-center px-4 text-center leading-8 md:px-0 pointer-events-none">
          <h1 className="tracking-tight inline font-semibold dark:from-[#FFFFFF] dark:to-[#DCDCDC] text-4xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-b">
            心怀致远
          </h1>
          <h1 className="tracking-tight inline font-semibold dark:from-[#FFFFFF] dark:to-[#DCDCDC] text-4xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-b">
            奋勇拼搏
          </h1>
          <h2 className="w-full md:w-1/2 my-2 text-lg font-normal block max-w-full [text-shadow:_0_1px_0_rgb(0_0_0_/_80%)] text-default-500">
            壹加云一直致力于IT软件服务，拥有从咨询、设计、开发、测试、运维到运营的端到端软件服务能力。
          </h2>
        </div>
        <div className="flex w-max items-stretch animate-scrolling-banner-vertical flex-col h-full">
          <picture className="w-screen">
            <source
              media="(max-width: 640px)"
              srcSet="/images/hero-background@mobile.jpeg"
            />
            <source
              media="(min-width: 641px)"
              srcSet="/images/hero-background.jpeg /"
            />
            <img
              alt="Hero Background"
              loading="lazy"
              src="/images/hero-background.jpeg"
            />
          </picture>

          <div className="pointer-events-none absolute top-0 z-20 h-full w-screen">
            <div className="h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black/70 to-black"></div>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-1/2 top-[50%] z-30 h-full -translate-y-1/2 translate-x-1/2 touch-none overflow-visible md:h-[780px]"
        >
          <img
            alt="hero gradient"
            className="h-full w-full overflow-visible object-cover"
            loading="lazy"
            src="/images/hero-gradient2.png"
          />
        </div>
      </div>
    </section>
  );
};

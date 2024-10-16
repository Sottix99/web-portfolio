import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';

export const ContactSection = () => {
  return (
    <section id = "contact" className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-20">
          <div 
            className='absolute inset-0 opacity-5 -z-10' 
            style={{ backgroundImage: `url(${grainImage.src})` }}
          ></div>

          {/* Updated flex container */}
          <div className='flex flex-col md:flex-row justify-between items-center z-20'>
            <div className='flex flex-col gap-4'>
              <h2 className='font-serif font-bold text-2xl md:text-3xl'>
                Let&apos;s create something amazing together
              </h2>
              <p className='text-sm md:text-base mt-2'>
                Ready to bring your next project to life? Let&apos;s connect and I can help you achieve your goals.
              </p>
            </div>

            <div className='mt-8 md:mt-0'>
              <a href ="mailto:sottile124@gmail.com">
              <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900 z-20 hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110">
                <span className='font-semibold'>Contact Me</span>
                <ArrowUpRightIcon className='w-4 h-4' />
              </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      </section>
  );
};

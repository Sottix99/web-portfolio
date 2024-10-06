import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';

const footerLinks =[
 {
  title: 'Mail',
  href: 'mailto:sottile124@gmail.com',
 },

 {
  title: 'GitHub',
  href: 'https://github.com/Sottix99',
 },

 {
  title: 'LinkedIn',
  href: 'https://www.linkedin.com/in/alessandro-sottile/',
 },

]


export const Footer = () => {
  return (
    <footer className="relative z-10 overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-40"></div>

      <div className="container">
        <div className="border-t border-white/15 py-16 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="border-white/40">&copy; 2024 Alessandro Sottile All rights reserved.</div>
          <nav className='flex flex-col md:flex-row items-center gap-8'>
            {footerLinks.map(link => (
              <a href={link.href} key={link.title} className="inline-flex items-center gap-1.5" target="_blank" rel="noopener noreferrer">
                
                <span className='font-semibold'>{link.title}</span>
                <ArrowUpRightIcon className="size-4"/>
              </a>
            ))}
          </nav>
          <div></div>
        </div>
      </div>
    </footer>
  );
};
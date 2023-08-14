// links
import Link from 'next/link';

// icons
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiPinterestLine,
  RiBehanceLine,
  RiLinkedinLine,
  RiTwitterLine,
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg md:text-[20px]">
      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiYoutubeLine />
      </Link>
      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiFacebookLine />
      </Link>
      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiInstagramLine />
      </Link>
      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiDribbbleLine />
      </Link>
      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiLinkedinLine />
      </Link>
      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiTwitterLine />
      </Link>
      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiPinterestLine />
      </Link>
    </div>
  );
};

export default Socials;

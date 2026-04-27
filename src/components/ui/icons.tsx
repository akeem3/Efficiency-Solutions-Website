import {
  type LucideProps,
  Asterisk,
  MessageCircle,
  MoveRight,
  Wand,
  Package,
  Building2,
  Phone,
  Mail,
  MapPin,
  Search,
  Scissors,
  Monitor,
} from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaCarSide,
} from "react-icons/fa6";

import Image from "next/image";

export const Logo = ({ className }: { className?: string }) => (
  <div className={className}>
    <Image
      src="/gpt es logo.png"
      alt="Efficiency Solutions"
      width={100}
      height={100}
      className="h-full w-auto object-contain"
      priority
    />
  </div>
);
export const Facebook = FaFacebook;
export const Instagram = FaInstagram;
export const LinkedIn = FaLinkedin;
export const Twitter = FaXTwitter;
export const ExternalLink = MoveRight;
export const Services = Wand;
export const Logistics = FaCarSide;
export const Accounting = Building2;
export const PhoneIcon = Phone;
export const MailIcon = Mail;
export const LocationIcon = MapPin;
export const SearchIcon = Search;

export const Icons = {
  Logo,
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  ExternalLink,
  Services,
  Logistics,
  Accounting,
  Tailoring: Scissors,
  Digital: Monitor,
  Phone: PhoneIcon,
  Mail: MailIcon,
  Location: LocationIcon,
  Search: SearchIcon,
};

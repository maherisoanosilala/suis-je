import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { MdOutlineEmail } from "react-icons/md"


export interface Social {
  label: string
  value: string
  href: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

export const SOCIALS: Social[] = [
  {
    label: 'email',
    value: 'nosilala13@gmail.com',
    href: 'mailto:nosilala13@gmail.com',
    icon:MdOutlineEmail,
  },
  {
    label: 'whatsapp',
    value: '+261 38 06 710 10',
    href: 'https://wa.me/261380671010',
    icon: FaWhatsapp,
  },
  {
    label: 'github',
    value: 'maherisoanosilala', 
    href: 'https://github.com/maherisoanosilala', 
    icon: FaGithub,
  },
  {
    label: 'linkedin',
    value: 'in/maherisoanosilala', 
    href: 'https://linkedin.com/in/maherisoanosilala', 
    icon:FaLinkedin,
  },
  {
    label: 'twitter',
    value: '@maherisoa02', 
    href: 'https://twitter.com/maherisoa02', 
    icon: FaXTwitter,
  },
]
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
    value: 'maherisoanosilala', // TODO: remplace
    href: 'https://github.com/maherisoanosilala', // TODO: remplace
    icon: FaGithub,
  },
  {
    label: 'linkedin',
    value: 'in/maherisoanosilala', // TODO: remplace
    href: 'https://linkedin.com/in/maherisoanosilala', // TODO: remplace
    icon:FaLinkedin,
  },
  {
    label: 'twitter',
    value: '@maherisoa02', // TODO: remplace
    href: 'https://twitter.com/maherisoa02', // TODO: remplace
    icon: FaXTwitter,
  },
]
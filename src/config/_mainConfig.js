import avatar from '../assets/images/my-avatar.png'
import { mailOutline, phonePortraitOutline, calendarOutline, locationOutline, logoGithub, logoLinkedin, logoInstagram } from 'ionicons/icons';

export const personalConfig = {
  avatar: avatar,
  name: `Manish Kumar`,
  designation: `DevOps Engineer`,
};

export const contactConfig = [
  {
    title: 'Email',
    detail: `manishdotkr@gmail.com`,
    logo: mailOutline,
  }, 
  {
    title: 'Phone',
    detail: `+91 7834898501`,
    logo: phonePortraitOutline,
  }, 
  {
    title: 'Birthday',
    detail: `April 17, 1998`,
    logo: calendarOutline,
  }, 
  {
    title: 'Location',
    detail: `Delhi, India`,
    logo: locationOutline,
  }, 
];

export const socialConfig = [
  {
    name: 'github',
    url: `https://github.com/manishdotkr`,
    logo: logoGithub,
  },
  {
    name: 'linkedin',
    url: `https://www.linkedin.com/in/manishdotkr`,
    logo: logoLinkedin,
  },
  {
    name: 'instagram',
    url: `https://www.instagram.com/manishdotkr`,
    logo: logoInstagram,
  },
];

import fbIcon       from 'Images/icon-fb.png';
import twitterIcon  from 'Images/icon-twitter.png';
import linkedinIcon from 'Images/icon-linkedin.png';

export default {
    name: 'main-footer',
    data() {
        return {
            footerLinks: [
                {label: 'Pricing', link: '#'},
                {label: 'Blog', link: '#'},
                {label: 'Webinars', link: '#'},
                {label: 'Events', link: '#'},
                {label: 'Help Center', link: '#'},
            ],
            legalLinks: [
                {label: 'Terms and Conditions', link: '#'},
                {label: 'Privacy Policy', link: '#'},
            ],
            socialLinks: [
                {icon: fbIcon, link: '#'},
                {icon: twitterIcon, link: '#'},
                {icon: linkedinIcon, link: '#'},
            ]
        }
    }
}

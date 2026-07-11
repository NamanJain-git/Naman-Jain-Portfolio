export const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
];

import wizzimage from '../assets/Wizzimage.png';
import bingevibeimage from '../assets/Bingevibeimage.png';
import pdftoolimage from '../assets/pdftoolimage.png';
import cssimageeditor from '../assets/cssimageeditor.png';

export const projects = [
    {
        title: 'Wizz E-commerce Website',
        description: 'A modern shopping experience built with React, Bootstrap, and Tailwind CSS.',
        tags: ['React', 'Bootstrap', 'Tailwind CSS'],
        image: wizzimage,
        demo: 'https://wizz-ecommerce-naman.netlify.app',
        code: 'https://github.com/NamanJain-git/Wizz-E-Commerce-Website',
    },
    {
        title: 'Binge-Vibe Streaming Website',
        description: 'Movie streaming platform with API integration, modern UI, and responsive design.',
        tags: ['React', 'Tailwind', 'Bootstrap', 'API Integration'],
        image: bingevibeimage,
        demo: 'https://bingevibe-streaming.netlify.app',
        code: 'https://github.com/NamanJain-git/BingeVibe-Movie-Website',
    },
    {
        title: 'PDF Tools Supporter',
        description: 'All in one tool to perform various operations on PDF files like Merge, Split, Compress and Convert to Image.',
        tags: ['React', 'Tailwind CSS'],
        image: pdftoolimage,
        demo: 'https://quick-pdf-13.preview.emergentagent.com/?utm_source=share',
        code: '#',
    },
    {
        title: 'CSS Variable Image Editor',
        description: 'Update CSS variables in an image with help of js',
        tags: ['HTML', 'CSS', 'JavaScript'],
        image: cssimageeditor,
        demo: 'https://css-image-editor.netlify.app',
        code: 'https://github.com/NamanJain-git/CSS-Variable-Image-Editor',
    },
];

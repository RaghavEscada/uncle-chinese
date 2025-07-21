import { Metadata } from 'next';
import About from './index';

export const metadata: Metadata = {
  title: 'About NUKE - Creative Marketing Agency',
  description: 'Learn about NUKE, a creative marketing agency that helps brands create engaging content and build meaningful connections with their audience.',
  keywords: ['NUKE', 'marketing agency', 'creative marketing', 'brand strategy', 'digital storytelling'],
  openGraph: {
    title: 'About NUKE - Creative Marketing Agency',
    description: 'Learn about NUKE, a creative marketing agency that helps brands create engaging content and build meaningful connections with their audience.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About NUKE - Creative Marketing Agency',
    description: 'Learn about NUKE, a creative marketing agency that helps brands create engaging content and build meaningful connections with their audience.',
  },
};

export default function AboutPage() {
  return <About />;
} 
import { Card, CardContent } from '@/components/ui/card';
import { Facebook, Twitter, Github, Dribbble, Linkedin, X } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

/* interface TeamMemberProps {
  image: string;
  name: string;
  role: string;
  bio: string;
  calLink: string;
  socialLinks?: {
    facebook?: string,
    twitter?: string,
    github?: string,
    dribbble?: string,
    highlighted: boolean,
  };
} */

export function TeamMemberCard({
  image,
  name,
  role,
  bio,
  socialLinks,
  calLink = {},
  highlighted,
}) {
  return (
    <Card
      className={`overflow-hidden max-w-sm transition-shadow ${
        highlighted
          ? 'border-2 border-pink-500 shadow-[0_0_15px_4px_rgba(236,72,153,0.5)] border-gradient-to-r from-pink-600 to-purple-600'
          : ''
      }`}
    >
      <div className='aspect-square w-full overflow-hidden'>
        <img
          src={image}
          alt={`${name} profile picture`}
          className='w-full h-full object-cover'
        />
      </div>
      <CardContent className='p-6'>
        <h3 className='text-2xl font-bold text-gray-900'>{name}</h3>
        <p className='text-gray-500 text-lg mt-1'>{role}</p>

        <p className='mt-4 text-gray-600'>{bio}</p>

        <div className='flex gap-4 mt-6'>
          {socialLinks.facebook && (
            <Link
              href={socialLinks.facebook}
              className='text-gray-500 hover:text-gray-700'
            >
              <Facebook className='w-6 h-6' />
              <span className='sr-only'>Facebook</span>
            </Link>
          )}
          {socialLinks.twitter && (
            <Link
              href={socialLinks.twitter}
              className='text-gray-500 hover:text-gray-700'
            >
              <Twitter className='w-6 h-6' />
              <span className='sr-only'>Twitter</span>
            </Link>
          )}
          {socialLinks.github && (
            <Link
              href={socialLinks.github}
              className='text-gray-500 hover:text-gray-700'
            >
              <Github className='w-6 h-6' />
              <span className='sr-only'>GitHub</span>
            </Link>
          )}
          {socialLinks.dribbble && (
            <Link
              href={socialLinks.dribbble}
              className='text-gray-500 hover:text-gray-700'
            >
              <Dribbble className='w-6 h-6' />
              <span className='sr-only'>Dribbble</span>
            </Link>
          )}
          {socialLinks.linkedin && (
            <Link
              href={socialLinks.linkedin}
              className='text-gray-500 hover:text-gray-700'
            >
              <Linkedin className='w-6 h-6' />
              <span className='sr-only'>LinkedIn</span>
            </Link>
          )}
        </div>
        {calLink.length > 1 && (
          <button
            data-cal-link={calLink}
            data-cal-config='{"layout":"month_view"}'
            className='bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition mt-4 cursor-pointer'
          >
            Book Office Hour
          </button>
        )}
      </CardContent>
    </Card>
  );
}

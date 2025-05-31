import React from 'react';

export type PostType = {
  id: string;
  title: string;
  body: string;
}

export type BlogLinkType = {
  href: string;
  children: React.ReactNode;
}
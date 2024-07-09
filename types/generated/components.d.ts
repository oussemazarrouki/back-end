import type { Schema, Attribute } from '@strapi/strapi';

export interface HomepageImages extends Schema.Component {
  collectionName: 'components_homepage_images';
  info: {
    displayName: 'image';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Attribute.Required;
    description: Attribute.Text;
  };
}

export interface HomepageLogo extends Schema.Component {
  collectionName: 'components_homepage_logos';
  info: {
    displayName: 'logo';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Attribute.Required;
    url: Attribute.Text;
  };
}

export interface HomepageSection extends Schema.Component {
  collectionName: 'components_homepage_sections';
  info: {
    displayName: 'section';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    content: Attribute.Blocks;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'homepage.images': HomepageImages;
      'homepage.logo': HomepageLogo;
      'homepage.section': HomepageSection;
    }
  }
}

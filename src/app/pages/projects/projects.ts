
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface PortfolioProject {
  title: string;
  description: string;
  technologies: string[];
  learned: string;
  link: string;
}

@Component({
  selector: 'app-projects',
  imports: [RouterLink],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  readonly currentYear = new Date().getFullYear();

  readonly projects: PortfolioProject[] = [
    {
      title: 'Wild Rescues',
      description: 'A website project focused on an animal rescue organization and its mission.',
      technologies: ['HTML', 'CSS'],
      learned: 'Building accessible web pages and organizing content into a clear, user-friendly layout.',
      link: '/rescue.zip'
    },
    {
      title: 'BioSite',
      description: 'A biographical website created to present a person’s background, interests, and story.',
      technologies: ['HTML', 'CSS'],
      learned: 'Planning a multi-page website and presenting personal information through thoughtful design.',
      link: 'https://github.com/Bvigness630/bioSite'
    },
    {
      title: 'RPG Character Builder',
      description: 'An Angular application developed around character classes and character-building features.',
      technologies: ['Angular', 'TypeScript', 'HTML', 'CSS'],
      learned: 'Working with Angular components, services, routing, and TypeScript.',
      link: 'https://github.com/Bvigness630/rpg-character-builder'
    },
    {
      title: 'Virtual Taco Stand',
      description: 'An Angular application for a virtual taco stand, with menu and ordering features.',
      technologies: ['Angular', 'TypeScript', 'HTML', 'CSS'],
      learned: 'Working with Angular application structure, components, and testing.',
      link: 'https://github.com/Bvigness630/virtual-taco-stand'
    },
    {
      title: 'In-N-Out Books',
      description: 'A book-focused application with an API built using Node.js and Express.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'JavaScript', 'Jest'],
      learned: 'Building API endpoints, validating data, and testing backend functionality.',
      link: 'https://github.com/Bvigness630/web-420/tree/main/in-n-out-books'
    },
    {
      title: 'WhatABook',
      description: 'A collaborative book application project involving MongoDB and book-related features.',
      technologies: ['MongoDB', 'JavaScript', 'Node.js'],
      learned: 'Working with database queries, retrieving book information, and testing application features.',
      link: 'https://github.com/Bvigness630/web-335/tree/main/WhatABook_Project'
    }
  ];
}

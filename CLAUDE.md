# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a barbershop website project built with Astro 5.12.5 and TypeScript. The goal is to create a fast, modern, mobile-responsive website for a local barbershop that provides essential business information, builds trust with visitors, and supports local SEO efforts.

## Development Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Start development server at localhost:4321 |
| `npm run build` | Build production site to ./dist/ |
| `npm run preview` | Preview built site locally |
| `npm run astro` | Run Astro CLI commands |

## Planned Tech Stack

- **Astro 5.12.5** - Static site generator with component islands
- **Tailwind CSS** - Utility-first CSS framework (to be installed)
- **Lucide Icons** or **Heroicons** - Icon library (to be installed)
- **TypeScript** - Type safety with strict mode enabled
- **Markdown** - Content management for services and FAQ

## Project Architecture

The site follows a standard business website structure with these core pages:
- **Homepage** - Hero section, services preview, about, hours, location, testimonials
- **Services Page** - Service listings with pricing and descriptions
- **FAQ Section** - Expandable accordion with common questions
- **Contact Page** - Business info, map embed, optional contact form

## Key Documentation Files

- `requirements.md` - Complete project requirements and features
- `todo.md` - Development checklist and tasks
- `tech-stack.md` - Detailed technical architecture
- `design.md` - Design system and visual guidelines

## Development Focus

- Mobile-first responsive design
- Performance optimization (target: 90+ Lighthouse scores)
- Local SEO optimization with semantic HTML and schema markup
- Clean, professional barbershop aesthetic
- Easy maintenance and reusability for similar small business sites

## Current State

The project currently contains the basic Astro starter template. All barbershop-specific features need to be implemented according to the requirements in `requirements.md` and the development plan in `todo.md`.
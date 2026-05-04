# Mealsapp App Context

## Overview
- Angular 19 standalone-component app with router-based navigation.
- Server-side rendering (SSR) via Angular SSR and Express.
- Client hydration enabled.

## UI / UX
- Dark, food-themed visual design with gradients and hero sections.
- SVG wave header background and prominent brand logo.
- Home page slideshow with CTA buttons.
- Meals grid cards with hover effects and loading animation.
- Community perks list with icons.
- Share form includes image picker with preview and disabled submit until valid.

## Features
- Landing page with slideshow and marketing sections.
- Browse meals (static list) with detail pages.
- Share a meal via a reactive form and local image preview.
- Community perks page.

## Routes
- `/` – Home (MainComponent)
- `/meals` – Meals list
- `/meals/share` – Share meal form
- `/meals/:id` – Meal details
- `/community` – Community perks

## APIs Integrated
- No external APIs are integrated.
- Data is sourced from a static in-memory dataset (`mealsdata`).
- Express server is used only for SSR (no REST endpoints implemented).

## Required APIs (for full app workflow)
- `GET /api/meals` – list meals for the `/meals` page.
- `GET /api/meals/:slug` – meal details for `/meals/:id`.
- `POST /api/meals` – create a meal from the share form.
- `POST /api/uploads/images` – upload an image and return a URL for storage.

## Data Models
- **Meal**
  - `title`: string
  - `slug`: string
  - `image`: string (asset path or data URL)
  - `summary`: string
  - `instructions`: string
  - `creator`: string
  - `creator_email`: string
- **ShareMealForm**
  - `name`: string
  - `email`: string
  - `title`: string
  - `summary`: string
  - `instructions`: string
  - `image`: File

## Design Patterns / Architecture
- Standalone Angular components with template-driven composition.
- Router-driven feature separation (pages by route).
- SSR entrypoint via `server.ts` with Angular `CommonEngine`.
- Simple in-memory data store (array) instead of services or state library.

## State Management
- Component-local state only.
- Angular signals used for template switching (loading vs list).
- Reactive Forms for share meal input.
- No global store (NgRx/SignalStore/etc).

## Packages Used (key)
- `@angular/*` (core, router, forms, animations, platform-server)
- `@angular/ssr`, `express`
- `rxjs`, `zone.js`
- Testing: `karma`, `jasmine`

## Feature Improvements Needed
- Persist shared meals and fetch data from an API (replace in-memory push).
- Generate stable, unique slugs and validate duplicates.
- Add search, filters, sorting, and pagination to the meals list.
- Add inline validation messages and success/error feedback for the share form.
- Add image upload validation (file size/type) and fallback images.

## Upgrade Plan (high-level)
1. Replace static `mealsdata` with a backend API and persistence layer.
2. Add Angular HttpClient services for data access and caching.
3. Introduce a global state solution (SignalStore/NgRx) for meals and user input.
4. Improve UX with skeleton loaders, empty/error states, and search/filter/paging.
5. Add server-side image upload handling and content sanitization.
6. Expand automated tests and add e2e coverage with CI integration.
7. Optimize performance with lazy loading, route-level prefetching, and SSR caching.
8. Improve accessibility and add i18n support.

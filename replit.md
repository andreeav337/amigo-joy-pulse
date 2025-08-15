# Jewelry Customization App

## Project Overview
A custom jewelry design application where users can create personalized bracelets and necklaces by selecting a base piece and adding various charms. The app is built with React, TypeScript, and uses a custom component system.

## Architecture
- **Frontend**: React with TypeScript, using Wouter for routing
- **Backend**: Express.js server serving API routes
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: React hooks with TanStack Query for data fetching
- **Storage**: In-memory storage (MemStorage) for development

## Key Features
1. **Base Selection**: Users choose between gold/silver chains for collars or bracelets
2. **Charm Categories**: Multiple categories including letters, colored charms, gold charms, and animals
3. **Order Specification**: Users can describe how they want their charms arranged
4. **Responsive Design**: Mobile-first design with Tailwind CSS

## Components
- `BaseSelector`: Displays available chain options with pricing
- `CharmCategories`: Accordion-style charm selection with quantity controls
- `OrderInput`: Text area for users to specify charm arrangement

## Recent Changes
- **2025-01-15**: Migrated from Lovable to Replit environment
- **2025-01-15**: Replaced React Router with Wouter for routing
- **2025-01-15**: Updated styling to use Tailwind theme variables
- **2025-01-15**: Fixed package dependencies and server configuration

## User Preferences
- Spanish language interface for jewelry app
- Clean, modern UI with visual charm representations
- Step-by-step guided experience with numbered sections

## Development Notes
- Server runs on port 5000 with both API and frontend
- Uses shadcn/ui component library for consistent styling
- Emoji representations for charm categories and types
- Form validation ensures both base and charms are selected before proceeding
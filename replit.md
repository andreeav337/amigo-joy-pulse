# Jewelry Customization App

## Project Overview
A custom jewelry design application where users can create personalized bracelets and necklaces by selecting a base piece and adding various charms. The app is built with React, TypeScript, and uses a custom component system.

## Architecture
- **Frontend**: React with TypeScript, using Wouter for routing
- **Backend**: Express.js server serving API routes
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: React hooks with TanStack Query for data fetching
- **Storage**: In-memory storage (MemStorage) for development
- **Inventory System**: Built-in stock control with hidden quantities from customers

## Key Features
1. **Base Selection**: Users choose between gold/silver chains for collars or bracelets
2. **Charm Categories**: Multiple categories including letters, colored charms, gold charms, and animals
3. **Inventory Management**: Stock control system with hidden quantities from customers
4. **Order Specification**: Users can describe how they want their charms arranged
5. **Admin Access**: Secure admin login with hardcoded password for order management
6. **Responsive Design**: Mobile-first design with Tailwind CSS

## Components
- `BaseSelector`: Displays available chain options with pricing
- `CharmCategories`: Accordion-style charm selection with quantity controls
- `OrderInput`: Text area for users to specify charm arrangement

## Recent Changes
- **2025-01-15**: Migrated from Lovable to Replit environment
- **2025-01-15**: Replaced React Router with Wouter for routing
- **2025-01-15**: Updated styling to use Tailwind theme variables
- **2025-01-15**: Fixed package dependencies and server configuration
- **2025-01-15**: Updated UI layout with 5 chain options in grid format
- **2025-01-15**: Added logo section in header with customization instructions
- **2025-01-15**: Implemented total calculation section between charms and order
- **2025-01-15**: Reduced icon sizes and improved mobile responsiveness
- **2025-01-15**: Created user-friendly modification guide (INSTRUCCIONES_PARA_MODIFICAR.md)
- **2025-01-18**: Implemented inventory system for chains and charms with stock control
- **2025-01-18**: Admin login now has hardcoded password (colorjoyeria2024) defined in code
- **2025-01-18**: Stock quantities are hidden from customers, only show "Available" or "Sold Out"
- **2025-01-18**: Created GUIA_INVENTARIO.md for easy inventory management by user
- **2025-01-18**: Created comprehensive photo guides (GUIA_AGREGAR_FOTOS.md) for chains and charms
- **2025-01-18**: Set up automatic image system for charms with emoji fallback
- **2025-01-18**: Chain photos already configured and working in client/public/
- **2025-01-18**: Added hover effects to charms for better visualization (scale + shadow effects)
- **2025-01-18**: Created hover customization guide (OPCIONES_HOVER_RECOMENDADAS.md)

## User Preferences
- Spanish language interface for jewelry app
- Clean, modern UI with visual charm representations
- Step-by-step guided experience with numbered sections

## Development Notes
- Server runs on port 5000 with both API and frontend
- Uses shadcn/ui component library for consistent styling
- Emoji representations for charm categories and types
- Form validation ensures both base and charms are selected before proceeding
# Demo ShadCN - React Component Showcase

A modern React + TypeScript + Vite application showcasing component patterns, form handling, and advanced data management features built with shadcn/ui and Tailwind CSS.

## 🎯 Features

### Core Technologies

- **React 19** - Latest React with server components support
- **TypeScript** - Type-safe development
- **Vite 7** - Ultra-fast build tool with HMR
- **Tailwind CSS v4** - Utility-first CSS framework
- **shadcn/ui** - High-quality, accessible UI components

### Development Experience

- **ESLint** - Modern ESLint v9 flat config with TypeScript support
- **Prettier** - Code formatting with Tailwind CSS class sorting
- **Stylelint** - CSS/SCSS linting with alphabetical property ordering
- **TypeScript** - Strict type checking

### Demo Features

The application includes a **Payroll MCP** demo showcasing advanced patterns:

#### Form Handling

- React Hook Form with Zod validation
- Complex form dialogs for data entry
- Real-time validation with error feedback

#### Data Management

- Advanced filtering with multiple criteria
- Sortable columns and pagination
- Responsive table layout (mobile-first)

#### Drag & Drop

- Reorderable rows with visual feedback
- Smooth drag state management
- Touch-friendly interactions

#### Export Functionality

- CSV, JSON, TSV export formats
- PDF printing support
- Batch operations

#### UI Components

- Mobile-responsive ToggleGroup with icon-only buttons
- Statistics cards with data visualization
- Advanced filter dialogs

## 📦 Scripts

```bash
# Development
npm run dev              # Start dev server with HMR
npm run build           # Build for production
npm run preview         # Preview production build

# Code Quality
npm run lint            # Run ESLint
npm run lint:fix        # Fix ESLint issues
npm run format          # Format code with Prettier
npm run format:check    # Check formatting
npm run lint:styles     # Check CSS/SCSS with Stylelint
npm run lint:styles:fix # Fix CSS/SCSS issues

# Deployment
npm run deploy          # Build and deploy to GitHub Pages
```

## 🏗️ Project Structure

```
demo-shadcn/
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions deployment
├── src/
│   ├── components/                 # UI components (shadcn/ui)
│   ├── context/                    # React Context
│   ├── hooks/                      # Custom React hooks
│   ├── lib/                        # Utilities and helpers
│   ├── pages/
│   │   ├── payroll-mcp/           # Payroll demo page
│   │   │   ├── components/        # Feature-specific components
│   │   │   └── data/              # Utilities, schemas, mock data
│   │   └── ...
│   ├── styles/                     # Global styles
│   └── main.tsx
├── eslint.config.js               # ESLint configuration
├── .prettierrc.json               # Prettier configuration
├── .stylelintrc.json              # Stylelint configuration
├── vite.config.ts                 # Vite configuration
├── tailwind.config.ts             # Tailwind configuration
└── tsconfig.json                  # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js >= 22
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build & Preview

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

## 🎨 Styling & Code Quality

### Prettier + Tailwind CSS Plugin

All Tailwind CSS classes are automatically sorted by the `prettier-plugin-tailwindcss` for consistent styling across the project.

### ESLint Configuration

Modern ESLint v9 with flat config format, including:

- React rules and React Hooks validation
- TypeScript support
- Unused variable detection
- Best practice enforcement

### Stylelint

SCSS/CSS linting with:

- Standard CSS rules
- Prettier integration
- Alphabetical property ordering
- Custom property validation

## 📱 Responsive Design

All components are built with mobile-first approach using Tailwind CSS breakpoints:

- `sm`: Small devices (640px)
- `md`: Medium devices (768px)
- `lg`: Large devices (1024px)
- `xl`: Extra-large devices (1280px)

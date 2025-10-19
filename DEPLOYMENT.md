# Deployment & Development Guide

This guide covers setup, development, and deployment of the demo-shadcn project to GitHub Pages.

## Setup Instructions

### 1. Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository named `demo-shadcn`
2. **Important:** Do NOT initialize with README, .gitignore, or license (we already have these)

### 2. Push Code to GitHub

```bash
# Add all files to git
git add .

# Create initial commit
git commit -m "Initial commit: Setup demo-shadcn with GitHub Pages"

# Add GitHub remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/demo-shadcn.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. In the left sidebar, click on **Pages**
4. Under **Source**, select **GitHub Actions**
5. The workflow will automatically deploy on the next push

## Project Configuration

### Files Configured for GitHub Pages:

1. **vite.config.ts**
   - Added `base: '/demo-shadcn/'` for correct asset paths

2. **.github/workflows/deploy.yml**
   - GitHub Actions workflow for automatic deployment
   - Runs on push to `main` branch
   - Can also be triggered manually

3. **package.json**
   - Updated project name to `demo-shadcn`
   - Added deploy script: `npm run deploy`

## Deployment

### Automatic Deployment

Every time you push to the `main` branch, GitHub Actions will:

1. Install dependencies
2. Build the project
3. Deploy to GitHub Pages

### Manual Deployment

You can also trigger deployment manually:

1. Go to your repository on GitHub
2. Click **Actions** tab
3. Select **Deploy to GitHub Pages** workflow
4. Click **Run workflow**

## Access Your Site

After successful deployment, your site will be available at:

```
https://YOUR_USERNAME.github.io/demo-shadcn/
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Troubleshooting

### Build Fails

If the build fails, check:

- TypeScript errors: `npm run build` locally
- ESLint errors: `npm run lint` locally

### 404 on Deployment

If you get a 404 error:

- Ensure the `base` in `vite.config.ts` matches your repository name
- Check that GitHub Pages is enabled in repository settings
- Wait a few minutes for DNS to propagate

### Assets Not Loading

If CSS or JS files aren't loading:

- Verify the `base` path in `vite.config.ts` is correct
- Check browser console for path errors

## Development

### Initial Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Code Quality

The project includes comprehensive code quality tools:

#### Linting & Formatting

```bash
# Check code with ESLint
npm run lint

# Auto-fix ESLint issues
npm run lint:fix

# Check code formatting
npm run format:check

# Auto-format code with Prettier
npm run format

# Check CSS/SCSS with Stylelint
npm run lint:styles

# Auto-fix CSS/SCSS issues
npm run lint:styles:fix
```

#### Tools Configuration

- **ESLint** (`eslint.config.js`)
  - Modern flat config format (ESLint v9)
  - React and TypeScript support
  - Enforces best practices and code standards

- **Prettier** (`.prettierrc.json`)
  - Consistent code formatting
  - Automatic Tailwind CSS class sorting via `prettier-plugin-tailwindcss`
  - 100-character line width

- **Stylelint** (`.stylelintrc.json`)
  - SCSS/CSS validation
  - Alphabetical property ordering
  - Prettier integration for style formatting

### Development Workflow

1. **Create a feature branch** for new work
2. **Develop and test** locally with `npm run dev`
3. **Verify code quality**:
   ```bash
   npm run lint        # Check for errors
   npm run format      # Auto-format code
   npm run build       # Verify build succeeds
   ```
4. **Commit changes** with descriptive messages
5. **Push to GitHub** - CI/CD will automatically test and deploy

### Pre-commit Checks

Before committing, run:

```bash
npm run lint:fix
npm run format
npm run build
```

This ensures all code quality checks pass before pushing.

## Project Structure

```
demo-shadcn/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── src/
│   ├── components/             # React components
│   ├── pages/                  # Page components
│   └── ...
├── vite.config.ts             # Vite configuration (includes base path)
├── package.json               # Project dependencies and scripts
└── DEPLOYMENT.md              # This file
```

## Commands

### Development

| Command           | Description                                      |
| ----------------- | ------------------------------------------------ |
| `npm run dev`     | Start development server with hot module reload  |
| `npm run build`   | Build for production (includes TypeScript check) |
| `npm run preview` | Preview the production build locally             |

### Code Quality

| Command                   | Description                         |
| ------------------------- | ----------------------------------- |
| `npm run lint`            | Run ESLint to check for code issues |
| `npm run lint:fix`        | Auto-fix ESLint issues              |
| `npm run format`          | Format code with Prettier           |
| `npm run format:check`    | Check if code is properly formatted |
| `npm run lint:styles`     | Check CSS/SCSS files with Stylelint |
| `npm run lint:styles:fix` | Auto-fix CSS/SCSS issues            |

### Deployment

| Command          | Description                      |
| ---------------- | -------------------------------- |
| `npm run deploy` | Build and deploy to GitHub Pages |

### Recommendations

**Before pushing to GitHub:**

```bash
npm run lint:fix
npm run format
npm run build
```

This ensures your code passes all quality checks before deployment.

## Notes

### Stack & Technologies

- **Framework**: React 19 + TypeScript with Vite 7
- **UI Components**: shadcn/ui (unstyled, accessible components)
- **Styling**: Tailwind CSS v4 with custom theme configuration
- **Form Handling**: React Hook Form + Zod validation
- **Code Quality**: ESLint v9 (flat config) + Prettier + Stylelint
- **Deployment**: Automated via GitHub Actions

### Key Features

- **Mobile-First**: Responsive design for all screen sizes
- **Accessible**: Built on shadcn/ui with WCAG compliance
- **Type-Safe**: Full TypeScript support with strict mode
- **Fast Development**: Vite with instant HMR
- **Automated Formatting**: Prettier sorts Tailwind classes automatically

### Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- ES2020+ JavaScript support required

### Performance

- Vite enables ultra-fast cold starts and HMR
- Optimized bundle splitting in production
- CSS/JS minification and compression
- Consider code splitting for large features

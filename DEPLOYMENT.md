# GitHub Pages Deployment Guide

This guide explains how to deploy the demo-shadcn project to GitHub Pages.

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

To run locally:

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

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run deploy` | Build and deploy (alternative method) |

## Notes

- The project uses Vite + React + TypeScript
- UI components are built with shadcn/ui
- Styling is done with Tailwind CSS v4
- Deployment is automated via GitHub Actions

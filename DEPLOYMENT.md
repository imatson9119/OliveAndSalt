# GitHub Pages Deployment Guide

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

## Setup Instructions

### 1. Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**

### 2. Configure Repository Name

If your repository name is not `OliveAndSalt`, update the following files:

**`.github/workflows/deploy.yml`**:

```yaml
env:
  PUBLIC_BASE_PATH: '/YOUR_REPO_NAME'
```

**`package.json`**:

```json
"build:gh-pages": "PUBLIC_BASE_PATH=/YOUR_REPO_NAME npm run build",
"preview:gh-pages": "PUBLIC_BASE_PATH=/YOUR_REPO_NAME npm run build && npm run preview", 
```

### 3. Deploy

The site will automatically deploy when you push to the `main` or `master` branch.

## Manual Deployment Commands

```bash
# Build for GitHub Pages locally
npm run build:gh-pages

# Preview GitHub Pages build locally
npm run preview:gh-pages
```

## Project Structure

- **`.github/workflows/deploy.yml`**: GitHub Actions workflow for automatic deployment
- **`static/.nojekyll`**: Prevents GitHub from processing files with Jekyll
- **`svelte.config.js`**: Configured with proper base path handling for GitHub Pages
- **`package.json`**: Contains deployment scripts

## How It Works

1. **Base Path Configuration**: The app automatically handles the repository name as a base path when deployed to GitHub Pages
2. **Static Adapter**: Uses `@sveltejs/adapter-static` to generate static files
3. **Automatic Deployment**: GitHub Actions builds and deploys on every push to main/master
4. **Jekyll Bypass**: The `.nojekyll` file prevents GitHub from processing the site with Jekyll

## Troubleshooting

### Assets Not Loading

If CSS/JS assets aren't loading correctly:

1. Verify the `PUBLIC_BASE_PATH` matches your repository name exactly
2. Check that the repository name uses the correct case
3. Ensure you're accessing the site at `https://username.github.io/repository-name/`

### Build Failures

If the GitHub Action fails:

1. Check the Actions tab in your repository for error details
2. Ensure all dependencies are listed in `package.json`
3. Test the build locally with `npm run build:gh-pages`

### 404 Errors

If you get 404 errors on refresh:

- This is expected behavior for SPAs on GitHub Pages
- The `fallback: 'index.html'` in `svelte.config.js` handles client-side routing

## Local Development

For local development, use the standard commands:

```bash
npm run dev      # Development server
npm run build    # Standard build (no base path)
npm run preview  # Preview standard build
```

The base path configuration only applies to GitHub Pages builds and won't affect local development.

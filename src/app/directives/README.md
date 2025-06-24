# Fade-In Directive

A versatile Angular directive that adds smooth fade-in animations to elements when they come into view. Perfect for adding elegant animations throughout your application with viewport-based triggering and customizable options.

## Features

- 🎯 **Viewport-based triggering** - Elements animate when they scroll into view
- ⏱️ **Customizable timing** - Control delay and duration
- 🎨 **Multiple directions** - Fade in from different directions (up, down, left, right, or just scale)
- 🎛️ **Flexible configuration** - All parameters are customizable
- 📱 **Performance optimized** - Uses IntersectionObserver for efficient viewport detection
- ♿ **Accessible** - Respects user preferences and provides fallbacks

## Usage

### Basic Usage

```html
<!-- Simple fade-in -->
<div appFadeIn>Content that fades in</div>

<!-- With custom delay and duration -->
<div appFadeIn [fadeDelay]="300" [fadeDuration]="800">Delayed fade-in with longer duration</div>

<!-- Immediate animation on page load -->
<div appFadeIn fadeOnLoad [fadeDelay]="200">Animates immediately when page loads</div>
```

### Advanced Usage

```html
<!-- Fade in from different directions -->
<div appFadeIn fadeDirection="left" [fadeDelay]="200">Slides in from the left</div>

<div appFadeIn fadeDirection="up" [fadeDuration]="600">Slides up while fading in</div>

<!-- Custom easing and threshold -->
<div appFadeIn [fadeDelay]="100" [fadeDuration]="1000" fadeDirection="right" fadeEasing="ease-out" [fadeThreshold]="0.3">Highly customized animation</div>

<!-- Immediate load animation -->
<div appFadeIn fadeOnLoad [fadeDelay]="500" fadeDirection="up">Fades in immediately on page load</div>
```

### Component Integration

To use the directive in your component:

1. Import the directive:

```typescript
import { FadeInDirective } from '../../directives';

@Component({
  // ...
  imports: [FadeInDirective, /* other imports */],
})
```

2. Apply to your template elements:

```html
<section>
  <h2 appFadeIn [fadeDelay]="100">Section Title</h2>
  <p appFadeIn [fadeDelay]="300">Description text</p>
  <div appFadeIn [fadeDelay]="500" fadeDirection="up">Action buttons</div>
</section>
```

## Configuration Options

| Property        | Type                                            | Default                            | Description                        |
| --------------- | ----------------------------------------------- | ---------------------------------- | ---------------------------------- |
| `appFadeIn`     | `boolean`                                       | `true`                             | Enables/disables the animation     |
| `fadeDelay`     | `number`                                        | `0`                                | Delay before animation starts (ms) |
| `fadeDuration`  | `number`                                        | `600`                              | Animation duration (ms)            |
| `fadeDistance`  | `number`                                        | `20`                               | Distance to slide from (px)        |
| `fadeDirection` | `'up' \| 'down' \| 'left' \| 'right' \| 'none'` | `'up'`                             | Direction of slide animation       |
| `fadeEasing`    | `string`                                        | `'cubic-bezier(0.4, 0.0, 0.2, 1)'` | CSS easing function                |
| `fadeThreshold` | `number`                                        | `0.1`                              | Intersection threshold (0-1)       |
| `fadeOnLoad`    | `boolean`                                       | `false`                            | Animate immediately on page load   |

## Direction Options

- **`up`**: Element slides up from below while fading in
- **`down`**: Element slides down from above while fading in
- **`left`**: Element slides in from the right while fading in
- **`right`**: Element slides in from the left while fading in
- **`none`**: Element only scales slightly while fading in (no directional movement)

## Examples for Different Use Cases

### Staggered Animations

Create cascading effects by incrementing delays:

```html
<div class="card-grid">
  <div class="card" appFadeIn [fadeDelay]="100">Card 1</div>
  <div class="card" appFadeIn [fadeDelay]="200">Card 2</div>
  <div class="card" appFadeIn [fadeDelay]="300">Card 3</div>
  <div class="card" appFadeIn [fadeDelay]="400">Card 4</div>
</div>
```

### Hero Section

```html
<section class="hero">
  <h1 appFadeIn fadeOnLoad [fadeDelay]="200" [fadeDuration]="800">Main Headline</h1>
  <p appFadeIn fadeOnLoad [fadeDelay]="400" [fadeDuration]="700">Subtitle text</p>
  <div appFadeIn fadeOnLoad [fadeDelay]="600" fadeDirection="up">
    <button>Call to Action</button>
  </div>
</section>
```

### Side-by-Side Content

```html
<section class="two-column">
  <div class="text-content" appFadeIn fadeDirection="left" [fadeDelay]="200">
    <h2>About Us</h2>
    <p>Description...</p>
  </div>
  <div class="image-content" appFadeIn fadeDirection="right" [fadeDelay]="400">
    <img src="..." alt="..." />
  </div>
</section>
```

## Animation Trigger Options

### Viewport-Based Animation (Default)

By default, animations trigger when elements scroll into view using `IntersectionObserver`. This is ideal for content below the fold and provides a smooth scrolling experience.

### Immediate Page Load Animation

Use `fadeOnLoad="true"` to trigger animations immediately when the page loads, regardless of viewport position. This is perfect for:

- **Above-the-fold content** (hero sections, headers)
- **Critical UI elements** that should appear immediately
- **Loading sequences** where you want instant feedback

```html
<!-- Immediate animation -->
<div appFadeIn fadeOnLoad [fadeDelay]="100">Appears immediately on page load</div>

<!-- Viewport-based animation (default) -->
<div appFadeIn [fadeDelay]="100">Appears when scrolled into view</div>
```

## Performance Notes

- The directive uses `IntersectionObserver` for efficient viewport detection (when `fadeOnLoad` is false)
- Elements are only animated once when they first come into view or load
- Observers are automatically cleaned up after animation completes
- Fallback behavior is provided for environments without `IntersectionObserver`
- Page load animations (`fadeOnLoad="true"`) have minimal performance impact

## Browser Support

- Modern browsers with `IntersectionObserver` support
- Graceful fallback for older browsers (immediate animation without viewport detection)

## Accessibility

The directive respects user motion preferences and provides smooth, non-jarring animations that enhance rather than distract from the user experience.

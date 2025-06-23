import {
  trigger,
  transition,
  style,
  query,
  animate,
} from '@angular/animations';

export const slideInAnimation = trigger('routeAnimations', [
  // Subtle fade with gentle movement
  transition('* => *', [
    // Set initial styles for both entering and leaving components
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          minHeight: 'inherit',
        }),
      ],
      { optional: true },
    ),
    // Gentle fade in with slight upward movement
    query(
      ':enter',
      [
        style({
          opacity: 0,
          transform: 'translateY(20px) scale(0.98)',
        }),
        animate(
          '350ms cubic-bezier(0.4, 0.0, 0.2, 1)',
          style({
            opacity: 1,
            transform: 'translateY(0px) scale(1)',
          }),
        ),
      ],
      { optional: true },
    ),
    // Gentle fade out with slight downward movement
    query(
      ':leave',
      [
        style({
          opacity: 1,
          transform: 'translateY(0px) scale(1)',
        }),
        animate(
          '250ms cubic-bezier(0.4, 0.0, 0.6, 1)',
          style({
            opacity: 0,
            transform: 'translateY(-10px) scale(1.02)',
          }),
        ),
      ],
      { optional: true },
    ),
  ]),
]);

export const fadeAnimation = trigger('fadeAnimation', [
  transition('* <=> *', [
    // Set initial styles
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          minHeight: 'inherit',
        }),
      ],
      { optional: true },
    ),
    // Simple fade in
    query(
      ':enter',
      [
        style({ opacity: 0, transform: 'scale(0.98)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'scale(1)' })),
      ],
      { optional: true },
    ),
    // Simple fade out
    query(
      ':leave',
      [
        style({ opacity: 1, transform: 'scale(1)' }),
        animate(
          '200ms ease-in',
          style({ opacity: 0, transform: 'scale(1.02)' }),
        ),
      ],
      { optional: true },
    ),
  ]),
]);

export const slideUpAnimation = trigger('slideUpAnimation', [
  transition('* <=> *', [
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          minHeight: 'inherit',
        }),
      ],
      { optional: true },
    ),
    // Gentle slide up
    query(
      ':enter',
      [
        style({ transform: 'translateY(30px)', opacity: 0 }),
        animate(
          '400ms cubic-bezier(0.4, 0.0, 0.2, 1)',
          style({ transform: 'translateY(0px)', opacity: 1 }),
        ),
      ],
      { optional: true },
    ),
    // Gentle slide out
    query(
      ':leave',
      [
        style({ transform: 'translateY(0px)', opacity: 1 }),
        animate(
          '250ms ease-in',
          style({ transform: 'translateY(-15px)', opacity: 0 }),
        ),
      ],
      { optional: true },
    ),
  ]),
]);

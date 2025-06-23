// Shared interfaces for Olive and Salt components

// Service related interfaces
export interface Service {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  image: string;
  imageAlt: string;
  includedItems: string[];
  idealFor: string;
  pricing: string;
  startingPrice?: number;
  basePrice?: number;
  pricePerGuest?: number;
  options?: ServiceOption[];
}

export interface ServiceOption {
  key: string;
  label: string;
  description?: string;
  type: 'boolean' | 'number' | 'select';
  price?: number;
  min?: number;
  max?: number;
  choices?: ServiceOptionChoice[];
}

export interface ServiceOptionChoice {
  value: string;
  label: string;
  price?: number;
}

export interface BookingSelection {
  service: Service;
  guests: number;
  options: Record<string, unknown>;
  specialRequests: string;
  estimatedPrice: number;
}

// Testimonial interfaces
export interface Testimonial {
  id: string;
  content: string; // Main testimonial text
  name: string; // Client name
  location?: string; // Client location
  serviceType?: string;
  photo?: string; // Client photo URL
  rating?: number; // 1-5 star rating
  date?: Date;
}

// Gallery interfaces
export interface GalleryImage {
  id: string;
  src: string; // Full size image URL
  alt?: string; // Alt text for accessibility
  caption?: string; // Image caption
  category?: string; // Image category
  thumbnail?: string; // Thumbnail URL
  date?: Date; // Date image was taken
}

export type GalleryCategory =
  | 'all'
  | 'signature-dishes'
  | 'events'
  | 'behind-scenes'
  | 'seasonal';

// Button interfaces
export interface ButtonConfig {
  text: string;
  variant: ButtonVariant;
  size: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  icon?: string;
  iconPosition?: 'left' | 'right';
}

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'text'
  | 'danger';
export type ButtonSize = 'small' | 'medium' | 'large';

// Form interfaces
export interface FormFieldConfig {
  id: string;
  label: string;
  type: FormFieldType;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  options?: FormOption[];
  validation?: FormValidation;
  helpText?: string;
}

export type FormFieldType =
  | 'text'
  | 'email'
  | 'tel'
  | 'textarea'
  | 'select'
  | 'checkbox'
  | 'radio'
  | 'date'
  | 'time'
  | 'number';

export interface FormOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface FormValidation {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  customValidator?: (value: unknown) => string | null;
}

// Hero Section interfaces
export interface HeroContent {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage: string;
  backgroundImageAlt: string;
  backgroundVideo?: string;
  ctaButton?: ButtonConfig;
  primaryCta?: CtaConfig;
  secondaryCta?: CtaConfig;
  eyebrow?: string;
  overlay?: boolean;
  overlayColor?: string;
  overlayOpacity?: number;
  alignment?: 'left' | 'center' | 'right';
  showScrollIndicator?: boolean;
}

export interface CtaConfig {
  text: string;
  route?: string;
  href?: string;
  external?: boolean;
  ariaLabel?: string;
}

// Booking interfaces
export interface BookingStep {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
  isActive: boolean;
  component: string;
}

export interface ServiceSelection {
  serviceId: string;
  customizations?: Record<string, unknown>;
}

export interface EventDetails {
  date: Date;
  time: string;
  partySize: number;
  occasionType: string;
  specialRequests?: string;
}

export interface MenuPreferences {
  dietaryRestrictions: string[];
  cuisinePreferences: string[];
  favoriteIngredients?: string;
  dislikes?: string;
  allergies?: string;
  menuStyle?: string;
}

export interface ContactInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  serviceAddress: Address;
  kitchenNotes?: string;
  contactPreference: 'email' | 'phone';
  howDidYouHear?: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  apartmentNumber?: string;
  accessInstructions?: string;
}

export interface BookingData {
  serviceSelection?: ServiceSelection;
  eventDetails?: EventDetails;
  menuPreferences?: MenuPreferences;
  contactInfo?: ContactInfo;
  pricing?: number;
  bookingReference?: string;
}

// Modal interfaces
export interface ModalConfig {
  title?: string;
  content?: string;
  size: ModalSize;
  closable?: boolean;
  backdrop?: boolean;
  centered?: boolean;
}

export type ModalSize = 'small' | 'medium' | 'large' | 'fullscreen' | 'full';

// Navigation interfaces
export interface NavigationItem {
  label: string;
  route: string;
  external?: boolean;
  children?: NavigationItem[];
}

// Animation interfaces
export interface AnimationConfig {
  type: AnimationType;
  duration?: number;
  delay?: number;
  easing?: string;
}

export type AnimationType =
  | 'fade-in'
  | 'slide-up'
  | 'slide-down'
  | 'slide-left'
  | 'slide-right'
  | 'scale'
  | 'none';

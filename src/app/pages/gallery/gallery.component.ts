import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  galleries = [
    {
      category: 'Plated Dishes',
      description: 'Artfully presented meals ready to serve',
      images: [
        {
          title: 'Pan-Seared Salmon with Quinoa',
          description: 'Wild-caught salmon with roasted vegetables',
        },
        {
          title: 'Mediterranean Bowl',
          description: 'Fresh herbs, olives, and seasonal vegetables',
        },
        {
          title: 'Grass-Fed Steak',
          description: 'With roasted root vegetables and chimichurri',
        },
        {
          title: 'Vegetarian Risotto',
          description: 'Creamy arborio rice with seasonal mushrooms',
        },
        {
          title: 'Thai-Inspired Curry',
          description: 'Coconut curry with fresh vegetables and herbs',
        },
        {
          title: 'Artisanal Pasta',
          description: 'House-made pasta with seasonal sauce',
        },
      ],
    },
    {
      category: 'Prep Work',
      description: 'Behind the scenes ingredient preparation',
      images: [
        {
          title: 'Fresh Herb Garden',
          description: 'Locally sourced herbs and microgreens',
        },
        {
          title: 'Vegetable Mise en Place',
          description: 'Precisely cut seasonal vegetables',
        },
        {
          title: 'Spice Blending',
          description: 'Custom spice combinations for flavor profiles',
        },
        {
          title: 'Bread Making',
          description: 'Fresh artisanal bread preparation',
        },
        {
          title: 'Sauce Preparation',
          description: 'House-made sauces and dressings',
        },
        {
          title: 'Protein Selection',
          description: 'Premium cuts and sustainable seafood',
        },
      ],
    },
    {
      category: 'In-Home Cooking',
      description: 'Chef Sarah at work in client kitchens',
      images: [
        {
          title: 'Kitchen Setup',
          description: 'Organized workspace for efficient cooking',
        },
        {
          title: 'Active Cooking',
          description: 'Multiple dishes in preparation',
        },
        {
          title: 'Client Interaction',
          description: 'Teaching techniques while cooking',
        },
        {
          title: 'Final Plating',
          description: 'Beautiful presentation in your kitchen',
        },
        {
          title: 'Clean Kitchen',
          description: 'Spotless kitchen after service',
        },
        {
          title: 'Happy Clients',
          description: 'Satisfied families enjoying their meals',
        },
      ],
    },
  ];

  selectedCategory = 'Plated Dishes';
  selectedImage: { title: string; description: string } | null = null;

  selectCategory(category: string) {
    this.selectedCategory = category;
  }

  openLightbox(image: { title: string; description: string }) {
    this.selectedImage = image;
  }

  closeLightbox() {
    this.selectedImage = null;
  }
}

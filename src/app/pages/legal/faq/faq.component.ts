import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { StructuredDataService } from '../../../services/structured-data.service';

@Component({
    selector: 'app-faq',
    imports: [CommonModule],
    templateUrl: './faq.component.html',
    styleUrl: './faq.component.scss'
})
export class FaqComponent implements OnInit, OnDestroy {
  private structuredDataService = inject(StructuredDataService);
  private meta = inject(Meta);
  private title = inject(Title);

  faqs = [
    {
      question: 'How far in advance should I book your services?',
      answer:
        "We recommend booking at least 1-2 weeks in advance for regular meal prep services, and 2-4 weeks for special events. However, we understand that sometimes you need last-minute help, so please don't hesitate to reach out - we'll do our best to accommodate your needs.",
      isOpen: false,
    },
    {
      question: 'What areas do you serve?',
      answer:
        'Currently, we serve the greater metropolitan area within a 25-mile radius. This includes downtown, suburbs, and nearby communities. Please contact us to confirm if we serve your specific location.',
      isOpen: false,
    },
    {
      question: 'Do you accommodate dietary restrictions and allergies?',
      answer:
        "Absolutely! We specialize in creating customized meal plans that work with your dietary needs, whether you're vegetarian, vegan, gluten-free, keto, paleo, or have specific food allergies. During our consultation, we'll discuss all your requirements in detail.",
      isOpen: false,
    },
    {
      question: 'What equipment do you need in my kitchen?',
      answer:
        'We work with standard home kitchen equipment including a stove, oven, refrigerator, and basic cookware. If your kitchen lacks certain items, we can bring our own equipment or discuss alternatives during the consultation.',
      isOpen: false,
    },
    {
      question: 'How much do your services cost?',
      answer:
        'Our pricing varies based on the service type, number of people, dietary complexity, and frequency. Weekly meal prep starts at $400/week, special events begin at $150/person, and wellness consultations are $125/session. We provide detailed quotes after our initial consultation.',
      isOpen: false,
    },
    {
      question: 'Do you provide groceries or do I purchase them?',
      answer:
        "We offer both options! We can handle all grocery shopping for you (included in our service fee), or you can purchase groceries yourself if you prefer to control sourcing and budget. We'll provide a detailed shopping list either way.",
      isOpen: false,
    },
    {
      question: 'How long do you typically spend in my kitchen?',
      answer:
        'Meal prep sessions typically take 3-4 hours, depending on the number of meals and complexity. Special event cooking time varies based on menu and guest count. We work efficiently while maintaining our high standards.',
      isOpen: false,
    },
    {
      question: 'Can you teach me cooking techniques while you work?',
      answer:
        "We love sharing knowledge! While our primary focus is meal preparation, we're happy to explain techniques, share tips, and answer questions as we cook. If you're interested in more structured learning, ask about our cooking lesson add-on service.",
      isOpen: false,
    },
    {
      question: 'What happens if I need to cancel or reschedule?',
      answer:
        "We understand that life happens! We ask for at least 24 hours notice for cancellations or rescheduling. Last-minute cancellations may incur a fee, but we're always willing to work with you to find solutions.",
      isOpen: false,
    },
    {
      question: 'Are you insured and licensed?',
      answer:
        'Yes, we are fully licensed, insured, and certified in food safety. We maintain all necessary certifications and insurance coverage to operate professionally in your home.',
      isOpen: false,
    },
  ];

  toggleFaq(index: number): void {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }

  ngOnInit() {
    // Update page title and meta tags
    this.title.setTitle(
      'FAQ | Frequently Asked Questions | Olive & Salt Personal Chef',
    );
    this.meta.updateTag({
      name: 'description',
      content:
        'Find answers to common questions about our personal chef services, pricing, dietary accommodations, service areas, and booking process.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'personal chef FAQ, cooking service questions, chef service information, dietary restrictions',
    });
    this.meta.updateTag({
      property: 'og:title',
      content: 'FAQ | Olive & Salt Personal Chef',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Frequently asked questions about personal chef services, pricing, and accommodations.',
    });

    // Add FAQ structured data
    const faqSchema = this.structuredDataService.getFAQSchema();
    this.structuredDataService.insertStructuredData(faqSchema);
  }

  ngOnDestroy() {
    // Clean up structured data
    this.structuredDataService.removeStructuredData();
  }
}

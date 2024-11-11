'use client';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

// Type for a FAQ item
interface FAQItem {
  question: string;
  answer: string;
}

const FAQItemComponent = ({
  index,
  question,
  answer,
  expandedIndex,
  onToggle,
}: {
  index: number;
  question: string;
  answer: string;
  expandedIndex: number | null;
  onToggle: (index: number) => void;
}) => {
  return (
    <div className="hs-accordion pt-6 pb-3">
      <button
        className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition duration-300 hover:text-gray-500 focus:outline-none"
        onClick={() => onToggle(index)} // Toggle section on click
      >
        {question}
        {expandedIndex === index ? (
          <ChevronUpIcon className="shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500" />
        ) : (
          <ChevronDownIcon className="shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500" />
        )}
      </button>
      <div
        className={`hs-accordion-content overflow-hidden transition-all duration-500 ease-in-out ${
          expandedIndex === index ? 'max-h-[500px]' : 'max-h-0'
        }`}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  // State to track expanded FAQ section
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // FAQ data
  const faqData: FAQItem[] = [
    {
      question: 'Can I cancel at anytime?',
      answer:
        'Yes, you can cancel anytime with no questions asked. We would appreciate your feedback if you choose to do so.',
    },
    {
      question: 'My team has credits. How do we use them?',
      answer:
        'Once your team signs up for a subscription plan, we will assist you in utilizing any credits you may have.',
    },
    {
      question: 'How does Preline\'s pricing work?',
      answer:
        'Preline offers tiered subscription models. We tailor the pricing based on your specific needs to ensure it aligns with your goals.',
    },
    {
      question: 'How secure is Preline?',
      answer:
        'We prioritize the security of your data. Our team works relentlessly to protect the information you trust with us.',
    },
    {
      question: 'How do I get access to a theme I purchased?',
      answer:
        'You can log into your account and access your purchased themes under the "Purchases" section. If you have trouble, contact us for assistance.',
    },
    {
      question: 'Can I upgrade my license type?',
      answer:
        'Yes, you can upgrade your license type. Contact us to apply your original purchase cost towards the upgrade.',
    },
  ];

  // Handle toggling of FAQ sections
  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index); // Toggle open/close
  };

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid md:grid-cols-5 gap-10">
        <div className="md:col-span-2">
          <div className="max-w-xs">
            <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-gray-900">
              Frequently
              <br />
              asked questions
            </h2>
            <p className="mt-1 hidden md:block text-gray-600">
              Answers to the most frequently asked questions.
            </p>
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="hs-accordion-group divide-y divide-gray-200">
            {faqData.map((item, index) => (
              <FAQItemComponent
                key={index}
                index={index}
                question={item.question}
                answer={item.answer}
                expandedIndex={expandedIndex}
                onToggle={handleToggle}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

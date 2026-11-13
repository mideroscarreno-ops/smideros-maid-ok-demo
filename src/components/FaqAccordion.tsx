import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQ_ITEMS } from '../data/maidOkData';
import { FaqItem } from '../types';

type CategoryFilter = 'All' | FaqItem['category'];

const CATEGORIES: CategoryFilter[] = [
  'All',
  'Scheduling & Quotes',
  'Policies & Access',
  'Services',
];

export function FaqAccordion() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');
  const [openId, setOpenId] = useState<string>(FAQ_ITEMS[0].id);

  const visibleItems =
    selectedCategory === 'All'
      ? FAQ_ITEMS
      : FAQ_ITEMS.filter((item) => item.category === selectedCategory);

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? '' : id));
  };

  return (
    <div>
      {/* Filter Controls */}
      <div
        role="tablist"
        aria-label="Filter frequently asked questions"
        className="flex flex-wrap items-center gap-2 mb-8"
      >
        {CATEGORIES.map((category) => {
          const isActive = selectedCategory === category;
          return (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => {
                setSelectedCategory(category);
                const firstInCat =
                  category === 'All'
                    ? FAQ_ITEMS[0]
                    : FAQ_ITEMS.find((i) => i.category === category);
                if (firstInCat) setOpenId(firstInCat.id);
              }}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-sm transition-colors whitespace-nowrap shrink-0 min-h-[40px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#35483D] ${
                isActive
                  ? 'bg-[#35483D] text-[#FAF8F2]'
                  : 'bg-[#EAE5DA] text-[#29332E]/80 hover:bg-[#AEBFAF]/40 hover:text-[#29332E]'
              }`}
            >
              {category === 'All' ? 'All Questions' : category}
            </button>
          );
        })}
      </div>

      {/* Accordion List */}
      <div className="divide-y divide-[#29332E]/12 border-y border-[#29332E]/12">
        {visibleItems.map((item) => {
          const isOpen = openId === item.id;
          const panelId = `faq-panel-${item.id}`;
          const buttonId = `faq-button-${item.id}`;
          return (
            <div key={item.id} className="py-1">
              <h3>
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => handleToggle(item.id)}
                  className="w-full py-5 text-left flex items-center justify-between gap-6 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#35483D] rounded-sm"
                >
                  <span className="text-base sm:text-lg font-medium text-[#29332E] group-hover:text-[#35483D] transition-colors">
                    {item.question}
                  </span>
                  <span className="w-8 h-8 shrink-0 flex items-center justify-center rounded-sm bg-[#EAE5DA]/70 text-[#35483D] group-hover:bg-[#EAE5DA] transition-colors">
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </span>
                </button>
              </h3>
              {isOpen && (
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="pb-6 pr-8 sm:pr-12"
                >
                  <p className="text-sm sm:text-base leading-relaxed text-[#29332E]/80 max-w-3xl">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

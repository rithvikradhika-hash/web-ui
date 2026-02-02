export function initReveal() {
  if (typeof window === 'undefined') return;

  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const nodes = document.querySelectorAll('.reveal');
    console.debug('[reveal] prefers-reduced-motion - revealing', nodes.length, 'elements');
    nodes.forEach((el) => el.classList.add('is-revealed'));
    return;
  }

  const computeDelay = (el: Element) => {
    const explicit = el instanceof HTMLElement && el.dataset.revealDelay;
    if (explicit) return parseInt(explicit, 10) || 0;

    const parentSection = el.closest('section') || el.parentElement;
    if (!parentSection) return 0;

    const siblings = Array.from(parentSection.querySelectorAll('.reveal')) as Element[];
    const index = Math.max(0, siblings.indexOf(el));
    return index * 80; // 80ms stagger default
  };

  const revealNodes = Array.from(document.querySelectorAll('.reveal')) as HTMLElement[];
  console.debug('[reveal] initializing observer for', revealNodes.length, 'elements');

  // If nothing to observe, log and exit
  if (revealNodes.length === 0) {
    console.debug('[reveal] no elements found with .reveal');
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const target = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          const delay = computeDelay(target);
          try {
            target.style.setProperty('--reveal-delay', `${delay}ms`);
            target.style.transitionDelay = `${delay}ms`;
          } catch (e) {}

          target.classList.add('is-revealed');
          console.debug('[reveal] revealed:', target.tagName, 'classList:', target.className, 'delay:', delay);
          observer.unobserve(target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealNodes.forEach((el) => observer.observe(el));
}

export function forceRevealAll() {
  if (typeof window === 'undefined') return;
  const nodes = Array.from(document.querySelectorAll('.reveal')) as HTMLElement[];
  console.debug('[reveal] forceRevealAll - revealing', nodes.length, 'elements');
  nodes.forEach((el, i) => {
    try {
      el.style.setProperty('--reveal-delay', `${i * 10}ms`);
      el.style.transitionDelay = `0ms`;
    } catch (e) {}
    el.classList.add('is-revealed');
  });
}


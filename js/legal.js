// ============================================================
// Nav — solid on scroll (same behavior as index.html)
// ============================================================
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 24);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// ============================================================
// TOC scrollspy — highlight the section currently in view
// ============================================================
const tocLinks = document.querySelectorAll('.legal-toc a');
const sections = [...document.querySelectorAll('.legal-content section[id]')];

if (tocLinks.length && sections.length) {
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const link = document.querySelector(`.legal-toc a[href="#${entry.target.id}"]`);
      if (!link) return;
      tocLinks.forEach((a) => a.classList.remove('active'));
      link.classList.add('active');
    });
  }, { rootMargin: '-15% 0px -70% 0px', threshold: 0 });

  sections.forEach((s) => spy.observe(s));
}

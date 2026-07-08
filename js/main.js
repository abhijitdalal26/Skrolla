// ============================================================
// Nav — solid on scroll
// ============================================================
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 24);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// ============================================================
// Scroll reveal — IntersectionObserver
// ============================================================
const revealEls = document.querySelectorAll('.reveal, .reveal-scale, .onboarding-stage');
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.18, rootMargin: '0px 0px -8% 0px' });

revealEls.forEach((el) => io.observe(el));

// ============================================================
// Search grid — real covers, populated once
// ============================================================
const ISBNS = [
  '9780735211292', '9780525559474', '9780307588364',
  '9780756404741', '9781501161933', '9780571334650',
  '9780385547345', '9780593135204', '9780062060631',
  '9781526622426', '9780441013593', '9780735224292',
  '9780316556354', '9780062315007', '9781455563920',
  '9781476746586', '9780439708180', '9780525466673',
];
const coverUrl = (isbn) =>
  `https://books.google.com/books/content?vid=ISBN:${isbn}&printsec=frontcover&img=1&zoom=1&edge=curl`;

const searchGrid = document.getElementById('searchGrid');
if (searchGrid) {
  ISBNS.forEach((isbn) => {
    const cell = document.createElement('div');
    cell.className = 'cover';
    cell.style.aspectRatio = '1';
    cell.style.backgroundImage = `url(${coverUrl(isbn)})`;
    searchGrid.appendChild(cell);
  });
}

// ============================================================
// Pill marquee — duplicate content for seamless loop
// ============================================================
const pillTrack = document.getElementById('pillTrack');
if (pillTrack) {
  pillTrack.innerHTML += pillTrack.innerHTML;
}

// ============================================================
// Hero phone — subtle mouse parallax (desktop only)
// ============================================================
const heroStage = document.querySelector('.hero-stage');
const heroPhoneWrap = document.querySelector('.hero-phone-wrap');
if (heroStage && heroPhoneWrap && matchMedia('(hover: hover)').matches) {
  heroStage.addEventListener('mousemove', (e) => {
    const rect = heroStage.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    heroPhoneWrap.style.transform = `rotateY(${-8 + x * 10}deg) rotateX(${4 - y * 8}deg)`;
  });
  heroStage.addEventListener('mouseleave', () => {
    heroPhoneWrap.style.transform = '';
  });
}

// ============================================================
// Waitlist form — local-only capture (no backend wired yet)
// ============================================================
const waitlistForm = document.getElementById('waitlistForm');
if (waitlistForm) {
  waitlistForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('waitlistEmail').value.trim();
    if (!email) return;

    try {
      const list = JSON.parse(localStorage.getItem('skrolla_waitlist') || '[]');
      list.push({ email, ts: Date.now() });
      localStorage.setItem('skrolla_waitlist', JSON.stringify(list));
    } catch (err) { /* localStorage unavailable — ignore */ }

    document.getElementById('formNote').style.display = 'none';
    waitlistForm.style.display = 'none';
    document.getElementById('formSuccess').style.display = 'block';
  });
}

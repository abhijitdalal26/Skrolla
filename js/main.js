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
const coverUrl = (isbn) => `./covers/${isbn}.jpg`;

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

// ============================================================
// Interactive StoryMode Mockup (Dune)
// ============================================================
const DUNE_CARDS_DATA = [
  {
    title: "Arrakis Obsession",
    desc: "Paul Atreides travels to the harsh desert planet Arrakis, the universe's only source of the invaluable spice melange. As political tensions boil and threats from House Harkonnen loom, Paul begins to discover his own path, realizing that this planet holds a fate greater than he ever imagined."
  },
  {
    title: "The Betrayal",
    desc: "House Atreides is betrayed from within, leading to a surprise attack by the Harkonnens and imperial troops. Duke Leto is captured and dies, while Paul and his mother Jessica escape into the deep desert. They must seek refuge with the mysterious, native Fremen to survive."
  },
  {
    title: "Fremen Legend",
    desc: "In the desert, Paul is tested by the Fremen. He earns their respect, masters their survival techniques, and adopts the name Muad'Dib. The Fremen begin to view him as their long-awaited messiah, who will lead them to transform Arrakis into a green, lush paradise."
  },
  {
    title: "The Spice Awakening",
    desc: "Paul drinks the Water of Life, falling into a deep coma but surviving. This unlocks his prescient abilities completely, giving him sight across space and time. He accepts his role as the Kwisatz Haderach, commanding the Fremen forces to launch a massive rebellion."
  },
  {
    title: "Emperor of the Galaxy",
    desc: "Paul leads the Fremen in a decisive victory over the Emperor's legions and House Harkonnen. By threatening to destroy the spice, Paul forces the Emperor to abdicate, secures the throne, and prepares to lead the empire into a new era, though he fears the holy war his victory will spark."
  }
];

let activeCardIndex = 0;

const smChatView = document.getElementById('smChatView');
const smCardsView = document.getElementById('smCardsView');
const smInlinePagerBtn = document.getElementById('smInlinePagerBtn');
const smCardsBackBtn = document.getElementById('smCardsBackBtn');
const smCardsPageNum = document.getElementById('smCardsPageNum');
const smCardTitle = document.getElementById('smCardTitle');
const smCardDesc = document.getElementById('smCardDesc');
const smCardPrevBtn = document.getElementById('smCardPrevBtn');
const smCardNextBtn = document.getElementById('smCardNextBtn');
const progressBars = document.querySelectorAll('.sm-cards-progress .progress-bar');

const updateActiveCard = (index) => {
  activeCardIndex = index;
  if (smCardsPageNum) smCardsPageNum.textContent = `${index + 1}/${DUNE_CARDS_DATA.length}`;
  if (smCardTitle) smCardTitle.textContent = DUNE_CARDS_DATA[index].title;
  if (smCardDesc) smCardDesc.textContent = DUNE_CARDS_DATA[index].desc;
  
  // Update progress bars
  progressBars.forEach((bar, idx) => {
    bar.className = 'progress-bar';
    if (idx < index) {
      bar.classList.add('completed');
    } else if (idx === index) {
      bar.classList.add('active');
    }
  });
};

if (smInlinePagerBtn && smChatView && smCardsView) {
  smInlinePagerBtn.addEventListener('click', () => {
    smChatView.classList.remove('active');
    smCardsView.classList.add('active');
    updateActiveCard(0);
  });
}

if (smCardsBackBtn && smChatView && smCardsView) {
  smCardsBackBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    smCardsView.classList.remove('active');
    smChatView.classList.add('active');
  });
}

if (smCardPrevBtn) {
  smCardPrevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (activeCardIndex > 0) {
      updateActiveCard(activeCardIndex - 1);
    }
  });
}

if (smCardNextBtn) {
  smCardNextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (activeCardIndex < DUNE_CARDS_DATA.length - 1) {
      updateActiveCard(activeCardIndex + 1);
    } else {
      updateActiveCard(0);
    }
  });
}

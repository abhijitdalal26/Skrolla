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

// ============================================================
// Daily Discovery Carousel Slideshow (Auto-sliding page-by-page)
// ============================================================
const ddTrack = document.getElementById('dailyDiscoveryTrack');
const ddCards = document.querySelectorAll('#dailyDiscoveryTrack .daily-discovery-card');
let ddIndex = 0;
if (ddTrack && ddCards.length > 0) {
  setInterval(() => {
    ddIndex = (ddIndex + 1) % ddCards.length;
    // Each card is 210px wide with an 8px gap. Total step offset is 218px.
    const stepOffset = 218;
    ddTrack.style.transform = `translateX(-${ddIndex * stepOffset}px)`;
  }, 4000);
}

// ============================================================
// TFIOS Story Cards — Phone 3 interactive swipe & text animation
// ============================================================
const TFIOS_CARDS = [
  {
    title: 'Terminal Diagnosis',
    body: 'Hazel, a teenager with thyroid cancer that has spread to her lungs, has resigned herself to an early death. Her life is forever changed when she meets Augustus Waters, a charming and handsome teen who lost his leg to bone cancer. Despite their illnesses, they share a dark humor and a deep understanding of the meaning of life.',
    glow: 'rgba(0, 120, 180, 0.40)',
  },
  {
    title: 'Falling in Love',
    body: 'As Hazel and Augustus grow closer, they must confront the harsh realities of their mortality and the impermanence of their love. Hazel\'s feelings for Augustus are put to the test when she learns about his own health struggles, forcing her to reevaluate her priorities and fears. Their love becomes a source of comfort and strength, but also a reminder of the fragility of life.',
    glow: 'rgba(0, 90, 160, 0.38)',
  },
  {
    title: 'Shattered Illusions',
    body: 'Augustus\'s health takes a devastating turn, and Hazel is forced to confront the possibility of losing him. A trip to Amsterdam to meet their favorite author, Peter Van Houten, ends in disaster, shattering their illusions about life, love, and the meaning of it all. This turning point marks a shift in Hazel\'s perspective, as she begins to appreciate the beauty and complexity of life, even in the face of suffering.',
    glow: 'rgba(10, 60, 120, 0.42)',
  },
  {
    title: 'The Final Goodbye',
    body: 'As Augustus\'s condition worsens, Hazel and he come to terms with their situation. Augustus passes away, leaving Hazel devastated. In the aftermath, Hazel discovers a letter Augustus had written for her — a final declaration of love that transforms her grief into something more bearable.',
    glow: 'rgba(20, 40, 100, 0.45)',
  },
  {
    title: 'An Okay Infinity',
    body: 'Hazel comes to understand that love, even when brief and filled with loss, is worth experiencing. She accepts that Augustus\'s love for her — and hers for him — made an infinity within their numbered days. She learns to live in the present, cherishing every moment and finding peace in the fact that they had each other, even if only for a little while.',
    glow: 'rgba(30, 80, 150, 0.38)',
  },
];

let tfiosIndex = 0;

const tfiosTitle = document.getElementById('tfiosCardTitle');
const tfiosBody = document.getElementById('tfiosCardBody');
const tfiosCardNum = document.getElementById('tfiosCardNum');
const tfiosGlow = document.querySelector('.tfios-card-glow');
const tfiosPbs = document.querySelectorAll('.tfios-pb');

function setTfiosCard(idx, direction) {
  if (!tfiosTitle || !tfiosBody) return;
  const card = TFIOS_CARDS[idx];

  // Exit animation
  tfiosTitle.classList.add('exit');
  tfiosBody.classList.add('exit');

  setTimeout(() => {
    tfiosTitle.textContent = card.title;
    tfiosBody.textContent = card.body;
    if (tfiosCardNum) tfiosCardNum.textContent = `${idx + 1} / ${TFIOS_CARDS.length}`;

    // Update glow colour
    if (tfiosGlow) {
      tfiosGlow.style.background = `radial-gradient(ellipse 80% 60% at 50% 90%, ${card.glow} 0%, transparent 100%)`;
    }

    // Update progress bars
    tfiosPbs.forEach((pb, i) => {
      pb.classList.toggle('tfios-pb-active', i <= idx);
    });

    // Remove exit, add enter
    tfiosTitle.classList.remove('exit');
    tfiosBody.classList.remove('exit');
    tfiosTitle.classList.add('enter');
    tfiosBody.classList.add('enter');

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        tfiosTitle.classList.remove('enter');
        tfiosBody.classList.remove('enter');
      });
    });
  }, 260);
}

const tfiosPrev = document.getElementById('tfiosPrev');
const tfiosNext = document.getElementById('tfiosNext');

if (tfiosPrev) {
  tfiosPrev.addEventListener('click', () => {
    tfiosIndex = tfiosIndex > 0 ? tfiosIndex - 1 : TFIOS_CARDS.length - 1;
    setTfiosCard(tfiosIndex, 'prev');
  });
}

if (tfiosNext) {
  tfiosNext.addEventListener('click', () => {
    tfiosIndex = (tfiosIndex + 1) % TFIOS_CARDS.length;
    setTfiosCard(tfiosIndex, 'next');
  });
}

// Auto-advance phone 3 cards every 4 seconds
setInterval(() => {
  tfiosIndex = (tfiosIndex + 1) % TFIOS_CARDS.length;
  setTfiosCard(tfiosIndex, 'next');
}, 4000);

// ============================================================
// FAQ Accordion Interactivity
// ============================================================
document.querySelectorAll('.faq-item').forEach(item => {
  const trigger = item.querySelector('.faq-trigger');
  const content = item.querySelector('.faq-content');
  
  if (trigger && content) {
    trigger.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all items
      document.querySelectorAll('.faq-item').forEach(i => {
        i.classList.remove('active');
        const c = i.querySelector('.faq-content');
        if (c) c.style.maxHeight = null;
      });
      
      // Open clicked item if it wasn't active
      if (!isActive) {
        item.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  }
});


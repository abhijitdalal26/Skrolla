/**
 * SKROLLA WEB DEMO — LIVE SUPABASE, 398+ TAGS & THEME ENGINE
 */

const SUPABASE_URL = "https://rhljzgnybukfqmdujqfn.supabase.co/rest/v1";
const SUPABASE_KEY = "sb_publishable_Ny8sAIyQ9n5H9wEVhR2V9Q_-rbRHrpF";
const R2_COVER_CDN = "https://pub-77f77d9160fd473c8b4e4e7ca1aa2e18.r2.dev/";

// Categorized 398+ Tag Catalog
const TAG_CATALOG = [
  {
    title: "Fantasy & Magic",
    icon: "wand-2",
    tags: ["Fantasy", "Arthurian Fantasy", "Contemporary Fantasy", "Cozy Fantasy", "Dark Fantasy", "Epic Fantasy", "Fae & Folk Fantasy", "Fairy Tale", "Fairy Tale Retelling", "Gothic Fantasy", "Grimdark", "Heroic Fantasy", "High Fantasy", "Historical Fantasy", "Isekai", "LitRPG", "Low Fantasy", "Magical Realism", "Middle Grade Fantasy", "Mythological Fantasy", "Portal Fantasy", "Progression Fantasy", "Romantasy", "Sword & Sorcery", "Urban Fantasy", "Chosen One", "Dragons", "Gods", "Immortality", "Magic", "Magic Schools", "Mermaids & Sirens", "Mythology", "Prophecy", "Quest", "Witches"]
  },
  {
    title: "Science Fiction & Future Worlds",
    icon: "rocket",
    tags: ["Science Fiction", "Alien Invasion", "Alternate History", "Climate Fiction", "Cyberpunk", "Dystopian Sci-Fi", "First Contact", "Hard Sci-Fi", "Military Sci-Fi", "Near-Future Thriller", "Post-Apocalyptic", "Solarpunk", "Space Opera", "Speculative Fiction", "Steampunk", "Time Travel", "Aliens", "Artificial Intelligence", "Cybernetics", "Dystopia", "Genetic Engineering", "Pandemic", "Parallel Universes", "Robotics", "Space", "Space Travel", "Transhumanism", "Virtual Reality"]
  },
  {
    title: "Horror & Supernatural",
    icon: "ghost",
    tags: ["Horror", "Body Horror", "Cosmic Horror", "Creature Horror", "Folk Horror", "Gothic Horror", "Haunted House", "Paranormal Horror", "Psychological Horror", "Slasher", "Supernatural Horror", "Angels", "Demons", "Ghosts", "Monsters", "Vampires", "Werewolves", "Zombies"]
  },
  {
    title: "Mystery & Crime",
    icon: "fingerprint",
    tags: ["Mystery", "Crime", "Amateur Sleuth", "Cozy Mystery", "Detective Fiction", "Forensic Mystery", "Hardboiled Crime", "Heist", "Historical Mystery", "Locked Room Mystery", "Murder Mystery", "Noir", "Police Procedural", "Espionage", "Investigation", "Organized Crime", "Unreliable Narrator"]
  },
  {
    title: "Thriller & Suspense",
    icon: "shield-alert",
    tags: ["Thriller", "Action Thriller", "Conspiracy Thriller", "Domestic Thriller", "Financial Thriller", "Legal Thriller", "Medical Thriller", "Paranormal Thriller", "Political Thriller", "Psychological Thriller", "Romantic Suspense", "Spy Thriller", "Techno Thriller"]
  },
  {
    title: "Romance & Tropes",
    icon: "heart",
    tags: ["Romance", "Age Gap Romance", "Billionaire Romance", "Clean Romance", "Contemporary Romance", "Dark Romance", "Enemies to Lovers", "Fake Dating", "Forced Proximity", "Friends to Lovers", "Gothic Romance", "Historical Romance", "LGBTQ+ Romance", "Mafia Romance", "Paranormal Romance", "Romantic Comedy", "Second Chance Romance", "Slow Burn", "Sports Romance"]
  },
  {
    title: "History & War",
    icon: "landmark",
    tags: ["History", "Historical Fiction", "Ancient History", "Cold War History", "Colonial History", "Cultural History", "Medieval History", "Military History", "Modern History", "Family Saga", "Historical Adventure", "War Fiction", "World War I", "World War II", "Holocaust", "Medieval", "Empire"]
  },
  {
    title: "Literary & Contemporary Fiction",
    icon: "book-open",
    tags: ["Literary Fiction", "Contemporary Fiction", "Classics", "Short Stories", "Poetry", "Humor", "Young Adult", "New Adult", "Autofiction", "Campus Novel", "Coming of Age", "Dark Academia", "Dual Timeline", "Epistolary", "Southern Gothic", "Surrealism", "Diverse Voices"]
  },
  {
    title: "Manga, Comics & Graphic Novels",
    icon: "image",
    tags: ["Manga", "Graphic Novels", "Josei", "Magical Girl", "Manhua", "Manhwa", "Mecha", "Seinen", "Shōjo", "Shōnen", "Sports Manga", "Webcomic", "Graphic Memoir"]
  },
  {
    title: "Biography & Memoir",
    icon: "user",
    tags: ["Biography", "Memoir", "Celebrity Biography", "Childhood Memoir", "Food Memoir", "Literary Biography", "Music Biography", "Political Biography", "Sports Biography", "Travel Memoir", "War Memoir"]
  },
  {
    title: "Self-Help, Psychology & Wellness",
    icon: "brain",
    tags: ["Self-Help", "Psychology", "Behavioral Psychology", "Cognitive Psychology", "Habits & Behavior", "Mindfulness", "Positive Psychology", "Recovery Memoir", "Relationships", "Social Psychology", "Trauma & Recovery", "Wellness", "Behavioral Economics"]
  },
  {
    title: "Business, Career & Money",
    icon: "briefcase",
    tags: ["Business", "Business Biography", "Career Development", "Communication", "Entrepreneurship", "Investing", "Leadership", "Management", "Marketing", "Personal Finance", "Productivity", "Startup"]
  },
  {
    title: "Science & Big Ideas",
    icon: "microscope",
    tags: ["Science", "Philosophy", "Religion & Spirituality", "Astronomy", "Biology", "Chemistry", "Cosmology", "Genetics", "Mathematics", "Neuroscience", "Physics", "Popular Science", "Ethics", "Existentialism", "Stoicism"]
  },
  {
    title: "Travel, Food, Sports & Culture",
    icon: "globe",
    tags: ["Travel", "Food & Cooking", "Sports", "Baking", "Wine & Drinks", "World Cuisine", "Football", "Basketball", "Ancient Greece", "Ancient Rome", "China", "India", "Japan", "Exploration", "Mountains", "Ocean", "Art", "Music"]
  },
  {
    title: "Themes & Life Topics",
    icon: "bookmark",
    tags: ["Love", "Family", "Friendship", "Found Family", "Betrayal", "Revenge", "Loyalty", "Secrets", "Identity", "Self-Discovery", "Grief", "Loss", "Mental Health", "Redemption", "Justice", "Power", "Survival", "Hope", "Freedom", "Feminism", "Corruption", "Revolution"]
  },
  {
    title: "Mood & Vibe",
    icon: "sparkles",
    tags: ["Cozy", "Feel-Good", "Funny", "Uplifting", "Warm", "Hopeful", "Emotional", "Heartbreaking", "Nostalgic", "Dark", "Gritty", "Intense", "Suspenseful", "Thrilling", "Fast-Paced", "Slow Burn", "Gripping", "Atmospheric", "Mysterious", "Spooky", "Romantic", "Spicy", "Witty", "Thought-Provoking", "Whimsical", "Melancholic"]
  }
];

// State Manager
const state = {
  activeTab: "home",
  theme: "light",
  seenIsbns: new Set(),
  likedIsbns: new Set(),
  savedBooks: JSON.parse(localStorage.getItem("skrolla_saved_books") || "[]"),
  chatHistory: JSON.parse(localStorage.getItem("skrolla_chat_history") || "{}"),
  currentFeedBooks: [],
  currentFeedIndex: 0,
  activeBookForChat: null,
  activeBookForModal: null,
};

// Helpers
function getCoverUrl(coverFile) {
  if (!coverFile) return "images/optimized/00-hero-screen.png";
  if (coverFile.startsWith("http")) return coverFile;
  return `${R2_COVER_CDN}${coverFile}`;
}

async function callSupabaseRpc(rpcName, bodyParams = {}) {
  try {
    const res = await fetch(`${SUPABASE_URL}/rpc/${rpcName}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey": SUPABASE_KEY,
        "Authorization": `Bearer ${SUPABASE_KEY}`
      },
      body: JSON.stringify(bodyParams)
    });
    if (!res.ok) throw new Error(`RPC ${rpcName} failed: ${res.statusText}`);
    return await res.json();
  } catch (err) {
    console.warn(`Supabase RPC fallback for ${rpcName}:`, err);
    return null;
  }
}

// DOM Elements
const navItems = document.querySelectorAll(".nav-item");
const tabViews = document.querySelectorAll(".tab-view");
const savedCountBadge = document.getElementById("savedCountBadge");
const savedTabCount = document.getElementById("savedTabCount");
const chatsTabCount = document.getElementById("chatsTabCount");

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  setupThemeEngine();
  setupNavigation();
  setupSearch();
  setupLaptopTagsSection();
  setupLibraryTabs();
  setupModals();
  setupStoryModeChat();
  updateSavedBadges();

  // Load initial catalog data
  loadHomeShelves();
  loadPersonalizedFeed();
  if (window.lucide) {
    lucide.createIcons();
  }
});

// ============================================================
// 0. THEME SWITCHER ENGINE (LIGHT / DARK)
// ============================================================
function setupThemeEngine() {
  const html = document.documentElement;
  html.setAttribute("data-theme", state.theme);

  const themeBtn = document.getElementById("themeToggleBtn");
  const mobileThemeBtn = document.getElementById("mobileThemeBtn");

  const updateThemeUI = (theme) => {
    state.theme = theme;
    html.setAttribute("data-theme", theme);
    localStorage.setItem("skrolla_theme", theme);
    if (mobileThemeBtn) mobileThemeBtn.textContent = theme === "dark" ? "🌙" : "☀️";
  };

  if (themeBtn) {
    themeBtn.onclick = () => {
      const nextTheme = state.theme === "dark" ? "light" : "dark";
      updateThemeUI(nextTheme);
    };
  }

  if (mobileThemeBtn) {
    mobileThemeBtn.onclick = () => {
      const nextTheme = state.theme === "dark" ? "light" : "dark";
      updateThemeUI(nextTheme);
    };
  }
}

// ============================================================
// 1. NAVIGATION & TAB SWITCHING
// ============================================================
function setupNavigation() {
  navItems.forEach(btn => {
    btn.addEventListener("click", () => {
      const tab = btn.dataset.tab;
      switchTab(tab);
    });
  });

  const exploreFeedBtn = document.getElementById("exploreFeedBtn");
  if (exploreFeedBtn) {
    exploreFeedBtn.addEventListener("click", () => switchTab("feed"));
  }

  const libExploreBtn = document.getElementById("libExploreBtn");
  if (libExploreBtn) {
    libExploreBtn.addEventListener("click", () => switchTab("feed"));
  }
  const detailsBackBtn = document.getElementById("detailsBackBtn");
  if (detailsBackBtn) {
    detailsBackBtn.addEventListener("click", () => {
      switchTab(state.previousTab || "home");
    });
  }
}

function switchTab(tabId) {
  state.previousTab = state.activeTab;
  state.activeTab = tabId;
  navItems.forEach(item => {
    item.classList.toggle("active", item.dataset.tab === tabId);
  });
  tabViews.forEach(view => {
    view.classList.toggle("active", view.id === `tab-${tabId}`);
  });

  if (tabId === "library") {
    renderLibrary();
  }
}

// ============================================================
// 2. HOME TAB DATA FETCHING
// ============================================================
async function loadHomeShelves() {
  const daySeed = Math.floor(Date.now() / (1000 * 60 * 60 * 24));
  
  const feedRows = await callSupabaseRpc("get_home_feed", {
    p_seed: daySeed,
    p_k_per_section: 12
  });

  if (feedRows && feedRows.length > 0) {
    const dailyPicks = feedRows.filter(r => r.section_id === "because_picked" || r.section_id === "discover_new");
    let heroBooks = dailyPicks.slice(0, 8);
    if (heroBooks.length < 6) {
      const extras = feedRows.filter(r => r.section_id === "highly_rated" || r.section_id === "nyt");
      heroBooks = [...heroBooks, ...extras].slice(0, 8);
    }
    setupHeroCarousel(heroBooks);
    
    renderShelf("shelfPicked", feedRows.filter(r => r.section_id === "because_picked"));
    renderShelf("shelfNyt", feedRows.filter(r => r.section_id === "nyt"));
    renderShelf("shelfScifi", feedRows.filter(r => r.section_id === "highly_rated"));
    renderShelf("shelfPopular", feedRows.filter(r => r.section_id === "manga" || r.section_id === "discover_new"));
  } else {
    const fallbackBooks = await callSupabaseRpc("search_books", { query: "fiction", limit_n: 30 });
    if (fallbackBooks && fallbackBooks.length > 0) {
      setupHeroCarousel(fallbackBooks.slice(0, 8));
      renderShelf("shelfPicked", fallbackBooks.slice(1, 9));
      renderShelf("shelfNyt", fallbackBooks.slice(9, 17));
      renderShelf("shelfScifi", fallbackBooks.slice(17, 24));
      renderShelf("shelfPopular", fallbackBooks.slice(24, 30));
    }
  }
}

let heroCarouselTimer = null;
let currentHeroIndex = 0;

function setupHeroCarousel(books) {
  if (!books || books.length === 0) return;
  
  const carousel = document.getElementById("homeHeroCarousel");
  const slides = document.getElementById("heroCarouselSlides");
  const dotsContainer = document.getElementById("heroCarouselDots");
  const prevBtn = document.getElementById("heroCarouselPrev");
  const nextBtn = document.getElementById("heroCarouselNext");
  
  if (!carousel || !slides || !dotsContainer) return;
  
  currentHeroIndex = 0;
  
  // Render pagination dots
  dotsContainer.innerHTML = "";
  books.forEach((_, idx) => {
    const dot = document.createElement("span");
    dot.className = `carousel-dot ${idx === 0 ? "active" : ""}`;
    dot.onclick = () => {
      goToHeroSlide(idx);
    };
    dotsContainer.appendChild(dot);
  });
  
  function updateSlide(index) {
    currentHeroIndex = index;
    const book = books[index];
    const coverUrl = getCoverUrl(book.cover_file);
    
    // Add fade-out transition class
    slides.classList.add("fade-out");
    
    setTimeout(() => {
      // Update contents
      document.getElementById("heroCoverImg").src = coverUrl;
      document.getElementById("heroBgBlur").style.backgroundImage = `url(${coverUrl})`;
      document.getElementById("heroTitle").textContent = book.title || "Featured Discovery";
      document.getElementById("heroAuthor").innerHTML = `by <span class="author-click-btn" onclick="searchByAuthor('${escapeHtml(book.author || '')}')">${escapeHtml(book.author || "Unknown")}</span>`;
      document.getElementById("heroDesc").textContent = book.description || "Discover this highly acclaimed title on Skrolla.";
      
      const tagsContainer = document.getElementById("heroTags");
      tagsContainer.innerHTML = "";
      let genres = [];
      if (typeof book.genres === "string") {
        try { genres = JSON.parse(book.genres); } catch (e) { genres = [book.genres]; }
      } else if (Array.isArray(book.genres)) {
        genres = book.genres;
      }
      genres.slice(0, 3).forEach(g => {
        const pill = document.createElement("span");
        pill.className = "tag-pill";
        pill.textContent = g;
        tagsContainer.appendChild(pill);
      });
      
      // Update action button handlers
      document.getElementById("heroChatBtn").onclick = (e) => {
        e.stopPropagation();
        openStoryModeChat(book);
      };
      document.getElementById("heroSaveBtn").onclick = (e) => {
        e.stopPropagation();
        toggleSaveBook(book);
      };
      
      // Update slide click to navigate to the new dedicated Details Tab
      document.getElementById("heroCarouselSlides").onclick = () => {
        showBookDetails(book);
      };
      
      // Update active dot
      const dots = dotsContainer.querySelectorAll(".carousel-dot");
      dots.forEach((dot, idx) => {
        dot.classList.toggle("active", idx === index);
      });
      
      // Initialize Lucide icons on dynamic content
      if (window.lucide) {
        lucide.createIcons();
      }
      
      // Fade in
      slides.classList.remove("fade-out");
    }, 350);
  }
  
  function nextHeroSlide() {
    let nextIdx = (currentHeroIndex + 1) % books.length;
    updateSlide(nextIdx);
  }
  
  function prevHeroSlide() {
    let prevIdx = (currentHeroIndex - 1 + books.length) % books.length;
    updateSlide(prevIdx);
  }
  
  function goToHeroSlide(idx) {
    updateSlide(idx);
    resetHeroTimer();
  }
  
  // Set button listeners
  if (prevBtn) {
    prevBtn.onclick = (e) => {
      e.stopPropagation();
      prevHeroSlide();
      resetHeroTimer();
    };
  }
  if (nextBtn) {
    nextBtn.onclick = (e) => {
      e.stopPropagation();
      nextHeroSlide();
      resetHeroTimer();
    };
  }
  
  function startHeroTimer() {
    if (heroCarouselTimer) clearInterval(heroCarouselTimer);
    heroCarouselTimer = setInterval(nextHeroSlide, 5000);
  }
  
  function resetHeroTimer() {
    startHeroTimer();
  }
  
  // Pause on hover
  carousel.onmouseenter = () => {
    if (heroCarouselTimer) clearInterval(heroCarouselTimer);
  };
  carousel.onmouseleave = () => {
    startHeroTimer();
  };
  
  // Render initial slide
  updateSlide(0);
  startHeroTimer();
}

function renderShelf(containerId, books) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = "";

  if (!books || books.length === 0) {
    container.innerHTML = "<p style='color:var(--text-muted);font-size:13px;'>Loading titles...</p>";
    return;
  }

  books.forEach(b => {
    const card = document.createElement("div");
    card.className = "book-card";
    card.onclick = () => showBookDetails(b);

    card.innerHTML = `
      <div class="card-cover-wrap">
        <img src="${getCoverUrl(b.cover_file)}" alt="${escapeHtml(b.title)}" loading="lazy">
      </div>
      <div class="card-title">${escapeHtml(b.title)}</div>
      <div class="card-author">by <span class="author-click-btn" onclick="event.stopPropagation(); searchByAuthor('${escapeHtml(b.author || '')}')">${escapeHtml(b.author || "Unknown")}</span></div>
    `;
    container.appendChild(card);
  });
}

// ============================================================
// 3. FOR YOU FEED (REELS) ENGINE
// ============================================================
async function loadPersonalizedFeed() {
  const loader = document.getElementById("feedLoader");
  const slideContent = document.getElementById("feedSlideContent");
  if (loader) loader.classList.remove("hidden");
  if (slideContent) slideContent.classList.add("hidden");

  const books = await callSupabaseRpc("match_books_personalized", {
    seen_isbns: Array.from(state.seenIsbns),
    k: 25,
    jitter_seed: Math.floor(Math.random() * 10000),
    p_explore_floor: 0.25,
    p_explore_ceiling: 0.90
  });

  let loadedBooks = [];
  if (books && books.length > 0) {
    loadedBooks = books;
  } else {
    const fallback = await callSupabaseRpc("search_books", { query: "fantasy", limit_n: 20 });
    if (fallback && fallback.length > 0) {
      loadedBooks = fallback;
    }
  }

  if (loadedBooks.length > 0) {
    state.currentFeedBooks = loadedBooks;
    state.currentFeedIndex = 0;
    if (loader) loader.classList.add("hidden");
    if (slideContent) slideContent.classList.remove("hidden");
    renderFeedSlide(0);
    setupFeedNavigationControls();
  } else {
    if (loader) {
      loader.innerHTML = "<p>Failed to load feed. Please try again later.</p>";
    }
  }
}

function renderFeedSlide(idx) {
  const books = state.currentFeedBooks;
  if (!books || books.length === 0 || idx < 0 || idx >= books.length) return;

  state.currentFeedIndex = idx;
  const book = books[idx];
  state.seenIsbns.add(book.isbn13);

  const slideContent = document.getElementById("feedSlideContent");
  if (slideContent) slideContent.classList.remove("active");

  setTimeout(() => {
    // Populate layout elements
    document.getElementById("feedCoverImg").src = getCoverUrl(book.cover_file);
    document.getElementById("feedTitle").textContent = book.title;
    document.getElementById("feedAuthor").innerHTML = `by <span class="author-click-btn" onclick="searchByAuthor('${escapeHtml(book.author || '')}')">${escapeHtml(book.author || "Unknown")}</span>`;
    document.getElementById("feedRating").innerHTML = `<i data-lucide="star"></i> ${book.avg_rating || "4.5"}`;
    document.getElementById("feedYear").textContent = book.pub_year || "2024";

    // Synopsis collapsible
    renderToggledDescription("feedDesc", book.description, 280);

    // Genres list
    const genresList = document.getElementById("feedGenres");
    genresList.innerHTML = "";
    let genres = [];
    if (typeof book.genres === "string") {
      try { genres = JSON.parse(book.genres); } catch (e) { genres = [book.genres]; }
    } else if (Array.isArray(book.genres)) {
      genres = book.genres;
    }
    genres.slice(0, 4).forEach(g => {
      const pill = document.createElement("span");
      pill.className = "tag-pill";
      pill.textContent = g;
      genresList.appendChild(pill);
    });

    // Action button clicks
    document.getElementById("feedChatBtn").onclick = (e) => {
      e.stopPropagation();
      openStoryModeChat(book);
    };

    const saveBtn = document.getElementById("feedSaveBtn");
    const isSaved = state.savedBooks.some(b => b.isbn13 === book.isbn13);
    saveBtn.innerHTML = isSaved ? `<i data-lucide="bookmark-check"></i> Saved` : `<i data-lucide="bookmark"></i> Save to Library`;
    saveBtn.onclick = (e) => {
      e.stopPropagation();
      toggleSaveBook(book);
      const updatedSaved = state.savedBooks.some(b => b.isbn13 === book.isbn13);
      saveBtn.innerHTML = updatedSaved ? `<i data-lucide="bookmark-check"></i> Saved` : `<i data-lucide="bookmark"></i> Save to Library`;
      if (window.lucide) lucide.createIcons();
    };

    // Update navigation buttons
    const prevBtn = document.getElementById("feedPrevBtn");
    const nextBtn = document.getElementById("feedNextBtn");
    if (prevBtn) prevBtn.classList.toggle("disabled", idx === 0);
    if (nextBtn) nextBtn.classList.toggle("disabled", idx === books.length - 1);

    if (slideContent) slideContent.classList.add("active");
    if (window.lucide) lucide.createIcons();
  }, 100);
}

function setupFeedNavigationControls() {
  const prevBtn = document.getElementById("feedPrevBtn");
  const nextBtn = document.getElementById("feedNextBtn");

  if (prevBtn) {
    prevBtn.onclick = (e) => {
      e.stopPropagation();
      if (state.currentFeedIndex > 0) {
        renderFeedSlide(state.currentFeedIndex - 1);
      }
    };
  }

  if (nextBtn) {
    nextBtn.onclick = (e) => {
      e.stopPropagation();
      if (state.currentFeedIndex < state.currentFeedBooks.length - 1) {
        renderFeedSlide(state.currentFeedIndex + 1);
      }
    };
  }

  // Keyboard navigation support!
  document.onkeydown = (e) => {
    if (state.activeTab !== "feed") return;
    if (e.key === "ArrowLeft") {
      if (state.currentFeedIndex > 0) {
        renderFeedSlide(state.currentFeedIndex - 1);
      }
    } else if (e.key === "ArrowRight") {
      if (state.currentFeedIndex < state.currentFeedBooks.length - 1) {
        renderFeedSlide(state.currentFeedIndex + 1);
      }
    }
  };
}

// ============================================================
// 4. SEARCH TAB LOGIC
// ============================================================
function setupSearch() {
  const input = document.getElementById("searchInput");
  const clearBtn = document.getElementById("clearSearchBtn");
  const genreChips = document.querySelectorAll(".genre-chip");

  let debounceTimer;
  input.addEventListener("input", () => {
    clearBtn.style.display = input.value ? "block" : "none";
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      executeSearch(input.value.trim());
    }, 300);
  });

  clearBtn.onclick = () => {
    input.value = "";
    clearBtn.style.display = "none";
    executeSearch("");
  };

  genreChips.forEach(chip => {
    chip.onclick = () => {
      genreChips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      const genre = chip.dataset.g;
      if (genre === "all") {
        executeSearch(input.value.trim() || "popular");
      } else {
        input.value = genre;
        executeSearch(genre);
      }
    };
  });

  executeSearch("bestsellers");
}

async function executeSearch(query) {
  const grid = document.getElementById("searchResultsGrid");
  grid.innerHTML = "<p style='color:var(--text-muted);grid-column:1/-1;'>Searching live catalog...</p>";

  const books = await callSupabaseRpc("search_books", {
    query: query || "popular",
    limit_n: 28
  });

  grid.innerHTML = "";
  if (!books || books.length === 0) {
    grid.innerHTML = "<p style='color:var(--text-muted);grid-column:1/-1;'>No books found. Try searching another title or author.</p>";
    return;
  }

  books.forEach(b => {
    const card = document.createElement("div");
    card.className = "book-card";
    card.onclick = () => showBookDetails(b);

    card.innerHTML = `
      <div class="card-cover-wrap">
        <img src="${getCoverUrl(b.cover_file)}" alt="${escapeHtml(b.title)}" loading="lazy">
      </div>
      <div class="card-title">${escapeHtml(b.title)}</div>
      <div class="card-author">by <span class="author-click-btn" onclick="event.stopPropagation(); searchByAuthor('${escapeHtml(b.author || '')}')">${escapeHtml(b.author || "Unknown")}</span></div>
    `;
    grid.appendChild(card);
  });
  if (window.lucide) {
    lucide.createIcons();
  }
}

// ============================================================
// 5. LAPTOP TAGS & VIBES SECTION (398+ TAGS)
// ============================================================
function setupLaptopTagsSection() {
  const grid = document.getElementById("tagsGroupGrid");
  if (!grid) return;
  grid.innerHTML = "";

  TAG_CATALOG.forEach(group => {
    const card = document.createElement("div");
    card.className = "tag-category-card";

    const title = document.createElement("h3");
    title.innerHTML = `<i data-lucide="${group.icon || 'tag'}"></i> <span>${group.title}</span>`;
    card.appendChild(title);

    const pillsWrap = document.createElement("div");
    pillsWrap.className = "tag-pills-wrap";

    group.tags.forEach(t => {
      const btn = document.createElement("button");
      btn.className = "tag-pill-btn";
      btn.textContent = t;
      btn.onclick = () => {
        switchTab("search");
        const searchInput = document.getElementById("searchInput");
        if (searchInput) {
          searchInput.value = t;
          executeSearch(t);
        }
      };
      pillsWrap.appendChild(btn);
    });

    card.appendChild(pillsWrap);
    grid.appendChild(card);
  });

  if (window.lucide) {
    lucide.createIcons();
  }
}

// ============================================================
// 6. LIBRARY MANAGEMENT
// ============================================================
function setupLibraryTabs() {
  const libTabs = document.querySelectorAll(".lib-tab");
  libTabs.forEach(t => {
    t.onclick = () => {
      libTabs.forEach(c => c.classList.remove("active"));
      t.classList.add("active");
      const target = t.dataset.lib;
      document.getElementById("libSavedContent").classList.toggle("active", target === "saved");
      document.getElementById("libChatsContent").classList.toggle("active", target === "chats");
    };
  });
}

function toggleSaveBook(book) {
  const existsIdx = state.savedBooks.findIndex(b => b.isbn13 === book.isbn13 || b.id === book.id);
  if (existsIdx >= 0) {
    state.savedBooks.splice(existsIdx, 1);
    alert(`Removed "${book.title}" from your shelf.`);
  } else {
    state.savedBooks.push(book);
    alert(`Saved "${book.title}" to your shelf!`);
  }
  localStorage.setItem("skrolla_saved_books", JSON.stringify(state.savedBooks));
  updateSavedBadges();
}

function updateSavedBadges() {
  const count = state.savedBooks.length;
  if (savedCountBadge) savedCountBadge.textContent = count;
  if (savedTabCount) savedTabCount.textContent = count;
}

function renderLibrary() {
  const grid = document.getElementById("libraryBooksGrid");
  const empty = document.getElementById("emptyLibraryState");
  grid.innerHTML = "";

  if (state.savedBooks.length === 0) {
    empty.style.display = "flex";
  } else {
    empty.style.display = "none";
    state.savedBooks.forEach(b => {
      const card = document.createElement("div");
      card.className = "book-card";
      card.onclick = () => showBookDetails(b);

      card.innerHTML = `
        <div class="card-cover-wrap">
          <img src="${getCoverUrl(b.cover_file)}" alt="${escapeHtml(b.title)}">
        </div>
        <div class="card-title">${escapeHtml(b.title)}</div>
        <div class="card-author">by <span class="author-click-btn" onclick="event.stopPropagation(); searchByAuthor('${escapeHtml(b.author || '')}')">${escapeHtml(b.author || "Unknown")}</span></div>
      `;
      grid.appendChild(card);
    });
  }
  if (window.lucide) {
    lucide.createIcons();
  }

  const chatsList = document.getElementById("libraryChatsList");
  const chatKeys = Object.keys(state.chatHistory);
  chatsTabCount.textContent = chatKeys.length;
  
  if (chatKeys.length > 0) {
    chatsList.innerHTML = "";
    chatKeys.forEach(isbn => {
      const thread = state.chatHistory[isbn];
      const item = document.createElement("div");
      item.className = "side-desc-box";
      item.style.cursor = "pointer";
      item.style.marginBottom = "12px";
      item.onclick = () => openStoryModeChat(thread.book);

      item.innerHTML = `
        <div style="display:flex;gap:12px;align-items:center;">
          <img src="${getCoverUrl(thread.book.cover_file)}" style="width:40px;height:56px;object-fit:cover;border-radius:4px;">
          <div>
            <h4 style="color:var(--text-primary);margin:0;">${escapeHtml(thread.book.title)}</h4>
            <p style="font-size:12px;color:var(--text-secondary);">${thread.messages.length} messages exchanged</p>
          </div>
        </div>
      `;
      chatsList.appendChild(item);
    });
  }
}

// ============================================================
// 7. BOOK DETAIL MODAL
// ============================================================
function setupModals() {
  const modal = document.getElementById("bookModal");
  const closeBtn = document.getElementById("modalCloseBtn");
  closeBtn.onclick = () => modal.classList.remove("active");
  modal.onclick = (e) => {
    if (e.target === modal) modal.classList.remove("active");
  };
}

function renderToggledDescription(elementId, fullText, maxLength = 180) {
  const container = document.getElementById(elementId);
  if (!container) return;
  
  if (!fullText || fullText.length <= maxLength) {
    container.textContent = fullText || "";
    return;
  }
  
  const shortText = fullText.slice(0, maxLength) + "...";
  container.innerHTML = "";
  
  const textSpan = document.createElement("span");
  textSpan.textContent = shortText;
  
  const toggleBtn = document.createElement("button");
  toggleBtn.className = "btn-text-toggle";
  toggleBtn.textContent = " Show more";
  toggleBtn.style.color = "var(--accent)";
  toggleBtn.style.background = "none";
  toggleBtn.style.border = "none";
  toggleBtn.style.cursor = "pointer";
  toggleBtn.style.fontWeight = "700";
  toggleBtn.style.display = "inline";
  toggleBtn.style.padding = "0";
  toggleBtn.style.marginLeft = "4px";
  
  let isExpanded = false;
  toggleBtn.onclick = (e) => {
    e.stopPropagation();
    isExpanded = !isExpanded;
    textSpan.textContent = isExpanded ? fullText : shortText;
    toggleBtn.textContent = isExpanded ? " Show less" : " Show more";
  };
  
  container.appendChild(textSpan);
  container.appendChild(toggleBtn);
}

function searchByAuthor(authorName) {
  if (!authorName) return;
  switchTab("search");
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.value = authorName;
    executeSearch(authorName);
  }
}

function showBookDetails(book) {
  state.previousTab = state.activeTab;
  state.activeBookForModal = book; // Re-use
  
  const coverUrl = getCoverUrl(book.cover_file);
  
  document.getElementById("detailsCoverImg").src = coverUrl;
  const glowEl = document.getElementById("detailsBgGlow");
  if (glowEl) {
    glowEl.style.backgroundImage = `url(${coverUrl})`;
  }
  document.getElementById("detailsTitle").textContent = book.title;
  document.getElementById("detailsAuthor").innerHTML = `by <span class="author-click-btn" onclick="searchByAuthor('${escapeHtml(book.author || '')}')">${escapeHtml(book.author || "Unknown")}</span>`;
  
  document.getElementById("detailsRating").innerHTML = `<i data-lucide="star"></i> ${book.avg_rating || "4.5"}`;
  document.getElementById("detailsYear").textContent = book.pub_year || "2024";
  
  // Synopsis length toggle
  renderToggledDescription("detailsDesc", book.description, 280);
  
  const genresList = document.getElementById("detailsGenres");
  genresList.innerHTML = "";
  let genres = [];
  if (typeof book.genres === "string") {
    try { genres = JSON.parse(book.genres); } catch (e) { genres = [book.genres]; }
  } else if (Array.isArray(book.genres)) {
    genres = book.genres;
  }
  genres.forEach(g => {
    const pill = document.createElement("span");
    pill.className = "tag-pill";
    pill.textContent = g;
    genresList.appendChild(pill);
  });
  
  // Action click bindings
  document.getElementById("detailsChatBtn").onclick = (e) => {
    e.stopPropagation();
    openStoryModeChat(book);
  };
  
  const saveBtn = document.getElementById("detailsSaveBtn");
  const isSaved = state.savedBooks.some(b => b.isbn13 === book.isbn13);
  saveBtn.innerHTML = isSaved ? `<i data-lucide="bookmark-check"></i> Saved` : `<i data-lucide="bookmark"></i> Save to Shelf`;
  saveBtn.onclick = (e) => {
    e.stopPropagation();
    toggleSaveBook(book);
    const updatedSaved = state.savedBooks.some(b => b.isbn13 === book.isbn13);
    saveBtn.innerHTML = updatedSaved ? `<i data-lucide="bookmark-check"></i> Saved` : `<i data-lucide="bookmark"></i> Save to Shelf`;
    if (window.lucide) lucide.createIcons();
  };
  
  // Load related recommendations from Supabase
  loadRelatedBooks(book);
  
  // Switch tab
  switchTab("book-details");
  
  // Refresh Lucide Icons
  if (window.lucide) {
    lucide.createIcons();
  }
}

async function loadRelatedBooks(book) {
  const container = document.getElementById("detailsRelatedCarousel");
  if (!container) return;
  
  container.innerHTML = `
    <div class="skeleton-card"></div>
    <div class="skeleton-card"></div>
    <div class="skeleton-card"></div>
    <div class="skeleton-card"></div>
  `;
  
  let genre = "Fiction";
  let genres = [];
  if (typeof book.genres === "string") {
    try { genres = JSON.parse(book.genres); } catch (e) { genres = [book.genres]; }
  } else if (Array.isArray(book.genres)) {
    genres = book.genres;
  }
  if (genres && genres.length > 0) {
    genre = genres[0];
  }
  
  const related = await callSupabaseRpc("search_books", {
    query: genre,
    limit_n: 8
  });
  
  container.innerHTML = "";
  if (related && related.length > 0) {
    const filtered = related.filter(b => b.isbn13 !== book.isbn13).slice(0, 6);
    if (filtered.length === 0) {
      container.innerHTML = "<p class='no-results'>No similar books found.</p>";
      return;
    }
    
    filtered.forEach(b => {
      const coverUrl = getCoverUrl(b.cover_file);
      const card = document.createElement("div");
      card.className = "book-card";
      card.innerHTML = `
        <div class="book-cover-wrap">
          <img src="${coverUrl}" alt="${escapeHtml(b.title)}">
        </div>
        <div class="book-card-info">
          <div class="book-card-title">${escapeHtml(b.title)}</div>
          <div class="book-card-author">by <span class="author-click-btn" onclick="event.stopPropagation(); searchByAuthor('${escapeHtml(b.author || '')}')">${escapeHtml(b.author || "Unknown")}</span></div>
        </div>
      `;
      card.onclick = () => showBookDetails(b);
      container.appendChild(card);
    });
  } else {
    container.innerHTML = "<p class='no-results'>No similar books found.</p>";
  }
}

function openBookModal(book) {
  state.activeBookForModal = book;
  const modal = document.getElementById("bookModal");
  const coverUrl = getCoverUrl(book.cover_file);

  document.getElementById("modalCoverImg").src = coverUrl;
  document.getElementById("modalTitle").textContent = book.title;
  document.getElementById("modalAuthor").textContent = `by ${book.author || "Unknown"}`;
  document.getElementById("modalRating").textContent = `⭐ ${book.avg_rating || "4.5"}`;
  document.getElementById("modalYear").textContent = book.pub_year || "2024";
  document.getElementById("modalDesc").textContent = book.description || "No synopsis available for this title.";

  const genresList = document.getElementById("modalGenres");
  genresList.innerHTML = "";
  let genres = [];
  if (typeof book.genres === "string") {
    try { genres = JSON.parse(book.genres); } catch (e) { genres = [book.genres]; }
  } else if (Array.isArray(book.genres)) {
    genres = book.genres;
  }
  genres.forEach(g => {
    const pill = document.createElement("span");
    pill.className = "tag-pill";
    pill.textContent = g;
    genresList.appendChild(pill);
  });

  document.getElementById("modalChatBtn").onclick = () => {
    modal.classList.remove("active");
    openStoryModeChat(book);
  };

  document.getElementById("modalSaveBtn").onclick = () => toggleSaveBook(book);

  modal.classList.add("active");
}

// ============================================================
// 8. STORYMODE CHAT ENGINE (LLM Connector Prepared)
// ============================================================
function setupStoryModeChat() {
  const drawer = document.getElementById("storymodeDrawer");
  const closeBtn = document.getElementById("chatCloseBtn");
  const sendBtn = document.getElementById("chatSendBtn");
  const chatInput = document.getElementById("chatInput");
  const promptChips = document.querySelectorAll(".chip-btn");

  closeBtn.onclick = () => drawer.classList.remove("active");

  sendBtn.onclick = () => handleUserSendMessage();
  chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") handleUserSendMessage();
  });

  promptChips.forEach(chip => {
    chip.onclick = () => {
      const prompt = chip.dataset.prompt;
      chatInput.value = prompt;
      handleUserSendMessage();
    };
  });
}

function openStoryModeChat(book) {
  state.activeBookForChat = book;
  const drawer = document.getElementById("storymodeDrawer");

  document.getElementById("chatHeaderCover").src = getCoverUrl(book.cover_file);
  document.getElementById("chatHeaderTitle").textContent = book.title;
  document.getElementById("welcomeTitle").textContent = `"${book.title}"`;

  const messagesContainer = document.getElementById("chatMessages");
  const key = book.isbn13 || book.id;
  if (state.chatHistory[key]) {
    renderChatMessages(state.chatHistory[key].messages);
  } else {
    const welcome = messagesContainer.querySelector(".chat-welcome-card");
    const chips = messagesContainer.querySelector(".prompt-chips-wrap");
    messagesContainer.innerHTML = "";
    if (welcome) messagesContainer.appendChild(welcome);
    if (chips) messagesContainer.appendChild(chips);
  }

  drawer.classList.add("active");
}

function handleUserSendMessage() {
  const input = document.getElementById("chatInput");
  const text = input.value.trim();
  if (!text || !state.activeBookForChat) return;

  const book = state.activeBookForChat;
  const key = book.isbn13 || book.id;

  if (!state.chatHistory[key]) {
    state.chatHistory[key] = { book: book, messages: [] };
  }

  const userMsg = { role: "user", text: text };
  state.chatHistory[key].messages.push(userMsg);
  appendChatBubble("user", text);
  input.value = "";

  const typingBubble = appendChatBubble("ai", "StoryMode is analyzing book details...");

  fetchLLMResponse(text, book).then(replyText => {
    typingBubble.remove();
    const aiMsg = { role: "ai", text: replyText };
    state.chatHistory[key].messages.push(aiMsg);
    appendChatBubble("ai", replyText);

    localStorage.setItem("skrolla_chat_history", JSON.stringify(state.chatHistory));
  });
}

function appendChatBubble(role, text) {
  const container = document.getElementById("chatMessages");
  const bubble = document.createElement("div");
  bubble.className = `chat-bubble ${role}`;
  bubble.textContent = text;
  container.appendChild(bubble);
  container.scrollTop = container.scrollHeight;
  return bubble;
}

function renderChatMessages(messages) {
  const container = document.getElementById("chatMessages");
  container.innerHTML = "";
  messages.forEach(m => {
    appendChatBubble(m.role, m.text);
  });
}

/**
 * Modular LLM Connector Function
 * Replace the response logic inside this function with a real fetch() call to your LLM API!
 */
async function fetchLLMResponse(prompt, book) {
  await new Promise(resolve => setTimeout(resolve, 1000));

  const lower = prompt.toLowerCase();
  const title = book.title || "this book";
  const author = book.author || "the author";
  const desc = book.description || "";

  if (lower.includes("vibe") || lower.includes("tone")) {
    return `"${title}" has a rich, immersive vibe. Written by ${author}, it blends compelling thematic depth with atmospheric storytelling. Readers often describe its tone as captivating and thought-provoking!`;
  }
  if (lower.includes("synopsis") || lower.includes("summary")) {
    return `Here is a spoiler-free overview: ${desc ? desc.slice(0, 220) + "..." : title + " is an engaging narrative centered on discovery and pivotal character journeys."}`;
  }
  if (lower.includes("character")) {
    return `The protagonists in "${title}" are driven by clear motives and complex relationships. ${author} crafts deep character arcs where decisions carry real weight throughout the narrative!`;
  }
  if (lower.includes("pace") || lower.includes("pacing") || lower.includes("mood")) {
    return `The pacing strikes a balance between steady character build-up and high-stakes key scenes. It keeps you turning pages without rushing through important atmospheric moments.`;
  }

  return `Regarding "${title}" by ${author}: It offers a unique reading experience that tackles themes of exploration, identity, and choices. Is there a specific character or chapter vibe you'd like to know more about?`;
}

function escapeHtml(str) {
  if (!str) return "";
  return str.replace(/[&<>"']/g, m => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
  })[m]);
}

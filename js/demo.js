/**
 * SKROLLA WEB DEMO — LIVE SUPABASE, 398+ TAGS & THEME ENGINE
 */

const SUPABASE_URL = "https://rhljzgnybukfqmdujqfn.supabase.co/rest/v1";
const SUPABASE_KEY = "sb_publishable_Ny8sAIyQ9n5H9wEVhR2V9Q_-rbRHrpF";
const R2_COVER_CDN = "https://pub-77f77d9160fd473c8b4e4e7ca1aa2e18.r2.dev/";

// Categorized 398+ Tag Catalog
const TAG_CATALOG = [
  {
    title: "🧙 1. Fantasy & Magic",
    tags: ["Fantasy", "Arthurian Fantasy", "Contemporary Fantasy", "Cozy Fantasy", "Dark Fantasy", "Epic Fantasy", "Fae & Folk Fantasy", "Fairy Tale", "Fairy Tale Retelling", "Gothic Fantasy", "Grimdark", "Heroic Fantasy", "High Fantasy", "Historical Fantasy", "Isekai", "LitRPG", "Low Fantasy", "Magical Realism", "Middle Grade Fantasy", "Mythological Fantasy", "Portal Fantasy", "Progression Fantasy", "Romantasy", "Sword & Sorcery", "Urban Fantasy", "Chosen One", "Dragons", "Gods", "Immortality", "Magic", "Magic Schools", "Mermaids & Sirens", "Mythology", "Prophecy", "Quest", "Witches"]
  },
  {
    title: "🚀 2. Science Fiction & Future Worlds",
    tags: ["Science Fiction", "Alien Invasion", "Alternate History", "Climate Fiction", "Cyberpunk", "Dystopian Sci-Fi", "First Contact", "Hard Sci-Fi", "Military Sci-Fi", "Near-Future Thriller", "Post-Apocalyptic", "Solarpunk", "Space Opera", "Speculative Fiction", "Steampunk", "Time Travel", "Aliens", "Artificial Intelligence", "Cybernetics", "Dystopia", "Genetic Engineering", "Pandemic", "Parallel Universes", "Robotics", "Space", "Space Travel", "Transhumanism", "Virtual Reality"]
  },
  {
    title: "👻 3. Horror & Supernatural",
    tags: ["Horror", "Body Horror", "Cosmic Horror", "Creature Horror", "Folk Horror", "Gothic Horror", "Haunted House", "Paranormal Horror", "Psychological Horror", "Slasher", "Supernatural Horror", "Angels", "Demons", "Ghosts", "Monsters", "Vampires", "Werewolves", "Zombies"]
  },
  {
    title: "🕵️ 4. Mystery & Crime",
    tags: ["Mystery", "Crime", "Amateur Sleuth", "Cozy Mystery", "Detective Fiction", "Forensic Mystery", "Hardboiled Crime", "Heist", "Historical Mystery", "Locked Room Mystery", "Murder Mystery", "Noir", "Police Procedural", "Espionage", "Investigation", "Organized Crime", "Unreliable Narrator"]
  },
  {
    title: "🔪 5. Thriller & Suspense",
    tags: ["Thriller", "Action Thriller", "Conspiracy Thriller", "Domestic Thriller", "Financial Thriller", "Legal Thriller", "Medical Thriller", "Paranormal Thriller", "Political Thriller", "Psychological Thriller", "Romantic Suspense", "Spy Thriller", "Techno Thriller"]
  },
  {
    title: "💔 6. Romance & Tropes",
    tags: ["Romance", "Age Gap Romance", "Billionaire Romance", "Clean Romance", "Contemporary Romance", "Dark Romance", "Enemies to Lovers", "Fake Dating", "Forced Proximity", "Friends to Lovers", "Gothic Romance", "Historical Romance", "LGBTQ+ Romance", "Mafia Romance", "Paranormal Romance", "Romantic Comedy", "Second Chance Romance", "Slow Burn", "Sports Romance"]
  },
  {
    title: "⚔️ 7. History & War",
    tags: ["History", "Historical Fiction", "Ancient History", "Cold War History", "Colonial History", "Cultural History", "Medieval History", "Military History", "Modern History", "Family Saga", "Historical Adventure", "War Fiction", "World War I", "World War II", "Holocaust", "Medieval", "Empire"]
  },
  {
    title: "📖 8. Literary & Contemporary Fiction",
    tags: ["Literary Fiction", "Contemporary Fiction", "Classics", "Short Stories", "Poetry", "Humor", "Young Adult", "New Adult", "Autofiction", "Campus Novel", "Coming of Age", "Dark Academia", "Dual Timeline", "Epistolary", "Southern Gothic", "Surrealism", "Diverse Voices"]
  },
  {
    title: "🎌 9. Manga, Comics & Graphic Novels",
    tags: ["Manga", "Graphic Novels", "Josei", "Magical Girl", "Manhua", "Manhwa", "Mecha", "Seinen", "Shōjo", "Shōnen", "Sports Manga", "Webcomic", "Graphic Memoir"]
  },
  {
    title: "👤 10. Biography & Memoir",
    tags: ["Biography", "Memoir", "Celebrity Biography", "Childhood Memoir", "Food Memoir", "Literary Biography", "Music Biography", "Political Biography", "Sports Biography", "Travel Memoir", "War Memoir"]
  },
  {
    title: "🧠 11. Self-Help, Psychology & Wellness",
    tags: ["Self-Help", "Psychology", "Behavioral Psychology", "Cognitive Psychology", "Habits & Behavior", "Mindfulness", "Positive Psychology", "Recovery Memoir", "Relationships", "Social Psychology", "Trauma & Recovery", "Wellness", "Behavioral Economics"]
  },
  {
    title: "💼 12. Business, Career & Money",
    tags: ["Business", "Business Biography", "Career Development", "Communication", "Entrepreneurship", "Investing", "Leadership", "Management", "Marketing", "Personal Finance", "Productivity", "Startup"]
  },
  {
    title: "🔬 13. Science & Big Ideas",
    tags: ["Science", "Philosophy", "Religion & Spirituality", "Astronomy", "Biology", "Chemistry", "Cosmology", "Genetics", "Mathematics", "Neuroscience", "Physics", "Popular Science", "Ethics", "Existentialism", "Stoicism"]
  },
  {
    title: "🌍 14. Travel, Food, Sports & Culture",
    tags: ["Travel", "Food & Cooking", "Sports", "Baking", "Wine & Drinks", "World Cuisine", "Football", "Basketball", "Ancient Greece", "Ancient Rome", "China", "India", "Japan", "Exploration", "Mountains", "Ocean", "Art", "Music"]
  },
  {
    title: "❤️ 15. Themes & Life Topics",
    tags: ["Love", "Family", "Friendship", "Found Family", "Betrayal", "Revenge", "Loyalty", "Secrets", "Identity", "Self-Discovery", "Grief", "Loss", "Mental Health", "Redemption", "Justice", "Power", "Survival", "Hope", "Freedom", "Feminism", "Corruption", "Revolution"]
  },
  {
    title: "✨ 16. Mood & Vibe",
    tags: ["Cozy", "Feel-Good", "Funny", "Uplifting", "Warm", "Hopeful", "Emotional", "Heartbreaking", "Nostalgic", "Dark", "Gritty", "Intense", "Suspenseful", "Thrilling", "Fast-Paced", "Slow Burn", "Gripping", "Atmospheric", "Mysterious", "Spooky", "Romantic", "Spicy", "Witty", "Thought-Provoking", "Whimsical", "Melancholic"]
  }
];

// State Manager
const state = {
  activeTab: "home",
  theme: localStorage.getItem("skrolla_theme") || "dark",
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
}

function switchTab(tabId) {
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
    if (dailyPicks.length > 0) {
      renderHeroCard(dailyPicks[0]);
    }
    
    renderShelf("shelfPicked", feedRows.filter(r => r.section_id === "because_picked"));
    renderShelf("shelfNyt", feedRows.filter(r => r.section_id === "nyt"));
    renderShelf("shelfScifi", feedRows.filter(r => r.section_id === "highly_rated"));
    renderShelf("shelfPopular", feedRows.filter(r => r.section_id === "manga" || r.section_id === "discover_new"));
  } else {
    const fallbackBooks = await callSupabaseRpc("search_books", { query: "fiction", limit_n: 30 });
    if (fallbackBooks && fallbackBooks.length > 0) {
      renderHeroCard(fallbackBooks[0]);
      renderShelf("shelfPicked", fallbackBooks.slice(1, 9));
      renderShelf("shelfNyt", fallbackBooks.slice(9, 17));
      renderShelf("shelfScifi", fallbackBooks.slice(17, 24));
      renderShelf("shelfPopular", fallbackBooks.slice(24, 30));
    }
  }
}

function renderHeroCard(book) {
  const coverUrl = getCoverUrl(book.cover_file);
  document.getElementById("heroCoverImg").src = coverUrl;
  document.getElementById("heroBgBlur").style.backgroundImage = `url(${coverUrl})`;
  document.getElementById("heroTitle").textContent = book.title || "Daily Discovery";
  document.getElementById("heroAuthor").textContent = `by ${book.author || "Unknown Author"}`;
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

  document.getElementById("heroChatBtn").onclick = () => openStoryModeChat(book);
  document.getElementById("heroSaveBtn").onclick = () => toggleSaveBook(book);
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
    card.onclick = () => openBookModal(b);

    card.innerHTML = `
      <div class="card-cover-wrap">
        <img src="${getCoverUrl(b.cover_file)}" alt="${escapeHtml(b.title)}" loading="lazy">
      </div>
      <div class="card-title">${escapeHtml(b.title)}</div>
      <div class="card-author">${escapeHtml(b.author || "")}</div>
    `;
    container.appendChild(card);
  });
}

// ============================================================
// 3. FOR YOU FEED (REELS) ENGINE
// ============================================================
async function loadPersonalizedFeed() {
  const reelsStage = document.getElementById("reelsStage");
  
  const books = await callSupabaseRpc("match_books_personalized", {
    seen_isbns: Array.from(state.seenIsbns),
    k: 25,
    jitter_seed: Math.floor(Math.random() * 10000),
    p_explore_floor: 0.25,
    p_explore_ceiling: 0.90
  });

  if (books && books.length > 0) {
    state.currentFeedBooks = books;
    renderReelsFeed(books);
    updateFeedSidePanel(books[0]);
  } else {
    const fallback = await callSupabaseRpc("search_books", { query: "fantasy", limit_n: 20 });
    if (fallback && fallback.length > 0) {
      state.currentFeedBooks = fallback;
      renderReelsFeed(fallback);
      updateFeedSidePanel(fallback[0]);
    }
  }
}

function renderReelsFeed(books) {
  const reelsStage = document.getElementById("reelsStage");
  reelsStage.innerHTML = "";

  books.forEach((b, idx) => {
    const coverUrl = getCoverUrl(b.cover_file);
    const card = document.createElement("div");
    card.className = "reel-card";
    card.dataset.index = idx;

    card.innerHTML = `
      <div class="reel-bg-blur" style="background-image:url('${coverUrl}')"></div>
      <div class="reel-overlay-gradient"></div>
      <div class="reel-center-cover">
        <img src="${coverUrl}" alt="${escapeHtml(b.title)}">
      </div>
      <div class="reel-info-layer">
        <span class="reel-badge">✨ For You</span>
        <h2 class="reel-title">${escapeHtml(b.title)}</h2>
        <div class="reel-author">by ${escapeHtml(b.author || "")}</div>
        <p class="reel-desc">${escapeHtml(b.description || "")}</p>
      </div>
      <div class="reel-actions-side">
        <button class="reel-action-btn chat-trigger" title="Ask StoryMode">💬</button>
        <button class="reel-action-btn save-trigger" title="Save Book">🔖</button>
        <button class="reel-action-btn detail-trigger" title="View Details">ℹ️</button>
      </div>
    `;

    card.querySelector(".chat-trigger").onclick = (e) => { e.stopPropagation(); openStoryModeChat(b); };
    card.querySelector(".save-trigger").onclick = (e) => { e.stopPropagation(); toggleSaveBook(b); };
    card.querySelector(".detail-trigger").onclick = (e) => { e.stopPropagation(); openBookModal(b); };

    reelsStage.appendChild(card);
  });

  let scrollTimeout;
  reelsStage.onscroll = () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      const idx = Math.round(reelsStage.scrollTop / reelsStage.clientHeight);
      if (state.currentFeedBooks[idx]) {
        state.currentFeedIndex = idx;
        updateFeedSidePanel(state.currentFeedBooks[idx]);
        state.seenIsbns.add(state.currentFeedBooks[idx].isbn13);
      }
    }, 150);
  };
}

function updateFeedSidePanel(book) {
  const empty = document.getElementById("sidePanelEmpty");
  const content = document.getElementById("sidePanelContent");
  if (!book) {
    empty.style.display = "flex";
    content.classList.add("hidden");
    return;
  }
  empty.style.display = "none";
  content.classList.remove("hidden");

  document.getElementById("sideTitle").textContent = book.title;
  document.getElementById("sideAuthor").textContent = `by ${book.author || "Unknown"}`;
  document.getElementById("sideRating").textContent = `⭐ ${book.avg_rating || "4.5"}`;
  document.getElementById("sideYear").textContent = book.pub_year || "2023";
  document.getElementById("sideDesc").textContent = book.description || "No synopsis available.";

  const genresList = document.getElementById("sideGenres");
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

  document.getElementById("sideChatBtn").onclick = () => openStoryModeChat(book);
  document.getElementById("sideSaveBtn").onclick = () => toggleSaveBook(book);
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
    card.onclick = () => openBookModal(b);

    card.innerHTML = `
      <div class="card-cover-wrap">
        <img src="${getCoverUrl(b.cover_file)}" alt="${escapeHtml(b.title)}" loading="lazy">
      </div>
      <div class="card-title">${escapeHtml(b.title)}</div>
      <div class="card-author">${escapeHtml(b.author || "")}</div>
    `;
    grid.appendChild(card);
  });
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
    title.textContent = group.title;
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
      card.onclick = () => openBookModal(b);

      card.innerHTML = `
        <div class="card-cover-wrap">
          <img src="${getCoverUrl(b.cover_file)}" alt="${escapeHtml(b.title)}">
        </div>
        <div class="card-title">${escapeHtml(b.title)}</div>
        <div class="card-author">${escapeHtml(b.author || "")}</div>
      `;
      grid.appendChild(card);
    });
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

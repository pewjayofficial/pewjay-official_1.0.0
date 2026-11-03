(() => {
  "use strict";

  // Set true to take the site offline for maintenance; set false to bring it online.
  const MAINTENANCE_MODE = false;

  const pages = [
    ["Home", "home.html"],
    ["Events", "events.html"],
    ["News", "news.html"],
    ["Social", "social.html"],
    ["Posters", "posters.html"],
    ["Fans", "fans.html"],
    ["Fandom collaboration", "fandom-collaboration.html"],
    ["Timeline", "timeline.html"],
    ["Donation", "donation.html"] 
  ];

  const socialLinks = [
    ["YouTube", "https://youtube.com/@PewJay_Art", "fa-youtube"],
    ["Instagram", "https://www.instagram.com/PewJay_Art", "fa-instagram"],
    ["Facebook", "https://www.facebook.com/share/1BvWfZyaUS/", "fa-facebook-f"],
    ["X", "https://www.x.com/PewJay_Art", "fa-x-twitter"],
    ["TikTok", "https://www.tiktok.com/@pewjay_art", "fa-tiktok"],
    ["Tumblr", "https://www.tumblr.com/pewjayart", "fa-tumblr"],
    ["Threads", "https://www.threads.net/@pewjay_art", "fa-threads"],
    ["Bluesky", "https://bsky.app/profile/pewjayart.bsky.social", "fa-bluesky"]
  ];

  const navItems = pages.map(([label, href], index) => {
    const active = location.pathname.toLowerCase().endsWith(`/${href}`) ? " is-current" : "";
    return `<li><a class="${active.trim()}" href="${href}"${active ? ' aria-current="page"' : ""}><span>0${index + 1}</span>${label}<i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a></li>`;
  }).join("");

  const headerMarkup = `
    <header class="site-header">
      <div class="site-header__left">
        <a class="brand-lockup" href="home.html" aria-label="PewJay home"><img src="assets/logo-name.png" alt="PewJay"></a>
        <div class="header-date"><span class="header-date__label">TODAY, YOUR TIME</span><span class="header-date__value" data-local-date>Loading date</span></div>
      </div>
      <div class="site-header__right">
        <div class="header-time" aria-label="Local time">
          <span class="header-time__icon" data-day-icon><i class="fa-solid fa-sun" aria-hidden="true"></i></span>
          <span class="header-time__readout"><span class="header-time__weekday" data-local-weekday>Loading day</span><span class="header-time__clock"><time data-local-clock>--:--:-- --</time><span class="header-time__zone" data-local-zone></span></span></span>
        </div>
        <button class="menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false" aria-controls="fullNavigation" data-menu-toggle><span class="menu-toggle__lines" aria-hidden="true"><span></span><span></span></span></span></button>
      </div>
    </header>
    <nav class="nav-overlay" id="fullNavigation" aria-label="Main navigation" aria-hidden="true">
      <button class="nav-overlay__close" type="button" data-menu-close><span>CLOSE MENU</span><i class="fa-solid fa-xmark" aria-hidden="true"></i></button>
      <div class="nav-overlay__inner"><div class="nav-overlay__aside"><img class="nav-overlay__logo" src="assets/logo-name.png" alt="PewJay"><p>A little world of art, animation, and joy — made with a buong pusong Pinoy spirit.</p><span>CHOOSE YOUR NEXT STOP <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></span></div><ul class="nav-overlay__list">${navItems}</ul></div>
    </nav>`;

  const footerMarkup = `
    <footer class="site-footer">
      <div class="site-footer__grid">
        <section class="footer-about" aria-labelledby="footerAboutHeading">
          <a class="footer-brand" href="home.html" aria-label="PewJay home"><img src="assets/logo-name.png" alt="PewJay"></a>
          <h2 class="footer-heading" id="footerAboutHeading">About PewJay</h2>
          <p>PewJay is a Filipino creative project focused on digital arts, sketching, animation, editing, and multimedia entertainment. Since 2022, PewJay has continued creating artistic content, original ideas, and creative experiences inspired by the creativity, music, friendship, and storytelling themes from Trolls and Elemental.</p>
          <div class="footer-socials" aria-label="PewJay on social media">${socialLinks.map(([name, href, icon]) => `<a href="${href}" target="_blank" rel="noopener noreferrer" aria-label="${name}"><i class="fa-brands ${icon}" aria-hidden="true"></i></a>`).join("")}</div>
        </section>
        <section aria-labelledby="footerContactHeading"><h2 class="footer-heading" id="footerContactHeading">Come say hello</h2><ul class="footer-contact-list"><li><i class="fa-solid fa-location-dot" aria-hidden="true"></i><span>Block 3B, Lot 47 | Greg. De Jesus, Gen. Mariano Alverez | Cavite, Philippines</span></li><li><i class="fa-regular fa-envelope" aria-hidden="true"></i><a href="mailto:justinjayhernando900@gmail.com">justinjayhernando900@gmail.com</a></li></ul></section>
        <section aria-labelledby="footerExploreHeading"><h2 class="footer-heading" id="footerExploreHeading">Explore the world</h2><ul class="footer-contact-list footer-explore"><li><i class="fa-solid fa-arrow-right" aria-hidden="true"></i><a href="posters.html">Browse the poster wall</a></li><li><i class="fa-solid fa-arrow-right" aria-hidden="true"></i><a href="timeline.html">Follow the creative journey</a></li><li><i class="fa-solid fa-arrow-right" aria-hidden="true"></i><a href="donation.html">Support PewJay</a></li></ul></section>
      </div>
      <div class="site-footer__bottom"><span>© <span data-current-year></span> PEWJAY OFFICIAL · MADE WITH HEART IN THE PHILIPPINES</span><span>ART • ANIMATION • JOY</span></div>
    </footer>`;

  const cookieMarkup = `
    <aside class="cookie-notice" data-cookie-notice role="dialog" aria-label="Cookie preferences" aria-live="polite">
      <button class="cookie-close" type="button" data-cookie-choice="essential" aria-label="Close cookie notice"><i class="fa-solid fa-xmark" aria-hidden="true"></i></button>
      <span class="cookie-icon"><i class="fa-solid fa-cookie-bite" aria-hidden="true"></i></span>
      <div class="cookie-copy"><strong>A little note about cookies</strong><p>This site stores your preference in your browser so it remembers your choice.</p></div>
      <div class="cookie-actions"><button class="button button--primary button--small" type="button" data-cookie-choice="all">Sounds good</button><button class="cookie-essential" type="button" data-cookie-choice="essential">Only essential</button></div>
    </aside>`;

  const contentSets = {
    "digital-art": {
      title: "Digital art", label: "THE ARTWORK", copy: "Digital Art is where creativity and imagination come to life through colorful illustrations and fan-inspired artwork. Created using ibisPaint, each piece reflects passion, originality, and artistic expression. Explore PewJay's digital creations inspired by favorite movies, characters, and creative journeys.", action: "MORE TIMELAPSE", href: "https://www.youtube.com/playlist?list=PLz_IJ1Y2qDjf3nwlN-9SB6114hs3--nUu", folder: "digital-art", total: 15,
      alt: "Colorful digital character artwork"
    },
    sketching: {
      title: "Sketching", label: "FROM THE SKETCHBOOK", copy: "Sketching features hand-drawn pencil sketches, acrylic pen artwork, and creative illustrations inspired by favorite movies, characters, and original ideas. Every drawing reflects passion, creativity, and the journey of bringing imagination to life through traditional art.", folder: "sketching", total: 10,
      alt: "A hand-drawn PewJay sketch"
    },
    animation: {
      title: "Animation", label: "A LITTLE MOVEMENT", copy: "Animation by PewJamination features original animated stories, creative characters, and exciting adventures brought to life through digital animation. Explore imaginative worlds, engaging storytelling, and unique productions created with passion, creativity, and dedication.", folder: "animation", total: 3,
      alt: "A colorful animated character illustration"
    },
    livestream: {
      title: "Livestream", label: "MAKE IT TOGETHER", copy: "Livestream by PewJay Live features live gaming, digital art sessions, travel adventures, special events, and interactive broadcasts. Join the community and experience exciting moments, creativity, and entertainment streamed live.", action: "MORE LIVE", href: "https://www.youtube.com/playlist?list=PLDMJUsZRHpm4", folder: "livestream", total: 5,
      alt: "Artwork from a PewJay livestream"
    },
    "world-tour": {
      title: "World tour", label: "A WORLD TO EXPLORE", copy: "World Tour by PewJay Live features travel adventures, field trips, cinemas, and memorable experiences across the Philippines and beyond. Explore destinations such as Batangas, Cavite, Laguna, and many more through videos, photos, and livestreams. Join every journey and discover new places, local attractions, and unforgettable moments.", folder: "world-tour", total: 15,
      alt: "Characters from the PewJay world"
    }
  };

  // Add or edit event objects here. Give each event a unique id and use an ISO 8601
  // date with timezone offset; keep releaseAt empty while its date is TBA.
  const eventCountdowns = [
    {
      id: "new-movie-release",
      eyebrow: "THIS THEATER",
      title: "THE ANGRY BIRDS MOVIE 3",
      releaseAt: "2026-12-23T12:00:00+08:00",
      image: "assets/event/the-angry-birds-movie-3.jpg",
      imageAlt: "Colorful PewJay artwork for an upcoming creative event",
      link: "https://pewjayofficial.github.io/event-countdown",
      linkLabel: "Watch Trailer"
    },
    {
      id: "new-movie-release-2",
      eyebrow: "THIS SOUTHWOODS CINEMAS",
      title: "THE ANGRY BIRDS MOVIE 3",
      releaseAt: "THIS JANUARY 2027",
      image: "assets/event/the-angry-birds-movie-3.jpg",
      imageAlt: "Colorful PewJay artwork for an upcoming creative event",
      link: "https://pewjayofficial.github.io/event-countdown",
      linkLabel: "Watch Trailer"
    },
    {
      id: "new-fandom",
      eyebrow: "NEW FANDOM!!!",
      title: "LOVE OR ANGER?",
      releaseAt: "2026-11-17T12:00:00+08:00",
      image: "assets/event/new-fandom.jpg",
      imageAlt: "Colorful PewJay artwork for an upcoming creative event",
      link: "https://youtu.be/I_IJ2MuE3A8?si=VbZbj4WagSjZXJ4J",
      linkLabel: "Watch Teaser"
    },
    {
      id: "film-anniversary",
      eyebrow: "10TH ANNIVERSARY",
      title: "TROLLS 2016",
      releaseAt: "2026-11-04T12:00:00+08:00",
      image: "assets/event/10th-anniversary.jpg",
      imageAlt: "Colorful PewJay artwork for an upcoming creative event",
      link: "social.html",
      linkLabel: "Follow for updates"
    },
    {
      id: "new-movie-release-3",
      eyebrow: "THIS THEATER",
      title: "THE BLUEY MOVIE",
      releaseAt: "2027-08-06T12:00:00+08:00",
      image: "assets/event/the-bluey-movie.jpg",
      imageAlt: "Colorful PewJay artwork for an upcoming creative event",
      link: "https://pewjayart.github.io/about-new/trailer2.html",
      linkLabel: "Watch Teaser"
    },
    {
      id: "new-movie-release-4",
      eyebrow: "THIS SOUTHWOODS CINEMAS",
      title: "THE BLUEY MOVIE",
      releaseAt: "2027-08-14T00:00:00+08:00",
      image: "assets/event/the-bluey-movie.jpg",
      imageAlt: "Colorful PewJay artwork for an upcoming creative event",
      link: "https://pewjayart.github.io/about-new/trailer2.html",
      linkLabel: "Watch Teaser"
    },
    {
      id: "birthday-event",
      eyebrow: "BIRTHDAY",
      title: "LIFE N' PERSON",
      releaseAt: "2027-02-25T00:00:00+08:00",
      image: "",
      imageAlt: "",
      link: "social.html",
      linkLabel: "Follow for updates"
    },
    {
      id: "pewjay-anniversary",
      eyebrow: "ANNIVERSARY",
      title: "PEWJAY'S REBIRTH",
      releaseAt: "2027-06-08T12:00:00+08:00",
      image: "",
      imageAlt: "",
      link: "social.html",
      linkLabel: "Follow for updates"
    },
    {
      id: "broppy-day",
      eyebrow: "HOLIDAY EVENT",
      title: "BROPPY DAY",
      releaseAt: "2027-09-21T12:00:00+08:00",
      image: "assets/event/broppy-day.jpg",
      imageAlt: "Colorful PewJay artwork for an upcoming creative event",
      link: "social.html",
      linkLabel: "Follow for updates"
    },
  ];

  // Edit these fields to update the featured illustration and the three latest rows.
  // Dates use YYYY-MM-DD; leave one empty to show DATE TO BE ANNOUNCED.
  const posterShowcase = {
    featured: {
      image: "assets/posters/new-illustration/1.jpg",
      imageAlt: "New PewJay illustration",
      badge: "NEW ILLUSTRATION",
      heading: "😤 RED’S ANGER MOMENT 🔥🐦",
      releaseDate: "AUGUST 17. 2026",
      paragraph: "Red looks really angry and frustrated, staring straight ahead with his eyebrows lowered and an intense expression.",
      buttonText: "TIME LAPSE",
      buttonLink: "https://youtu.be/kwYohppI-pg"
    },
    latest: [
      {
        image: "assets/posters/latest/1.jpg",
        imageAlt: "Latest PewJay poster with a pink-haired character",
        heading: "MEET SILVER – BRIGHT, BOLD, AND READY TO SHINE! ✨",
        releaseDate: "JULY 31. 2026",
        paragraph: "Silver is here with a cheerful smile and endless energy! 🩶✨",
        buttonText: "VIEW POSTER",
        buttonLink: "assets/posters/latest/1.jpg"
      },
      {
        image: "assets/posters/latest/2.jpg",
        imageAlt: "Latest PewJay poster artwork",
        heading: "🌼 MEET JUNE 🌼",
        releaseDate: "JULY 26, 2026",
        paragraph: "A Get ready to meet June, bursting with energy, confidence, and a cheerful personality, June is ready to bring new adventures, unforgettable moments, and plenty of fun to the flock.",
        buttonText: "VIEW POSTER",
        buttonLink: "assets/posters/latest/2.jpg"
      },
      {
        image: "assets/posters/latest/3.jpg",
        imageAlt: "Latest PewJay poster artwork",
        heading: "A LITTLE CRUSH, A BIG SMILE",
        releaseDate: "JULY 22, 2026",
        paragraph: "Sometimes, the smallest moments can say the biggest things. ❤️ A sweet glance, a shy smile, and a heart full of feelings make every moment unforgettable.",
        buttonText: "VIEW POSTER",
        buttonLink: "assets/posters/latest/3.jpg"
      }
    ]
  };

  // Add or edit each fandom's users array here. Duplicate a profile object to add
  // another user; set photo to an image path and socialLink to one or more profiles.
  // Example:
  // socialLink: [
  //   { name: "Instagram", url: "https://www.instagram.com/your-name", icon: "fa-instagram" },
  //   { name: "YouTube", url: "https://youtube.com/@your-name", icon: "fa-youtube" }
  // ]
  const fandomCollaborators = [
    {
      fandom: "DreamWorks Trolls",
      shortName: "TROLLS",
      background: "assets/fandom-collaboration/bg/trolls-bg.jpg",
      backgroundPosition: "50% 45%",
      filmLogo: "assets/fandom-collaboration/logo-name/trolls-name.png",
      accent: "#ff93ca",
      users: [{
        name: "Jinelys Cosme",
        username: "@Jinelys_art",
        photo: "assets/fandom-collaboration/user-photo/jinelys-art.jpg",
        socialLink: [{ name: "Facebook", url: "https://www.facebook.com/JinelysArt/directory_intro", icon: "fa-facebook" },
                     { name: "Instagram", url: "https://www.instagram.com/jinelys_art?utm_source=ig_web_button_share_sheet&srtk=ZDNlZDc0MzIxNw==", icon: "fa-instagram" },
                     { name: "TikTok", url: "https://www.tiktok.com/@jinelys_art?is_from_webapp=1&sender_device=pc", icon: "fa-tiktok" },
                     { name: "X", url: "https://x.com/Jinelys_art?s=20", icon: "fa-x-twitter" },
                     { name: "Bluesky", url: "https://bsky.app/profile/jinelysart.bsky.social", icon: "fa-bluesky" }
                    ],
        paragraph: "Jinelys Cosme is a creative space featuring beautiful artwork, character illustrations, and fan art inspired by the Trolls fandom! A place where creativity, imagination, and love for Trolls come together."
      },
      {
        name: "Illustrious Darnell ",
        username: "@illustrious_darnell",
        photo: "assets/fandom-collaboration/user-photo/Illustrious-Darnell.jpg",
        socialLink: [{ name: "Instagram", url: "https://www.instagram.com/illustrious_darnell?utm_source=ig_web_button_share_sheet&cplk=ZDNlZDc0MzIxNw==", icon: "fa-instagram" },
                     { name: "X", url: "https://x.com/IllustriousD01?s=20", icon: "fa-x-twitter" },
                     { name: "Bluesky", url: "https://bsky.app/profile/illustriousd01.bsky.social", icon: "fa-bluesky" },
                     { name: "YouTube", url: "https://youtube.com/@illustriousdarnellofficial?si=22WLE4xMmkqYbA1w", icon: "fa-youtube" },
                     { name: "Wattpad", url: "https://www.wattpad.com/user/IllustriousDarnell", icon: "fa-wattpad" },
                     { name: "Facebook", url: "https://www.facebook.com/natthakorn.srikhote.2024/", icon: "fa-facebook" },
                     { name: "Discord", url: "https://discord.com/invite/6qfTCwvWk8", icon: "fa-discord" }
                    ],
        paragraph: "Add a short introduction for this Trolls fandom collaborator."
      }]
      
    },
    {
      fandom: "Pixar Elemental",
      shortName: "ELEMENTAL",
      background: "assets/fandom-collaboration/bg/elemental-bg.jpg",
      backgroundPosition: "43% 43%",
      filmLogo: "assets/fandom-collaboration/logo-name/elemental-name.png",
      accent: "#9de9ff",
      users: [{
        name: "🔥💧 Daily Elemental 🔥💧",
        username: "@elemental_daily",
        photo: "assets/fandom-collaboration/user-photo/🔥💧Daily Elemental🔥💧.jpg",
        socialLink: [{ name: "Instagram", url: "https://www.instagram.com/elemental_daily/?utm_source=ig_web_button_share_sheet", icon: "fa-instagram" },
                     { name: "X", url: "https://x.com/elemental_daily", icon: "fa-x-twitter" }
                    ],
        paragraph: "Elemental Daily is a fan account dedicated to Pixar's *Elemental*, sharing updates, fan art, memorable moments, and content featuring Ember, Wade, and the world of Element City. A place for Elemental fans to celebrate the movie and its characters!"
      }]
    },
    {
      fandom: "Angry Birds",
      shortName: "ANGRY BIRDS",
      background: "assets/fandom-collaboration/bg/angry-birds-bg.jpg",
      backgroundPosition: "54% 39%",
      filmLogo: "assets/fandom-collaboration/logo-name/angry-birds-name.png",
      accent: "#ffb65f",
      users: [{
        name: "_Redxsilver_",
        username: "@Redilver_Silvered_forever",
        photo: "assets/fandom-collaboration/user-photo/redilver-silvered-forever.jpg",
        socialLink: [{ name: "Instagram", url: "https://www.instagram.com/redilver_silvered_forever?utm_source=ig_web_button_share_sheet&mdxt=ZDNlZDc0MzIxNw==", icon: "fa-instagram" },
                     { name: "YouTube", url: "https://youtube.com/@redilver_silvered_forever?si=UHuLSpllqu5Remfn", icon: "fa-youtube" },
                     { name: "Pinterest", url: "https://ph.pinterest.com/Redilver_silvered_forever/_created/", icon: "fa-pinterest" },
                     { name: "DeviantArt", url: "https://www.deviantart.com/sonicmoviecute", icon: "fa-deviantart" },
                     { name: "TikTok", url: "https://www.tiktok.com/@_redxsilver_?_t=8pW0kPENIPg&_r=1", icon: "fa-tiktok" }
                    ],
        paragraph: "_Redxsilver_ is a creative fan page dedicated to the Angry Birds fandom, featuring fan art, favorite characters, and content inspired by the colorful world of Angry Birds! A place for fans to celebrate creativity, fun, and their love for the franchise."
      }]
    }
  ];

  // Add or edit timeline entries here. Set year and releaseDate (YYYY-MM-DD)
  // to place each memory in the year selector; blank dates display as TBA.
  const timelineMemories = [
    {
      year: "2016",
      releaseDate: "APRIL 17, 2016",
      category: "FANDOM",
      title: "SMURFS",
      subheading: "FIRST FANDOM",
      image: "assets/timeline/smurfs.jpg",
      imageAlt: "A PewJay sketchbook drawing"
    },
    {
      year: "2019",
      releaseDate: "SEPTEMBER 3, 2019",
      category: "FANDOM",
      title: "SMURFS",
      subheading: "END FANDOM",
      image: "assets/timeline/smurfs-end.jpg",
      imageAlt: "Colorful PewJay digital artwork"
    },
    {
      year: "2021",
      releaseDate: "AUGUST 3, 2021",
      category: "FANDOM",
      title: "DREAMWORKS TROLLS",
      subheading: "FIRST BEGIN FANDOM",
      image: "assets/timeline/trolls.jpg",
      imageAlt: "Colorful characters from the PewJay world"
    },
    {
      year: "2021",
      releaseDate: "JUNE 5, 2021",
      category: "FIRST CONTENT",
      title: "MOVIEFULLCLIPS",
      subheading: "FIRST YOUTUBE CHANNEL",
      image: "assets/timeline/mfc.jpg",
      imageAlt: "Colorful characters from the PewJay world"
    },
    {
      year: "2022",
      releaseDate: "MARCH 31, 2022",
      category: "END CONTENT",
      title: "MOVIEFULLCLIPS",
      subheading: "END OF CHANNEL — COPYRIGHTED VIDEOS WERE UPLOADED, RESULTING IN THE CHANNEL BEING BLOCKED.",
      image: "assets/timeline/mfc-end.jpg",
      imageAlt: "Colorful characters from the PewJay world"
    },
    {
      year: "2022",
      releaseDate: "JUNE 8, 2022",
      category: "2ND CONTENT",
      title: "PEWJAY OFFICIAL",
      subheading: "OFFIALLY BEGINS",
      image: "assets/timeline/pewjay.jpg",
      imageAlt: "Colorful characters from the PewJay world"
    },
    {
      year: "2022",
      releaseDate: "SEPTEMBER 21, 2022",
      category: "FIRST GAMER",
      title: "ANGRY BIRDS 2",
      subheading: "AS GAMER",
      image: "assets/timeline/angry-birds-2-2022.jpg",
      imageAlt: "Colorful characters from the PewJay world"
    },
    {
      year: "2023",
      releaseDate: "JANUARY 7, 2023",
      category: "STOP OFFICIAL",
      title: "PEWJAY OFFICIAL",
      subheading: "OFFICIAL BREAK TILL MARCH 2024",
      image: "assets/timeline/pewjay-end.jpg",
      imageAlt: "Colorful characters from the PewJay world"
    },
    {
      year: "2024",
      releaseDate: "MARCH 20, 2024",
      category: "OFFICIAL RETURNS",
      title: "PEWJAY OFFICIAL",
      subheading: "RESUME",
      image: "assets/timeline/pewjay-2024.jpg",
      imageAlt: "Colorful characters from the PewJay world"
    },
    {
      year: "2024",
      releaseDate: "APRIL 28, 2024",
      category: "MORE SKILLS",
      title: "FIRST DIGITAL ARTIST",
      subheading: "FIRST DIGITAL ARTWORK ERA",
      image: "assets/timeline/first-digital.jpg",
      imageAlt: "Colorful characters from the PewJay world"
    },
    {
      year: "2024",
      releaseDate: "SEPTEMBER 28, 2024",
      category: "SEASON 1 | EPISODE 1",
      title: "BOTTLE",
      subheading: "FIRST ANIMATED SERIES / EPISODE 1",
      image: "assets/timeline/bottle.jpg",
      imageAlt: "Colorful characters from the PewJay world"
    },
    {
      year: "2024",
      releaseDate: "DECEMBER 31, 2024",
      category: "NEW YEAR 2025 EVENT",
      title: "NEW YEAR 2025",
      subheading: "FIRST TIME LIVVESTREAM",
      image: "assets/timeline/ny2025.jpg",
      imageAlt: "Colorful characters from the PewJay world"
    },
    {
      year: "2025",
      releaseDate: "FEBRUARY 14, 2025",
      category: "SEASON 1 | EPISODE 2",
      title: "FOREVER TO BE LOVED",
      subheading: "ANIMATED SERIES / EPISODE 2",
      image: "assets/timeline/forever-to-be-loved.jpg",
      imageAlt: "Colorful characters from the PewJay world"
    },
    {
      year: "2025",
      releaseDate: "FEBRUARY 25, 2025",
      category: "BIRTHDAY EVENT",
      title: "17TH BIRTHDAY",
      subheading: "TURNS 17 Y.O.",
      image: "assets/timeline/17th.jpg",
      imageAlt: "Colorful characters from the PewJay world"
    },
    {
      year: "2025",
      releaseDate: "MARCH 11, 2025",
      category: "LIVE WORKING",
      title: "DIGITAL ART STREAMERS",
      subheading: "DIGITAL ART STREAMERS",
      image: "assets/timeline/digital-art-streamers.jpg",
      imageAlt: "Colorful characters from the PewJay world"
    },
    {
      year: "2025",
      releaseDate: "MARCH 21, 2025",
      category: "WORLD PLACES",
      title: "METRO TOUR",
      subheading: "FIRST TIME AT METRO TOUR — FIELD TRIP 2025",
      image: "assets/timeline/metro-tour.jpg",
      imageAlt: "Colorful characters from the PewJay world"
    },
    {
      year: "2025",
      releaseDate: "JUNE 8, 2025",
      category: "PEWJAY'S REBIRTH",
      title: "PEWJAY ANNIVERSARY",
      subheading: "3RD ANNIVERSARY",
      image: "assets/timeline/3rd-anniversary.jpg",
      imageAlt: "Colorful characters from the PewJay world"
    },
    {
      year: "2025",
      releaseDate: "OCTOBER 31 – NOVEMBER 1, 2025",
      category: "HALLOWEEN GAMEPLAY EDITION",
      title: "SLENDRINA HAUNTED CONNECTION",
      subheading: "LIVE GAMER",
      image: "assets/timeline/slendrina-haunted-connection.jpg",
      imageAlt: "Colorful characters from the PewJay world"
    },
    {
      year: "2025",
      releaseDate: "NOVEMBER 18, 2025",
      category: "SEASON 1 | EPISODE 3",
      title: "FOREVER TO BE LOVED 2",
      subheading: "ANIMATED SERIES / EPISODE 3",
      image: "assets/timeline/forever-to-be-loved-2.jpg",
      imageAlt: "Colorful characters from the PewJay world"
    },
    {
      year: "2026",
      releaseDate: "JANUARY 17, 2026",
      category: "WORLD PLACES",
      title: "MALVAR TO AGILA TOUR",
      subheading: "LIVE / FIELD TRIP 2026",
      image: "assets/timeline/malvar-to-agila.jpeg",
      imageAlt: "Colorful characters from the PewJay world"
    },
    {
      year: "2026",
      releaseDate: "FEBRUARY 25, 2026",
      category: "BIRTHDAY & SPECIALIZATIONS",
      title: "18TH BIRTHDAY",
      subheading: "TURNS 18TH / NEW PIXAR ELEMENTAL FANDOM",
      image: "assets/timeline/18th.jpg",
      imageAlt: "Colorful characters from the PewJay world"
    },
    {
      year: "2026",
      releaseDate: "MARCH 28, 2026",
      category: "END OF SENIOR HIGH SCHOOL",
      title: "GRADUATION",
      subheading: "GRADUATION IN SAN JOSE COMMUNITY SENIOR HIGH SCHOOL",
      image: "assets/timeline/graduation.jpg",
      imageAlt: "Colorful characters from the PewJay world"
    },
    {
      year: "2026",
      releaseDate: "JUNE 1, 2026",
      category: "REACHED ANALYTICS MILESTONE",
      title: "1K SUBSCRIBERS",
      subheading: "PEWJAY CHANNEL",
      image: "assets/timeline/1000-subscribers.jpg",
      imageAlt: "Colorful characters from the PewJay world"
    },
    {
      year: "2026",
      releaseDate: "JUNE 8, 2026",
      category: "LEGEND RETURNS",
      title: "ANGRY BIRDS 2",
      subheading: "GAMER RETURNS",
      image: "assets/timeline/angry-birds-2-2026.jpg",
      imageAlt: "Colorful characters from the PewJay world"
    },
    {
      year: "2026",
      releaseDate: "JULY 13, 2026",
      category: "PUBLIC WEBSITE LAUNCH",
      title: "PEWJAY WEBSITE",
      subheading: "FIRST CREATED PEWJAY WEBSITES",
      image: "assets/timeline/first-websites.jpg",
      imageAlt: "Colorful characters from the PewJay world"
    }
  ];

  function mountSharedRegions() {
    document.querySelectorAll("[data-site-header]").forEach((slot) => { slot.innerHTML = headerMarkup; });
    document.querySelectorAll("[data-site-footer]").forEach((slot) => { slot.innerHTML = footerMarkup; });
    if (!document.querySelector("[data-cookie-notice]") && !document.body.classList.contains("intro-page")) {
      document.body.insertAdjacentHTML("beforeend", cookieMarkup);
    }
    document.querySelectorAll("[data-current-year]").forEach((node) => { node.textContent = String(new Date().getFullYear()); });
  }

  function setupLocalClock() {
    const dateNode = document.querySelector("[data-local-date]");
    if (!dateNode) return;
    const weekdayNode = document.querySelector("[data-local-weekday]");
    const clockNode = document.querySelector("[data-local-clock]");
    const zoneNode = document.querySelector("[data-local-zone]");
    const iconNode = document.querySelector("[data-day-icon]");
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const zoneFormatter = new Intl.DateTimeFormat(undefined, { timeZoneName: "short" });
    const dateFormatter = new Intl.DateTimeFormat(undefined, { month: "long", day: "numeric" });
    const weekdayFormatter = new Intl.DateTimeFormat(undefined, { weekday: "long" });
    const clockFormatter = new Intl.DateTimeFormat(undefined, { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true });

    const tick = () => {
      const now = new Date();
      dateNode.textContent = dateFormatter.format(now);
      weekdayNode.textContent = weekdayFormatter.format(now);
      clockNode.textContent = clockFormatter.format(now).replace(/\u202f/g, " ");
      const parts = zoneFormatter.formatToParts(now);
      const zone = parts.find((part) => part.type === "timeZoneName")?.value || timeZone;
      zoneNode.textContent = zone;
      const hour = Number(new Intl.DateTimeFormat("en", { hour: "numeric", hour12: false }).format(now));
      const isNight = hour < 6 || hour >= 18;
      iconNode.classList.toggle("is-night", isNight);
      iconNode.innerHTML = `<i class="fa-solid ${isNight ? "fa-moon" : "fa-sun"}" aria-hidden="true"></i>`;
    };
    tick();
    window.setInterval(tick, 1000);
  }

  function setupNavigation() {
    const toggle = document.querySelector("[data-menu-toggle]");
    const nav = document.querySelector(".nav-overlay");
    if (!toggle || !nav) return;
    const closeButton = nav.querySelector("[data-menu-close]");

    const close = () => {
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open navigation");
      nav.setAttribute("aria-hidden", "true");
      nav.classList.remove("is-open");
      document.body.classList.remove("menu-open");
      toggle.focus({ preventScroll: true });
    };
    const open = () => {
      toggle.setAttribute("aria-expanded", "true");
      toggle.setAttribute("aria-label", "Close navigation");
      nav.setAttribute("aria-hidden", "false");
      nav.classList.add("is-open");
      document.body.classList.add("menu-open");
      const firstLink = nav.querySelector("a");
      window.setTimeout(() => firstLink?.focus({ preventScroll: true }), 150);
    };

    toggle.addEventListener("click", () => toggle.getAttribute("aria-expanded") === "true" ? close() : open());
    closeButton?.addEventListener("click", close);
    nav.addEventListener("click", (event) => { if (event.target === nav) close(); });
    nav.addEventListener("keydown", (event) => {
      if (event.key === "Escape") { event.preventDefault(); close(); return; }
      if (event.key !== "Tab") return;
      const focusable = [...nav.querySelectorAll("a, button")].filter((node) => !node.disabled);
      if (!focusable.length) return;
      if (event.shiftKey && document.activeElement === focusable[0]) { event.preventDefault(); focusable.at(-1).focus(); }
      else if (!event.shiftKey && document.activeElement === focusable.at(-1)) { event.preventDefault(); focusable[0].focus(); }
    });
  }

  function setupPageTransition() {
    const transition = document.querySelector("#pageTransition");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (transition) window.setTimeout(() => transition.classList.add("is-done"), reducedMotion ? 80 : 760);

    document.addEventListener("click", (event) => {
      const link = event.target.closest("a[href]");
      if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || link.target === "_blank" || !transition) return;
      let destination;
      try { destination = new URL(link.href, location.href); } catch { return; }
      const isLocalHtml = destination.origin === location.origin && destination.pathname.toLowerCase().endsWith(".html");
      if (!isLocalHtml || destination.pathname === location.pathname) return;
      event.preventDefault();
      transition.classList.remove("is-done");
      window.setTimeout(() => { location.href = destination.href; }, reducedMotion ? 90 : 420);
    });
  }

  function setupIntro() {
    if (!document.body.classList.contains("intro-page")) return;
    const duration = 10_000;
    const start = performance.now();
    const percent = document.querySelector("[data-intro-percent]");
    const progress = document.querySelector("[data-intro-progress]");
    const countdown = document.querySelector("[data-intro-countdown]");
    const animate = (now) => {
      const elapsed = now - start;
      const ratio = Math.min(1, elapsed / duration);
      if (percent) percent.textContent = `${String(Math.floor(ratio * 100)).padStart(2, "0")}%`;
      if (progress) progress.style.width = `${ratio * 100}%`;
      if (countdown) countdown.textContent = `00:${String(Math.ceil(Math.max(0, duration - elapsed) / 1_000)).padStart(2, "0")}`;
      if (ratio < 1) requestAnimationFrame(animate);
      else location.replace("home.html");
    };
    requestAnimationFrame(animate);
  }

  function setupCookieNotice() {
    const notice = document.querySelector("[data-cookie-notice]");
    if (!notice || document.body.classList.contains("intro-page") || document.body.classList.contains("page-maintenance")) return;
    let hasChoice = false;
    try { hasChoice = Boolean(localStorage.getItem("pewjay-cookie-choice")); } catch { /* Storage may be disabled. */ }
    if (hasChoice) return;
    window.setTimeout(() => {
      notice.classList.add("is-visible");
      document.body.classList.add("cookie-open");
    }, 2_750);
    notice.querySelectorAll("[data-cookie-choice]").forEach((button) => {
      button.addEventListener("click", () => {
        try { localStorage.setItem("pewjay-cookie-choice", button.dataset.cookieChoice); } catch { /* The notice can still be dismissed. */ }
        notice.classList.remove("is-visible");
        document.body.classList.remove("cookie-open");
        window.setTimeout(() => notice.remove(), 400);
      });
    });
  }

  function setupBackToTop() {
    const button = document.querySelector("[data-back-to-top]");
    if (!button) return;
    const update = () => button.classList.toggle("is-visible", window.scrollY > 520);
    window.addEventListener("scroll", update, { passive: true });
    update();
    button.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  function setupStoryDeck() {
    const deck = document.querySelector("[data-story-deck]");
    if (!deck) return;
    const panels = [...deck.querySelectorAll("[data-story-panel]")];
    const dots = [...deck.querySelectorAll("[data-story-dot]")];
    const progress = deck.querySelector("[data-story-progress]");
    let current = 0;
    let switching = false;

    const goTo = (index) => {
      if (index < 0 || index >= panels.length || index === current || switching) return;
      switching = true;
      panels[current].classList.remove("is-active");
      panels[current].setAttribute("aria-hidden", "true");
      current = index;
      panels[current].classList.add("is-active");
      panels[current].setAttribute("aria-hidden", "false");
      dots.forEach((dot, dotIndex) => {
        dot.classList.toggle("is-active", dotIndex === current);
        dot.setAttribute("aria-current", dotIndex === current ? "step" : "false");
      });
      if (progress) progress.style.width = `${((current + 1) / panels.length) * 100}%`;
      window.setTimeout(() => { switching = false; }, 780);
    };

    dots.forEach((dot) => dot.addEventListener("click", () => goTo(Number(dot.dataset.storyDot))));
    deck.querySelectorAll("[data-story-next]").forEach((button) => button.addEventListener("click", () => goTo(Math.min(current + 1, panels.length - 1))));
    let lastWheel = 0;
    deck.addEventListener("wheel", (event) => {
      const direction = Math.sign(event.deltaY);
      const canAdvance = direction > 0 && current < panels.length - 1;
      const canReverse = direction < 0 && current > 0;
      if (!canAdvance && !canReverse) return;
      event.preventDefault();
      const now = Date.now();
      if (Math.abs(event.deltaY) < 15 || now - lastWheel < 900) return;
      lastWheel = now;
      goTo(current + direction);
    }, { passive: false });

    let touchStart = null;
    deck.addEventListener("touchstart", (event) => { touchStart = event.changedTouches[0]?.clientY ?? null; }, { passive: true });
    deck.addEventListener("touchmove", (event) => {
      if (touchStart === null) return;
      const currentY = event.changedTouches[0]?.clientY ?? touchStart;
      const movement = touchStart - currentY;
      const canAdvance = movement > 8 && current < panels.length - 1;
      const canReverse = movement < -8 && current > 0;
      if (canAdvance || canReverse) event.preventDefault();
    }, { passive: false });
    deck.addEventListener("touchend", (event) => {
      if (touchStart === null) return;
      const difference = touchStart - (event.changedTouches[0]?.clientY ?? touchStart);
      if (Math.abs(difference) > 52) goTo(current + (difference > 0 ? 1 : -1));
      touchStart = null;
    }, { passive: true });
    document.addEventListener("keydown", (event) => {
      if (event.altKey || event.ctrlKey || event.metaKey || event.target.closest("button, a, input, textarea, select")) return;
      if (event.key === "ArrowDown" || event.key === "PageDown") {
        if (current < panels.length - 1) { event.preventDefault(); goTo(current + 1); }
      } else if (event.key === "ArrowUp" || event.key === "PageUp") {
        if (current > 0) { event.preventDefault(); goTo(current - 1); }
      }
    });
    document.querySelector("[data-back-to-top]")?.addEventListener("click", () => goTo(0));
  }

  function setupRotatingHeading() {
    const node = document.querySelector("[data-rotating-word]");
    if (!node) return;
    const words = ["DIGITAL", "TRADITIONAL", "ANIMATION", "CONTENT", "JOY", "BUONG PUSONG PINOY"];
    let index = 0;
    window.setInterval(() => {
      node.classList.remove("is-in");
      node.classList.add("is-out");
      window.setTimeout(() => {
        index = (index + 1) % words.length;
        node.textContent = words[index];
        node.classList.remove("is-out");
        node.classList.add("is-in");
      }, 380);
    }, 2600);
  }

  function setupContentShowcase() {
    const image = document.querySelector("[data-content-image]");
    if (!image) return;
    const visual = document.querySelector("[data-content-visual]");
    const title = document.querySelector("[data-content-title]");
    const label = document.querySelector("[data-content-label]");
    const copy = document.querySelector("[data-content-copy]");
    const description = document.querySelector(".content-description");
    const link = document.querySelector("[data-content-link]");
    const counter = document.querySelector("[data-content-counter]");
    const tabs = [...document.querySelectorAll("[data-content-tab]")];
    let category = "digital-art";
    let imageIndex = 1;
    let copyTimer;

    const imagePath = (set, index) => {
      const extension = set.folder === "digital-art" && index === 14 ? "png" : "jpg";
      return `assets/home/${set.folder}/${index}.${extension}`;
    };
    const updateCopy = (set) => {
      if (title) title.textContent = set.title;
      if (label) label.textContent = set.label;
      if (copy) copy.textContent = set.copy;
      if (link) {
        const hasAction = typeof set.action === "string" && set.action.trim() && typeof set.href === "string" && set.href.trim();
        link.hidden = !hasAction;
        if (hasAction) {
          link.href = set.href;
          link.innerHTML = `${set.action} <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>`;
        } else {
          link.removeAttribute("href");
          link.replaceChildren();
        }
      }
    };
    const render = (animate = true, animateCopy = false) => {
      const set = contentSets[category];
      const path = imagePath(set, imageIndex);
      if (animate) visual.classList.add("is-changing");
      const next = new Image();
      next.onload = () => {
        image.src = path;
        image.alt = set.alt;
        if (counter) counter.textContent = `${String(imageIndex).padStart(2, "0")} / ${String(set.total).padStart(2, "0")}`;
        window.setTimeout(() => visual.classList.remove("is-changing"), 150);
      };
      next.onerror = () => visual.classList.remove("is-changing");
      next.src = path;
      if (animateCopy && description) {
        window.clearTimeout(copyTimer);
        description.classList.remove("is-leaving", "is-entering");
        void description.offsetWidth;
        description.classList.add("is-leaving");
        copyTimer = window.setTimeout(() => {
          updateCopy(set);
          description.classList.remove("is-leaving");
          description.classList.add("is-entering");
          copyTimer = window.setTimeout(() => description.classList.remove("is-entering"), 520);
        }, 160);
      } else {
        updateCopy(set);
      }
    };

    const selectCategory = (key) => {
      if (!contentSets[key]) return;
      category = key;
      imageIndex = 1;
      tabs.forEach((tab) => {
        const selected = tab.dataset.contentTab === key;
        tab.classList.toggle("is-selected", selected);
        tab.setAttribute("aria-selected", String(selected));
      });
      const selectedTab = tabs.find((tab) => tab.dataset.contentTab === key);
      if (selectedTab) document.querySelector("#contentPanel")?.setAttribute("aria-labelledby", selectedTab.id);
      render(true, true);
    };
    tabs.forEach((tab) => tab.addEventListener("click", () => selectCategory(tab.dataset.contentTab)));
    tabs.forEach((tab, index) => tab.addEventListener("keydown", (event) => {
      if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
      event.preventDefault();
      const nextIndex = (index + (event.key === "ArrowRight" ? 1 : tabs.length - 1)) % tabs.length;
      tabs[nextIndex].focus();
      selectCategory(tabs[nextIndex].dataset.contentTab);
    }));
    document.querySelector("[data-content-prev]")?.addEventListener("click", () => {
      const set = contentSets[category];
      imageIndex = imageIndex === 1 ? set.total : imageIndex - 1;
      render();
    });
    document.querySelector("[data-content-next]")?.addEventListener("click", () => {
      const set = contentSets[category];
      imageIndex = imageIndex === set.total ? 1 : imageIndex + 1;
      render();
    });
    window.setInterval(() => {
      const set = contentSets[category];
      imageIndex = imageIndex === set.total ? 1 : imageIndex + 1;
      render();
    }, 6_500);
  }

  function setupContactForm() {
    const form = document.querySelector("#contactForm");
    if (!form) return;
    const note = form.querySelector("[data-form-note]");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const subject = encodeURIComponent("A note for PewJay");
      const body = encodeURIComponent(`From: ${data.get("email")}\n\n${data.get("message")}`);
      if (note) note.textContent = "Opening your email app with your message…";
      window.location.href = `mailto:justinjayhernando900@gmail.com?subject=${subject}&body=${body}`;
    });
  }

  function setupSocialHub() {
    const filterGroup = document.querySelector("[data-social-filter]")?.closest("[role='group']");
    if (!filterGroup) return;
    const filters = [...filterGroup.querySelectorAll("[data-social-filter]")];
    const cards = [...document.querySelectorAll("[data-social-card]")];
    const status = document.querySelector("[data-social-filter-status]");
    const update = (category) => {
      let visibleCount = 0;
      cards.forEach((card) => {
        const visible = category === "all" || card.dataset.socialCategory === category;
        card.hidden = !visible;
        if (visible) visibleCount += 1;
      });
      filters.forEach((filter) => filter.setAttribute("aria-pressed", String(filter.dataset.socialFilter === category)));
      if (status) status.textContent = category === "all" ? `Showing all ${visibleCount} platforms` : `Showing ${visibleCount} ${category === "watch" ? "watch & create" : category === "art" ? "art & updates" : "community"} platforms`;
    };
    filterGroup.addEventListener("click", (event) => {
      const filter = event.target.closest("[data-social-filter]");
      if (filter) update(filter.dataset.socialFilter);
    });
  }

  function setupPosterLightbox() {
    const dialog = document.querySelector("[data-lightbox-dialog]");
    const image = document.querySelector("[data-lightbox-image]");
    if (!dialog || !image) return;
    document.querySelectorAll("[data-lightbox]").forEach((button) => button.addEventListener("click", () => {
      image.src = button.dataset.lightbox;
      image.alt = button.getAttribute("aria-label") || "Expanded PewJay artwork";
      dialog.showModal();
      document.body.classList.add("lightbox-open");
    }));
    document.querySelector("[data-lightbox-close]")?.addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); });
    dialog.addEventListener("close", () => { document.body.classList.remove("lightbox-open"); image.removeAttribute("src"); });
  }

  function setupEventsCountdown() {
    const list = document.querySelector("[data-event-list]");
    const template = document.querySelector("#eventCardTemplate");
    const dialog = document.querySelector("#eventFullscreen");
    if (!list || !template || !dialog) return;

    const releaseFormatter = new Intl.DateTimeFormat(undefined, {
      weekday: "long", month: "long", day: "numeric", year: "numeric",
      hour: "numeric", minute: "2-digit", timeZoneName: "short"
    });
    const formatValue = (value) => String(value).padStart(2, "0");

    eventCountdowns.forEach((event, index) => {
      const card = template.content.firstElementChild.cloneNode(true);
      card.dataset.eventIndex = String(index);
      card.querySelector("[data-event-eyebrow]").textContent = event.eyebrow;
      card.querySelector("[data-event-title]").textContent = event.title;
      card.querySelector("[data-event-description]").textContent = event.description;
      card.querySelector("[data-event-image]").src = event.image;
      card.querySelector("[data-event-image]").alt = event.imageAlt;
      card.querySelector("[data-card-release]").dataset.eventRelease = event.id;
      card.querySelector("[data-card-status]").dataset.eventStatus = event.id;
      card.querySelector("[data-event-timer]").dataset.eventTimer = event.id;
      card.querySelector("[data-event-countdown-label]").textContent = "COUNTDOWN TO THE EVENT";
      card.querySelector("[data-open-event]").dataset.openEvent = String(index);
      list.append(card);
    });

    const updateValue = (node, value) => {
      if (!node || node.textContent === value) return;
      node.textContent = value;
      node.classList.remove("is-ticking");
      void node.offsetWidth;
      node.classList.add("is-ticking");
      window.setTimeout(() => node.classList.remove("is-ticking"), 480);
    };

    const updateCountdowns = () => {
      const now = Date.now();
      eventCountdowns.forEach((event) => {
        const target = event.releaseAt ? new Date(event.releaseAt).getTime() : Number.NaN;
        const hasDate = Number.isFinite(target);
        const remaining = hasDate ? Math.max(0, Math.floor((target - now) / 1000)) : 0;
        const values = hasDate ? {
          days: formatValue(Math.floor(remaining / 86400)),
          hours: formatValue(Math.floor((remaining % 86400) / 3600)),
          minutes: formatValue(Math.floor((remaining % 3600) / 60)),
          seconds: formatValue(remaining % 60)
        } : { days: "TBA", hours: "TBA", minutes: "TBA", seconds: "TBA" };
        const dateText = hasDate ? releaseFormatter.format(new Date(target)) : "DATE TO BE ANNOUNCED";
        const statusText = !hasDate ? "DATE TO BE ANNOUNCED" : remaining > 0 ? "COUNTING DOWN TO THE EVENT" : "COUNTDOWN COMPLETE";

        document.querySelectorAll("[data-event-timer]").forEach((group) => {
          if (group.dataset.eventTimer !== event.id) return;
          group.classList.toggle("is-tba", !hasDate);
          Object.entries(values).forEach(([unit, value]) => updateValue(group.querySelector(`[data-countdown-value="${unit}"]`), value));
        });
        document.querySelectorAll(`[data-event-release="${event.id}"]`).forEach((node) => { node.textContent = dateText; });
        document.querySelectorAll(`[data-event-status="${event.id}"]`).forEach((node) => { node.textContent = statusText; });
      });
    };

    const fullscreenImage = dialog.querySelector("[data-fullscreen-image]");
    const fullscreenTimer = dialog.querySelector("[data-fullscreen-timer]");
    const openFullscreen = (index, trigger) => {
      const event = eventCountdowns[index];
      if (!event) return;
      const rect = trigger.getBoundingClientRect();
      dialog.style.setProperty("--event-origin-x", `${rect.left + rect.width / 2}px`);
      dialog.style.setProperty("--event-origin-y", `${rect.top + rect.height / 2}px`);
      fullscreenImage.src = event.image;
      fullscreenImage.alt = event.imageAlt;
      dialog.querySelector("[data-fullscreen-eyebrow]").textContent = event.eyebrow;
      dialog.querySelector("[data-fullscreen-title]").textContent = event.title;
      dialog.querySelector("[data-fullscreen-description]").textContent = event.description;
      dialog.querySelector("[data-fullscreen-release]").dataset.eventRelease = event.id;
      dialog.querySelector("[data-fullscreen-countdown-label]").textContent = "COUNTDOWN TO THE EVENT";
      dialog.querySelector("[data-fullscreen-status]").dataset.eventStatus = event.id;
      fullscreenTimer.dataset.eventTimer = event.id;
      const link = dialog.querySelector("[data-fullscreen-link]");
      link.href = event.link || "#";
      link.textContent = event.linkLabel || "Follow for updates";
      link.hidden = !event.link;
      dialog.classList.remove("is-closing", "is-opening");
      dialog.showModal();
      dialog.classList.add("is-opening");
      updateCountdowns();
    };

    list.addEventListener("click", (event) => {
      const button = event.target.closest("[data-open-event]");
      if (button) openFullscreen(Number(button.dataset.openEvent), button);
    });
    const finishClose = () => {
      if (!dialog.open || dialog.classList.contains("is-closing")) return;
      dialog.classList.remove("is-opening");
      dialog.classList.add("is-closing");
      window.setTimeout(() => {
        if (dialog.open) dialog.close();
        dialog.classList.remove("is-closing");
      }, 520);
    };
    dialog.querySelector("[data-close-event]").addEventListener("click", finishClose);
    dialog.addEventListener("cancel", (event) => { event.preventDefault(); finishClose(); });
    dialog.addEventListener("click", (event) => { if (event.target === dialog) finishClose(); });
    dialog.addEventListener("close", () => {
      dialog.classList.remove("is-opening", "is-closing");
      fullscreenImage.removeAttribute("src");
    });

    updateCountdowns();
    window.setInterval(updateCountdowns, 1000);
  }

  function setupPosters() {
    const feature = document.querySelector("[data-poster-feature]");
    const latestList = document.querySelector("[data-poster-latest-list]");
    const latestTemplate = document.querySelector("#posterLatestTemplate");
    if (!feature || !latestList || !latestTemplate) return;

    const formatReleaseDate = (value) => {
      if (!value) return "DATE TO BE ANNOUNCED";
      const date = new Date(`${value}T00:00:00`);
      if (Number.isNaN(date.getTime())) return value;
      return new Intl.DateTimeFormat(undefined, { month: "long", day: "numeric", year: "numeric" }).format(date);
    };
    const setLink = (link, label, href) => {
      link.querySelector("[data-poster-link-label]").textContent = label;
      link.href = href || "#";
      if (/^(https?:|assets\/)/i.test(href || "")) {
        link.target = "_blank";
        link.rel = "noopener noreferrer";
      } else {
        link.removeAttribute("target");
        link.removeAttribute("rel");
      }
    };

    const featured = posterShowcase.featured;
    feature.querySelector("[data-poster-feature-image]").src = featured.image;
    feature.querySelector("[data-poster-feature-image]").alt = featured.imageAlt;
    feature.querySelector("[data-poster-feature-badge]").textContent = featured.badge;
    feature.querySelector("[data-poster-feature-heading]").textContent = featured.heading;
    feature.querySelector("[data-poster-feature-release]").textContent = formatReleaseDate(featured.releaseDate);
    feature.querySelector("[data-poster-feature-paragraph]").textContent = featured.paragraph;
    setLink(feature.querySelector("[data-poster-feature-link]"), featured.buttonText, featured.buttonLink);

    posterShowcase.latest.forEach((poster) => {
      const card = latestTemplate.content.firstElementChild.cloneNode(true);
      card.querySelector("[data-poster-latest-image]").src = poster.image;
      card.querySelector("[data-poster-latest-image]").alt = poster.imageAlt;
      card.querySelector("[data-poster-latest-heading]").textContent = poster.heading;
      card.querySelector("[data-poster-latest-release]").textContent = formatReleaseDate(poster.releaseDate);
      card.querySelector("[data-poster-latest-paragraph]").textContent = poster.paragraph;
      setLink(card.querySelector("[data-poster-latest-link]"), poster.buttonText, poster.buttonLink);
      latestList.append(card);
    });
  }

  function setupTimeline() {
    const stage = document.querySelector("[data-timeline-stage]");
    if (!stage || !timelineMemories.length) return;
    const background = stage.querySelector("[data-timeline-background]");
    const backgroundNext = stage.querySelector("[data-timeline-background-next]");
    const memoryPanel = stage.querySelector("[data-timeline-memory]");
    const yearsHost = stage.querySelector("[data-timeline-years]");
    const indexNode = stage.querySelector("[data-memory-index]");
    const progress = stage.querySelector("[data-timeline-progress]");
    const yearNames = [...new Set(timelineMemories.map((memory) => memory.year || "TBA"))].sort((a, b) => {
      if (a === "TBA") return 1;
      if (b === "TBA") return -1;
      return b.localeCompare(a, undefined, { numeric: true });
    });
    const filters = ["ALL", ...yearNames];
    let selectedYear = "ALL";
    let visibleMemories = timelineMemories;
    let currentIndex = 0;
    let textTimer;
    let backgroundRequest = 0;
    let activeBackground = background;

    yearsHost.innerHTML = filters.map((year) => `<button type="button" data-year="${year}" aria-pressed="${year === selectedYear}" class="${year === selectedYear ? "is-selected" : ""}">${year}</button>`).join("");

    const formatReleaseDate = (value) => {
      if (!value) return "DATE TO BE ANNOUNCED";
      const date = new Date(`${value}T00:00:00`);
      if (Number.isNaN(date.getTime())) return value;
      return new Intl.DateTimeFormat(undefined, { month: "long", day: "numeric", year: "numeric" }).format(date);
    };
    const paintText = (memory) => {
      stage.querySelector("[data-memory-category]").textContent = memory.category;
      stage.querySelector("[data-memory-year]").textContent = memory.year || "TBA";
      stage.querySelector("[data-memory-release]").textContent = formatReleaseDate(memory.releaseDate);
      stage.querySelector("[data-memory-title]").textContent = memory.title;
      stage.querySelector("[data-memory-subheading]").textContent = memory.subheading;
      stage.querySelector("[data-memory-description]").textContent = memory.description;
    };
    const paintBackground = (memory, animate) => {
      const request = ++backgroundRequest;
      if (!animate) {
        background.classList.remove("is-changing", "is-ready");
        backgroundNext.classList.remove("is-changing", "is-ready");
        activeBackground = background;
        if (background.getAttribute("src") !== memory.image) background.src = memory.image;
        background.alt = memory.imageAlt;
        const showImage = () => {
          if (request === backgroundRequest) background.classList.add("is-ready");
        };
        if (background.complete && background.naturalWidth > 0) showImage();
        else {
          background.addEventListener("load", showImage, { once: true });
          background.addEventListener("error", showImage, { once: true });
        }
        return;
      }
      const outgoing = activeBackground;
      const incoming = outgoing === background ? backgroundNext : background;
      incoming.classList.remove("is-ready", "is-changing");
      const preload = new Image();
      preload.onload = () => {
        if (request !== backgroundRequest) return;
        incoming.src = memory.image;
        incoming.alt = memory.imageAlt;
        incoming.classList.add("is-ready");
        outgoing.classList.remove("is-ready");
        outgoing.classList.add("is-changing");
        activeBackground = incoming;
      };
      preload.onerror = () => {
        if (request !== backgroundRequest) return;
        incoming.src = memory.image;
        incoming.alt = memory.imageAlt;
        incoming.classList.add("is-ready");
        outgoing.classList.remove("is-ready");
        outgoing.classList.add("is-changing");
        activeBackground = incoming;
      };
      preload.src = memory.image;
    };
    const render = (animate = true) => {
      if (!visibleMemories.length) return;
      currentIndex = (currentIndex + visibleMemories.length) % visibleMemories.length;
      const memory = visibleMemories[currentIndex];
      if (indexNode) indexNode.textContent = `${String(currentIndex + 1).padStart(2, "0")} / ${String(visibleMemories.length).padStart(2, "0")}`;
      if (progress) progress.style.width = `${((currentIndex + 1) / visibleMemories.length) * 100}%`;
      paintBackground(memory, animate);
      window.clearTimeout(textTimer);
      if (!animate) {
        paintText(memory);
        return;
      }
      memoryPanel.classList.remove("is-entering", "is-leaving");
      void memoryPanel.offsetWidth;
      memoryPanel.classList.add("is-leaving");
      textTimer = window.setTimeout(() => {
        paintText(memory);
        memoryPanel.classList.remove("is-leaving");
        memoryPanel.classList.add("is-entering");
        textTimer = window.setTimeout(() => memoryPanel.classList.remove("is-entering"), 650);
      }, 160);
    };
    const selectYear = (year) => {
      selectedYear = year;
      visibleMemories = year === "ALL" ? timelineMemories : timelineMemories.filter((memory) => (memory.year || "TBA") === year);
      currentIndex = 0;
      yearsHost.querySelectorAll("[data-year]").forEach((button) => {
        const selected = button.dataset.year === selectedYear;
        button.classList.toggle("is-selected", selected);
        button.setAttribute("aria-pressed", String(selected));
      });
      render();
    };

    yearsHost.addEventListener("click", (event) => {
      const button = event.target.closest("[data-year]");
      if (button && button.dataset.year !== selectedYear) selectYear(button.dataset.year);
    });
    stage.querySelector("[data-timeline-prev]").addEventListener("click", () => { currentIndex -= 1; render(); });
    stage.querySelector("[data-timeline-next]").addEventListener("click", () => { currentIndex += 1; render(); });
    let wheelAmount = 0;
    let wheelTimer;
    stage.addEventListener("wheel", (event) => {
      const delta = Math.abs(event.deltaY) >= Math.abs(event.deltaX) ? event.deltaY : event.deltaX;
      if (delta === 0) return;
      event.preventDefault();
      wheelAmount += delta;
      window.clearTimeout(wheelTimer);
      wheelTimer = window.setTimeout(() => {
        const amount = wheelAmount;
        wheelAmount = 0;
        if (Math.abs(amount) < 28) return;
        const direction = Math.sign(amount);
        if (direction !== 0) {
          currentIndex += direction;
          render();
        }
      }, 140);
    }, { passive: false });
    document.addEventListener("keydown", (event) => {
      if (!stage.contains(event.target) || event.altKey || event.ctrlKey || event.metaKey || event.target.closest("button, a, input, select, textarea")) return;
      if (event.key === "ArrowLeft") { event.preventDefault(); currentIndex -= 1; render(); }
      if (event.key === "ArrowRight") { event.preventDefault(); currentIndex += 1; render(); }
    });

    let touchStart = null;
    stage.addEventListener("touchstart", (event) => {
      touchStart = event.target.closest("button") ? null : [event.changedTouches[0].clientX, event.changedTouches[0].clientY];
    }, { passive: true });
    stage.addEventListener("touchmove", (event) => {
      if (!touchStart) return;
      const touch = event.changedTouches[0];
      if (Math.abs(touch.clientX - touchStart[0]) > 12) event.preventDefault();
    }, { passive: false });
    stage.addEventListener("touchend", (event) => {
      if (!touchStart) return;
      const touch = event.changedTouches[0];
      const deltaX = touchStart[0] - touch.clientX;
      const deltaY = touchStart[1] - touch.clientY;
      if (Math.abs(deltaX) > 48 && Math.abs(deltaX) > Math.abs(deltaY)) {
        currentIndex += deltaX > 0 ? 1 : -1;
        render();
      }
      touchStart = null;
    }, { passive: true });

    render(false);
  }

  function setupFandomCollaboration() {
    const list = document.querySelector("[data-fandom-collab-list]");
    const template = document.querySelector("#fandomCollabCardTemplate");
    const dialog = document.querySelector("#fandomProfileDialog");
    if (!list || !template || !dialog) return;

    const cardNodes = [];
    const cardUserIndices = fandomCollaborators.map(() => 0);
    const getUsers = (collaborator) => Array.isArray(collaborator.users) ? collaborator.users : [];
    const setAvatar = (image, placeholder, photo, name) => {
      if (!photo) {
        image.removeAttribute("src");
        image.alt = "";
        image.hidden = true;
        placeholder.hidden = false;
        return;
      }
      image.alt = `${name} profile photo`;
      image.onload = () => { image.hidden = false; placeholder.hidden = true; };
      image.onerror = () => { image.hidden = true; placeholder.hidden = false; };
      image.src = photo;
    };
    const renderCardAvatars = (card, users, selectedIndex) => {
      const avatarList = card.querySelector("[data-fandom-avatar-list]");
      avatarList.replaceChildren();
      avatarList.classList.toggle("has-multiple", users.length > 1);
      avatarList.dataset.userCount = String(users.length);
      const commonPositions = {
        1: [[50, 62]],
        2: [[25, 45], [75, 70]],
        3: [[20, 72], [50, 32], [80, 72]],
        4: [[24, 38], [76, 38], [24, 75], [76, 75]],
        5: [[16, 48], [38, 28], [62, 28], [84, 48], [50, 76]],
        6: [[17, 32], [50, 28], [83, 32], [17, 70], [50, 76], [83, 70]]
      };
      users.forEach((user, userIndex) => {
        const avatar = document.createElement("button");
        avatar.type = "button";
        avatar.className = `fandom-avatar-option${userIndex === selectedIndex ? " is-selected" : ""}`;
        const positions = commonPositions[users.length];
        const rows = Math.ceil(users.length / 3);
        const row = Math.floor(userIndex / 3);
        const position = positions?.[userIndex] || [20 + (userIndex % 3) * 30, rows < 2 ? 50 : 20 + (row / (rows - 1)) * 60];
        avatar.style.setProperty("--avatar-x", `${position[0]}%`);
        avatar.style.setProperty("--avatar-y", `${position[1]}%`);
        avatar.dataset.cardAvatarIndex = String(userIndex);
        avatar.setAttribute("aria-label", `Select ${user.name} profile`);
        avatar.setAttribute("aria-pressed", String(userIndex === selectedIndex));
        if (user.photo) {
          const image = document.createElement("img");
          image.src = user.photo;
          image.alt = "";
          image.loading = "lazy";
          image.onerror = () => {
            const placeholder = document.createElement("i");
            placeholder.className = "fa-regular fa-user";
            placeholder.setAttribute("aria-hidden", "true");
            avatar.replaceChildren(placeholder);
          };
          avatar.append(image);
        } else {
          const placeholder = document.createElement("i");
          placeholder.className = "fa-regular fa-user";
          placeholder.setAttribute("aria-hidden", "true");
          avatar.append(placeholder);
        }
        avatarList.append(avatar);
      });
    };

    const renderCardProfile = (fandomIndex, animate = false) => {
      const collaborator = fandomCollaborators[fandomIndex];
      const users = getUsers(collaborator);
      const user = users[cardUserIndices[fandomIndex]];
      const card = cardNodes[fandomIndex];
      if (!user || !card) return;
      const update = () => {
        card.querySelector("[data-fandom-user-name]").textContent = user.name;
        card.querySelector("[data-fandom-username]").textContent = user.username;
        card.querySelector("[data-card-user-index]").textContent = `${String(cardUserIndices[fandomIndex] + 1).padStart(2, "0")} / ${String(users.length).padStart(2, "0")}`;
        const openButton = card.querySelector("[data-open-fandom-profile]");
        openButton.dataset.fandomIndex = String(fandomIndex);
        openButton.dataset.userIndex = String(cardUserIndices[fandomIndex]);
        renderCardAvatars(card, users, cardUserIndices[fandomIndex]);
      };
      card.querySelector("[data-fandom-profile-controls]").hidden = users.length < 2;
      if (!animate) { update(); return; }
      card.classList.remove("is-user-entering", "is-user-switching");
      void card.offsetWidth;
      card.classList.add("is-user-switching");
      window.setTimeout(() => {
        update();
        card.classList.remove("is-user-switching");
        card.classList.add("is-user-entering");
        window.setTimeout(() => card.classList.remove("is-user-entering"), 520);
      }, 130);
    };

    fandomCollaborators.forEach((collaborator, index) => {
      const card = template.content.firstElementChild.cloneNode(true);
      card.dataset.fandomIndex = String(index);
      card.dataset.fandomTheme = collaborator.shortName.toLowerCase().replace(/\s+/g, "-");
      card.style.setProperty("--fandom-accent", collaborator.accent || "#8bdfff");
      card.querySelector("[data-fandom-background]").src = collaborator.background;
      card.querySelector("[data-fandom-background]").style.objectPosition = collaborator.backgroundPosition || "center 45%";
      card.querySelector("[data-fandom-background]").alt = "";
      card.querySelector("[data-fandom-name]").textContent = collaborator.fandom;
      card.querySelector("[data-fandom-logo]").src = collaborator.filmLogo;
      card.querySelector("[data-fandom-logo]").alt = collaborator.fandom;
      card.querySelector("[data-fandom-index]").textContent = `0${index + 1} / 03`;
      cardNodes[index] = card;
      renderCardProfile(index);
      list.append(card);
    });

    const closeButton = dialog.querySelector("[data-close-fandom-profile]");
    const fullscreenPhoto = dialog.querySelector("[data-profile-photo-fullscreen]");
    const fullscreenGrid = dialog.querySelector(".fandom-profile-dialog__grid");
    let activeFandomIndex = 0;
    let activeUserIndex = 0;
    let fullscreenTimer;
    const paintFullscreenUser = () => {
      const collaborator = fandomCollaborators[activeFandomIndex];
      const users = getUsers(collaborator);
      const user = users[activeUserIndex];
      if (!user) return;
      dialog.querySelector("[data-profile-name]").textContent = user.name;
      dialog.querySelector("[data-profile-username]").textContent = user.username;
      dialog.querySelector("[data-profile-paragraph]").textContent = user.paragraph;
      setAvatar(fullscreenPhoto, dialog.querySelector("[data-profile-avatar-placeholder-fullscreen]"), user.photo, user.name);
      const socialList = dialog.querySelector("[data-profile-social-links]");
      const socialNote = dialog.querySelector("[data-profile-social-note]");
      const socialLinks = Array.isArray(user.socialLink)
        ? user.socialLink
        : typeof user.socialLink === "string" && user.socialLink.trim()
          ? [{ name: "Social profile", url: user.socialLink, icon: "fa-arrow-up-right-from-square", iconStyle: "solid" }]
          : [];
      socialList.replaceChildren();
      socialLinks.forEach((profile) => {
        const href = typeof profile?.url === "string" ? profile.url.trim() : "";
        if (!/^https?:\/\//i.test(href)) return;
        const platform = typeof profile.name === "string" && profile.name.trim() ? profile.name.trim() : "Social profile";
        const iconName = typeof profile.icon === "string" && /^fa-[a-z0-9-]+$/i.test(profile.icon) ? profile.icon : "fa-arrow-up-right-from-square";
        const iconStyle = profile.iconStyle === "solid" || iconName === "fa-arrow-up-right-from-square" ? "fa-solid" : "fa-brands";
        const link = document.createElement("a");
        link.className = "fandom-profile-dialog__social-link";
        link.href = href;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.setAttribute("aria-label", `Visit ${platform} profile for ${user.name}`);
        const icon = document.createElement("i");
        icon.classList.add(iconStyle, iconName);
        icon.setAttribute("aria-hidden", "true");
        const label = document.createElement("span");
        label.textContent = platform;
        link.append(icon, label);
        socialList.append(link);
      });
      socialList.hidden = socialList.childElementCount === 0;
      socialNote.hidden = !socialList.hidden;
      const controls = dialog.querySelector("[data-dialog-profile-controls]");
      controls.hidden = users.length < 2;
      dialog.querySelector("[data-dialog-user-index]").textContent = `${String(activeUserIndex + 1).padStart(2, "0")} / ${String(users.length).padStart(2, "0")}`;
    };
    const switchFullscreenUser = (direction) => {
      const users = getUsers(fandomCollaborators[activeFandomIndex]);
      if (users.length < 2) return;
      activeUserIndex = (activeUserIndex + direction + users.length) % users.length;
      window.clearTimeout(fullscreenTimer);
      fullscreenGrid.classList.remove("is-user-entering", "is-user-switching");
      void fullscreenGrid.offsetWidth;
      fullscreenGrid.classList.add("is-user-switching");
      fullscreenTimer = window.setTimeout(() => {
        paintFullscreenUser();
        fullscreenGrid.classList.remove("is-user-switching");
        fullscreenGrid.classList.add("is-user-entering");
        fullscreenTimer = window.setTimeout(() => fullscreenGrid.classList.remove("is-user-entering"), 520);
      }, 140);
    };
    const openProfile = (fandomIndex, userIndex, trigger) => {
      const collaborator = fandomCollaborators[fandomIndex];
      const user = getUsers(collaborator)[userIndex];
      if (!collaborator || !user) return;
      const rect = trigger.getBoundingClientRect();
      dialog.style.setProperty("--profile-origin-x", `${rect.left + rect.width / 2}px`);
      dialog.style.setProperty("--profile-origin-y", `${rect.top + rect.height / 2}px`);
      const profileBackground = dialog.querySelector("[data-profile-background]");
      profileBackground.src = collaborator.background;
      profileBackground.style.objectPosition = collaborator.backgroundPosition || "center 45%";
      dialog.querySelector("[data-profile-fandom]").textContent = collaborator.fandom;
      activeFandomIndex = fandomIndex;
      activeUserIndex = userIndex;
      paintFullscreenUser();
      dialog.classList.remove("is-opening", "is-closing");
      dialog.showModal();
      dialog.classList.add("is-opening");
    };

    list.addEventListener("click", (event) => {
      const avatar = event.target.closest("[data-card-avatar-index]");
      if (avatar) {
        const fandomIndex = Number(avatar.closest("[data-fandom-index]").dataset.fandomIndex);
        cardUserIndices[fandomIndex] = Number(avatar.dataset.cardAvatarIndex);
        renderCardProfile(fandomIndex, true);
        return;
      }
      const stepButton = event.target.closest("[data-card-user-step]");
      if (stepButton) {
        const fandomIndex = Number(stepButton.closest("[data-fandom-index]").dataset.fandomIndex);
        const users = getUsers(fandomCollaborators[fandomIndex]);
        cardUserIndices[fandomIndex] = (cardUserIndices[fandomIndex] + Number(stepButton.dataset.cardUserStep) + users.length) % users.length;
        renderCardProfile(fandomIndex, true);
        return;
      }
      const button = event.target.closest("[data-open-fandom-profile]");
      if (button) openProfile(Number(button.dataset.fandomIndex), Number(button.dataset.userIndex), button);
    });
    const finishClose = () => {
      if (!dialog.open || dialog.classList.contains("is-closing")) return;
      dialog.classList.remove("is-opening");
      dialog.classList.add("is-closing");
      window.setTimeout(() => {
        if (dialog.open) dialog.close();
        dialog.classList.remove("is-closing");
      }, 520);
    };
    closeButton.addEventListener("click", finishClose);
    dialog.querySelectorAll("[data-dialog-user-step]").forEach((button) => button.addEventListener("click", () => switchFullscreenUser(Number(button.dataset.dialogUserStep))));
    dialog.addEventListener("cancel", (event) => { event.preventDefault(); finishClose(); });
    dialog.addEventListener("click", (event) => { if (event.target === dialog) finishClose(); });
    dialog.addEventListener("close", () => dialog.classList.remove("is-opening", "is-closing"));
  }

  function setup() {
    const isMaintenancePage = document.body.classList.contains("page-maintenance") || location.pathname.toLowerCase().endsWith("/maintenance.html");
    if (MAINTENANCE_MODE && !isMaintenancePage) {
      location.replace("maintenance.html");
      return;
    }
    mountSharedRegions();
    setupLocalClock();
    setupNavigation();
    setupPageTransition();
    setupIntro();
    setupCookieNotice();
    setupBackToTop();
    setupStoryDeck();
    setupRotatingHeading();
    setupContentShowcase();
    setupContactForm();
    setupSocialHub();
    setupPosterLightbox();
    setupEventsCountdown();
    setupPosters();
    setupTimeline();
    setupFandomCollaboration();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", setup, { once: true });
  else setup();
})();

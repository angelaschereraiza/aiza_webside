'use strict';

const SUPPORTED_LANGS = ['de', 'en'];

const I18N = {
  de: {
    skip: 'Zum Inhalt springen',
    nav: { services: 'Services', stack: 'Technologien', about: 'Über uns', contact: 'Kontakt' },
    theme: { dark: 'Dark', light: 'Light' },

    hero: {
      kicker: 'Aiza GmbH · Zollikofen (Bern)',
      title: 'Consulting, Architektur & Software Development',
      lead:
        'Wir entwickeln massgeschneiderte Webapplikationen und Cloud-/Kubernetes-Lösungen für Unternehmen und Institutionen – modern, robust und wartbar.',
      ctaPrimary: 'Kontakt aufnehmen',
      ctaSecondary: 'Services ansehen',
      cardTitle: 'Schwerpunkte',
      b1: 'Architektur & Umsetzung von Web- und Cloud-Lösungen',
      b2: 'Kubernetes Setup, Betrieb, Upgrades',
      b3: 'Bugfixing & Stabilisierung bestehender Systeme',
      b4: 'LLM Infrastruktur & Data Training (Use-Case-orientiert)',
      note: 'Open-Source-first · Quality-focused · Pragmatic delivery'
    },

    services: {
      title: 'Services',
      subtitle: 'Klar definierte Leistungen – vom Konzept bis zum produktiven Betrieb.',
      s1: {
        title: 'Consulting, Architektur & Entwicklung',
        text: 'Golang, C#, Python und JavaScript – pragmatisch, testbar, dokumentiert.',
        b1: 'Systemdesign & API-Schnittstellen',
        b2: 'Code Reviews & Quality Gates',
        b3: 'Modernisierung bestehender Anwendungen'
      },
      s2: {
        title: 'Bug Fixing & Stabilisierung',
        text: 'Gezielte Analyse, reproduzierbare Fixes und nachhaltige Verbesserungen.',
        b1: 'Debugging & Root-Cause Analysis',
        b2: 'Performance & Memory Profiling',
        b3: 'Testabdeckung & Regression Prevention'
      },
      s3: {
        title: 'Kubernetes Setup & Updates',
        text: 'Von der ersten Cluster-Einführung bis zu sicheren Upgrades.',
        b1: 'Cluster Setup (Cloud/On-Prem)',
        b2: 'Upgrades, Hardening, Observability',
        b3: 'CI/CD & GitOps Patterns'
      },
      s4: {
        title: 'LLM Infrastruktur & Data Training',
        text: 'Aufbau von Infrastruktur und Datenpipelines für LLM-Use-Cases.',
        b1: 'Deployment Patterns & Monitoring',
        b2: 'Data Pipelines & Governance',
        b3: 'Evaluierung & Qualitätssicherung'
      },
      s5: {
        title: 'Workshops & Training',
        text: 'Kubernetes Grundlagen sowie CRDs/Operatoren – hands-on mit Best Practices.',
        b1: 'Kubernetes Basics & Operations',
        b2: 'CRDs & Operator Development (Golang)',
        b3: 'Real-world Übungen & Templates'
      },
      s6: {
        title: 'Zusammenarbeit',
        text: 'Kurzfristige Unterstützung oder langfristige Partnerschaft – transparent und zielorientiert.',
        p1: 'Remote / On-Site (CH)',
        p2: 'Projekt / Consulting',
        p3: 'Start small, scale fast'
      }
    },

    stack: {
      title: 'Technologien',
      subtitle: 'Ein stabiler Stack für moderne, sichere und wartbare Lösungen.',
      languages: 'Languages',
      frontend: 'Frontend',
      cloud: 'Cloud & Platform',
      principles: 'Prinzipien',
      p1: 'Security & Reliability by design',
      p2: 'Observability & clean operations',
      p3: 'Documentation & knowledge transfer'
    },

    about: {
      title: 'Über uns',
      text1:
        'Aiza GmbH mit Sitz in Zollikofen bei Bern entwickelt massgeschneiderte, moderne Webapplikationen und Plattform-Lösungen auf Basis von Open Source.',
      text2:
        'Fokus: robuste Architektur, saubere Umsetzung und nachhaltiger Betrieb – damit Systeme langfristig stabil bleiben.',
      role: 'Founder & CEO',
      edu: 'Bachelor of Science in Informatik',
      certs: 'Zertifizierungen',
      links: 'Links'
    },

    contact: {
      title: 'Kontakt',
      subtitle: 'Haben wir Ihr Interesse geweckt? Schreiben Sie uns oder rufen Sie an.',
      companyLinks: 'Unternehmens-Links',
      note: 'Auf Wunsch: Referenzen/Projekte gerne im persönlichen Gespräch.',
      quickStart: 'Quick Start',
      step1: 'Kurzbeschrieb (Ziel, Kontext, Deadline)',
      step2: 'Technischer Check & Vorschlag (Scope/Optionen)',
      step3: 'Umsetzung mit klaren Deliverables',
      mailCta: 'E-Mail senden'
    },

    footer: {
      imprint: 'Impressum',
      privacy: 'Datenschutzerklärung'
    },

    legal: {
      imprintTitle: 'Impressum',
      privacyTitle: 'Datenschutzerklärung',
      imprint_html: `
        <h3>Unternehmen</h3>
        <p>
          Aiza GmbH<br>
          Bernstrasse 159<br>
          3052 Zollikofen<br>
          Schweiz
        </p>

        <h3>Kontakt</h3>
        <p>
          E-Mail: <a href="mailto:angela.scherer@aiza.ch">angela.scherer@aiza.ch</a><br>
          Telefon: <a href="tel:+41791972153">+41 79 197 21 53</a>
        </p>

        <h3>Handelsregister</h3>
        <p>
          Eingetragen im Handelsregister des Kantons Bern.<br>
          UID: CHE-358.617.722
        </p>

        <h3>Haftungsausschluss</h3>
        <p>
          Die Aiza GmbH übernimmt keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte.
          Haftungsansprüche gegen die Aiza GmbH wegen Schäden materieller oder immaterieller Art, welche aus dem Zugriff
          oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen entstanden sind, werden ausgeschlossen.
        </p>

        <h3>Externe Links</h3>
        <p>
          Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres Verantwortungsbereichs.
          Für Inhalte und Rechtmässigkeit solcher Webseiten wird jegliche Verantwortung abgelehnt.
        </p>
      `,
      privacy_html: `
        <h3>Allgemeines</h3>
        <p>
          Gestützt auf Art. 13 der Schweizer Bundesverfassung und die datenschutzrechtlichen Bestimmungen des Bundes (DSG)
          hat jede Person Anspruch auf Schutz ihrer Privatsphäre sowie auf Schutz vor Missbrauch ihrer persönlichen Daten.
        </p>

        <h3>Server-Logfiles</h3>
        <p>
          Beim Aufruf dieser Website können technisch bedingt Daten (z.B. IP-Adresse, Datum/Uhrzeit, aufgerufene Seite, User-Agent)
          in Server-Logfiles verarbeitet werden. Diese Daten dienen ausschliesslich der Sicherstellung des Betriebs und der Sicherheit.
        </p>

        <h3>Kontaktaufnahme</h3>
        <p>
          Wenn Sie uns per E-Mail kontaktieren, verarbeiten wir die von Ihnen übermittelten Angaben zur Bearbeitung Ihrer Anfrage.
        </p>

        <h3>Externe Links / Social Media</h3>
        <p>
          Diese Website enthält Links zu externen Anbietern (z.B. LinkedIn, Xing). Für die Datenbearbeitung nach dem Anklicken des Links
          ist der jeweilige Anbieter verantwortlich.
        </p>
      `
    }
  },

  en: {
    skip: 'Skip to content',
    nav: { services: 'Services', stack: 'Technologies', about: 'About', contact: 'Contact' },
    theme: { dark: 'Dark', light: 'Light' },

    hero: {
      kicker: 'Aiza GmbH · Zollikofen (Bern)',
      title: 'Consulting, Architecture & Software Development',
      lead:
        'We build tailored web applications and cloud/Kubernetes solutions for companies and institutions — modern, robust, and maintainable.',
      ctaPrimary: 'Get in touch',
      ctaSecondary: 'View services',
      cardTitle: 'Focus areas',
      b1: 'Architecture & delivery of web and cloud solutions',
      b2: 'Kubernetes setup, operations and upgrades',
      b3: 'Bug fixing and stabilization of existing systems',
      b4: 'LLM infrastructure setup & data training (use-case driven)',
      note: 'Open-source first · Quality-focused · Pragmatic delivery'
    },

    services: {
      title: 'Services',
      subtitle: 'Clear offerings — from concept to production operations.',
      s1: {
        title: 'Consulting, Architecture & Development',
        text: 'Golang, C#, Python and JavaScript — pragmatic, testable, documented.',
        b1: 'System design & API interfaces',
        b2: 'Code reviews & quality gates',
        b3: 'Modernization of existing applications'
      },
      s2: {
        title: 'Bug Fixing & Stabilization',
        text: 'Targeted analysis, reproducible fixes, and sustainable improvements.',
        b1: 'Debugging & root-cause analysis',
        b2: 'Performance & memory profiling',
        b3: 'Test coverage & regression prevention'
      },
      s3: {
        title: 'Kubernetes Setup & Updates',
        text: 'From first cluster introduction to safe upgrades.',
        b1: 'Cluster setup (cloud/on-prem)',
        b2: 'Upgrades, hardening, observability',
        b3: 'CI/CD & GitOps patterns'
      },
      s4: {
        title: 'LLM Infrastructure & Data Training',
        text: 'Infrastructure and data pipelines for LLM use cases.',
        b1: 'Deployment patterns & monitoring',
        b2: 'Data pipelines & governance',
        b3: 'Evaluation & quality assurance'
      },
      s5: {
        title: 'Workshops & Training',
        text: 'Kubernetes fundamentals and CRDs/operators — hands-on best practices.',
        b1: 'Kubernetes basics & operations',
        b2: 'CRDs & operator development (Golang)',
        b3: 'Real-world exercises & templates'
      },
      s6: {
        title: 'Working together',
        text: 'Short-term support or long-term partnership — transparent and outcome-driven.',
        p1: 'Remote / On-site (CH)',
        p2: 'Project / Consulting',
        p3: 'Start small, scale fast'
      }
    },

    stack: {
      title: 'Technologies',
      subtitle: 'A stable stack for modern, secure, and maintainable solutions.',
      languages: 'Languages',
      frontend: 'Frontend',
      cloud: 'Cloud & Platform',
      principles: 'Principles',
      p1: 'Security & reliability by design',
      p2: 'Observability & clean operations',
      p3: 'Documentation & knowledge transfer'
    },

    about: {
      title: 'About Aiza',
      text1:
        'Aiza GmbH, based in Zollikofen near Bern, delivers tailored modern web applications and platform solutions built on open-source foundations.',
      text2:
        'Focus: robust architecture, clean implementation and sustainable operations — so systems remain stable long-term.',
      role: 'Founder & CEO',
      edu: 'Bachelor of Science in Computer Science',
      certs: 'Certifications',
      links: 'Links'
    },

    contact: {
      title: 'Contact',
      subtitle: 'Interested in working together? Send an email or give us a call.',
      companyLinks: 'Company links',
      note: 'References/projects available on request — happy to discuss.',
      quickStart: 'Quick start',
      step1: 'Short brief (goal, context, deadline)',
      step2: 'Technical check & proposal (scope/options)',
      step3: 'Delivery with clear deliverables',
      mailCta: 'Send email'
    },

    footer: {
      imprint: 'Imprint',
      privacy: 'Privacy Policy'
    },

    legal: {
      imprintTitle: 'Imprint',
      privacyTitle: 'Privacy Policy',
      imprint_html: `
        <h3>Company</h3>
        <p>
          Aiza GmbH<br>
          Bernstrasse 159<br>
          3052 Zollikofen<br>
          Switzerland
        </p>

        <h3>Contact</h3>
        <p>
          Email: <a href="mailto:angela.scherer@aiza.ch">angela.scherer@aiza.ch</a><br>
          Phone: <a href="tel:+41791972153">+41 79 197 21 53</a>
        </p>

        <h3>Commercial Register</h3>
        <p>
          Registered in the Commercial Register of the Canton of Bern.<br>
          UID: CHE-358.617.722
        </p>

        <h3>Disclaimer</h3>
        <p>
          Aiza GmbH provides this website without any guarantee as to the accuracy, completeness, or timeliness of the content.
          Any liability for damages arising from accessing or using the website is excluded to the extent permitted by law.
        </p>

        <h3>External links</h3>
        <p>
          Links to third-party websites are outside our responsibility. We assume no liability for their content and legality.
        </p>
      `,
      privacy_html: `
        <h3>General</h3>
        <p>
          Based on Article 13 of the Swiss Federal Constitution and the Swiss data protection provisions (FADP/DSG),
          every person has the right to privacy and protection against misuse of personal data.
        </p>

        <h3>Server logs</h3>
        <p>
          For technical reasons, data (e.g., IP address, date/time, requested page, user-agent) may be processed in server logs
          to ensure secure operation and system integrity.
        </p>

        <h3>Contact</h3>
        <p>
          If you contact us by email, we process the data you provide solely to handle your inquiry.
        </p>

        <h3>External links / Social media</h3>
        <p>
          This website contains links to external providers (e.g., LinkedIn, Xing). After clicking a link, the respective provider
          is responsible for data processing.
        </p>
      `
    }
  }
};

let currentLang = 'en';

function detectInitialLang() {
  const stored = localStorage.getItem('language');
  if (stored && SUPPORTED_LANGS.includes(stored)) return stored;
  const browser = (navigator.language || 'en').slice(0,2);
  return SUPPORTED_LANGS.includes(browser) ? browser : 'en';
}

function detectInitialTheme() {
  const stored = localStorage.getItem('theme');
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);

  const isDark = theme === 'dark';
  const iconEls = document.querySelectorAll('.mode-icon');
  const textEls = document.querySelectorAll('.mode-text');

  iconEls.forEach(el => el.textContent = isDark ? '☾' : '☀');
  textEls.forEach(el => el.textContent = isDark ? I18N[currentLang].theme.dark : I18N[currentLang].theme.light);

  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme) metaTheme.setAttribute('content', isDark ? '#0b1020' : '#f7f8fc');
}

function setLanguage(lang) {
  if (!I18N[lang]) lang = 'en';
  currentLang = lang;

  localStorage.setItem('language', lang);
  document.documentElement.setAttribute('lang', lang);

  // Update all elements with data-i18n="path.to.key"
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const value = key.split('.').reduce((acc, part) => (acc ? acc[part] : undefined), I18N[lang]);
    if (typeof value === 'string') el.textContent = value;
  });

  // Update pressed state for all language buttons (desktop + mobile)
  document.querySelectorAll('.seg-btn[data-lang]').forEach(btn => {
    const pressed = btn.dataset.lang === lang;
    btn.setAttribute('aria-pressed', String(pressed));
  });

  // Ensure theme toggle text reflects current language
  const theme = document.documentElement.getAttribute('data-theme') || 'dark';
  setTheme(theme);
}

function setupMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const menu = document.getElementById('mobileMenu');
  if (!hamburger || !menu) return;

  const open = () => {
    menu.hidden = false;
    menu.setAttribute('aria-hidden', 'false');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    menu.querySelector('a')?.focus();
  };

  const close = () => {
    menu.setAttribute('aria-hidden', 'true');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    setTimeout(() => { menu.hidden = true; }, 120);
  };

  hamburger.addEventListener('click', () => {
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    expanded ? close() : open();
  });

  // Close after clicking a link
  menu.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', () => close());
  });

  // Close on Escape (menu only)
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') close();
  });

  // Close if user clicks outside mobile menu area (optional minimal)
  document.addEventListener('click', e => {
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    if (!expanded) return;
    if (menu.contains(e.target) || hamburger.contains(e.target)) return;
    close();
  });
}

function setupLegalModal() {
  const modal = document.getElementById('legal-modal');
  const title = document.getElementById('modal-title');
  const content = document.getElementById('modal-content');
  const links = document.querySelectorAll('.footer-link[data-doc]');
  if (!modal || !title || !content || !links.length) return;

  const open = (docKey) => {
    const t = I18N[currentLang]?.legal || I18N.en.legal;

    if (docKey === 'imprint') {
      title.textContent = t.imprintTitle;
      content.innerHTML = t.imprint_html;
    } else if (docKey === 'privacy') {
      title.textContent = t.privacyTitle;
      content.innerHTML = t.privacy_html;
    }

    modal.hidden = false;
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const close = () => {
    modal.hidden = true;
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      open(link.dataset.doc);
    });
  });

  modal.addEventListener('click', e => {
    if (e.target?.dataset?.close === 'true') close();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !modal.hidden) close();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Year
  const y = document.getElementById('year');
  if (y) y.textContent = String(new Date().getFullYear());

  // initial state
  currentLang = detectInitialLang();
  const theme = detectInitialTheme();

  setLanguage(currentLang);
  setTheme(theme);

  // Language buttons (desktop + mobile)
  document.querySelectorAll('.seg-btn[data-lang]').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });

  // Theme toggles (desktop + mobile)
  const desktopToggle = document.getElementById('modeToggle');
  const toggles = [desktopToggle, ...document.querySelectorAll('[data-mode-toggle]')].filter(Boolean);

  toggles.forEach(t => {
    t.addEventListener('click', () => {
      const curr = document.documentElement.getAttribute('data-theme') || 'dark';
      setTheme(curr === 'dark' ? 'light' : 'dark');
    });
  });

  setupMobileMenu();
  setupLegalModal();

  // Smooth scroll with header offset (small polish)
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();

      const header = document.querySelector('.site-header');
      const offset = header ? header.offsetHeight + 16 : 90;

      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
});

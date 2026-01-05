'use strict';

const SUPPORTED_LANGS = ['de', 'en'];

const I18N = {
  de: {
    skip: 'Zum Inhalt springen',
    nav: { services: 'Services', stack: 'Technologien', about: 'Über uns', contact: 'Kontakt' },
    theme: { dark: 'Dark', light: 'Light' },
    hero: {
      title: 'Consulting, Architektur und Software Development',
      lead: 'Wir entwickeln massgeschneiderte Webapplikationen sowie Cloud und Kubernetes Lösungen für Unternehmen und Institutionen auf Basis von Open-Source-Software.',
      ctaPrimary: 'Kontakt aufnehmen',
      ctaSecondary: 'Services ansehen',
      cardTitle: 'Schwerpunkte',
      b1: 'Architektur und Umsetzung von Web und Cloud Lösungen',
      b2: 'Kubernetes Setup, Betrieb und Upgrades',
      b3: 'Bugfixing und Stabilisierung bestehender Systeme',
      b4: 'LLM Infrastruktur und Data Training, use case orientiert',
    },
    services: {
      title: 'Services',
      subtitle: 'Klar definierte Leistungen, vom Konzept bis zum produktiven Betrieb.',
      s1: {
        title: 'Consulting, Architektur und Entwicklung',
        text: 'Golang, C#, Python, JavaScript und TypeScript. Pragmatic, testbar und dokumentiert.',
        b1: 'Systemdesign und API Schnittstellen',
        b2: 'Code Reviews und Quality Gates',
        b3: 'Modernisierung bestehender Anwendungen'
      },
      s2: {
        title: 'Bug Fixing und Stabilisierung',
        text: 'Gezielte Analyse, reproduzierbare Fixes und Verbesserungen, die bleiben.',
        b1: 'Debugging und Root Cause Analysis',
        b2: 'Performance und Memory Profiling',
        b3: 'Testabdeckung und Regression Prevention'
      },
      s3: {
        title: 'Kubernetes Setup und Updates',
        text: 'Von der ersten Cluster Einführung bis zu sicheren Upgrades.',
        b1: 'Cluster Setup, Cloud oder On Prem',
        b2: 'Upgrades, Hardening und Observability',
        b3: 'CI CD und GitOps Patterns'
      },
      s4: {
        title: 'LLM Infrastruktur und Data Training',
        text: 'Aufbau von Infrastruktur und Datenpipelines für LLM Use Cases.',
        b1: 'Deployment Patterns und Monitoring',
        b2: 'Data Pipelines und Governance',
        b3: 'Evaluierung und Qualitätssicherung'
      },
      s5: {
        title: 'Workshops und Training',
        text: 'Golang, Kubernetes Grundlagen sowie CRDs und Operatoren, hands on mit Best Practices.',
        b1: 'Golang',
        b2: 'Kubernetes Basics',
        b3: 'CRDs und Operator Development in Golang'
      },
      s6: {
        title: 'Zusammenarbeit',
        text: 'Kurzfristige Unterstützung oder langfristige Partnerschaft. Transparent und zielorientiert.',
        p1: 'Remote / On-Site (CH)',
        p2: 'Projekt / Consulting',
      }
    },
    stack: {
      title: 'Technologien',
      subtitle: 'Ein stabiler Stack für moderne, sichere und wartbare Lösungen.',
      languages: 'Languages',
      frontend: 'Frontend',
      cloud: 'Cloud und Platform',
      principles: 'Prinzipien',
      p1: 'Security und Reliability by design',
      p2: 'Observability und saubere Operations',
      p3: 'Dokumentation und Wissenstransfer'
    },
    about: {
      title: 'Über uns',
      text1: 'Aiza GmbH mit Sitz in Zollikofen bei Bern entwickelt massgeschneiderte, moderne Webapplikationen und Plattformlösungen. Wir bieten Beratung sowie Entwicklung, Implementierung und Schulung rund um Softwarelösungen. Dazu gehört auch der Aufbau und das Training unternehmensinterner AI Systeme auf Basis firmeneigener Daten. Unsere Arbeit basiert auf Open Source Technologien und richtet sich an Unternehmen und Institutionen.',
      text2: 'Der Fokus liegt auf robuster Architektur, sauberer Umsetzung und einem nachhaltigen Betrieb, damit Systeme langfristig stabil, sicher und wartbar bleiben.',
      role: 'Founder & CEO',
      edu: 'Bachelor of Science in Informatik',
      certs: 'Zertifizierungen',
      links: 'Links'
    },
    contact: {
      title: 'Kontakt',
      subtitle: 'Haben wir Ihr Interesse geweckt? Schreiben Sie uns oder rufen Sie an.',
      address: 'Adresse',
      mail: 'E-Mail, Telefon & Links',
      note: 'Referenzen und Projekte gerne im persönlichen Gespräch.',
      quickStart: 'Quick Start',
      step1: 'Kurzbeschrieb mit Ziel, Kontext und Deadline',
      step2: 'Technischer Check und Vorschlag mit Scope und Optionen',
      step3: 'Umsetzung mit klaren Deliverables',
      mailCta: 'E Mail senden'
    },
    footer: { imprint: 'Impressum', privacy: 'Datenschutzerklärung' },
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
          E Mail: <a href="mailto:angela.scherer@aiza.ch">angela.scherer@aiza.ch</a><br>
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
          oder der Nutzung beziehungsweise Nichtnutzung der veröffentlichten Informationen entstanden sind, werden ausgeschlossen.
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

        <h3>Server Logfiles</h3>
        <p>
          Beim Aufruf dieser Website können technisch bedingt Daten (zum Beispiel IP Adresse, Datum und Uhrzeit, aufgerufene Seite, User Agent)
          in Server Logfiles verarbeitet werden. Diese Daten dienen ausschliesslich der Sicherstellung des Betriebs und der Sicherheit.
        </p>

        <h3>Kontaktaufnahme</h3>
        <p>
          Wenn Sie uns per E Mail kontaktieren, verarbeiten wir die von Ihnen übermittelten Angaben zur Bearbeitung Ihrer Anfrage.
        </p>

        <h3>Externe Links und Social Media</h3>
        <p>
          Diese Website enthält Links zu externen Anbietern (zum Beispiel LinkedIn, Xing). Für die Datenbearbeitung nach dem Anklicken des Links
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
      title: 'Consulting, Architecture and Software Development',
      lead: 'We build tailored web applications and cloud and Kubernetes solutions for companies and institutions based on open source software.',
      ctaPrimary: 'Get in touch',
      ctaSecondary: 'View services',
      cardTitle: 'Focus areas',
      b1: 'Architecture and delivery of web and cloud solutions',
      b2: 'Kubernetes setup, operations and upgrades',
      b3: 'Bug fixing and stabilization of existing systems',
      b4: 'LLM infrastructure setup and data training, use case driven',
    },
    services: {
      title: 'Services',
      subtitle: 'Clear services, from concept to operations.',
      s1: {
        title: 'Consulting, Architecture and Development',
        text: 'Golang, C#, Python, JavaScript und TypeScript. Pragmatic, testable, documented.',
        b1: 'System design and API interfaces',
        b2: 'Code reviews and quality gates',
        b3: 'Modernization of existing applications'
      },
      s2: {
        title: 'Bug Fixing and Stabilization',
        text: 'Focused analysis, reproducible fixes, and improvements that last.',
        b1: 'Debugging and root cause analysis',
        b2: 'Performance and memory profiling',
        b3: 'Test coverage and regression prevention'
      },
      s3: {
        title: 'Kubernetes Setup and Updates',
        text: 'From first cluster introduction to safe upgrades.',
        b1: 'Cluster setup, cloud or on prem',
        b2: 'Upgrades, hardening and observability',
        b3: 'CI CD and GitOps patterns'
      },
      s4: {
        title: 'LLM Infrastructure and Data Training',
        text: 'Infrastructure and data pipelines for LLM use cases.',
        b1: 'Deployment patterns and monitoring',
        b2: 'Data pipelines and governance',
        b3: 'Evaluation and quality assurance'
      },
      s5: {
        title: 'Workshops and Training',
        text: 'Kubernetes fundamentals and CRDs and operators, hands on with best practices.',
        b1: 'Kubernetes basics and operations',
        b2: 'CRDs and operator development, Golang',
        b3: 'Real world exercises and templates'
      },
      s6: {
        title: 'Working together',
        text: 'Short term support or long term partnership. Transparent and outcome driven.',
        p1: 'Remote / On-site (CH)',
        p2: 'Project / Consulting',
      }
    },
    stack: {
      title: 'Technologies',
      subtitle: 'A stable stack for modern, secure, and maintainable solutions.',
      languages: 'Languages',
      frontend: 'Frontend',
      cloud: 'Cloud and Platform',
      principles: 'Principles',
      p1: 'Security and reliability by design',
      p2: 'Observability and clean operations',
      p3: 'Documentation and knowledge transfer'
    },
    about: {
      title: 'About us',
      text1: 'Aiza GmbH, based in Zollikofen near Bern, develops tailored modern web applications and platform solutions. We offer consulting as well as software development, implementation, and training. This also includes setting up and training internal AI systems using company specific data. Our work is based on open source technologies and serves companies and institutions.',
      text2: 'The focus is on robust architecture, clean implementation, and sustainable operations to ensure systems remain stable, secure, and maintainable over time.',
      role: 'Founder & CEO',
      edu: 'Bachelor of Science in Computer Science',
      certs: 'Certifications',
      links: 'Links'
    },
    contact: {
      title: 'Contact',
      subtitle: 'Interested in working together? Send an email or give us a call.',
      address: 'Address',
      mail: 'Email, Telephone & Links',
      note: 'References and projects are available on request.',
      quickStart: 'Quick start',
      step1: 'Short brief with goal, context and deadline',
      step2: 'Technical check and proposal with scope and options',
      step3: 'Delivery with clear deliverables',
      mailCta: 'Send email'
    },
    footer: { imprint: 'Imprint', privacy: 'Privacy Policy' },
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
          Links to third party websites are outside our responsibility. We assume no liability for their content and legality.
        </p>
      `,
      privacy_html: `
        <h3>General</h3>
        <p>
          Based on Article 13 of the Swiss Federal Constitution and the Swiss data protection provisions (FADP, DSG),
          every person has the right to privacy and protection against misuse of personal data.
        </p>

        <h3>Server logs</h3>
        <p>
          For technical reasons, data (for example IP address, date and time, requested page, user agent)
          may be processed in server logs to ensure secure operation and system integrity.
        </p>

        <h3>Contact</h3>
        <p>
          If you contact us by email, we process the data you provide solely to handle your inquiry.
        </p>

        <h3>External links and social media</h3>
        <p>
          This website contains links to external providers (for example LinkedIn, Xing). After clicking a link,
          the respective provider is responsible for data processing.
        </p>
      `
    }
  }
};

let currentLang = 'en';

function detectInitialLang() {
  const stored = localStorage.getItem('language');
  if (stored && SUPPORTED_LANGS.includes(stored)) return stored;
  const browser = (navigator.language || 'en').slice(0, 2);
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
  document.querySelectorAll('.mode-icon').forEach(el => (el.textContent = isDark ? '☾' : '☀'));
  document.querySelectorAll('.mode-text').forEach(el => {
    el.textContent = isDark ? I18N[currentLang].theme.dark : I18N[currentLang].theme.light;
  });

  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme) metaTheme.setAttribute('content', isDark ? '#0b1020' : '#f7f8fc');
}

function setLanguage(lang) {
  if (!I18N[lang]) lang = 'en';
  currentLang = lang;
  localStorage.setItem('language', lang);
  document.documentElement.setAttribute('lang', lang);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const value = key.split('.').reduce((acc, part) => (acc ? acc[part] : undefined), I18N[lang]);
    if (typeof value === 'string') el.textContent = value;
  });

  document.querySelectorAll('.seg-btn[data-lang]').forEach(btn => {
    const pressed = btn.dataset.lang === lang;
    btn.setAttribute('aria-pressed', String(pressed));
  });

  const theme = document.documentElement.getAttribute('data-theme') || 'dark';
  setTheme(theme);
}

function setupMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const menu = document.getElementById('mobileMenu');
  if (!hamburger || !menu) return;

  const open = () => {
    menu.hidden = false;
    menu.setAttribute('aria-hidden', 'true'); // start state for transition
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';

    requestAnimationFrame(() => {
      menu.setAttribute('aria-hidden', 'false');
      menu.querySelector('a')?.focus();
    });
  };

  const close = () => {
    menu.setAttribute('aria-hidden', 'true');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';

    window.setTimeout(() => {
      menu.hidden = true;
    }, 380);
  };

  hamburger.addEventListener('click', () => {
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    expanded ? close() : open();
  });

  menu.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', () => close());
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') close();
  });

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
  const y = document.getElementById('year');
  if (y) y.textContent = String(new Date().getFullYear());

  currentLang = detectInitialLang();
  const theme = detectInitialTheme();
  setLanguage(currentLang);
  setTheme(theme);

  document.querySelectorAll('.seg-btn[data-lang]').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });

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

  // Smooth scroll with header offset
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      const header = document.querySelector('.site-header');
      const offset = header ? Math.ceil(header.getBoundingClientRect().height) -8 : 50;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
});

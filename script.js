'use strict';

const SUPPORTED_LANGS = ['de', 'en'];
const HTML_LANG = { de: 'de-DE', en: 'en-US' };

const I18N = {
  de: {
    nav: { services: 'Services', stack: 'Technologien', about: 'Über uns', contact: 'Kontakt' },
    theme: { dark: 'Dark', light: 'Light' },
    hero: {
      title: 'Consulting, Architektur und Softwareent\u00ADwicklung',
      lead: 'Wir entwickeln massgeschneiderte Webapplikationen sowie Cloud, Kubernetes und AI Lösungen für Unternehmen und Institutionen auf Basis von Open-Source-Software.',
      ctaPrimary: 'Kontakt aufnehmen',
      ctaSecondary: 'Services ansehen',
      cardTitle: 'Schwerpunkte',
      b1: 'Architektur und Umsetzung von Web und Cloud Lösungen',
      b2: 'Bugfixing und Stabilisierung bestehender Systeme',
      b3: 'Kubernetes: Setup, Betrieb, Upgrades sowie CRD-/Operator-Entwicklung und Bugfixing',
      b4: 'AI Infrastruktur und Data Training, use case orientiert',
    },
    process: {
      title: 'Wie wir arbeiten',
      subtitle: 'Ein pragmatischer, transparenter Ansatz mit klaren Ergebnissen.',
      cta: 'Kontakt aufnehmen',
      p1: {
        title: '1. Ziel klären',
        text: 'Wir klären Outcome, Rahmenbedingungen und Erfolgs\u00ADkriterien.',
        b1: 'Kurzbeschrieb & Kontext',
        b2: 'Risiken & Annahmen',
        b3: 'Definition of Done'
      },
      p2: {
        title: '2. Plan vorschlagen',
        text: 'Sie erhalten einen konkreten Vorschlag mit Scope, Optionen und transparenter Aufwands\u00ADschätzung.',
        b1: 'Architektur & Meilensteine',
        b2: 'Trade-offs erklärt',
        b3: 'Lieferplan'
      },
      p3: {
        title: '3. Liefern & betreiben',
        text: 'Wir liefern in kleinen Schritten und unterstützen bei Bedarf im Betrieb.',
        b1: 'Tests & Code Reviews',
        b2: 'Dokumentation',
        b3: 'Übergabe / Betriebssupport'
      }
    },
    services: {
      title: 'Services',
      subtitle: 'Klar definierte Leistungen, vom Konzept bis zum produktiven Betrieb.',
      s1: {
        title: 'Software Architektur & Engineering',
        text: 'Golang, C#, Python, JavaScript und TypeScript mit Fokus auf Qualität, Testbarkeit und nachvollziehbare Dokumentation.',
        b1: 'Systemdesign und API Schnittstellen',
        b2: 'Code Reviews und Quality Gates',
        b3: 'Modernisierung bestehender Anwendungen'
      },
      s2: {
        title: 'Bug Fixing und Stabilisierung',
        text: 'Gezielte Analyse, reproduzierbare Fixes und Verbesserungen, die bleiben.',
        b1: 'Debugging und Ursachen\u00ADanalyse',
        b2: 'Performance und Memory Profiling',
        b3: 'Testabdeckung und Regression Prevention'
      },
      s3: {
        title: 'Kubernetes Engineering & Operations',
        text: 'Von Setup über Betrieb & Upgrades bis CRDs/Operatoren und Troubleshooting.',
        b1: 'Cluster Setup, Cloud oder On-Premises',
        b2: 'Upgrades, Hardening und Observability',
        b3: 'CI/CD und GitOps Patterns',
        b4: 'CRDs & Operator-Entwicklung und Bugfixing'
      },
      s4: {
        title: 'AI Infrastruktur und Data Training',
        text: 'Aufbau von Infrastruktur und Datenpipelines für AI Use Cases.',
        b1: 'Deployment Patterns und Monitoring',
        b2: 'Data Pipelines und Governance',
        b3: 'Evaluierung und Qualitätssicherung'
      },
      s5: {
        title: 'Workshops und Training',
        text: 'Grundlagen sowie hands on mit Best Practices.',
        b1: 'Golang',
        b2: 'Kubernetes Operators, CRDs und Integrations',
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
      subtitle: 'Ein stabiler Stack für moderne, sichere und wartbare Lösungen, verbunden mit der Bereitschaft, neue Technologien bei Bedarf zu erlernen.',
      languages: 'Sprachen',
      cloud: 'Cloud und Platform',
      databases: 'Datenbanken',
    },
    about: {
      title: 'Über uns',
      text1: 'Die Aiza GmbH, gegründet 2023 und mit Sitz in Zollikofen bei Bern, entwickelt massgeschneiderte Webapplikationen sowie Cloud- und Kubernetes-Plattformlösungen auf Basis von Open-Source-Technologien.',
      text2: 'Wir unterstützen Unternehmen und Institutionen mit Consulting, Architektur, Entwicklung und Schulung. Dazu gehören der Aufbau, der Betrieb und die Weiterentwicklung von Kubernetes-Umgebungen sowie der Aufbau und das Training unternehmensinterner AI-Systeme auf Basis firmeneigener Daten. Darüber hinaus wird die Aiza GmbH gezielt für Bugfixing, Fehleranalyse und die Stabilisierung bestehender Systeme eingesetzt, auch kurzfristig und ohne langfristige Vertrags\u00ADbindung.',
      role: 'Founder & CEO',
      edu: 'Bachelor of Science in Informatik',
      certs: 'Zertifizierungen',
      links: 'Links'
    },
    clients: {
      title: 'Eine Auswahl von Organisationen, mit denen wir zusammengearbeitet haben. Referenzen und Details gerne auf Anfrage.',
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
      mailCta: 'E-Mail senden'
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
          E-Mail: <a href="mailto:angela.scherer@aiza.ch">angela.scherer@aiza.ch</a><br>
          Telefon: <a href="tel:+41791972153">+41 79 197 21 53</a>
        </p>

        <h3>Handelsregister des Kantons Bern</h3>
        <p>
          CHE-358.617.722
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
          Gestützt auf Artikel 13 der schweizerischen Bundesverfassung und die datenschutzrechtlichen Bestimmungen des Bundes hat jede 
          Person Anspruch auf Schutz ihrer Privatsphäre sowie auf Schutz vor Missbrauch ihrer persönlichen Daten. Die Aiza GmbH hält diese 
          Bestimmungen ein. Personendaten werden vertraulich behandelt und nicht an Dritte verkauft.
        </p>

        <h3>Verantwortliche Stelle</h3>
        <p>
          Verantwortlich für die Datenbearbeitung auf dieser Website ist:
        </p>
        <p>
          Aiza GmbH<br>
          Bernstrasse 159<br>
          3052 Zollikofen<br>
          Schweiz
        </p>
        <p>
          E-Mail: <a href="mailto:angela.scherer@aiza.ch">angela.scherer@aiza.ch</a><br>
          Telefon: <a href="tel:+41791972153">+41 79 197 21 53</a>
        </p>

        <h3>Server-Logfiles</h3>
        <p>
          Beim Besuch dieser Website werden aus technischen Gründen automatisch Daten in sogenannten Server-Logfiles verarbeitet.
          Dazu gehören insbesondere IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite oder Datei,
          Browser- und Betriebssysteminformationen (User-Agent) sowie gegebenenfalls Fehlermeldungen.
          Diese Daten dienen ausschliesslich der Sicherstellung des technischen Betriebs, der Systemsicherheit
          sowie der Fehleranalyse.
        </p>

        <h3>Hosting</h3>
        <p>
          Diese Website wird auf einer eigenen Infrastruktur in der Schweiz betrieben.
          Die Verarbeitung der technischen Zugriffsdaten erfolgt ausschliesslich durch die Aiza GmbH.
          Es findet keine Weitergabe der Daten an Hosting-Anbieter oder sonstige Dritte statt.
        </p>

        <h3>Kontaktaufnahme</h3>
        <p>
          Wenn Sie uns per E-Mail kontaktieren, werden die von Ihnen übermittelten Daten (z.B. Name, E-Mail-Adresse,
          Inhalt der Anfrage) ausschliesslich zur Bearbeitung und Beantwortung Ihrer Anfrage verwendet.
        </p>

        <h3>Externe Links und Social Media</h3>
        <p>
          Diese Website enthält Links zu externen Webseiten und Social-Media-Plattformen (z.B. LinkedIn, Xing).
          Beim Anklicken eines solchen Links verlassen Sie diese Website.
          Für die Bearbeitung personenbezogener Daten auf den verlinkten Seiten ist der jeweilige Anbieter verantwortlich.
        </p>

        <h3>Weitergabe von Daten</h3>
        <p>
          Es erfolgt keine Weitergabe, kein Verkauf und keine sonstige Übermittlung personenbezogener Daten an Dritte,
          sofern keine gesetzliche Verpflichtung besteht.
        </p>

        <h3>Speicherdauer</h3>
        <p>
          Personenbezogene Daten werden nur so lange aufbewahrt, wie dies für die genannten Zwecke erforderlich ist
          oder gesetzliche Aufbewahrungspflichten bestehen.
          Server-Logfiles werden regelmässig gelöscht oder anonymisiert.
        </p>

        <h3>Ihre Rechte</h3>
        <p>
          Sie haben im Rahmen des anwendbaren Datenschutzrechts das Recht auf Auskunft darüber,
          ob und welche personenbezogenen Daten wir über Sie bearbeiten.
          Zudem können Sie die Berichtigung unrichtiger Daten sowie, soweit gesetzlich zulässig,
          die Löschung oder Einschränkung der Bearbeitung verlangen.
          Anfragen richten Sie bitte an die oben genannte Kontaktadresse.
        </p>

        <h3>Änderungen</h3>
        <p>
          Wir behalten uns vor, diese Datenschutzerklärung jederzeit anzupassen.
          Es gilt die jeweils auf dieser Website veröffentlichte Version.
        </p>
      `      
    }
  },
  en: {
    nav: { services: 'Services', stack: 'Technologies', about: 'About', contact: 'Contact' },
    theme: { dark: 'Dark', light: 'Light' },
    hero: {
      title: 'Consulting, Architecture and Software Develop\u00ADment',
      lead: 'We build tailored web applications and cloud, Kubernetes and AI solutions for companies and institutions based on open source software.',
      ctaPrimary: 'Get in touch',
      ctaSecondary: 'View services',
      cardTitle: 'Focus areas',
      b1: 'Architecture and delivery of web and cloud solutions',
      b2: 'Bug fixing and stabilization of existing systems',
      b3: 'Kubernetes: setup, operations, upgrades, as well as CRD and operator development and bug fixing',
      b4: 'AI infrastructure setup and data training, use case driven',
    },
    process: {
      title: 'How we work',
      subtitle: 'Pragmatic, transparent and with clear deliverables.',
      cta: 'Get in touch',
      p1: {
        title: '1. Clarify the goal',
        text: 'We align on outcome, constraints, and success criteria.',
        b1: 'Short brief & context',
        b2: 'Risks & assumptions',
        b3: 'Definition of done'
      },
      p2: {
        title: '2. Propose a plan',
        text: 'You get a concrete proposal with scope, options and a transparent estimate.',
        b1: 'Architecture & milestones',
        b2: 'Trade-offs explained',
        b3: 'Delivery plan'
      },
      p3: {
        title: '3. Deliver & operate',
        text: 'We deliver in small increments and support stable operations if needed.',
        b1: 'Tests & code reviews',
        b2: 'Documentation',
        b3: 'Handover / operations support'
      }
    },
    services: {
      title: 'Services',
      subtitle: 'Clear services, from concept to operations.',
      s1: {
        title: 'Software Architecture & Engineering',
        text: 'Golang, C#, Python, JavaScript and TypeScript with a focus on quality, testability and clear documentation.',
        b1: 'System design and API interfaces',
        b2: 'Code reviews and quality gates',
        b3: 'Modernization of existing applications'
      },
      s2: {
        title: 'Bug Fixing and Stabilization',
        text: 'Focused analysis, reproducible fixes and improvements that last.',
        b1: 'Debugging and root cause analysis',
        b2: 'Performance and memory profiling',
        b3: 'Test coverage and regression prevention'
      },
      s3: {
        title: 'Kubernetes Engineering & Operations',
        text: 'From setup to operations & upgrades, including CRDs/operators and troubleshooting.',
        b1: 'Cluster setup, cloud or on prem',
        b2: 'Upgrades, hardening and observability',
        b3: 'CI/CD and GitOps patterns',
        b4: 'CRDs & operator development and bug fixing'
      },
      s4: {
        title: 'AI Infrastructure and Data Training',
        text: 'Infrastructure and data pipelines for AI use cases.',
        b1: 'Deployment patterns and monitoring',
        b2: 'Data pipelines and governance',
        b3: 'Evaluation and quality assurance'
      },
      s5: {
        title: 'Workshops and Training',
        text: 'Fundamentals and hands-on training with best practices.',
        b1: 'Golang',
        b2: 'Kubernetes Operators, CRDs and Integrations',
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
      subtitle: 'A stable stack for modern, secure and maintainable solutions, combined with the willingness to learn new technologies when needed.',
      languages: 'Languages',
      cloud: 'Cloud and Platform',
      databases: 'Databases',
    },
    about: {
      title: 'About us',
      text1: 'Aiza GmbH, founded in 2023 and based in Zollikofen near Bern, develops tailored web applications as well as cloud and Kubernetes platform solutions based on open-source technologies.',
      text2: 'We support companies and institutions with consulting, architecture, development and training. This includes the setup, operation and continuous improvement of Kubernetes environments, as well as the design and training of internal AI systems using company-owned data. In addition, Aiza GmbH is frequently engaged for targeted bug fixing, root cause analysis and stabilization of existing systems, including short-term support without the need for long-term contractual commitments.',
      role: 'Founder & CEO',
      edu: 'Bachelor of Science in Computer Science',
      certs: 'Certifications',
      links: 'Links'
    },
    clients: {
      title: 'A selection of organizations we’ve worked with. References and details available on request.',
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

        <h3>Commercial Register of the Canton of Bern</h3>
        <p>
          CHE-358.617.722
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
          Based on Article 13 of the Swiss Federal Constitution and the data protection provisions of the Swiss Confederation, every 
          person has the right to privacy and to protection against misuse of their personal data. Aiza GmbH complies with these provisions. 
          Personal data is treated confidentially and is not sold to third parties.
        </p>

        <h3>Responsible entity</h3>
        <p>
          The responsible entity for data processing on this website is:
        </p>
        <p>
          Aiza GmbH<br>
          Bernstrasse 159<br>
          3052 Zollikofen<br>
          Switzerland
        </p>
        <p>
          Email: <a href="mailto:angela.scherer@aiza.ch">angela.scherer@aiza.ch</a><br>
          Phone: <a href="tel:+41791972153">+41 79 197 21 53</a>
        </p>

        <h3>Server logs</h3>
        <p>
          When visiting this website, technical data may be processed automatically in so-called server log files.
          This may include IP address, date and time of access, requested page or file,
          browser and operating system information (user-agent) and error messages.
          This data is used exclusively to ensure technical operation, system security and troubleshooting.
        </p>

        <h3>Hosting</h3>
        <p>
          This website is operated on our own infrastructure (NAS) located in Switzerland.
          Technical access data is processed exclusively by Aiza GmbH.
          No data is shared with hosting providers or other third parties.
        </p>

        <h3>Contact</h3>
        <p>
          If you contact us by email, the data you provide (e.g. name, email address, content of your inquiry)
          will be used exclusively to process and respond to your request.
        </p>

        <h3>External links and social media</h3>
        <p>
          This website contains links to external websites and social media platforms (e.g. LinkedIn, Xing).
          When you click such a link, you leave this website.
          From that point on, the respective provider is responsible for processing personal data.
        </p>

        <h3>Data sharing</h3>
        <p>
          Personal data is not sold or shared with third parties unless required by law.
        </p>

        <h3>Retention</h3>
        <p>
          Personal data is processed only for as long as necessary for the stated purposes
          or as required by applicable law.
          Server log data is regularly deleted or anonymized.
        </p>

        <h3>Your rights</h3>
        <p>
          Under applicable data protection law, you have the right to request information about
          whether and which personal data we process about you.
          You may also request correction of inaccurate data and, where legally permitted,
          deletion or restriction of processing.
          Requests can be sent to the contact details above.
        </p>

        <h3>Changes</h3>
        <p>
          We may update this privacy policy at any time.
          The version published on this website is the current one.
        </p>
      `,
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
  const locale = HTML_LANG[lang] || lang;

  document.documentElement.setAttribute('lang', locale);
  document.body?.setAttribute('lang', locale);

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
    menu.setAttribute('aria-hidden', 'false');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';

    requestAnimationFrame(() => {
      menu.classList.add('is-open');
      menu.querySelector('a')?.focus();
    });
  };

  const close = () => {
    menu.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';

    window.setTimeout(() => {
      menu.hidden = true;
      menu.setAttribute('aria-hidden', 'true');
    }, 350);
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

  let isOpen = false;

  const renderDoc = (docKey) => {
    const t = I18N[currentLang]?.legal || I18N.en.legal;
    if (docKey === 'imprint') {
      title.textContent = t.imprintTitle;
      content.innerHTML = t.imprint_html;
    } else if (docKey === 'privacy') {
      title.textContent = t.privacyTitle;
      content.innerHTML = t.privacy_html;
    }
  };

  const open = (docKey, { pushHistory = true } = {}) => {
    renderDoc(docKey);

    modal.hidden = false;
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    isOpen = true;

    // Push history entry so browser "Back" closes the modal
    if (pushHistory) {
      history.pushState({ modal: 'legal', doc: docKey }, '', location.href);
    }

    modal.querySelector('.modal-close')?.focus();
  };

  const close = ({ fromPopState = false } = {}) => {
    if (!isOpen) return;

    modal.hidden = true;
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    isOpen = false;

    // If user clicked close (not back button), remove our history entry
    if (!fromPopState) {
      const st = history.state;
      if (st && st.modal === 'legal') {
        history.back();
      }
    }
  };

  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      open(link.dataset.doc, { pushHistory: true });
    });
  });

  modal.addEventListener('click', e => {
    if (e.target?.dataset?.close === 'true') close();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !modal.hidden) close();
  });

  // If the user hits browser back/forward:
  window.addEventListener('popstate', () => {
    // If modal is open, close it instead of navigating away
    if (isOpen) {
      close({ fromPopState: true });
    }
  });

  const st = history.state;
  if (st && st.modal === 'legal' && st.doc) {
    open(st.doc, { pushHistory: false });
  }
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

      // Special case: go truly to the top
      if (href === '#top') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      const header = document.querySelector('.site-header');
      const offset = header ? Math.ceil(header.getBoundingClientRect().height) - 8 : 50;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
});

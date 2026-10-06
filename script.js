'use strict';

const SUPPORTED_LANGS = ['de', 'en'];
const HTML_LANG = { de: 'de-DE', en: 'en-US' };

const I18N = {
  de: {
    meta: {
      title: 'Aiza GmbH | Consulting, Architektur & Softwareentwicklung (Zollikofen/Bern)',
      description: 'Aiza GmbH in Zollikofen (bei Bern): Consulting, Software-Architektur & Entwicklung von Webapplikationen sowie Cloud-, Kubernetes- und KI-Lösungen auf Open-Source-Basis.'
    },
    skip: 'Zum Hauptinhalt springen',
    nav: { services: 'Services', stack: 'Technologien', about: 'Über uns', contact: 'Kontakt' },
    theme: { dark: 'Dark', light: 'Light' },
    hero: {
      title: 'Consulting, Architektur und Softwareent\u00ADwicklung',
      lead: 'Wir entwickeln massgeschneiderte Webapplikationen sowie Cloud-, Kubernetes- und KI-Lösungen für Unternehmen und Institutionen auf Basis von Open-Source-Software.',
      ctaPrimary: 'Kontakt aufnehmen',
      ctaSecondary: 'Services ansehen',
      cardTitle: 'Schwerpunkte',
      b1: 'Architektur und Umsetzung von Web- und Cloud-Lösungen',
      b2: 'Bugfixing und Stabilisierung bestehender Systeme',
      b3: 'Kubernetes: Setup, Betrieb, Upgrades sowie CRD-/Operator-Entwicklung und Bugfixing',
      b4: 'KI-Infrastruktur und Modelltraining für konkrete Anwendungsfälle',
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
        text: 'Sie erhalten einen klaren Scope mit transparenter Aufwands\u00ADschätzung.',
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
      subtitle: 'Technische Expertise für moderne, zuverlässige und langfristig wartbare Softwarelösungen.',
      details: 'Mehr erfahren',
      s1: {
        title: 'Architektur & Softwareentwicklung',
        text: 'Individuelle Software und Weblösungen von der Konzeption bis zur Umsetzung.',
        description: 'Von der technischen Konzeption und Softwarearchitektur bis zur produktiven Umsetzung entwickeln wir massgeschneiderte Business-Applikationen, Weblösungen und Backend-Systeme. Dabei übernehmen wir sowohl Frontend- als auch Backend-Entwicklung und realisieren bei Bedarf komplette Webseiten inklusive Design, Responsive Design, technischer SEO und Hosting.',
        b1: 'Softwarearchitektur und technische Konzeption',
        b2: 'Frontend- und Backend-Entwicklung',
        b3: 'Business-Applikationen und individuelle Weblösungen',
        b4: 'Webdesign und Responsive Design',
        b5: 'APIs, Schnittstellen und Systemintegrationen',
        b6: 'Technische SEO und Performance-Optimierung',
        b7: 'Hosting und Deployment',
        b8: 'Backend-Entwicklung mit Go, C#, .NET und Python',
        b9: 'Frontend: TypeScript, Vue.js, Angular, Svelte und Razor Pages',
        b10: 'Auf Wunsch arbeiten wir uns gerne in neue Technologien ein'
      },
      s2: {
        title: 'Cloud Native, DevOps & Kubernetes',
        text: 'Sichere Cloud-Native-Infrastrukturen für zuverlässige Deployments und stabilen Betrieb.',
        description: 'Wir konzipieren, implementieren und optimieren Cloud-Native- und Kubernetes-Umgebungen für einen sicheren, automatisierten und zuverlässigen Betrieb. Von Kubernetes und Containerisierung über CI/CD und GitOps bis zu Security Hardening und Observability unterstützen wir sowohl beim Aufbau neuer Plattformen als auch bei der Weiterentwicklung bestehender Infrastrukturen.',
        b1: 'Kubernetes-Setup, Betrieb und Upgrades',
        b2: 'Kubernetes Security Hardening',
        b3: 'Entwicklung von Kubernetes Operators und CRDs',
        b4: 'CI/CD und Deployment-Automatisierung',
        b5: 'Containerisierung mit Docker und Podman',
        b6: 'Cloud- und Linux-Infrastruktur',
        b7: 'Cloud- und Datenlösungen mit Azure, Azure DevOps und Azure Data Factory',
        b8: 'GitOps mit Argo CD und Infrastructure as Code mit Terraform',
        b9: 'Monitoring und Observability'
      },
      s3: {
        title: 'KI-Infrastruktur & Data Engineering',
        text: 'Technische Infrastruktur und Datenlösungen für den sicheren und produktiven Einsatz von KI.',
        description: 'Wir schaffen die technische Grundlage für den produktiven Einsatz von KI in Unternehmen. Dazu gehören der Aufbau geeigneter Infrastrukturen, die Aufbereitung und Verarbeitung unternehmenseigener Daten sowie die Integration von KI-Modellen und Services in bestehende Anwendungen und Prozesse. Der Fokus liegt auf konkreten Anwendungsfällen und technisch nachhaltigen Lösungen.',
        b1: 'KI-Infrastruktur und Deployment',
        b2: 'Datenpipelines und Datenaufbereitung',
        b3: 'Integration von KI-Services und Modellen',
        b4: 'Anbindung bestehender Anwendungen und Systeme',
        b5: 'Monitoring und Qualitätssicherung',
        b6: 'Unternehmensinterne KI-Lösungen auf Basis eigener Daten'
      },
      s4: {
        title: 'Troubleshooting & Modernisierung',
        text: 'Technische Probleme lösen, Systeme stabilisieren und Lösungen modernisieren.',
        description: 'Wenn Anwendungen instabil, langsam oder technisch festgefahren sind, analysieren wir systematisch die Ursachen und beheben Probleme nachhaltig statt mit kurzfristigen Workarounds. Wir unterstützen bei akuten Produktionsproblemen ebenso wie bei der schrittweisen Modernisierung bestehender Anwendungen und Infrastrukturen.',
        b1: 'Root Cause Analysis und Debugging',
        b2: 'Performance- und Fehleranalyse',
        b3: 'Stabilisierung produktiver Systeme',
        b4: 'Analyse komplexer Produktionsprobleme',
        b5: 'Modernisierung von Legacy-Anwendungen',
        b6: 'Gezieltes Bugfixing in bestehenden Projekten',
        b7: 'Code Reviews und technische Qualitätsanalyse'
      },
      s5: {
        title: 'Workshops & technische Trainings',
        text: 'Praxisnahe Trainings und Workshops, auf Wunsch individuell auf Ihr Team zugeschnitten.',
        description: 'Praxisorientierte technische Trainings für Teams aus Entwicklung, Engineering und IT-Betrieb. Die Trainings verbinden fundierte technische Grundlagen mit praktischen Übungen und realistischen Anwendungsfällen. Inhalte und Schwerpunkte können individuell auf den Wissensstand, die bestehende Infrastruktur und die Anforderungen des Teams abgestimmt werden.',
        b1: 'Programmieren mit Golang',
        b2: 'Programmieren mit C#/.NET',
        b3: 'Kubernetes Grundlagen und Administration',
        b4: 'Kubernetes Security und Security Hardening',
        b5: 'Kubernetes Operators und CRDs',
        b6: 'GitOps mit Argo CD',
        b7: 'Infrastructure as Code mit Terraform',
        b8: 'Containerisierung mit Docker und Podman',
        b9: 'Podman Quadlet',
        b10: 'Weitere Kurse können auf Wunsch angefragt werden',
        collaboration: 'Ausgewählte Trainings bieten wir auch in Zusammenarbeit mit Letsboot an:',
        letsbootGo: 'Programmieren mit Golang',
        letsbootKubernetes: 'Kubernetes Operators, CRDs und Integrationen'
      },
      s6: {
        title: 'Zusammenarbeit',
        text: 'Flexible Unterstützung für einzelne Projekte, technische Herausforderungen oder eine langfristige Zusammenarbeit.',
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
      text2: 'Wir unterstützen Unternehmen und Institutionen mit Consulting, Architektur, Entwicklung und Schulung. Dazu gehören der Aufbau, der Betrieb und die Weiterentwicklung von Kubernetes-Umgebungen sowie der Aufbau und das Training unternehmensinterner KI-Systeme auf Basis firmeneigener Daten. Darüber hinaus wird die Aiza GmbH gezielt für Bugfixing, Fehleranalyse und die Stabilisierung bestehender Systeme eingesetzt, auch kurzfristig und ohne langfristige Vertrags\u00ADbindung.',
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
      text: 'Kurzbeschrieb mit Ziel, Kontext und Deadline',
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
    meta: {
      title: 'Aiza GmbH | Consulting, Architecture & Software Development (Zollikofen/Bern)',
      description: 'Aiza GmbH in Zollikofen (near Bern): consulting, software architecture and development of web applications as well as cloud, Kubernetes and AI solutions based on open source.'
    },
    skip: 'Skip to main content',
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
      b4: 'AI infrastructure and model training for specific use cases',
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
        text: 'You get a concrete proposal with scope and a transparent estimate.',
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
      subtitle: 'Technical expertise for modern, reliable and maintainable software solutions.',
      details: 'Learn more',
      s1: {
        title: 'Architecture & Software Development',
        text: 'Tailored software and web solutions from concept to delivery.',
        description: 'From technical design and software architecture to production-ready implementation, we develop tailored business applications, web solutions and backend systems. We cover both frontend and backend development and, where required, deliver complete websites including design, responsive implementation, technical SEO and hosting.',
        b1: 'Software architecture and technical design',
        b2: 'Frontend and backend development',
        b3: 'Business applications and tailored web solutions',
        b4: 'Web design and responsive design',
        b5: 'APIs, interfaces and system integrations',
        b6: 'Technical SEO and performance optimization',
        b7: 'Hosting and deployment',
        b8: 'Backend development with Go, C#, .NET and Python',
        b9: 'Frontend: TypeScript, Vue.js, Angular, Svelte and Razor Pages',
        b10: 'We are happy to learn new technologies on request'
      },
      s2: {
        title: 'Cloud Native, DevOps & Kubernetes',
        text: 'Secure cloud-native infrastructure for reliable deployments and stable operations.',
        description: 'We design, implement and optimize cloud-native and Kubernetes environments for secure, automated and reliable operations. From Kubernetes and containerization to CI/CD, GitOps, security hardening and observability, we support both the implementation of new platforms and the continuous improvement of existing infrastructure.',
        b1: 'Kubernetes setup, operations and upgrades',
        b2: 'Kubernetes security hardening',
        b3: 'Kubernetes operator and CRD development',
        b4: 'CI/CD and deployment automation',
        b5: 'Containerization with Docker and Podman',
        b6: 'Cloud and Linux infrastructure',
        b7: 'Cloud and data solutions with Azure, Azure DevOps and Azure Data Factory',
        b8: 'GitOps with Argo CD and Infrastructure as Code with Terraform',
        b9: 'Monitoring and observability'
      },
      s3: {
        title: 'AI Infrastructure & Data Engineering',
        text: 'Technical infrastructure and data solutions for secure and productive AI adoption.',
        description: 'We build the technical foundation for the productive use of AI within organizations. This includes suitable infrastructure, preparation and processing of company-owned data, and the integration of AI models and services into existing applications and processes. Our focus is on concrete use cases and technically sustainable solutions.',
        b1: 'AI infrastructure and deployment',
        b2: 'Data pipelines and data preparation',
        b3: 'Integration of AI services and models',
        b4: 'Integration with existing applications and systems',
        b5: 'Monitoring and quality assurance',
        b6: 'Internal AI solutions based on company-owned data'
      },
      s4: {
        title: 'Troubleshooting & Modernization',
        text: 'Resolve technical issues, stabilize systems and modernize solutions.',
        description: 'When applications become unstable, slow or technically constrained, we systematically identify the root cause and implement sustainable solutions instead of short-term workarounds. We support both urgent production issues and the gradual modernization of existing applications and infrastructure.',
        b1: 'Root cause analysis and debugging',
        b2: 'Performance and error analysis',
        b3: 'Stabilization of production systems',
        b4: 'Analysis of complex production issues',
        b5: 'Modernization of legacy applications',
        b6: 'Targeted bug fixing in existing projects',
        b7: 'Code reviews and technical quality assessments'
      },
      s5: {
        title: 'Workshops & Technical Training',
        text: 'Practical training and workshops, with content tailored to your team on request.',
        description: 'Hands-on technical training for software development, engineering, and IT operations teams. The training combines solid technical foundations with practical exercises and real-world use cases. Content and focus areas can be tailored to the team\'s existing knowledge, infrastructure and specific requirements.',
        b1: 'Programming in Go',
        b2: 'Programming with C#/.NET',
        b3: 'Kubernetes fundamentals and administration',
        b4: 'Kubernetes security and security hardening',
        b5: 'Kubernetes operators and CRDs',
        b6: 'GitOps with Argo CD',
        b7: 'Infrastructure as Code with Terraform',
        b8: 'Containerization with Docker and Podman',
        b9: 'Podman Quadlet',
        b10: 'Other courses are available on request',
        collaboration: 'Selected training courses are also available in collaboration with Letsboot:',
        letsbootGo: 'Programming in Go',
        letsbootKubernetes: 'Kubernetes Operators, CRDs and Integrations'
      },
      s6: {
        title: 'Working together',
        text: 'Flexible support for individual projects, technical challenges or long-term collaboration.',
        p1: 'Remote / On-site (CH)',
        p2: 'Project / Consulting',
      }
    },
    stack: {
      title: 'Technologies',
      subtitle: 'A stable stack for modern, secure and maintainable solutions, combined with the willingness to learn new technologies when needed.',
      languages: 'Languages',
      cloud: 'Cloud & Platforms',
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
      text: 'Short brief with goal, context and deadline',
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
  const locale = HTML_LANG[lang] || lang;

  document.documentElement.setAttribute('lang', locale);
  document.body?.setAttribute('lang', locale);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const value = key.split('.').reduce((acc, part) => (acc ? acc[part] : undefined), I18N[lang]);
    if (typeof value === 'string') el.textContent = value;
  });

  document.querySelectorAll('[data-service]').forEach(button => {
    const service = I18N[lang].services[button.dataset.service];
    if (service) button.setAttribute('aria-label', `${I18N[lang].services.details}: ${service.title}`);
  });

  document.querySelectorAll('.seg-btn[data-lang]').forEach(btn => {
    const pressed = btn.dataset.lang === lang;
    btn.setAttribute('aria-pressed', String(pressed));
  });

  // SEO: update <title> and meta description per language
  const meta = I18N[lang]?.meta;
  if (meta?.title) document.title = meta.title;

  const desc = document.querySelector('meta[name="description"]');
  if (desc && meta?.description) desc.setAttribute('content', meta.description);

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
      hamburger.focus();
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
  const serviceButtons = document.querySelectorAll('[data-service]');
  const serviceCards = document.querySelectorAll('#services .service-card');
  if (!modal || !title || !content || (!links.length && !serviceButtons.length && !serviceCards.length)) return;

  let isOpen = false;
  let activeTrigger = null;

  const renderDoc = (docKey) => {
    const t = I18N[currentLang]?.legal || I18N.en.legal;
    if (docKey === 'imprint') {
      title.textContent = t.imprintTitle;
      content.innerHTML = t.imprint_html;
    } else if (docKey === 'privacy') {
      title.textContent = t.privacyTitle;
      content.innerHTML = t.privacy_html;
    } else {
      return false;
    }
    return true;
  };

  const renderService = serviceKey => {
    const service = I18N[currentLang]?.services?.[serviceKey];
    if (!service) return false;

    title.textContent = service.title;

    const fragment = document.createDocumentFragment();

    const descriptionText = service.description || service.text;
    if (descriptionText) {
      const description = document.createElement('p');
      description.className = 'service-detail-description';
      description.textContent = descriptionText;
      fragment.append(description);
    }

    const list = document.createElement('ul');
    list.className = 'service-detail-list';

    Object.entries(service)
      .filter(([key]) => /^(b|p)\d+$/.test(key))
      .forEach(([key, value]) => {
        const item = document.createElement('li');
        item.textContent = value;
        list.append(item);
      });

    fragment.append(list);

    if (serviceKey === 's5') {
      const collaboration = document.createElement('p');
      collaboration.className = 'service-detail-collaboration';
      collaboration.textContent = service.collaboration;
      fragment.append(collaboration);

      const courses = document.createElement('ul');
      courses.className = 'service-detail-list service-detail-courses';
      [
        { label: service.letsbootGo, href: 'https://letsboot.ch/kurs/golang' },
        { label: service.letsbootKubernetes, href: 'https://letsboot.ch/kurs/kubernetes-operators' }
      ].forEach(course => {
        const item = document.createElement('li');
        const link = document.createElement('a');
        link.href = course.href;
        link.target = '_blank';
        link.rel = 'noopener';
        link.textContent = course.label;
        item.append(link);
        courses.append(item);
      });
      fragment.append(courses);
    }

    content.replaceChildren(fragment);

    return true;
  };

  const open = (docKey, { pushHistory = true, type = 'legal', trigger = null } = {}) => {
    const rendered = type === 'service' ? renderService(docKey) : renderDoc(docKey);
    if (!rendered) return;

    modal.hidden = false;
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    isOpen = true;
    activeTrigger = trigger;

    // Push history entry so browser "Back" closes the modal
    if (pushHistory) {
      const state = type === 'service'
        ? { modal: 'service', service: docKey }
        : { modal: 'legal', doc: docKey };
      history.pushState(state, '', location.href);
    }

    modal.querySelector('.modal-close')?.focus();
  };

  const close = ({ fromPopState = false } = {}) => {
    if (!isOpen) return;

    modal.hidden = true;
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    isOpen = false;
    if (activeTrigger?.isConnected) activeTrigger.focus();
    activeTrigger = null;

    // If user clicked close (not back button), remove our history entry
    if (!fromPopState) {
      const st = history.state;
      if (st && (st.modal === 'legal' || st.modal === 'service')) {
        history.back();
      }
    }
  };

  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      open(link.dataset.doc, { pushHistory: true, trigger: link });
    });
  });

  serviceCards.forEach(card => {
    const serviceKey = card.dataset.serviceKey || card.querySelector('[data-service]')?.dataset.service;
    if (!serviceKey) return;

    card.addEventListener('click', e => {
      if (e.target.closest('button, a, input, select, textarea')) return;
      open(serviceKey, { type: 'service', trigger: card });
    });

    card.addEventListener('keydown', e => {
      if (e.target !== card || (e.key !== 'Enter' && e.key !== ' ')) return;
      e.preventDefault();
      open(serviceKey, { type: 'service', trigger: card });
    });
  });

  serviceButtons.forEach(button => {
    button.addEventListener('click', () => {
      open(button.dataset.service, { type: 'service', trigger: button });
    });
  });

  modal.addEventListener('click', e => {
    if (e.target?.dataset?.close === 'true') close();
  });

  document.addEventListener('keydown', e => {
    if (modal.hidden) return;
    if (e.key === 'Escape') {
      close();
      return;
    }
    if (e.key !== 'Tab') return;

    const focusable = [...modal.querySelectorAll('.modal-dialog a[href], .modal-dialog button:not([disabled]), .modal-dialog [tabindex]:not([tabindex="-1"])')];
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last?.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first?.focus();
    }
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
  } else if (st && st.modal === 'service' && st.service) {
    open(st.service, { pushHistory: false, type: 'service' });
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

  // Smooth scroll with header offset + focus management (fix skip link enter)
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

      // If target is not focusable, temporarily make it focusable
      const hadTabindex = target.hasAttribute('tabindex');
      if (!hadTabindex) target.setAttribute('tabindex', '-1');

      window.scrollTo({ top, behavior: 'smooth' });

      // After scroll: move keyboard focus (Enter/Space works reliably for skip link)
      window.setTimeout(() => {
        try {
          target.focus({ preventScroll: true });
        } catch {
          target.focus();
        }

        if (!hadTabindex && target.id !== 'main') {
          // Remove only if we added it dynamically and it's not the main landmark
          target.removeAttribute('tabindex');
        }
      }, 250);
    });
  });
});

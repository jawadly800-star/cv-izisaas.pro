/**
 * Données Officielles & Authentiques de Mouhamad Jawad LY
 */
const cvData = {
  personal: {
    fullName: "Mouhamad Jawad LY",
    shortName: "Jawad LY",
    title: "Artiste Plasticien • Designer Graphique • Vibe Coder",
    tagline: "Tisser des récits vivants sous des formes visuelles, entre héritage pictural contemporain, design de marque et technologies créatives.",
    location: "Dakar, Sénégal (Village des Arts) • International",
    availability: "Disponible pour acquisitions, expositions, identités de marque & projets tech",
    email: "jawadly.art@gmail.com",
    whatsapp: "+221 77 000 00 00",
    whatsappLink: "https://wa.me/221770000000?text=Bonjour%20Jawad,%20je%20souhaite%20vous%20contacter%20concernant...",
    instagram: "@jawad_ly",
    instagramLink: "https://www.instagram.com/jawadly",
    portrait: "assets/images/jawad-ly-real.jpg",
    stats: [
      { label: "Concours National", value: "3e Prix", detail: "Union Européenne 2022" },
      { label: "Exposition Majeure", value: "2025", detail: "Itinéraire de Saint-Louis" },
      { label: "Village des Arts", value: "Dakar", detail: "Atelier & création continue" },
      { label: "Disciplines", value: "3 en 1", detail: "Peinture, Logos & Vibe Coding" }
    ]
  },

  biography: {
    lead: "Jawad Ly vise à tisser des récits riches sous des formes visuelles, invitant le public à s'engager avec son patrimoine de manière accessible et évocatrice. En traduisant des figures historiques en toiles peintes vives, il remet en question les méthodes de narration traditionnelle et élève le discours artistique autour de la représentation culturelle.",
    vision: "L'engagement de Jawad Ly à explorer ces thèmes souligne sa conviction dans le pouvoir de l'art pour réfléchir et façonner les récits sociétaux, faisant de son travail non seulement un voyage personnel, mais aussi une contribution significative au dialogue plus large sur l'identité et l'histoire contemporaines.",
    roots: "Né dans une famille d'artistes, Mouhamad Jawad Ly a été profondément connecté à l'atmosphère vibrante du Village des Arts à Dakar. Il accompagnait souvent son père, Amadou DéDé Ly, dans son atelier dès son plus jeune âge. Cette immersion précoce a éveillé en lui une passion pour le dessin, qui s’est progressivement transformée en un intérêt profond pour la peinture. Il a officiellement commencé son parcours en peinture en 2020, pendant la pandémie."
  },

  parcours: [
    {
      year: "2025",
      title: "Participation à l'Itinéraire de Saint-Louis",
      event: "Événement artistique majeur au Sénégal",
      desc: "Exposition aux côtés de grands maîtres de l'art sénégalais contemporain tels que Tita Mbaye et son frère Baba Ly, marquant une nouvelle étape d'envergure dans sa trajectoire artistique.",
      badge: "Événement Majeur"
    },
    {
      year: "2024",
      title: "Exposition Collective — Loman Art Gallery",
      event: "Loman Art • Dakar",
      desc: "Participation remarquée à une exposition collective prestigieuse aux côtés d'artistes contemporains de premier plan.",
      badge: "Exposition"
    },
    {
      year: "2022",
      title: "3ème Prix National de Peinture",
      event: "Concours National de l'Union Européenne",
      desc: "Consécration de son engagement et de sa maturité plastique lors du concours national organisé par l'Union européenne au Sénégal.",
      badge: "Prix & Distinction"
    },
    {
      year: "2021",
      title: "Résidence & Collaboration au Village des Arts",
      event: "Village des Arts • Dakar",
      desc: "Nouvel élan artistique à travers une collaboration régulière avec son frère, Mahmoud Baba Ly, au sein de l'émulation créative du Village des Arts.",
      badge: "Atelier"
    },
    {
      year: "2020",
      title: "Lancement Officiel du Parcours en Peinture",
      event: "Période de la pandémie",
      desc: "Transformation formelle de sa passion pour le dessin en peinture sur toile et travail approfondi de la matière et des pigments.",
      badge: "Genèse"
    }
  ],

  realArtworks: [
    {
      id: "art-1",
      title: "Reine Ndaté Yalla Mbodj — Lingeer Résistante du Waalo",
      category: "Peinture d'Histoire & Mémoire Anticoloniale",
      image: "assets/images/oeuvre-femme-chat.jpg",
      medium: "Acrylique et techniques mixtes sur toile • Signée Jawad",
      desc: "Hommage vibrant à la reine Ndaté Yalla Mbodj (v. 1810 - 1860), dernière grande Linguère (reine souveraine) du royaume du Waalo au Sénégal. Figure héroïque et indomptable de la résistance anticoloniale, elle a combattu avec bravoure les colons français et les troupes de Faidherbe pour défendre la terre de ses ancêtres. Jawad Ly la dépeint dans une majesté souveraine et sereine, parée de son éventail traditionnel, aux côtés d'un félin royal veillant au pied de la case traditionnelle.",
      dimensions: "Toile originale sur châssis • Signée 'Jawad'",
      year: "Atelier Jawad Ly"
    },
    {
      id: "art-2",
      title: "La Traversée du Sahel — Les Bergers & l'Âne",
      category: "Peinture Contemporaine",
      image: "assets/images/oeuvre-bergers-ane.jpg",
      medium: "Huile et acrylique sur toile texturée",
      desc: "Composition figurative puissante capturant la lumière dorée du Sahel, la marche des bergers et le lien ancestral avec les troupeaux. Signée Jawadly 23.",
      dimensions: "Œuvre originale signée 'Jawadly 23'",
      year: "2023"
    },
    {
      id: "art-3",
      title: "Le Sage au Grand Chapeau & aux Animaux",
      category: "Peinture Contemporaine",
      image: "assets/images/oeuvre-sage-chapeau.jpg",
      medium: "Techniques mixtes, pigments et matières sur toile",
      desc: "Figure emblématique de la sagesse et de la mémoire sahélienne, coiffé du chapeau pastoral traditionnel, entouré de chèvres et de chats sous la canopée protectrice des arbres séculaires.",
      dimensions: "Toile originale",
      year: "Atelier Village des Arts"
    },
    {
      id: "art-4",
      title: "La Veillée du Savoir — L'Enfant au Feu",
      category: "Scène de Vie & Quête du Savoir",
      image: "assets/images/oeuvre-lecture-au-feu.jpg",
      medium: "Acrylique et techniques mixtes sur toile • Signée Jawad",
      desc: "Scène intimiste où la lueur d'un feu de bois éclaire la soif d'apprendre d'un jeune garçon absorbé par son livre au cœur du village.",
      dimensions: "Toile originale sur châssis",
      year: "Atelier Jawad Ly"
    },
    {
      id: "art-5",
      title: "Le Jeune Voyageur à l'Âne",
      category: "Peinture Figurative & Coutumes",
      image: "assets/images/oeuvre-voyageur-ane.jpg",
      medium: "Huile et acrylique sur toile texturée • Signée JaWaD 23",
      desc: "Voyage pastoral à dos d'âne sous la clarté sahélienne. Évocation touchante de l'enfance rurale et du compagnonnage fidèle.",
      dimensions: "Œuvre originale signée 'JaWaD 23'",
      year: "2023"
    },
    {
      id: "art-6",
      title: "La Transmission du Savoir — Le Maître & les Disciples",
      category: "Mémoire, Éducation & Sagesse",
      image: "assets/images/oeuvre-transmission-savoir.jpg",
      medium: "Acrylique, matières et pigments sur toile • Signée JawadLy 23",
      desc: "Célébration de la transmission ancestrale et des précieux manuscrits, où le maître guide avec bienveillance ses jeunes élèves dans l'amour de la connaissance.",
      dimensions: "Œuvre originale signée 'JawadLy 23'",
      year: "2023"
    }
  ],

  designAndCode: [
    {
      id: "design-logos",
      title: "Création de Logos & Identités Visuelles",
      category: "Design Graphique",
      image: "assets/images/branding-logos.jpg",
      desc: "Création d'emblèmes vectoriels de luxe, de logos minimalistes et de chartes graphiques percutantes pour entreprises et créateurs.",
      tools: "Illustrator, Photoshop, Figma"
    },
    {
      id: "vibe-coding",
      title: "Vibe Coding & Développement Web Créatif",
      category: "Tech & Vibe Coding",
      image: "assets/images/saas-vibecoding.jpg",
      desc: "Développement d'interfaces modernes, landing pages et solutions web interactives propulsées par les outils de Vibe Coding et l'IA.",
      tools: "HTML5/CSS3, JavaScript, Prototypage IA"
    }
  ]
};

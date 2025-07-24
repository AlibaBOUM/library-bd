const bds = [
  {
    image: "images/adieu_triste_amour.jpg",
    titre: "Adieu triste amour",
    auteur: "Mirion Malle",
    editeur: "La Ville Brûle / Pow Pow",
    resume: "Cléo, jeune autrice à Montréal, quitte un amour toxique et se reconstruit dans une émancipation douce-amère teintée de sororité.",
    note: "★★★★☆"
  },
  {
    image: "images/laimant.jpg",
    titre: "L'Aimant",
    auteur: "Lucas Harari",
    editeur: "Sarbacane",
    resume: "Alyte, têtard orphelin, traverse rivières et forêts, rencontre un saumon, un arbre… pour grandir dans une fable écologique poétique.",
    note: "★★★★★"
  },
  {
    image: "images/alyte.jpg",
    titre: "Alyte",
    auteur: "Jérémie Moreau",
    editeur: "2042",
    resume: "Alyte, têtard orphelin, traverse rivières et forêts, rencontre un saumon, un arbre… pour grandir dans une fable écologique poétique.",
    note: "★★★★★"
  },
  {
    image: "images/amours_croisees.jpg",
    titre: "Amours croisées",
    auteur: "Laura Nsafou & Camélia Blandeau",
    editeur: "La Ribambulle",
    resume: "Yari découvre que Hide vit en polyamour. Un récit moderne sur les différentes façons d’aimer, confrontant jalousie et acceptation.",
    note: "★★★★☆"
  },
  {
    image: "images/ballades.jpg",
    titre: "Ballades",
    auteur: "Camille Potte",
    editeur: "Atrabile",
    resume: "Le prince Gourignot transformé en grenouille doit déjouer un complot pour retrouver sa couronne dans un conte poétique.",
    note: "★★★★☆"
  },
  {
    image: "images/bellicus.jpg",
    titre: "Bellicus",
    auteur: "El Diablo & Pierre Ferrero",
    editeur: "Massot Éditions",
    resume: "Deux hominidés préhistoriques, pacifique et guerrier, entament une quête vengeresse qui révèle la violence humaine intemporelle.",
    note: "★★★★☆"
  },
  {
    image: "images/beneath_the_trees.jpg",
    titre: "Beneath the trees",
    auteur: "Patrick Horvath",
    editeur: "Ankama",
    resume: "",
    note: ""
  },
  {
    image: "images/le_bestiaire_du_crepuscule.jpg",
    titre: "Le Bestiaire du Crépuscule",
    auteur: "Daria Schmitt",
    editeur: "Aire Libre",
    resume: "",
    note: ""
  },
  {
    image: "images/big_bang_cunni.jpg",
    titre: "Big Bang Cunni",
    auteur: "Chloé Wary",
    editeur: "BD Cul",
    resume: "",
    note: ""
  },
  {
    image: "images/black_hole.jpg",
    titre: "Black hole",
    auteur: "Charles Burns",
    editeur: "Delcourt",
    resume: "",
    note: ""
  },
  {
    image: "images/blast.jpg",
    titre: "Blast",
    auteur: "Manu Larcenet",
    editeur: "Dargaud",
    resume: "",
    note: ""
  },
  {
    image: "images/boule_de_feu.jpg",
    titre: "Boule de feu",
    auteur: "Anouk Ricard & Etienne Chaize",
    editeur: "2024",
    resume: "",
    note: ""
  },
  {
    image: "images/the_boy_the_mole_the_fox_and_the_horse.jpg",
    titre: "The Boy, The Mole, The Fox and The Horse",
    auteur: "Charlie Mackesy",
    editeur: "HarperCollins",
    resume: "Un conte illustré émouvant sur l’amitié et la vulnérabilité, à travers quatre personnages philosophiques dans la nature.",
    note: "★★★★★"
  },
  {
    image: "images/brancusi_contre_etats_unis.jpg",
    titre: "Brancusi contre États-Unis",
    auteur: "Arnaud Nebbache",
    editeur: "Dargaud",
    resume: "",
    note: ""
  },
  {
    image: "images/carbone_et_silicium.jpg",
    titre: "Carbone & Silicium",
    auteur: "Mathieu Bablet",
    editeur: "Ankama & Label 619",
    resume: "",
    note: ""
  },
  {
    image: "images/le_cas_david_zimmerman.jpg",
    titre: "Le cas David Zimmerman",
    auteur: "Lucas Harari & son frère",
    editeur: "Sarbacane",
    resume: "",
    note: ""
  },
  {
    image: "images/cauchemar.jpg",
    titre: "Cauchemar",
    auteur: "Pierre Ferrero",
    editeur: "L'employé du moi",
    resume: "",
    note: ""
  },
  {
    image: "images/ces_jours_qui_disparaissent.jpg",
    titre: "Ces jours qui disparaissent",
    auteur: "Timothé Le Boucher",
    editeur: "Glénat",
    resume: "",
    note: ""
  },
  {
    image: "images/cest_comme_ca_que_je_disparais.jpg",
    titre: "C’est comme ça que je disparais",
    auteur: "Mirion Malle",
    editeur: "La Ville Brûle",
    resume: "Un roman graphique sur la dépression et l’errance émotionnelle d’une jeune femme à Montréal, touchant et introspectif.",
    note: "★★★★☆"
  },
  {
    image: "images/contes_de_la_mansarde.jpg",
    titre: "Contes de la mansarde",
    auteur: "Elisabeth Holleville & Iris Pouy",
    editeur: "L'employé du moi",
    resume: "",
    note: ""
  },
    {
    image: "images/colorado_train.jpg",
    titre: "Colorado Train",
    auteur: "Alex W. Inker",
    editeur: "Sarbacane",
    resume: "Un western atypique et poétique sur un vieux hors-la-loi, sa quête de rédemption et ses souvenirs sur le mythique Colorado Train.",
    note: "★★★★☆"
  },
  {
    image: "images/la_couleur_des_choses.jpg",
    titre: "La couleur des choses",
    auteur: "Martin Panchaud",
    editeur: "Cà et Là",
    resume: "Récit contemplatif et visuel sur la perception du monde, les émotions et la symbolique des couleurs dans notre quotidien.",
    note: "★★★★☆"
  },
  {
    image: "images/cornelius.jpg",
    titre: "Cornelius, la vie pleine dejoie du triste chien",
    auteur: "Marc Torices",
    editeur: "Actes Sud BD",
    resume: "Aventures fantastiques d’un garçon ordinaire confronté à un étrange univers peuplé de créatures étonnantes.",
    note: "★★★☆☆"
  },
  {
    image: "images/croissant_amoureux.jpg",
    titre: "Croissant Amoureux",
    auteur: "Yasutoshi Kuokami",
    editeur: "The Hoochie Coochie",
    resume: "Une romance douce-amère entre deux cœurs solitaires qui se découvrent autour d’un petit-déjeuner gourmand.",
    note: "★★★☆☆"
  },
  {
    image: "images/crossed_si_tu_voyais_ca.jpg",
    titre: "Crossed : Si tu voyais ça",
    auteur: "Simon Spurrier & Javier Barreno",
    editeur: "Panini Comics",
    resume: "Un récit brutal et dystopique où la violence règne. Focus sur des personnages dans un monde ravagé par un mal extrême.",
    note: "★★★☆☆"
  },
  {
    image: "images/culottees.jpg",
    titre: "Culottées",
    auteur: "Pénélope Bagieu",
    editeur: "Gallimard BD",
    resume: "Portraits engagés de femmes remarquables de l’histoire, racontés avec humour et sensibilité.",
    note: "★★★★★"
  },
  {
    image: "images/deux_tueurs.jpg",
    titre: "Deux tueurs",
    auteur: "Mezzo & Pirus",
    editeur: "Delcourt",
    resume: "Polar noir vénitien dans lequel deux tueurs à gages se rencontrent dans une histoire de trahison et de révélations.",
    note: "★★★★☆"
  },
  {
    image: "images/le_dieu_vagabond.jpg",
    titre: "Le Dieu Vagabond",
    auteur: "Fabrizio Dori",
    editeur: "Sarbacane",
    resume: "Polar noir vénitien dans lequel deux tueurs à gages se rencontrent dans une histoire de trahison et de révélations.",
    note: "★★★★☆"
  },
  {
    image: "images/le_discours_de_la_panthere.jpg",
    titre: "Le Discours de la panthère",
    auteur: "Jérémie Moreau",
    editeur: "2024",
    resume: "Polar noir vénitien dans lequel deux tueurs à gages se rencontrent dans une histoire de trahison et de révélations.",
    note: "★★★★☆"
  },
  {
    image: "images/eden.jpg",
    titre: "Eden",
    auteur: "Sophie Guerrive",
    editeur: "2042",
    resume: "Un roman graphique intimiste qui retrace une trajectoire familiale marquée par secrets et résilience.",
    note: "★★★☆☆"
  },
  {
    image: "images/lenfantome.jpg",
    titre: "L'Enfantôme",
    auteur: "Jim Bishop",
    editeur: "Glénat",
    resume: "Polar noir vénitien dans lequel deux tueurs à gages se rencontrent dans une histoire de trahison et de révélations.",
    note: "★★★★☆"
  },
  {
    image: "images/lenfer.jpg",
    titre: "L'Enfer",
    auteur: "Nicolas Badout",
    editeur: "Sarbacane",
    resume: "Polar noir vénitien dans lequel deux tueurs à gages se rencontrent dans une histoire de trahison et de révélations.",
    note: "★★★★☆"
  },
  {
    image: "images/epouvantail.jpg",
    titre: "Épouvantail",
    auteur: "Peleaz & Sénégas",
    editeur: "Dargaud",
    resume: "Un super‑vilain emblématique de DC Comics, à travers une BD sombre et atmosphérique sur la peur et la psychose.",
    note: "★★★★☆"
  },
  {
    image: "images/fantasy.jpg",
    titre: "Fantasy",
    auteur: "Yoann Kavege",
    editeur: "Bubble BD",
    resume: "Récit onirique et visuel, facéties poétiques sur la fluidité de la mémoire et du temps.",
    note: "★★★★☆"
  },
  {
    image: "images/flux.jpg",
    titre: "Flux",
    auteur: "Jop",
    editeur: "Ankama",
    resume: "Récit onirique et visuel, facéties poétiques sur la fluidité de la mémoire et du temps.",
    note: "★★★★☆"
  },
  {
    image: "images/le_grand_vide.jpg",
    titre: "Le_Grand_Vide",
    auteur: "Léa Murawiec",
    editeur: "Ankama",
    resume: "Récit onirique et visuel, facéties poétiques sur la fluidité de la mémoire et du temps.",
    note: "★★★★☆"
  },
  {
    image: "images/homicide.jpg",
    titre: "Homicide",
    auteur: "Philippe Squarzoni",
    editeur: "Delcourt",
    resume: "Polar intense et viscéral suivant deux flics pris dans une enquête obsédante et pleine de noirceur.",
    note: "★★★★☆"
  },
  {
    image: "images/happy_endings.jpg",
    titre: "Happy Endings",
    auteur: "Lucie Bryon",
    editeur: "Sarbacane",
    resume: "Une BD introspective sur la solitude, l’amour et l’espoir dans un univers urbain mélancolique.",
    note: "★★★☆☆"
  },
  {
    image: "images/ici.jpg",
    titre: "Ici",
    auteur: "Richard McGuire",
    editeur: "Éditions Cornélius",
    resume: "Œuvre innovante qui explore mille ans de l’histoire d’un lieu unique, à travers des variations temporelles graphiquement audacieuses.",
    note: "★★★★★"
  },
  {
    image: "images/koko_naime_pas_le_capitalisme.jpg",
    titre: "Koko n’aime pas le capitalisme",
    auteur: "tienstiens",
    editeur: "Bandes Détournées",
    resume: "Koko, petite fille curieuse, découvre les rouages du capitalisme et pose des questions poignantes et pleines d’humour.",
    note: "★★★★☆"
  },
  {
    image: "images/koko_naime_pas_le_capitalisme_a_la_plage.jpg",
    titre: "Koko n’aime pas le capitalisme à la plage",
    auteur: "tienstiens",
    editeur: "Bandes Détournées",
    resume: "Suite estivale des aventures de Koko, entre jeux, découverte du monde et réflexions sur la consommation.",
    note: "★★★★☆"
  },
    {
    image: "images/koma.jpg",
    titre: "Koma",
    auteur: "Pierre Wazem & Frederik Peeters",
    editeur: "Les Humanoïdes associés",
    resume: "Addidas, petite fille imaginative, tombe dans un monde onirique où elle explore la réalité et le rêve, guidée par une créature née de sa douleur.",
    note: "★★★★★"
  },
  {
    image: "images/kusama_polka_dot_queen.jpg",
    titre: "Kusama Polka Dot Queen",
    auteur: "Simon Elliott",
    editeur: "SelfMadeHero",
    resume: "Biographie graphique de Yayoi Kusama, de son enfance trouble au Japon à son ascension en tant qu’icône artistique, entre créativité et maladie mentale.",
    note: "★★★★☆"
  },
  {
    image: "images/krimi.jpg",
    titre: "Krimi",
    auteur: "Alex W. Inker",
    editeur: "Sarbacane",
    resume: "Biographie graphique de Yayoi Kusama, de son enfance trouble au Japon à son ascension en tant qu’icône artistique, entre créativité et maladie mentale.",
    note: "★★★★☆"
  },
  {
    image: "images/le_loup.jpg",
    titre: "Le Loup",
    auteur: "Jean‑Marc Rochette",
    editeur: "Casterman",
    resume: "Un berger et un loup s’affrontent dans les Écrins, dans un récit sur la vengeance, la rédemption et la cohabitation dans la nature sauvage.",
    note: "★★★★☆"
  },
  {
    image: "images/love_and_other_big_things.jpg",
    titre: "Love and other weird things",
    auteur: "Rich Sparks", 
    editeur: "", 
    resume: "", 
    note: ""
  },
  {
    image: "images/maus_i.jpg",
    titre: "Maus I",
    auteur: "Art Spiegelman",
    editeur: "Flammarion",
    resume: "Témoignage puissant de l’Holocauste, raconté à travers l’histoire du père de l’auteur, avec les Juifs en souris et les nazis en chats.",
    note: "★★★★★"
  },
  {
    image: "images/maus_ii.jpg",
    titre: "Maus II",
    auteur: "Art Spiegelman",
    editeur: "Flammarion",
    resume: "Suite poignante de Maus I, l’auteur poursuit l’histoire traumatisante de son père et explore l’impact psychologique de l’Holocauste.",
    note: "★★★★★"
  },
  {
    image: "images/moi_ce_que_jaime_cest_les_monstres.jpg",
    titre: "Moi ce que j’aime c’est les monstres",
    auteur: "Emil Ferris",
    editeur: "Fantagraphics / Rackham",
    resume: "Journal intime d’une fillette enquêtant sur la mort d’une voisine, mêlant créatures fantastiques et traumatisme, avec un graphisme unique à l’aquarelle.",
    note: "★★★★★"
  },
  {
    image: "images/mon_adolescence_trans.jpg",
    titre: "Mon adolescence trans",
    auteur: "Fumetti Brutti",
    editeur: "Massot",
    resume: "",
    note: ""
  },
  {
    image: "images/mon_ami_pierrot.jpg",
    titre: "Mon ami Pierrot",
    auteur: "Jim Bishop",
    editeur: "Glénat",
    resume: "Polar noir vénitien dans lequel deux tueurs à gages se rencontrent dans une histoire de trahison et de révélations.",
    note: "★★★★☆"
  },
  {
    image: "images/the_nice_house_on_the_lake_1.jpg",
    titre: "The Nice House on the Lake 1",
    auteur: "James Tynion IV & Alvaro Martinez Bueno",
    editeur: "Urban",
    resume: "",
    note: ""
  },
  {
    image: "images/the_nice_house_on_the_lake_2.jpg",
    titre: "The Nice House on the Lake 2",
    auteur: "James Tynion IV & Alvaro Martinez Bueno",
    editeur: "Urban",
    resume: "",
    note: ""
  },
  {
    image: "images/the_nice_house_by_the_sea.jpg",
    titre: "The Nice House by the Sea",
    auteur: "James Tynion IV & Alvaro Martinez Bueno",
    editeur: "Urban",
    resume: "",
    note: ""
  },
  {
    image: "images/la_nuit_des_lanternes.jpg",
    titre: "La nuit des lanternes",
    auteur: "Jean_Etienne",
    editeur: "Delcourt",
    resume: "",
    note: ""
  },
  {
    image: "images/the_number.jpg",
    titre: "The Number",
    auteur: "Thomas Ott",
    editeur: "L'Association",
    resume: "",
    note: ""
  },
  {
    image: "images/our_encounter_with_evil.jpg",
    titre: "Our Encounter with Evil",
    auteur: "Mike Mignola & Warwick Johnson-Cadwell",
    editeur: "",
    resume: "",
    note: ""
  },
  {
    image: "images/palestine.jpg",
    titre: "Palestine",
    auteur: "Joe Sacco",
    editeur: "Fantagraphics",
    resume: "Enquête journalistique et dessinée sur la vie en Cisjordanie et Gaza, réaliste et corrosive, mêlant témoignages et témoignages visuels.",
    note: "★★★★★"
  },
  {
    image: "images/petit.jpg",
    titre: "Petit - Les Ogres-Dieux",
    auteur: "Hubert & Gatignol",
    editeur: "Dargaud",
    resume: "",
    note: ""
  },
  {
    image: "images/pisse_meme.jpg",
    titre: "Pisse‑Mémé",
    auteur: "Cati Bour",
    editeur: "Dargaud",
    resume: "",
    note: ""
  },
  {
    image: "images/police_lunaire.jpg",
    titre: "Police Lunaire",
    auteur: "Tom Gauld",
    editeur: "2042",
    resume: "",
    note: ""
  },
  {
    image: "images/portrait_dun_buveur.jpg",
    titre: "Portrait d’un buveur",
    auteur: "Schrauwen Ruppert & Mulot",
    editeur: "Aire-Libre",
    resume: "",
    note: ""
  },
  {
    image: "images/renee_aux_bois_dormants.jpg",
    titre: "René.e aux bois dormant",
    auteur: "Elene Usdin",
    editeur: "Sarbacane",
    resume: "Chant poétique et tendre sur la vie, la famille et les petits riens qui composent le quotidien.",
    note: "★★★☆☆"
  },
  {
    image: "images/rien_a_feutre.jpg",
    titre: "Rien à feutre",
    auteur: "Camille Blandin",
    editeur: "Lapin",
    resume: "Chant poétique et tendre sur la vie, la famille et les petits riens qui composent le quotidien.",
    note: "★★★☆☆"
  },
    {
    image: "images/le_roi_meduse.jpg",
    titre: "Le Roi Méduse I",
    auteur: "Brecht Evens",
    editeur: "Actes Sud BD",
    resume: "Uchronie mêlant mythologie et politique européenne, centrée sur le roi méduse et ses réflexions sur le pouvoir et l’injustice.",
    note: "★★★★☆"
  },
  {
    image: "images/salon_de_beaute.jpg",
    titre: "Salon de beauté",
    auteur: "Quentin Zuttion",
    editeur: "Dupuis",
    resume: "Portrait intimiste de copropriétaires d’un salon dans l’Italie contemporaine, à travers rires, confidences et coups de crayon autobiographiques.",
    note: "★★★★☆"
  },
  {
    image: "images/sans_panique.jpg",
    titre: "Sans Panique",
    auteur: "Coline Hégron",
    editeur: "Delcourt & Mirage",
    resume: "Recueil d’histoires autour de l’anxiété et des peurs quotidiennes, mêlant humour et autodérision.",
    note: "★★★☆☆"
  },
  {
    image: "images/sapiens_i.jpg",
    titre: "Sapiens I",
    auteur: "Yuval Noah Harari",
    editeur: "Albin Michel",
    resume: "Adaptation graphique du best-seller historique. Exploration critique de l’évolution humaine, de la préhistoire à nos jours.",
    note: "★★★★☆"
  },
  {
    image: "images/the_smartest_kid.jpg",
    titre: "The smartest kid",
    auteur: "Jimmy Corrigan",
    editeur: "Chronicle Books",
    resume: "Album humoristique et tendre sur un homme prétendument ‘le plus intelligent’, confronté aux absurdités de la vie.",
    note: "★★★☆☆"
  },
  {
    image: "images/sous_les_galets_la_plage.jpg",
    titre: "Sous les galets la plage",
    auteur: "Pascal Rabaté",
    editeur: "Rue de Sèvre",
    resume: "Album humoristique et tendre sur un homme prétendument ‘le plus intelligent’, confronté aux absurdités de la vie.",
    note: "★★★☆☆"
  },
  {
    image: "images/vers_la_ville.jpg",
    titre: "Vers la ville",
    auteur: "Tom Gauld",
    editeur: "2042",
    resume: "Récit en images de la vie urbaine japonaise, oscillant entre intimité quotidienne et instants suspendus.",
    note: "★★★★☆"
  },
  {
    image: "images/voie_de_garage.jpg",
    titre: "Voie de Garage",
    auteur: "Arnaud Nebbache & Sophie Adriansen",
    editeur: "Dargaud",
    resume: "Un enquêteur privé dans les bas-fonds urbains, mêlant polar noir, violence et poésie de la vie d’ombre.",
    note: "★★★★☆"
  },
  {
    image: "images/uk_in_a_bad_way.jpg",
    titre: "UK in a bad way",
    auteur: "James Harvey",
    editeur: "Sarbacane",
    resume: "Un récit émouvant sur le deuil, la perte d’un proche et le processus de guérison intérieure.",
    note: "★★★★☆"
  },
  {
    image: "images/where_the_body_was.jpg",
    titre: "Where the Body Was",
    auteur: "Ed Brubaker & Sean Phillips",
    editeur: "First Second",
    resume: "Un récit émouvant sur le deuil, la perte d’un proche et le processus de guérison intérieure.",
    note: "★★★★☆"
  },
];
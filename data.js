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
    resume: "Un étudiant en architecture devient obsédé par des thermes suisses où l’étrange, le mystique et le béton coulé se mélangent un peu trop bien.",
    signe: true,
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
    resume: "Yari tombe amoureuse d’un mec déjà en couple… avec deux autres filles : bienvenue dans les joies du polyamour version 2020.",
    note: "★★★★☆"
  },
  {
    image: "images/au_dedans.jpg",
    titre: "Au dedans",
    auteur: "Will McPhail",
    editeur: "404 Editions",
    resume: "Nick, illustrateur trentenaire, enchaîne les cafés et les bars sans jamais réussir à se connecter vraiment aux gens… jusqu’à ce qu’une rencontre inattendue ébranle sa bulle et lui offre un aperçu vibrant de l’authenticité humaine.",
    note: "★★★★☆"
  },
  {
    image: "images/ballades.jpg",
    titre: "Ballades",
    auteur: "Camille Potte",
    editeur: "Atrabile",
    resume: "Un prince-grenouille, une chevalière paumée et une salamandre camée partent sauver une princesse dans une épopée aussi débile qu’héroïque.",
    note: "★★★★☆"
  },
  {
    image: "images/bebe_fille.jpg",
    titre: "Bébé Fille",
    auteur: "Élisa Marraudino",
    editeur: "Même pas mal",
    resume: "Dans une famille italo-vosgienne des années 2000, une fillette raconte avec humour et tendresse ses souvenirs d’enfance et les petits chocs culturels qui l’ont marquée.",
    note: "★★★★☆"
  },
  {
    image: "images/bebe_fille_en_remet_une_couche.jpg",
    titre: "Bébé Fille, en remet une couche",
    auteur: "Élisa Marraudino",
    editeur: "Même pas mal",
    resume: "Une chronique drôle et touchante du passage à l’âge adulte, entre souvenirs tendres, maladresses du quotidien et petites secousses de la vie.",
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
    resume: "Sous ses airs de parfaite petite ourse quincaillière, Samantha cache un secret sanglant… et l’arrivée d’un autre tueur en série menace de gâcher sa couverture bien rangée.",
    note: ""
  },
  {
    image: "images/le_bestiaire_du_crepuscule.jpg",
    titre: "Le Bestiaire du Crépuscule",
    auteur: "Daria Schmitt",
    editeur: "Aire Libre",
    resume: "Providence, gardien d’un parc qui abrite des créatures lovecraftiennes hallucinées que lui seul voit, se bat contre une directrice startupeuse – et un livre mystérieux sortant du lac – pour empêcher son jardin de devenir une startup infernale.",
    note: ""
  },
  {
    image: "images/big_bang_cunni.jpg",
    titre: "Big Bang Cunni",
    auteur: "Chloé Wary",
    editeur: "BD Cul",
    resume: "Elle plaque tout, découvre les joies du cunnilingus et part en quête de jouissance cosmique à dos de sextoy géant — parce que l’orgasme, c’est la vie.",
    note: ""
  },
  {
    image: "images/black_hole.jpg",
    titre: "Black hole",
    auteur: "Charles Burns",
    editeur: "Delcourt",
    resume: "Des ados des années 70 chopent une MST chelou qui leur file des mutations bizarres, entre queue de lézard et peau qui mue, pendant que leurs hormones et angoisses explosent comme leurs boutons.",
    note: ""
  },
  {
    image: "images/blast.jpg",
    titre: "Blast",
    auteur: "Manu Larcenet",
    editeur: "Dargaud",
    resume: "Un colosse paumé raconte aux flics sa cavale hallucinée à la recherche d’un blast, cette sensation d’extase pure, entre déchéance crasse et illuminations mystiques.",
    note: ""
  },
  {
    image: "images/boule_de_feu.jpg",
    titre: "Boule de feu",
    auteur: "Anouk Ricard & Etienne Chaize",
    editeur: "2024",
    resume: "Un type maladroit doit traverser un portail inter‑mondes en compagnie d’un petit chien pas très motivé pour ramener un mage exilé, avant que la « boule de feu » protectrice de son village ne s’éteigne et que les envahisseurs ne débarquent.",
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
    resume: "Constantin Brancusi affronte les douaniers et les juges américains pour prouver que son 'Oiseau dans l’espace' est une œuvre d’art et non un vulgaire bout de métal, dans un procès ubuesque où la modernité se heurte au bon sens administratif.",
    signe: true,
    note: ""
  },
  {
    image: "images/carbone_et_silicium.jpg",
    titre: "Carbone & Silicium",
    auteur: "Mathieu Bablet",
    editeur: "Ankama & Label 619",
    resume: "Carbone et Silicium, deux androïdes créés pour aider l’humanité, s’échappent du labo pour vivre mille vies sur une Terre en déclin, entre utopies brisées, amours impossibles et quête d’humanité éternelle.",
    note: ""
  },
  {
    image: "images/le_cas_david_zimmerman.jpg",
    titre: "Le cas David Zimmerman",
    auteur: "Lucas Harari & Arthur Harari",
    editeur: "Sarbacane",
    resume: "David Zimmerman, photographe un peu largué, se réveille un matin dans le corps d’une inconnue et tente de comprendre ce switch improbable, aidé (ou pas) par son amie Harry, aussi envahissante qu’intrépide.",
    signe: true,
    note: ""
  },
  {
    image: "images/cauchemar.jpg",
    titre: "Cauchemar",
    auteur: "Pierre Ferrero",
    editeur: "L'employé du moi",
    resume: "Pétain revient d’entre les morts, fusionne avec le président en place et plonge la France dans un délire autoritaire peuplé de flics-phacochères, pendant qu’une résistance déjantée tente de remettre un peu d’absurde dans le cauchemar.",
    note: ""
  },
  {
    image: "images/ces_jours_qui_disparaissent.jpg",
    titre: "Ces jours qui disparaissent",
    auteur: "Timothé Le Boucher",
    editeur: "Glénat",
    resume: "Lubin Maréchal, acrobate rêveur, découvre qu’une autre version de lui prend sa vie un jour sur deux, le forçant à dialoguer avec son alter ego sans oublier qu’un jour il risque bien de disparaître…",
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
    resume: "Trois voisins paumés vivent un été sous les toits entre crise existentielle, gratouilles cheloues et pièce secrète flippante — bienvenue dans la coloc la moins sereine de Paris.",
    note: ""
  },
    {
    image: "images/colorado_train.jpg",
    titre: "Colorado Train",
    auteur: "Alex W. Inker",
    editeur: "Sarbacane",
    resume: "Dans un petit trou du Colorado des années 1990, des ados skateurs paumés traînent entre rêves rebelles et décor post-minier… jusqu’à ce qu’un tueur au style Wendigo vienne rendre leurs virées en skate mortellement sérieuses.",
    note: "★★★★☆"
  },
    {
    image: "images/cometa.jpg",
    titre: "Cometa",
    auteur: "Elie Huault",
    editeur: "Les Humanoïdes Associées",
    resume: "Un spationaute muet explore une planète étrange pour percer un mystère, dans un récit silencieux et poétique aux paysages saisissants et en constante mutation.",
    signe: true,
    note: "★★★★☆"
  },
  {
    image: "images/la_couleur_des_choses.jpg",
    titre: "La couleur des choses",
    auteur: "Martin Panchaud",
    editeur: "Cà et Là",
    resume: "Un ado anglais rondouillard mise secrètement tout l’argent de son père sur un cheval, gagne un pactole, mais découvre que sa mère est dans le coma et son père introuvable — il se lance alors dans une enquête improbable façon road‑trip graphique où tous les personnages sont des cercles colorés !",
    note: "★★★★☆"
  },
  {
    image: "images/cornelius.jpg",
    titre: "Cornelius, la vie pleine de joie du triste chien",
    auteur: "Marc Torices",
    editeur: "Actes Sud BD",
    resume: "Cornelius, un chien maladroit, déprimé et peu courageux travaillant dans un centre sportif, voit sa vie (et son cœur) partir en vrille lorsqu’il devient suspect d’un kidnapping qu’il peine à raconter — une aventure à mille visages graphiques qui transforme le toutou-looser en star involontaire d’un thriller psychologique barré.",
    note: "★★★☆☆"
  },
  {
    image: "images/croissant_amoureux.jpg",
    titre: "Croissant Amoureux",
    auteur: "Yasutoshi Kuokami",
    editeur: "The Hoochie Coochie",
    resume: "Kodai, lycéen geek de 2050, tombe complètement sous le charme de Bagavathy, la fille indienne transfusée dans son lycée, et fonce dans des défis fous (drone‑chat, concours d’avion) avec son ami Shōkō pour la conquérir…",
    signe: true,
    note: "★★★☆☆"
  },
  {
    image: "images/crossed_si_tu_voyais_ca.jpg",
    titre: "Crossed : Si tu voyais ça",
    auteur: "Simon Spurrier & Javier Barreno",
    editeur: "Panini Comics",
    resume: "Sur une île écossaise post-apocalyptique, Shaky et son groupe survivent face à des infectés polymorphes en croix… jusqu’à l’arrivée d’étranges naufragés marins qui font basculer le camp entre parano, manipulations et explosions de sang.",
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
    image: "images/cyberpunk_trauma_team.jpg",
    titre: "CyberPunk 2077 - Trauma Team",
    auteur: "Cullen Bunn & Miguel Valderrama",
    editeur: "Panini",
    resume: "Une secouriste armée doit extraire un client blessé dans un immeuble infesté de gangs, tout en affrontant ses propres traumatismes liés à une mission précédente.",
    note: ""
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
    resume: "Eustis, satyre ivrogne et fauché, part en virée mystico-délirante avec un fantôme et un prof bègue pour sauver un dieu paumé des Enfers avant la prochaine pleine lune.",
    note: "★★★★☆"
  },
  {
    image: "images/le_discours_de_la_panthere.jpg",
    titre: "Le Discours de la panthère",
    auteur: "Jérémie Moreau",
    editeur: "2024",
    resume: "Une panthère croise des bêtes aussi paumées que poétiques dans une série de fables animales où la sagesse flirte avec l’absurde.",
    note: "★★★★☆"
  },
  {
    image: "images/doggy_bags_01.jpg",
    titre: "Doggy Bags #01",
    auteur: "Run / Maudoux / Singelin",
    editeur: "Ankama & Label 619",
    resume: "Une fille traquée par un gang de bikers-loups-garous. / Une mère en fuite avec son bébé après un affrontement mortel. / Un braquage tourne au carnage dans le désert, laissant un braqueur menotté au cadavre d’un flic.",
    note: "★★★☆☆"
  },
  {
    image: "images/doggy_bags_02.jpg",
    titre: "Doggy Bags #02",
    auteur: "Run & Bablet / Run & Singelin / Kieran & Ozanam",
    editeur: "Ankama & Label 619",
    resume: "Un pompiste raconte sa folie meurtrière contre les bimbos. / Des rednecks affrontent un Chupacabra carnivore. / Un vol express infernal nommé Vol Express 666.",
    note: "★★★☆☆"
  },
  {
    image: "images/doggy_bags_05.jpg",
    titre: "Doggy Bags #05",
    auteur: "Ducoudray & Neyef / Kartinka / El Puerto & Tomeus",
    editeur: "Ankama & Label 619",
    resume: "Un parc d’attractions devient une zone de chasse humaine où des zombies sont traqués pour le divertissement. / Un ancien militaire creuse un trou dans son jardin, déclenchant une suite d’événements macabres et incontrôlables. / Un crocodile géant sème la terreur dans les égouts de Miami après avoir muté dans l’obscurité.",
    note: "★★★☆☆"
  },
  {
    image: "images/doggy_bags_10.jpg",
    titre: "Doggy Bags #10",
    auteur: "Mangin & Rouzière / Mojo & Hutt / Sztybor & Shavrin",
    editeur: "Ankama & Label 619",
    resume: "Un tueur à gages accumule les coups du sort lors d’un contrat qui dérape. / À Détroit, un mécanicien surdoué glisse peu à peu dans la criminalité. / Un artiste obsédé par le corps pousse sa démarche jusqu’à l’horreur pure.",
    note: "★★★☆☆"
  },
  {
    image: "images/doggy_bags_11.jpg",
    titre: "Doggy Bags #11",
    auteur: "Hasteda & Pagani / Mangin & Sécheresse / Hasteda & Chesnot",
    editeur: "Ankama & Label 619",
    resume: "Une prison isolée devient le théâtre d’un rituel vaudou incontrôlable. / Un faux prophète mène ses fidèles dans une quête mystique aussi sanglante que démente. / Un groupe de touristes en Afrique du Sud se retrouve coincé dans une cage à requins au large, sans secours possible.",
    note: "★★★☆☆"
  },
  {
    image: "images/doggy_bags_12.jpg",
    titre: "Doggy Bags #12",
    auteur: "Run & Singelin / Kaneko / Bordier & Sourya",
    editeur: "Ankama & Label 619",
    resume: "Une lycéenne subit un quotidien oppressant, jusqu’à ce que la violence explose. / Un tueur français débarque au Japon pour solder une vieille dette. / Dans un Japon ravagé, un samouraï solitaire affronte des monstres mutants.",
    note: "★★★☆☆"
  },
  {
    image: "images/doggy_bags_13.jpg",
    titre: "Doggy Bags #13",
    auteur: "Run / Run & Mojo & Hutt / Calla & Rosset",
    editeur: "Ankama & Label 619",
    resume: "Un groupe de citoyens décide de faire justice lui-même face à des policiers intouchables. / Des adolescents s'organisent pour traquer un tueur déguisé en clown qui terrorise leur quartier. / Un homme déguisé en mascotte commet un attentat à Times Square pour dénoncer une société décadente.",
    note: "★★★☆☆"
  },
  {
    image: "images/eden.jpg",
    titre: "Eden",
    auteur: "Sophie Guerrive",
    editeur: "2042",
    resume: "Tulipe, ours-moine rêveur, quitte son monastère pour chercher l’Eden et tombe sur des sages improbables, des cailloux bavards et pas mal de doutes existentiels.",
    note: "★★★☆☆"
  },
  {
    image: "images/lenfantome.jpg",
    titre: "L'Enfantôme",
    auteur: "Jim Bishop",
    editeur: "Glénat",
    resume: "Jacques et Mims doivent « réussir ou mourir », mais quand leurs parents mutent en monstres flippants, le cauchemar scolaire prend une tournure bien plus trash.",
    signe: true,
    note: "★★★★☆"
  },
  {
    image: "images/lenfer.jpg",
    titre: "L'Enfer",
    auteur: "Nicolas Badout",
    editeur: "Sarbacane",
    resume: "Marcel, patron d’hôtel jaloux, bascule en plein délire paranoïaque en croyant qu’Odette le trompe, jusqu’à confondre fantasmes et réalité dans un trip visuel vertigineux.",
    signe: true,
    note: "★★★★☆"
  },
  {
    image: "images/epouvantail.jpg",
    titre: "Épouvantail",
    auteur: "Peleaz & Sénégas",
    editeur: "Dargaud",
    resume: "Lily se lie d’amitié avec un épouvantail vulgaire et flippant, qui semble en savoir long sur un drame enfoui sous les blés.",
    signe: true,
    note: "★★★★☆"
  },
  {
    image: "images/fantasy.jpg",
    titre: "Fantasy",
    auteur: "Yoann Kavege",
    editeur: "Bubble BD",
    resume: "Deux héroïnes au destin croisé – une princesse en mission vengeresse et une géante qui doit attendre 1 000 ans pour aimer – racontées dans un seul album que tu lis dans les deux sens : du côté vengeance ou du côté cœur, au choix !",
    signe: true,
    note: "★★★★☆"
  },
  {
    image: "images/fables_psychiatriques.jpg",
    titre: "Fables Psychiatriques",
    auteur: "Darryl Cunningham",
    editeur: "Cà et Là",
    resume: "Une série de récits poignants et documentés dévoile le quotidien de personnes atteintes de troubles mentaux, pour déconstruire les peurs et idées reçues.",
    note: "★★★★☆"
  },
  {
    image: "images/flux.jpg",
    titre: "Flux",
    auteur: "Jop",
    editeur: "Ankama",
    resume: "Une scientifique et un poète se réveillent transformés après une tempête magnétique et partent en quête de sens dans un monde devenu marécage.",
    signe: true,
    note: "★★★★☆"
  },
  {
    image: "images/gari_gari.jpg",
    titre: "Gari Gari",
    auteur: "Hugues Micol",
    editeur: "Cornélius",
    resume: "Dans un Japon médiéval fantasmé, un jeune ninja muet traverse un monde peuplé de créatures étranges pour accomplir une mission périlleuse, dans un récit entièrement visuel et envoûtant.",
    signe: true,
    note: "★★★★☆"
  },
  {
    image: "images/le_grand_vide.jpg",
    titre: "Le Grand Vide",
    auteur: "Léa Murawiec",
    editeur: "Ankama",
    resume: "Manel Naher vit dans une ville où ta survie dépend de combien de gens pensent à toi… jusqu’à ce qu’un homonyme ultra‑célèbre lui vole la vedette et menace de la faire disparaître dans le Grand Vide.",
    note: "★★★★☆"
  },
  {
    image: "images/hellboy.jpg",
    titre: "Hellboy",
    auteur: "Mike Mignola",
    editeur: "Delcourt",
    resume: "Un démon élevé par les Alliés enquête sur la mort de son mentor et découvre un complot occulte mené par Raspoutine pour déclencher l’apocalypse.",
    note: "★★★★☆"
  },
  {
    image: "images/homicide.jpg",
    titre: "Homicide",
    auteur: "Philippe Squarzoni",
    editeur: "Delcourt",
    resume: "À Baltimore en 1988, des flics désabusés enchaînent les meurtres sans piste, jonglant entre paperasse, cadavres et humour noir pour ne pas sombrer.",
    note: "★★★★☆"
  },
  {
    image: "images/lhomme_a_la_tete_de_vis.jpg",
    titre: "L'Homme à la tête de vis",
    auteur: "Mike Mignola",
    editeur: "Delcourt",
    resume: "Un agent à tête de vis affronte un empereur zombie dans des récits absurdes, drôles et fantastiques.",
    note: "★★★★☆"
  },
  {
    image: "images/happy_endings.jpg",
    titre: "Happy Endings",
    auteur: "Lucie Bryon",
    editeur: "Sarbacane",
    resume: "Trois histoires douces et queer où l’amour surgit entre un dessin, une glace et quelques larmes bien placées.",
    note: "★★★☆☆"
  },
  {
    image: "images/huis_clos.jpg",
    titre: "Huis Clos",
    auteur: "Naomi Reboul",
    editeur: "La Boîte à Bulles",
    resume: "En plein désert australien, un photographe tourmenté vit un face-à-face intense avec un compagnon aussi lumineux qu’instable.",
    note: "★★★☆☆"
  },
  {
    image: "images/ici.jpg",
    titre: "Ici",
    auteur: "Richard McGuire",
    editeur: "Éditions Cornélius",
    resume: "Une pièce immobile à travers des milliers d’années, où défilent vies, morts, dinosaures et canapés dans un ballet spatio-temporel vertigineux.",
    note: "★★★★★"
  },
  {
    image: "images/jaune_1.jpg",
    titre: "Jaune #01",
    auteur: "Run & Rours",
    editeur: "Rue de Sèvres & Label 619",
    resume: "Lors d’un camp de vacances en montagne, une légende urbaine prend vie quand une blague tourne mal, déclenchant une nuit sanglante sous le signe d’un mystérieux tueur en ciré jaune.",
    note: "★★★☆☆"
  },
  {
    image: "images/je_te_lavais_bien_dit.jpg",
    titre: "Je te l'avais bien dit",
    auteur: "Candela Sierra",
    editeur: "Atrabile",
    resume: "À travers des saynètes grinçantes et pleines d’ironie, se dévoile l’absurdité des relations modernes, entre malentendus, hypocrisie et solitude ordinaire.",
    note: "★★★★★"
  },
  {
    image: "images/koko_naime_pas_le_capitalisme.jpg",
    titre: "Koko n’aime pas le capitalisme",
    auteur: "tienstiens",
    editeur: "Bandes Détournées",
    resume: "Koko, gorille anar et grognon, balance des baffes au capitalisme dans des strips aussi absurdes que lucides.",
    signe: true,
    note: "★★★★☆"
  },
  {
    image: "images/koko_naime_pas_le_capitalisme_a_la_plage.jpg",
    titre: "Koko n’aime pas le capitalisme à la plage",
    auteur: "tienstiens",
    editeur: "Bandes Détournées",
    resume: "Koko et son poulpe révolutionnaire cassent le capitalisme entre deux baignades absurdes et trois punchlines marxistes.",
    signe: true,
    note: "★★★★☆"
  },
    {
    image: "images/koma.jpg",
    titre: "Koma",
    auteur: "Pierre Wazem & Frederik Peeters",
    editeur: "Les Humanoïdes associés",
    resume: "Addidas, petite ramoneuse curieuse, découvre un monde souterrain peuplé de monstres et de mystères qui vont chambouler sa vie bien plus qu’une cheminée bouchée.",
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
    resume: "À Berlin, un flic brut de décoffrage embarque Fritz Lang sur les traces d’un tueur, entre bière, nazis et ciné noir en devenir.",
    signe: true,
    note: "★★★★☆"
  },  
  {
    image: "images/lettres_perdues.jpg",
    titre: "Lettres Perdues",
    auteur: "Jim Bishop",
    editeur: "Glénat",
    resume: "Un garçon part en ville chercher une lettre de sa mère disparue et se retrouve entraîné dans une aventure étrange et bouleversante.",
    note: "★★★☆☆"
  },
  {
    image: "images/loba_loca.jpg",
    titre: "Lob Loca",
    auteur: "Run & Singelin",
    editeur: "Ankama & Label 619",
    resume: "Guadalupe, une ado rebelle, part sur les traces de sa mère catcheuse disparue et endosse à son tour l’identité de Loba Loca.",
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
    resume: "Une série de strips absurdes et mordants où un lapin qui fait de l’auto-stop peut finir dans un duel à couteaux — un concentré de sarcasme doux-amer, de surréalisme et de situations improbables.", 
    note: ""
  },
  {
    image: "images/low_reader_01.jpg",
    titre: "Low Reader #01",
    auteur: "Mud & Ghisalberti / Run & Singelin / Maudoux",
    editeur: "Rue de Sèvres & Label 619",
    resume: "Une jeune femme fuit une bande de motards lycanthropes à travers les bois, traquée sans relâche. / Une mère jeune avec son bébé lutte seule contre des tueurs yakuzas dans un appartement sur le point de basculer. / Un policier poursuit un criminel en pleine chaleur désertique, avec une traque qui tourne au carnage.",
    note: "★★★☆☆"
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
    image: "images/meta_muta.jpg",
    titre: "Meta Muta",
    auteur: "Jérémie Labsolu",
    editeur: "Rue de Sèvres & Label 619",
    resume: "Entre deux tomes de Mutafukaz, Angelino vit une expérience hallucinée entre vie et mort, plongé dans un cauchemar psychédélique et introspectif.",
    note: "★★★★☆"
  },
  {
    image: "images/les_meteores.jpg",
    titre: "Les Météores",
    auteur: "Tommy Redolfi & JC Deveney",
    editeur: "Delcourt",
    resume: "Alors qu’une météorite fonce vers la Terre, une poignée de personnages ordinaires vivent leurs drames, espoirs et rencontres dans une atmosphère suspendue, douce et mélancolique.",
    note: "★★★★★"
  },
  {
    image: "images/minuscule_folle_sauvage.jpg",
    titre: "Minuscule Folle Sauvage",
    auteur: "Pauline de Tarragon",
    editeur: "La ville brule",
    resume: "Alors qu’une météorite fonce vers la Terre, une poignée de personnages ordinaires vivent leurs drames, espoirs et rencontres dans une atmosphère suspendue, douce et mélancolique.",
    note: "★★★★★"
  },
  {
    image: "images/moi_ce_que_jaime_cest_les_monstres.jpg",
    titre: "Moi ce que j’aime c’est les monstres",
    auteur: "Emil Ferris",
    editeur: "Fantagraphics / Rackham",
    resume: "Karen, gamine fan de monstres et de BD, enquête sur la mort louche de sa voisine dans un Chicago des années 60 plein de secrets, de freaks et de pages griffonnées comme un vieux cahier d’école.",
    note: "★★★★★"
  },
  {
    image: "images/mon_adolescence_trans.jpg",
    titre: "Mon adolescence trans",
    auteur: "Fumetti Brutti",
    editeur: "Massot",
    resume: "Yole, adolescente en France, navigue entre son bac, les attentes familiales et l’éveil de sa transidentité dans un récit autobiographique puissant où l’humour léger éclaire les zones d’ombre d’un parcours intime. ",
    note: ""
  },
  {
    image: "images/mon_ami_pierrot.jpg",
    titre: "Mon ami Pierrot",
    auteur: "Jim Bishop",
    editeur: "Glénat",
    resume: "Cléa croise la route de Pierrot, magicien mystérieux, et s’embarque dans une aventure en forêt où les contes de fées ne sont pas toujours ce qu’ils semblent.",
    signe: true,
    note: "★★★★☆"
  },
  {
    image: "images/la_montagne_entre_nous.jpg",
    titre: "La Montagne entre nous",
    auteur: "Marcel Shorjian & Jeanne Sterkers",
    editeur: "Sarbacane",
    resume: "Une femme revient dans son village natal pour un enterrement, ravivant les blessures et non-dits d’une amitié abandonnée, entre regrets et possible réconciliation.",
    signe: true,
    note: "★★★★☆"
  },
  {
    image: "images/mutafukaz_0.jpg",
    titre: "Mutafukaz Tome 0",
    auteur: "Run",
    editeur: "Ankama & Label 619",
    resume: "Un prologue lunaire où l’on découvre les origines étranges des Macho suite à un contact extraterrestre, jetant les bases d’une invasion cosmique à venir.",
    note: "★★★★☆"
  },
  {
    image: "images/mutafukaz_1.jpg",
    titre: "Mutafukaz Tome 1",
    auteur: "Run",
    editeur: "Ankama & Label 619",
    resume: "Angelino, loser de Dark Meat City, percute un scooter et se met à voir des ombres. Lui et son pote Vinz plongent dans un engrenage paranoïaque : poursuites, hommes en noir, hallucinations, et fuite vers le quartier de Palm Hill.",
    note: "★★★★☆"
  },
  {
    image: "images/mutafukaz_2.jpg",
    titre: "Mutafukaz Tome 2",
    auteur: "Run",
    editeur: "Ankama & Label 619",
    resume: "Angelino et Vinz sont désormais fugitifs : traqués par des agents mystérieux et confrontés à des monstres étranges. Tension, shoot-up urbains à Little Tokyo, road‑trip dans le désert : l’absurde prend le dessus.",
    note: "★★★★☆"
  },
  {
    image: "images/mutafukaz_3.jpg",
    titre: "Mutafukaz Tome 3",
    auteur: "Run",
    editeur: "Ankama & Label 619",
    resume: "Le voile se lève peu à peu sur les origines d’Angelino et les alliances occultes. Gang wars, implications politiques et extraterrestres se mêlent dans une montée en intensité.",
    note: "★★★★☆"
  },
  {
    image: "images/mutafukaz_4.jpg",
    titre: "Mutafukaz Tome 4",
    auteur: "Run",
    editeur: "Ankama & Label 619",
    resume: "La cité est en guerre : invasion des Macho, affrontements sanglants. Angelino, Vinz et leurs alliés retournent à Palm Hill pour déterrer des secrets et déclencher un bouleversement.",
    note: "★★★★☆"
  },
  {
    image: "images/mutafukaz_5.jpg",
    titre: "Mutafukaz Tome 5",
    auteur: "Run",
    editeur: "Ankama & Label 619",
    resume: "Climax apocalyptique : le conflit Macho‑CIA atteint son paroxysme. Trahisons, assassinat politique, effondrement d’alliances, révélations sur le rôle d’Angelino dans la chute annoncée de World Power.",
    note: "★★★★☆"
  },
  {
    image: "images/mutafukaz_2_1.jpg",
    titre: "Mutafukaz 2 Tome 1",
    auteur: "Run",
    editeur: "Rue de Sèvres & Label 619",
    resume: "Angelino et Vinz se réfugient à Palavas pour échapper aux MIB, mais leur tranquillité est brisée par l’arrivée d’une mystérieuse organisation française.",
    note: "★★★★☆"
  },
  {
    image: "images/mutafukaz_2_2.jpg",
    titre: "Mutafukaz 2 Tome 2",
    auteur: "Run",
    editeur: "Rue de Sèvres & Label 619",
    resume: "Rattrapé par son passé, Angelino découvre la vérité sur ses origines et se retrouve pris entre plusieurs groupes prêts à tout pour exploiter ses pouvoirs.",
    note: "★★★★☆"
  },
  {
    image: "images/mutafukaz_1886.jpg",
    titre: "Mutafukaz 1886",
    auteur: "Run & Hutt",
    editeur: "Ankama & Label 619",
    resume: "Dans une Amérique uchronique de 1886, un ancêtre d’Angelino se retrouve au cœur d’un complot mêlant créatures occultes, aliens et luttes de pouvoir.",
    note: "★★★★☆"
  },
  {
    image: "images/the_nice_house_on_the_lake_1.jpg",
    titre: "The Nice House on the Lake 1",
    auteur: "James Tynion IV & Alvaro Martinez Bueno",
    editeur: "Urban",
    resume: "Un groupe d’amis se retrouve dans une maison de rêve au bord d’un lac, invités par un mystérieux Walter… mais le monde extérieur bascule dans l’horreur, et le paradis se transforme en piège psychologique glaçant.",
    note: ""
  },
  {
    image: "images/the_nice_house_on_the_lake_2.jpg",
    titre: "The Nice House on the Lake 2",
    auteur: "James Tynion IV & Alvaro Martinez Bueno",
    editeur: "Urban",
    resume: "Alors que les survivants tentent de comprendre les règles tordues de la maison, les souvenirs s'effritent, les tensions montent… et Walter, toujours aussi insaisissable, semble tirer les ficelles d’un jeu bien plus vaste qu’eux.",
    note: ""
  },
  {
    image: "images/the_nice_house_by_the_sea.jpg",
    titre: "The Nice House by the Sea",
    auteur: "James Tynion IV & Alvaro Martinez Bueno",
    editeur: "Urban",
    resume: "Des invités triés sur le volet séjournent dans une maison luxueuse en bord de mer… mais quelque chose cloche derrière les murs parfaits.",
    signe: true,
    note: ""
  },
  {
    image: "images/la_nuit_des_lanternes.jpg",
    titre: "La nuit des lanternes",
    auteur: "Jean-Etienne",
    editeur: "Delcourt",
    resume: "Éloane revient sur son île natale pour un festival de lanternes… mais casse la sienne, réveille un monstre ancestral et déclenche un folklore de vengeance et de secrets bien enfouis.",
    signe: true,
    note: ""
  },
  {
    image: "images/the_number.jpg",
    titre: "The Number",
    auteur: "Thomas Ott",
    editeur: "L'Association",
    resume: "Un homme solitaire découvre un mystérieux numéro et se retrouve happé dans un monde muet, sombre et troublant.",
    note: ""
  },
  {
    image: "images/un_ocean_damour.jpg",
    titre: "Un Océan d'amour",
    auteur: "Grégory Pannacione & Wilfrid Lupano",
    editeur: "Delcourt",
    resume: "Un vieux marin breton est avalé par un chalutier industriel pendant que sa femme, bigoudène coriace, parcourt le monde en vadrouille pour le retrouver, entre mouettes militantes et pirates loufoques.",
    note: "★★★★☆"
  },
  {
    image: "images/on_est_en_finale.jpg",
    titre: "On est en finale",
    auteur: "Camille Blandin",
    editeur: "Misma",
    resume: "Une bande de bras cassés arrive en finale départementale de basket : malgré leur inexpérience, leurs dérapages verbaux font plus de spectacle que leurs paniers — un match large en bouffonnerie mais serré en émotion humaine. ",
    note: "★★★★☆"
  },
  {
    image: "images/our_encounter_with_evil.jpg",
    titre: "Our Encounter with Evil",
    auteur: "Mike Mignola & Warwick Johnson-Cadwell",
    editeur: "",
    resume: "Trois chasseurs de monstres excentriques traquent vampires et créatures maudites dans un univers gothique délicieusement décalé et plein de panache.",
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
    resume: "Un ogre minuscule au milieu de géants cruels tente de trouver sa place entre barbarie et humanité.",
    note: ""
  },
  {
    image: "images/pillules_bleues.jpg",
    titre: "Pillules Bleues",
    auteur: "Fredrik Peeters",
    editeur: "Atrabile",
    resume: "Frederik tombe amoureux de Cati, mère séropositive, et explore avec elle l’amour, la maladie et la paternité dans un récit autobiographique puissant porté par une narration sensible et pleine d’espoir.",
    note: "★★★☆☆"
  },
  {
    image: "images/pisse_meme.jpg",
    titre: "Pisse‑Mémé",
    auteur: "Cati Bour",
    editeur: "Dargaud",
    resume: "Quatre amies ouvrent un bar associatif bien-être et galèrent joyeusement entre tisanes, rêves et coups durs.",
    note: ""
  },
  {
    image: "images/police_lunaire.jpg",
    titre: "Police Lunaire",
    auteur: "Tom Gauld",
    editeur: "2042",
    resume: "Un agent lunaire patrouille une colonie vide, s’ennuie ferme entre donuts, constats sans crime et solitude sidérale… et se retrouve plus poète que flic dans un décor d’espace désertique.",
    note: ""
  },
  {
    image: "images/portrait_dun_buveur.jpg",
    titre: "Portrait d’un buveur",
    auteur: "Schrauwen Ruppert & Mulot",
    editeur: "Aire-Libre",
    resume: "Guy, pirate aviné, menteur invétéré et paumé patenté, trace sa route entre bitures, bagarres et abordages délirants, tandis qu’un mort le suit dans un au-delà tordu où tout peut arriver.",
    note: ""
  },
  {
    image: "images/puta_madre.jpg",
    titre: "Puta Madre",
    auteur: "Run & Neyef",
    editeur: "Ankama & Label 619",
    resume: "Jesus, jeune délinquant de DMC, découvre le catch en prison et tente de se reconstruire sous le nom d’El Diablo Verde.",
    note: "★★★★★"
  },
  {
    image: "images/une_rainette_en_automne.jpg",
    titre: "Une Rainette en automne",
    auteur: "Linnea Sterte",
    editeur: "Les éditions de la cerise",
    resume: "Une petite rainette cherche sa place dans un monde qui change, portée par la poésie de l’automne et les murmures de la nature qui s’endort.",
    note: "★★★☆☆"
  },
  {
    image: "images/renee_aux_bois_dormants.jpg",
    titre: "René.e aux bois dormant",
    auteur: "Elene Usdin",
    editeur: "Sarbacane",
    resume: "Un enfant hypersensible sombre dans un monde de rêves mythiques habité de créatures étranges, se métamorphose en fleurs, arbres ou chats, et transforme sa quête de lapin en voyage initiatique onirique et coloré.",
    note: "★★★☆☆"
  },
  {
    image: "images/rien_a_feutre.jpg",
    titre: "Rien à feutre",
    auteur: "Camille Blandin",
    editeur: "Lapin",
    resume: "Des tranches absurdes de quotidien passées au feutre, où des situations banales deviennent étrangement drôles et étranges — de l’humour coloré qui vous parle, même si vous êtes un loup‑garou.",
    note: "★★★☆☆"
  },
    {
    image: "images/le_roi_meduse.jpg",
    titre: "Le Roi Méduse I",
    auteur: "Brecht Evens",
    editeur: "Actes Sud BD",
    resume: "Arthur grandit enfermé avec son père convaincu qu’un vaste complot menace le monde, jusqu’à ce que le paternel disparaisse — forçant le garçon à sortir de leur citadelle parano pour affronter l’inconnu.",
    note: "★★★★☆"
  },
  {
    image: "images/rossigny_zoo.jpg",
    titre: "Rossigny Zoo",
    auteur: "Chloé Wary",
    editeur: "FLBLB",
    resume: "À Rosigny-sur-Seine, quatre amis défendent leur liberté à travers le hip-hop face à la gentrification de leur quartier.",
    note: "★★★★☆"
  },
  {
    image: "images/saison_des_roses.jpg",
    titre: "Saison des Roses",
    auteur: "Chloé Wary",
    editeur: "FLBLB",
    resume: "Barbara, lycéenne footballeuse, se bat pour sauver son équipe féminine menacée par le sexisme de son club.",
    note: "★★★★☆"
  },
  {
    image: "images/salon_de_beaute.jpg",
    titre: "Salon de beauté",
    auteur: "Quentin Zuttion",
    editeur: "Dupuis",
    resume: "Jeshua tient un salon de beauté queer devenu refuge pour malades, entre paillettes, dignité et fin du monde en douceur.",
    note: "★★★★☆"
  },
  {
    image: "images/sans_panique.jpg",
    titre: "Sans Panique",
    auteur: "Coline Hégron",
    editeur: "Delcourt & Mirage",
    resume: "Romie, rescapée d’un accident, débarque sur une île peuplée d’insulaires apathiques et décide de secouer l’ambiance... surtout après avoir appris qu’une météorite arrive !",
    signe: true,
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
    image: "images/sentimental_kiss.jpg",
    titre: "Sentimental Kiss",
    auteur: "Camille Van Hoof",
    editeur: "Employé du moi",
    resume: "Deux adolescentes queer se découvrent une connexion magique liée à leurs hormones, explorant l’amitié, le consentement et la sexualité naissante dans un univers tendre, doux et métaphorique. ",
    note: "★★★☆☆"
  },
  {
    image: "images/shin_zero.jpg",
    titre: "Shin Zéro #01",
    auteur: "SIngelin & Bablet",
    editeur: "Rue de Sèvres & Label 619",
    resume: "Vingt ans après la victoire des Sentai sur les kaijus, un groupe de jeunes justiciers aujourd’hui précarisés tente de redonner sens à leur existence dans un monde qui a oublié son mythe de héros",
    signe: true,
    note: "★★★☆☆"
  },
  {
    image: "images/six_gun_gorilla.jpg",
    titre: "Six-gun Gorilla",
    auteur: "Jeff Stokely & Simon Spurrier",
    editeur: "Ankama",
    resume: "Dans un Far West futuriste ravagé par la guerre, un gorille maniant le revolver cherche à venger son ami humain, mêlant action, humour et réflexion sur la mémoire et la liberté.",
    note: "★★★☆☆"
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
    resume: "Trois ados coincés croisent Odette, tornade rebelle qui transforme leur été chic en été choc.",
    note: "★★★☆☆"
  },
  {
    image: "images/teddy_bear.jpg",
    titre: "Teddy Bear",
    auteur: "Gasparutto & Giugiaro",
    editeur: "Label 619",
    resume: "Un tueur à gages solitaire voit ses repères voler en éclats lorsqu’il rencontre une fillette qui ravive en lui une part d’humanité oubliée.",
    note: "★★★★☆"
  },
  {
    image: "images/todd_le_geant.jpg",
    titre: "Todd le géant s'est fait voler son slip",
    auteur: "Alex Chauvel",
    editeur: "The Hoochie Coochie",
    resume: "Un géant tranquille voit son slip disparaître et part à sa recherche, mais se retrouve entraîné dans une quête cosmique pour sauver le monde aux côtés de compagnons étranges et magiques.",
    note: "★★★★☆"
  },
  {
    image: "images/vers_la_ville.jpg",
    titre: "Vers la ville",
    auteur: "Tom Gauld",
    editeur: "2042",
    resume: "Deux amis quittent tout pour partir en quête d'une ville mystérieuse, dans une errance minimaliste et poétique où la pluie, les brouettes et l'absurde révèlent une tendresse cosmique.",
    note: "★★★★☆"
  },
  {
    image: "images/voie_de_garage.jpg",
    titre: "Voie de Garage",
    auteur: "Arnaud Nebbache & Sophie Adriansen",
    editeur: "Dargaud",
    resume: "Paulin, passionné de trolleybus, voit sa vie dérailler quand la société décide qu’il est trop bizarre pour rester libre.",
    signe: true,
    note: "★★★★☆"
  },
  {
    image: "images/uk_in_a_bad_way.jpg",
    titre: "UK in a bad way",
    auteur: "James Harvey",
    editeur: "Sarbacane",
    resume: "Jin, étudiante punk à Londres, et Edward, sans‑abri magicien, se croisent et déclenchent une amitié explosive en traversant la ville comme deux éclairs rebelles dans un monde hyper surveillé.",
    note: "★★★★☆"
  },
  {
    image: "images/walking_dead.jpg",
    titre: "Walking dead",
    auteur: "Robert Kirkman & Tony Moore & Charlie Adlard",
    editeur: "Hachette",
    resume: "Un shérif se réveille d’un coma et découvre un monde ravagé par les morts-vivants, où il part à la recherche de sa famille.",
    note: "★★★★☆"
  },
  {
    image: "images/where_the_body_was.jpg",
    titre: "Where the Body Was",
    auteur: "Ed Brubaker & Sean Phillips",
    editeur: "First Second",
    resume: "Un meurtre est découvert l’été 1984 dans une banlieue tranquille, et une douzaine de voisins au passé louche racontent chacun leur version du drame.",
    note: "★★★★☆"
  },
  {
    image: "images/zai_zai_zai_zai.jpg",
    titre: "Zaï Zaï Zaï Zaï",
    auteur: "Fab Caro",
    editeur: "Six Pieds Sous Terre",
    resume: "Un homme oublié sans carte de fidélité devient fugitif, déclenchant une cavale absurde et satirique à travers une société paranoïaque.",
    note: "★★★★☆"
  },
];
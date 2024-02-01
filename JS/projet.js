var app = angular.module('app', ['ngAnimate']);

app.controller('mainCtrl', function ($scope) {
  $scope.boxes = [{
    name: 'RushOfLands',
	title: 'Jeux vidéo',
    titlePU: "Jeux vidéo de type Platformer en Lua avec Love2D",
	link: "https://github.com/Unicron03/RushOfLands/raw/main/RushOfLands_Mark3.5.zip",
	text1: "'Rush Of Lands' est un jeu vidéo de type platforme où le joueur doit faire faire à une multitude de pièges, d'ennemis et de boss en utilisant des mécaniques toujours plus originales et folles à travers des niveaux et thèmes très différentes !",
	text2: "Le jeu est codé en Lua avec Love2d_v11.3 et les maps sont construites avec Tiled. Voici quelques infos complémentaires :",
	text3: "• Ce jeu est pour le moment prévu pour une version finale 3.5.",
	text4: "• Il est toutefois possible que quelques bugs soit présent, je vous invite à m'en faire part en me contactant.",
	text5: "• A noter que le jeu n'est disponible que pour les versions de Windows ne disposant que d'un ordinateur de 64bits;",
	text6: "• Je suis aussi ouvert à toutes suggestions pour des changements ou de nouvelles idées !",
	text7: "• Ceci est mon premier jeu qui n'est donc pas parfait et je vous demande donc d'être compréhensif.",
	text8: "D'autres jeux seront développés à l'avenir, que se soit en lua ou dans d'autres languages.",
    phraseDownload: "Vous pouvez télécharger le fichier .zip en cliquant sur 'Jeux vidéo'.",
    note1: "Note :",
    note2: " Il est nécessaire de déziper le fichier afin que tout fonctionnent correctement.",
    image: '../Image/RushOfLands.jpg' },{
	
	name: 'Volta',
	title: 'Voiture autonome',
    titlePU: "Jeux vidéo de type Platformer en Lua avec Love2D",
	link: "https://github.com/Unicron03/Projet_Volta/archive/refs/heads/master.zip",
	text1: "La voiture est composé d'une pyboard, de divers capteurs, de leds, d'un servo pour la direction et deux moteurs avec réducteur.",
	text2: "Elle se déplace de façon autonome en évitant les obstacles et en s'adaptant au milieu dans lequel elle évolue.",
	text3: "Elle intègre aussi plusieurs contraintes :",
	text4: "• Si un obstacle est détecté la voiture ralenti de plus en plus jusqu’à l’arrêt complet;",
	text5: "• Si la voiture détecte une montée, elle accélére, si elle détecte une descente elle ralenti (avec allumage de deux leds différentes sur la carte pyboard);",
	text6: "• Si la voiture est dans le noir, une led s'allume;",
	text7: "• Si on appuie sur le bouton USR de la carte, le programme se mets en pause jusqu’à que le bouton soit rappuyer;",
	text8: "• Si la voiture est bloqué par un certain obstacle qu'elle ne détecte pas, elle repart automatiquement.",
    phraseDownload: "Vous pouvez télécharger le fichier .zip en cliquant sur 'Voiture autonome'.",
    note1: "Note :",
    note2: " Il est nécessaire de déziper le fichier afin que tout fonctionnent correctement.",
    image: '../Image/voiture.png' },{
  
	name: 'MachineASous',
	title: "Simulation d'un casino",
    titlePU: "Jeux vidéo de type Platformer en Lua avec Love2D",
	link: "https://github.com/Unicron03/Projet_MachineASous/archive/refs/heads/main.zip",
	text1: "MachineASous est une page web ayant pour but de simuler une machine à sous au casino.",
	text2: "Ce site web possède une base HTML avec du CSS et du JavaScript dont voici les caractéristiques :",
	text3: "• Initialement, le bac de la machine contient 1000 jetons et le joueur en possède 100.",
	text4: "• Pour lancer le jeu, le joueur doit incérer X jetons dans la machine puis en appuyant sur un bouton :",
	text5: "- Si les trois chiffres sont 9, 9, 9, alors le joueur reçoit tous les jetons du bac. S'ils sont identiques mais non 9, 9, 9, le joueur reçoit 6 fois sa mise;",
	text6: "- Sinon, s'il n'y en a que deux d'identiques, le joueur reçoit 3 fois sa mise;",
	text7: "- Dans tout les autres cas, il ne reçoit rien !",
	text8: "• Le jeu s'arrête quand le nombre total de jetons dans le bac est inférieur à 500 ou si le joueur quitte la page.",
    phraseDownload: "Vous pouvez télécharger le fichier .zip en cliquant sur 'Simulation d'un casino'.",
    note1: "Note :",
    note2: " Il est nécessaire de déziper le fichier afin que tout fonctionnent correctement.",
    image: '../Image/MachineASous.jpg' },{
	
	name: 'SiteSup',
	title: 'Site web pro',
    titlePU: "Jeux vidéo de type Platformer en Lua avec Love2D",
	link: "",
	text1: "Ce fichier contient tous les éléments HTML, CSS, JavaScript, etc. du site sur lequel vous êtes.",
	text2: "Le site vous donne accés à différentes choses que voici :",
	text3: "• Vous pouvez consulter mes capacités dans différents languages de programations dans l'onglet 'Skills' du menu;",
	text4: "• Vous avez accés à différents fichiers et projets comme celui que vous êtes en train de lire;",
	text5: "• Vous pouvez aussi me contacter via mes réseaux ou par mails dans le menu, ou dans l'onglet 'Contact' pour avoir accés à plus de détails;",
	text6: "Ce site est fonctionnel sur Windows mais quelques bugs persistent toutefois sur Android.",
	text7: "Il sera régulièrement mis à jour avec d'autres projets par exemple.",
	text8: "",
	image: '../Image/EV.jpg' },{

    name: 'legoFans',
	title: 'Site vitrine de fans de Lego',
    titlePU: "Jeux vidéo de type Platformer en Lua avec Love2D",
	link: "https://unicron03.github.io/legoFans/",
	text1: "Sur le site vous pouvez : ",
	text2: "• Consulter des produits incroyables;",
	text3: "• Consulter l'histoire de Lego via un livre;",
	text4: "• Jouer à deux quizz sur les Lego;",
    phraseDownload: "Vous pouvez accéder au site en cliquant sur 'Site vitrine de fans de Lego'.",
	image: '../Image/lego-wall.jpeg' },{

    name: 'Wtf, is that a Goblin ?',
	title: 'Jeux vidéo',
    titlePU: "Jeux vidéo en Lua avec Love2D",
	link: "https://github.com/Unicron03/Wtf-is-that-a-Goblin-",
    text1: "'Wtf, is that a Goblin ?' est un jeu vidéo où le joueur incarne un gobelin qui doit voler des pièces d'or dans un manoir sans se faire attraper par le garde !",
	text2: "Le jeu est codé en Lua avec Love2d_v11.3 et les maps sont construites avec Tiled. Voici quelques infos complémentaires :",
    text3: "• Il est possible que quelques bugs soit présent, je vous invite à m'en faire part en me contactant.",
	text4: "• A noter que le jeu n'est disponible que pour les versions de Windows ne disposant que d'un ordinateur de 64bits;",
	text5: "• Je suis aussi ouvert à toutes suggestions pour des changements ou de nouvelles idées !",
	text6: "D'autres jeux seront développés à l'avenir, que se soit en lua ou dans d'autres languages.",
    phraseDownload: "Vous pouvez télécharger le jeu via le setup mis à disposition en cliquant sur 'Jeux vidéo'",
	image: '../Image/icon-goblin.jpeg' },{

    name: 'Tank&Fire',
	title: 'Jeux vidéo',
    titlePU: "Jeux vidéo en Lua avec Love2D",
	link: "https://github.com/Unicron03/Tank-Fire",
    text1: "'Tank&Fire' est un jeu vidéo où le joueur incarne un tank qui doit en abatre d'autres qui possèdent parfois des capacité bien différentes pour arriver à triompher sur tous les niveaux !",
	text2: "Le jeu est codé en Lua avec Love2d_v11.3 et les maps sont construites avec Tiled. Voici quelques infos complémentaires :",
    text3: "• Il est possible que quelques bugs soit présent, je vous invite à m'en faire part en me contactant.",
	text4: "• A noter que le jeu n'est disponible que pour les versions de Windows ne disposant que d'un ordinateur de 64bits;",
	text5: "• Je suis aussi ouvert à toutes suggestions pour des changements ou de nouvelles idées !",
	text6: "D'autres jeux seront développés à l'avenir, que se soit en lua ou dans d'autres languages.",
    phraseDownload: "Vous pouvez télécharger le jeu via le setup mis à disposition en cliquant sur 'Jeux vidéo'",
	image: '../Image/icon-tank.jpeg' },{
	
	name: 'FichiersDivers',
	title: 'Différents fichiers',
    titlePU: "Jeux vidéo de type Platformer en Lua avec Love2D",
	link: "https://github.com/Unicron03/FichiersDivers/archive/refs/heads/main.zip",
	text1: "Ceci est un ensemble de fichiers divers telles que des jeux, des sites, des petits algo, etc.",
	text2: "Voici qulques uns des petits projets que contient ce fichier :",
	text3: "• Des projets de jeu graphique en Python tels qu'un pierre-papier-ciseaux ou encore un pendu;",
	text4: "• Des projets en HTML, CSS et PHP qui consistent à se loger à une page web à l'aide d'un mot de passe;",
	text5: "• Des projets qui regroupent plusieurs algorithme (tri, liste chaînées, etc.);",
	text6: "• Des projets en Lua tels qu'un petit jeu de pong par exemple.",
	text7: "D'autres projets seront réalisés et ajoutés à cette liste.",
	text8: "",
    phraseDownload: "Vous pouvez télécharger le fichier .zip en cliquant sur 'Différents fichiers'.",
    note1: "Note :",
    note2: " Il est nécessaire de déziper le fichier afin que tout fonctionnent correctement.",
	image: '../Image/DiversProject.jpg' }];

  $scope.selected = [];
  $scope.selectBox = function (item, position) {
    $scope.selected = [{
      item: item,
      position: position }];

    $scope.$apply();
  };
  $scope.clearSelection = function () {
    $scope.selected = [];
  };
});

app.directive('box', function () {
  return {
    restrict: 'E',
    scope: {},
    bindToController: {
      onSelect: "=",
      item: "=" },

    controllerAs: 'box',
    controller: function () {
      var box = this;

      box.goFullscreen = function (e) {
        box.onSelect(box.item, e.target.getBoundingClientRect());
      };
    },
    link: function (scope, element) {
      element.bind('click', scope.box.goFullscreen);
      element.css({
        'background-image': 'url(' + scope.box.item.image + ')' });

    } };

});

app.directive('bigBox', function ($timeout) {
  return {
    restrict: 'AE',
    scope: {},
    bindToController: {
      position: "=",
      selected: "=",
      onSelect: "=" },

    controllerAs: 'box',
    controller: function () {
      var box = this;
    },
    link: function (scope, element) {
      var css = {};
      for (var key in scope.box.position) {
        css[key] = scope.box.position[key] + 'px';
      }

      element.css(css);

      $timeout(function () {
        element.css({
          top: '50%',
          left: '10%' });

        element.addClass('image-out');
      }, 200);

      $timeout(function () {
        element.css({
          width: '80%',
          height: '100%' });

      }, 500);

      $timeout(function () {
        element.addClass('show');
      }, 800);
    } };

});
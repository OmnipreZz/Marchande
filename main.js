/*Exercice 2 : bonjour madame la marchande

Créez une classe Produit:

nom
prix

Créez une classe Panier avec:

une méthode ajoute(produit)
une méthode retire(produit)
une proprieté totalHT
une proprieté totalTTC

Utilisation: ajouter ce qu'il faut à ce code de base pour qu'il fonctionne.

var baguette = new Produit('Baguette', 0.85); // prix HT
var croissant = new Produit('Croissant', 0.80);

var panier = new Panier();
panier.ajoute(baguette);
panier.ajoute(croissant);

console.log(panier.totalHT);
console.log(panier.totalTTC);

Bonus: reprendre cet exemple en ajoutant une classe Viennoiserie
 qui hérite de la classe Produit en lui ajoutant l'attribut booléen frais.*/

function Produit(nom, prix) {
    this.nom = nom;
    this.prix = prix;
};


function Panier() {
    this.sac = [];
    this.totalHT = 0;
    this.totalTTC = 0;
    this.ajoute = function (produit) {
        this.sac.push(produit);
        this.totalHT += produit.prix;
        this.totalTTC += (1 + 20 / 100) * produit.prix;
    }
    this.retire = function () {
        this.sac = []
    }
};

var baguette = new Produit('Baguette', 0.85); // prix HT
var croissant = new Produit('Croissant', 0.80);

var panier = new Panier();
panier.ajoute(baguette);
panier.ajoute(croissant);

console.log(panier.totalHT);
console.log(panier.totalTTC);

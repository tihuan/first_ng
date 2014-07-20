(function() {
  var app = angular.module('store', []);
  app.controller('StoreController', function() {
    this.products = gems;
  });

  var gems = [
    {
      name: 'Dodecahedron',
      price: 2,
      description: 'This is description.',
      canPurchase: false,
      soldOut: 0,
      images: []
    },
    {
      name: 'Gem2',
      price: 8.95,
      description: 'This is description2.',
      canPurchase: false,
      soldOut: 0,
      images: []
    }
  ];
}) ();



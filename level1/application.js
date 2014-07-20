(function() {
  var app = angular.module('store', []);
  app.controller('StoreController', function(){
    this.products = gems;
  });
  app.controller('PanelController', function(){
    this.tab = 1;
    this.selectTab = function(setTab){
      this.tab = setTab;
    };
    this.isSelected = function(checkTab){
      return this.tab === checkTab;
    };
  });
  app.controller('GalleryController', function(){
    this.current = 0;
    this.setCurrent= function(newGallery){
      this.current = newGallery || 0;
    };
  });

  var gems = [
    {
      name: 'Dodecahedron',
      price: 2,
      description: 'This is description.',
      canPurchase: false,
      soldOut: 0,
      images: [
        {
          full: 'image1-full.jpg',
          thumb: 'image1-thumb.jpg'
        },
        {
          full: 'image2-full.jpg',
          thumb: 'image2-thumb.jpg'
        }
      ],
      reviews: [
        {
          stars: 5,
          body: "I love this productttt!",
          author: "haha@yy.com"
        },
        {
          stars: 1,
          body: "I hate this productttt!",
          author: "boohoo@qq.com"
        }
      ]
    },
    {
      name: 'Gem2',
      price: 8.95,
      description: 'This is description2.',
      canPurchase: false,
      soldOut: 0,
      images: [
        {
          full: 'image3-full.jpg',
          thumb: 'image3-thumb.jpg'
        },
        {
          full: 'image4-full.jpg',
          thumb: 'image4-thumb.jpg'
        }
      ]
    }
  ];
}) ();



angular.module('application')
  .factory('StoreOrdering', StoreOrdering)
  .factory('ReviewsService', ReviewsService)
  .controller('MainController', MainController);

MainController.$inject = ['$scope', '$stateParams', '$state', '$controller', 'StoreOrdering', 'ReviewsService'];
function MainController($scope, $stateParams, $state, $controller, store_ordering, reviews_service) {
  // Extends Default Foundation Apps Controller
  // angular.extend(this, $controller('DefaultController', {$scope: $scope, $stateParams: $stateParams, $state: $state}));

  // data
  $scope.user = {
    id: 5,
    name: "John Doe"
  }

  $scope.stores_info = [
    {
      id: 1,
      name: "Best Store",
      url: "www.beststore.example",
      description: "Large electronics store in Canada. Thank you for being a friend. Travelled down the road and back again. Your heart is true you're a pal and a confidant. Come and knock on our door. We've been waiting for you. Three's company too.",
      tags: ["electronics", "battery", "gift cards"],
      stars: {
        overall: 4,
        communication: 3,
        delivery: 5,
        safety: 4
      },
      reviews: {
        total: 64,
        friends: 9
      }
    },
    {
      id: 2,
      name: "Future Buy",
      url: "futurebuy.example",
      description: "electronics store originally founded in Canada, now fully rebranded as Best Store..",
      tags: ["electronics", "gift cards"],
      stars: {
        overall: 5,
        communication: 4,
        delivery: 4,
        safety: 5
      },
      reviews: {
        total: 88,
        friends: 12
      }
    },
    {
      id: 3,
      name: "iBay",
      url: "ibay.example",
      description: "massive online bidding site",
      tags: ["shoes", "game console", "laptop", "smartphones", "bitcoin"],
      stars: {
        overall: 3,
        communication: 3,
        delivery: 4,
        safety: 2
      },
      reviews: {
        total: 123,
        friends: 5
      }
    },
    {
      id: 4,
      name: "Pear",
      url: "pear.example",
      description: "Believe it or not I'm walking on air. I never thought I could feel so free. Flying away on a wing and a prayer. Who could it be? Believe it or not its just me. Believe it or not I'm walking on air. I never thought I could feel so free. Flying away on a wing and a prayer.",
      tags: ["student discounts", "quality"],
      stars: {
        overall: 5,
        communication: 5,
        delivery: 4,
        safety: 5
      },
      reviews: {
        total: 21,
        friends: 3
      }
    },
    {
      id: 5,
      name: "Home Repo",
      url: "homerepo.example",
      description: "Plants and refrigerators",
      tags: ["plant", "stove", "refrigerator"],
      stars: {
        overall: 4,
        communication: 4,
        delivery: 4,
        safety: 4
      },
      reviews: {
        total: 30,
        friends: 21
      }
    }
  ]

  this.new_review_text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempus tincidunt lacus, sollicitudin mattis lectus hendrerit ac. Morbi scelerisque, velit non tincidunt lobortis, felis neque pharetra nisl, vel viverra massa ex nec libero. Mauris euismod orci vitae risus ultrices, quis venenatis nibh placerat."

  $scope.$watch(function () { return store_ordering.order }, function (newVal, oldVal) {
      if (typeof newVal !== 'undefined') {
          $scope.store_order = store_ordering.order;
      }
  });

  $scope.set_store_order = function(i) {
    store_ordering.set_order(i)
  }

  $scope.$watch(function () { return reviews_service.reviews }, function (newVal, oldVal) {
      if (typeof newVal !== 'undefined') {
          $scope.reviews = reviews_service.reviews;
      }
  });

  this.add_review = function() {
    reviews_service.add_review({
      user: $scope.user,
      text: this.new_review_text
    });
    this.new_review_text = "thanks for the review, write another one?"
  }

  // quick filter-like hack for ng-repeat
  $scope.range = function(n) {
    return new Array(n);
  }

}


function StoreOrdering() {
  var factory = {};
  factory.orders = [
    {
      title: "Default order",
      key: "id",
      reverse: false
    },
    {
      title: "Most Reviewed",
      key: "reviews.total",
      reverse: true
    },
    {
      title: "Highest Rated",
      key: "stars.overall",
      reverse: true
    }
  ],
  factory.order = factory.orders[0],
  factory.set_order = function(i) {
    factory.order = factory.orders[i];
  }
  
  return factory
}

function ReviewsService() {
  var factory = {};
  factory.reviews = [
    {
      reviewer: {
        id: 1,
        name: "Bob"
      },
      date: 1328388888006,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempus tincidunt lacus, sollicitudin mattis lectus hendrerit ac. Morbi scelerisque, velit non tincidunt lobortis, felis neque pharetra nisl, vel viverra massa ex nec libero. Mauris euismod orci vitae risus ultrices, quis venenatis nibh placerat. Nam molestie nunc eleifend quam vulputate luctus. Integer urna mi, dictum non sem non, pulvinar molestie tortor.",
      rating: {
        overall: 4,
        communication: 3,
        delivery: 5,
        safety: 4
      },
      helpfulness: {
        agree: 12,
        total: 15
      }
    },
    {
      reviewer: {
        id: 2,
        name: "Kat"
      },
      date: 1288323623006,
      text: "Use lap as chair find something else more interesting caticus cuteicus so pooping rainbow while flying in a toasted bread costume in space. Use lap as chair why must they do that leave dead animals as gifts caticus cuteicus yet give attitude chase mice. Intently stare at the same spot pelt around the house and up and down stairs chasing phantoms but who's the baby chase imaginary bugs, and give attitude. Loves cheeseburgers stick butt in face, so pooping rainbow while flying in a toasted bread costume in space spot something, big eyes, big eyes, crouch, shake butt, prepare to pounce hide from vacuum cleaner hide from vacuum cleaner. See owner, run in terror play riveting piece on synthesizer keyboard or rub face on everything run in circles, but vommit food and eat it again. Has closed eyes but still sees you eat a plant, kill a hand, for love to play with owner's hair tie so hack up furballs rub face on owner and claw drapes.",
      rating: {
        overall: 3,
        communication: 3,
        delivery: 2,
        safety: 3
      },
      helpfulness: {
        agree: 10,
        total: 13
      }
    },
    {
      reviewer: {
        id: 3,
        name: "Cindy"
      },
      date: 1388323623006,
      text: "This is a great store, one that they actually did some customer servicing. After the death and Hiro's invention being stolen, he vows payback...but how? He creates superheroes of his nerd friends, giving them powers based on their nerd-ness. The film borrows some ideas and lines from other films and I wished I had seen more battle bots, but such was not the case. The film used/misused a lot of the new cutting edge nanotechnology extrapolating it to a fun degree. My 11 year old grandniece loved this film. I will give it her rating.",
      rating: {
        overall: 5,
        communication: 5,
        delivery: 4,
        safety: 4
      },
      helpfulness: {
        agree: 11,
        total: 15
      }
    },
    {
      reviewer: {
        id: 4,
        name: "Billy"
      },
      date: 1358388888006,
      text: "If not quite at the emotional or intelligence level, this is still fun and quite endearing. A young computer genius has his life turned upside down by a tragedy, but forges a bond with a goofy robotic blow-up nurse. This robot, Baymax, is designed only to help, not fight. But our hero equips him to be able to be a warrior machine to help take down a mysterious villain who has stolen our wunderkind’s invention and is using it for nefarious purposes. The gap between the personality programming and body type of the puffy, gentle, cute robot nurse and it’s repurposing leads top most of the films biggest laughs.",
      rating: {
        overall: 4,
        communication: 4,
        delivery: 4,
        safety: 3
      },
      helpfulness: {
        agree: 3,
        total: 5
      }
    }
  ],
  factory.add_review = function(data) {
    factory.reviews.push({
      reviewer: data.user,
      date: new Date().getTime(),
      text: data.text,
      rating: {
        overall: 4,
        communication: 4,
        delivery: 4,
        safety: 3
      },
      helpfulness: {
        agree: 0,
        total: 0
      }
    })
  }

  return factory
}

angular.module('app.services', [])

.factory('bakendlessAPI', function($http) {

var mainUrl = "https://api.backendless.com/BA2BC4C3-5600-B2AA-FFA0-5C7CBDC21900/7DC92FC1-C9AC-8941-FF45-038B00E3FF00/";
var header = {'Content-Type' : 'application/json'};
return {
  login: function(data) {
    return $http.post(mainUrl + 'users/login',data, header);
  }
};
})

.factory('dogs', [function(){
  var dogJson = [
 {
   "id": 1,
   "Name": "Jake",
   "Type": "Golden Retriever",
   "color": "Cream",
   "Age": "2 Years",
   "Gender": "Female",
   "Price": "300 BD",
   "desc": "The Golden Retriever is a large-sized breed of dog bred as gun dogs to retrieve shot waterfowl such as ducks and upland game birds during hunting and shooting parties, and were named 'retriever' because of their ability to retrieve shot game undamaged. Golden Retrievers have an instinctive love of water, and are easy to train to basic or advanced obedience standards. They are a long-coated breed, with a dense inner coat that provides them with adequate warmth in the outdoors, and an outer coat that lies flat against their bodies and repels water. Golden Retrievers are well suited to residency in suburban or country environments. Although they need substantial outdoor exercise, they should be housed in a fenced area because of their instinctual tendency to roam. They shed copiously, particularly at the change of seasons, and require fairly regular grooming.",
   "img": "dGR"
 },
 {
   "id": 2,
   "Name": "Rusty",
   "Type": "Golden Retriever",
   "color": "Light Golden",
   "Age": "3 Years",
   "Gender": "Male",
   "Price": "280 BD",
   "desc": "The Golden Retriever is a large-sized breed of dog bred as gun dogs to retrieve shot waterfowl such as ducks and upland game birds during hunting and shooting parties, and were named 'retriever' because of their ability to retrieve shot game undamaged. Golden Retrievers have an instinctive love of water, and are easy to train to basic or advanced obedience standards. They are a long-coated breed, with a dense inner coat that provides them with adequate warmth in the outdoors, and an outer coat that lies flat against their bodies and repels water. Golden Retrievers are well suited to residency in suburban or country environments. Although they need substantial outdoor exercise, they should be housed in a fenced area because of their instinctual tendency to roam. They shed copiously, particularly at the change of seasons, and require fairly regular grooming.",
   "img": "dGR"
 },
 {
   "id": 3,
   "Name": "Sadie",
   "Type": "Golden Retriever",
   "color": "Dark Golden",
   "Age": "4 Years",
   "Gender": "Female",
   "Price": "200 BD",
   "desc": "The Golden Retriever is a large-sized breed of dog bred as gun dogs to retrieve shot waterfowl such as ducks and upland game birds during hunting and shooting parties, and were named 'retriever' because of their ability to retrieve shot game undamaged. Golden Retrievers have an instinctive love of water, and are easy to train to basic or advanced obedience standards. They are a long-coated breed, with a dense inner coat that provides them with adequate warmth in the outdoors, and an outer coat that lies flat against their bodies and repels water. Golden Retrievers are well suited to residency in suburban or country environments. Although they need substantial outdoor exercise, they should be housed in a fenced area because of their instinctual tendency to roam. They shed copiously, particularly at the change of seasons, and require fairly regular grooming.",
   "img": "dGR"
 },
 {
   "id": 4,
   "Name": "Daisy",
   "Type": "Golden Retriever",
   "color": "Golden",
   "Age": "5 Years",
   "Gender": "Male",
   "Price": "180 BD",
   "desc": "The Golden Retriever is a large-sized breed of dog bred as gun dogs to retrieve shot waterfowl such as ducks and upland game birds during hunting and shooting parties, and were named 'retriever' because of their ability to retrieve shot game undamaged. Golden Retrievers have an instinctive love of water, and are easy to train to basic or advanced obedience standards. They are a long-coated breed, with a dense inner coat that provides them with adequate warmth in the outdoors, and an outer coat that lies flat against their bodies and repels water. Golden Retrievers are well suited to residency in suburban or country environments. Although they need substantial outdoor exercise, they should be housed in a fenced area because of their instinctual tendency to roam. They shed copiously, particularly at the change of seasons, and require fairly regular grooming.",
   "img": "dGR"
 },
 {
   "id": 5,
   "Name": "Midnight",
   "Type": "Labrador Retriever",
   "color": "Black",
   "Age": "6 Years",
   "Gender": "Female",
   "Price": "400 BD",
   "desc": "The Labrador Retriever, or just Labrador, is a type of retriever-gun dog. The Labrador is one of the most popular breeds of dog in Canada, the United Kingdom and the United States. \nA favourite disability assistance breed in many countries, Labradors are frequently trained to aid the blind, those who have autism, to act as a therapy dog or to perform screening and detection work for law enforcement and other official agencies. They are prized as sporting and hunting dogs. \nA few kennels breeding their ancestors, the St. John's water dog, were in England. At the same time, a combination of the sheepprotection policy in Newfoundland and rabies quarantine in the United Kingdom, led to the gradual demise of the St. John's water dog in Canada. \n",
   "img": "dLR"
 },
 {
   "id": 6,
   "Name": "Milo",
   "Type": "Labrador Retriever",
   "color": "Chocolate",
   "Age": "7 Years",
   "Gender": "Male",
   "Price": "380 BD",
   "desc": "The Labrador Retriever, or just Labrador, is a type of retriever-gun dog. The Labrador is one of the most popular breeds of dog in Canada, the United Kingdom and the United States. \nA favourite disability assistance breed in many countries, Labradors are frequently trained to aid the blind, those who have autism, to act as a therapy dog or to perform screening and detection work for law enforcement and other official agencies. They are prized as sporting and hunting dogs. \nA few kennels breeding their ancestors, the St. John's water dog, were in England. At the same time, a combination of the sheepprotection policy in Newfoundland and rabies quarantine in the United Kingdom, led to the gradual demise of the St. John's water dog in Canada. \n",
   "img": "dLR"
 },
 {
   "id": 7,
   "Name": "Page",
   "Type": "Labrador Retriever",
   "color": "Black",
   "Age": "8 Years",
   "Gender": "Female",
   "Price": "360 BD",
   "desc": "The Labrador Retriever, or just Labrador, is a type of retriever-gun dog. The Labrador is one of the most popular breeds of dog in Canada, the United Kingdom and the United States. \nA favourite disability assistance breed in many countries, Labradors are frequently trained to aid the blind, those who have autism, to act as a therapy dog or to perform screening and detection work for law enforcement and other official agencies. They are prized as sporting and hunting dogs. \nA few kennels breeding their ancestors, the St. John's water dog, were in England. At the same time, a combination of the sheepprotection policy in Newfoundland and rabies quarantine in the United Kingdom, led to the gradual demise of the St. John's water dog in Canada. \n",
   "img": "dLR"
 },
 {
   "id": 8,
   "Name": "Pepper",
   "Type": "Labrador Retriever",
   "color": "Yellow",
   "Age": "9 Years",
   "Gender": "Male",
   "Price": "340 BD",
   "desc": "The Labrador Retriever, or just Labrador, is a type of retriever-gun dog. The Labrador is one of the most popular breeds of dog in Canada, the United Kingdom and the United States. \nA favourite disability assistance breed in many countries, Labradors are frequently trained to aid the blind, those who have autism, to act as a therapy dog or to perform screening and detection work for law enforcement and other official agencies. They are prized as sporting and hunting dogs. \nA few kennels breeding their ancestors, the St. John's water dog, were in England. At the same time, a combination of the sheepprotection policy in Newfoundland and rabies quarantine in the United Kingdom, led to the gradual demise of the St. John's water dog in Canada. \n",
   "img": "dLR"
 },
 {
   "id": 9,
   "Name": "Mako",
   "Type": "Siberian Husky",
   "color": "Red",
   "Age": "1 Years",
   "Gender": "Female",
   "Price": "1500 BD",
   "desc": "The Siberian Husky   is a medium size working dog breed that originated in north-eastern Siberia, Russia. The breed belongs to the Spitz genetic family. It is recognizable by its thickly furred double coat, erect triangular ears, and distinctive markings.\nThe original Siberian Huskies were bred by the Chukchi people — whose hunter-gatherer culture relied on their help. It is an active, energetic, resilient breed, whose ancestors lived in the extremely cold and harsh environment of the Siberian Arctic. William Goosak, a Russian fur trader, introduced them to Nome, Alaska during the Nome Gold Rush, initially as sled dogs. The people of Nome referred to the Siberian Huskies as \"Siberian Rats\" due to their size of 40–50 lbs. compared with the Malamute dogs, 75–85 lbs. \n",
   "img": "dHUS"
 },
 {
   "id": 10,
   "Name": "Houdini",
   "Type": "Siberian Husky",
   "color": "Black & White",
   "Age": "2 Years",
   "Gender": "Male",
   "Price": "1600 BD",
   "desc": "The Siberian Husky   is a medium size working dog breed that originated in north-eastern Siberia, Russia. The breed belongs to the Spitz genetic family. It is recognizable by its thickly furred double coat, erect triangular ears, and distinctive markings.\nThe original Siberian Huskies were bred by the Chukchi people — whose hunter-gatherer culture relied on their help. It is an active, energetic, resilient breed, whose ancestors lived in the extremely cold and harsh environment of the Siberian Arctic. William Goosak, a Russian fur trader, introduced them to Nome, Alaska during the Nome Gold Rush, initially as sled dogs. The people of Nome referred to the Siberian Huskies as \"Siberian Rats\" due to their size of 40–50 lbs. compared with the Malamute dogs, 75–85 lbs. \n",
   "img": "dHUS"
 },
 {
   "id": 11,
   "Name": "Boomer",
   "Type": "Siberian Husky",
   "color": "Agouti",
   "Age": "3 Years",
   "Gender": "Female",
   "Price": "1700 BD",
   "desc": "The Siberian Husky   is a medium size working dog breed that originated in north-eastern Siberia, Russia. The breed belongs to the Spitz genetic family. It is recognizable by its thickly furred double coat, erect triangular ears, and distinctive markings.\nThe original Siberian Huskies were bred by the Chukchi people — whose hunter-gatherer culture relied on their help. It is an active, energetic, resilient breed, whose ancestors lived in the extremely cold and harsh environment of the Siberian Arctic. William Goosak, a Russian fur trader, introduced them to Nome, Alaska during the Nome Gold Rush, initially as sled dogs. The people of Nome referred to the Siberian Huskies as \"Siberian Rats\" due to their size of 40–50 lbs. compared with the Malamute dogs, 75–85 lbs. \n",
   "img": "dHUS"
 },
 {
   "id": 12,
   "Name": "Togo",
   "Type": "Siberian Husky",
   "color": "Copper",
   "Age": "4 Years",
   "Gender": "Male",
   "Price": "1800 BD",
   "desc": "The Siberian Husky   is a medium size working dog breed that originated in north-eastern Siberia, Russia. The breed belongs to the Spitz genetic family. It is recognizable by its thickly furred double coat, erect triangular ears, and distinctive markings.\nThe original Siberian Huskies were bred by the Chukchi people — whose hunter-gatherer culture relied on their help. It is an active, energetic, resilient breed, whose ancestors lived in the extremely cold and harsh environment of the Siberian Arctic. William Goosak, a Russian fur trader, introduced them to Nome, Alaska during the Nome Gold Rush, initially as sled dogs. The people of Nome referred to the Siberian Huskies as \"Siberian Rats\" due to their size of 40–50 lbs. compared with the Malamute dogs, 75–85 lbs. \n",
   "img": "dHUS"
 }
];

  return {
    all: function() {
      return dogJson;
    },
    get: function(dogName) {
      for (var i = 0; i < dogJson.length; i++) {
        if (dogJson[i].id == dogName) {
			console.log(dogJson[i]);
          return dogJson[i];
        }
      }

    }

  };

}])
.factory('rabbits', [function(){
var rabbitJSON=[
 {
   "id": 1,
   "Name": "oreo",
   "Age": "2 years ",
   "Type": "Holland Lop ",
   "color": "Gray",
   "Price": "30 BD",
   "desc": "The Holland Lop breed was recognized by the Netherlands' Governing Rabbit Council in 1984 and the American Rabbit Breeders' Association in 1979. Holland Lops with maximum weight of 3.5 pounds (1.6 kg) are the smallest lop eared rabbits.\nThe Holland Lop rabbit should be fed daily with good quality pellets, fresh vegetables, and unlimited grass or timothy hay, as well as fresh water. They should be fed depending on their weight, if your rabbit weighs 2 to 4 pounds you should feed it 1 ounce of pellets, if your rabbit weighs 5 to 7 pounds you should feed them 2 ounces of pellets, if you rabbit weighs 8 to 10 pounds you should feed it 4 ounces of pellets per day, if your rabbit weighs 11 to 15 pounds you should feed it 6 ounces of pellets a day. . Rabbits enjoy many different types of fresh vegetables, such as romaine lettuce, endives, parsley, coriander, dill, fennel and arugula, as well as carrots. Fresh leafy vegetables should be fed at a rate of at least 1 packed cup per 2 pounds of body weight a day. Leafy greens high in oxalic acid, such as parsley and spinach, should not be fed every day. Non-leafy vegetables such as carrots or peppers should be fed in much smaller quantities, about 1 tablespoon per 2 pound of body weight per day. Alfalfa hay or alfalfa based pellets should only be fed to juvenile rabbits under 1 year. Treats from pet supplies stores are often not particularly safe for rabbits to ingest. They often are high in sugar or fat, or contain foods that rabbits cannot digest\n",
   "img": "rHL"
 },
 {
   "id": 2,
   "Name": "Daisy",
   "Age": "5 years",
   "Type": "Checkered Giant ",
   "color": "white ",
   "Price": "39 BD",
   "desc": "The Checkered Giant rabbit is a breed of rabbit developed in Europe. In the UK the breed is known as Giant Papillon. \nCheckered Giants are one of 49 breeds of domestic rabbits recognized by the American Rabbit Breeders Association. Mature Checkered Giant bucks should weigh at least 11 pounds (5.0 kg), and mature does 12 pounds (5.4 kg), but there is no specified maximum weight. The Checkered Giant is outweighed by the Giant Chinchilla and Flemish Giant. The Checkered Giant is considered a show rabbit rather than a meat rabbit. The Checkered Giant is one of only 11 breeds with defined markings. Body type markings differ between European and American Checkered Giants, although they are considered the same breed. The Checkered Giant is considered a 6 class breed. \n",
   "img": "rGCH"
 },
 {
   "id": 3,
   "Name": "Bella",
   "Age": "3 years",
   "Type": "Pygmy ",
   "color": "brown",
   "Price": "48 BD",
   "desc": "The pygmy rabbit (Brachylagus idahoensis) is a North American rabbit, and is one of only two rabbit species in America to dig its own burrow. The pygmy rabbit differs significantly from species within either the Lepus (hare) or Sylvilagus (cottontail) genera and is generally considered to be within the monotypic genus Brachylagus. One isolated population, the Columbia Basin pygmy rabbit, is listed as an endangered species by the U.S. Federal government, though the International Union for Conservation of Nature lists the species as lower risk.\nThe pygmy rabbit is the world's smallest leporid, with mean adult weights from 375 to about 500 grams (0.827 to about 1.102 lb), and a body length from 23.5 to 29.5 centimeters (9.3 to 11.6 in); females are slightly larger than males. The pygmy rabbit is distinguishable from other leporids by its small size, short ears, gray color, small hind legs, and lack of white fur on the tail.\n",
   "img": "rPY"
 },
 {
   "id": 4,
   "Name": "Bunny",
   "Age": "3 years",
   "Type": "Holland Lop ",
   "color": "Gray",
   "Price": "57 BD",
   "desc": "The Holland Lop breed was recognized by the Netherlands' Governing Rabbit Council in 1984 and the American Rabbit Breeders' Association in 1979. Holland Lops with maximum weight of 3.5 pounds (1.6 kg) are the smallest lop eared rabbits.\nThe Holland Lop rabbit should be fed daily with good quality pellets, fresh vegetables, and unlimited grass or timothy hay, as well as fresh water. They should be fed depending on their weight, if your rabbit weighs 2 to 4 pounds you should feed it 1 ounce of pellets, if your rabbit weighs 5 to 7 pounds you should feed them 2 ounces of pellets, if you rabbit weighs 8 to 10 pounds you should feed it 4 ounces of pellets per day, if your rabbit weighs 11 to 15 pounds you should feed it 6 ounces of pellets a day. . Rabbits enjoy many different types of fresh vegetables, such as romaine lettuce, endives, parsley, coriander, dill, fennel and arugula, as well as carrots. Fresh leafy vegetables should be fed at a rate of at least 1 packed cup per 2 pounds of body weight a day. Leafy greens high in oxalic acid, such as parsley and spinach, should not be fed every day. Non-leafy vegetables such as carrots or peppers should be fed in much smaller quantities, about 1 tablespoon per 2 pound of body weight per day. Alfalfa hay or alfalfa based pellets should only be fed to juvenile rabbits under 1 year. Treats from pet supplies stores are often not particularly safe for rabbits to ingest. They often are high in sugar or fat, or contain foods that rabbits cannot digest\n",
   "img": "rHL"
 },
 {
   "id": 5,
   "Name": "Lola",
   "Age": "6 years",
   "Type": "Checkered Giant ",
   "color": "white ",
   "Price": "66 BD",
   "desc": "The Checkered Giant rabbit is a breed of rabbit developed in Europe. In the UK the breed is known as Giant Papillon. \nCheckered Giants are one of 49 breeds of domestic rabbits recognized by the American Rabbit Breeders Association. Mature Checkered Giant bucks should weigh at least 11 pounds (5.0 kg), and mature does 12 pounds (5.4 kg), but there is no specified maximum weight. The Checkered Giant is outweighed by the Giant Chinchilla and Flemish Giant. The Checkered Giant is considered a show rabbit rather than a meat rabbit. The Checkered Giant is one of only 11 breeds with defined markings. Body type markings differ between European and American Checkered Giants, although they are considered the same breed. The Checkered Giant is considered a 6 class breed. \n",
   "img": "rGCH"
 },
 {
   "id": 6,
   "Name": "Lily",
   "Age": "4 years",
   "Type": "Pygmy ",
   "color": "brown",
   "Price": "75 BD",
   "desc": "The pygmy rabbit (Brachylagus idahoensis) is a North American rabbit, and is one of only two rabbit species in America to dig its own burrow. The pygmy rabbit differs significantly from species within either the Lepus (hare) or Sylvilagus (cottontail) genera and is generally considered to be within the monotypic genus Brachylagus. One isolated population, the Columbia Basin pygmy rabbit, is listed as an endangered species by the U.S. Federal government, though the International Union for Conservation of Nature lists the species as lower risk.\nThe pygmy rabbit is the world's smallest leporid, with mean adult weights from 375 to about 500 grams (0.827 to about 1.102 lb), and a body length from 23.5 to 29.5 centimeters (9.3 to 11.6 in); females are slightly larger than males. The pygmy rabbit is distinguishable from other leporids by its small size, short ears, gray color, small hind legs, and lack of white fur on the tail.\n",
   "img": "rPY"
 },
 {
   "id": 7,
   "Name": "Oliver",
   "Age": "4 years",
   "Type": "Holland Lop ",
   "color": "Gray",
   "Price": "84 BD",
   "desc": "The Holland Lop breed was recognized by the Netherlands' Governing Rabbit Council in 1984 and the American Rabbit Breeders' Association in 1979. Holland Lops with maximum weight of 3.5 pounds (1.6 kg) are the smallest lop eared rabbits.\nThe Holland Lop rabbit should be fed daily with good quality pellets, fresh vegetables, and unlimited grass or timothy hay, as well as fresh water. They should be fed depending on their weight, if your rabbit weighs 2 to 4 pounds you should feed it 1 ounce of pellets, if your rabbit weighs 5 to 7 pounds you should feed them 2 ounces of pellets, if you rabbit weighs 8 to 10 pounds you should feed it 4 ounces of pellets per day, if your rabbit weighs 11 to 15 pounds you should feed it 6 ounces of pellets a day. . Rabbits enjoy many different types of fresh vegetables, such as romaine lettuce, endives, parsley, coriander, dill, fennel and arugula, as well as carrots. Fresh leafy vegetables should be fed at a rate of at least 1 packed cup per 2 pounds of body weight a day. Leafy greens high in oxalic acid, such as parsley and spinach, should not be fed every day. Non-leafy vegetables such as carrots or peppers should be fed in much smaller quantities, about 1 tablespoon per 2 pound of body weight per day. Alfalfa hay or alfalfa based pellets should only be fed to juvenile rabbits under 1 year. Treats from pet supplies stores are often not particularly safe for rabbits to ingest. They often are high in sugar or fat, or contain foods that rabbits cannot digest\n",
   "img": "rHL"
 },
 {
   "id": 8,
   "Name": "Jack",
   "Age": "4 years",
   "Type": "Checkered Giant ",
   "color": "white ",
   "Price": "93 BD",
   "desc": "The Checkered Giant rabbit is a breed of rabbit developed in Europe. In the UK the breed is known as Giant Papillon. \nCheckered Giants are one of 49 breeds of domestic rabbits recognized by the American Rabbit Breeders Association. Mature Checkered Giant bucks should weigh at least 11 pounds (5.0 kg), and mature does 12 pounds (5.4 kg), but there is no specified maximum weight. The Checkered Giant is outweighed by the Giant Chinchilla and Flemish Giant. The Checkered Giant is considered a show rabbit rather than a meat rabbit. The Checkered Giant is one of only 11 breeds with defined markings. Body type markings differ between European and American Checkered Giants, although they are considered the same breed. The Checkered Giant is considered a 6 class breed. \n",
   "img": "rGCH"
 },
 {
   "id": 9,
   "Name": "Clover",
   "Age": "4 years",
   "Type": "Pygmy ",
   "color": "brown",
   "Price": "102 BD",
   "desc": "The pygmy rabbit (Brachylagus idahoensis) is a North American rabbit, and is one of only two rabbit species in America to dig its own burrow. The pygmy rabbit differs significantly from species within either the Lepus (hare) or Sylvilagus (cottontail) genera and is generally considered to be within the monotypic genus Brachylagus. One isolated population, the Columbia Basin pygmy rabbit, is listed as an endangered species by the U.S. Federal government, though the International Union for Conservation of Nature lists the species as lower risk.\nThe pygmy rabbit is the world's smallest leporid, with mean adult weights from 375 to about 500 grams (0.827 to about 1.102 lb), and a body length from 23.5 to 29.5 centimeters (9.3 to 11.6 in); females are slightly larger than males. The pygmy rabbit is distinguishable from other leporids by its small size, short ears, gray color, small hind legs, and lack of white fur on the tail.\n",
   "img": "rPY"
 }
];
return {
  all: function() {
    return rabbitJSON;
  },
  get: function(rabbitName) {
    for (var i = 0; i < rabbitJSON.length; i++) {
      if (rabbitJSON[i].id == rabbitName) {

        return rabbitJSON[i];
      }
    }

  }

};

}])
.factory('cats', [function(){
var catJSON=[
 {
   "id": 1,
   "Name": "Simba",
   "Type": "Persian Cats",
   "color": "white",
   "Age": "8 month",
   "Gender": "Male",
   "Price": "150 BD",
   "Origin": "Iran",
   "desc": "The Persian cat  is a long-haired breed of cat characterized by its round face and short muzzle. It is also known as the Persian Longhair. In the Middle East they are widely known as Iranian cat and in Iran they are known as Shirazi cat. The first documented ancestors of the Persian were imported into Italy from Iran (Persia) around 1620. The exact history of the Persian cat does seem to be a bit of a mystery but many of these long-haired cats were seen in hieroglyphics. The story has it that these long-haired cats were then imported into Europe as their popularity grew and breeding took place in Italy and France.\n\n",
   "img": "cPER"
 },
 {
   "id": 2,
   "Name": "Oliver",
   "Type": "Persian Cats",
   "color": "Gray",
   "Age": "12 month",
   "Gender": "Male",
   "Price": "180 BD",
   "Origin": "Iran",
   "desc": "The Persian cat  is a long-haired breed of cat characterized by its round face and short muzzle. It is also known as the Persian Longhair. In the Middle East they are widely known as Iranian cat and in Iran they are known as Shirazi cat. The first documented ancestors of the Persian were imported into Italy from Iran (Persia) around 1620. The exact history of the Persian cat does seem to be a bit of a mystery but many of these long-haired cats were seen in hieroglyphics. The story has it that these long-haired cats were then imported into Europe as their popularity grew and breeding took place in Italy and France.",
   "img": "cPER"
 },
 {
   "id": 3,
   "Name": "Misty",
   "Type": "Persian Cats",
   "color": "white",
   "Age": "16 month",
   "Gender": "Female",
   "Price": "210 BD",
   "Origin": "Iran",
   "desc": "The Persian cat  is a long-haired breed of cat characterized by its round face and short muzzle. It is also known as the Persian Longhair. In the Middle East they are widely known as Iranian cat and in Iran they are known as Shirazi cat. The first documented ancestors of the Persian were imported into Italy from Iran (Persia) around 1620. The exact history of the Persian cat does seem to be a bit of a mystery but many of these long-haired cats were seen in hieroglyphics. The story has it that these long-haired cats were then imported into Europe as their popularity grew and breeding took place in Italy and France.",
   "img": "cPER"
 },
 {
   "id": 4,
   "Name": "Sophie",
   "Type": "Persian Cats",
   "color": "Black",
   "Age": "20 month",
   "Gender": "Female",
   "Price": "240 BD",
   "Origin": "Iran",
   "desc": "The Persian cat  is a long-haired breed of cat characterized by its round face and short muzzle. It is also known as the Persian Longhair. In the Middle East they are widely known as Iranian cat and in Iran they are known as Shirazi cat. The first documented ancestors of the Persian were imported into Italy from Iran (Persia) around 1620. The exact history of the Persian cat does seem to be a bit of a mystery but many of these long-haired cats were seen in hieroglyphics. The story has it that these long-haired cats were then imported into Europe as their popularity grew and breeding took place in Italy and France.",
   "img": "cPER"
 },
 {
   "id": 5,
   "Name": "Abhainn",
   "Type": "Scottish Fold cat",
   "color": "white",
   "Age": "24 month",
   "Gender": "Male",
   "Price": "130 BD",
   "Origin": "Scotland",
   "desc": "The original Scottish Fold was a white barn cat named Susie, who was found at a farm near Coupar Angus in Perthshire, Scotland, in 1961. Susie's ears had an unusual fold in their middle, making her resemble an owl. When Susie had kittens, two of them were born with folded ears, and one was acquired by William Ross, a neighbouring farmer and cat-fancier. Ross registered the breed with the Governing Council of the Cat Fancy (GCCF) in Great Britain in 1966 and started to breed Scottish Fold kittens with the help of geneticist Pat Turner. The breeding program produced 76 kittens in the first three years—42 with folded ears and 34 with straight ears. The conclusion from this was that the ear mutation is due to a simple dominant gene. \nSusie's only reproducing offspring was a female Fold named Snooks who was also white; a second kitten was neutered shortly after birth. Three months after Snooks' birth, Susie was killed by a car. All Scottish Fold cats share a common ancestry to Susie. \n",
   "img": "cSF"
 },
 {
   "id": 6,
   "Name": "Acair",
   "Type": "Scottish Fold cat",
   "color": "Gray",
   "Age": "30 month",
   "Gender": "Male",
   "Price": "135 BD",
   "Origin": "Scotland",
   "desc": "The original Scottish Fold was a white barn cat named Susie, who was found at a farm near Coupar Angus in Perthshire, Scotland, in 1961. Susie's ears had an unusual fold in their middle, making her resemble an owl. When Susie had kittens, two of them were born with folded ears, and one was acquired by William Ross, a neighbouring farmer and cat-fancier. Ross registered the breed with the Governing Council of the Cat Fancy (GCCF) in Great Britain in 1966 and started to breed Scottish Fold kittens with the help of geneticist Pat Turner. The breeding program produced 76 kittens in the first three years—42 with folded ears and 34 with straight ears. The conclusion from this was that the ear mutation is due to a simple dominant gene. \nSusie's only reproducing offspring was a female Fold named Snooks who was also white; a second kitten was neutered shortly after birth. Three months after Snooks' birth, Susie was killed by a car. All Scottish Fold cats share a common ancestry to Susie. \n",
   "img": "cSF"
 },
 {
   "id": 7,
   "Name": "Adamina",
   "Type": "Scottish Fold cat",
   "color": "white",
   "Age": "32 month",
   "Gender": "Female",
   "Price": "140 BD",
   "Origin": "Scotland",
   "desc": "The original Scottish Fold was a white barn cat named Susie, who was found at a farm near Coupar Angus in Perthshire, Scotland, in 1961. Susie's ears had an unusual fold in their middle, making her resemble an owl. When Susie had kittens, two of them were born with folded ears, and one was acquired by William Ross, a neighbouring farmer and cat-fancier. Ross registered the breed with the Governing Council of the Cat Fancy (GCCF) in Great Britain in 1966 and started to breed Scottish Fold kittens with the help of geneticist Pat Turner. The breeding program produced 76 kittens in the first three years—42 with folded ears and 34 with straight ears. The conclusion from this was that the ear mutation is due to a simple dominant gene. \nSusie's only reproducing offspring was a female Fold named Snooks who was also white; a second kitten was neutered shortly after birth. Three months after Snooks' birth, Susie was killed by a car. All Scottish Fold cats share a common ancestry to Susie. \n",
   "img": "cSF"
 },
 {
   "id": 8,
   "Name": "Aengus",
   "Type": "Scottish Fold cat",
   "color": "Black",
   "Age": "36 month",
   "Gender": "Female",
   "Price": "145 BD",
   "Origin": "Scotland",
   "desc": "The original Scottish Fold was a white barn cat named Susie, who was found at a farm near Coupar Angus in Perthshire, Scotland, in 1961. Susie's ears had an unusual fold in their middle, making her resemble an owl. When Susie had kittens, two of them were born with folded ears, and one was acquired by William Ross, a neighbouring farmer and cat-fancier. Ross registered the breed with the Governing Council of the Cat Fancy (GCCF) in Great Britain in 1966 and started to breed Scottish Fold kittens with the help of geneticist Pat Turner. The breeding program produced 76 kittens in the first three years—42 with folded ears and 34 with straight ears. The conclusion from this was that the ear mutation is due to a simple dominant gene. \nSusie's only reproducing offspring was a female Fold named Snooks who was also white; a second kitten was neutered shortly after birth. Three months after Snooks' birth, Susie was killed by a car. All Scottish Fold cats share a common ancestry to Susie. \n",
   "img": "cSF"
 },
 {
   "id": 9,
   "Name": "Arctic",
   "Type": "Burmese cat",
   "color": "Brown",
   "Age": "8 month",
   "Gender": "Male",
   "Price": "150 BD",
   "Origin": "Burma",
   "desc": "The Burmese is a breed of domestic cat, originating in Thailand, believed to have its roots near the present Thai-Burma border and developed in the United States and Britain.\nMost modern Burmese are descendants of one female cat called Wong Mau, which was brought from Burma to America in 1930 and bred with American Siamese. From there, American and British breeders developed distinctly different Burmese breed standards, which is unusual among pedigreed domestic cats. Most modern cat registries do not formally recognize the two as separate breeds, but those that do refer to the British type as the European Burmese.\nOriginally, all Burmese cats were dark brown (sable), but are now available in a wide variety of colours; formal recognition of these also varies by standard. Both versions of the breed are known for their uniquely social and playful temperament and persistent vocalisation.\n",
   "img": "cSF"
 },
 {
   "id": 10,
   "Name": "Blacky",
   "Type": "Burmese cat",
   "color": "white",
   "Age": "12 month",
   "Gender": "Male",
   "Price": "180 BD",
   "Origin": "Burma",
   "desc": "The Burmese is a breed of domestic cat, originating in Thailand, believed to have its roots near the present Thai-Burma border and developed in the United States and Britain.\nMost modern Burmese are descendants of one female cat called Wong Mau, which was brought from Burma to America in 1930 and bred with American Siamese. From there, American and British breeders developed distinctly different Burmese breed standards, which is unusual among pedigreed domestic cats. Most modern cat registries do not formally recognize the two as separate breeds, but those that do refer to the British type as the European Burmese.\nOriginally, all Burmese cats were dark brown (sable), but are now available in a wide variety of colours; formal recognition of these also varies by standard. Both versions of the breed are known for their uniquely social and playful temperament and persistent vocalisation.\n",
   "img": "cBUR"
 },
 {
   "id": 11,
   "Name": "Cloud",
   "Type": "Burmese cat",
   "color": "Gray",
   "Age": "16 month",
   "Gender": "Female",
   "Price": "210 BD",
   "Origin": "Thailand",
   "desc": "The Burmese is a breed of domestic cat, originating in Thailand, believed to have its roots near the present Thai-Burma border and developed in the United States and Britain.\nMost modern Burmese are descendants of one female cat called Wong Mau, which was brought from Burma to America in 1930 and bred with American Siamese. From there, American and British breeders developed distinctly different Burmese breed standards, which is unusual among pedigreed domestic cats. Most modern cat registries do not formally recognize the two as separate breeds, but those that do refer to the British type as the European Burmese.\nOriginally, all Burmese cats were dark brown (sable), but are now available in a wide variety of colours; formal recognition of these also varies by standard. Both versions of the breed are known for their uniquely social and playful temperament and persistent vocalisation.\n",
   "img": "cBUR"
 },
 {
   "id": 12,
   "Name": "Baker",
   "Type": "Burmese cat",
   "color": "Black",
   "Age": "20 month",
   "Gender": "Female",
   "Price": "240 BD",
   "Origin": "Thailand",
   "desc": "The Burmese is a breed of domestic cat, originating in Thailand, believed to have its roots near the present Thai-Burma border and developed in the United States and Britain.\nMost modern Burmese are descendants of one female cat called Wong Mau, which was brought from Burma to America in 1930 and bred with American Siamese. From there, American and British breeders developed distinctly different Burmese breed standards, which is unusual among pedigreed domestic cats. Most modern cat registries do not formally recognize the two as separate breeds, but those that do refer to the British type as the European Burmese.\nOriginally, all Burmese cats were dark brown (sable), but are now available in a wide variety of colours; formal recognition of these also varies by standard. Both versions of the breed are known for their uniquely social and playful temperament and persistent vocalisation.\n",
   "img": "cBUR"
 }
];
return {
  all: function() {
    return catJSON;
  },
  get: function(catName) {
    for (var i = 0; i < catJSON.length; i++) {
      if (catJSON[i].id == catName) {

        return catJSON[i];
      }
    }

  }

};
}])
.factory('fishes', [function(){
var fishJSON=[
 {
   "id": 1,
   "Name": "Sunny",
   "Type": "Guppy",
   "color": "Blue",
   "Price": 2.5,
   "desc": "The guppy , also known as millionfish and rainbow fish, is one of the world's most widely distributed tropical fish, and one of the most popular freshwater aquarium fish species. It is a member of the family Poeciliidae and, like almost all American members of the family, is live-bearing. Guppies, whose natural range is in northeast South America, were introduced to many habitats and are now found all over the world. They are highly adaptable and thrive in many different environmental and ecological conditions. Male guppies, which are smaller than females, have ornamental caudal and dorsal fins, while females are duller in colour. Wild guppies generally feed on a variety of food sources, including benthic algae and aquatic insect larvae. Guppies are used as a model organism in the field of ecology, evolution, and behavioral studies.",
   "img": "fGUP"
 },
 {
   "id": 2,
   "Name": "Casper",
   "Type": "Guppy",
   "color": "Blue Green BiColor",
   "Price": 2.5,
   "desc": "The guppy , also known as millionfish and rainbow fish, is one of the world's most widely distributed tropical fish, and one of the most popular freshwater aquarium fish species. It is a member of the family Poeciliidae and, like almost all American members of the family, is live-bearing. Guppies, whose natural range is in northeast South America, were introduced to many habitats and are now found all over the world. They are highly adaptable and thrive in many different environmental and ecological conditions. Male guppies, which are smaller than females, have ornamental caudal and dorsal fins, while females are duller in colour. Wild guppies generally feed on a variety of food sources, including benthic algae and aquatic insect larvae. Guppies are used as a model organism in the field of ecology, evolution, and behavioral studies.",
   "img": "fGUP"
 },
 {
   "id": 3,
   "Name": "Bubbles",
   "Type": "Guppy",
   "color": "Bronze",
   "Price": 2.5,
   "desc": "The guppy , also known as millionfish and rainbow fish, is one of the world's most widely distributed tropical fish, and one of the most popular freshwater aquarium fish species. It is a member of the family Poeciliidae and, like almost all American members of the family, is live-bearing. Guppies, whose natural range is in northeast South America, were introduced to many habitats and are now found all over the world. They are highly adaptable and thrive in many different environmental and ecological conditions. Male guppies, which are smaller than females, have ornamental caudal and dorsal fins, while females are duller in colour. Wild guppies generally feed on a variety of food sources, including benthic algae and aquatic insect larvae. Guppies are used as a model organism in the field of ecology, evolution, and behavioral studies.",
   "img": "fGUP"
 },
 {
   "id": 4,
   "Name": "Boo",
   "Type": "Guppy",
   "color": "Green",
   "Price": 2.5,
   "desc": "The guppy , also known as millionfish and rainbow fish, is one of the world's most widely distributed tropical fish, and one of the most popular freshwater aquarium fish species. It is a member of the family Poeciliidae and, like almost all American members of the family, is live-bearing. Guppies, whose natural range is in northeast South America, were introduced to many habitats and are now found all over the world. They are highly adaptable and thrive in many different environmental and ecological conditions. Male guppies, which are smaller than females, have ornamental caudal and dorsal fins, while females are duller in colour. Wild guppies generally feed on a variety of food sources, including benthic algae and aquatic insect larvae. Guppies are used as a model organism in the field of ecology, evolution, and behavioral studies.",
   "img": "fGUP"
 },
 {
   "id": 5,
   "Name": "Charlie",
   "Type": "Guppy",
   "color": "Blue",
   "Price": 2.5,
   "desc": "The guppy , also known as millionfish and rainbow fish, is one of the world's most widely distributed tropical fish, and one of the most popular freshwater aquarium fish species. It is a member of the family Poeciliidae and, like almost all American members of the family, is live-bearing. Guppies, whose natural range is in northeast South America, were introduced to many habitats and are now found all over the world. They are highly adaptable and thrive in many different environmental and ecological conditions. Male guppies, which are smaller than females, have ornamental caudal and dorsal fins, while females are duller in colour. Wild guppies generally feed on a variety of food sources, including benthic algae and aquatic insect larvae. Guppies are used as a model organism in the field of ecology, evolution, and behavioral studies.",
   "img": "fGUP"
 },
 {
   "id": 6,
   "Name": "cura",
   "Type": "Siamese fighting fish",
   "color": "Blue Green BiColor",
   "Price": 5,
   "desc": "The Siamese fighting fish also sometimes colloquially known as the betta, is a species in the gourami family which is popular as an aquarium fish. Bettas can be territorial fish and are prone to high levels of aggression towards each other. Two males in proximity will almost always attack each other, if they do not have the ability to escape this will usually result in the death of one or both of the fish. Female bettas can also become territorial towards each other if they are housed in too small an aquarium. It is typically not recommended to keep male and female bettas together, except temporarily for breeding purposes which should always be undertaken with caution.",
   "img": "fSF"
 },
 {
   "id": 7,
   "Name": "Cutie Pie",
   "Type": "Siamese fighting fish",
   "color": "Bronze",
   "Price": 5,
   "desc": "The Siamese fighting fish also sometimes colloquially known as the betta, is a species in the gourami family which is popular as an aquarium fish. Bettas can be territorial fish and are prone to high levels of aggression towards each other. Two males in proximity will almost always attack each other, if they do not have the ability to escape this will usually result in the death of one or both of the fish. Female bettas can also become territorial towards each other if they are housed in too small an aquarium. It is typically not recommended to keep male and female bettas together, except temporarily for breeding purposes which should always be undertaken with caution.",
   "img": "fSF"
 },
 {
   "id": 8,
   "Name": "cookie johsthon",
   "Type": "Siamese fighting fish",
   "color": "Green",
   "Price": 5,
   "desc": "The Siamese fighting fish also sometimes colloquially known as the betta, is a species in the gourami family which is popular as an aquarium fish. Bettas can be territorial fish and are prone to high levels of aggression towards each other. Two males in proximity will almost always attack each other, if they do not have the ability to escape this will usually result in the death of one or both of the fish. Female bettas can also become territorial towards each other if they are housed in too small an aquarium. It is typically not recommended to keep male and female bettas together, except temporarily for breeding purposes which should always be undertaken with caution.",
   "img": "fSF"
 },
 {
   "id": 9,
   "Name": "Draco",
   "Type": "Siamese fighting fish",
   "color": "Blue",
   "Price": 5,
   "desc": "The Siamese fighting fish also sometimes colloquially known as the betta, is a species in the gourami family which is popular as an aquarium fish. Bettas can be territorial fish and are prone to high levels of aggression towards each other. Two males in proximity will almost always attack each other, if they do not have the ability to escape this will usually result in the death of one or both of the fish. Female bettas can also become territorial towards each other if they are housed in too small an aquarium. It is typically not recommended to keep male and female bettas together, except temporarily for breeding purposes which should always be undertaken with caution.",
   "img": "fSF"
 },
 {
   "id": 10,
   "Name": "Dusty",
   "Type": "Oscar fish",
   "color": "Blue Green BiColor",
   "Price": 7,
   "desc": "The oscar  is a species of fish from the cichlid family known under a variety of common names, including tiger oscar, velvet cichlid, and marble cichlid. In tropical South America, where the species naturally resides, A. ocellatus specimens are often found for sale as a food fish in the local markets. The fish has been introduced to other areas, including China, Australia, and the United States. It is considered a popular aquarium fish in Europe and the U.S. ",
   "img": "fOSC"
 },
 {
   "id": 11,
   "Name": "Ezekiel",
   "Type": "Oscar fish",
   "color": "Bronze",
   "Price": 7,
   "desc": "The oscar  is a species of fish from the cichlid family known under a variety of common names, including tiger oscar, velvet cichlid, and marble cichlid. In tropical South America, where the species naturally resides, A. ocellatus specimens are often found for sale as a food fish in the local markets. The fish has been introduced to other areas, including China, Australia, and the United States. It is considered a popular aquarium fish in Europe and the U.S. ",
   "img": "fOSC"
 },
 {
   "id": 12,
   "Name": "Fancy and Pal",
   "Type": "Oscar fish",
   "color": "Green",
   "Price": 7,
   "desc": "The oscar  is a species of fish from the cichlid family known under a variety of common names, including tiger oscar, velvet cichlid, and marble cichlid. In tropical South America, where the species naturally resides, A. ocellatus specimens are often found for sale as a food fish in the local markets. The fish has been introduced to other areas, including China, Australia, and the United States. It is considered a popular aquarium fish in Europe and the U.S. ",
   "img": "fOSC"
 }
];
return {
  all: function() {
    return fishJSON;
  },
  get: function(fishName) {
    for (var i = 0; i < fishJSON.length; i++) {
      if (fishJSON[i].id == fishName) {

        return fishJSON[i];
      }
    }

  }

};
}])
.factory('NewsFactory', ['$http',function($http){
 var rss_converter = "https://rss2json.com/api.json?rss_url=";
 return {
 getNewsFeed: function(url) {
 return $http.get(rss_converter+ encodeURIComponent(url));
 }
};
}])

.service('BlankService', [function(){

}]);

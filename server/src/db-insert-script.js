var Mongo = require("mongodb").MongoClient;
var url = "mongodb://localhost/deliveryAPI";

var restaurantMock = {
	name: "La Perrada de Pepe",
	locations: [{
		coordinate: {
			latitude: 4.542426,
			longitude: -75.6744786,
		},
		name: "Avenida Carrera 19 # 10N - 13"
	}, {
		coordinate: {
			latitude: 4.5434261,
			longitude: -75.6649467,
		},
		name: "Carrera 21 # 56N - 13"
	}, {
		coordinate: {
			latitude: 4.5362498,
			longitude: -75.6731621,
		},
		name: "Parque Fundadores"
	}],
	catalog: {
		food: [{
			burgers: [{
				name: "Cocheros Simple",
				ingredients: [
					"125 lbs Carne Res",
					"Tomate, Cebolla, Lechuga",
					"Queso Americano"
				],
				price: 100
			}, {
				name: "Cocheros Ranger",
				ingredients: [
					"175 lbs Carne Res",
					"Tomate, Cebolla, Lechuga",
					"Doble Queso Americano",
					"Doble Tocineta"
				],
				price: 150
			}],
			Dogs: [{
				name: "Cocheros Dog",
				ingredients: [
					"100 lbs Salchicha Suiza",
					"Tocineta",
					"Queso Americano"
				],
				price: 80
			}]
		}],
		beverage: [{
			name: "Coca-Cola",
			price: 23
		}]
	},
	bannerImage: "img"
};

Mongo.connect(url, function (err, db) {

	try {

		if (err) throw err;

		db.collection('restaurants').remove();
		db.collection('orders').remove();

		db.collection("restaurants").find({
			name: "La Perrada de Pepe"
		}, function (err, results) {

			if (err) throw err;

			results.toArray().then(function (array) {

				if (array.length === 0) {
					db.collection("restaurants").insertOne(restaurantMock, function (err, res) {
						if (err) throw err;
						console.log("1 document inserted");
					});
				} else {
					console.log("document exists");
				}

				db.close();
			});

		});

	} catch (e) {
		db.close();
		console.log(e);
	}
});
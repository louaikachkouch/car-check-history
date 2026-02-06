// Fake car database with VINs
export const carDatabase = {
  "WBAJB9C51KB286123": {
    vin: "WBAJB9C51KB286123",
    year: 2019,
    make: "BMW",
    model: "X5 xDrive40i",
    trim: "Sport Line",
    engine: "3.0L Turbo I6",
    transmission: "8-Speed Automatic",
    drivetrain: "AWD",
    fuelType: "Essence",
    color: "Blanc Alpin",
    interiorColor: "Cuir Noir",
    mileage: 45230,
    owners: 2,
    price: 45000,
    status: "Clean",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&auto=format&fit=crop&q=60",
    titleHistory: [
      { date: "2019-03-15", event: "Titre Original Émis", location: "Californie", status: "clean" },
      { date: "2021-08-22", event: "Transfert de Titre", location: "Californie", status: "clean" },
      { date: "2023-01-10", event: "Transfert de Titre", location: "Nevada", status: "clean" }
    ],
    serviceHistory: [
      { date: "2019-06-10", mileage: 5000, service: "Premier Entretien - Vidange & Inspection", shop: "BMW of Beverly Hills" },
      { date: "2020-01-15", mileage: 15230, service: "Remplacement Plaquettes de Frein", shop: "BMW of Beverly Hills" },
      { date: "2020-08-20", mileage: 25100, service: "Entretien Annuel", shop: "AutoNation BMW" },
      { date: "2021-12-05", mileage: 35800, service: "Remplacement Pneus (4)", shop: "Discount Tire" },
      { date: "2023-06-18", mileage: 44500, service: "Vidange & Filtre", shop: "Jiffy Lube" }
    ],
    accidents: [],
    recalls: [
      { date: "2020-05-15", description: "Rappel Gonfleur Airbag", status: "Terminé", nhtsa: "20V-234" }
    ],
    damageRecords: [],
    odometerReadings: [
      { date: "2019-03-15", mileage: 12, source: "Titre" },
      { date: "2020-01-15", mileage: 15230, source: "Entretien" },
      { date: "2021-08-22", mileage: 32500, source: "Titre" },
      { date: "2023-01-10", mileage: 42100, source: "Titre" },
      { date: "2024-02-01", mileage: 45230, source: "Actuel" }
    ],
    specifications: {
      bodyStyle: "SUV",
      doors: 4,
      seats: 5,
      horsepower: 335,
      torque: "330 lb-ft",
      mpgCity: 21,
      mpgHighway: 26,
      fuelTank: "21.9 gal",
      length: "194.3 in",
      width: "78.9 in",
      height: "69.0 in",
      wheelbase: "117.1 in",
      curbWeight: "4813 lbs"
    },
    marketValue: {
      average: 45000,
      low: 41000,
      high: 49000
    }
  },
  "WP0AB2A91MS227456": {
    vin: "WP0AB2A91MS227456",
    year: 2021,
    make: "Porsche",
    model: "911 Carrera S",
    trim: "Carrera S",
    engine: "3.0L Twin-Turbo Flat-6",
    transmission: "8-Speed PDK",
    drivetrain: "RWD",
    fuelType: "Essence Premium",
    color: "Gris GT Métallisé",
    interiorColor: "Cuir Noir/Rouge Bordeaux",
    mileage: 12500,
    owners: 1,
    price: 112000,
    status: "Warning",
    issueText: "Accident Mineur",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format&fit=crop&q=60",
    titleHistory: [
      { date: "2021-02-28", event: "Titre Original Émis", location: "New York", status: "clean" },
      { date: "2023-11-15", event: "Accident Mineur Signalé", location: "New York", status: "warning" }
    ],
    serviceHistory: [
      { date: "2021-05-10", mileage: 1200, service: "Premier Entretien", shop: "Porsche Manhattan" },
      { date: "2022-03-22", mileage: 5800, service: "Entretien Annuel & Inspection", shop: "Porsche Manhattan" },
      { date: "2023-04-15", mileage: 9200, service: "Changement Liquide de Frein", shop: "Porsche Manhattan" },
      { date: "2024-01-08", mileage: 12100, service: "Vidange", shop: "Porsche Long Island" }
    ],
    accidents: [
      { 
        date: "2023-11-10", 
        severity: "Mineur",
        description: "Dommages au pare-chocs arrière suite à une collision sur parking",
        repairCost: 4500,
        airbags: "Non Déclenchés",
        driveable: true,
        location: "New York, NY"
      }
    ],
    recalls: [],
    damageRecords: [
      { date: "2023-11-10", type: "Collision", area: "Rear Bumper", severity: "Minor", repaired: true }
    ],
    odometerReadings: [
      { date: "2021-02-28", mileage: 8, source: "Titre" },
      { date: "2022-03-22", mileage: 5800, source: "Entretien" },
      { date: "2024-01-08", mileage: 12100, source: "Entretien" },
      { date: "2024-02-01", mileage: 12500, source: "Actuel" }
    ],
    specifications: {
      bodyStyle: "Coupé",
      doors: 2,
      seats: 4,
      horsepower: 443,
      torque: "390 lb-ft",
      mpgCity: 18,
      mpgHighway: 24,
      fuelTank: "16.9 gal",
      length: "178.0 in",
      width: "72.9 in",
      height: "51.1 in",
      wheelbase: "96.5 in",
      curbWeight: "3382 lbs"
    },
    marketValue: {
      average: 112000,
      low: 105000,
      high: 120000
    }
  },
  "5YJ3E1EA5PF384789": {
    vin: "5YJ3E1EA5PF384789",
    year: 2023,
    make: "Tesla",
    model: "Model 3",
    trim: "Long Range",
    engine: "Moteur Électrique Double",
    transmission: "Vitesse Unique",
    drivetrain: "AWD",
    fuelType: "Électrique",
    color: "Blanc Nacré Multi-Couches",
    interiorColor: "Intérieur Premium Noir",
    mileage: 8200,
    owners: 1,
    price: 38900,
    status: "Clean",
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&auto=format&fit=crop&q=60",
    titleHistory: [
      { date: "2023-04-12", event: "Titre Original Émis", location: "Texas", status: "clean" }
    ],
    serviceHistory: [
      { date: "2023-10-15", mileage: 5000, service: "Inspection Annuelle", shop: "Tesla Service Center Austin" },
      { date: "2024-01-20", mileage: 8000, service: "Rotation des Pneus", shop: "Tesla Service Center Austin" }
    ],
    accidents: [],
    recalls: [],
    damageRecords: [],
    odometerReadings: [
      { date: "2023-04-12", mileage: 15, source: "Titre" },
      { date: "2023-10-15", mileage: 5000, source: "Entretien" },
      { date: "2024-02-01", mileage: 8200, source: "Actuel" }
    ],
    specifications: {
      bodyStyle: "Berline",
      doors: 4,
      seats: 5,
      horsepower: 346,
      torque: "389 lb-ft",
      range: "333 miles",
      batteryCapacity: "82 kWh",
      acceleration: "4.2s 0-60 mph",
      length: "184.8 in",
      width: "72.8 in",
      height: "56.8 in",
      wheelbase: "113.2 in",
      curbWeight: "4034 lbs"
    },
    marketValue: {
      average: 38900,
      low: 35000,
      high: 42000
    }
  }
};

export function getCarByVin(vin) {
  return carDatabase[vin.toUpperCase()] || null;
}

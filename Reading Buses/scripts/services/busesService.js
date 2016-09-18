function busesService($http) {
    var buses = [
            {
                number: "1", start: "Newbury", end: "Central Reading Station", stops: [
                  { name: "Caversham Library" },
                  { name: "Friar Street" }
                ]
            },
            { number: "2", start: "The Street", end: "Central Reading Station" },
            { number: "3", start: "Wokingham", end: "Central Reading Station" },
            { number: "4", start: "Bracknell", end: "Central Reading Station" },
            { number: "5", start: "Northumberland Avenue", end: "Station Road" },
            { number: "6", start: "Engineer’s Court", end: "Central Reading Station" },
            { number: "9", start: "Shinfield Park ", end: "Central Reading Station" },
            { number: "11", start: "Coley Park", end: "Friar Street" },
            { number: "13", start: "Woodley Piazza ", end: "Central Reading" },
            { number: "14", start: "Vauxhall Drive", end: "Central Reading" },
            { number: "15", start: "Calcot", end: "Central Reading Station" },
            { number: "16", start: "Purley", end: "Central Reading Station" },
            { number: "17", start: "Wokingham Road", end: "Tilehurst" },
            { number: "18", start: "Lowfield Road, Earlsfield Close", end: "Denefield School" },
            { number: "19a", start: "Central Reading Station", end: "Central Reading Station" },
            { number: "19b", start: "Central Reading", end: "Chalfont Way" },
            { number: "19c", start: "Central Reading", end: "Central Reading" },
            { number: "21", start: "Reading Station", end: "Hawkedon Way" },
            { number: "22", start: "St Andrew's Church ", end: "Central Reading" },
            { number: "23", start: "Queensway", end: "Central Reading" },
            { number: "24", start: "Chalgrove Way", end: "Central Reading" },
            { number: "25", start: "Central Reading", end: "Peppard Common" },
            { number: "26", start: "Calcot", end: "Reading Station" },
            { number: "27", start: "Lower Caversham", end: "Central Reading" },
            { number: "28", start: "Lowfield Road, Earlsfield Close", end: "Denefield School" },
            { number: "29", start: "Lower Caversham", end: "Central Reading" },
            { number: "33", start: "Central Reading", end: "Hildens Drive" },
            { number: "GP", start: "Green Park", end: "Greenwave" },
            { number: "RIBP", start: "Reading Station", end: "Station Road" },
            { number: "MAD", start: "Madejski Stadium P&R", end: "Reading Station" },
            { number: "KI", start: "Kennet Island", end: "Station Road" },
            { number: "82", start: "Dog and Partridge, Riseley", end: "Central Reading" },
            { number: "82k", start: "Riseley ", end: "Reading Station" },
            { number: "919", start: "Beech Lane", end: "Silverdale Road" },
            { number: "921", start: "Chiltern Edge School", end: "Caversham Road" },
            { number: "922", start: "Chiltern Edge School", end: "Caversham Road" },
            { number: "923", start: "Chiltern Edge School", end: "Amersham Road" },
            { number: "981", start: "St Andrew's Church", end: "Beaufield Close" },
            { number: "983", start: "Bulmershe School", end: "Lower Earley" },
            { number: "991", start: "Denefield School", end: "Whitley Wood" }
    ];

    this.getBuses = function () {
        return buses;
    }
}

busesService.$inject = ["$http"];
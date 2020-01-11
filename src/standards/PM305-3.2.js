/*
*
* https://www.vektis.nl/streams/standaardisatie/standaarden/PM305-3.2
*
*/
module.exports["fullWidth"] = 370;

module.exports["kenmerkToRecordName"] = {
    "01": "Voorlooprecord",
    "02": "Verzekerdenrecord",
    "04": "Prestatierecord",
    "98": "Commentaarrecord",
    "99": "Sluitrecord"
};

module.exports["01"] = [
    {
        name: "Kenmerk record",
        width: 2,
        end: 2,
        start: 1,
        type: "string"
    },
    {
        name: "Code externe-integratiebericht",
        width: 3,
        end: 5,
        start: 3,
        type: "string"
    },
    {
        name: "Versienummer berichtstandaard",
        width: 2,
        end: 7,
        start: 6,
        type: "string"
    },
    {
        name: "Subversienummer berichtstandaard",
        width: 2,
        end: 9,
        start: 8,
        type: "string"
    },
    {
        name: "Soort bericht",
        width: 1,
        end: 10,
        start: 10,
        type: "string",
        padding_position: "end"
    },
    {
        name: "Code informatiesysteem softwareleverancier",
        width: 6,
        end: 16,
        start: 11,
        type: "string"
    },
    {
        name: "Versieaanduiding informatiesysteem softwareleverancier",
        width: 10,
        end: 26,
        start: 17,
        type: "string",
        padding_position: "end"
    },
    {
        name: "Uzovi-nummer",
        width: 4,
        end: 30,
        start: 27,
        type: "string"
    },
    {
        name: "Code servicebureau",
        width: 8,
        end: 38,
        start: 31,
        type: "string"
    },
    {
        name: "Zorgverlenerscode",
        width: 8,
        end: 46,
        start: 39,
        type: "string"
    },
    {
        name: "Praktijkcode",
        width: 8,
        end: 54,
        start: 47,
        type: "string"
    },
    {
        name: "Instellingscode",
        width: 8,
        end: 62,
        start: 55,
        type: "string"
    },
    {
        name: "Identificatiecode betaling aan",
        width: 2,
        end: 64,
        start: 63,
        type: "string"
    },
    {
        name: "Begindatum declaratieperiode",
        width: 8,
        end: 72,
        start: 65,
        type: "string"
    },
    {
        name: "Einddatum declaratieperiode",
        width: 8,
        end: 80,
        start: 73,
        type: "string"
    },
    {
        name: "Factuurnummer declarant",
        width: 12,
        end: 92,
        start: 81,
        type: "string",
        padding_position: "end"
    },
    {
        name: "Dagtekening factuur",
        width: 8,
        end: 100,
        start: 93,
        type: "string"
    },
    {
        name: "Btw-identificatienummer",
        width: 14,
        end: 114,
        start: 101,
        type: "string",
        padding_position: "end"
    },
    {
        name: "Valutacode",
        width: 3,
        end: 117,
        start: 115,
        type: "string",
        padding_position: "end"
    },
    {
        name: "Reserve",
        width: 193,
        end: 310,
        start: 118,
        type: "string",
        padding_position: "end"
    },
    {
        name: "Referentienummer zorgverzekeraar",
        width: 24,
        end: 334,
        start: 311,
        type: "string",
        padding_position: "end"
    },
    {
        name: "Dagtekening retourbericht",
        width: 8,
        end: 342,
        start: 337,
        type: "string",
        padding_position: "end"
    },
    {
        name: "Retourcode (01)",
        width: 4,
        end: 346,
        start: 343,
        type: "string",
        padding_position: "end"
    },
    {
        name: "Retourcode (02)",
        width: 4,
        end: 350,
        start: 347,
        type: "string",
        padding_position: "end"
    },
    {
        name: "Retourcode (03)",
        width: 4,
        end: 354,
        start: 351,
        type: "string",
        padding_position: "end"
    },
    {
        name: "Reserve",
        width: 16,
        end: 370,
        start: 355,
        type: "string",
        padding_position: "end"
    }
];

module.exports["02"] = [
    {
        name: "Kenmerk record",
        width: 2,
        end: 2,
        start: 1,
        type: "string"
    },
    {
        name: "Identificatie detailrecord",
        width: 12,
        end: 14,
        start: 3,
        type: "string"
    },
    {
        name: "Burgerservicenummer (bsn) verzekerde",
        width: 9,
        end: 23,
        start: 15,
        type: "string"
    },
    {
        name: "Uzovi-nummer",
        width: 4,
        end: 27,
        start: 24,
        type: "string"
    },
    {
        name: "Verzekerdennummer (inschrijvingsnummer, relatienummer)",
        width: 15,
        end: 42,
        start: 28,
        type: "string",
        padding_position: "end"
    },
    {
        name: "Patient(identificatie)nummer",
        width: 11,
        end: 53,
        start: 43,
        type: "string",
        padding_position: "end"
    },
    {
        name: "Datum geboorte verzekerde",
        width: 8,
        end: 61,
        start: 54,
        type: "string"
    },
    {
        name: "Code geslacht verzekerde",
        width: 1,
        end: 62,
        start: 62,
        type: "string"
    },
    {
        name: "Naamcode/naamgebruik (01)",
        width: 1,
        end: 63,
        start: 63,
        type: "string"
    },
    {
        name: "Naam verzekerde (01)",
        width: 25,
        end: 88,
        start: 64,
        type: "string",
        padding_position: "end"
    },
    {
        name: "Voorvoegsel verzekerde (01)",
        width: 10,
        end: 98,
        start: 89,
        type: "string",
        padding_position: "end"
    },
    {
        name: "Naamcode/naamgebruik (02)",
        width: 1,
        end: 99,
        start: 99,
        type: "string"
    },
    {
        name: "Naam verzekerde (02)",
        width: 25,
        end: 124,
        start: 100,
        type: "string",
        padding_position: "end"
    },
    {
        name: "Voorvoegsel verzekerde (02)",
        width: 10,
        end: 134,
        start: 125,
        type: "string",
        padding_position: "end"
    },
    {
        name: "Voorletters verzekerde",
        width: 6,
        end: 140,
        start: 135,
        type: "string",
        padding_position: "end"
    },
    {
        name: "Naamcode/naamgebruik (03)",
        width: 1,
        end: 141,
        start: 141,
        type: "string"
    },
    {
        name: "Postcode (huisadres) verzekerde",
        width: 6,
        end: 147,
        start: 142,
        type: "string",
        padding_position: "end"
    },
    {
        name: "Postcode buitenland",
        width: 9,
        end: 156,
        start: 148,
        type: "string",
        padding_position: "end"
    },
    {
        name: "Huisnummer (huisadres) verzekerde",
        width: 5,
        end: 161,
        start: 157,
        type: "string"
    },
    {
        name: "Huisnummertoevoeging (huisadres) verzekerde",
        width: 6,
        end: 167,
        start: 162,
        type: "string",
        padding_position: "end"
    },
    {
        name: "Code land verzekerde",
        width: 2,
        end: 169,
        start: 168,
        type: "string",
        padding_position: "end"
    },
    {
        name: "Debiteurnummer",
        width: 11,
        end: 180,
        start: 170,
        type: "string",
        padding_position: "end"
    },
    {
        name: "Reserve",
        width: 130,
        end: 310,
        start: 181,
        type: "string",
        padding_position: "end"
    },
    {
        name: "Retourcode (01)",
        width: 4,
        end: 314,
        start: 311,
        type: "string",
        padding_position: "end"
    },
    {
        name: "Retourcode (02)",
        width: 4,
        end: 318,
        start: 315,
        type: "string",
        padding_position: "end"
    },
    {
        name: "Retourcode (03)",
        width: 4,
        end: 322,
        start: 319,
        type: "string",
        padding_position: "end"
    },
    {
        name: "Reserve",
        width: 48,
        end: 370,
        start: 323,
        type: "string",
        padding_position: "end"
    }
];
module.exports["04"] = [
    {
        name: "Kenmerk record",
        width: 2,
        end: 2,
        start: 1,
        type: "string"
    },
    {
        name: "Identificatie detailrecord",
        width: 12,
        end: 14,
        start: 3,
        type: "string"
    },
    {
        name: "Burgerservicenummer (bsn) verzekerde",
        width: 9,
        end: 23,
        start: 15,
        type: "string"
    },
    {
        name: "Uzovi-nummer",
        width: 4,
        end: 27,
        start: 24,
        type: "string"
    },
    {
        name: "Verzekerdennummer (inschrijvingsnummer, relatienummer)",
        width: 15,
        end: 42,
        start: 28,
        type: "string",
        padding_position: "end"
    },
    {
        name: "Machtigingsnummer",
        width: 15,
        end: 57,
        start: 43,
        type: "string",
        padding_position: "end"
    },
    {
        name: "Doorsturen toegestaan",
        width: 1,
        end: 58,
        start: 58,
        type: "string"
    },
    {
        name: "Datum prestatie",
        width: 8,
        end: 66,
        start: 59,
        type: "string"
    },
    {
        name: "Aanduiding prestatiecodelijst",
        width: 3,
        end: 69,
        start: 67,
        type: "string"
    },
    {
        name: "Prestatiecode",
        width: 6,
        end: 75,
        start: 70,
        type: "string",
        padding_position: "end"
    },
    {
        name: "Aantal uitgevoerde prestaties",
        width: 4,
        end: 79,
        start: 76,
        type: "string"
    },
    {
        name: "Indicatie ongeval (ongevalsgevolg)",
        width: 1,
        end: 80,
        start: 80,
        type: "string"
    },
    {
        name: "Aanduiding diagnosecodelijst (01)",
        width: 3,
        end: 83,
        start: 81,
        type: "string"
    },
    {
        name: "Verwijsdiagnosecode paramedische hulp (01)",
        width: 8,
        end: 91,
        start: 84,
        type: "string"
    },
    {
        name: "Aanduiding diagnosecodelijst (02)",
        width: 3,
        end: 93,
        start: 92,
        type: "string"
    },
    {
        name: "Verwijsdiagnosecode paramedische hulp (02)",
        width: 8,
        end: 102,
        start: 95,
        type: "string"
    },
    {
        name: "Aanduiding diagnosecodelijst (03)",
        width: 3,
        end: 105,
        start: 103,
        type: "string"
    },
    {
        name: "Paramedische diagnosecode (01)",
        width: 8,
        end: 113,
        start: 106,
        type: "string",
        padding_position: "end"
    },
    {
        name: "Aanduiding diagnosecodelijst (04)",
        width: 3,
        end: 116,
        start: 114,
        type: "string"
    },
    {
        name: "Paramedische diagnosecode (02)",
        width: 8,
        end: 124,
        start: 117,
        type: "string",
        padding_position: "end"
    },
    {
        name: "Code soort indicatie paramedische hulp",
        width: 3,
        end: 127,
        start: 125,
        type: "string"
    },
    {
        name: "Zorgverlenerscode behandelaar/uitvoerder",
        width: 8,
        end: 135,
        start: 128,
        type: "string"
    },
    {
        name: "Specialisme behandelaar/uitvoerder",
        width: 4,
        end: 139,
        start: 136,
        type: "string"
    },
    {
        name: "Verwijsdatum",
        width: 8,
        end: 147,
        start: 140,
        type: "string"
    },
    {
        name: "Zorgverlenerscode voorschrijver/verwijzer",
        width: 8,
        end: 155,
        start: 148,
        type: "string"
    },
    {
        name: "Specialisme voorschrijver/verwijzer",
        width: 4,
        end: 159,
        start: 156,
        type: "string"
    },
    {
        name: "Reden einde zorg",
        width: 2,
        end: 161,
        start: 160,
        type: "string"
    },
    {
        name: "Tarief prestatie (incl. btw)",
        width: 8,
        end: 169,
        start: 162,
        type: "string"
    },
    {
        name: "Berekend bedrag (incl. btw)",
        width: 8,
        end: 177,
        start: 170,
        type: "string"
    },
    {
        name: "Indicatie debet/credit (01)",
        width: 1,
        end: 178,
        start: 178,
        type: "string",
        padding_position: "end"
    },
    {
        name: "Btw-percentage declaratiebedrag",
        width: 4,
        end: 182,
        start: 179,
        type: "string"
    },
    {
        name: "Declaratiebedrag (incl. btw)",
        width: 8,
        end: 190,
        start: 183,
        type: "string"
    },
    {
        name: "Indicatie debet/credit (02)",
        width: 1,
        end: 191,
        start: 191,
        type: "string",
        padding_position: "end"
    },
    {
        name: "Referentienummer dit prestatierecord",
        width: 20,
        end: 211,
        start: 192,
        type: "string",
        padding_position: "end"
    },
    {
        name: "Referentienummer voorgaande gerelateerde prestatierecord",
        width: 20,
        end: 231,
        start: 212,
        type: "string",
        padding_position: "end"
    },
    {
        name: "Reserve",
        width: 79,
        end: 310,
        start: 232,
        type: "string",
        padding_position: "end"
    },
    {
        name: "Berekend bedrag zorgverzekeraar",
        width: 8,
        end: 318,
        start: 311,
        type: "string",
        padding_position: "end"
    },
    {
        name: "Indicatie debet/credit (03)",
        width: 1,
        end: 319,
        start: 319,
        type: "string",
        padding_position: "end"
    },
    {
        name: "Toegekend bedrag",
        width: 8,
        end: 327,
        start: 320,
        type: "string",
        padding_position: "end"
    },
    {
        name: "Indicatie debet/credit (04)",
        width: 1,
        end: 328,
        start: 323,
        type: "string",
        padding_position: "end"
    },
    {
        name: "Retourcode (01)",
        width: 4,
        end: 332,
        start: 229,
        type: "string",
        padding_position: "end"
    },
    {
        name: "Retourcode (02)",
        width: 4,
        end: 336,
        start: 333,
        type: "string",
        padding_position: "end"
    },
    {
        name: "Retourcode (03)",
        width: 4,
        end: 340,
        start: 337,
        type: "string",
        padding_position: "end"
    },
    {
        name: "Reserve",
        width: 30,
        end: 370,
        start: 341,
        type: "string",
        padding_position: "end"
    }
];
module.exports["98"] = [
    {
        name: "Kenmerk record",
        width: 2,
        end: 2,
        start: 1,
        type: "string"
    },
    {
        name: "Identificatie detailrecord",
        width: 12,
        end: 2,
        start: 3,
        type: "string"
    },
    {
        name: "Regelnummer vrije tekst",
        width: 4,
        end: 2,
        start: 15,
        type: "string"
    },
    {
        name: "Vrije tekst",
        width: 140,
        end: 2,
        start: 19,
        type: "string",
        padding_position: "end"
    },
    {
        name: "Reserve",
        width: 152,
        end: 2,
        start: 159,
        type: "string",
        padding_position: "end"
    }
];
module.exports["99"] = [
    {
        name: "Kenmerk record",
        width: 2,
        end: 2,
        start: 1,
        type: "string"
    },
    {
        name: "Aantal verzekerdenrecords",
        width: 6,
        end: 2,
        start: 3,
        type: "string"
    },
    {
        name: "Aantal debiteurrecords",
        width: 6,
        end: 2,
        start: 9,
        type: "string"
    },
    {
        name: "Aantal prestatierecords",
        width: 6,
        end: 2,
        start: 15,
        type: "string"
    },
    {
        name: "Aantal commentaarrecords",
        width: 6,
        end: 2,
        start: 21,
        type: "string"
    },
    {
        name: "Totaal aantal detailrecords",
        width: 7,
        end: 2,
        start: 27,
        type: "string"
    },
    {
        name: "Totaal declaratiebedrag",
        width: 11,
        end: 2,
        start: 34,
        type: "string"
    },
    {
        name: "Indicatie debet/credit",
        width: 1,
        end: 2,
        start: 45,
        type: "string",
        padding_position: "end"
    },
    {
        name: "Reserve",
        width: 265,
        end: 2,
        start: 46,
        type: "string",
        padding_position: "end"
    }
];

/*
*
* https://www.vektis.nl/streams/standaardisatie/standaarden/PM304-3.2
*
*/
module.exports["fullWidth"] = 310;

module.exports["Voorlooprecord"] = [
  {
    name: "Kenmerk record",
    width: 2,
    start: 1,
    type: "string"
  },
  {
    name: "Code externe-integratiebericht",
    width: 3,
    start: 3,
    type: "string"
  },
  {
    name: "Versienummer berichtstandaard",
    width: 2,
    start: 6,
    type: "string"
  },
  {
    name: "Subversienummer berichtstandaard",
    width: 2,
    start: 8,
    type: "string"
  },
  {
    name: "Soort bericht",
    width: 1,
    start: 10,
    type: "string",
    padding_position: "end"
  },
  {
    name: "Code informatiesysteem softwareleverancier",
    width: 6,
    start: 11,
    type: "string"
  },
  {
    name: "Versieaanduiding informatiesysteem softwareleverancier",
    width: 10,
    start: 17,
    type: "string",
    padding_position: "end"
  },
  {
    name: "Uzovi-nummer",
    width: 4,
    start: 27,
    type: "string"
  },
  {
    name: "Code servicebureau",
    width: 8,
    start: 31,
    type: "string"
  },
  {
    name: "Zorgverlenerscode",
    width: 8,
    start: 39,
    type: "string"
  },
  {
    name: "Praktijkcode",
    width: 8,
    start: 47,
    type: "string"
  },
  {
    name: "Instellingscode",
    width: 8,
    start: 55,
    type: "string"
  },
  {
    name: "Identificatiecode betaling aan",
    width: 2,
    start: 63,
    type: "string"
  },
  {
    name: "Begindatum declaratieperiode",
    width: 8,
    start: 65,
    type: "string"
  },
  {
    name: "Einddatum declaratieperiode",
    width: 8,
    start: 73,
    type: "string"
  },
  {
    name: "Factuurnummer declarant",
    width: 12,
    start: 81,
    type: "string",
    padding_position: "end"
  },
  {
    name: "Dagtekening factuur",
    width: 8,
    start: 93,
    type: "string"
  },
  {
    name: "Btw-identificatienummer",
    width: 14,
    start: 101,
    type: "string",
    padding_position: "end"
  },
  {
    name: "Valutacode",
    width: 3,
    start: 115,
    type: "string",
    padding_position: "end"
  },
  {
    name: "Reserve",
    width: 193,
    start: 118,
    type: "string",
    padding_position: "end"
  }
];

module.exports["Verzekerdenrecord"] = [
  {
    name: "Kenmerk record",
    width: 2,
    start: 1,
    type: "string"
  },
  {
    name: "Identificatie detailrecord",
    width: 12,
    start: 3,
    type: "string"
  },
  {
    name: "Burgerservicenummer (bsn) verzekerde",
    width: 9,
    start: 15,
    type: "string"
  },
  {
    name: "Uzovi-nummer",
    width: 4,
    start: 24,
    type: "string"
  },
  {
    name: "Verzekerdennummer (inschrijvingsnummer, relatienummer)",
    width: 15,
    start: 28,
    type: "string",
    padding_position: "end"
  },
  {
    name: "Patient(identificatie)nummer",
    width: 11,
    start: 43,
    type: "string",
    padding_position: "end"
  },
  {
    name: "Datum geboorte verzekerde",
    width: 8,
    start: 54,
    type: "string"
  },
  {
    name: "Code geslacht verzekerde",
    width: 1,
    start: 62,
    type: "string"
  },
  {
    name: "Naamcode/naamgebruik (01)",
    width: 1,
    start: 63,
    type: "string"
  },
  {
    name: "Naam verzekerde (01)",
    width: 25,
    start: 64,
    type: "string",
    padding_position: "end"
  },
  {
    name: "Voorvoegsel verzekerde (01)",
    width: 10,
    start: 89,
    type: "string",
    padding_position: "end"
  },
  {
    name: "Naamcode/naamgebruik (02)",
    width: 1,
    start: 99,
    type: "string"
  },
  {
    name: "Naam verzekerde (02)",
    width: 25,
    start: 100,
    type: "string",
    padding_position: "end"
  },
  {
    name: "Voorvoegsel verzekerde (02)",
    width: 10,
    start: 125,
    type: "string",
    padding_position: "end"
  },
  {
    name: "Voorletters verzekerde",
    width: 6,
    start: 135,
    type: "string",
    padding_position: "end"
  },
  {
    name: "Naamcode/naamgebruik (03)",
    width: 1,
    start: 141,
    type: "string"
  },
  {
    name: "Postcode (huisadres) verzekerde",
    width: 6,
    start: 142,
    type: "string",
    padding_position: "end"
  },
  {
    name: "Postcode buitenland",
    width: 9,
    start: 148,
    type: "string",
    padding_position: "end"
  },
  {
    name: "Huisnummer (huisadres) verzekerde",
    width: 5,
    start: 157,
    type: "string"
  },
  {
    name: "Huisnummertoevoeging (huisadres) verzekerde",
    width: 6,
    start: 162,
    type: "string",
    padding_position: "end"
  },
  {
    name: "Code land verzekerde",
    width: 2,
    start: 168,
    type: "string",
    padding_position: "end"
  },
  {
    name: "Debiteurnummer",
    width: 11,
    start: 170,
    type: "string",
    padding_position: "end"
  },
  {
    name: "Reserve",
    width: 130,
    start: 181,
    type: "string",
    padding_position: "end"
  }
];
module.exports["Prestatierecord"] = [
  {
    name: "Kenmerk record",
    width: 2,
    start: 1,
    type: "string"
  },
  {
    name: "Identificatie detailrecord",
    width: 12,
    start: 3,
    type: "string"
  },
  {
    name: "Burgerservicenummer (bsn) verzekerde",
    width: 9,
    start: 15,
    type: "string"
  },
  {
    name: "Uzovi-nummer",
    width: 4,
    start: 24,
    type: "string"
  },
  {
    name: "Verzekerdennummer (inschrijvingsnummer, relatienummer)",
    width: 15,
    start: 28,
    type: "string",
    padding_position: "end"
  },
  {
    name: "Machtigingsnummer",
    width: 15,
    start: 43,
    type: "string",
    padding_position: "end"
  },
  {
    name: "Doorsturen toegestaan",
    width: 1,
    start: 58,
    type: "string"
  },
  {
    name: "Datum prestatie",
    width: 8,
    start: 59,
    type: "string"
  },
  {
    name: "Aanduiding prestatiecodelijst",
    width: 3,
    start: 67,
    type: "string"
  },
  {
    name: "Prestatiecode",
    width: 6,
    start: 70,
    type: "string",
    padding_position: "end"
  },
  {
    name: "KenmAantal uitgevoerde prestatieserk",
    width: 4,
    start: 76,
    type: "string"
  },
  {
    name: "Indicatie ongeval (ongevalsgevolg)",
    width: 1,
    start: 80,
    type: "string"
  },
  {
    name: "Aanduiding diagnosecodelijst (01)",
    width: 3,
    start: 81,
    type: "string"
  },
  {
    name: "Verwijsdiagnosecode paramedische hulp (01)",
    width: 8,
    start: 84,
    type: "string"
  },
  {
    name: "Aanduiding diagnosecodelijst (02)",
    width: 3,
    start: 92,
    type: "string"
  },
  {
    name: "Verwijsdiagnosecode paramedische hulp (02)",
    width: 8,
    start: 95,
    type: "string"
  },
  {
    name: "Aanduiding diagnosecodelijst (03)",
    width: 3,
    start: 103,
    type: "string"
  },
  {
    name: "Paramedische diagnosecode (01)",
    width: 8,
    start: 106,
    type: "string",
    padding_position: "end"
  },
  {
    name: "Aanduiding diagnosecodelijst (04)",
    width: 3,
    start: 114,
    type: "string"
  },
  {
    name: "Paramedische diagnosecode (02)",
    width: 8,
    start: 117,
    type: "string",
    padding_position: "end"
  },
  {
    name: "Code soort indicatie paramedische hulp",
    width: 3,
    start: 125,
    type: "string"
  },
  {
    name: "Zorgverlenerscode behandelaar/uitvoerder",
    width: 8,
    start: 128,
    type: "string"
  },
  {
    name: "Specialisme behandelaar/uitvoerder",
    width: 4,
    start: 136,
    type: "string"
  },
  {
    name: "Verwijsdatum",
    width: 8,
    start: 140,
    type: "string"
  },
  {
    name: "Zorgverlenerscode voorschrijver/verwijzer",
    width: 8,
    start: 148,
    type: "string"
  },
  {
    name: "Specialisme voorschrijver/verwijzer",
    width: 4,
    start: 156,
    type: "string"
  },
  {
    name: "Reden einde zorg",
    width: 2,
    start: 160,
    type: "string"
  },
  {
    name: "Tarief prestatie (incl. btw)",
    width: 8,
    start: 162,
    type: "string"
  },
  {
    name: "Berekend bedrag (incl. btw)",
    width: 8,
    start: 170,
    type: "string"
  },
  {
    name: "Indicatie debet/credit (01)",
    width: 1,
    start: 178,
    type: "string",
    padding_position: "end"
  },
  {
    name: "Btw-percentage declaratiebedrag",
    width: 4,
    start: 179,
    type: "string"
  },
  {
    name: "Declaratiebedrag (incl. btw)",
    width: 8,
    start: 183,
    type: "string"
  },
  {
    name: "Indicatie debet/credit (02)",
    width: 1,
    start: 191,
    type: "string",
    padding_position: "end"
  },
  {
    name: "Referentienummer dit prestatierecord",
    width: 20,
    start: 192,
    type: "string",
    padding_position: "end"
  },
  {
    name: "Referentienummer voorgaande gerelateerde prestatierecord",
    width: 20,
    start: 212,
    type: "string",
    padding_position: "end"
  },
  {
    name: "Reserve",
    width: 79,
    start: 232,
    type: "string",
    padding_position: "end"
  }
];
module.exports["Commentaarrecord"] = [
  {
    name: "Kenmerk record",
    width: 2,
    start: 1,
    type: "string"
  },
  {
    name: "Identificatie detailrecord",
    width: 12,
    start: 3,
    type: "string"
  },
  {
    name: "Regelnummer vrije tekst",
    width: 4,
    start: 15,
    type: "string"
  },
  {
    name: "Vrije tekst",
    width: 140,
    start: 19,
    type: "string",
    padding_position: "end"
  },
  {
    name: "Reserve",
    width: 152,
    start: 159,
    type: "string",
    padding_position: "end"
  }
];
module.exports["Sluitrecord"] = [
  {
    name: "Kenmerk record",
    width: 2,
    start: 1,
    type: "string"
  },
  {
    name: "Aantal verzekerdenrecords",
    width: 6,
    start: 3,
    type: "string"
  },
  {
    name: "Aantal debiteurrecords",
    width: 6,
    start: 9,
    type: "string"
  },
  {
    name: "Aantal prestatierecords",
    width: 6,
    start: 15,
    type: "string"
  },
  {
    name: "Aantal commentaarrecords",
    width: 6,
    start: 21,
    type: "string"
  },
  {
    name: "Totaal aantal detailrecords",
    width: 7,
    start: 27,
    type: "string"
  },
  {
    name: "Totaal declaratiebedrag",
    width: 11,
    start: 34,
    type: "string"
  },
  {
    name: "Indicatie debet/credit",
    width: 1,
    start: 45,
    type: "string",
    padding_position: "end"
  },
  {
    name: "Reserve",
    width: 265,
    start: 46,
    type: "string",
    padding_position: "end"
  }
];

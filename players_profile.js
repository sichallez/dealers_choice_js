const data = [
    { id: 1, name: "Manuel Neuer", position: "goalkeeper (GK)", club: "Bayern Munich", clubLogo: "/bayern.gif", age: 28, dateOfBirth: "27 March 1986", caps: "45", portait: "/neuer.jpeg" },
    { id: 2, name: "Kevin Grosskreutz", position: "defender (DF)", club: "Borussia Dortmund", clubLogo: "/bvb.gif", age: 25, dateOfBirth: "19 July 1988", caps: "5", portait: "/neuer.jpeg"},
    { id: 3, name: "Matthias Ginter", position: "midfielder (MF)", club: "SC Freiburg", clubLogo: "/freiburg.gif", age: 20, dateOfBirth: "19 January 1994", caps: "2", portait: "/neuer.jpeg"},
    { id: 4, name: "Benedikt Höwedes", position: "defender (DF)", club: "Schalke 04", clubLogo: "/schalke.gif", age: 26, dateOfBirth: "29 February 1988", caps: "21", portait: "/Benedikt-Höwedes.jpg"},
    { id: 5, name: "Mats Hummels", position: "defender (DF)", club: "Borussia Dortmund", clubLogo: "/bvb.gif", age: 25, dateOfBirth: "16 December 1988", caps: "30", portait: "/hummels.jpg"},
    { id: 6, name: "Sami Khedira", position: "midfielder (MF)", club: "Real Madrid", clubLogo: "/realmadrid.gif", age: 27, dateOfBirth: "4 April 1987", caps: "46", portait: "/sami-khedira.jpg"},
    { id: 7, name: "Bastian Schweinsteiger", position: "midfielder (MF)", club: "Bayern Munich", clubLogo: "/bayern.gif", age: 29, dateOfBirth: "1 August 1984", caps: "102", portait: "/schweinsteiger.jpeg" },
    { id: 8, name: "Mesut Özil", position: "midfielder (MF)", club: "Arsenal", clubLogo: "/arsenal.png", age: 25, dateOfBirth: "15 October 1988", caps: "55", portait: "/ozil.jpeg" },
    { id: 9, name: "André Schürrle", position: "forward (FW)", club: "Chelsea", clubLogo: "/chelsea.png", age: 23, dateOfBirth: "6 November 1990", caps: "33", portait: "" },
    { id: 10, name: "Lukas Podolski", position: "forward (FW)", club: "Arsenal", clubLogo: "/arsenal.png", age: 29, dateOfBirth: "4 June 1985", caps: "114", portait: "/podolski.jpg" },
    { id: 11, name: "Miroslav Klose", position: "forward (FW)", club: "Lazio", clubLogo: "/lazio.gif", age: 36, dateOfBirth: "9 June 1978", caps: "132", portait: "/miroslav-klose.jpg" },
    { id: 12, name: "Ron-Robert Zieler", position: "goalkeeper (GK)", club: "Hannover 96", clubLogo: "/hannover96.gif", age: 25, dateOfBirth: "12 February 1989", caps: "3", portait: "" },
    { id: 13, name: "Thomas Müller", position: "forward (FW)", club: "Bayern Munich", clubLogo: "/bayern.gif", age: 24, dateOfBirth: "13 September 1989", caps: "49", portait: "/ThomasMüller.png" },
    { id: 14, name: "Julian Draxler", position: "midfielder (MF)", club: "Schalke 04", clubLogo: "/schalke.gif", age: 20, dateOfBirth: "20 September 1993", caps: "11", portait: "" },
    { id: 15, name: "Erik Durm", position: "defender (DF)", club: "Borussia Dortmund", clubLogo: "/bvb.gif", age: 22, dateOfBirth: "12 May 1992", caps: "1", portait: "" },
    { id: 16, name: "Philipp Lahm (c) ", position: "defender (DF)", club: "Bayern Munich", clubLogo: "/bayern.gif", age: 30, dateOfBirth: "11 November 1983", caps: "106", portait: "/philipp-lahm.jpg" },
    { id: 17, name: "Per Mertesacker", position: "defender (DF)", club: "Arsenal", clubLogo: "/arsenal.png", age: 29, dateOfBirth: "29 September 1984", caps: "98", portait: "/mertesacker.jpg" },
    { id: 18, name: "Toni Kroos", position: "midfielder (MF)", club: "Bayern Munich", clubLogo: "/bayern.gif", age: 24, dateOfBirth: "4 January 1990", caps: "44", portait: "/kroos.jpg" },
    { id: 19, name: "Mario Götze", position: "midfielder (MF)", club: "Bayern Munich", clubLogo: "/bayern.gif", age: 22, dateOfBirth: "3 June 1992", caps: "29", portait: "/MarioGoetze.jpg" },
    { id: 20, name: "Jérôme Boateng", position: "defender (DF)", club: "Bayern Munich", clubLogo: "/bayern.gif", age: 25, dateOfBirth: "3 September 1988", caps: "39", portait: "/boateng.jpg" },
    { id: 21, name: "Shkodran Mustafi", position: "defender (DF)", club: "Sampdoria", clubLogo: "/sampdoria.gif", age: 22, dateOfBirth: "17 April 1992", caps: "1", portait: "" },
    { id: 22, name: "Roman Weidenfeller", position: "goalkeeper (GK)", club: "Borussia Dortmund", clubLogo: "/bvb.gif", age: 33, dateOfBirth: "6 August 1980", caps: "3", portait: "" },
    { id: 23, name: "Christoph Kramer", position: "midfielder (MF)", club: "Borussia Mönchengladbach", clubLogo: "/mochengladbach.gif", age: 23, dateOfBirth: "19 February 1991", caps: "2", portait: "" },
];

const list = () => {
    return [...data] // Notice that we're returning a copy of the array, so the original data is safe. This is called 'immutability'.
  }; 
  
  const find = (id) => {
    const post = data.find(post => post.id === +id);
    return {...post}; // Again, we copy the post data before returning so the original information is safe.
  }
  
  module.exports = { list: list, find: find };
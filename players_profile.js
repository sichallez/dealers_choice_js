const data = [
    { id: 1, name: "Manuel Neuer", position: "goalkeeper (GK)", club: "Bayern Munich", age: 28, dateOfBirth: "27 March 1986" },
    { id: 2, name: "Kevin Grosskreutz", position: "defender (DF)", club: "Borussia Dortmund", age: 25, dateOfBirth: "19 July 1988" },
    { id: 3, name: "Matthias Ginter", position: "midfielder (MF)", club: "SC Freiburg", age: 20, dateOfBirth: "19 January 1994" },
    { id: 4, name: "Benedikt Höwedes", position: "defender (DF)", club: "Schalke 04", age: 26, dateOfBirth: "29 February 1988" },
    { id: 5, name: "Mats Hummels", position: "defender (DF)", club: "Borussia Dortmund", age: 25, dateOfBirth: "16 December 1988" },
    { id: 6, name: "Sami Khedira", position: "midfielder (MF)", club: "Real Madrid", age: 27, dateOfBirth: "4 April 1987" },
    { id: 7, name: "Bastian Schweinsteiger", position: "midfielder (MF)", club: "Bayern Munich", age: 29, dateOfBirth: "1 August 1984" },
    { id: 8, name: "Mesut Özil", position: "midfielder (MF)", club: "Arsenal", age: 25, dateOfBirth: "15 October 1988" },
    { id: 9, name: "André Schürrle", position: "forward (FW)", club: "Chelsea", age: 23, dateOfBirth: "6 November 1990" },
    { id: 10, name: "Lukas Podolski", position: "forward (FW)", club: "Arsenal", age: 29, dateOfBirth: "4 June 1985" },
    { id: 11, name: "Miroslav Klose", position: "forward (FW)", club: "Lazio", age: 36, dateOfBirth: "9 June 1978" },
    { id: 12, name: "Ron-Robert Zieler", position: "goalkeeper (GK)", club: "Hannover 96", age: 25, dateOfBirth: "12 February 1989" },
    { id: 13, name: "Thomas Müller", position: "forward (FW)", club: "Bayern Munich", age: 24, dateOfBirth: "13 September 1989" },
    { id: 14, name: "Julian Draxler", position: "midfielder (MF)", club: "Schalke 04", age: 20, dateOfBirth: "20 September 1993" },
    { id: 15, name: "Erik Durm", position: "defender (DF)", club: "Borussia Dortmund", age: 22, dateOfBirth: "12 May 1992" },
    { id: 16, name: "Philipp Lahm (c) ", position: "defender (DF)", club: "Bayern Munich", age: 30, dateOfBirth: "11 November 1983" },
    { id: 17, name: "Per Mertesacker", position: "defender (DF)", club: "Arsenal", age: 29, dateOfBirth: "29 September 1984" },
    { id: 18, name: "Toni Kroos", position: "midfielder (MF)", club: "Bayern Munich", age: 24, dateOfBirth: "4 January 1990" },
    { id: 19, name: "Mario Götze", position: "midfielder (MF)", club: "Bayern Munich", age: 22, dateOfBirth: "3 June 1992" },
    { id: 20, name: "Jérôme Boateng", position: "defender (DF)", club: "Bayern Munich", age: 25, dateOfBirth: "3 September 1988" },
    { id: 21, name: "Shkodran Mustafi", position: "defender (DF)", club: "Sampdoria", age: 22, dateOfBirth: "17 April 1992" },
    { id: 22, name: "Roman Weidenfeller", position: "goalkeeper (GK)", club: "Borussia Dortmund", age: 33, dateOfBirth: "6 August 1980" },
    { id: 23, name: "Christoph Kramer", position: "midfielder (MF)", club: "Borussia Mönchengladbach", age: 23, dateOfBirth: "19 February 1991" },
];

const list = () => {
    return [...data] // Notice that we're returning a copy of the array, so the original data is safe. This is called 'immutability'.
  }; 
  
  const find = (id) => {
    const post = data.find(post => post.id === +id);
    return {...post}; // Again, we copy the post data before returning so the original information is safe.
  }
  
  module.exports = { list: list, find: find };
const notes = [
  {
    id: 1,
    subject: "book1 ch.2",
    date: 20211110,
    feeling: "okay",
    timeSpent: 300,
  },
  {
    id: 2,
    subject: "book1 ch.4",
    date: 20211111,
    feeling: "good",
    timeSpent: 330,
  },
];

const noteAboutToday = {
  id: 3,
  subject: "book2 ch.1",
  date: 20211116,
  feeling: "great",
  timeSpent: 60,
};

notes.push(noteAboutToday);

console.log(notes);

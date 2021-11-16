const notes = [
  {
    id: 1,
    subject: "HTML structure",
    date: 20211110,
    feeling: "great",
    timeSpent: 300,
  },
  {
    id: 2,
    subject: "git and GitHub",
    date: 20211111,
    feeling: "good",
    timeSpent: 330,
  },
];

const noteAboutToday = {
  id: 3,
  subject: "Javascript data structures",
  date: 20211116,
  feeling: "great",
  timeSpent: 60,
};

notes.push(noteAboutToday);

for (const note of notes) {
  console.log(`Note ${note.id}:
  ${note.date}
  I learned ${note.subject}.
  I spent ${note.timeSpent} working on it.
  I felt ${note.feeling}.
  `)
}

// console.log(notes);

import XLSX from "xlsx";
import faculties from "./faculties";
import { getRandomByPercentages } from "./getRandom";
import questions from "./questions";

export type Answer = {
  number: number;
  answer: number;
};
export type Student = {
  gender: string;
  faculty: string;
  angkatan: number;
  answers: Answer[];
};

const choices = [
  "Selalu (SL)",
  "Sering (SR)",
  "Kadang-Kadang (KK)",
  "Jarang (JR)",
  "Tidak Pernah (TP)",
];
const students: Student[] = [];

const workbook = XLSX.utils.book_new();
generateStudents();

createExcelRangkuman();
createExcelMahasiswa();

XLSX.writeFile(workbook, `src/app/generate/data/Data Mahasiswa.xlsx`);
console.log("DONE");

function generateStudents() {
  faculties.forEach((faculty) => {
    Object.entries(faculty.angkatans).forEach(([angkatan, count]) => {
      for (let i = 1; i <= count; i++) {
        const gender = ["Laki-laki", "Perempuan"]?.[
          getRandomByPercentages([50, 50])
        ];

        const answers = questions.map((question) => ({
          number: question.number,
          answer: getRandomByPercentages(question.probabilities),
        }));

        const student = {
          faculty: faculty.name,
          angkatan: parseInt(angkatan),
          gender,
          answers,
        };
        students.push(student);
      }
    });
  });
}

function createExcelRangkuman() {
  const rangkumanData = [["No", "Soal", ...choices]];

  questions.forEach((question, indexQuestions) => {
    const answerCounts = Array(choices.length).fill(0);

    students.forEach((student) => {
      const answer = student.answers.find(
        (ans) => ans.number === question.number
      );
      if (answer) {
        answerCounts[answer.answer]++;
      }
    });

    rangkumanData.push([
      indexQuestions + 1,
      question.question,
      ...answerCounts,
    ]);
  });

  const totalRow = rangkumanData.length + 1;
  rangkumanData.push(["Total per item", "", ...Array(choices.length).fill(0)]);

  for (let i = 1; i < rangkumanData.length - 1; i++) {
    for (let j = 2; j < rangkumanData[i].length; j++) {
      rangkumanData[totalRow - 1][j] += rangkumanData[i][j];
    }
  }
  const totals = rangkumanData[rangkumanData.length - 1]
    .slice(2)
    .map((v) => parseInt(v))
    .reduce((a, b) => a + b, 0);

  rangkumanData.push([
    "Total",
    "",
    ...Array(choices.length - 1).fill(""),
    totals.toString(),
  ]);

  const worksheet = XLSX.utils.aoa_to_sheet(rangkumanData);

  if (!worksheet["!merges"]) {
    worksheet["!merges"] = [];
  }

  worksheet["!merges"].push({
    s: { r: totalRow - 1, c: 0 },
    e: { r: totalRow - 1, c: 1 },
  });

  // worksheet["!merges"].push({
  //   s: { r: totalRow, c: 2 },
  //   e: { r: totalRow, c: rangkumanData[0].length - 1 },
  // });

  XLSX.utils.book_append_sheet(workbook, worksheet, "Rangkuman");
}

function createExcelMahasiswa() {
  const studentData = [
    [
      "No",
      "Fakultas",
      "Angkatan",
      "Jenis Kelamin",
      ...questions.map((v) => `${v.number}. ${v.question}`),
    ],
  ];

  students.forEach((student, indexStudent) => {
    studentData.push([
      (indexStudent + 1).toString(),
      student.faculty,
      student.angkatan.toString(),
      student.gender,
      ...questions.map((question, indexQuestions) => {
        return choices[student.answers[indexQuestions].answer as number];
      }),
    ]);
  });

  const worksheet = XLSX.utils.aoa_to_sheet(studentData);
  XLSX.utils.book_append_sheet(workbook, worksheet, "Mahasiswa");
}

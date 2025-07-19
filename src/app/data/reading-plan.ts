export interface QuizQuestion {
  id: string;
  type: "multiple-choice" | "true-false" | "short-answer";
  question: string;
  options?: string[];
  correctAnswer?: string | boolean;
}

export interface Quiz {
  title: string;
  questions: QuizQuestion[];
}

export interface DayReading {
  day: number;
  passage: string;
  focus: string;
  quiz: Quiz;
}

export const readingPlan: DayReading[] = [
  {
    day: 1,
    passage: "Genesis 1–3",
    focus: "Creation, the Garden of Eden, and the Fall of Man",
    quiz: {
      title: "📘 Genesis 1–3 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "On which day did God create light?",
          options: ["Third day", "First day", "Fourth day", "Second day"],
          correctAnswer: "First day"
        },
        {
          id: "q2",
          type: "multiple-choice",
          question: "What was created on the fifth day?",
          options: ["Land animals", "The expanse (sky)", "Sea creatures and flying creatures", "Humans"],
          correctAnswer: "Sea creatures and flying creatures",
        },
        {
          id: "q3",
          type: "multiple-choice",
          question: "How did God describe His creation at the end of the sixth day?",
          options: ["Sufficient", "Good", "Very good", "Excellent"],
          correctAnswer: "Very good"
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "What command did Jehovah give Adam regarding the tree of the knowledge of good and bad?",
          options: ["Eat from it once a day", "Do not touch it", "Do not eat from it", "Use it to test animals"],
          correctAnswer: "Do not eat from it"
        },
        {
          id: "q5",
          type: "multiple-choice",
          question: "Who was created from Adam's rib?",
          options: ["Lilith", "The serpent", "Eve", "An angel"],
          correctAnswer: "Eve"
        },
        {
          id: "q6",
          type: "true-false",
          question: "God created humans in His image.",
          correctAnswer: true
        },
        {
          id: "q7",
          type: "true-false",
          question: "The serpent told Eve she would surely die if she ate from the tree.",
          correctAnswer: false
        },
        {
          id: "q8",
          type: "true-false",
          question: "Adam and Eve were naked and felt ashamed before eating the fruit.",
          correctAnswer: false
        },
        {
          id: "q9",
          type: "true-false",
          question: "God rested on the seventh day.",
          correctAnswer: true
        },
        {
          id: "q10",
          type: "true-false",
          question: "Eve blamed the serpent for deceiving her.",
          correctAnswer: false
        },
        {
          id: "q11",
          type: "short-answer",
          question: "What were the names of the two specific trees mentioned in the middle of the garden?"
        },
        {
          id: "q12",
          type: "short-answer",
          question: "What punishment did Jehovah give the serpent?"
        },
        {
          id: "q13",
          type: "short-answer",
          question: "What did God use to clothe Adam and Eve after they sinned?"
        },
        {
          id: "q14",
          type: "short-answer",
          question: "Why were Adam and Eve expelled from the garden of Eden?"
        },
        {
          id: "q15",
          type: "short-answer",
          question: "What was placed to guard the way to the tree of life?"
        },
      ],
    },
  },
  {
    day: 2,
    passage: "Genesis 4–6",
    focus: "Cain and Abel, genealogies, and Noah's time",
    quiz: {
      title: "📘 Genesis 4–6 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "What was Cain's occupation?",
          options: ["Shepherd", "Farmer", "Hunter", "Builder"],
          correctAnswer: "Farmer"
        },
        {
          id: "q2",
          type: "multiple-choice",
          question: "Why was Cain's offering not accepted by God?",
          options: [
            "It was too small",
            "It was not the right type",
            "His heart attitude was wrong",
            "He offered it at the wrong time",
          ],
          correctAnswer: "His heart attitude was wrong"
        },
        {
          id: "q3",
          type: "true-false",
          question: "Abel was a keeper of sheep.",
          correctAnswer: true,
        },
        {
          id: "q4",
          type: "true-false",
          question: "God put a mark on Cain to identify him as a murderer.",
          correctAnswer: false
        },
        {
          id: "q5",
          type: "short-answer",
          question: "What did God say about the violence in Noah's time?"
        },
      ],
    },
  },
  {
    day: 3,
    passage: "Genesis 7–9",
    focus: "The Great Flood and God's covenant with Noah",
    quiz: {
      title: "📘 Genesis 7–9 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "How long did it rain during the flood?",
          options: ["40 days and 40 nights", "30 days", "50 days", "60 days"],
          correctAnswer: "40 days and 40 nights"
        },
        {
          id: "q2",
          type: "multiple-choice",
          question: "What was the sign of God's covenant with Noah?",
          options: ["A dove", "An olive branch", "A rainbow", "A mountain"],
          correctAnswer: "A rainbow"
        },
        {
          id: "q3",
          type: "true-false",
          question: "Noah took seven pairs of every clean animal into the ark.",
          correctAnswer: true
        },
        {
          id: "q4",
          type: "short-answer",
          question: "What did Noah do first after leaving the ark?"
        },
      ],
    },
  },
  {
    day: 4,
    passage: "Genesis 10–12",
    focus: "Nations after the flood, Tower of Babel, and Abram's call",
    quiz: {
      title: "📘 Genesis 10–12 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "What was the original name of Abraham?",
          options: ["Abram", "Aaron", "Adam", "Abel"],
          correctAnswer: "Abram"
        },
        {
          id: "q2",
          type: "multiple-choice",
          question: "Why did God confuse the languages at Babel?",
          options: [
            "To punish them for idol worship",
            "To scatter them across the earth",
            "To test their faith",
            "To separate the righteous from the wicked"
          ],
          correctAnswer: "To scatter them across the earth"
        },
        {
          id: "q3",
          type: "true-false",
          question: "Abram was 75 years old when he left Haran.",
          correctAnswer: true
        },
        {
          id: "q4",
          type: "short-answer",
          question: "What promise did God make to Abram regarding his descendants?"
        },
      ],
    },
  },
  {
    day: 5,
    passage: "Genesis 13–15",
    focus: "Abram and Lot separate, God's covenant with Abram",
    quiz: {
      title: "📘 Genesis 13–15 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "Which area did Lot choose when he and Abram separated?",
          options: ["The hill country", "The Jordan valley", "The desert", "The coastal region"],
          correctAnswer: "The Jordan valley"
        },
        {
          id: "q2",
          type: "true-false",
          question: "God promised to make Abram's offspring like the stars of heaven.",
          correctAnswer: true
        },
        {
          id: "q3",
          type: "short-answer",
          question: "What did God use to confirm His covenant with Abram?"
        },
      ],
    },
  },
  // Continue with more days as needed...
  // This structure can be extended to all 365 days
];

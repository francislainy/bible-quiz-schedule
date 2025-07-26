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
          question: "How did God describe His creation at the end of the sixth day?",
          options: ["Sufficient", "Good", "Very good", "Excellent"],
          correctAnswer: "Very good"
        },
        {
          id: "q2",
          type: "multiple-choice",
          question: "What command did Jehovah give Adam regarding the tree of the knowledge of good and bad?",
          options: ["Eat from it once a day", "Do not touch it", "Do not eat from it", "Use it to test animals"],
          correctAnswer: "Do not eat from it"
        },
        {
          id: "q3",
          type: "multiple-choice",
          question: "Who was created from Adam's rib?",
          options: ["Lilith", "The serpent", "Eve", "An angel"],
          correctAnswer: "Eve"
        },
        {
          id: "q4",
          type: "true-false",
          question: "God created humans in His image.",
          correctAnswer: true
        },
        {
          id: "q5",
          type: "true-false",
          question: "The serpent told Eve she would surely die if she ate from the tree.",
          correctAnswer: false
        },
        {
          id: "q6",
          type: "true-false",
          question: "Adam and Eve were naked and felt ashamed before eating the fruit.",
          correctAnswer: false
        },
        {
          id: "q7",
          type: "true-false",
          question: "God rested on the seventh day.",
          correctAnswer: true
        },
        {
          id: "q8",
          type: "true-false",
          question: "Eve blamed the serpent for deceiving her.",
          correctAnswer: true
        },
        {
          id: "q9",
          type: "short-answer",
          question: "What were the names of the two specific trees mentioned in the middle of the garden?",
          correctAnswer: "The tree of Life and the tree of knowledge of Good and Bad"
        },
        {
          id: "q10",
          type: "short-answer",
          question: "What punishment did Jehovah give the serpent?",
          correctAnswer: "Foretold she would be crushed by the descendant of the woman"
        },
        {
          id: "q11",
          type: "short-answer",
          question: "Why were Adam and Eve expelled from the garden of Eden?",
          correctAnswer: "For disobeying God."
        },
        {
          id: "q11",
          type: "short-answer",
          question: "What was placed to guard the way to the tree of life?",
          correctAnswer: "Angels (Cherubs) holding a sword."
        },

        {
          id: "q12",
          type: "short-answer",
          question: "In the beginning, what did God first create?",
          correctAnswer: 'The heavens and the earth'
        },
        {
          id: "q13",
          type: "short-answer",
          question: "What did God use to create things?",
          correctAnswer: 'His active force.'
        },
        {
          id: "q14",
          type: "short-answer",
          question: "What did God create on the first day?",
          correctAnswer: "Day and Night."
        },
        {
          id: "q15",
          type: "short-answer",
          question: "What was the first commandment God gave to the first man?",
          correctAnswer: "Be fruitful and become many."
        },
        {
          id: "q16",
          type: "true-false",
          question: "Man was created from dust.",
          correctAnswer: true
        },
        {
          id: "q17",
          type: "short-answer",
          question: "Which two special trees were there in the Garden of Eve?",
          correctAnswer: 'The tree of life and the tree of knowledge of good and bad.'
        },
        {
          id: "q18",
          type: "multiple-choice",
          question: "How many rivers did the river which flew out of Eden divided into?",
          options: ["Two", "Three", "Four", "Five"],
          correctAnswer: "Four"
        },
        {
          id: "q19",
          type: "short-answer",
          question: "The fruit of which tree was Adam not allowed to eat?",
          correctAnswer: "The fruit from the tree of knowledge of God and Bad."
        },
      ],
    },
  },
  {
    day: 2,
    passage: "Genesis 4–7",
    focus: "Cain and Abel, genealogies, and Noah's time",
    quiz: {
      title: "📘 Genesis 4–7 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "What was Cain's occupation?",
          options: ["Shepherd", "Cultivator of the ground", "Hunter", "Builder"],
          correctAnswer: "Cultivator of the ground"
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
          question: "Abel was a shepperd.",
          correctAnswer: true,
        },
        {
          id: "q5",
          type: "short-answer",
          question: "What did God say about the violence in Noah's time?"
        },
        {
          id: "q6",
          type: "short-answer",
          question: "Who was the first human born out of other humans?",
          correctAnswer: "Cain"
        },
        {
          id: "q8",
          type: "true-false",
          question: "Abel brought fruits as an offering to Jehovah?",
          correctAnswer: false
        },
        {
          id: "q9",
          type: "true-false",
          question: "Cain brought fruits as an offering to Jehovah?",
          correctAnswer: true
        },
        {
          id: "q10",
          type: "short-answer",
          question: "What did Jehovah said to Cain when he noticed he was close to commiting a sin?",
          correctAnswer: "He tried to convince him not to do it."
        },
        {
          id: "q11",
          type: "short-answer",
          question: "How was it possible that Cain had a wife?",
          correctAnswer: "Adam and Eve had sons and daughters."
        },
        {
          id: "q12",
          type: "short-answer",
          question: "Who was the third son of Adam and Eve?",
          correctAnswer: "Seth."
        },
        {
          id: "q13",
          type: "true-false",
          question: "Shem, Ham and Japheth were Noah's sons.",
          correctAnswer: true
        },
        {
          id: "q14",
          type: "short-answer",
          question: "What happened to Enoch after he died?",
          correctAnswer: "God took him."
        },
        {
          id: "q15",
          type: "multiple-choice",
          question: "Who was Noah's father?",
          options: ["Adam", "Seth", "Lamech", "Methuselah"],
          correctAnswer: "Lamech"
        },
        {
          id: "q16",
          type: "multiple-choice",
          question: "Who were the Nephilims?",
          options: ["Good angels", "People from nations opposing Jehovah", "Sons of Cain", "Bad angels who came down to earth to marry women"],
          correctAnswer: "Bad angels who came down to earth to marry women"
        },
        {
          id: "q17",
          type: "true-false",
          question: "The sons of the Nephilims were good people.",
          correctAnswer: false
        },
        {
          id: "q18",
          type: "short-answer",
          question: "How did Jehovah feel when he saw how people were behaving during Noah's time?",
          correctAnswer: "He regretted making mankind"
        },
        {
          id: "q19",
          type: "multiple-choice",
          question: "How many animals of each kind was Noah ordered to bring into the Ark?",
          options: ["1", "2", "3", "4"],
          correctAnswer: "2"
        },
        {
          id: "q20",
          type: "multiple-choice",
          question: "How old was Noah when the floodwaters came upon the earth?",
          options: ["300", "500", "600", "750"],
          correctAnswer: "600"
        },
        {
          id: "q21",
          type: "multiple-choice",
          question: "How many people entered the Ark together with Noah?",
          options: ["3", "6", "7", "8"],
          correctAnswer: "7"
        },
        {
          id: "q22",
          type: "true-false",
          question: "It rained for 7 days and 7 nights during the flood.",
          correctAnswer: false
        },
      ],
    },
  },
  {
    day: 3,
    passage: "Genesis 8–11",
    focus: "Flood recedes, God's covenant, and Tower of Babel",
    quiz: {
      title: "📘 Genesis 8–11 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "How long did the waters flood the earth before they began to recede?",
          options: ["40 days", "100 days", "150 days", "7 days"],
          correctAnswer: "150 days"
        },
        {
          id: "q2",
          type: "multiple-choice",
          question: "What kind of bird did Noah send out first?",
          options: ["Dove", "Raven", "Sparrow", "Eagle"],
          correctAnswer: "Raven"
        },
        {
          id: "q3",
          type: "multiple-choice",
          question: "What did the dove bring back to Noah the second time?",
          options: ["A feather", "A piece of dry land", "An olive leaf", "Nothing"],
          correctAnswer: "An olive leaf"
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "What sign did Jehovah give to show He would never again flood the whole earth?",
          options: ["A star", "A rainbow", "A fiery cloud", "A dove"],
          correctAnswer: "A rainbow"
        },
        {
          id: "q5",
          type: "multiple-choice",
          question: "What were the names of Noah’s sons?",
          options: ["Cain, Abel, Seth", "Abraham, Lot, Nahor", "Isaac, Ishmael, Esau", "Shem, Ham, Japheth"],
          correctAnswer: "Shem, Ham, Japheth"
        },
        {
          id: "q6",
          type: "true-false",
          question: "Noah offered burnt offerings to Jehovah after leaving the ark.",
          correctAnswer: true
        },
        {
          id: "q7",
          type: "true-false",
          question: "Jehovah said He would never again destroy every living thing just because man’s heart is bad.",
          correctAnswer: true
        },
        {
          id: "q8",
          type: "true-false",
          question: "Noah cursed Shem because he saw his father's nakedness.",
          correctAnswer: false
        },
        {
          id: "q9",
          type: "true-false",
          question: "The whole earth had many languages after the flood.",
          correctAnswer: false
        },
        {
          id: "q10",
          type: "true-false",
          question: "The Tower of Babel was built to reach the heavens and make a name for the builders.",
          correctAnswer: true
        },
        {
          id: "q11",
          type: "short-answer",
          question: "What did Jehovah smell that caused Him to promise never again to curse the ground?",
          correctAnswer: "The smell of Noah's burnt sacrifice"
        },
        {
          id: "q12",
          type: "short-answer",
          question: "What command regarding food did Jehovah give Noah after the flood?",
          correctAnswer: "Every moving animal may serve as food, just as green vegetation."
        },
        {
          id: "q13",
          type: "short-answer",
          question: "What covenant did Jehovah establish with Noah and his descendants?",
          correctAnswer: "He would never again destroy all flesh by a flood."
        },
        {
          id: "q14",
          type: "short-answer",
          question: "Why did Jehovah confuse the language of the people at Babel?",
          correctAnswer: "Because they were uniting to make a name for themselves and disobey Jehovah’s will to fill the earth."
        },
        {
          id: "q15",
          type: "short-answer",
          question: "Where did Jehovah scatter the people after confusing their language?",
          correctAnswer: "Over the entire face of the earth."
        },
        {
          id: "q16",
          type: "multiple-choice",
          question: "How many years did Noah live before he died?",
          options: ["600 years", "700 years", "950 years", "1100 years"],
          correctAnswer: "950 years"
        },
        {
          id: "q17",
          type: "true-false",
          question: "Abraham's father is unknown in the Bible.",
          correctAnswer: false
        },
        {
          id: "q18",
          type: "multiple-choice",
          question: "What was the name of Abraham's wife?",
          options: ["Sarah", "Rachel", "Rebekah", "Mary"],
          correctAnswer: "Sarah"
        },

      ]
    }
  },
  {
    day: 4,
    passage: "Genesis 12–15",
    focus: "Abram’s calling, promises, and faith in Jehovah",
    quiz: {
      title: "📘 Genesis 12–15 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "What command did Jehovah give to Abram in Genesis 12?",
          options: [
            "Build an altar",
            "Leave your country and your relatives",
            "Offer a sacrifice",
            "Circumcise your household"
          ],
          correctAnswer: "Leave your country and your relatives"
        },
        {
          id: "q2",
          type: "multiple-choice",
          question: "Who did Abram take with him when he left Haran?",
          options: ["Just his wife Sarai", "His nephew Lot", "His father Terah", "Melchizedek"],
          correctAnswer: "His nephew Lot"
        },
        {
          id: "q3",
          type: "multiple-choice",
          question: "Why did Abram go to Egypt?",
          options: ["To find a wife", "To escape war", "Because of famine", "To preach God's name"],
          correctAnswer: "Because of famine"
        },
        {
          id: "q4",
          type: "true-false",
          question: "Abram asked Sarai to say she was his sister in Egypt.",
          correctAnswer: true
        },
        {
          id: "q5",
          type: "true-false",
          question: "Lot and Abram stayed together peacefully in the same land.",
          correctAnswer: false
        },
        {
          id: "q6",
          type: "multiple-choice",
          question: "What did Abram do after Lot chose his land and left?",
          options: ["He built a tower", "He moved to Egypt", "He built an altar to Jehovah", "He wept"],
          correctAnswer: "He built an altar to Jehovah"
        },
        {
          id: "q7",
          type: "multiple-choice",
          question: "Who was Melchizedek?",
          options: [
            "A Canaanite king",
            "King of Salem and priest of the Most High God",
            "A servant of Abram",
            "Abram’s son"
          ],
          correctAnswer: "King of Salem and priest of the Most High God"
        },
        {
          id: "q8",
          type: "true-false",
          question: "Melchizedek brought bread and wine and blessed Abram.",
          correctAnswer: true
        },
        {
          id: "q9",
          type: "short-answer",
          question: "What did Jehovah promise Abram regarding his offspring?",
          correctAnswer: "That they would become as numerous as the stars."
        },
        {
          id: "q10",
          type: "short-answer",
          question: "What did Jehovah credit to Abram as righteousness?",
          correctAnswer: "His faith"
        },
        {
          id: "q12",
          type: "true-false",
          question: "In a vision, Jehovah told Abram his offspring would be enslaved for 400 years.",
          correctAnswer: true
        },
        {
          id: "q14",
          type: "true-false",
          question: "Abraham was very poor.",
          correctAnswer: false
        },
        {
          id: "q15",
          type: "short-answer",
          question: "Why did Lob move to a city near Sodom?",
          correctAnswer: "There was quarreling between his crew and Abraham's due to lack of space for both being together."
        },
        {
          id: "q16",
          type: "multiple-choice",
          question: "Which person did Abraham needed to rescue out of an enemy tribe?",
          options: ["Sarah", "Lot", "Isaac", "Isaac's wife"],
          correctAnswer: "Lot"
        },
        {
          id: "q17",
          type: "short-answer",
          question: "Why did Abraham refuse money from the king of Sodom?",
          correctAnswer: "So that people wouldn't say that he'd become rich on his expense"
        },
      ]
    }
  },
  {
    day: 5,
    passage: "Genesis 16–18",
    focus: "Hagar and Ishmael, covenant of circumcision, and Jehovah’s visit to Abraham",
    quiz: {
      title: "📘 Genesis 16–18 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "Who was Hagar?",
          options: [
            "Abraham’s sister",
            "A Canaanite queen",
            "Sarai’s Egyptian servant",
            "Lot’s wife"
          ],
          correctAnswer: "Sarai’s Egyptian servant"
        },
        {
          id: "q2",
          type: "multiple-choice",
          question: "What did Sarai ask Abram to do with Hagar?",
          options: [
            "Send her back to Egypt",
            "Treat her as a daughter",
            "Take her as a concubine to have children",
            "Sell her"
          ],
          correctAnswer: "Take her as a concubine to have children"
        },
        {
          id: "q3",
          type: "true-false",
          question: "The angel of Jehovah told Hagar to return to Sarai and humble herself.",
          correctAnswer: true
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "What was the name of the son born to Hagar?",
          options: ["Isaac", "Ishmael", "Lot", "Eliezer"],
          correctAnswer: "Ishmael"
        },
        {
          id: "q5",
          type: "true-false",
          question: "The angel of Jehovah told Hagar Ishmael's hand would be against everyone, and everyone's hand would be against him.",
          correctAnswer: "You are a God who sees me"
        },
        {
          id: "q6",
          type: "short-answer",
          question: "How old was Abram when Ishmael was born?",
          correctAnswer: "86 years old"
        },
        {
          id: "q7",
          type: "true-false",
          question: "God changed Abram’s name to Abraham.",
          correctAnswer: true
        },
        {
          id: "q8",
          type: "true-false",
          question: "Jehovah said Sarah would never bear a child due to her old age.",
          correctAnswer: false
        },
        {
          id: "q9",
          type: "multiple-choice",
          question: "What sign did Jehovah give to confirm the covenant with Abraham?",
          options: [
            "Burning bush",
            "Rainbow",
            "Sacrifice",
            "Circumcision"
          ],
          correctAnswer: "Circumcision"
        },
        {
          id: "q10",
          type: "short-answer",
          question: "How old was Abraham when he was circumcised?",
          correctAnswer: "99 years old"
        },
        {
          id: "q11",
          type: "multiple-choice",
          question: "How did Sarah react when she heard she would have a son?",
          options: ["She rejoiced", "She cried", "She laughed", "She fainted"],
          correctAnswer: "She laughed"
        },
        {
          id: "q12",
          type: "short-answer",
          question: "What question did Jehovah ask Sarah after she laughed?",
          correctAnswer: "Is anything too extraordinary for Jehovah?"
        },
        {
          id: "q13",
          type: "true-false",
          question: "Abraham welcomed three men and showed them hospitality.",
          correctAnswer: true
        },
        {
          id: "q14",
          type: "short-answer",
          question: "What city did Jehovah say He would investigate due to its grave sin?",
          correctAnswer: "Sodom"
        },
        {
          id: "q15",
          type: "multiple-choice",
          question: "How many times did Abraham ask Jehovah whether he would spare Sodom from destruction if righteous people were found there?",
          options: ["4", "5", "6", "7"],
          correctAnswer: "6"
        }
      ]
    }
  },
  {
    day: 6,
    passage: "Genesis 19–22",
    focus: "Destruction of Sodom, Lot’s escape, and Abraham’s faith tested",
    quiz: {
      title: "📘 Genesis 19–22 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "Who visited Lot in Sodom before the city was destroyed?",
          options: ["Jehovah", "Three men", "Two angels", "Melchizedek"],
          correctAnswer: "Two angels"
        },
        {
          id: "q2",
          type: "true-false",
          question: "Lot offered his daughters to the men of Sodom.",
          correctAnswer: true
        },
        {
          id: "q3",
          type: "multiple-choice",
          question: "What happened to Lot’s wife?",
          options: ["She escaped to Zoar", "She returned to Sodom", "She turned into salt", "She was captured"],
          correctAnswer: "She turned into salt"
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "Why did Lot’s sons-in-law no flee together with him and his family?",
          options: [
            "They were away at that time",
            "They thought Lot was joking",
            "They were captured by Sodom",
            "They were too old to flee",
          ],
          correctAnswer: "They thought Lot was joking"
        },
        {
          id: "q5",
          type: "true-false",
          question: "Three daughters of Lot's fled together with him and his wife.",
          correctAnswer: false
        },
        {
          id: "q6",
          type: "true-false",
          question: "Lot’s daughters had children by their father after escaping to the mountains.",
          correctAnswer: true
        },
        {
          id: "q6",
          type: "multiple-choice",
          question: "How did Jehovah destroy Sodom and Gomorrah?",
          options: [
            "With a flood",
            "With fire and sulfur",
            "With an earthquake",
            "With a plague"
          ],
          correctAnswer: "With fire and sulfur"
        },
        {
          id: "q6",
          type: "true-false",
          question: "The Moabites and Ammonites are direct descendants of Lot.",
          correctAnswer: true
        },
        {
          id: "q7",
          type: "multiple-choice",
          question: "What did Abraham say about Sarah when staying in Gerar?",
          options: ["She is my cousin", "She is my wife", "She is my servant", "She is my sister"],
          correctAnswer: "She is my sister"
        },
        {
          id: "q8",
          type: "true-false",
          question: "Isaac was born when Abraham was 100 years old.",
          correctAnswer: true
        },
        {
          id: "q9",
          type: "multiple-choice",
          question: "Why was Hagar sent away with Ishmael?",
          options: [
            "Because she mocked Sarah",
            "Because Sarah didn’t like her",
            "Because of the inheritance issue",
            "Because of a dream Abraham had"
          ],
          correctAnswer: "Because of the inheritance issue"
        },
        {
          id: "q10",
          type: "true-false",
          question: "God promised to make Ishmael into a great nation.",
          correctAnswer: true
        },
        {
          id: "q11",
          type: "short-answer",
          question: "What did Jehovah ask Abraham to do with Isaac as a test of faith?",
          correctAnswer: "Offer him as a burnt offering"
        },
        {
          id: "q12",
          type: "multiple-choice",
          question: "Where did Abraham take Isaac to offer him?",
          options: ["Bethel", "Mount Horeb", "Mount Moriah", "Hebron"],
          correctAnswer: "Mount Moriah"
        },
        {
          id: "q13",
          type: "true-false",
          question: "Isaac carried the wood for the offering.",
          correctAnswer: true
        },
        {
          id: "q13",
          type: "true-false",
          question: "Isaac knew he was going to be offered as a sacrifice and helped Abraham with the preparations for it.",
          correctAnswer: false
        },
        {
          id: "q14",
          type: "short-answer",
          question: "What did Abraham say when Isaac asked where the lamb for the offering was?",
          correctAnswer: "God will provide the lamb"
        },
        {
          id: "q15",
          type: "multiple-choice",
          question: "What stopped Abraham from sacrificing Isaac?",
          options: ["His own decision", "A voice from the sky", "An angel of Jehovah", "Sarah's intervention"],
          correctAnswer: "An angel of Jehovah"
        },
        {
          id: "q16",
          type: "short-answer",
          question: "What was caught in a thicket and offered in place of Isaac?",
          correctAnswer: "A ram"
        },
        {
          id: "q17",
          type: "true-false",
          question: "Jehovah swore by Himself to bless Abraham and multiply his offspring.",
          correctAnswer: true
        }
      ]
    }
  },
  {
    day: 7,
    passage: "Genesis 23–24",
    focus: "Sarah’s death and burial, and the marriage of Isaac and Rebekah",
    quiz: {
      title: "📘 Genesis 23–24 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "How old was Sarah when she died?",
          options: ["90", "120", "127", "130"],
          correctAnswer: "127"
        },
        {
          id: "q2",
          type: "true-false",
          question: "Sarah was buried inside a cave.",
          correctAnswer: true
        },
        {
          id: "q3",
          type: "multiple-choice",
          question: "Who sold the burial site to Abraham?",
          options: ["Ephron the Hittite", "Abimelech", "Lot", "Eliezer"],
          correctAnswer: "Ephron the Hittite"
        },
        {
          id: "q4",
          type: "true-false",
          question: "Abraham accepted the land for free as a gift from Ephron.",
          correctAnswer: false
        },
        {
          id: "q5",
          type: "multiple-choice",
          question: "What did Abraham make his servant swear before sending him to find a wife for Isaac?",
          options: [
            "That he would find a Canaanite woman",
            "That he would take Isaac with him",
            "That he would not take a wife from the Canaanites",
            "That he would return quickly"
          ],
          correctAnswer: "That he would not take a wife from the Canaanites"
        },
        {
          id: "q6",
          type: "true-false",
          question: "The servant prayed to Jehovah for a sign to identify the right wife for Isaac.",
          correctAnswer: true
        },
        {
          id: "q7",
          type: "short-answer",
          question: "What sign did the servant ask Jehovah for at the well?",
          correctAnswer: "That the woman would offer him and his camels water"
        },
        {
          id: "q9",
          type: "multiple-choice",
          question: "What did the servant give to Rebekah?",
          options: [
            "A ring and silver coins",
            "A gold nose ring and two bracelets",
            "A camel and new clothes",
            "A jar of oil and sandals"
          ],
          correctAnswer: "A gold nose ring and two bracelets"
        },
        {
          id: "q10",
          type: "true-false",
          question: "Rebekah and her family immediately refused the servant’s request for her to marry Isaac.",
          correctAnswer: false
        },
        {
          id: "q11",
          type: "short-answer",
          question: "How did Rebekah respond when asked if she was willing to leave immediately?",
          correctAnswer: "I am willing to go"
        },
        {
          id: "q12",
          type: "multiple-choice",
          question: "What was Isaac doing when Rebekah arrived?",
          options: ["Planting crops", "Returning from the well", "Meditating in the field", "Speaking to Abraham"],
          correctAnswer: "Meditating in the field"
        },
        {
          id: "q13",
          type: "true-false",
          question: "Rebekah covered herself with a veil when she saw Isaac.",
          correctAnswer: true
        },
        {
          id: "q14",
          type: "short-answer",
          question: "Whom did Isaac marry?",
          correctAnswer: "Rebekah"
        }
      ]
    }
  },
  {
    day: 8,
    passage: "Genesis 25–27",
    focus: "Abraham's death, Jacob and Esau, and the stolen blessing",
    quiz: {
      title: "📘 Genesis 25–27 Study Quiz (NWT)",
      questions: [
        // Abraham's final years and death (Genesis 25:1-11)
        {
          id: "q2",
          type: "true-false",
          question: "Isaac inherited all of Abraham's belongings.",
          correctAnswer: true
        },
        {
          id: "q3",
          type: "short-answer",
          question: "How old was Abraham when he died?",
          correctAnswer: "175 years old"
        },
        {
          id: "q4",
          type: "true-false",
          question: "Ishmael helped Isaac bury their father Abraham.",
          correctAnswer: true
        },
        // Isaac and Rebekah's marriage and children (Genesis 25:19-26)
        {
          id: "q5",
          type: "multiple-choice",
          question: "Who were the parents of Jacob and Esau?",
          options: ["Abraham and Keturah", "Isaac and Rebekah", "Laban and Rachel", "Abraham and Sarah"],
          correctAnswer: "Isaac and Rebekah"
        },
        {
          id: "q6",
          type: "multiple-choice",
          question: "How old was Isaac when he married Rebekah?",
          options: ["17", "23", "40", "55"],
          correctAnswer: "40"
        },
        {
          id: "q7",
          type: "true-false",
          question: "Rebekah was barren.",
          correctAnswer: true
        },
        {
          id: "q8",
          type: "short-answer",
          question: "What did Jehovah say about the two boys before they were born?",
          correctAnswer: "The older will serve the younger"
        },
        // Birth of Jacob and Esau (Genesis 25:24-26)
        {
          id: "q9",
          type: "true-false",
          question: "Esau and Jacob were born two years apart.",
          correctAnswer: false
        },
        {
          id: "q10",
          type: "true-false",
          question: "Jacob was born first, followed by Esau holding his heel.",
          correctAnswer: false
        },
        {
          id: "q11",
          type: "short-answer",
          question: "What were the characteristics of Esau at birth?",
          correctAnswer: "He was red and hairy all over"
        },
        // Jacob and Esau's relationship (Genesis 25:27-28)
        {
          id: "q12",
          type: "true-false",
          question: "Rebekah loved Esau and Isaac loved Jacob.",
          correctAnswer: false
        },
        // The birthright sale (Genesis 25:29-34)
        {
          id: "q13",
          type: "short-answer",
          question: "What was Esau's reply when asked to give up his birthright?",
          correctAnswer: "What use is the birthright to me?"
        },
        {
          id: "q14",
          type: "multiple-choice",
          question: "What did Esau sell his birthright for?",
          options: ["Gold", "Clothing", "A blessing", "Bread and lentil stew"],
          correctAnswer: "Bread and lentil stew"
        },
        // Isaac in Gerar (Genesis 26:1-11)
        {
          id: "q15",
          type: "true-false",
          question: "Jehovah appeared to Isaac to reinforce his promise to Abraham",
          correctAnswer: true
        },
        {
          id: "q16",
          type: "multiple-choice",
          question: "Why did Isaac say Rebekah was his sister in Gerar?",
          options: [
            "Because she was his cousin",
            "Because he was afraid for his life",
            "Because Jehovah told him to",
            "Because she told him to"
          ],
          correctAnswer: "Because he was afraid for his life"
        },
        {
          id: "q17",
          type: "true-false",
          question: "Rebekah used to feel sad and was constantly mocked due to her appearance.",
          correctAnswer: false
        },
        {
          id: "q18",
          type: "true-false",
          question: "Abimelech discovered Isaac and Rebekah were actually husband and wife.",
          correctAnswer: true
        },
        // Isaac's prosperity and conflicts (Genesis 26:12-25)
        {
          id: "q19",
          type: "short-answer",
          question: "Why did the Philistines envy Isaac?",
          correctAnswer: "Because Jehovah blessed him and he became very wealthy"
        },
        {
          id: "q20",
          type: "multiple-choice",
          question: "What did the Philistines do to Isaac's wells which Abraham had built?",
          options: [
            "Filled them with dirt",
            "Destroyed them",
            "Built new ones",
            "Used them for themselves"
          ],
          correctAnswer: ""
        },
        // Esau's marriages (Genesis 26:34-35)
        {
          id: "q21",
          type: "true-false",
          question: "Isaac and Rebekah disapproved of Esau's wife.",
          correctAnswer: true
        },
        // The stolen blessing (Genesis 27:1-29)
        {
          id: "q23",
          type: "multiple-choice",
          question: "What did Isaac ask Esau to do before blessing him?",
          options: [
            "Hunt and prepare a meal",
            "Bring him water",
            "Build an altar",
            "Leave the land"
          ],
          correctAnswer: "Hunt and prepare a meal"
        },
        {
          id: "q24",
          type: "true-false",
          question: "Rebekah helped Jacob deceive Isaac to receive the blessing meant for Esau.",
          correctAnswer: true
        },
        {
          id: "q25",
          type: "multiple-choice",
          question: "How did Rebekah help Jacob receive the blessing from Isaac?",
          options: [
            "By preparing a meal and putting Esau's clothes on Jacob",
            "By hiding Esau's clothes",
            "By sending Esau away",
            "By bribing Isaac"
          ],
          correctAnswer: "By preparing a meal and putting Esau's clothes on Jacob"
        },
        {
          id: "q26",
          type: "short-answer",
          question: "How did Jacob deceive Isaac to receive the blessing meant for Esau?",
          correctAnswer: "By disguising himself as Esau and bringing food"
        },
        {
          id: "q27",
          type: "short-answer",
          question: "How did Isaac try to confirm the identity of the son before blessing him?",
          correctAnswer: "He touched him and asked who he was"
        },
        {
          id: "q28",
          type: "true-false",
          question: "Isaac blessed Esau first, thinking he was Jacob.",
          correctAnswer: false
        },
        {
          id: "q29",
          type: "true-false",
          question: "Isaac immediately realized he had been tricked and reversed the blessing.",
          correctAnswer: false
        },
        // Esau's reaction and Jacob's departure (Genesis 27:30-46)
        {
          id: "q30",
          type: "short-answer",
          question: "What did Esau plan to do after their father's death?",
          correctAnswer: "Kill Jacob"
        },
        {
          id: "q31",
          type: "multiple-choice",
          question: "Where did Rebekah send Jacob to protect him from Esau?",
          options: ["To Egypt", "To Salem", "To Laban in Haran", "To Bethel"],
          correctAnswer: "To Laban in Haran"
        },
        // Jacob's vision at Bethel (Genesis 28 - these questions seem to reference chapter 28)
      ]
    }
  },
  {
    day: 9,
    passage: "Genesis 28–30",
    focus: "Jacob’s dream, marriages, and the birth of his sons",
    quiz: {
      title: "📘 Genesis 28–30 Study Quiz (NWT)",
      questions: [
        {
          id: "q22",
          type: "true-false",
          question: "Jacob married a woman of Canaan.",
          correctAnswer: false
        },
        {
          id: "q32",
          type: "true-false",
          question: "Jehovah appeared to Jacob and told him he would inherit the land.",
          correctAnswer: true
        },
        {
          id: "q33",
          type: "true-false",
          question: "Jacob named a city called Bethel.",
          correctAnswer: true
        },
        {
          id: "q1",
          type: "multiple-choice",
          question: "Why did Isaac send Jacob to Paddan-aram?",
          options: [
            "To find work",
            "To flee from Esau",
            "To take a wife from among his relatives",
            "To build an altar to Jehovah"
          ],
          correctAnswer: "To take a wife from among his relatives"
        },
        {
          id: "q2",
          type: "true-false",
          question: "Jacob had a dream of a ladder reaching to heaven with angels going up and down.",
          correctAnswer: true
        },
        {
          id: "q3",
          type: "short-answer",
          question: "What did Jacob call the place where he had his dream?",
          correctAnswer: "Bethel"
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "Whom did Jacob meet first when he arrived in Haran?",
          options: ["Laban", "Rebekah", "Rachel", "Leah"],
          correctAnswer: "Rachel"
        },
        {
          id: "q5",
          type: "multiple-choice",
          question: "What agreement did Jacob make with Laban to marry Rachel?",
          options: [
            "To bring him riches",
            "To serve him for 7 years",
            "To guard his flocks",
            "To build a house"
          ],
          correctAnswer: "To serve him for 7 years"
        },
        {
          id: "q6",
          type: "true-false",
          question: "Laban tricked Jacob into marrying Leah first.",
          correctAnswer: true
        },
        {
          id: "q7",
          type: "multiple-choice",
          question: "How many more years did Jacob agree to serve to marry Rachel after Leah?",
          options: ["3", "5", "7", "10"],
          correctAnswer: "7"
        },
        {
          id: "q8",
          type: "short-answer",
          question: "Which wife was loved more by Jacob?",
          correctAnswer: "Rachel"
        },
        {
          id: "q9",
          type: "multiple-choice",
          question: "Which wife did Jehovah bless with children first?",
          options: ["Rachel", "Leah", "Bilhah", "Zilpah"],
          correctAnswer: "Leah"
        },
        {
          id: "q10",
          type: "short-answer",
          question: "How many sons did Leah bear before Rachel gave her servant to Jacob?",
          correctAnswer: "4"
        },
        {
          id: "q11",
          type: "true-false",
          question: "Rachel had her maidservant Bilhah bear children for Jacob.",
          correctAnswer: true
        },
        {
          id: "q12",
          type: "short-answer",
          question: "What were the names of the sons born through Bilhah?",
          correctAnswer: "Dan and Naphtali"
        },
        {
          id: "q13",
          type: "multiple-choice",
          question: "Which of Jacob’s wives gave him Gad and Asher?",
          options: ["Rachel", "Leah", "Bilhah", "Zilpah"],
          correctAnswer: "Zilpah"
        },
        {
          id: "q14",
          type: "multiple-choice",
          question: "What did Rachel name her first son?",
          options: ["Joseph", "Benjamin", "Dan", "Issachar"],
          correctAnswer: "Joseph"
        },
        {
          id: "q15",
          type: "true-false",
          question: "Jacob’s flocks increased because he used striped branches during mating.",
          correctAnswer: true
        },
        {
          id: "q16",
          type: "short-answer",
          question: "Why did Laban try to cheat Jacob?",
          correctAnswer: "To keep him working and take advantage of his success"
        }
      ]
    }
  }
];

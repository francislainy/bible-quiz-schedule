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
          id: "q12",
          type: "short-answer",
          question: "What was placed to guard the way to the tree of life?",
          correctAnswer: "Angels (Cherubs) holding a sword."
        },

        {
          id: "q13",
          type: "short-answer",
          question: "In the beginning, what did God first create?",
          correctAnswer: 'The heavens and the earth'
        },
        {
          id: "q14",
          type: "short-answer",
          question: "What did God use to create things?",
          correctAnswer: 'His active force.'
        },
        {
          id: "q15",
          type: "short-answer",
          question: "What did God create on the first day?",
          correctAnswer: "Day and Night."
        },
        {
          id: "q16",
          type: "short-answer",
          question: "What was the first commandment God gave to the first man?",
          correctAnswer: "Be fruitful and become many."
        },
        {
          id: "q17",
          type: "true-false",
          question: "Man was created from dust.",
          correctAnswer: true
        },
        {
          id: "q18",
          type: "short-answer",
          question: "Which two special trees were there in the Garden of Eve?",
          correctAnswer: 'The tree of life and the tree of knowledge of good and bad.'
        },
        {
          id: "q19",
          type: "multiple-choice",
          question: "How many rivers did the river which flew out of Eden divided into?",
          options: ["Two", "Three", "Four", "Five"],
          correctAnswer: "Four"
        },
        {
          id: "q20",
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
          id: "q4",
          type: "short-answer",
          question: "What did God say about the violence in Noah's time?"
        },
        {
          id: "q5",
          type: "short-answer",
          question: "Who was the first human born out of other humans?",
          correctAnswer: "Cain"
        },
        {
          id: "q6",
          type: "true-false",
          question: "Abel brought fruits as an offering to Jehovah?",
          correctAnswer: false
        },
        {
          id: "q7",
          type: "true-false",
          question: "Cain brought fruits as an offering to Jehovah?",
          correctAnswer: true
        },
        {
          id: "q8",
          type: "short-answer",
          question: "What did Jehovah said to Cain when he noticed he was close to commiting a sin?",
          correctAnswer: "He tried to convince him not to do it."
        },
        {
          id: "q9",
          type: "short-answer",
          question: "How was it possible that Cain had a wife?",
          correctAnswer: "Adam and Eve had sons and daughters."
        },
        {
          id: "q10",
          type: "short-answer",
          question: "Who was the third son of Adam and Eve?",
          correctAnswer: "Seth."
        },
        {
          id: "q11",
          type: "true-false",
          question: "Shem, Ham and Japheth were Noah's sons.",
          correctAnswer: true
        },
        {
          id: "q12",
          type: "short-answer",
          question: "What happened to Enoch after he died?",
          correctAnswer: "God took him."
        },
        {
          id: "q13",
          type: "multiple-choice",
          question: "Who was Noah's father?",
          options: ["Adam", "Seth", "Lamech", "Methuselah"],
          correctAnswer: "Lamech"
        },
        {
          id: "q14",
          type: "multiple-choice",
          question: "Who were the Nephilims?",
          options: ["Good angels", "People from nations opposing Jehovah", "Sons of Cain", "Bad angels who came down to earth to marry women"],
          correctAnswer: "Bad angels who came down to earth to marry women"
        },
        {
          id: "q15",
          type: "true-false",
          question: "The sons of the Nephilims were good people.",
          correctAnswer: false
        },
        {
          id: "q16",
          type: "short-answer",
          question: "How did Jehovah feel when he saw how people were behaving during Noah's time?",
          correctAnswer: "He regretted making mankind"
        },
        {
          id: "q17",
          type: "multiple-choice",
          question: "How many animals of each kind was Noah ordered to bring into the Ark?",
          options: ["1", "2", "3", "4"],
          correctAnswer: "2"
        },
        {
          id: "q18",
          type: "multiple-choice",
          question: "How old was Noah when the floodwaters came upon the earth?",
          options: ["300", "500", "600", "750"],
          correctAnswer: "600"
        },
        {
          id: "q19",
          type: "multiple-choice",
          question: "How many people entered the Ark together with Noah?",
          options: ["3", "6", "7", "8"],
          correctAnswer: "7"
        },
        {
          id: "q20",
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
          id: "q11",
          type: "true-false",
          question: "In a vision, Jehovah told Abram his offspring would be enslaved for 400 years.",
          correctAnswer: true
        },
        {
          id: "q12",
          type: "true-false",
          question: "Abraham was very poor.",
          correctAnswer: false
        },
        {
          id: "q13",
          type: "short-answer",
          question: "Why did Lot move to a city near Sodom?",
          correctAnswer: "There was quarreling between his crew and Abraham's due to lack of space for both being together."
        },
        {
          id: "q14",
          type: "multiple-choice",
          question: "Which person did Abraham needed to rescue out of an enemy tribe?",
          options: ["Sarah", "Lot", "Isaac", "Isaac's wife"],
          correctAnswer: "Lot"
        },
        {
          id: "q15",
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
          id: "q4",
          type: "true-false",
          question: "The angel of Jehovah told Hagar Ishmael's hand would be against everyone, and everyone's hand would be against him.",
          correctAnswer: "You are a God who sees me"
        },
        {
          id: "q5",
          type: "short-answer",
          question: "How old was Abram when Ishmael was born?",
          correctAnswer: "86 years old"
        },
        {
          id: "q6",
          type: "true-false",
          question: "God changed Abram’s name to Abraham.",
          correctAnswer: true
        },
        {
          id: "q7",
          type: "true-false",
          question: "Jehovah said Sarah would never bear a child due to her old age.",
          correctAnswer: false
        },
        {
          id: "q8",
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
          id: "q9",
          type: "short-answer",
          question: "How old was Abraham when he was circumcised?",
          correctAnswer: "99 years old"
        },
        {
          id: "q10",
          type: "multiple-choice",
          question: "How did Sarah react when she heard she would have a son?",
          options: ["She rejoiced", "She cried", "She laughed", "She fainted"],
          correctAnswer: "She laughed"
        },
        {
          id: "q11",
          type: "short-answer",
          question: "What question did Jehovah ask Sarah after she laughed?",
          correctAnswer: "Is anything too extraordinary for Jehovah?"
        },
        {
          id: "q12",
          type: "true-false",
          question: "Abraham welcomed three men and showed them hospitality.",
          correctAnswer: true
        },
        {
          id: "q13",
          type: "short-answer",
          question: "What city did Jehovah say He would investigate due to its grave sin?",
          correctAnswer: "Sodom"
        },
        {
          id: "q14",
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
          id: "q7",
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
          id: "q8",
          type: "true-false",
          question: "The Moabites and Ammonites are direct descendants of Lot.",
          correctAnswer: true
        },
        {
          id: "q9",
          type: "multiple-choice",
          question: "What did Abraham say about Sarah when staying in Gerar?",
          options: ["She is my cousin", "She is my wife", "She is my servant", "She is my sister"],
          correctAnswer: "She is my sister"
        },
        {
          id: "q10",
          type: "true-false",
          question: "Isaac was born when Abraham was 100 years old.",
          correctAnswer: true
        },
        {
          id: "q11",
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
          id: "q12",
          type: "true-false",
          question: "God promised to make Ishmael into a great nation.",
          correctAnswer: true
        },
        {
          id: "q13",
          type: "short-answer",
          question: "What did Jehovah ask Abraham to do with Isaac as a test of faith?",
          correctAnswer: "Offer him as a burnt offering"
        },
        {
          id: "q14",
          type: "multiple-choice",
          question: "Where did Abraham take Isaac to offer him?",
          options: ["Bethel", "Mount Horeb", "Mount Moriah", "Hebron"],
          correctAnswer: "Mount Moriah"
        },
        {
          id: "q15",
          type: "true-false",
          question: "Isaac carried the wood for the offering.",
          correctAnswer: true
        },
        {
          id: "q16",
          type: "true-false",
          question: "Isaac knew he was going to be offered as a sacrifice and helped Abraham with the preparations for it.",
          correctAnswer: false
        },
        {
          id: "q17",
          type: "short-answer",
          question: "What did Abraham say when Isaac asked where the lamb for the offering was?",
          correctAnswer: "God will provide the lamb"
        },
        {
          id: "q18",
          type: "multiple-choice",
          question: "What stopped Abraham from sacrificing Isaac?",
          options: ["His own decision", "A voice from the sky", "An angel of Jehovah", "Sarah's intervention"],
          correctAnswer: "An angel of Jehovah"
        },
        {
          id: "q19",
          type: "short-answer",
          question: "What was caught in a thicket and offered in place of Isaac?",
          correctAnswer: "A ram"
        },
        {
          id: "q20",
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
          id: "q8",
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
          id: "q9",
          type: "true-false",
          question: "Rebekah and her family immediately refused the servant’s request for her to marry Isaac.",
          correctAnswer: false
        },
        {
          id: "q10",
          type: "short-answer",
          question: "How did Rebekah respond when asked if she was willing to leave immediately?",
          correctAnswer: "I am willing to go"
        },
        {
          id: "q11",
          type: "multiple-choice",
          question: "What was Isaac doing when Rebekah arrived?",
          options: ["Planting crops", "Returning from the well", "Meditating in the field", "Speaking to Abraham"],
          correctAnswer: "Meditating in the field"
        },
        {
          id: "q12",
          type: "true-false",
          question: "Rebekah covered herself with a veil when she saw Isaac.",
          correctAnswer: true
        },
        {
          id: "q13",
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
          id: "q1",
          type: "true-false",
          question: "Isaac inherited all of Abraham's belongings.",
          correctAnswer: true
        },
        {
          id: "q2",
          type: "short-answer",
          question: "How old was Abraham when he died?",
          correctAnswer: "175 years old"
        },
        {
          id: "q3",
          type: "true-false",
          question: "Ishmael helped Isaac bury their father Abraham.",
          correctAnswer: true
        },
        // Isaac and Rebekah's marriage and children (Genesis 25:19-26)
        {
          id: "q4",
          type: "multiple-choice",
          question: "Who were the parents of Jacob and Esau?",
          options: ["Abraham and Keturah", "Isaac and Rebekah", "Laban and Rachel", "Abraham and Sarah"],
          correctAnswer: "Isaac and Rebekah"
        },
        {
          id: "q5",
          type: "multiple-choice",
          question: "How old was Isaac when he married Rebekah?",
          options: ["17", "23", "40", "55"],
          correctAnswer: "40"
        },
        {
          id: "q6",
          type: "true-false",
          question: "Rebekah was barren.",
          correctAnswer: true
        },
        {
          id: "q7",
          type: "short-answer",
          question: "What did Jehovah say about the two boys before they were born?",
          correctAnswer: "The older will serve the younger"
        },
        // Birth of Jacob and Esau (Genesis 25:24-26)
        {
          id: "q8",
          type: "true-false",
          question: "Esau and Jacob were born two years apart.",
          correctAnswer: false
        },
        {
          id: "q9",
          type: "true-false",
          question: "Jacob was born first, followed by Esau holding his heel.",
          correctAnswer: false
        },
        {
          id: "q10",
          type: "short-answer",
          question: "What were the characteristics of Esau at birth?",
          correctAnswer: "He was red and hairy all over"
        },
        // Jacob and Esau's relationship (Genesis 25:27-28)
        {
          id: "q11",
          type: "true-false",
          question: "Rebekah loved Esau and Isaac loved Jacob.",
          correctAnswer: false
        },
        // The birthright sale (Genesis 25:29-34)
        {
          id: "q12",
          type: "short-answer",
          question: "What was Esau's reply when asked to give up his birthright?",
          correctAnswer: "What use is the birthright to me?"
        },
        {
          id: "q13",
          type: "multiple-choice",
          question: "What did Esau sell his birthright for?",
          options: ["Gold", "Clothing", "A blessing", "Bread and lentil stew"],
          correctAnswer: "Bread and lentil stew"
        },
        // Isaac in Gerar (Genesis 26:1-11)
        {
          id: "q14",
          type: "true-false",
          question: "Jehovah appeared to Isaac to reinforce his promise to Abraham",
          correctAnswer: true
        },
        {
          id: "q15",
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
          id: "q16",
          type: "true-false",
          question: "Rebekah used to feel sad and was constantly mocked due to her appearance.",
          correctAnswer: false
        },
        {
          id: "q17",
          type: "true-false",
          question: "Abimelech discovered Isaac and Rebekah were actually husband and wife.",
          correctAnswer: true
        },
        // Isaac's prosperity and conflicts (Genesis 26:12-25)
        {
          id: "q18",
          type: "short-answer",
          question: "Why did the Philistines envy Isaac?",
          correctAnswer: "Because Jehovah blessed him and he became very wealthy"
        },
        {
          id: "q19",
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
          id: "q20",
          type: "true-false",
          question: "Isaac and Rebekah disapproved of Esau's wife.",
          correctAnswer: true
        },
        // The stolen blessing (Genesis 27:1-29)
        {
          id: "q21",
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
          id: "q22",
          type: "true-false",
          question: "Rebekah helped Jacob deceive Isaac to receive the blessing meant for Esau.",
          correctAnswer: true
        },
        {
          id: "q23",
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
          id: "q24",
          type: "short-answer",
          question: "How did Jacob deceive Isaac to receive the blessing meant for Esau?",
          correctAnswer: "By disguising himself as Esau and bringing food"
        },
        {
          id: "q25",
          type: "short-answer",
          question: "How did Isaac try to confirm the identity of the son before blessing him?",
          correctAnswer: "He touched him and asked who he was"
        },
        {
          id: "q26",
          type: "true-false",
          question: "Isaac blessed Esau first, thinking he was Jacob.",
          correctAnswer: false
        },
        {
          id: "q27",
          type: "true-false",
          question: "Isaac immediately realized he had been tricked and reversed the blessing.",
          correctAnswer: false
        },
        // Esau's reaction and Jacob's departure (Genesis 27:30-46)
        {
          id: "q28",
          type: "short-answer",
          question: "What did Esau plan to do after their father's death?",
          correctAnswer: "Kill Jacob"
        },
        {
          id: "q29",
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
          id: "q1",
          type: "true-false",
          question: "Jacob married a woman of Canaan.",
          correctAnswer: false
        },
        {
          id: "q2",
          type: "true-false",
          question: "Jehovah appeared to Jacob and told him he would inherit the land.",
          correctAnswer: true
        },
        {
          id: "q3",
          type: "true-false",
          question: "Jacob named a city called Bethel.",
          correctAnswer: true
        },
        {
          id: "q4",
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
          id: "q5",
          type: "true-false",
          question: "Jacob had a dream of a ladder reaching to heaven with angels going up and down.",
          correctAnswer: true
        },
        {
          id: "q6",
          type: "short-answer",
          question: "What did Jacob call the place where he had his dream?",
          correctAnswer: "Bethel"
        },
        {
          id: "q7",
          type: "multiple-choice",
          question: "Who vowed to give Jehovah a tenth of everything back to him?",
          options: ["Jacob", "Isaac", "Esau", "Laban"],
          correctAnswer: "Jacob"
        },
        {
          id: "q8",
          type: "multiple-choice",
          question: "Whom did Jacob meet first when he arrived in Haran?",
          options: ["Laban", "Rebekah", "Rachel", "Leah"],
          correctAnswer: "Rachel"
        },
        {
          id: "q9",
          type: "true-false",
          question: "Rachel was a shepherdess.",
          correctAnswer: true
        },
        {
          id: "q10",
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
          id: "q11",
          type: "true-false",
          question: "Laban tricked Jacob into marrying Leah first.",
          correctAnswer: true
        },
        {
          id: "q12",
          type: "multiple-choice",
          question: "How many more years did Jacob agree to serve to marry Rachel after Leah?",
          options: ["3", "5", "7", "10"],
          correctAnswer: "7"
        },
        {
          id: "q13",
          type: "short-answer",
          question: "Which wife was loved more by Jacob?",
          correctAnswer: "Rachel"
        },
        {
          id: "q14",
          type: "multiple-choice",
          question: "Which wife did Jehovah bless with children first?",
          options: ["Rachel", "Leah", "Bilhah", "Zilpah"],
          correctAnswer: "Leah"
        },
        {
          id: "q15",
          type: "short-answer",
          question: "How many sons did Leah bear before Rachel gave her servant to Jacob?",
          correctAnswer: "4"
        },
        {
          id: "q16",
          type: "true-false",
          question: "Judah was Leah's first born.",
          correctAnswer: false
        },
        {
          id: "q17",
          type: "true-false",
          question: "Rachel had her maidservant Bilhah bear children for Jacob.",
          correctAnswer: true
        },
        {
          id: "q18",
          type: "true-false",
          question: "Rachel became mother to Dinah.",
          correctAnswer: false
        },
        {
          id: "q19",
          type: "multiple-choice",
          question: "What did Rachel name her first son?",
          options: ["Joseph", "Benjamin", "Dan", "Issachar"],
          correctAnswer: "Joseph"
        },
        {
          id: "q20",
          type: "true-false",
          question: "Jacob’s flocks increased because he used striped branches during mating.",
          correctAnswer: true
        },
        {
          id: "q21",
          type: "short-answer",
          question: "Why did Laban try to cheat Jacob?",
          correctAnswer: "To keep him working and take advantage of his success"
        }
      ]
    }
  },
  {
    day: 10,
    passage: "Genesis 31–32",
    focus: "Jacob leaves Laban and prepares to meet Esau",
    quiz: {
      title: "📘 Genesis 31–32 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "Why did Jacob decide to leave Laban secretly?",
          options: [
            "Jehovah told him to return to his homeland",
            "He was angry with Laban’s daughters",
            "Esau was coming to find him",
            "Laban had taken his flocks"
          ],
          correctAnswer: "Jehovah told him to return to his homeland"
        },
        {
          id: "q2",
          type: "true-false",
          question: "Rachel stole her father's household gods before leaving.",
          correctAnswer: true
        },
        {
          id: "q3",
          type: "multiple-choice",
          question: "What did Laban accuse Jacob of stealing?",
          options: ["His flocks", "His daughters", "His idols", "His money"],
          correctAnswer: "His idols"
        },
        {
          id: "q4",
          type: "short-answer",
          question: "Where did Rachel hide the stolen idols?",
          correctAnswer: "In the saddle basket of a camel"
        },
        {
          id: "q5",
          type: "short-answer",
          question: "What did Rachel say to Laban when he came in looking for his stolen good?",
          correctAnswer: "She couldn't get up because she was menstruating"
        },
        {
          id: "q6",
          type: "true-false",
          question: "Laban caught up with Jacob in the mountains of Gilead.",
          correctAnswer: true
        },
        {
          id: "q7",
          type: "multiple-choice",
          question: "What prevented Laban from harming Jacob?",
          options: [
            "His daughters stopped him",
            "Jacob’s servants threatened him",
            "God warned him in a dream",
            "He was afraid of Esau"
          ],
          correctAnswer: "God warned him in a dream"
        },
        {
          id: "q8",
          type: "short-answer",
          question: "What kind of agreement did Jacob and Laban make?",
          correctAnswer: "A covenant of peace and boundary (the Mizpah agreement)"
        },
        {
          id: "q9",
          type: "true-false",
          question: "Jacob made a heap of stones as a witness of the covenant with Laban.",
          correctAnswer: true
        },
        {
          id: "q10",
          type: "multiple-choice",
          question: "How did Jacob feel when he heard Esau was coming to meet him with 400 men?",
          options: ["Relieved", "Excited", "Terrified", "Pleased"],
          correctAnswer: "Terrified"
        },
        {
          id: "q11",
          type: "short-answer",
          question: "What did Jacob do to prepare for meeting Esau?",
          correctAnswer: "He divided his people and flocks, and sent gifts to Esau"
        },
        {
          id: "q12",
          type: "multiple-choice",
          question: "Who wrestled with Jacob during the night?",
          options: ["An angel", "Esau", "Laban", "A shepherd"],
          correctAnswer: "An angel"
        },
        {
          id: "q13",
          type: "short-answer",
          question: "What new name did the angel give Jacob?",
          correctAnswer: "Israel"
        },
        {
          id: "q14",
          type: "true-false",
          question: "Jacob broke his hand while wrestling with the angel.",
          correctAnswer: false
        },
        {
          id: "q15",
          type: "true-false",
          question: "The angel was left with a limp after wrestling with Jacob.",
          correctAnswer: false
        },
        {
          id: "q16",
          type: "short-answer",
          question: "What does the name 'Israel' mean?",
          correctAnswer: "One who contends with God"
        }
      ]
    }
  },
  {
    day: 11,
    passage: "Genesis 33–34",
    focus: "Jacob meets Esau and Dinah is violated",
    quiz: {
      title: "📘 Genesis 33–34 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "How did Esau react when he saw Jacob?",
          options: ["He attacked him", "He turned away", "He embraced him", "He took his flocks"],
          correctAnswer: "He embraced him"
        },
        {
          id: "q2",
          type: "true-false",
          question: "Jacob bowed to Esau seven times as he approached him.",
          correctAnswer: true
        },
        {
          id: "q3",
          type: "multiple-choice",
          question: "How many men were together with Esau when he came to meet Jacob?",
          options: ["12", "400", "3000", "185000"],
          correctAnswer: "400"
        },

        {
          id: "q4",
          type: "multiple-choice",
          question: "What did Jacob offer Esau when they met?",
          options: ["His flocks", "His servants", "Many gifts", "A blessing"],
          correctAnswer: "Many gifts"
        },
        {
          id: "q5",
          type: "short-answer",
          question: "What reason did Jacob give for not traveling with Esau?",
          correctAnswer: "His children and animals were too weak to travel fast"
        },
        {
          id: "q6",
          type: "short-answer",
          question: "What city did Jacob settle near after meeting Esau?",
          correctAnswer: "Shechem"
        },
        {
          id: "q7",
          type: "true-false",
          question: "Jacob built an altar to Jehovah near Shechem.",
          correctAnswer: true
        },
        {
          id: "q8",
          type: "short-answer",
          question: "What happened to Dinah, Jacob’s daughter?",
          correctAnswer: "She was violated by Shechem"
        },
        {
          id: "q9",
          type: "multiple-choice",
          question: "What was Shechem’s request after violating Dinah?",
          options: ["To leave him alone", "To marry her", "To buy her as a slave", "To flee with her"],
          correctAnswer: "To marry her"
        },
        {
          id: "q10",
          type: "short-answer",
          question: "What condition did Jacob’s sons give Shechem and his people for intermarriage?",
          correctAnswer: "All the males must get circumcised"
        },
        {
          id: "q11",
          type: "multiple-choice",
          question: "Which two sons of Jacob attacked Shechem’s city?",
          options: ["Reuben and Judah", "Simeon and Levi", "Dan and Naphtali", "Gad and Asher"],
          correctAnswer: "Simeon and Levi"
        },
        {
          id: "q12",
          type: "true-false",
          question: "Simeon and Levi waited until the men were sore from circumcision before attacking.",
          correctAnswer: true
        },
        {
          id: "q13",
          type: "true-false",
          question: "The other sons of Jacob joined in the attack on Shechem’s city.",
          correctAnswer: true
        },
        {
          id: "q14",
          type: "short-answer",
          question: "Why was Jacob upset with Simeon and Levi after the attack?",
          correctAnswer: "He feared reprisals from the Canaanites and Perizzites"
        }
      ]
    }
  },
  {
    day: 12,
    passage: "Genesis 35–37",
    focus: "God blesses Jacob, genealogies, and Joseph's dreams",
    quiz: {
      title: "📘 Genesis 35–37 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "short-answer",
          question: "What did God tell Jacob to do at Bethel?",
          correctAnswer: "Build an altar to the true God who appeared to him"
        },
        {
          id: "q2",
          type: "multiple-choice",
          question: "What did Jacob bury under the big tree near Shechem?",
          options: ["Gold", "Idols and earrings", "Bones", "Grain"],
          correctAnswer: "Idols and earrings"
        },
        {
          id: "q3",
          type: "true-false",
          question: "God changed Jacob’s name to Israel again at Bethel.",
          correctAnswer: true
        },
        {
          id: "q4",
          type: "short-answer",
          question: "What was the name of the last son born to Jacob?",
          correctAnswer: "Benjamin"
        },
        {
          id: "q5",
          type: "multiple-choice",
          question: "Who died while giving birth to Benjamin?",
          options: ["Leah", "Dinah", "Rachel", "Rebekah"],
          correctAnswer: "Rachel"
        },
        {
          id: "q6",
          type: "true-false",
          question: "Isaac died at the age of 180 years old.",
          correctAnswer: true
        },
        {
          id: "q7",
          type: "true-false",
          question: "Esau had only one wife and lived near Jacob.",
          correctAnswer: false
        },
        {
          id: "q8",
          type: "short-answer",
          question: "Why did Esau move away from Jacob?",
          correctAnswer: "Because their possessions were too many for them to dwell together"
        },
        {
          id: "q9",
          type: "true-false",
          question: "Esau is considered as father of the Edomites?",
          correctAnswer: true,
        },
        {
          id: "q10",
          type: "multiple-choice",
          question: "Who was Joseph’s mother?",
          options: ["Leah", "Rachel", "Zilpah", "Bilhah"],
          correctAnswer: "Rachel"
        },
        {
          id: "q11",
          type: "true-false",
          question: "Joseph was Jacob's favorite son.",
          correctAnswer: true
        },
        {
          id: "q12",
          type: "short-answer",
          question: "What special gift did Jacob give to Joseph?",
          correctAnswer: "A long-sleeved robe"
        },
        {
          id: "q13",
          type: "multiple-choice",
          question: "What did Joseph’s brothers do to him out of jealousy?",
          options: [
            "Sold him to the Midianites",
            "Killed him",
            "Ignored him",
            "Took his robe"
          ],
          correctAnswer: "Sold him to the Midianites",
        },
        {
          id: "q14",
          type: "multiple-choice",
          question: "What was Joseph's first dream about?",
          options: [
            "The sun, moon, and stars bowing to him",
            "Eleven sheaves bowing to his sheaf",
            "A ladder reaching heaven",
            "A lion and a lamb lying together"
          ],
          correctAnswer: "Eleven sheaves bowing to his sheaf"
        },
        {
          id: "q15",
          type: "multiple-choice",
          question: "Who suggested not killing Joseph but throwing him in a pit?",
          options: ["Judah", "Reuben", "Levi", "Dan"],
          correctAnswer: "Reuben"
        },
        {
          id: "q16",
          type: "true-false",
          question: "Joseph was sold to the Midianites for twenty pieces of silver.",
          correctAnswer: true
        },
        {
          id: "q17",
          type: "multiple-choice",
          question: "How old was Joseph when he was sold as a slave?",
          options: [
            "17",
            "20",
            "25",
            "30"
          ],
          correctAnswer: "17"
        },
        {
          id: "q18",
          type: "short-answer",
          question: "How did the brothers convince Jacob that Joseph was dead?",
          correctAnswer: "They dipped his robe in goat’s blood"
        },
        {
          id: "q19",
          type: "short-answer",
          question: "To whom was Joseph sold in Egypt?",
          correctAnswer: "Potiphar, a chief of Pharaoh’s guard"
        }
      ]
    }
  },
  {
    day: 13,
    passage: "Genesis 38–40",
    focus: "Judah and Tamar, Joseph in Egypt and prison",
    quiz: {
      title: "📘 Genesis 38–40 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "Who was Judah's daughter-in-law?",
          options: ["Rachel", "Leah", "Tamar", "Dinah"],
          correctAnswer: "Tamar"
        },
        {
          id: "q2",
          type: "true-false",
          question: "Tamar disguised herself as a prostitute to have a child by Judah.",
          correctAnswer: true
        },
        {
          id: "q3",
          type: "short-answer",
          question: "What did Tamar take from Judah as a pledge?",
          correctAnswer: "His seal, cord, and staff"
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "What were the names of Tamar’s twin sons?",
          options: ["Perez and Zerah", "Esau and Jacob", "Manasseh and Ephraim", "Simeon and Levi"],
          correctAnswer: "Perez and Zerah"
        },
        {
          id: "q5",
          type: "short-answer",
          question: "To whom was Joseph sold in Egypt?",
          correctAnswer: "Potiphar"
        },
        {
          id: "q6",
          type: "true-false",
          question: "Potiphar’s wife falsely accused Joseph, causing him to be imprisoned.",
          correctAnswer: true
        },
        {
          id: "q7",
          type: "multiple-choice",
          question: "Why did Potiphar's wife accuse Joseph?",
          options: [
            "He stole from her",
            "He ran away from her advances",
            "He refused to cook for her",
            "He revealed her secret"
          ],
          correctAnswer: "He ran away from her advances"
        },
        {
          id: "q8",
          type: "short-answer",
          question: "Who were the two officials imprisoned with Joseph?",
          correctAnswer: "Pharaoh’s chief cupbearer and baker"
        },
        {
          id: "q9",
          type: "multiple-choice",
          question: "What did Joseph say was the source of dream interpretations?",
          options: ["His wisdom", "Books of magic", "God", "The stars"],
          correctAnswer: "God"
        },
        {
          id: "q10",
          type: "true-false",
          question: "Joseph’s interpretation of the dreams of the cupbearer and the baker both predicted restoration.",
          correctAnswer: false
        },
        {
          id: "q11",
          type: "short-answer",
          question: "What was the outcome for the chief cupbearer?",
          correctAnswer: "He was restored to his position"
        },
        {
          id: "q12",
          type: "short-answer",
          question: "What was the outcome for the chief baker?",
          correctAnswer: "He was executed"
        },
        {
          id: "q13",
          type: "true-false",
          question: "The chief cupbearer remembered Joseph immediately and told Pharaoh about him.",
          correctAnswer: false
        },
        {
          id: "q14",
          type: "true-false",
          question: "The baker got executed on the day of Pharaoh's birthday.",
          correctAnswer: true
        },
      ]
    }
  },
  {
    day: 14,
    passage: "Genesis 41–42",
    focus: "Pharaoh’s dreams, Joseph’s rise to power, and his brothers’ visit",
    quiz: {
      title: "📘 Genesis 41–42 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "What were the two types of things Pharaoh saw in his dreams?",
          options: ["Wells and rivers", "Stars and moons", "Cows and ears of grain", "Lions and sheep"],
          correctAnswer: "Cows and ears of grain"
        },
        {
          id: "q2",
          type: "short-answer",
          question: "Who finally told Pharaoh about Joseph’s ability to interpret dreams?",
          correctAnswer: "The chief cupbearer"
        },
        {
          id: "q3",
          type: "true-false",
          question: "Joseph took credit for interpreting dreams before Pharaoh.",
          correctAnswer: false
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "What did Pharaoh’s dreams mean?",
          options: [
            "Egypt would fall to war",
            "There would be 7 years of abundance followed by 7 years of famine",
            "The Nile would dry up permanently",
            "He would have twin sons"
          ],
          correctAnswer: "There would be 7 years of abundance followed by 7 years of famine"
        },
        {
          id: "q5",
          type: "short-answer",
          question: "What position did Pharaoh give to Joseph after interpreting the dreams?",
          correctAnswer: "Second in command over Egypt"
        },
        {
          id: "q6",
          type: "true-false",
          question: "Pharaoh gave Joseph a wife.",
          correctAnswer: true
        },
        {
          id: "q7",
          type: "multiple-choice",
          question: "What were the names of Joseph’s two sons?",
          options: ["Manasseh and Ephraim", "Reuben and Simeon", "Judah and Levi", "Dan and Naphtali"],
          correctAnswer: "Manasseh and Ephraim"
        },
        {
          id: "q8",
          type: "multiple-choice",
          question: "Why did Joseph’s brothers go to Egypt?",
          options: [
            "To escape war",
            "To flee from Esau",
            "To look for Joseph",
            "To buy food during the famine"
          ],
          correctAnswer: "To buy food during the famine"
        },
        {
          id: "q9",
          type: "true-false",
          question: "Joseph’s brothers recognized him when they saw him in Egypt.",
          correctAnswer: false
        },
        {
          id: "q10",
          type: "short-answer",
          question: "What accusation did Joseph make against his brothers?",
          correctAnswer: "That they were spies"
        },
        {
          id: "q11",
          type: "multiple-choice",
          question: "Which brother was kept in Egypt while the others returned home?",
          options: ["Reuben", "Judah", "Simeon", "Levi"],
          correctAnswer: "Simeon"
        },
        {
          id: "q12",
          type: "short-answer",
          question: "Which brother did Joseph demand to see before releasing Simeon?",
          correctAnswer: "Benjamin"
        },
        {
          id: "q13",
          type: "short-answer",
          question: "What did Jacob say when his sons told him they had to take Benjamin to Egypt?",
          correctAnswer: "He refused to let Benjamin go"
        },
        {
          id: "q14",
          type: "short-answer",
          question: "What did Reuben offer to do if he did not bring Benjamin back safely?",
          correctAnswer: "To have his two sons killed"
        },
      ]
    }
  },
  {
    day: 15,
    passage: "Genesis 43–45",
    focus: "Joseph’s brothers return to Egypt and reveal his identity",
    quiz: {
      title: "📘 Genesis 43–45 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "short-answer",
          question: "Which brother promised to be responsible for Benjamin’s safety?",
          correctAnswer: "Judah"
        },
        {
          id: "q2",
          type: "multiple-choice",
          question: "What gift did Jacob send with his sons to Egypt the second time?",
          options: ["Gold and silver", "Clothing and cattle", "Balm, honey, spices, and almonds", "Olive oil and wine"],
          correctAnswer: "Balm, honey, spices, and almonds"
        },
        {
          id: "q3",
          type: "true-false",
          question: "Joseph secretly returned the money his brothers paid for the grain.",
          correctAnswer: true
        },
        {
          id: "q4",
          type: "true-false",
          question: "Joseph wept when he saw Benjamin.",
          correctAnswer: true
        },
        {
          id: "q5",
          type: "true-false",
          question: "The Hebrews and Egyptians ate together as a welcome party for Joseph's brothers.",
          correctAnswer: false
        },
        {
          id: "q6",
          type: "multiple-choice",
          question: "How were Joseph’s brothers seated during the meal?",
          options: [
            "In order of their age",
            "By the tribe they represented",
            "At random",
            "With Benjamin at the head"
          ],
          correctAnswer: "In order of their age"
        },
        {
          id: "q7",
          type: "short-answer",
          question: "What special treatment did Benjamin receive during the meal?",
          correctAnswer: "He was served five times as much food"
        },
        {
          id: "q8",
          type: "multiple-choice",
          question: "What item did Joseph have placed in Benjamin’s bag?",
          options: ["A silver cup", "A gold coin", "A piece of cloth", "A ring"],
          correctAnswer: "A silver cup"
        },
        {
          id: "q9",
          type: "true-false",
          question: "Joseph’s steward accused the brothers of stealing Joseph’s silver cup.",
          correctAnswer: true
        },
        {
          id: "q10",
          type: "short-answer",
          question: "Which brother pleaded with Joseph to let him stay in Benjamin’s place?",
          correctAnswer: "Judah"
        },
        {
          id: "q11",
          type: "short-answer",
          question: "What were Joseph's fearful might happen to Jacob if they did not bring Benjamin back?",
          correctAnswer: "He might die of grief"
        },
        {
          id: "q12",
          type: "true-false",
          question: "Joseph revealed his identity to his brothers while Pharaoh was present.",
          correctAnswer: false
        },
        {
          id: "q13",
          type: "short-answer",
          question: "Why did Joseph say God allowed him to be sold into Egypt?",
          correctAnswer: "To preserve life during the famine"
        },
        {
          id: "q14",
          type: "multiple-choice",
          question: "How did Pharaoh respond when he heard about Joseph’s brothers?",
          options: [
            "He was angry",
            "He ignored it",
            "He welcomed them and gave them provisions",
            "He expelled them from Egypt"
          ],
          correctAnswer: "He welcomed them and gave them provisions"
        },
        {
          id: "q15",
          type: "true-false",
          question: "Joseph instructed his brothers to tell their father that he was alive and in Egypt.",
          correctAnswer: true
        },
        {
          id: "q16",
          type: "multiple-choice",
          question: "What message did Joseph send to his father through his brothers?",
          options: [
            "To come to Egypt quickly and live near him",
            "To stay in Canaan and not worry about him",
            "To send more gifts to Pharaoh",
            "To prepare for war against the Egyptians"
          ],
          correctAnswer: "To come to Egypt quickly and live near him"
        }
      ]
    }
  },
  {
    day: 16,
    passage: "Genesis 46–48",
    focus: "Jacob moves to Egypt and blesses Joseph’s sons",
    quiz: {
      title: "📘 Genesis 46–48 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "short-answer",
          question: "What did God tell Jacob in a vision at Beersheba before he went to Egypt?",
          correctAnswer: "Do not be afraid to go down to Egypt"
        },
        {
          id: "q2",
          type: "multiple-choice",
          question: "How many direct descendants of Jacob entered Egypt with him?",
          options: ["66", "70", "72", "75"],
          correctAnswer: "66"
        },
        {
          id: "q3",
          type: "true-false",
          question: "Joseph traveled personally to meet his father Jacob when he arrived in Egypt.",
          correctAnswer: true
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "What did Jacob say when he finally saw Joseph in Egypt?",
          options: [
            "‘Now I can die, since I have seen your face.’",
            "‘Why did you hide yourself from me?’",
            "‘Let us go back to Canaan now.’",
            "‘You are no longer my son.’"
          ],
          correctAnswer: "‘Now I can die, since I have seen your face.’"
        },
        {
          id: "q8",
          type: "short-answer",
          question: "What did the Egyptians give Joseph in exchange for food during the famine?",
          correctAnswer: "Money, livestock, land, and themselves as slaves"
        },
        {
          id: "q5",
          type: "short-answer",
          question: "What region of Egypt did Joseph settle his family in?",
          correctAnswer: "Goshen"
        },
        {
          id: "q6",
          type: "true-false",
          question: "Herders of sheep were worshipped by the Egyptians.",
          correctAnswer: false
        },
        {
          id: "q7",
          type: "true-false",
          question: "Joseph presented all of him brothers to Pharaoh.",
          correctAnswer: false
        },
        {
          id: "q8",
          type: "true-false",
          question: "Jacob blessed Pharaoh.",
          correctAnswer: true
        },
        {
          id: "q9",
          type: "short-answer",
          question: "What did Joseph do to manage the famine in Egypt?",
          correctAnswer: "He collected all the money, livestock, land, and people in exchange for food"
        },
        {
          id: "q10",
          type: "multiple-choice",
          question: "Why did Joseph placed his hand under Jacob’s thigh?",
          options: [
            "To show respect",
            "To help alleviate his pain",
            "To swear an oath",
            "To bless him"
          ],
          correctAnswer: "To swear an oath"
        },
        {
          id: "q11",
          type: "true-false",
          question: "Jacob lived in Egypt for 17 years before he died.",
          correctAnswer: true
        },
        {
          id: "q12",
          type: "multiple-choice",
          question: "Who did Jacob bless first when Joseph brought his sons to him?",
          options: ["Manasseh", "Ephraim", "Reuben", "Judah"],
          correctAnswer: "Ephraim"
        },
        {
          id: "q13",
          type: "true-false",
          question: "Joseph was upset when Jacob gave the greater blessing to Ephraim.",
          correctAnswer: true
        },
        {
          id: "q14",
          type: "short-answer",
          question: "Why did Jacob bless Ephraim over Manasseh?",
          correctAnswer: "He said Ephraim would become greater than Manasseh"
        },
        {
          id: "q15",
          type: "multiple-choice",
          question: "What did Jacob give Joseph beyond what he gave his other sons?",
          options: ["The best land in Goshen", "An extra portion of land", "A golden cup", "His staff"],
          correctAnswer: "An extra portion of land"
        }
      ]
    }
  },
  {
    day: 17,
    passage: "Genesis 49–50",
    focus: "Jacob blesses his sons and his death; Joseph’s final days",
    quiz: {
      title: "📘 Genesis 49–50 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "short-answer",
          question: "What did Jacob do before he died?",
          correctAnswer: "He blessed each of his sons and gave them prophetic statements"
        },
        {
          id: "q2",
          type: "multiple-choice",
          question: "Which of Jacob’s sons was told that kings would come from his line?",
          options: ["Levi", "Judah", "Joseph", "Reuben"],
          correctAnswer: "Judah"
        },
        {
          id: "q3",
          type: "true-false",
          question: "Jacob rebuked Simeon and Levi for their violent behavior.",
          correctAnswer: true
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "What animal is Judah compared to in Jacob’s blessing?",
          options: ["Lion", "Wolf", "Ox", "Leopard"],
          correctAnswer: "Lion"
        },
        {
          id: "q5",
          type: "short-answer",
          question: "Where did Jacob request to be buried?",
          correctAnswer: "In the same cave Leah and others from his family were buried "
        },
        {
          id: "q6",
          type: "true-false",
          question: "Jacob was buried in Egypt with full Egyptian honors.",
          correctAnswer: false
        },
        {
          id: "q7",
          type: "multiple-choice",
          question: "What did Joseph's brothers fear after Jacob died?",
          options: [
            "That Joseph would leave Egypt",
            "That Joseph would take revenge on them",
            "That Pharaoh would enslave them",
            "That they would lose their inheritance"
          ],
          correctAnswer: "That Joseph would take revenge on them"
        },
        {
          id: "q8",
          type: "short-answer",
          question: "What did Joseph say to comfort his brothers after Jacob’s death?",
          correctAnswer: "You meant to harm me, but God meant it for good"
        },
        {
          id: "q9",
          type: "true-false",
          question: "Joseph lived to see his great-grandchildren.",
          correctAnswer: true
        },
        {
          id: "q10",
          type: "multiple-choice",
          question: "How old was Joseph when he died?",
          options: ["100", "110", "120", "130"],
          correctAnswer: "110"
        },
        {
          id: "q11",
          type: "short-answer",
          question: "Where did Joseph want his bones to be taken?",
          correctAnswer: "Back to the land of Israel (Canaan)"
        },
        {
          id: "q12",
          type: "true-false",
          question: "Joseph was embalmed and placed in a coffin in Egypt.",
          correctAnswer: true
        }
      ]
    }
  },
  {
    day: 18,
    passage: "Exodus 1–4",
    focus: "Israel’s oppression, Moses’ birth and calling",
    quiz: {
      title: "📘 Exodus 1–4 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "Why did the new Pharaoh in Egypt oppress the Israelites?",
          options: [
            "He feared they would join Egypt’s enemies",
            "He thought they were lazy",
            "He wanted their land",
            "He disliked Joseph"
          ],
          correctAnswer: "He feared they would join Egypt’s enemies"
        },
        {
          id: "q2",
          type: "true-false",
          question: "Pharaoh commanded that every newborn Hebrew boy be thrown into the Nile.",
          correctAnswer: true
        },
        {
          id: "q3",
          type: "short-answer",
          question: "Why did the midwives not obey Pharaoh’s command to kill the newborn babies who were born male?",
          correctAnswer: "They feared God and let them live",
        },
        {
          id: "q4",
          type: "true-false",
          question: "Moses's parents were both from Levi's tribe.",
          correctAnswer: true
        },
        {
          id: "q5",
          type: "multiple-choice",
          question: "What did Moses’ mother place him in to save him?",
          options: ["A basket", "A boat", "A box", "A jar"],
          correctAnswer: "A basket"
        },
        {
          id: "q6",
          type: "short-answer",
          question: "Who rescued baby Moses from the Nile?",
          correctAnswer: "Pharaoh’s daughter"
        },
        {
          id: "q7",
          type: "true-false",
          question: "Moses was raised in Pharaoh’s household.",
          correctAnswer: true
        },
        {
          id: "q8",
          type: "true-false",
          question: "Moses's mother nursed him for some time before handing him to Pharaoh's daughter.",
          correctAnswer: true
        },
        {
          id: "q9",
          type: "multiple-choice",
          question: "What did Moses do when he saw an Egyptian beating a Hebrew?",
          options: [
            "He reported it to Pharaoh",
            "He killed the Egyptian and hid his body",
            "He tried to stop the beating",
            "He ran away"
          ],
          correctAnswer: "He killed the Egyptian and hid his body"
        },
        {
          id: "q10",
          type: "multiple-choice",
          question: "Where did Moses flee after killing an Egyptian?",
          options: ["Midian", "Moab", "Canaan", "Sinai"],
          correctAnswer: "Midian"
        },
        {
          id: "q11",
          type: "true-false",
          question: "Moses married Zipporah, the daughter of Jethro, priest of Midian.",
          correctAnswer: true
        },
        {
          id: "q12",
          type: "short-answer",
          question: "What was the sign God gave Moses at the burning bush to confirm his calling?",
          correctAnswer: "The bush was on fire but was not consumed"
        },
        {
          id: "q13",
          type: "true-false",
          question: "Moses gave God a name.",
          correctAnswer: false
        },
        {
          id: "q14",
          type: "multiple-choice",
          question: "What name did God reveal to Moses at the burning bush?",
          options: ["Jehovah", "Elohim", "I Am", "The Almighty"],
          correctAnswer: "Jehovah"
        },
        {
          id: "q15",
          type: "true-false",
          question: "Moses was eager and confident to speak to Pharaoh.",
          correctAnswer: false
        },
        {
          id: "q16",
          type: "short-answer",
          question: "Who did God appoint to help Moses speak to Pharaoh?",
          correctAnswer: "Aaron, his brother"
        },
        {
          id: "q17",
          type: "multiple-choice",
          question: "Which miracles did God empower Moses to perform as proof?",
          options: [
            "Turn his staff into a serpent",
            "Make his hand leprous and healed",
            "Turn water into blood",
            "All of the above"
          ],
          correctAnswer: "All of the above"
        },
        {
          id: "q18",
          type: "true-false",
          question: "Jehovah promised to be with Moses’ mouth and teach him what to say.",
          correctAnswer: true
        },
        {
          id: "q19",
          type: "short-answer",
          question: "What message was Moses to deliver to Pharaoh?",
          correctAnswer: "Let my people go so that they may serve me"
        }
      ]
    }
  },
  {
    day: 19,
    passage: "Exodus 5–7",
    focus: "Moses before Pharaoh, Jehovah’s power begins",
    quiz: {
      title: "📘 Exodus 5–7 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "short-answer",
          question: "What was Pharaoh’s response when Moses and Aaron asked him to let Israel go?",
          correctAnswer: "He said, 'Who is Jehovah, that I should obey his voice?'"
        },
        {
          id: "q2",
          type: "short-answer",
          question: "For how long the Israelites were to go into the wilderness to hold a festival to Jehovah?",
          correctAnswer: "Three days"
        },
        {
          id: "q3",
          type: "true-false",
          question: "Pharaoh made the Israelites’ work less after Moses first spoke to him.",
          correctAnswer: false
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "What extra burden did Pharaoh place on the Israelites?",
          options: [
            "He made them fast",
            "He ordered them to gather their own straw but still make the same number of bricks",
            "He doubled their workdays",
            "He took away their food"
          ],
          correctAnswer: "He ordered them to gather their own straw but still make the same number of bricks"
        },
        {
          id: "q5",
          type: "short-answer",
          question: "How did the Israelites react to Moses and Aaron after Pharaoh increased their workload?",
          correctAnswer: "They blamed Moses and Aaron for making them odious to Pharaoh"
        },
        {
          id: "q6",
          type: "true-false",
          question: "Moses doubted that Pharaoh would listen to him because he was 'uncircumcised in lips.'",
          correctAnswer: true
        },
        {
          id: "q7",
          type: "short-answer",
          question: "How old was Moses when he spoke to Pharaoh?",
          correctAnswer: "80 years old"
        },
        {
          id: "q8",
          type: "short-answer",
          question: "How old was Aaron when he spoke to Pharaoh?",
          correctAnswer: "83 years old"
        },
        {
          id: "q9",
          type: "multiple-choice",
          question: "When Aaron threw down his rod before Pharaoh, what happened?",
          options: [
            "It turned into a staff",
            "It turned into a serpent",
            "It turned into fire",
            "It disappeared"
          ],
          correctAnswer: "It turned into a serpent"
        },
        {
          id: "q10",
          type: "true-false",
          question: "Pharaoh’s magic-practicing priests were able to imitate Aaron’s sign with their rods.",
          correctAnswer: true
        },
        {
          id: "q11",
          type: "short-answer",
          question: "What happened to the magicians’ rods after they became serpents?",
          correctAnswer: "Aaron’s rod swallowed up their rods"
        },
        {
          id: "q12",
          type: "multiple-choice",
          question: "What was the first plague Jehovah brought upon Egypt?",
          options: ["Frogs", "Gnats", "Water turned to blood", "Flies"],
          correctAnswer: "Water turned to blood"
        },
        {
          id: "q13",
          type: "true-false",
          question: "All the fish in the Nile died when the water was turned to blood.",
          correctAnswer: true
        },
        {
          id: "q14",
          type: "short-answer",
          question: "How did the Egyptians get drinking water after the Nile turned to blood?",
          correctAnswer: "They dug around the Nile for fresh water"
        },
        {
          id: "q15",
          type: "short-answer",
          question: "How many days did the Nile remain blood?",
          correctAnswer: "Seven days"
        }
      ]
    }
  },
  {
    day: 20,
    passage: "Exodus 8–10",
    focus: "The plagues continue against Egypt",
    quiz: {
      title: "📘 Exodus 8–10 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "What was the second plague Jehovah brought on Egypt?",
          options: ["Gnats", "Flies", "Frogs", "Locusts"],
          correctAnswer: "Frogs"
        },
        {
          id: "q2",
          type: "true-false",
          question: "Pharaoh’s magic-practicing priests were also able to bring frogs upon the land.",
          correctAnswer: true
        },
        {
          id: "q3",
          type: "short-answer",
          question: "What did Pharaoh promise if Moses removed the frogs?",
          correctAnswer: "He would let the people go to sacrifice to Jehovah"
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "What happened during the third plague?",
          options: ["Flies filled Egypt", "The dust became gnats", "The Nile turned to blood", "Livestock died"],
          correctAnswer: "The dust became gnats"
        },
        {
          id: "q5",
          type: "short-answer",
          question: "Why did Moses not want to sacrifice to Jehovah in Egypt?",
          correctAnswer: "Because the Egyptians would be offended by the sacrifice"
        },
        {
          id: "q6",
          type: "short-answer",
          question: "What did the priests say when they could not produce the gnats?",
          correctAnswer: "'It is the finger of God.'"
        },
        {
          id: "q7",
          type: "true-false",
          question: "Jehovah made a distinction between Egypt and Goshen during the plague of flies.",
          correctAnswer: true
        },
        {
          id: "q8",
          type: "multiple-choice",
          question: "What plague killed Egypt’s livestock?",
          options: ["The fifth plague", "The sixth plague", "The seventh plague", "The eighth plague"],
          correctAnswer: "The fifth plague"
        },
        {
          id: "q9",
          type: "short-answer",
          question: "What disease did Jehovah strike the Egyptians and their animals with after the livestock plague?",
          correctAnswer: "Painful boils"
        },
        {
          id: "q10",
          type: "multiple-choice",
          question: "What was the seventh plague?",
          options: ["Locusts", "Darkness", "Boils", "Hail mixed with fire"],
          correctAnswer: "Hail mixed with fire"
        },
        {
          id: "q11",
          type: "true-false",
          question: "The hail destroyed everything in the field, including man, beast, and plants.",
          correctAnswer: true
        },
        {
          id: "q12",
          type: "short-answer",
          question: "Which crops were destroyed by the hail?",
          correctAnswer: "The flax and the barley"
        },
        {
          id: "q13",
          type: "short-answer",
          question: "Which crops were not destroyed by the hail?",
          correctAnswer: "The wheat and the spelt"
        },
        {
          id: "q14",
          type: "multiple-choice",
          question: "What was the eighth plague?",
          options: ["Darkness", "Frogs", "Locusts", "Gnats"],
          correctAnswer: "Locusts"
        },
        {
          id: "q15",
          type: "short-answer",
          question: "What did the locusts eat?",
          correctAnswer: "All the vegetation of the land and all the fruit of the trees left after the hail"
        },
        {
          id: "q16",
          type: "multiple-choice",
          question: "What was the ninth plague?",
          options: ["Darkness", "Death of the firstborn", "Flies", "Frogs"],
          correctAnswer: "Darkness"
        },
        {
          id: "q17",
          type: "true-false",
          question: "The Israelites also suffered from the three days of thick darkness.",
          correctAnswer: false
        },
        {
          id: "q18",
          type: "short-answer",
          question: "What did Pharaoh threaten Moses with after the plague of darkness?",
          correctAnswer: "That Moses should never see his face again or he would die"
        }
      ]
    }
  },
  {
    day: 21,
    passage: "Exodus 11–13",
    focus: "The final plague and the Exodus",
    quiz: {
      title: "📘 Exodus 11–13 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "What was the tenth and final plague announced by Jehovah?",
          options: ["Hail", "Locusts", "Darkness", "Death of the firstborn"],
          correctAnswer: "Death of the firstborn"
        },
        {
          id: "q2",
          type: "true-false",
          question: "Jehovah said that all the firstborn in Egypt, from Pharaoh’s house to the slave girl’s, would die.",
          correctAnswer: true
        },
        {
          id: "q3",
          type: "short-answer",
          question: "What was the Passover?",
          correctAnswer: "The killing of the firstborn in Egypt by an angel of Jehovah who passed by every house and checked whether it belonged to an Israelite"
        },
        {
          id: "q4",
          type: "short-answer",
          question: "What special meal were the Israelites commanded to prepare before the final plague?",
          correctAnswer: "The Passover meal"
        },
        {
          id: "q5",
          type: "multiple-choice",
          question: "What were the Israelites instructed to put on their doorposts and lintels?",
          options: ["Oil", "Water", "Blood of a lamb", "Incense"],
          correctAnswer: "Blood of a lamb"
        },
        {
          id: "q6",
          type: "short-answer",
          question: "What did the blood on the houses serve as?",
          correctAnswer: "A sign so the plague would pass over their houses"
        },
        {
          id: "q7",
          type: "short-answer",
          question: "What kind of bread were the Israelites to prepare?",
          correctAnswer: "Unleavened bread"
        },
        {
          id: "q8",
          type: "true-false",
          question: "Foreigners were not allowed to celebrate the Passover together with the Israelites.",
          correctAnswer: false
        },
        {
          id: "q9",
          type: "multiple-choice",
          question: "Which condition were foreigners required to comply with in order to participate of the Passover?",
          options: ["To kill an Egyptian", "To get circumcised", "To publicly deny their Egyptian inheritance", "To run away without wearing sandals"],
          correctAnswer: "To get circumcised"
        },
        {
          id: "q10",
          type: "true-false",
          question: "The Israelites were to eat the Passover meal leisurely, with sandals off and staff put away.",
          correctAnswer: false
        },
        {
          id: "q11",
          type: "multiple-choice",
          question: "How did Pharaoh react after the death of the firstborn?",
          options: ["He hardened his heart again", "He asked Moses to bless him", "He allowed the Israelites to leave", "He punished Moses"],
          correctAnswer: "He allowed the Israelites to leave"
        },
        {
          id: "q12",
          type: "true-false",
          question: "The Israelites plundered the Egyptians before fleeing Egypt.",
          correctAnswer: true
        },
        {
          id: "q13",
          type: "true-false",
          question: "The Israelites left Joseph's bones in Egypt.",
          correctAnswer: false
        },
        {
          id: "q14",
          type: "short-answer",
          question: "About how many Israelite men left Egypt, besides women and children?",
          correctAnswer: "About 600,000"
        },
        {
          id: "q15",
          type: "multiple-choice",
          question: "How long had the Israelites dwelled in Egypt before leaving?",
          options: ["210 years", "350 years", "430 years", "490 years"],
          correctAnswer: "430 years"
        },
        {
          id: "q16",
          type: "true-false",
          question: "Jehovah commanded the Israelites to keep the Passover as a lasting memorial.",
          correctAnswer: true
        },
        {
          id: "q17",
          type: "short-answer",
          question: "What kind of bread did the Israelites eat during the Passover?",
          correctAnswer: "Unleavened bread"
        },
        {
          id: "q18",
          type: "multiple-choice",
          question: "Which firstborns were to be sanctified to Jehovah?",
          options: ["Only the firstborn of men", "Only the firstborn of animals", "Every firstborn male, man and beast", "None of them"],
          correctAnswer: "Every firstborn male, man and beast"
        },
        {
          id: "q19",
          type: "short-answer",
          question: "Why were the Israelites commanded to commemorate the day of their deliverance?",
          correctAnswer: "Because Jehovah brought them out of Egypt by his mighty hand"
        },
        {
          id: "q20",
          type: "multiple-choice",
          question: "What did Jehovah use to guide the Israelites by day?",
          options: ["An angel", "A pillar of cloud", "A star", "Moses' staff"],
          correctAnswer: "A pillar of cloud"
        },
        {
          id: "q21",
          type: "multiple-choice",
          question: "What did Jehovah use to guide them by night?",
          options: ["A pillar of fire", "The moon", "An angel", "Torches"],
          correctAnswer: "A pillar of fire"
        },
        {
          id: "q22",
          type: "true-false",
          question: "The pillar of cloud and fire departed from the Israelites during their journey.",
          correctAnswer: false
        }
      ]
    }
  },
  {
    day: 22,
    passage: "Exodus 14–15",
    focus: "Crossing the Red Sea and the Song of Moses",
    quiz: {
      title: "📘 Exodus 14–15 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "true-false",
          question: "The Israelites crossed the sea without fearing the Egyptians.",
          correctAnswer: false
        },
        {
          id: "q2",
          type: "short-answer",
          question: "Why did Pharaoh change his mind and pursue the Israelites?",
          correctAnswer: "He thought they were trapped and regretted letting them go"
        },
        {
          id: "q3",
          type: "true-false",
          question: "Pharaoh took 600 chosen chariots and other chariots of Egypt to pursue the Israelites.",
          correctAnswer: true
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "What did Jehovah tell Moses to do to divide the Red Sea?",
          options: ["Strike it with his staff", "Raise his hand with his staff", "Pray aloud", "Step into the water first"],
          correctAnswer: "Raise his hand with his staff"
        },
        {
          id: "q5",
          type: "short-answer",
          question: "How did Jehovah keep the Egyptians from reaching the Israelites before they crossed the sea?",
          correctAnswer: "The angel of God and the pillar of cloud moved behind them"
        },
        {
          id: "q6",
          type: "multiple-choice",
          question: "How did the Israelites cross the Red Sea?",
          options: ["By boats", "By a bridge", "On dry land with walls of water on both sides", "Swimming"],
          correctAnswer: "On dry land with walls of water on both sides"
        },
        {
          id: "q7",
          type: "true-false",
          question: "Jehovah caused the wheels of the Egyptian chariots to wobble and bog down.",
          correctAnswer: true
        },
        {
          id: "q8",
          type: "multiple-choice",
          question: "What happened when Moses stretched out his hand after the Israelites crossed?",
          options: ["The sea dried up permanently", "The waters returned and drowned the Egyptians", "The sea turned into a river", "The waters stayed parted forever"],
          correctAnswer: "The waters returned and drowned the Egyptians"
        },
        {
          id: "q9",
          type: "short-answer",
          question: "How did the Israelites react when they saw the Egyptians dead on the seashore?",
          correctAnswer: "They feared Jehovah and put faith in Him and Moses"
        },
        {
          id: "q10",
          type: "multiple-choice",
          question: "Who sang a song of victory after crossing the sea?",
          options: ["Moses and the men of Israel", "Aaron and the priests", "Joshua", "Miriam alone"],
          correctAnswer: "Moses and the men of Israel"
        },
        {
          id: "q11",
          type: "true-false",
          question: "Miriam, the prophetess, took a tambourine and led the women in song and dance.",
          correctAnswer: true
        },
        {
          id: "q12",
          type: "short-answer",
          question: "What did the song of Moses primarily praise Jehovah for?",
          correctAnswer: "For throwing Pharaoh’s army into the sea and showing His great power"
        },
        {
          id: "q13",
          type: "short-answer",
          question: "How did Jehovah make the bitter water the Israelites found at Marah drinkable?",
          correctAnswer: "Moses threw a piece of wood into the water, and it became sweet"
        },
        {
          id: "q14",
          type: "true-false",
          question: "At Elim, the Israelites found twelve springs of water and seventy palm trees.",
          correctAnswer: true
        }
      ]
    }
  },
  {
    day: 23,
    passage: "Exodus 16–18",
    focus: "Manna and quail, water from the rock, and Jethro’s advice",
    quiz: {
      title: "📘 Exodus 16–18 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "What did the Israelites complain about in the wilderness of Sin?",
          options: ["No meat and bread", "Lack of water", "No protection from enemies", "Too much walking"],
          correctAnswer: "No meat and bread"
        },
        {
          id: "q2",
          type: "short-answer",
          question: "What two foods did Jehovah provide for the Israelites in the wilderness?",
          correctAnswer: "Manna and quail"
        },
        {
          id: "q3",
          type: "true-false",
          question: "Manna appeared every morning except on the seventh day.",
          correctAnswer: true
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "How much manna was each person to gather daily?",
          options: ["One omer", "Two omers", "A basketful", "As much as they wanted"],
          correctAnswer: "One omer"
        },
        {
          id: "q5",
          type: "multiple-choice",
          question: "What happened to manna kept overnight on regular days?",
          options: ["It stayed fresh", "It multiplied", "It bred worms and stank", "It turned to dust"],
          correctAnswer: "It bred worms and stank"
        },
        {
          id: "q6",
          type: "true-false",
          question: "On the sixth day, the Israelites gathered twice as much manna, and it did not spoil overnight.",
          correctAnswer: true
        },
        {
          id: "q7",
          type: "short-answer",
          question: "How long did the Israelites eat manna?",
          correctAnswer: "40 years, until they entered the land of Canaan"
        },
        {
          id: "q8",
          type: "true-false",
          question: "Moses was afraid the people would stone him if he did not attend to their complaints to provide water for them.",
          correctAnswer: true
        },
        {
          id: "q9",
          type: "multiple-choice",
          question: "What did Jehovah tell Moses to strike at Rephidim to provide water?",
          options: ["A rock in Horeb", "The ground", "A tree", "His staff"],
          correctAnswer: "A rock in Horeb"
        },
        {
          id: "q10",
          type: "multiple-choice",
          question: "Who attacked Israel at Rephidim?",
          options: ["The Amalekites", "The Philistines", "The Moabites", "The Midianites"],
          correctAnswer: "The Amalekites"
        },
        {
          id: "q11",
          type: "multiple-choice",
          question: "Who fought while Moses held his hand up high?",
          options: ["Aaron", "Jethro", "Miriam", "Joshua"],
          correctAnswer: "Joshua"
        },
        {
          id: "q12",
          type: "short-answer",
          question: "What happened when Moses held up his hands during the battle against Amalek?",
          correctAnswer: "Israel prevailed"
        },
        {
          id: "q13",
          type: "true-false",
          question: "Aaron and Hur supported Moses’ hands until sunset, helping Israel defeat Amalek.",
          correctAnswer: true
        },
        {
          id: "q14",
          type: "multiple-choice",
          question: "Who came to visit Moses in the wilderness?",
          options: ["His brother Aaron", "His wife Zipporah", "His father-in-law Jethro", "Joshua"],
          correctAnswer: "His father-in-law Jethro"
        },
        {
          id: "q15",
          type: "short-answer",
          question: "Why would the people line up to visit Moses from day to night?",
          correctAnswer: "To have him judge their cases"
        },
        {
          id: "q16",
          type: "short-answer",
          question: "What advice did Jethro give Moses?",
          correctAnswer: "To appoint capable men as chiefs over thousands, hundreds, fifties, and tens to judge the people"
        },
        {
          id: "q17",
          type: "true-false",
          question: "Moses rejected Jethro’s advice and chose to continue judging alone.",
          correctAnswer: false
        }
      ]
    }
  },
  {
    day: 24,
    passage: "Exodus 19–21",
    focus: "Israel at Mount Sinai, the Ten Commandments, and laws for the nation",
    quiz: {
      title: "📘 Exodus 19–21 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "Where did the Israelites camp in the third month after leaving Egypt?",
          options: ["At Rephidim", "At Mount Sinai", "At the Red Sea", "At Jericho"],
          correctAnswer: "At Mount Sinai"
        },
        {
          id: "q2",
          type: "short-answer",
          question: "What did Jehovah say Israel would become if they obeyed His voice and kept His covenant?",
          correctAnswer: "A special property, a kingdom of priests, and a holy nation"
        },
        {
          id: "q3",
          type: "true-false",
          question: "The Israelites were told not to touch the mountain when Jehovah descended on it.",
          correctAnswer: true
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "What physical signs accompanied Jehovah’s presence on Mount Sinai?",
          options: ["Thunder, lightning, thick cloud, and a loud trumpet sound", "A rainbow and fire", "Earthquake and wind", "Darkness and silence"],
          correctAnswer: "Thunder, lightning, thick cloud, and a loud trumpet sound"
        },
        {
          id: "q5",
          type: "multiple-choice",
          question: "Which of the following is the first of the Ten Commandments?",
          options: [
            "You must not murder",
            "You must not have any other gods besides me",
            "Remember the Sabbath day",
            "Honor your father and mother"
          ],
          correctAnswer: "You must not have any other gods besides me"
        },
        {
          id: "q6",
          type: "true-false",
          question: "The Israelites were commanded to make gods of silver and gold to represent Jehovah.",
          correctAnswer: false
        },
        {
          id: "q7",
          type: "short-answer",
          question: "What were the Israelites commanded to remember and keep holy as a day of rest?",
          correctAnswer: "The Sabbath day"
        },
        {
          id: "q8",
          type: "multiple-choice",
          question: "What promise is attached to honoring your father and mother?",
          options: [
            "You will live long in the land Jehovah is giving you",
            "You will have many children",
            "You will prosper in trade",
            "You will be safe from enemies"
          ],
          correctAnswer: "You will live long in the land Jehovah is giving you"
        },
        {
          id: "q9",
          type: "short-answer",
          question: "What did Jehovah say should be done to anyone who strikes their father or mother?",
          correctAnswer: "They must be put to death"
        },
        {
          id: "q10",
          type: "true-false",
          question: "The law said a Hebrew slave was to serve six years and go free in the seventh year.",
          correctAnswer: true
        },
        {
          id: "q11",
          type: "multiple-choice",
          question: "What happened if a servant declared he loved his master and did not want to go free?",
          options: [
            "He was released anyway",
            "He remained as a slave forever, with his ear pierced at the door",
            "He paid a ransom to stay",
            "He became like a son to the master"
          ],
          correctAnswer: "He remained as a slave forever, with his ear pierced at the door"
        },
        {
          id: "q12",
          type: "short-answer",
          question: "What was the penalty for kidnapping a man and selling him?",
          correctAnswer: "The kidnapper must be put to death"
        },
        {
          id: "q13",
          type: "multiple-choice",
          question: "What was the principle given for punishment in cases of injury?",
          options: [
            "Sevenfold repayment",
            "Eye for eye, tooth for tooth, hand for hand, foot for foot",
            "Double restitution",
            "No punishment required"
          ],
          correctAnswer: "Eye for eye, tooth for tooth, hand for hand, foot for foot"
        },
        {
          id: "q14",
          type: "true-false",
          question: "If an ox killed someone, the ox was to be stoned, and the owner was always put to death.",
          correctAnswer: false
        }
      ]
    }
  },
  {
    day: 25,
    passage: "Exodus 22–25",
    focus: "Various laws, the covenant confirmed, and instructions for the tabernacle",
    quiz: {
      title: "📘 Exodus 22–25 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "true-false",
          question: "A sorceress was not to be allowed to live.",
          correctAnswer: true
        },
        {
          id: "q2",
          type: "true-false",
          question: "Widows and orphans were to be treated with care.",
          correctAnswer: true
        },
        {
          id: "q3",
          type: "short-answer",
          question: "What did Jehovah command regarding the treatment of foreigners?",
          correctAnswer: "Do not mistreat or oppress a foreign resident, for Israel was once foreign in Egypt."
        },
        {
          id: "q4",
          type: "true-false",
          question: "Spreading false reports was accepted and not part of the law given to the Israelites?",
          correctAnswer: false
        },
        {
          id: "q5",
          type: "short-answer",
          question: "What was the provision made so that poor people weren't without food.",
          correctAnswer: "Farmers were to leave the edges of their fields and the gleanings for the poor and foreigners."
        },
        {
          id: "q6",
          type: "multiple-choice",
          question: "What did Jehovah say should not be delayed in giving?",
          options: ["Tithes", "Firstfruits and firstborn sons", "Sacrifices", "The Sabbath offering"],
          correctAnswer: "Firstfruits and firstborn sons"
        },
        {
          id: "q7",
          type: "short-answer",
          question: "How many years was the land to be sown before letting it rest in the seventh?",
          correctAnswer: "Six years"
        },
        {
          id: "q8",
          type: "true-false",
          question: "The Israelites were commanded to celebrate three annual festivals to Jehovah.",
          correctAnswer: true
        },
        {
          id: "q9",
          type: "multiple-choice",
          question: "Which festivals were commanded in Exodus 23?",
          options: ["Passover, Festival of Unleavened Bread, Festival of Booths", "Festival of Unleavened Bread, Harvest, Ingathering", "Festival of Lights, Passover, Trumpets", "Day of Atonement, Passover, Ingathering"],
          correctAnswer: "Festival of Unleavened Bread, Harvest, Ingathering"
        },
        {
          id: "q10",
          type: "short-answer",
          question: "What was the Festival of Ingathering about?",
          correctAnswer: "The Festival of Ingathering was celebrated at the end of the year when the harvest was gathered in to celebrate the result of the labour of the Israelites."
        },
        {
          id: "q11",
          type: "short-answer",
          question: "What did Moses read to the people before they agreed to the covenant?",
          correctAnswer: "The book of the covenant"
        },
        {
          id: "q12",
          type: "short-answer",
          question: "What was the people's attitude when Moses read the book of the covenant?",
          correctAnswer: "All that Jehovah has spoken we will do, and we will be obedient."
        },
        {
          id: "q13",
          type: "multiple-choice",
          question: "How many elders of Israel went up the mountain with Moses?",
          options: ["12", "24", "40", "70"],
          correctAnswer: "70"
        },
        {
          id: "q14",
          type: "true-false",
          question: "The elders of Israel saw a vision of the God of Israel and ate and drank in His presence.",
          correctAnswer: true
        },
        {
          id: "q15",
          type: "short-answer",
          question: "How many days did the cloud cover Mount Sinai before Jehovah called Moses inside?",
          correctAnswer: "Six days"
        },
        {
          id: "q16",
          type: "true-false",
          question: "Moses's appearance changed after being in the presence of Jehovah.",
          correctAnswer: true
        },
        {
          id: "q17",
          type: "multiple-choice",
          question: "How long did Moses remain on the mountain when Jehovah gave him instructions for the tabernacle?",
          options: ["20 days", "30 days", "40 days and nights", "50 days"],
          correctAnswer: "40 days and nights"
        },
        {
          id: "q18",
          type: "short-answer",
          question: "What did Jehovah ask the Israelites to contribute for the tabernacle?",
          correctAnswer: "A voluntary offering of gold, silver, copper, fine linen, precious stones, and other materials"
        },
        {
          id: "q19",
          type: "multiple-choice",
          question: "What piece of furniture was to be placed inside the Most Holy?",
          options: ["The table of showbread", "The golden lampstand", "The Ark of the Covenant", "The altar of incense"],
          correctAnswer: "The Ark of the Covenant"
        },
        {
          id: "q20",
          type: "true-false",
          question: "The cherubs on the Ark’s cover were to face away from each other.",
          correctAnswer: false
        },
      ]
    }
  },
  {
    day: 26,
    passage: "Exodus 26–28",
    focus: "Tabernacle structure, priestly garments, consecration instructions",
    quiz: {
      title: "📘 Exodus 26–28 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "What material was used for the inner tabernacle curtains?",
          options: [
            "Wool dyed scarlet only",
            "Fine linen with blue, purple, and scarlet yarn and cherub designs",
            "Goat hair woven together",
            "Ram skins dyed red"
          ],
          correctAnswer: "Fine linen with blue, purple, and scarlet yarn and cherub designs"
        },
        {
          id: "q2",
          type: "short-answer",
          question: "What divided the Holy Place from the Most Holy?",
          correctAnswer: "A curtain (veil) with cherubs embroidered on it"
        },
        {
          id: "q3",
          type: "true-false",
          question: "The Ark of the Covenant was placed in the Holy Place.",
          correctAnswer: false
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "What was placed in the Holy Place, outside the curtain?",
          options: [
            "The altar of incense, the table of showbread, and the lampstand",
            "The Ark of the Covenant and mercy seat",
            "The laver and bronze altar",
            "Only the golden lampstand"
          ],
          correctAnswer: "The altar of incense, the table of showbread, and the lampstand"
        },
        {
          id: "q5",
          type: "short-answer",
          question: "What covered the tabernacle over the inner linen curtains?",
          correctAnswer: "Tent cloths made of goat hair, ram skins dyed red, and sealskins"
        },
        {
          id: "q6",
          type: "multiple-choice",
          question: "What material was the altar of burnt offering made of?",
          options: ["Gold", "Silver", "Acacia wood overlaid with copper", "Stone"],
          correctAnswer: "Acacia wood overlaid with copper"
        },
        {
          id: "q7",
          type: "true-false",
          question: "The courtyard surrounding the tabernacle was rectangular, enclosed with linen hangings.",
          correctAnswer: true
        },
        {
          id: "q8",
          type: "short-answer",
          question: "Who was chosen to serve as priests for Jehovah?",
          correctAnswer: "Aaron and his sons"
        },
        {
          id: "q9",
          type: "multiple-choice",
          question: "What was engraved on the two onyx stones worn on the high priest’s ephod?",
          options: [
            "The Ten Commandments",
            "The names of the 12 tribes of Israel",
            "The covenant law",
            "The name of Jehovah"
          ],
          correctAnswer: "The names of the 12 tribes of Israel"
        },
        {
          id: "q10",
          type: "short-answer",
          question: "What was in the breastpiece of judgment?",
          correctAnswer: "Twelve stones with the names of the 12 tribes of Israel, and the Urim and Thummim"
        },
        {
          id: "q11",
          type: "multiple-choice",
          question: "What was written on the gold plate fastened to the high priest’s turban?",
          options: ["The Ten Commandments", "Holiness belongs to Jehovah", "Aaron the High Priest", "Tribe of Levi"],
          correctAnswer: "Holiness belongs to Jehovah"
        },
        {
          id: "q12",
          type: "true-false",
          question: "Ordinary priests wore tunics, sashes, and caps of fine linen.",
          correctAnswer: true
        },
        {
          id: "q13",
          type: "short-answer",
          question: "What color thread was woven into the high priest’s robe, ephod, and breastpiece?",
          correctAnswer: "Blue, purple, and scarlet"
        },
        {
          id: "q14",
          type: "multiple-choice",
          question: "What hung on the hem of the high priest’s robe?",
          options: ["Golden bells and pomegranates", "Silver tassels", "Scarlet cords", "Cherub designs"],
          correctAnswer: "Golden bells and pomegranates"
        }
      ]
    }
  },
  {
    day: 27,
    passage: "Exodus 29–30",
    focus: "Priestly consecration, daily offerings, incense altar, and atonement money",
    quiz: {
      title: "📘 Exodus 29–30 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "short-answer",
          question: "What animals were used in the consecration of Aaron and his sons?",
          correctAnswer: "One young bull and two rams"
        },
        {
          id: "q2",
          type: "multiple-choice",
          question: "What was done with the blood of the ram of installation?",
          options: [
            "It was poured on the ground",
            "It was sprinkled on the altar and put on the right ear, thumb, and big toe of Aaron and his sons",
            "It was burned completely outside the camp",
            "It was mixed with oil for anointing"
          ],
          correctAnswer: "It was sprinkled on the altar and put on the right ear, thumb, and big toe of Aaron and his sons"
        },
        {
          id: "q3",
          type: "true-false",
          question: "Aaron and his sons were to eat the installation offering along with unleavened bread.",
          correctAnswer: true
        },
        {
          id: "q4",
          type: "short-answer",
          question: "How many days did the installation of Aaron and his sons last?",
          correctAnswer: "Seven days"
        },
        {
          id: "q5",
          type: "multiple-choice",
          question: "What was the daily burnt offering Israel was to present?",
          options: [
            "One bull in the morning and one in the evening",
            "Two goats each day",
            "Two one-year-old lambs, one in the morning and one at twilight",
            "A ram and a bull every morning"
          ],
          correctAnswer: "Two one-year-old lambs, one in the morning and one at twilight"
        },
        {
          id: "q6",
          type: "short-answer",
          question: "Where did Jehovah promise to meet with the sons of Israel?",
          correctAnswer: "At the entrance of the tent of meeting"
        },
        {
          id: "q7",
          type: "multiple-choice",
          question: "What was the altar of incense made of?",
          options: ["Gold", "Acacia wood overlaid with gold", "Silver", "Bronze"],
          correctAnswer: "Acacia wood overlaid with gold"
        },
        {
          id: "q8",
          type: "true-false",
          question: "The incense altar was placed inside the curtain, in front of the Ark.",
          correctAnswer: false
        },
        {
          id: "q9",
          type: "short-answer",
          question: "How often was incense to be burned on the golden altar?",
          correctAnswer: "Every morning and at twilight"
        },
        {
          id: "q10",
          type: "multiple-choice",
          question: "What was to be done once a year to the horns of the incense altar?",
          options: [
            "Polished with oil",
            "Anointed with incense",
            "Purified with atonement blood",
            "Covered with gold dust"
          ],
          correctAnswer: "Purified with atonement blood"
        },
        {
          id: "q11",
          type: "short-answer",
          question: "What did each Israelite have to give when registered in a census?",
          correctAnswer: "A ransom for his life, a half-shekel contribution"
        },
        {
          id: "q12",
          type: "true-false",
          question: "The atonement money collected during the census was used to support the service of the tent of meeting.",
          correctAnswer: true
        },
        {
          id: "q13",
          type: "multiple-choice",
          question: "What was the bronze basin (laver) used for?",
          options: [
            "Burning incense",
            "Washing hands and feet of priests before approaching the altar or entering the tent",
            "Collecting blood of sacrifices",
            "Storing oil for anointing"
          ],
          correctAnswer: "Washing hands and feet of priests before approaching the altar or entering the tent"
        }
      ]
    }
  },
  {
    day: 28,
    passage: "Exodus 31–33",
    focus: "Bezalel and Oholiab appointed, Sabbath reminder, golden calf, and Moses’ intercession",
    quiz: {
      title: "📘 Exodus 31–33 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "Who did Jehovah fill with wisdom, understanding, and skill to construct the tabernacle?",
          options: [
            "Aaron and his sons",
            "Bezalel and Oholiab",
            "Joshua and Caleb",
            "Moses and Aaron"
          ],
          correctAnswer: "Bezalel and Oholiab"
        },
        {
          id: "q2",
          type: "true-false",
          question: "The Sabbath was to be observed as a sign between Jehovah and Israel for only one generation.",
          correctAnswer: false
        },
        {
          id: "q3",
          type: "short-answer",
          question: "On what material were the Ten Commandments written?",
          correctAnswer: "Two stone tablets"
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "What did the people ask Aaron to make while Moses was on Mount Sinai?",
          options: [
            "A bronze serpent",
            "A golden calf",
            "A silver crown",
            "An altar of incense"
          ],
          correctAnswer: "A golden calf"
        },
        {
          id: "q5",
          type: "true-false",
          question: "Aaron claimed that he shaped the golden calf with his own hands.",
          correctAnswer: false
        },
        {
          id: "q6",
          type: "short-answer",
          question: "What tribe rallied to Moses’ call, ‘Who is on Jehovah’s side?’",
          correctAnswer: "The Levites"
        },
        {
          id: "q7",
          type: "multiple-choice",
          question: "How many men were killed by the Levites after the golden calf incident?",
          options: ["1,000", "2,000", "3,000", "5,000"],
          correctAnswer: "3,000"
        },
        {
          id: "q8",
          type: "short-answer",
          question: "What did Moses do with the stone tablets when he saw the calf and the dancing?",
          correctAnswer: "He threw them down and shattered them at the foot of the mountain"
        },
        {
          id: "q9",
          type: "multiple-choice",
          question: "What did Moses do with the golden calf?",
          options: [
            "Burned it, ground it to powder, scattered it on the water, and made the Israelites drink it",
            "Melted it down for temple use",
            "Buried it outside the camp",
            "Gave it to the Levites to guard"
          ],
          correctAnswer: "Burned it, ground it to powder, scattered it on the water, and made the Israelites drink it"
        },
        {
          id: "q10",
          type: "true-false",
          question: "Jehovah initially told Moses He would not go with Israel to the promised land because of their stubbornness.",
          correctAnswer: true
        },
        {
          id: "q11",
          type: "short-answer",
          question: "Where would Moses pitch the tent of meeting to speak with Jehovah?",
          correctAnswer: "Outside the camp, far from the camp"
        },
        {
          id: "q12",
          type: "multiple-choice",
          question: "Who would speak to Jehovah face-to-face as a man speaks to his friend?",
          options: ["Aaron", "Joshua", "Moses", "Bezalel"],
          correctAnswer: "Moses"
        },
        {
          id: "q13",
          type: "short-answer",
          question: "What did Moses request to see from Jehovah in chapter 33?",
          correctAnswer: "Jehovah’s glory"
        },
        {
          id: "q14",
          type: "true-false",
          question: "Moses was the only human able to see Jehovah's false.",
          correctAnswer: false
        },
      ]
    }
  },
  {
    day: 29,
    passage: "Exodus 34–35",
    focus: "Renewal of the covenant, Moses’ radiant face, Sabbath command, and contributions for the tabernacle",
    quiz: {
      title: "📘 Exodus 34–35 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "short-answer",
          question: "What did Jehovah command Moses to chisel out again at the start of chapter 34?",
          correctAnswer: "Two stone tablets like the first ones"
        },
        {
          id: "q2",
          type: "multiple-choice",
          question: "When Jehovah passed by Moses, how did He describe Himself?",
          options: [
            "Jehovah the Almighty Warrior",
            "Jehovah, merciful and gracious, slow to anger, abundant in loyal love and truth",
            "Jehovah, mighty in battle and wrath",
            "Jehovah, the one who judges swiftly without patience"
          ],
          correctAnswer: "Jehovah, merciful and gracious, slow to anger, abundant in loyal love and truth"
        },
        {
          id: "q3",
          type: "true-false",
          question: "Jehovah allowed Israel to make treaties with the inhabitants of Canaan.",
          correctAnswer: false
        },
        {
          id: "q4",
          type: "short-answer",
          question: "How many times a year men were supposed to gather to appear before Jehovah?",
          correctAnswer: "Three times"
        },
        {
          id: "q5",
          type: "true-false",
          question: "Moses refused to write the Ten Commandments again after the first tablets got shattered.",
          correctAnswer: false
        },
        {
          id: "q6",
          type: "short-answer",
          question: "What happened to Moses’ face after speaking with Jehovah?",
          correctAnswer: "His face emitted rays of light (it was radiant)"
        },
        {
          id: "q7",
          type: "multiple-choice",
          question: "In Exodus 35, what command was repeated before the tabernacle instructions?",
          options: ["Observe the Passover", "Observe the Sabbath", "Offer sacrifices daily", "Honor your parents"],
          correctAnswer: "Observe the Sabbath"
        },
        {
          id: "q8",
          type: "true-false",
          question: "On the Sabbath, no fire was to be lit in the Israelites’ dwellings.",
          correctAnswer: true
        },
        {
          id: "q9",
          type: "short-answer",
          question: "What kind of offerings did the people bring for the tabernacle?",
          correctAnswer: "Gold, silver, copper, fine linen, blue thread, purple wool, scarlet material, and more"
        },
        {
          id: "q10",
          type: "multiple-choice",
          question: "Who did Jehovah fill with wisdom, understanding, and skill for the tabernacle work?",
          options: ["Aaron", "Bezalel", "Joshua", "Caleb"],
          correctAnswer: "Bezalel"
        },
        {
          id: "q11",
          type: "short-answer",
          question: "Who was appointed to help Bezalel in the work?",
          correctAnswer: "Oholiab"
        },
        {
          id: "q12",
          type: "true-false",
          question: "Both men and women willingly contributed their possessions and skills for the tabernacle.",
          correctAnswer: true
        }
      ]
    }
  },
  {
    day: 30,
    passage: "Exodus 36–38",
    focus: "Skilled workers build the tabernacle, the Ark, table, lampstand, altars, basin, and courtyard",
    quiz: {
      title: "📘 Exodus 36–38 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "true-false",
          question: "The Israelites brought so many contributions for the tabernacle that Moses had to command them to stop giving.",
          correctAnswer: true
        },
        {
          id: "q2",
          type: "short-answer",
          question: "What material was used for the frames of the tabernacle?",
          correctAnswer: "Acacia wood"
        },
        {
          id: "q3",
          type: "multiple-choice",
          question: "What was overlaid with pure gold and had cherubs of hammered work at its ends?",
          options: ["The altar of burnt offering", "The Ark cover (mercy seat)", "The lampstand", "The basin"],
          correctAnswer: "The Ark cover (mercy seat)"
        },
        {
          id: "q4",
          type: "short-answer",
          question: "How many branches extended from the sides of the golden lampstand?",
          correctAnswer: "Six branches (three on each side)"
        },
        {
          id: "q5",
          type: "true-false",
          question: "The altar of incense was made of cedar wood overlaid with silver.",
          correctAnswer: false
        },
        {
          id: "q6",
          type: "multiple-choice",
          question: "What was the altar of burnt offering overlaid with?",
          options: ["Gold", "Silver", "Bronze (copper)", "Ivory"],
          correctAnswer: "Bronze (copper)"
        },
        {
          id: "q7",
          type: "short-answer",
          question: "What was made from the copper mirrors of the women who served at the entrance of the tent of meeting?",
          correctAnswer: "The basin and its stand"
        },
        {
          id: "q8",
          type: "multiple-choice",
          question: "The courtyard of the tabernacle was enclosed with what?",
          options: ["Stone walls", "Curtains of fine twisted linen", "Wooden panels", "Bronze chains"],
          correctAnswer: "Curtains of fine twisted linen"
        },
        {
          id: "q9",
          type: "short-answer",
          question: "Who was appointed to oversee the work of the Levites regarding the materials?",
          correctAnswer: "Ithamar, the son of Aaron the priest"
        },
        {
          id: "q10",
          type: "multiple-choice",
          question: "Approximately how much gold from the contributions was used in the tabernacle work?",
          options: ["10 talents", "29 talents", "50 talents", "100 talents"],
          correctAnswer: "29 talents"
        }
      ]
    }
  },
  {
    day: 31,
    passage: "Exodus 39–40",
    focus: "Priestly garments completed, tabernacle set up and filled with Jehovah’s glory",
    quiz: {
      title: "📘 Exodus 39–40 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "short-answer",
          question: "What was fastened to the hem of the blue robe of the ephod?",
          correctAnswer: "Blue, purple, and scarlet pomegranates with golden bells"
        },
        {
          id: "q2",
          type: "multiple-choice",
          question: "What was placed inside the breastpiece of judgment?",
          options: ["Two tablets of stone", "The Urim and the Thummim", "Incense and oil", "A golden rod"],
          correctAnswer: "The Urim and the Thummim"
        },
        {
          id: "q3",
          type: "true-false",
          question: "The gold plate on Aaron’s turban was engraved with the words 'Holiness belongs to Jehovah.'",
          correctAnswer: true
        },
        {
          id: "q4",
          type: "short-answer",
          question: "Who inspected all the tabernacle work and saw that it was done just as Jehovah had commanded?",
          correctAnswer: "Moses"
        },
        {
          id: "q5",
          type: "multiple-choice",
          question: "On what day of the first month did Moses set up the tabernacle?",
          options: ["First day", "Seventh day", "Tenth day", "Fourteenth day"],
          correctAnswer: "First day"
        },
        {
          id: "q6",
          type: "short-answer",
          question: "What was placed inside the Ark before the cover was put on?",
          correctAnswer: "The Testimony (the tablets of the Law)"
        },
        {
          id: "q7",
          type: "multiple-choice",
          question: "Where was the lampstand set up inside the tabernacle?",
          options: ["North side of the Holy Place", "South side of the Holy Place", "Outside the courtyard entrance", "Beside the altar of burnt offering"],
          correctAnswer: "South side of the Holy Place"
        },
        {
          id: "q8",
          type: "true-false",
          question: "After the tabernacle was set up, Jehovah’s cloud filled it so fully that Moses was unable to enter.",
          correctAnswer: true
        },
        {
          id: "q9",
          type: "short-answer",
          question: "What sign indicated that the Israelites should set out on their journeys?",
          correctAnswer: "When the cloud lifted from over the tabernacle"
        },
        {
          id: "q10",
          type: "multiple-choice",
          question: "By what was the tabernacle covered at night after Jehovah’s glory filled it?",
          options: ["A mist", "A fiery pillar", "A starry light", "A golden glow"],
          correctAnswer: "A fiery pillar"
        }
      ]
    }
  },
  {
    day: 32,
    passage: "Leviticus 1–4",
    focus: "Instructions for burnt offerings, grain offerings, communion offerings, and sin offerings",
    quiz: {
      title: "📘 Leviticus 1–4 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "short-answer",
          question: "In Leviticus 1, what kind of animals could be presented for a burnt offering?",
          correctAnswer: "A male from the herd, flock, or birds (bull, sheep, goat, turtledove, or pigeon)"
        },
        {
          id: "q2",
          type: "multiple-choice",
          question: "When presenting a burnt offering from the herd, where was the hand placed on the animal?",
          options: ["On its back", "On its head", "On its neck", "On its side"],
          correctAnswer: "On its head"
        },
        {
          id: "q3",
          type: "true-false",
          question: "Grain offerings could be presented as fine flour with oil and frankincense.",
          correctAnswer: true
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "What was never to be included in a grain offering?",
          options: ["Salt", "Olive oil", "Leaven (yeast) and honey", "Frankincense"],
          correctAnswer: "Leaven (yeast) and honey"
        },
        {
          id: "q5",
          type: "short-answer",
          question: "What did every offering of grain have to be seasoned with?",
          correctAnswer: "Salt"
        },
        {
          id: "q6",
          type: "multiple-choice",
          question: "In the communion offering, what parts of the animal were burned as an offering to Jehovah?",
          options: ["The skin and bones", "The meat and blood", "The fat, kidneys, and lobe of the liver", "The entire animal"],
          correctAnswer: "The fat, kidneys, and lobe of the liver"
        },
        {
          id: "q7",
          type: "true-false",
          question: "The fat and blood of the communion offerings could be eaten by the Israelites.",
          correctAnswer: false
        },
        {
          id: "q8",
          type: "short-answer",
          question: "In Leviticus 4, what was offered if the high priest sinned, bringing guilt on the people?",
          correctAnswer: "A young bull without defect as a sin offering"
        },
        {
          id: "q9",
          type: "multiple-choice",
          question: "What was done with the blood of the sin offering for the congregation?",
          options: ["It was poured out on the ground", "It was sprinkled in front of the curtain of the Most Holy", "It was burned with the fat", "It was mixed with water"],
          correctAnswer: "It was sprinkled in front of the curtain of the Most Holy"
        },
        {
          id: "q10",
          type: "short-answer",
          question: "What could a leader bring as a sin offering if he unintentionally sinned?",
          correctAnswer: "A male goat without defect"
        }
      ]
    }
  },
  {
    day: 33,
    passage: "Leviticus 5–7",
    focus: "Sin offerings, guilt offerings, regulations for offerings, and the priest’s portion",
    quiz: {
      title: "📘 Leviticus 5–7 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "In Leviticus 5, what was a person required to do if they became aware of sin and were guilty?",
          options: ["Fast for seven days", "Confess the sin and bring a sin offering", "Offer incense", "Leave the camp"],
          correctAnswer: "Confess the sin and bring a sin offering"
        },
        {
          id: "q2",
          type: "short-answer",
          question: "If someone could not afford a lamb for a sin offering, what could they bring instead?",
          correctAnswer: "Two turtledoves or two young pigeons"
        },
        {
          id: "q3",
          type: "multiple-choice",
          question: "What was a guilt offering required for?",
          options: ["Breaking the Sabbath", "Eating leavened bread during Passover", "Deceiving, stealing, or dealing falsely", "Failing to tithe"],
          correctAnswer: "Deceiving, stealing, or dealing falsely"
        },
        {
          id: "q4",
          type: "short-answer",
          question: "Besides the offering, what else had to be done when making amends for guilt involving property or deceit?",
          correctAnswer: "Restitution plus an additional fifth"
        },
        {
          id: "q5",
          type: "true-false",
          question: "The burnt offering was to remain on the altar fire all night until morning.",
          correctAnswer: true
        },
        {
          id: "q6",
          type: "multiple-choice",
          question: "What was Aaron and his sons instructed to wear when removing the ashes from the altar?",
          options: ["Holy garments", "Linen garments", "Woolen garments", "Garments of gold"],
          correctAnswer: "Linen garments"
        },
        {
          id: "q7",
          type: "short-answer",
          question: "Which offerings were most holy and had to be eaten in a holy place?",
          correctAnswer: "The sin offering and the guilt offering"
        },
        {
          id: "q8",
          type: "true-false",
          question: "Every male among the priests could eat from the grain offerings, sin offerings, and guilt offerings.",
          correctAnswer: true
        },
        {
          id: "q9",
          type: "multiple-choice",
          question: "What was strictly forbidden for the Israelites to eat from any animal?",
          options: ["Skin and bones", "Fat and blood", "Kidneys and liver", "Firstborn animals"],
          correctAnswer: "Fat and blood"
        },
        {
          id: "q10",
          type: "short-answer",
          question: "What portion of the communion offering belonged to Aaron and his sons?",
          correctAnswer: "The breast of the wave offering and the right leg"
        }
      ]
    }
  },
  {
    day: 34,
    passage: "Leviticus 8–10",
    focus: "Installation of priests and the account of Nadab and Abihu",
    quiz: {
      title: "📘 Leviticus 8–10 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "short-answer",
          question: "In Leviticus 8, who was anointed and installed as high priest?",
          correctAnswer: "Aaron"
        },
        {
          id: "q2",
          type: "multiple-choice",
          question: "What was placed on Aaron’s head during his installation?",
          options: ["A crown of gold", "The turban with the holy sign of dedication", "A linen cap", "Olive branches"],
          correctAnswer: "The turban with the holy sign of dedication"
        },
        {
          id: "q3",
          type: "true-false",
          question: "Moses sprinkled some of the anointing oil and some of the blood on Aaron and his sons and their garments.",
          correctAnswer: true
        },
        {
          id: "q4",
          type: "short-answer",
          question: "How many days were Aaron and his sons to remain at the entrance of the tent of meeting during their installation?",
          correctAnswer: "Seven days"
        },
        {
          id: "q5",
          type: "multiple-choice",
          question: "In Leviticus 9, what happened after Aaron offered the sacrifices as instructed?",
          options: ["The sky darkened", "Fire came out from before Jehovah and consumed the offering", "The priests fell asleep", "The Ark of the Covenant was moved"],
          correctAnswer: "Fire came out from before Jehovah and consumed the offering"
        },
        {
          id: "q6",
          type: "true-false",
          question: "After the fire consumed the offerings, the people shouted and fell facedown.",
          correctAnswer: true
        },
        {
          id: "q7",
          type: "multiple-choice",
          question: "What sin did Nadab and Abihu commit in Leviticus 10?",
          options: ["They took unauthorized incense and offered illegitimate fire", "They ate the sin offering in the wrong place", "They refused to serve in the priesthood", "They touched the Ark of the Covenant"],
          correctAnswer: "They took unauthorized incense and offered illegitimate fire"
        },
        {
          id: "q8",
          type: "short-answer",
          question: "What happened to Nadab and Abihu after offering illegitimate fire?",
          correctAnswer: "Fire came out from Jehovah and consumed them"
        },
        {
          id: "q9",
          type: "multiple-choice",
          question: "What command was given to Aaron and his remaining sons after the death of Nadab and Abihu?",
          options: ["Leave the tent of meeting", "Do not mourn openly", "Offer another burnt offering immediately", "Wash in the laver"],
          correctAnswer: "Do not mourn openly"
        },
        {
          id: "q10",
          type: "true-false",
          question: "Priests were commanded not to drink wine or other alcoholic beverages when serving in the tent of meeting.",
          correctAnswer: true
        }
      ]
    }
  },
  {
    day: 35,
    passage: "Leviticus 11–13",
    focus: "Clean and unclean animals, laws of purification, and diagnosis of skin diseases",
    quiz: {
      title: "📘 Leviticus 11–13 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "According to Leviticus 11, which land animals were considered clean to eat?",
          options: ["Animals with split hooves that also chew the cud", "Animals with paws", "All reptiles", "Any animal with fur"],
          correctAnswer: "Animals with split hooves that also chew the cud"
        },
        {
          id: "q2",
          type: "short-answer",
          question: "Name one unclean land animal specifically mentioned in Leviticus 11.",
          correctAnswer: "The camel (also acceptable: pig, rock badger, hare)"
        },
        {
          id: "q3",
          type: "multiple-choice",
          question: "Which water creatures were considered clean?",
          options: ["Any creature in the sea", "Only those with fins and scales", "Only those caught in nets", "All large fish"],
          correctAnswer: "Only those with fins and scales"
        },
        {
          id: "q4",
          type: "true-false",
          question: "Birds like the eagle, vulture, and raven were listed as unclean.",
          correctAnswer: true
        },
        {
          id: "q5",
          type: "short-answer",
          question: "In Leviticus 12, how long was a woman ceremonially unclean after giving birth to a son?",
          correctAnswer: "Seven days"
        },
        {
          id: "q6",
          type: "short-answer",
          question: "In Leviticus 12, how long was the purification period after giving birth to a daughter?",
          correctAnswer: "Two weeks unclean, plus sixty-six days of purification"
        },
        {
          id: "q7",
          type: "multiple-choice",
          question: "What offering was a woman to present after childbirth?",
          options: ["A lamb and a young pigeon or turtledove", "Two rams", "Grain and oil", "An ox and a goat"],
          correctAnswer: "A lamb and a young pigeon or turtledove"
        },
        {
          id: "q8",
          type: "true-false",
          question: "If a woman could not afford a lamb, she was permitted to offer two turtledoves or two young pigeons.",
          correctAnswer: true
        },
        {
          id: "q9",
          type: "multiple-choice",
          question: "In Leviticus 13, who examined people with potential skin diseases?",
          options: ["The tribal leaders", "The judges", "The priests", "The Levites only"],
          correctAnswer: "The priests"
        },
        {
          id: "q10",
          type: "short-answer",
          question: "What were individuals with confirmed leprosy required to call out?",
          correctAnswer: "Unclean, unclean!"
        },
        {
          id: "q11",
          type: "true-false",
          question: "A person pronounced unclean with leprosy had to live outside the camp.",
          correctAnswer: true
        }
      ]
    }
  },
  {
    day: 36,
    passage: "Leviticus 14–15",
    focus: "Cleansing from leprosy and laws about bodily discharges",
    quiz: {
      title: "📘 Leviticus 14–15 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "When a person was cleansed from leprosy, what two birds were used in the purification ritual?",
          options: ["Two pigeons", "Two lambs", "Two turtledoves or young pigeons", "Two clean birds"],
          correctAnswer: "Two clean birds"
        },
        {
          id: "q2",
          type: "short-answer",
          question: "What was done with one of the birds in the leper’s cleansing ritual?",
          correctAnswer: "It was killed over fresh water in an earthenware vessel."
        },
        {
          id: "q3",
          type: "multiple-choice",
          question: "What was placed on the cleansed person’s right ear, thumb, and big toe?",
          options: ["Ashes", "Water", "Blood of the guilt offering", "Oil only"],
          correctAnswer: "Blood of the guilt offering"
        },
        {
          id: "q4",
          type: "short-answer",
          question: "What was applied to the same places after the blood of the guilt offering?",
          correctAnswer: "Oil"
        },
        {
          id: "q5",
          type: "true-false",
          question: "If a person was poor, they could offer fewer animals for their cleansing.",
          correctAnswer: true
        },
        {
          id: "q6",
          type: "multiple-choice",
          question: "What had to be done if leprosy appeared in a house?",
          options: ["The house was immediately destroyed", "The house was closed for seven days", "The priest prayed over it", "The owner moved out forever"],
          correctAnswer: "The house was closed for seven days"
        },
        {
          id: "q7",
          type: "short-answer",
          question: "If leprosy spread in the house after inspection, what was to be done?",
          correctAnswer: "The affected stones were removed and the house scraped and replastered; if it spread again, the house was to be demolished."
        },
        {
          id: "q8",
          type: "multiple-choice",
          question: "According to Leviticus 15, what made a man unclean?",
          options: ["Eating unclean food", "Having a discharge from his body", "Touching a dead animal", "Not washing hands"],
          correctAnswer: "Having a discharge from his body"
        },
        {
          id: "q9",
          type: "true-false",
          question: "Anything a man with a discharge lay on or sat on became unclean.",
          correctAnswer: true
        },
        {
          id: "q10",
          type: "short-answer",
          question: "How long was a woman considered unclean during her menstrual period?",
          correctAnswer: "Seven days"
        },
        {
          id: "q11",
          type: "short-answer",
          question: "At the end of uncleanness from a discharge, what offerings were to be made?",
          correctAnswer: "Two turtledoves or two young pigeons—one for a sin offering and one for a burnt offering."
        }
      ]
    }
  }












];

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
          options: ["The altar of burnt offering", "The Ark cover", "The lampstand", "The basin"],
          correctAnswer: "The Ark cover"
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
          options: ["Two pigeons", "Two sparrows", "Two turtledoves or young pigeons", "Two clean birds"],
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
  },
  {
    day: 37,
    passage: "Leviticus 16–18",
    focus: "Day of Atonement, holiness, and laws about blood and sexual conduct",
    quiz: {
      title: "📘 Leviticus 16–18 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "On the Day of Atonement, how many goats were taken for a sin offering?",
          options: ["One", "Two", "Three", "Four"],
          correctAnswer: "Two"
        },
        {
          id: "q2",
          type: "short-answer",
          question: "What was done with the goat chosen 'for Jehovah'?",
          correctAnswer: "It was sacrificed as a sin offering."
        },
        {
          id: "q3",
          type: "short-answer",
          question: "What happened to the goat designated 'for Azazel'?",
          correctAnswer: "It was sent into the wilderness, carrying the sins of the people."
        },
        {
          id: "q4",
          type: "true-false",
          question: "Aaron had to make atonement for himself and his household before making atonement for the people.",
          correctAnswer: true
        },
        {
          id: "q5",
          type: "multiple-choice",
          question: "How often was the Day of Atonement to be observed?",
          options: ["Every month", "Every year", "Every seven years", "Only once in Israel’s history"],
          correctAnswer: "Every year"
        },
        {
          id: "q6",
          type: "short-answer",
          question: "What law was given regarding the eating of blood?",
          correctAnswer: "The Israelites were not to eat blood because the life is in the blood, and it makes atonement."
        },
        {
          id: "q7",
          type: "true-false",
          question: "Strangers living among Israel were allowed to eat blood if they wished.",
          correctAnswer: false
        },
        {
          id: "q8",
          type: "multiple-choice",
          question: "According to Leviticus 18, why were the nations being driven out of the land?",
          options: [
            "Because they were too powerful",
            "Because they did not worship Jehovah",
            "Because of their detestable sexual practices",
            "Because they refused to pay tribute"
          ],
          correctAnswer: "Because of their detestable sexual practices"
        },
        {
          id: "q9",
          type: "short-answer",
          question: "What relationships were forbidden in Leviticus 18?",
          correctAnswer: "Sexual relations with close relatives, with a neighbor’s wife, with animals, and with those of the same sex."
        },
        {
          id: "q10",
          type: "true-false",
          question: "Offering children in sacrifice to Molech was strictly forbidden.",
          correctAnswer: true
        }
      ]
    }
  },
  {
    day: 38,
    passage: "Leviticus 19–21",
    focus: "Holiness laws and regulations for priests",
    quiz: {
      title: "📘 Leviticus 19–21 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "What key principle did Jehovah command in Leviticus 19:2?",
          options: [
            "Be strong and courageous",
            "Be holy, because I am holy",
            "Be fruitful and multiply",
            "Offer sacrifices daily"
          ],
          correctAnswer: "Be holy, because I am holy"
        },
        {
          id: "q2",
          type: "true-false",
          question: "Leviticus 19 commanded that the corners of the field be left unharvested for the poor and the foreign residents.",
          correctAnswer: true
        },
        {
          id: "q3",
          type: "short-answer",
          question: "According to Leviticus 19:18, what command sums up proper treatment of others?",
          correctAnswer: "You must love your fellow man as yourself."
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "Which practices were forbidden in Leviticus 19?",
          options: [
            "Spiritism and fortune-telling",
            "Tattoo markings",
            "Dishonest weights and measures",
            "All of the above"
          ],
          correctAnswer: "All of the above"
        },
        {
          id: "q5",
          type: "short-answer",
          question: "What severe penalty was given in Leviticus 20 for offering children to Molech?",
          correctAnswer: "Death by stoning"
        },
        {
          id: "q6",
          type: "true-false",
          question: "In Leviticus 20, sexual relations with close relatives were punishable by death.",
          correctAnswer: true
        },
        {
          id: "q7",
          type: "multiple-choice",
          question: "Why were Israel told to be holy and different from the nations?",
          options: [
            "Because they were stronger than other nations",
            "Because Jehovah set them apart as His people",
            "Because Moses commanded it",
            "Because they lived in the wilderness"
          ],
          correctAnswer: "Because Jehovah set them apart as His people"
        },
        {
          id: "q8",
          type: "short-answer",
          question: "What restrictions were placed on priests regarding marriage in Leviticus 21?",
          correctAnswer: "They could not marry a prostitute, a woman profaned by prostitution, or a divorced woman."
        },
        {
          id: "q9",
          type: "multiple-choice",
          question: "Who was allowed to marry only a virgin of his own people?",
          options: ["Any priest", "The high priest", "Levites only", "Judges"],
          correctAnswer: "The high priest"
        },
        {
          id: "q10",
          type: "true-false",
          question: "Priests with physical defects could not serve in presenting offerings, but they could eat the holy things.",
          correctAnswer: true
        }
      ]
    }
  },
  {
    day: 39,
    passage: "Leviticus 22–23",
    focus: "Regulations for offerings and appointed festivals",
    quiz: {
      title: "📘 Leviticus 22–23 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "short-answer",
          question: "What were the priests warned not to profane in Leviticus 22?",
          correctAnswer: "Jehovah’s holy name and the holy offerings of the Israelites."
        },
        {
          id: "q2",
          type: "multiple-choice",
          question: "Who was permitted to eat from the holy offerings?",
          options: ["Any Israelite", "Priests and their household", "Foreign residents", "Levites only"],
          correctAnswer: "Priests and their household"
        },
        {
          id: "q3",
          type: "true-false",
          question: "Animals offered as sacrifices had to be without defect.",
          correctAnswer: true
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "How many annual festivals of Jehovah are outlined in Leviticus 23?",
          options: ["Three", "Four", "Seven", "Ten"],
          correctAnswer: "Seven"
        },
        {
          id: "q5",
          type: "short-answer",
          question: "What day each week was considered holy and a day of complete rest?",
          correctAnswer: "The Sabbath"
        },
        {
          id: "q6",
          type: "multiple-choice",
          question: "Which festival involved offering the firstfruits of the harvest?",
          options: ["Festival of Weeks (Pentecost)", "Festival of Booths", "Festival of Unleavened Bread", "Festival of Trumpets"],
          correctAnswer: "Festival of Weeks (Pentecost)"
        },
        {
          id: "q7",
          type: "short-answer",
          question: "What festival included dwelling in temporary shelters to remember the wilderness journey?",
          correctAnswer: "The Festival of Booths (Tabernacles)"
        },
        {
          id: "q8",
          type: "true-false",
          question: "The Festival of Trumpets was a memorial of sounding the horn and a holy convocation.",
          correctAnswer: true
        },
        {
          id: "q9",
          type: "multiple-choice",
          question: "Which day of the year was a solemn fast, requiring complete abstinence from work?",
          options: ["Day of Atonement", "Passover", "Festival of Booths", "Festival of Weeks"],
          correctAnswer: "Day of Atonement"
        },
        {
          id: "q10",
          type: "short-answer",
          question: "During the Festival of Unleavened Bread, what were the Israelites not to eat?",
          correctAnswer: "Anything leavened"
        }
      ]
    }
  },
  {
    day: 40,
    passage: "Leviticus 24–25",
    focus: "Sacred duties, blasphemy law, Sabbath year and Jubilee",
    quiz: {
      title: "📘 Leviticus 24–25 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "short-answer",
          question: "What was to be kept burning continually in the tent of meeting according to Leviticus 24?",
          correctAnswer: "The lamps fueled by pure beaten olive oil."
        },
        {
          id: "q2",
          type: "multiple-choice",
          question: "What was placed on the table before Jehovah each Sabbath?",
          options: ["Incense", "Showbread", "Sacrificial meat", "Gold vessels"],
          correctAnswer: "Showbread"
        },
        {
          id: "q3",
          type: "true-false",
          question: "Blaspheming Jehovah’s name carried the penalty of death.",
          correctAnswer: true
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "Which principle was emphasized in Leviticus 24 regarding injury?",
          options: [
            "Turn the other cheek",
            "An eye for an eye, tooth for a tooth",
            "Do not retaliate",
            "Offer a sacrifice instead"
          ],
          correctAnswer: "An eye for an eye, tooth for a tooth"
        },
        {
          id: "q5",
          type: "short-answer",
          question: "How often was the land to observe a Sabbath year of rest?",
          correctAnswer: "Every seventh year"
        },
        {
          id: "q6",
          type: "multiple-choice",
          question: "What was proclaimed in the 50th year, after seven cycles of seven years?",
          options: ["A solemn assembly", "The Day of Atonement", "The Jubilee", "The Festival of Booths"],
          correctAnswer: "The Jubilee"
        },
        {
          id: "q7",
          type: "true-false",
          question: "During the Jubilee year, land that had been sold was to return to its original family owner.",
          correctAnswer: true
        },
        {
          id: "q8",
          type: "short-answer",
          question: "What instruction was given regarding lending to poor Israelites in Leviticus 25?",
          correctAnswer: "Do not charge them interest."
        },
        {
          id: "q9",
          type: "multiple-choice",
          question: "How were Israelites who became poor and sold themselves to others to be treated?",
          options: ["As slaves forever", "As hired workers, not slaves", "As foreigners", "They were to be cast out"],
          correctAnswer: "As hired workers, not slaves"
        },
        {
          id: "q10",
          type: "true-false",
          question: "Israelites could be permanently sold as slaves to foreigners.",
          correctAnswer: false
        }
      ]
    }
  },
  {
    day: 41,
    passage: "Leviticus 26–27",
    focus: "Blessings, curses, and vows of dedication",
    quiz: {
      title: "📘 Leviticus 26–27 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "true-false",
          question: "Leviticus 26 begins with a warning against making idols or sacred pillars.",
          correctAnswer: true
        },
        {
          id: "q2",
          type: "multiple-choice",
          question: "What blessings did Jehovah promise if Israel obeyed His commands?",
          options: ["Rain in its season", "Peace in the land", "Victory over enemies", "All of the above"],
          correctAnswer: "All of the above"
        },
        {
          id: "q3",
          type: "short-answer",
          question: "What was the consequence of Israel rejecting Jehovah’s statutes?",
          correctAnswer: "They would suffer curses such as disease, defeat, famine, exile, and the land would become desolate."
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "Jehovah said that even if Israel was scattered among the nations, He would still:",
          options: ["Forget them completely", "Uphold His covenant with their ancestors", "Destroy them utterly", "Abandon the land forever"],
          correctAnswer: "Uphold His covenant with their ancestors"
        },
        {
          id: "q5",
          type: "true-false",
          question: "The land itself would enjoy its Sabbaths while the Israelites were in exile.",
          correctAnswer: true
        },
        {
          id: "q6",
          type: "short-answer",
          question: "In Leviticus 27, what kinds of things could be dedicated to Jehovah?",
          correctAnswer: "Persons, animals, houses, and fields."
        },
        {
          id: "q7",
          type: "multiple-choice",
          question: "If someone wished to redeem something they had vowed to Jehovah, what was required?",
          options: ["A prayer of forgiveness", "Adding a fifth of its value", "Offering a freewill sacrifice", "Nothing extra was required"],
          correctAnswer: "Adding a fifth of its value"
        },
        {
          id: "q8",
          type: "true-false",
          question: "Firstborn animals already belonged to Jehovah and could not be dedicated as a vow.",
          correctAnswer: true
        },
        {
          id: "q9",
          type: "multiple-choice",
          question: "What happened to anything devoted to destruction to Jehovah?",
          options: ["It could be redeemed with a ransom", "It was permanently holy and could not be sold or redeemed", "It was returned to the family after Jubilee", "It was burned outside the camp"],
          correctAnswer: "It was permanently holy and could not be sold or redeemed"
        },
        {
          id: "q10",
          type: "short-answer",
          question: "What portion of the produce of the land was considered holy to Jehovah?",
          correctAnswer: "The tithe (a tenth)."
        }
      ]
    }
  },
  {
    day: 42,
    passage: "Numbers 1–3",
    focus: "Census of Israel and duties of the Levites",
    quiz: {
      title: "📘 Numbers 1–3 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "In Numbers 1, who was counted in the census of Israel?",
          options: ["All males from 20 years old and up able to serve in the army", "All men, women, and children", "Only the Levites", "Only the firstborn sons"],
          correctAnswer: "All males from 20 years old and up able to serve in the army"
        },
        {
          id: "q2",
          type: "true-false",
          question: "The census was taken in the wilderness of Sinai.",
          correctAnswer: true
        },
        {
          id: "q3",
          type: "short-answer",
          question: "Which tribe was not included in the military census?",
          correctAnswer: "The tribe of Levi."
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "What special role did Jehovah assign to the Levites?",
          options: ["To lead the armies", "To guard and care for the tabernacle", "To serve as judges", "To collect taxes"],
          correctAnswer: "To guard and care for the tabernacle"
        },
        {
          id: "q5",
          type: "true-false",
          question: "Each tribe was to camp wherever they wished around the tabernacle.",
          correctAnswer: false
        },
        {
          id: "q6",
          type: "multiple-choice",
          question: "In Numbers 3, who were appointed as priests to serve before Jehovah?",
          options: ["All Levites", "The sons of Aaron", "The firstborn of each tribe", "The eldest men of Israel"],
          correctAnswer: "The sons of Aaron"
        },
        {
          id: "q7",
          type: "multiple-choice",
          question: "Why were the Levites taken in place of the firstborn of Israel?",
          options: ["Because the Levites were more numerous", "As a substitution for the firstborn who belonged to Jehovah", "Because the Levites asked for it", "To reduce the military count"],
          correctAnswer: "As a substitution for the firstborn who belonged to Jehovah"
        },
        {
          id: "q8",
          type: "true-false",
          question: "The Levites were divided into families, each with specific tabernacle duties.",
          correctAnswer: true
        }
      ]
    }
  },
  {
    day: 43,
    passage: "Numbers 4–6",
    focus: "Duties of the Levites and the Nazirite vow",
    quiz: {
      title: "📘 Numbers 4–6 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "In Numbers 4, what age range of Levite men were assigned service duties for the tabernacle?",
          options: ["From 20 to 40 years old", "From 25 to 60 years old", "From 30 to 50 years old", "From 18 to 35 years old"],
          correctAnswer: "From 30 to 50 years old"
        },
        {
          id: "q2",
          type: "short-answer",
          question: "Which family of Levites was responsible for carrying the most holy things, such as the Ark of the Covenant?",
          correctAnswer: "The Kohathites."
        },
        {
          id: "q3",
          type: "true-false",
          question: "The Kohathites were allowed to touch the holy things directly when carrying them.",
          correctAnswer: false
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "The Gershonites were responsible for carrying:",
          options: ["The Ark and the altars", "The tabernacle’s curtains and coverings", "The sacred utensils", "The incense and oil"],
          correctAnswer: "The tabernacle’s curtains and coverings"
        },
        {
          id: "q5",
          type: "multiple-choice",
          question: "The Merarites were responsible for carrying:",
          options: ["The lampstand and utensils", "The poles, frames, and bases of the tabernacle", "The ark only", "The priestly garments"],
          correctAnswer: "The poles, frames, and bases of the tabernacle"
        },
        {
          id: "q6",
          type: "true-false",
          question: "In Numbers 5, those unclean from leprosy, discharge, or contact with the dead were to remain outside the camp.",
          correctAnswer: true
        },
        {
          id: "q7",
          type: "short-answer",
          question: "What vow in Numbers 6 involved abstaining from wine, not cutting hair, and avoiding contact with the dead?",
          correctAnswer: "The Nazirite vow."
        },
        {
          id: "q8",
          type: "multiple-choice",
          question: "During the Nazirite vow, why could the person not shave their head?",
          options: ["Because hair was considered holy", "Because their uncut hair symbolized their dedication to Jehovah", "Because cutting hair was a sin", "Because priests forbade it"],
          correctAnswer: "Because their uncut hair symbolized their dedication to Jehovah"
        },
        {
          id: "q9",
          type: "true-false",
          question: "If a Nazirite accidentally became defiled by a dead body, the vow was considered broken and had to be restarted.",
          correctAnswer: true
        },
        {
          id: "q10",
          type: "short-answer",
          question: "What blessing did Jehovah instruct the priests to pronounce over the Israelites in Numbers 6?",
          correctAnswer: "Jehovah bless you and safeguard you. Jehovah make his face shine upon you, and show you favor. Jehovah lift up his face toward you and grant you peace."
        }
      ]
    }
  },
  {
    day: 44,
    passage: "Numbers 7–9",
    focus: "Offerings of the leaders, setting up the lamps, and the second Passover",
    quiz: {
      title: "📘 Numbers 7–9 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "In Numbers 7, how many days did it take for the 12 tribal leaders to present their offerings for the altar?",
          options: ["1 day", "7 days", "12 days", "40 days"],
          correctAnswer: "12 days"
        },
        {
          id: "q2",
          type: "short-answer",
          question: "What kinds of items did the tribal leaders present as offerings for the dedication of the altar?",
          correctAnswer: "Silver dishes and bowls, golden cups, animals for sacrifice, and other items."
        },
        {
          id: "q3",
          type: "true-false",
          question: "Each tribal leader brought a different kind of offering at the dedication of the altar.",
          correctAnswer: false
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "In Numbers 8, how were the Levites cleansed before being set apart for service?",
          options: [
            "By being washed with water, shaving their entire body, and washing their garments",
            "By offering incense",
            "By being anointed with oil",
            "By standing at the entrance of the tent of meeting"
          ],
          correctAnswer: "By being washed with water, shaving their entire body, and washing their garments"
        },
        {
          id: "q5",
          type: "short-answer",
          question: "After their cleansing, what did the Israelites do to symbolize the Levites’ service to Jehovah?",
          correctAnswer: "The Israelites laid their hands on the Levites, and the Levites were then presented before Jehovah as a wave offering."
        },
        {
          id: "q6",
          type: "multiple-choice",
          question: "At what age did the Levites begin and end their tabernacle service?",
          options: ["From 20 to 40", "From 25 to 50", "From 30 to 50", "From 50 to 70"],
          correctAnswer: "From 25 to 50"
        },
        {
          id: "q7",
          type: "true-false",
          question: "In Numbers 9, the Israelites celebrated the Passover in the first month of the second year after leaving Egypt.",
          correctAnswer: true
        },
        {
          id: "q8",
          type: "short-answer",
          question: "What provision was made for those who were unclean or on a distant journey during the Passover?",
          correctAnswer: "They were allowed to celebrate the Passover in the second month instead."
        },
        {
          id: "q9",
          type: "multiple-choice",
          question: "How did Jehovah signal when the Israelites were to set out or camp during their journey?",
          options: ["By the blowing of trumpets", "By Moses’ command", "By the pillar of cloud and fire", "By the sound of the priest’s horn"],
          correctAnswer: "By the pillar of cloud and fire"
        },
        {
          id: "q10",
          type: "true-false",
          question: "The Israelites could choose when to travel, regardless of the cloud’s position over the tabernacle.",
          correctAnswer: false
        }
      ]
    }
  },
  {
    day: 45,
    passage: "Numbers 10–12",
    focus: "The silver trumpets, departure from Sinai, and challenges to Moses’ leadership",
    quiz: {
      title: "📘 Numbers 10–12 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "What were the two silver trumpets used for in Numbers 10?",
          options: [
            "To call the congregation and to signal the camps to set out",
            "To announce the Sabbath",
            "To warn of enemies only",
            "To mark the new moon festival"
          ],
          correctAnswer: "To call the congregation and to signal the camps to set out"
        },
        {
          id: "q2",
          type: "short-answer",
          question: "Which tribe’s standard set out first when the Israelites departed from Sinai?",
          correctAnswer: "The tribe of Judah"
        },
        {
          id: "q3",
          type: "true-false",
          question: "Moses asked his father-in-law Hobab to go with them and serve as a guide.",
          correctAnswer: true
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "In Numbers 11, what complaint did the Israelites make that displeased Jehovah?",
          options: [
            "They lacked water",
            "They wanted meat instead of manna",
            "They were tired of traveling",
            "They wanted to return to Egypt for gold"
          ],
          correctAnswer: "They wanted meat instead of manna"
        },
        {
          id: "q5",
          type: "short-answer",
          question: "What did Jehovah provide in response to the people’s craving for meat?",
          correctAnswer: "He caused a wind to bring quail from the sea."
        },
        {
          id: "q6",
          type: "true-false",
          question: "Jehovah’s spirit came upon seventy elders, and they began to prophesy.",
          correctAnswer: true
        },
        {
          id: "q7",
          type: "short-answer",
          question: "What was Joshua's reaction when the seventy elders started to prophesy?",
          correctAnswer: "He urged Moses to restrain them (Joshua was jealous for Moses’ sake)."
        },
        {
          id: "q8",
          type: "multiple-choice",
          question: "In Numbers 12, why did Miriam and Aaron speak against Moses?",
          options: [
            "Because he had married a Cushite woman",
            "Because he refused to share leadership",
            "Because he gave preference to Joshua",
            "Because he was too harsh in judging"
          ],
          correctAnswer: "Because he had married a Cushite woman"
        },
        {
          id: "q9",
          type: "true-false",
          question: "Miriam was struck with leprosy for opposing Moses.",
          correctAnswer: true
        },
        {
          id: "q10",
          type: "true-false",
          question: "Aaron and Moses pleaded with Jehovah to free Miriam from her leprosy.",
          correctAnswer: true
        },
        {
          id: "q11",
          type: "short-answer",
          question: "How long was Miriam kept outside the camp due to her leprosy?",
          correctAnswer: "Seven days"
        }
      ]
    }
  },
  {
    day: 46,
    passage: "Numbers 13–15",
    focus: "The spies’ report, Israel’s rebellion, and laws for the congregation",
    quiz: {
      title: "📘 Numbers 13–15 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "How many spies did Moses send to explore the land of Canaan?",
          options: ["10", "12", "7", "40"],
          correctAnswer: "12"
        },
        {
          id: "q2",
          type: "short-answer",
          question: "Which two spies gave a positive report and encouraged Israel to trust Jehovah?",
          correctAnswer: "Caleb and Joshua"
        },
        {
          id: "q3",
          type: "true-false",
          question: "The spies brought back a large cluster of grapes, pomegranates, and figs from the Valley of Eshcol.",
          correctAnswer: true
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "What did the Israelites say when they heard the negative report of the spies?",
          options: [
            "They praised Jehovah for the land",
            "They wanted to appoint a leader and return to Egypt",
            "They asked for more food and water",
            "They immediately prepared to conquer the land"
          ],
          correctAnswer: "They wanted to appoint a leader and return to Egypt"
        },
        {
          id: "q5",
          type: "short-answer",
          question: "What punishment did Jehovah decree because of Israel’s lack of faith?",
          correctAnswer: "They would wander in the wilderness for 40 years, and the generation that rebelled would die there."
        },
        {
          id: "q6",
          type: "true-false",
          question: "Jehovah forgave the people completely and allowed them to enter the land right away.",
          correctAnswer: false
        },
        {
          id: "q7",
          type: "multiple-choice",
          question: "In Numbers 15, what provision did Jehovah make for unintentional sins?",
          options: [
            "They were to be stoned immediately",
            "They were forgiven through animal sacrifices",
            "They had to fast for 40 days",
            "They were sent outside the camp permanently"
          ],
          correctAnswer: "They were forgiven through animal sacrifices"
        },
        {
          id: "q8",
          type: "short-answer",
          question: "What happened to the man who was found gathering wood on the Sabbath?",
          correctAnswer: "He was stoned to death, as Jehovah commanded."
        },
        {
          id: "q9",
          type: "true-false",
          question: "Jehovah instructed the Israelites to make fringes with blue cords on their garments as a reminder of His commandments.",
          correctAnswer: true
        },
        {
          id: "q10",
          type: "short-answer",
          question: "How long were the Israelites to wander in the wilderness—one year for each day the spies explored the land?",
          correctAnswer: "40 years"
        },
        {
          id: "q11",
          type: "multiple-choice",
          question: "From which tribes were Caleb and Joshua?",
          options: ["Judah and Ephraim", "Reuben and Simeon", "Levi and Benjamin", "Dan and Naphtali"],
          correctAnswer: "Judah and Ephraim"
        },
        {
          id: "q12",
          type: "short-answer",
          question: "What did the majority of the spies say about the inhabitants of Canaan?",
          correctAnswer: "They were giants and the Israelites seemed like grasshoppers in comparison."
        },
        {
          id: "q13",
          type: "multiple-choice",
          question: "What did Moses instruct the spies to observe in the land?",
          options: [
            "The strength of the people and the quality of the land",
            "The number of cities",
            "The amount of gold and silver",
            "The weather conditions"
          ],
          correctAnswer: "The strength of the people and the quality of the land"
        },
        {
          id: "q14",
          type: "true-false",
          question: "The spies explored the land of Canaan for forty days.",
          correctAnswer: true
        },
        {
          id: "q15",
          type: "short-answer",
          question: "What was the people's reaction when Caleb tried to encourage them to take possession of the land?",
          correctAnswer: "They threatened to stone him and wanted to return to Egypt."
        }
      ]
    }
  },
  {
    day: 47,
    passage: "Numbers 16–18",
    focus: "Korah’s rebellion, Aaron’s staff, and duties of the priests and Levites",
    quiz: {
      title: "📘 Numbers 16–18 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "Who led the rebellion against Moses and Aaron?",
          options: ["Korah, Dathan, Abiram", "Joshua, Caleb, Hur", "Nadab and Abihu", "Miriam and Aaron"],
          correctAnswer: "Korah, Dathan, Abiram"
        },
        {
          id: "q2",
          type: "true-false",
          question: "The rebels accused Moses and Aaron of exalting themselves over the congregation of Jehovah.",
          correctAnswer: true
        },
        {
          id: "q3",
          type: "short-answer",
          question: "What happened to Korah, Dathan, Abiram, and their households?",
          correctAnswer: "The ground opened up and swallowed them alive."
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "How did Jehovah show His choice of Aaron’s house for the priesthood?",
          options: [
            "By sending fire from heaven",
            "By causing Aaron’s staff to sprout, bud, blossom, and produce almonds",
            "By giving Aaron a crown",
            "By setting apart Aaron’s tent with a cloud"
          ],
          correctAnswer: "By causing Aaron’s staff to sprout, bud, blossom, and produce almonds"
        },
        {
          id: "q5",
          type: "true-false",
          question: "After the rebellion, the people complained that Moses and Aaron had killed Jehovah’s people.",
          correctAnswer: true
        },
        {
          id: "q6",
          type: "short-answer",
          question: "What stopped the plague that broke out among the Israelites after Korah’s rebellion?",
          correctAnswer: "Aaron ran with incense and made atonement, standing between the dead and the living."
        },
        {
          id: "q7",
          type: "multiple-choice",
          question: "What responsibility did Jehovah assign to Aaron and his sons?",
          options: [
            "Guarding the tabernacle as warriors",
            "Bearing the responsibility for the priesthood and service at the altar",
            "Judging disputes among the tribes",
            "Carrying the Ark of the Covenant"
          ],
          correctAnswer: "Bearing the responsibility for the priesthood and service at the altar"
        },
        {
          id: "q8",
          type: "short-answer",
          question: "What were the Levites given as their inheritance instead of land?",
          correctAnswer: "The tithes from the Israelites."
        },
        {
          id: "q9",
          type: "true-false",
          question: "The Levites were allowed to approach the sanctuary’s furnishings without the priests.",
          correctAnswer: false
        },
        {
          id: "q10",
          type: "short-answer",
          question: "What did Jehovah say was the inheritance of Aaron and his sons?",
          correctAnswer: "Jehovah Himself was their inheritance, along with the holy offerings from the Israelites."
        }
      ]
    }
  },
  {
    day: 48,
    passage: "Numbers 19–21",
    focus: "The red cow, water from the rock, and victories over enemies",
    quiz: {
      title: "📘 Numbers 19–21 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "What was the red cow used for?",
          options: [
            "As food for the priests",
            "To provide ashes for cleansing from sin",
            "As a sacrifice for the Day of Atonement",
            "To mark the entrance of the camp"
          ],
          correctAnswer: "To provide ashes for cleansing from sin"
        },
        {
          id: "q2",
          type: "true-false",
          question: "Anyone who touched a dead body was unclean for seven days.",
          correctAnswer: true
        },
        {
          id: "q3",
          type: "short-answer",
          question: "Why were Moses and Aaron told they would not enter the Promised Land?",
          correctAnswer: "Because they did not sanctify Jehovah before the people when bringing water from the rock at Meribah."
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "What nation refused Israel passage through their land, forcing them to take another route?",
          options: ["Moab", "Edom", "Ammon", "Midian"],
          correctAnswer: "Edom"
        },
        {
          id: "q5",
          type: "short-answer",
          question: "Who took Aaron’s place as high priest on Mount Hor?",
          correctAnswer: "Eleazar, Aaron’s son."
        },
        {
          id: "q6",
          type: "true-false",
          question: "Jehovah sent poisonous serpents among the people because they complained against Him and Moses.",
          correctAnswer: true
        },
        {
          id: "q7",
          type: "multiple-choice",
          question: "What did Jehovah provide as a means of healing from the serpents’ bites?",
          options: [
            "Anointing oil",
            "A bronze serpent on a pole",
            "Water from a well",
            "Incense offered by the priests"
          ],
          correctAnswer: "A bronze serpent on a pole"
        },
        {
          id: "q8",
          type: "true-false",
          question: "Israel lost the battles against the two kings who did not want to allow them to pass through their territory.",
          correctAnswer: false
        },
        {
          id: "q9",
          type: "true-false",
          question: "After Aaron’s death, the people mourned for him for 30 days.",
          correctAnswer: true
        },
        {
          id: "q10",
          type: "short-answer",
          question: "What did the people sing about at Beer (the well)?",
          correctAnswer: "They sang a song of praise for the well of water Jehovah provided."
        }
      ]
    }
  },
  {
    day: 49,
    passage: "Numbers 22–24",
    focus: "Balak, Balaam, and Jehovah’s blessing on Israel",
    quiz: {
      title: "📘 Numbers 22–24 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "Who was the king of Moab who summoned Balaam to curse Israel?",
          options: ["Og", "Balak", "Sihon", "Jethro"],
          correctAnswer: "Balak"
        },
        {
          id: "q2",
          type: "true-false",
          question: "Jehovah permitted Balaam to go with Balak’s princes, but told him to speak only what He commanded.",
          correctAnswer: true
        },
        {
          id: "q3",
          type: "short-answer",
          question: "What unusual event happened with Balaam’s donkey?",
          correctAnswer: "Jehovah enabled the donkey to speak and rebuke Balaam for striking it."
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "What did Balaam end up doing instead of cursing Israel?",
          options: [
            "He blessed Israel",
            "He cursed Moab",
            "He refused to speak",
            "He left without saying anything"
          ],
          correctAnswer: "He blessed Israel"
        },
        {
          id: "q5",
          type: "true-false",
          question: "Balak was pleased with Balaam’s blessings on Israel.",
          correctAnswer: false
        },
        {
          id: "q6",
          type: "short-answer",
          question: "How many times did Balak take Balaam to different locations hoping he would curse Israel?",
          correctAnswer: "Three times."
        },
        {
          id: "q7",
          type: "multiple-choice",
          question: "In one of Balaam’s prophecies, he spoke of a coming figure described as what?",
          options: [
            "A great king",
            "A star out of Jacob",
            "A prophet like Moses",
            "A lion from Judah"
          ],
          correctAnswer: "A star out of Jacob"
        },
        {
          id: "q8",
          type: "true-false",
          question: "Balaam said that Jehovah is not a man that He should tell lies or change His mind.",
          correctAnswer: true
        },
        {
          id: "q9",
          type: "short-answer",
          question: "What was Balak’s reaction after Balaam blessed Israel the third time?",
          correctAnswer: "He became angry, clapped his hands, and told Balaam to go home without reward."
        }
      ]
    }
  },
  {
    day: 50,
    passage: "Numbers 25–27",
    focus: "Idolatry at Peor, census of Israel, and Joshua appointed",
    quiz: {
      title: "📘 Numbers 25–27 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "What sin did the Israelites commit with the Moabite women at Peor?",
          options: [
            "They made idols of gold",
            "They ate food without washing hands",
            "They engaged in sexual immorality and sacrificed to Baal",
            "They worked on the Sabbath"
          ],
          correctAnswer: "They engaged in sexual immorality and sacrificed to Baal"
        },
        {
          id: "q2",
          type: "true-false",
          question: "Phinehas stopped the plague by spearing an Israelite man and Midianite woman.",
          correctAnswer: true
        },
        {
          id: "q3",
          type: "short-answer",
          question: "How many Israelites died in the plague at Peor?",
          correctAnswer: "24,000"
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "Why was a new census taken in Numbers 26?",
          options: [
            "To determine military strength",
            "To divide the land inheritance by tribe",
            "Because the first census was lost",
            "To count the priests only"
          ],
          correctAnswer: "To divide the land inheritance by tribe"
        },
        {
          id: "q5",
          type: "true-false",
          question: "Of those counted in the first census, only Caleb and Joshua were still alive.",
          correctAnswer: true
        },
        {
          id: "q6",
          type: "short-answer",
          question: "What special case about inheritance did the daughters of Zelophehad present?",
          correctAnswer: "They requested an inheritance among their father’s brothers since he had no sons."
        },
        {
          id: "q7",
          type: "multiple-choice",
          question: "Who did Jehovah appoint to succeed Moses as leader?",
          options: ["Aaron", "Eleazar", "Caleb", "Joshua"],
          correctAnswer: "Joshua"
        },
        {
          id: "q8",
          type: "true-false",
          question: "Moses laid his hands on Joshua before the entire assembly to confirm his appointment.",
          correctAnswer: true
        },
        {
          id: "q9",
          type: "short-answer",
          question: "Who stood with Moses when Jehovah told him to appoint Joshua?",
          correctAnswer: "Eleazar the priest"
        },
        {
          id: "q10",
          type: "multiple-choice",
          question: "What tribe had the largest number in the second census?",
          options: ["Judah", "Dan", "Manasseh", "Reuben"],
          correctAnswer: "Judah"
        }
      ]
    }
  },
  {
    day: 51,
    passage: "Numbers 28–30",
    focus: "Daily offerings, annual festivals, and vows",
    quiz: {
      title: "📘 Numbers 28–30 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "What was the daily offering that Israel was to present to Jehovah?",
          options: [
            "Two male goats",
            "One bull and one ram",
            "Two year-old male lambs without defect",
            "A pair of doves"
          ],
          correctAnswer: "Two year-old male lambs without defect"
        },
        {
          id: "q2",
          type: "short-answer",
          question: "Besides the daily offerings, what special offerings were required on the Sabbath?",
          correctAnswer: "Two male lambs a year old without defect, with grain and drink offerings."
        },
        {
          id: "q3",
          type: "true-false",
          question: "The offerings at the Festival of Weeks included two bulls, one ram, and seven male lambs.",
          correctAnswer: true
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "Which festival required the most animal sacrifices?",
          options: [
            "Passover",
            "Festival of Booths",
            "Festival of Weeks",
            "Day of Atonement"
          ],
          correctAnswer: "Festival of Booths"
        },
        {
          id: "q5",
          type: "short-answer",
          question: "How many bulls were offered on the first day of the Festival of Booths?",
          correctAnswer: "13 bulls"
        },
        {
          id: "q6",
          type: "true-false",
          question: "The total number of bulls offered during the Festival of Booths was 70.",
          correctAnswer: true
        },
        {
          id: "q7",
          type: "multiple-choice",
          question: "According to Numbers 30, whose vow had to stand once it was spoken without objection?",
          options: [
            "A widow or divorced woman",
            "A married woman whose husband remained silent",
            "A young woman whose father remained silent",
            "All of the above"
          ],
          correctAnswer: "All of the above"
        },
        {
          id: "q8",
          type: "true-false",
          question: "A husband could nullify his wife’s vow on the day he first heard it.",
          correctAnswer: true
        },
        {
          id: "q9",
          type: "short-answer",
          question: "What happened if a husband tried to nullify his wife’s vow days after he first heard it?",
          correctAnswer: "He would be held responsible for her guilt."
        },
        {
          id: "q10",
          type: "multiple-choice",
          question: "What was the primary purpose of the detailed offerings listed in Numbers 28–29?",
          options: [
            "To provide food for the priests",
            "To maintain Jehovah’s regular worship arrangement",
            "To prepare for battle",
            "To celebrate the harvest only"
          ],
          correctAnswer: "To maintain Jehovah’s regular worship arrangement"
        }
      ]
    }
  },
  {
    day: 52,
    passage: "Numbers 31–32",
    focus: "War against Midian and the request of Reuben and Gad",
    quiz: {
      title: "📘 Numbers 31–32 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "Who did Jehovah command Moses to take vengeance on before his death?",
          options: [
            "The Moabites",
            "The Amalekites",
            "The Midianites",
            "The Canaanites"
          ],
          correctAnswer: "The Midianites"
        },
        {
          id: "q2",
          type: "short-answer",
          question: "How many Israelite soldiers were chosen to fight against Midian?",
          correctAnswer: "12,000"
        },
        {
          id: "q3",
          type: "true-false",
          question: "Balaam the son of Beor was killed in the battle against Midian.",
          correctAnswer: true
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "What were the soldiers instructed to do with the Midianite women and boys?",
          options: [
            "Spare them all",
            "Kill them",
            "Take them as servants",
            "Send them away"
          ],
          correctAnswer: "Kill them"
        },
        {
          id: "q5",
          type: "short-answer",
          question: "What portion of the spoils of war was set aside for Jehovah?",
          correctAnswer: "One out of every 500 from the warriors’ half was given to the priest; one out of every 50 from the people’s half was given to the Levites."
        },
        {
          id: "q6",
          type: "true-false",
          question: "The tribes of Reuben and Gad asked to settle in the land east of the Jordan because it was good for their livestock.",
          correctAnswer: true
        },
        {
          id: "q7",
          type: "multiple-choice",
          question: "What condition did Moses set for Reuben and Gad to settle east of the Jordan?",
          options: [
            "They must give half their herds to the Levites",
            "They must fight with Israel until the land west of the Jordan was subdued",
            "They must build a temple there",
            "They must remain separate from the rest of Israel"
          ],
          correctAnswer: "They must fight with Israel until the land west of the Jordan was subdued"
        },
        {
          id: "q8",
          type: "true-false",
          question: "Half the tribe of Manasseh also received land east of the Jordan along with Reuben and Gad.",
          correctAnswer: true
        },
        {
          id: "q9",
          type: "short-answer",
          question: "Name one of the cities that the Reubenites rebuilt east of the Jordan.",
          correctAnswer: "Dibon, Ataroth, Aroer, or Heshbon (any one)"
        },
        {
          id: "q10",
          type: "multiple-choice",
          question: "Why was Moses initially angry with the request of Reuben and Gad?",
          options: [
            "They refused to give sacrifices",
            "He thought they were discouraging the other Israelites from crossing into Canaan",
            "They rejected Jehovah’s command",
            "They wanted to separate completely from Israel"
          ],
          correctAnswer: "He thought they were discouraging the other Israelites from crossing into Canaan"
        }
      ]
    }
  },
  {
    day: 53,
    passage: "Numbers 33–36",
    focus: "Israel’s journey, boundaries, cities of refuge, and inheritance laws",
    quiz: {
      title: "📘 Numbers 33–36 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "short-answer",
          question: "From where to where does Numbers 33 trace the Israelites’ journey?",
          correctAnswer: "From Rameses in Egypt to the plains of Moab by the Jordan at Jericho"
        },
        {
          id: "q2",
          type: "true-false",
          question: "Jehovah commanded the Israelites to drive out all the inhabitants of Canaan and destroy their images and sacred pillars.",
          correctAnswer: true
        },
        {
          id: "q3",
          type: "multiple-choice",
          question: "Who was assigned to oversee the division of the land of Canaan by lot?",
          options: [
            "Moses and Aaron",
            "Joshua and Eleazar the priest",
            "Caleb and Joshua",
            "The heads of each tribe"
          ],
          correctAnswer: "Joshua and Eleazar the priest"
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "How many cities were given to the Levites among the other tribes?",
          options: ["12", "24", "48", "60"],
          correctAnswer: "48"
        },
        {
          id: "q5",
          type: "short-answer",
          question: "How many of the Levite cities were designated as cities of refuge?",
          correctAnswer: "6"
        },
        {
          id: "q6",
          type: "true-false",
          question: "A person who killed someone unintentionally could flee to a city of refuge and stay there until the death of the high priest.",
          correctAnswer: true
        },
        {
          id: "q7",
          type: "multiple-choice",
          question: "What was the punishment for intentional murder?",
          options: [
            "Exile to a city of refuge",
            "Payment of a ransom",
            "Death by the avenger of blood",
            "Seven years of service"
          ],
          correctAnswer: "Death by the avenger of blood"
        },
        {
          id: "q8",
          type: "short-answer",
          question: "Which family of Manasseh raised a concern about land inheritance in chapter 36?",
          correctAnswer: "The family of Zelophehad"
        },
        {
          id: "q9",
          type: "true-false",
          question: "The daughters of Zelophehad were allowed to marry whomever they wished, provided it was within their own tribe.",
          correctAnswer: true
        },
        {
          id: "q10",
          type: "multiple-choice",
          question: "Why was this marriage condition placed on the daughters of Zelophehad?",
          options: [
            "To keep inheritance within their tribe",
            "To honor their father’s name",
            "To avoid disputes with neighboring nations",
            "To increase the tribe’s numbers"
          ],
          correctAnswer: "To keep inheritance within their tribe"
        }
      ]
    }
  },
  {
    day: 54,
    passage: "Deuteronomy 1–2",
    focus: "Moses’ review of Israel’s journey and early instructions",
    quiz: {
      title: "📘 Deuteronomy 1–2 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "short-answer",
          question: "Where were the Israelites when Moses began his review of their journey?",
          correctAnswer: "In the desert plains of Moab across the Jordan"
        },
        {
          id: "q2",
          type: "multiple-choice",
          question: "How many spies did Moses send to explore the land of Canaan?",
          options: ["10", "12", "7", "40"],
          correctAnswer: "12"
        },
        {
          id: "q3",
          type: "true-false",
          question: "The Israelites immediately trusted Jehovah’s promise and entered the land of Canaan when the spies returned.",
          correctAnswer: false
        },
        {
          id: "q4",
          type: "short-answer",
          question: "Because of their rebellion, how many years were the Israelites made to wander in the wilderness?",
          correctAnswer: "40 years"
        },
        {
          id: "q5",
          type: "multiple-choice",
          question: "Which two men from the older generation were allowed to enter the Promised Land?",
          options: [
            "Moses and Aaron",
            "Joshua and Caleb",
            "Eleazar and Phinehas",
            "Nadab and Abihu"
          ],
          correctAnswer: "Joshua and Caleb"
        },
        {
          id: "q6",
          type: "true-false",
          question: "Jehovah told Israel not to fight against the descendants of Esau in Seir.",
          correctAnswer: true
        },
        {
          id: "q7",
          type: "multiple-choice",
          question: "What did Jehovah instruct Israel to do when passing through the land of Edom?",
          options: [
            "Take it by force",
            "Pay for food and water",
            "Avoid the land entirely",
            "Form an alliance"
          ],
          correctAnswer: "Pay for food and water"
        },
        {
          id: "q8",
          type: "short-answer",
          question: "What happened to all the men of war who left Egypt, except for Caleb and Joshua?",
          correctAnswer: "They died in the wilderness"
        },
        {
          id: "q9",
          type: "multiple-choice",
          question: "Which king of the Amorites refused Israel passage and was defeated at Jahaz?",
          options: [
            "Og",
            "Sihon",
            "Balak",
            "Adoni-Zedek"
          ],
          correctAnswer: "Sihon"
        },
        {
          id: "q10",
          type: "true-false",
          question: "Israel was told to engage in battle with Moab and Ammon during this journey.",
          correctAnswer: false
        }
      ]
    }
  },
  {
    day: 55,
    passage: "Deuteronomy 3–4",
    focus: "Israel’s victories east of the Jordan and Moses’ call to obey Jehovah’s laws",
    quiz: {
      title: "📘 Deuteronomy 3–4 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "Which king of Bashan did Israel defeat east of the Jordan?",
          options: ["Sihon", "Og", "Balak", "Amalek"],
          correctAnswer: "Og"
        },
        {
          id: "q2",
          type: "short-answer",
          question: "What was notable about King Og’s bed?",
          correctAnswer: "It was made of iron and about nine cubits long (around 13 feet)."
        },
        {
          id: "q3",
          type: "true-false",
          question: "The land of Gilead and Bashan was given to the tribes of Reuben and Gad only.",
          correctAnswer: false
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "Which tribes received the territory east of the Jordan?",
          options: [
            "Reuben, Gad, and half of Manasseh",
            "Judah and Benjamin",
            "Ephraim and Dan",
            "Issachar and Zebulun"
          ],
          correctAnswer: "Reuben, Gad, and half of Manasseh"
        },
        {
          id: "q5",
          type: "short-answer",
          question: "Why was Moses not allowed to enter the Promised Land?",
          correctAnswer: "Because he failed to sanctify Jehovah at the waters of Meribah."
        },
        {
          id: "q6",
          type: "true-false",
          question: "Jehovah told Israel they would find Him if they searched for Him with all their heart and soul.",
          correctAnswer: true
        },
        {
          id: "q7",
          type: "multiple-choice",
          question: "What did Moses warn Israel not to do regarding Jehovah’s commands?",
          options: [
            "Add to or take away from them",
            "Write them down",
            "Share them with foreigners",
            "Teach them to children"
          ],
          correctAnswer: "Add to or take away from them"
        },
        {
          id: "q8",
          type: "short-answer",
          question: "What example did Moses give of Israel’s God showing His power when giving the Law?",
          correctAnswer: "They heard His voice from the fire at Mount Horeb (Sinai)."
        },
        {
          id: "q9",
          type: "multiple-choice",
          question: "Which cities of refuge were appointed east of the Jordan?",
          options: [
            "Kedesh, Shechem, Hebron",
            "Bezer, Ramoth, Golan",
            "Jericho, Ai, Bethel",
            "Dan, Beersheba, Mizpah"
          ],
          correctAnswer: "Bezer, Ramoth, Golan"
        },
        {
          id: "q10",
          type: "true-false",
          question: "Moses reminded Israel that Jehovah is a consuming fire, a God who requires exclusive devotion.",
          correctAnswer: true
        }
      ]
    }
  },
  {
    day: 56,
    passage: "Deuteronomy 5–7",
    focus: "The Ten Commandments and call to exclusive devotion to Jehovah",
    quiz: {
      title: "📘 Deuteronomy 5–7 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "Where did Jehovah speak the Ten Commandments to Israel?",
          options: ["Mount Nebo", "Mount Horeb (Sinai)", "Mount Gerizim", "Mount Tabor"],
          correctAnswer: "Mount Horeb (Sinai)"
        },
        {
          id: "q2",
          type: "true-false",
          question: "The Ten Commandments were originally spoken directly by Jehovah to the people.",
          correctAnswer: true
        },
        {
          id: "q3",
          type: "short-answer",
          question: "Which commandment includes honoring parents so that one’s days may be long?",
          correctAnswer: "The fifth commandment"
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "What is the greatest commandment highlighted in Deuteronomy 6?",
          options: [
            "Love your fellow man as yourself",
            "Love Jehovah your God with all your heart, soul, and strength",
            "Do not murder",
            "Observe the Sabbath day"
          ],
          correctAnswer: "Love Jehovah your God with all your heart, soul, and strength"
        },
        {
          id: "q5",
          type: "short-answer",
          question: "What were Israelites commanded to do with Jehovah’s words to keep them in mind constantly?",
          correctAnswer: "Teach them to their children, speak of them at home and on the road, and write them on doorposts and gates."
        },
        {
          id: "q6",
          type: "true-false",
          question: "Israel was warned not to forget Jehovah when they enjoyed the prosperity of the land.",
          correctAnswer: true
        },
        {
          id: "q7",
          type: "multiple-choice",
          question: "Why did Jehovah choose Israel as His people according to Deuteronomy 7?",
          options: [
            "Because they were the most numerous nation",
            "Because of His love and His oath to their forefathers",
            "Because of their military strength",
            "Because of their wisdom"
          ],
          correctAnswer: "Because of His love and His oath to their forefathers"
        },
        {
          id: "q8",
          type: "short-answer",
          question: "What were the Israelites commanded to do with the idols and sacred poles of the nations?",
          correctAnswer: "Tear them down, smash them, and burn them."
        },
        {
          id: "q9",
          type: "true-false",
          question: "Jehovah promised to remove all nations from the land of Canaan in a single year.",
          correctAnswer: false
        },
        {
          id: "q10",
          type: "multiple-choice",
          question: "What did Jehovah promise regarding Israel’s health if they obeyed Him?",
          options: [
            "They would never need doctors",
            "He would keep sickness away and bless their crops and livestock",
            "They would live forever",
            "They would not have to work the land"
          ],
          correctAnswer: "He would keep sickness away and bless their crops and livestock"
        }
      ]
    }
  },
  {
    day: 57,
    passage: "Deuteronomy 8–10",
    focus: "Remembering Jehovah’s guidance and the call for heart devotion",
    quiz: {
      title: "📘 Deuteronomy 8–10 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "According to Deuteronomy 8, why did Jehovah allow Israel to wander in the wilderness for 40 years?",
          options: [
            "To punish them for idolatry",
            "To humble them and test what was in their heart",
            "To find a better route",
            "To give the land time to rest"
          ],
          correctAnswer: "To humble them and test what was in their heart"
        },
        {
          id: "q2",
          type: "short-answer",
          question: "What lesson about sustenance did Jehovah teach by providing manna?",
          correctAnswer: "That man does not live on bread alone but on every word from Jehovah’s mouth."
        },
        {
          id: "q3",
          type: "true-false",
          question: "Israel was warned that prosperity in the land could cause them to forget Jehovah.",
          correctAnswer: true
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "Why was Israel reminded not to think they were receiving the land because of their own righteousness?",
          options: [
            "Because the nations were stronger",
            "Because they were a stubborn people",
            "Because they were chosen only for their numbers",
            "Because Moses asked Jehovah to do so"
          ],
          correctAnswer: "Because they were a stubborn people"
        },
        {
          id: "q5",
          type: "short-answer",
          question: "What sin did Israel commit while Moses was on Mount Sinai receiving the tablets?",
          correctAnswer: "They made and worshiped a golden calf."
        },
        {
          id: "q6",
          type: "true-false",
          question: "Jehovah granted Moses’ intercession and did not destroy Israel after the golden calf incident.",
          correctAnswer: true
        },
        {
          id: "q7",
          type: "multiple-choice",
          question: "What did Jehovah ask of Israel",
          options: [
            "To fear Jehovah, walk in all His ways, love Him, and serve Him with all heart and soul",
            "To offer daily sacrifices",
            "To conquer more nations",
            "To build a temple"
          ],
          correctAnswer: "To fear Jehovah, walk in all His ways, love Him, and serve Him with all heart and soul"
        },
        {
          id: "q8",
          type: "short-answer",
          question: "What physical symbol did Moses place in the ark after the second set of tablets was given?",
          correctAnswer: "The two stone tablets of the Ten Commandments."
        },
        {
          id: "q9",
          type: "true-false",
          question: "Jehovah delights only in the mighty and powerful, not in the humble.",
          correctAnswer: false
        },
        {
          id: "q10",
          type: "multiple-choice",
          question: "What did Moses say Jehovah shows to the fatherless, the widow, and the foreign resident?",
          options: [
            "Justice and love",
            "Special sacrifices",
            "Wealth and power",
            "Punishment for their sins"
          ],
          correctAnswer: "Justice and love"
        }
      ]
    }
  },
  {
    day: 58,
    passage: "Deuteronomy 11–13",
    focus: "Love for Jehovah, blessings for obedience, and warnings against idolatry",
    quiz: {
      title: "📘 Deuteronomy 11–13 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "What did Moses urge Israel to do with all their heart and soul in Deuteronomy 11?",
          options: [
            "Remember the Exodus only",
            "Love and serve Jehovah",
            "Offer sacrifices daily",
            "Travel to Mount Sinai yearly"
          ],
          correctAnswer: "Love and serve Jehovah"
        },
        {
          id: "q2",
          type: "short-answer",
          question: "Which two mountains were chosen to proclaim blessings and curses?",
          correctAnswer: "Mount Gerizim for blessings and Mount Ebal for curses."
        },
        {
          id: "q3",
          type: "true-false",
          question: "Jehovah promised rain for the land in its season if Israel obeyed His commands.",
          correctAnswer: true
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "Where did Jehovah choose to place His name and establish His worship?",
          options: [
            "In each tribe’s territory",
            "In the place He would choose",
            "At Mount Gerizim",
            "At the tent of meeting only"
          ],
          correctAnswer: "In the place He would choose"
        },
        {
          id: "q5",
          type: "short-answer",
          question: "What were the Israelites forbidden to eat along with their meat?",
          correctAnswer: "The blood"
        },
        {
          id: "q6",
          type: "true-false",
          question: "If a prophet encouraged worship of other gods, he was still to be respected as a prophet of Jehovah.",
          correctAnswer: false
        },
        {
          id: "q7",
          type: "multiple-choice",
          question: "How were the Israelites to treat a city that turned to worship other gods?",
          options: [
            "Warn them and forgive",
            "Destroy the city completely and burn it",
            "Offer them sacrifices of atonement",
            "Move away from it"
          ],
          correctAnswer: "Destroy the city completely and burn it"
        },
        {
          id: "q8",
          type: "short-answer",
          question: "What did Moses tell Israel to do with Jehovah’s words to keep them close to their hearts and minds?",
          correctAnswer: "Bind them as a sign on their hand, as a frontlet between their eyes, and write them on their doorposts and gates."
        },
        {
          id: "q9",
          type: "true-false",
          question: "Israel was permitted to worship Jehovah in any way they preferred, as long as it was sincere.",
          correctAnswer: false
        },
        {
          id: "q10",
          type: "multiple-choice",
          question: "What reason did Moses give for obeying Jehovah’s commands and avoiding idolatry?",
          options: [
            "Because of fear of neighboring nations",
            "Because obedience brings life and blessing in the land",
            "Because Moses demanded it personally",
            "Because it was a new tradition"
          ],
          correctAnswer: "Because obedience brings life and blessing in the land"
        }
      ]
    }
  },
  {
    day: 59,
    passage: "Deuteronomy 14–16",
    focus: "Clean and unclean foods, tithes, and Jehovah’s festivals",
    quiz: {
      title: "📘 Deuteronomy 14–16 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "Which animals were considered clean for the Israelites to eat?",
          options: [
            "Those with split hooves and that chew the cud",
            "All sea creatures",
            "All birds except vultures",
            "Any animal they chose if offered to Jehovah"
          ],
          correctAnswer: "Those with split hooves and that chew the cud"
        },
        {
          id: "q2",
          type: "true-false",
          question: "Israelites were allowed to eat any fish found in rivers and seas, regardless of fins or scales.",
          correctAnswer: false
        },
        {
          id: "q3",
          type: "short-answer",
          question: "What was the purpose of the special tithe every third year?",
          correctAnswer: "To provide for the Levites, foreigners, orphans, and widows."
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "At the end of every seven years, what was to happen regarding debts?",
          options: [
            "They were to be doubled",
            "They were to be canceled",
            "They were to be paid in full",
            "They were to be transferred to the Levites"
          ],
          correctAnswer: "They were to be canceled"
        },
        {
          id: "q5",
          type: "true-false",
          question: "Hebrew slaves were to be released in the seventh year of service and provided with generous supplies.",
          correctAnswer: true
        },
        {
          id: "q6",
          type: "short-answer",
          question: "Which three annual festivals were all Israelite males required to attend?",
          correctAnswer: "The Festival of Unleavened Bread, the Festival of Weeks, and the Festival of Booths."
        },
        {
          id: "q7",
          type: "multiple-choice",
          question: "Where were the Israelites commanded to celebrate these festivals?",
          options: [
            "At their local towns",
            "At the place Jehovah would choose",
            "Anywhere they desired",
            "At Mount Horeb"
          ],
          correctAnswer: "At the place Jehovah would choose"
        },
        {
          id: "q8",
          type: "true-false",
          question: "No one was to appear before Jehovah empty-handed at these festivals; each was to give in proportion to Jehovah’s blessing.",
          correctAnswer: true
        },
        {
          id: "q9",
          type: "short-answer",
          question: "During the Festival of Booths, how many days were the Israelites to rejoice before Jehovah?",
          correctAnswer: "Seven days"
        },
        {
          id: "q10",
          type: "multiple-choice",
          question: "What quality was emphasized for judges appointed in Israel according to Deuteronomy 16?",
          options: [
            "They must be wealthy",
            "They must not show partiality or accept bribes",
            "They must be from the tribe of Levi",
            "They must serve only one term"
          ],
          correctAnswer: "They must not show partiality or accept bribes"
        }
      ]
    }
  },
  {
    day: 60,
    passage: "Deuteronomy 17–19",
    focus: "Justice, kingship, and cities of refuge",
    quiz: {
      title: "📘 Deuteronomy 17–19 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "What was the penalty for worshipping other gods or the sun, moon, or stars?",
          options: [
            "A fine of silver",
            "Exile from Israel",
            "Death by stoning after proper investigation",
            "Seven days of fasting"
          ],
          correctAnswer: "Death by stoning after proper investigation"
        },
        {
          id: "q2",
          type: "true-false",
          question: "Cases too difficult for local judges were to be taken to the priests, the Levites, and the judge in office.",
          correctAnswer: true
        },
        {
          id: "q3",
          type: "short-answer",
          question: "What were the requirements Jehovah gave for a king of Israel?",
          correctAnswer: "He must be chosen by Jehovah, an Israelite, not multiply horses, wives, or silver and gold, and must write and read a copy of the Law daily."
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "What kind of prophet did Jehovah promise to raise up for Israel?",
          options: [
            "One like Moses from among their brothers",
            "A foreign prophet with great wisdom",
            "One of the Levite priests only",
            "A prophet who would reign as king"
          ],
          correctAnswer: "One like Moses from among their brothers"
        },
        {
          id: "q5",
          type: "true-false",
          question: "False prophets who spoke in Jehovah’s name without His command were to be put to death.",
          correctAnswer: true
        },
        {
          id: "q6",
          type: "short-answer",
          question: "How could the people know if a prophet’s words were not from Jehovah?",
          correctAnswer: "If the prophet’s prediction did not come true."
        },
        {
          id: "q7",
          type: "multiple-choice",
          question: "Why were cities of refuge established?",
          options: [
            "To protect those who killed unintentionally",
            "To house the Levites",
            "To punish false prophets",
            "To store tithes"
          ],
          correctAnswer: "To protect those who killed unintentionally"
        },
        {
          id: "q8",
          type: "short-answer",
          question: "How many cities of refuge were to be set apart in the land?",
          correctAnswer: "Three, and three more if the territory was expanded."
        },
        {
          id: "q9",
          type: "true-false",
          question: "Two or three witnesses were required to establish a legal matter.",
          correctAnswer: true
        },
        {
          id: "q10",
          type: "multiple-choice",
          question: "What was to be done to a malicious witness who falsely accused someone?",
          options: [
            "He was to flee to a city of refuge",
            "He was to receive the punishment he intended for the other person",
            "He was to pay a heavy fine",
            "He was to be exiled for life"
          ],
          correctAnswer: "He was to receive the punishment he intended for the other person"
        }
      ]
    }
  },
  {
    day: 61,
    passage: "Deuteronomy 20–22",
    focus: "Laws for warfare and various social regulations",
    quiz: {
      title: "📘 Deuteronomy 20–22 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "Before going to battle, who was to address the army and encourage them?",
          options: [
            "The tribal elders",
            "The king",
            "The priest",
            "The captain of the guard"
          ],
          correctAnswer: "The priest"
        },
        {
          id: "q2",
          type: "true-false",
          question: "Men who had built a new house, planted a vineyard, or become engaged but not married were excused from battle.",
          correctAnswer: true
        },
        {
          id: "q3",
          type: "short-answer",
          question: "What were the Israelites to offer to distant cities before attacking?",
          correctAnswer: "Terms of peace"
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "What was to be done to the trees bearing fruit in a siege?",
          options: [
            "Cut them down for siege works",
            "Spare them and do not destroy them",
            "Burn them for fuel",
            "Uproot them for planting elsewhere"
          ],
          correctAnswer: "Spare them and do not destroy them"
        },
        {
          id: "q5",
          type: "true-false",
          question: "A slain person found in the open country required the elders to perform a ritual with a young cow to atone for innocent blood.",
          correctAnswer: true
        },
        {
          id: "q6",
          type: "short-answer",
          question: "If an Israelite man wished to marry a captive woman, what was she required to do first?",
          correctAnswer: "Shave her head, trim her nails, and mourn her parents for a month."
        },
        {
          id: "q7",
          type: "multiple-choice",
          question: "What was to happen to a stubborn and rebellious son who refused to obey his parents?",
          options: [
            "He was to be banished from the camp",
            "He was to work for the Levites",
            "He was to be stoned to death by the men of his city",
            "He was to fast for 40 days"
          ],
          correctAnswer: "He was to be stoned to death by the men of his city"
        },
        {
          id: "q8",
          type: "true-false",
          question: "A man was forbidden to wear the clothing of a woman, and a woman that of a man.",
          correctAnswer: true
        },
        {
          id: "q9",
          type: "short-answer",
          question: "If someone found a neighbor’s lost animal, what were they required to do?",
          correctAnswer: "Take it back to its owner or care for it until the owner was found."
        },
        {
          id: "q10",
          type: "multiple-choice",
          question: "What was the punishment for a man who falsely accused his wife of not being a virgin?",
          options: [
            "He was to divorce her",
            "He was fined and forbidden to divorce her",
            "He was exiled",
            "He was publicly whipped"
          ],
          correctAnswer: "He was fined and forbidden to divorce her"
        }
      ]
    }
  },
  {
    day: 62,
    passage: "Deuteronomy 23–26",
    focus: "Community regulations, vows, tithes, and the firstfruits offering",
    quiz: {
      title: "📘 Deuteronomy 23–26 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "According to Deuteronomy 23, who was excluded from the congregation of Jehovah up to the tenth generation?",
          options: [
            "Ammonites and Moabites",
            "Levites",
            "Foreigners who converted",
            "Kenites"
          ],
          correctAnswer: "Ammonites and Moabites"
        },
        {
          id: "q2",
          type: "true-false",
          question: "Israelite soldiers were to keep the camp clean and cover their excrement when relieving themselves.",
          correctAnswer: true
        },
        {
          id: "q3",
          type: "short-answer",
          question: "What was Israel commanded regarding vows made to Jehovah?",
          correctAnswer: "Fulfill them promptly; not fulfilling was a sin."
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "What was required of a man who divorced his wife and she married another man?",
          options: [
            "He could take her back if she was divorced again",
            "He could never take her back as his wife",
            "He had to pay her a fine",
            "He had to remain unmarried"
          ],
          correctAnswer: "He could never take her back as his wife"
        },
        {
          id: "q5",
          type: "true-false",
          question: "A worker was permitted to eat grapes or grain while working in a neighbor’s field, but not to take any in a container.",
          correctAnswer: true
        },
        {
          id: "q6",
          type: "short-answer",
          question: "What was the maximum number of lashes a guilty man could receive?",
          correctAnswer: "Forty lashes"
        },
        {
          id: "q7",
          type: "multiple-choice",
          question: "What was the law regarding an ox when it was treading out grain?",
          options: [
            "It must be muzzled",
            "It must not be muzzled",
            "It must be sacrificed after work",
            "It must be tied at the threshing floor"
          ],
          correctAnswer: "It must not be muzzled"
        },
        {
          id: "q8",
          type: "true-false",
          question: "The Israelites were to remember how Amalek attacked them and to blot out Amalek’s memory.",
          correctAnswer: true
        },
        {
          id: "q9",
          type: "short-answer",
          question: "What offering were the Israelites to present when they entered the land and harvested their first crops?",
          correctAnswer: "A basket of the firstfruits presented before Jehovah with a declaration of His deliverance."
        },
        {
          id: "q10",
          type: "multiple-choice",
          question: "In the third year, called the year of the special tithe, where were the tithes to be placed?",
          options: [
            "Stored in the tabernacle",
            "Given to the Levites, foreigners, orphans, and widows within their towns",
            "Offered on the altar",
            "Buried as a sacred offering"
          ],
          correctAnswer: "Given to the Levites, foreigners, orphans, and widows within their towns"
        }
      ]
    }
  },
  {
    day: 63,
    passage: "Deuteronomy 27–28",
    focus: "Blessings for obedience and curses for disobedience",
    quiz: {
      title: "📘 Deuteronomy 27–28 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "short-answer",
          question: "What were the Israelites to set up on Mount Ebal and coat with plaster?",
          correctAnswer: "Large stones with the Law written on them"
        },
        {
          id: "q2",
          type: "true-false",
          question: "An altar of uncut stones was to be built on Mount Ebal for burnt offerings to Jehovah.",
          correctAnswer: true
        },
        {
          id: "q3",
          type: "multiple-choice",
          question: "What did the Levites proclaim to all the men of Israel?",
          options: [
            "Curses for those who disobey Jehovah’s commandments",
            "A list of tribal leaders",
            "Instructions for warfare",
            "The genealogy of Moses"
          ],
          correctAnswer: "Curses for those who disobey Jehovah’s commandments"
        },
        {
          id: "q4",
          type: "short-answer",
          question: "What would Israel experience if they fully obeyed Jehovah’s commandments?",
          correctAnswer: "Blessings in the city and field, prosperity, victory over enemies, and Jehovah’s favor."
        },
        {
          id: "q5",
          type: "true-false",
          question: "Jehovah promised that Israel would be the head and not the tail if they obeyed His voice.",
          correctAnswer: true
        },
        {
          id: "q6",
          type: "multiple-choice",
          question: "What was one of the curses for disobedience?",
          options: [
            "Abundant rain in its season",
            "Confusion, disease, drought, and defeat by enemies",
            "Immediate entry into the Promised Land",
            "Rich harvests and peace"
          ],
          correctAnswer: "Confusion, disease, drought, and defeat by enemies"
        },
        {
          id: "q7",
          type: "short-answer",
          question: "Which nation did Jehovah warn would besiege Israel and cause severe famine if they were disobedient?",
          correctAnswer: "A nation from far away, swift as an eagle (commonly understood as Babylon)."
        },
        {
          id: "q8",
          type: "multiple-choice",
          question: "What was the overall purpose of these blessings and curses?",
          options: [
            "To show the importance of obedience to Jehovah’s covenant",
            "To frighten neighboring nations",
            "To provide Israel with military tactics",
            "To explain agricultural techniques"
          ],
          correctAnswer: "To show the importance of obedience to Jehovah’s covenant"
        }
      ]
    }
  },
  {
    day: 64,
    passage: "Deuteronomy 29–31",
    focus: "Renewing the covenant and Moses’ final instructions",
    quiz: {
      title: "📘 Deuteronomy 29–31 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "Where did Moses assemble Israel to enter into a covenant with Jehovah?",
          options: ["Moab", "Mount Ebal", "Mount Gerizim", "Jericho"],
          correctAnswer: "Moab"
        },
        {
          id: "q2",
          type: "true-false",
          question: "Moses reminded Israel of the signs and miracles Jehovah performed in Egypt and the wilderness.",
          correctAnswer: true
        },
        {
          id: "q3",
          type: "short-answer",
          question: "What warning was given about anyone who secretly turned to idolatry?",
          correctAnswer: "Jehovah would single them out for calamity and all the curses written in the Law would come upon them."
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "What did Moses tell Israel about Jehovah’s commandments?",
          options: [
            "They are too difficult to follow",
            "They are near, in their mouth and heart, so they can observe them",
            "They require angelic help to obey",
            "They are only for the Levites"
          ],
          correctAnswer: "They are near, in their mouth and heart, so they can observe them"
        },
        {
          id: "q5",
          type: "true-false",
          question: "Jehovah set before the people a choice between life and death, blessing and curse.",
          correctAnswer: true
        },
        {
          id: "q6",
          type: "short-answer",
          question: "Who did Jehovah appoint as Moses’ successor to lead Israel?",
          correctAnswer: "Joshua"
        },
        {
          id: "q7",
          type: "multiple-choice",
          question: "How often was the entire Law to be read to all Israel?",
          options: [
            "Every year during Passover",
            "Every seven years at the Festival of Booths",
            "Every Jubilee year",
            "Monthly on the new moon"
          ],
          correctAnswer: "Every seven years at the Festival of Booths"
        },
        {
          id: "q8",
          type: "true-false",
          question: "Jehovah told Moses that after his death the people would remain faithful forever.",
          correctAnswer: false
        },
        {
          id: "q9",
          type: "multiple-choice",
          question: "What assurance did Jehovah give Joshua when commissioning him?",
          options: [
            "He would send angels to fight every battle",
            "He would be with him and never abandon him",
            "He would grant him wealth and long life",
            "He would speak to him only through Moses’ writings"
          ],
          correctAnswer: "He would be with him and never abandon him"
        }
      ]
    }
  },
  {
    day: 65,
    passage: "Deuteronomy 32",
    focus: "The Song of Moses and Jehovah’s faithfulness",
    quiz: {
      title: "📘 Deuteronomy 32 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "What does the Song of Moses begin by calling heaven and earth to do?",
          options: [
            "Give praise to Israel",
            "Give ear and listen",
            "Bring rain and dew",
            "Judge the nations"
          ],
          correctAnswer: "Give ear and listen"
        },
        {
          id: "q2",
          type: "true-false",
          question: "Moses describes Jehovah as a perfect Rock whose ways are justice.",
          correctAnswer: true
        },
        {
          id: "q3",
          type: "short-answer",
          question: "How did Jehovah find and care for Israel, according to the song?",
          correctAnswer: "He found them in a desert land and encircled, cared for, and protected them like the pupil of His eye."
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "What did Israel do after being satisfied with Jehovah’s blessings?",
          options: [
            "Remained faithful",
            "Grew fat and rebelled",
            "Built stronger altars",
            "Offered more sacrifices"
          ],
          correctAnswer: "Grew fat and rebelled"
        },
        {
          id: "q5",
          type: "true-false",
          question: "Jehovah said He would hide His face because of Israel’s unfaithfulness.",
          correctAnswer: true
        },
        {
          id: "q6",
          type: "short-answer",
          question: "What did Jehovah say belongs to Him and not to man?",
          correctAnswer: "Vengeance and retribution."
        },
        {
          id: "q7",
          type: "multiple-choice",
          question: "What does Jehovah promise regarding His servants in the end?",
          options: [
            "He will ignore them",
            "He will have pity and avenge their blood",
            "He will scatter them forever",
            "He will make them a great nation immediately"
          ],
          correctAnswer: "He will have pity and avenge their blood"
        },
        {
          id: "q8",
          type: "true-false",
          question: "Moses was told he would cross the Jordan with the people after singing the song.",
          correctAnswer: false
        },
        {
          id: "q9",
          type: "short-answer",
          question: "Where was Moses told he would die after viewing the land of Canaan?",
          correctAnswer: "On Mount Nebo."
        },
        {
          id: "q10",
          type: "multiple-choice",
          question: "What did Moses urge the people to do with the words of the song?",
          options: [
            "Teach them to their children and apply them",
            "Sing them only during festivals",
            "Record them secretly",
            "Forget them after crossing the Jordan"
          ],
          correctAnswer: "Teach them to their children and apply them"
        }
      ]
    },

  },
  {
    day: 66,
    passage: "Deuteronomy 33–34",
    focus: "Moses’ final blessings and his death",
    quiz: {
      title: "📘 Deuteronomy 33–34 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "Before his death, what did Moses do for the tribes of Israel?",
          options: [
            "Appointed new judges",
            "Gave each tribe a blessing",
            "Built a new altar",
            "Rewrote the Ten Commandments"
          ],
          correctAnswer: "Gave each tribe a blessing"
        },
        {
          id: "q2",
          type: "true-false",
          question: "Moses described Jehovah as a king who loves His people and surrounds them with protection.",
          correctAnswer: true
        },
        {
          id: "q3",
          type: "short-answer",
          question: "Which tribe did Moses bless as the one to teach Jehovah’s judgments and offer incense?",
          correctAnswer: "The tribe of Levi"
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "Which tribe was promised security and the favor of Jehovah dwelling with them?",
          options: [
            "Benjamin",
            "Judah",
            "Ephraim",
            "Naphtali"
          ],
          correctAnswer: "Benjamin"
        },
        {
          id: "q5",
          type: "true-false",
          question: "Moses blessed Joseph with the choicest products of the land and favor of the One residing in the thornbush.",
          correctAnswer: true
        },
        {
          id: "q6",
          type: "short-answer",
          question: "From which mountain did Jehovah show Moses the entire land of Canaan before his death?",
          correctAnswer: "Mount Nebo (from the summit of Pisgah)"
        },
        {
          id: "q7",
          type: "multiple-choice",
          question: "Where was Moses buried?",
          options: [
            "In the valley in the land of Moab, opposite Beth-peor",
            "On Mount Nebo’s summit",
            "In the camp of Israel",
            "Inside the tabernacle courtyard"
          ],
          correctAnswer: "In the valley in the land of Moab, opposite Beth-peor"
        },
        {
          id: "q8",
          type: "true-false",
          question: "The Israelites knew the exact burial place of Moses and honored it with a monument.",
          correctAnswer: false
        },
        {
          id: "q9",
          type: "short-answer",
          question: "How old was Moses when he died, and what was notable about his condition?",
          correctAnswer: "He was 120 years old, and his eyesight was undimmed and his strength was not gone."
        },
        {
          id: "q10",
          type: "multiple-choice",
          question: "Who succeeded Moses as leader of Israel after his death?",
          options: [
            "Aaron",
            "Joshua",
            "Caleb",
            "Eleazar"
          ],
          correctAnswer: "Joshua"
        }
      ]
    }
  },
  {
    day: 67,
    passage: "Joshua 1–4",
    focus: "Joshua’s commission and Israel’s crossing of the Jordan",
    quiz: {
      title: "📘 Joshua 1–4 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "What key command did Jehovah repeatedly give Joshua as he prepared to lead Israel?",
          options: [
            "Be strong and courageous",
            "Offer daily sacrifices",
            "Travel to Mount Sinai",
            "Build a new altar"
          ],
          correctAnswer: "Be strong and courageous"
        },
        {
          id: "q2",
          type: "true-false",
          question: "Joshua was instructed to meditate on the book of the Law day and night.",
          correctAnswer: true
        },
        {
          id: "q3",
          type: "short-answer",
          question: "Which woman hid the Israelite spies in Jericho and helped them escape?",
          correctAnswer: "Rahab"
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "What sign did Rahab use so the Israelites would spare her household?",
          options: [
            "A silver lamp in the window",
            "A scarlet cord tied in the window",
            "A white cloth over the door",
            "A branch of hyssop on the roof"
          ],
          correctAnswer: "A scarlet cord tied in the window"
        },
        {
          id: "q5",
          type: "true-false",
          question: "The Israelites crossed the Jordan River when it was at flood stage.",
          correctAnswer: true
        },
        {
          id: "q6",
          type: "short-answer",
          question: "What happened to the waters of the Jordan when the priests carrying the Ark stepped in?",
          correctAnswer: "The waters stopped flowing and stood in a heap upstream."
        },
        {
          id: "q7",
          type: "multiple-choice",
          question: "How many stones were taken from the Jordan to set up as a memorial at Gilgal?",
          options: ["7", "10", "12", "40"],
          correctAnswer: "12"
        },
        {
          id: "q8",
          type: "true-false",
          question: "The twelve stones were set up so future generations would remember how Jehovah led Israel across the Jordan.",
          correctAnswer: true
        },
        {
          id: "q9",
          type: "short-answer",
          question: "Which tribes were required to cross over armed ahead of their brothers to help in the conquest?",
          correctAnswer: "The tribes of Reuben, Gad, and the half-tribe of Manasseh."
        },
        {
          id: "q10",
          type: "multiple-choice",
          question: "What did the people of Jericho feel after hearing how the Jordan’s waters stopped for Israel?",
          options: [
            "They rejoiced",
            "Their hearts melted and they lost courage",
            "They prepared to ally with Israel",
            "They fled the city"
          ],
          correctAnswer: "Their hearts melted and they lost courage"
        }
      ]
    }
  },
  {
    day: 68,
    passage: "Joshua 5–7",
    focus: "Renewal of the covenant, the fall of Jericho, and Achan’s sin",
    quiz: {
      title: "📘 Joshua 5–7 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "Why did the kings of the Amorites and Canaanites lose heart before Israel crossed the Jordan?",
          options: [
            "They saw Israel’s large army",
            "They heard Jehovah dried up the Jordan River",
            "They were struck with a plague",
            "They ran out of food"
          ],
          correctAnswer: "They heard Jehovah dried up the Jordan River"
        },
        {
          id: "q2",
          type: "true-false",
          question: "All the males born in the wilderness were circumcised at Gilgal before celebrating the Passover.",
          correctAnswer: true
        },
        {
          id: "q3",
          type: "short-answer",
          question: "Who appeared to Joshua near Jericho as the prince of Jehovah’s army?",
          correctAnswer: "An angelic prince identified as the chief of Jehovah’s army."
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "How many days were the Israelites to march around Jericho before the walls collapsed?",
          options: ["3 days", "6 days", "7 days", "12 days"],
          correctAnswer: "7 days"
        },
        {
          id: "q5",
          type: "true-false",
          question: "The walls of Jericho fell after the Israelites shouted and the priests blew the horns on the seventh day.",
          correctAnswer: true
        },
        {
          id: "q6",
          type: "short-answer",
          question: "Who and her family were spared when Jericho was destroyed?",
          correctAnswer: "Rahab and her household."
        },
        {
          id: "q7",
          type: "multiple-choice",
          question: "What did Achan secretly take from Jericho that was devoted to destruction?",
          options: [
            "A golden calf",
            "Silver, gold, and a beautiful garment from Shinar",
            "Weapons of the enemy",
            "Sacred scrolls"
          ],
          correctAnswer: "Silver, gold, and a beautiful garment from Shinar"
        },
        {
          id: "q8",
          type: "true-false",
          question: "Because of Achan’s sin, Israel was initially defeated when attacking Ai.",
          correctAnswer: true
        },
        {
          id: "q9",
          type: "short-answer",
          question: "How was Achan punished for taking the banned items?",
          correctAnswer: "He and his family were stoned and then burned with fire."
        },
        {
          id: "q10",
          type: "multiple-choice",
          question: "What did Jehovah tell Joshua to do to find the guilty person after Israel’s defeat?",
          options: [
            "Cast lots by tribes, clans, and households",
            "Search every tent",
            "Offer a special sacrifice",
            "Fast for seven days"
          ],
          correctAnswer: "Cast lots by tribes, clans, and households"
        }
      ]
    }
  },
  {
    day: 69,
    passage: "Joshua 8–9",
    focus: "Victory at Ai and the treaty with the Gibeonites",
    quiz: {
      title: "📘 Joshua 8–9 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "What strategy did Jehovah give Joshua to defeat Ai?",
          options: [
            "A frontal assault only",
            "An ambush behind the city",
            "Poisoning the city’s water",
            "Waiting for a famine"
          ],
          correctAnswer: "An ambush behind the city"
        },
        {
          id: "q2",
          type: "true-false",
          question: "Joshua extended his spear as a signal for the ambush to attack Ai.",
          correctAnswer: true
        },
        {
          id: "q3",
          type: "short-answer",
          question: "Where did Joshua build an altar after the victory at Ai?",
          correctAnswer: "Mount Ebal"
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "What did Joshua read to all the people after building the altar?",
          options: [
            "The Song of Moses",
            "The Law of Moses with blessings and curses",
            "The genealogy of the tribes",
            "A treaty with nearby nations"
          ],
          correctAnswer: "The Law of Moses with blessings and curses"
        },
        {
          id: "q5",
          type: "true-false",
          question: "The Gibeonites pretended to be from a distant land to make a treaty with Israel.",
          correctAnswer: true
        },
        {
          id: "q6",
          type: "short-answer",
          question: "What items did the Gibeonites use to convince Israel they had traveled a long distance?",
          correctAnswer: "Worn-out sacks, old wineskins, dry moldy bread, and patched sandals and clothes."
        },
        {
          id: "q7",
          type: "multiple-choice",
          question: "Why did the Israelites make a treaty with the Gibeonites without realizing the truth?",
          options: [
            "They were deceived by false signs",
            "They did not inquire of Jehovah",
            "They were afraid of war",
            "They wanted allies for trade"
          ],
          correctAnswer: "They did not inquire of Jehovah"
        },
        {
          id: "q8",
          type: "true-false",
          question: "After discovering the deception, Israel immediately broke the treaty with Gibeon.",
          correctAnswer: false
        },
        {
          id: "q9",
          type: "short-answer",
          question: "What roles were the Gibeonites assigned after their deception was discovered?",
          correctAnswer: "Woodcutters and water carriers for the congregation and for Jehovah’s altar."
        },
        {
          id: "q10",
          type: "multiple-choice",
          question: "How did the Israelites react when they learned of the treaty with the Gibeonites?",
          options: [
            "They rejoiced at gaining allies",
            "They grumbled against the leaders",
            "They planned an attack on Gibeon",
            "They sought a sign from Jehovah"
          ],
          correctAnswer: "They grumbled against the leaders"
        }
      ]
    }
  },
  {
    day: 70,
    passage: "Joshua 10–12",
    focus: "Southern and northern victories and the list of conquered kings",
    quiz: {
      title: "📘 Joshua 10–12 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "Why did the five Amorite kings join forces to attack Gibeon?",
          options: [
            "Because Gibeon made peace with Israel",
            "Because Gibeon refused to pay tribute",
            "Because they wanted Gibeon’s gold",
            "Because Gibeon insulted them"
          ],
          correctAnswer: "Because Gibeon made peace with Israel"
        },
        {
          id: "q2",
          type: "true-false",
          question: "Jehovah caused a hailstorm that killed more enemies than the Israelites killed by the sword.",
          correctAnswer: true
        },
        {
          id: "q3",
          type: "short-answer",
          question: "What miraculous event did Joshua pray for during the battle at Gibeon?",
          correctAnswer: "That the sun and moon stand still to prolong the day."
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "Where did Joshua command the five captured kings to be brought and executed?",
          options: [
            "Jericho",
            "Makkedah",
            "Ai",
            "Gilgal"
          ],
          correctAnswer: "Makkedah"
        },
        {
          id: "q5",
          type: "true-false",
          question: "Joshua defeated all the southern cities in one campaign because Jehovah fought for Israel.",
          correctAnswer: true
        },
        {
          id: "q6",
          type: "short-answer",
          question: "Who led the coalition of northern kings against Israel?",
          correctAnswer: "Jabin king of Hazor."
        },
        {
          id: "q7",
          type: "multiple-choice",
          question: "What did Joshua do to the horses and chariots of the northern kings as Jehovah commanded?",
          options: [
            "Kept them for Israel’s army",
            "Hamstrung the horses and burned the chariots",
            "Sold them to neighboring nations",
            "Gave them to the Levites"
          ],
          correctAnswer: "Hamstrung the horses and burned the chariots"
        },
        {
          id: "q8",
          type: "true-false",
          question: "Joshua captured Hazor and burned it, making it the only northern city burned at that time.",
          correctAnswer: true
        },
        {
          id: "q9",
          type: "short-answer",
          question: "How many kings in total are listed as defeated by Moses and Joshua?",
          correctAnswer: "Thirty-one kings."
        },
        {
          id: "q10",
          type: "multiple-choice",
          question: "What key reason is given for Israel’s victories over so many kings and cities?",
          options: [
            "They had superior weapons",
            "Jehovah fought for Israel",
            "They had spies in every city",
            "Their numbers were greater"
          ],
          correctAnswer: "Jehovah fought for Israel"
        }
      ]
    }
  },
  {
    day: 71,
    passage: "Joshua 13–15",
    focus: "Division of the land east and west of the Jordan",
    quiz: {
      title: "📘 Joshua 13–15 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "Why did Jehovah tell Joshua that much of the land still needed to be taken?",
          options: [
            "Joshua was very old",
            "Israel lacked enough soldiers",
            "The enemies were stronger",
            "The Levites refused to fight"
          ],
          correctAnswer: "Joshua was very old"
        },
        {
          id: "q2",
          type: "true-false",
          question: "The tribes of Reuben, Gad, and the half-tribe of Manasseh received their inheritance east of the Jordan.",
          correctAnswer: true
        },
        {
          id: "q3",
          type: "short-answer",
          question: "Which tribe received no territorial inheritance but Jehovah Himself as their portion?",
          correctAnswer: "The tribe of Levi"
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "Who requested the hill country of Hebron as his inheritance because he trusted Jehovah when others feared?",
          options: [
            "Joshua",
            "Caleb",
            "Eleazar",
            "Othniel"
          ],
          correctAnswer: "Caleb"
        },
        {
          id: "q5",
          type: "true-false",
          question: "Caleb said he was as strong at 85 as he was when Moses first sent him to spy the land.",
          correctAnswer: true
        },
        {
          id: "q6",
          type: "short-answer",
          question: "Which city became the inheritance of Caleb, as promised by Moses?",
          correctAnswer: "Hebron"
        },
        {
          id: "q7",
          type: "multiple-choice",
          question: "What unique feature marked Judah’s southern boundary?",
          options: [
            "The Great Sea",
            "The wilderness of Zin and the Dead Sea",
            "Mount Gerizim",
            "The Jordan River only"
          ],
          correctAnswer: "The wilderness of Zin and the Dead Sea"
        },
        {
          id: "q8",
          type: "true-false",
          question: "The Jebusites were completely driven out of Jerusalem by the tribe of Judah during Joshua’s time.",
          correctAnswer: false
        },
        {
          id: "q9",
          type: "short-answer",
          question: "Who captured the city of Debir and received Caleb’s daughter Achsah as a wife?",
          correctAnswer: "Othniel, Caleb’s nephew."
        },
        {
          id: "q10",
          type: "multiple-choice",
          question: "What inheritance was given to Caleb’s daughter Achsah when she requested more than the southern land?",
          options: [
            "Two springs of water—upper and lower",
            "A vineyard and olive grove",
            "A fortified city",
            "A share in Jerusalem"
          ],
          correctAnswer: "Two springs of water—upper and lower"
        }
      ]
    }
  },
  {
    day: 72,
    passage: "Joshua 16–18",
    focus: "The inheritance of Ephraim, Manasseh, and the rest of the tribes",
    quiz: {
      title: "📘 Joshua 16–18 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "Which two tribes, descended from Joseph, received their inheritance first west of the Jordan?",
          options: [
            "Judah and Benjamin",
            "Ephraim and Manasseh",
            "Reuben and Gad",
            "Issachar and Zebulun"
          ],
          correctAnswer: "Ephraim and Manasseh"
        },
        {
          id: "q2",
          type: "true-false",
          question: "The Ephraimites completely drove out the Canaanites from their allotted land.",
          correctAnswer: false
        },
        {
          id: "q3",
          type: "short-answer",
          question: "What complaint did the descendants of Joseph bring to Joshua about their inheritance?",
          correctAnswer: "They said their allotted land was too small for their large numbers."
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "What solution did Joshua give to the descendants of Joseph regarding their request for more land?",
          options: [
            "Ask Jehovah for another territory",
            "Clear the forested hill country of the Perizzites and Rephaim",
            "Move south to Judah’s land",
            "Settle east of the Jordan"
          ],
          correctAnswer: "Clear the forested hill country of the Perizzites and Rephaim"
        },
        {
          id: "q5",
          type: "true-false",
          question: "Seven tribes had not yet received their inheritance after Ephraim and Manasseh were settled.",
          correctAnswer: true
        },
        {
          id: "q6",
          type: "short-answer",
          question: "Where was the tabernacle set up after the land was subdued before distributing the rest of the inheritances?",
          correctAnswer: "Shiloh"
        },
        {
          id: "q7",
          type: "multiple-choice",
          question: "How did Joshua arrange for the remaining land to be divided among the seven tribes?",
          options: [
            "By giving it to the strongest warriors",
            "By casting lots before Jehovah",
            "By a vote of the tribal elders",
            "By personal choice of each tribe"
          ],
          correctAnswer: "By casting lots before Jehovah"
        },
        {
          id: "q8",
          type: "true-false",
          question: "Benjamin’s inheritance lay between the territories of Judah and Joseph.",
          correctAnswer: true
        },
        {
          id: "q9",
          type: "short-answer",
          question: "Name one well-known city that was part of Benjamin’s inheritance.",
          correctAnswer: "Jerusalem (among others like Bethel and Gibeon)."
        },
        {
          id: "q10",
          type: "multiple-choice",
          question: "What did Joshua say to encourage the seven tribes who were slow to take possession of the land?",
          options: [
            "‘Why are you putting off taking possession of the land that Jehovah has given you?’",
            "‘Wait until next year to divide the land.’",
            "‘Send more warriors to fight the Canaanites first.’",
            "‘Ask the Levites to choose for you.’"
          ],
          correctAnswer: "‘Why are you putting off taking possession of the land that Jehovah has given you?’"
        }
      ]
    }
  },
  {
    day: 73,
    passage: "Joshua 19–21",
    focus: "Final allotments of the land and cities of refuge",
    quiz: {
      title: "📘 Joshua 19–21 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "Which tribe received its inheritance last among the twelve?",
          options: [
            "Naphtali",
            "Asher",
            "Dan",
            "Benjamin"
          ],
          correctAnswer: "Dan"
        },
        {
          id: "q2",
          type: "true-false",
          question: "Joshua himself received a city as his personal inheritance.",
          correctAnswer: true
        },
        {
          id: "q3",
          type: "short-answer",
          question: "Which city was given to Joshua as his inheritance?",
          correctAnswer: "Timnath-serah in the hill country of Ephraim"
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "Who gave the Levites their cities and pasturelands?",
          options: [
            "The priests only",
            "The people of Israel from their own territories",
            "Joshua alone",
            "The tribe of Judah exclusively"
          ],
          correctAnswer: "The people of Israel from their own territories"
        },
        {
          id: "q5",
          type: "true-false",
          question: "The Levites were given both cities of refuge and other towns scattered among the tribes.",
          correctAnswer: true
        },
        {
          id: "q6",
          type: "short-answer",
          question: "How many cities of refuge were designated in total?",
          correctAnswer: "Six cities of refuge"
        },
        {
          id: "q7",
          type: "multiple-choice",
          question: "Name one of the cities of refuge on the west side of the Jordan.",
          options: [
            "Hebron",
            "Bezer",
            "Ramoth in Gilead",
            "Golan"
          ],
          correctAnswer: "Hebron"
        },
        {
          id: "q8",
          type: "true-false",
          question: "Jehovah fulfilled every good promise He made to Israel regarding the land.",
          correctAnswer: true
        },
        {
          id: "q9",
          type: "short-answer",
          question: "What was the purpose of the cities of refuge?",
          correctAnswer: "To provide safety for anyone who killed someone unintentionally until trial."
        },
        {
          id: "q10",
          type: "multiple-choice",
          question: "Which statement best summarizes the conclusion of Joshua 21?",
          options: [
            "Israel still needed to conquer many lands.",
            "Jehovah gave them rest and all the land as promised.",
            "The Levites demanded more territory.",
            "Joshua prepared to cross the Jordan again."
          ],
          correctAnswer: "Jehovah gave them rest and all the land as promised."
        }
      ]
    }
  },
  {
    day: 74,
    passage: "Joshua 22–24",
    focus: "The altar dispute, Joshua’s farewell, and Israel’s covenant renewal",
    quiz: {
      title: "📘 Joshua 22–24 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "Why did the tribes of Reuben, Gad, and the half-tribe of Manasseh build an altar by the Jordan?",
          options: [
            "To offer sacrifices",
            "As a witness of unity with the rest of Israel",
            "To prepare for war",
            "To mark their territory"
          ],
          correctAnswer: "As a witness of unity with the rest of Israel"
        },
        {
          id: "q2",
          type: "true-false",
          question: "The other Israelites first suspected the eastern tribes of rebelling against Jehovah.",
          correctAnswer: true
        },
        {
          id: "q3",
          type: "short-answer",
          question: "Who led the delegation sent to question the eastern tribes about the altar?",
          correctAnswer: "Phinehas son of Eleazar the priest"
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "What key reminder did Joshua give Israel in his farewell address?",
          options: [
            "Jehovah has fulfilled all His promises",
            "They should appoint a new king",
            "They must build more cities of refuge",
            "They should create a written constitution"
          ],
          correctAnswer: "Jehovah has fulfilled all His promises"
        },
        {
          id: "q5",
          type: "true-false",
          question: "Joshua warned Israel not to associate or intermarry with the remaining nations to avoid idolatry.",
          correctAnswer: true
        },
        {
          id: "q6",
          type: "short-answer",
          question: "At Shechem, what historical review did Joshua give before renewing the covenant?",
          correctAnswer: "He recounted Jehovah’s acts from Abraham through the conquest of Canaan."
        },
        {
          id: "q7",
          type: "multiple-choice",
          question: "What famous declaration did Joshua make about his household?",
          options: [
            "‘As for me and my household, we will serve Jehovah.’",
            "‘We will conquer more lands.’",
            "‘We will build a new altar.’",
            "‘We will follow the king of Israel.’"
          ],
          correctAnswer: "‘As for me and my household, we will serve Jehovah.’"
        },
        {
          id: "q8",
          type: "true-false",
          question: "The people responded to Joshua’s challenge by pledging to serve Jehovah alone.",
          correctAnswer: true
        },
        {
          id: "q9",
          type: "short-answer",
          question: "Where did Joshua set up a large stone as a witness to the covenant made that day?",
          correctAnswer: "Under the big tree near the sanctuary of Jehovah at Shechem."
        },
        {
          id: "q10",
          type: "multiple-choice",
          question: "How old was Joshua when he died?",
          options: ["100", "110", "120", "90"],
          correctAnswer: "110"
        }
      ]
    }
  },
  {
    day: 75,
    passage: "Judges 1–2",
    focus: "Israel’s incomplete conquest and the cycle of unfaithfulness",
    quiz: {
      title: "📘 Judges 1–2 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "After Joshua’s death, which tribe was chosen by Jehovah to lead the conquest against the Canaanites?",
          options: ["Ephraim", "Judah", "Benjamin", "Manasseh"],
          correctAnswer: "Judah"
        },
        {
          id: "q2",
          type: "true-false",
          question: "Judah invited the tribe of Simeon to join them in battle against the Canaanites.",
          correctAnswer: true
        },
        {
          id: "q3",
          type: "short-answer",
          question: "Which Canaanite king was captured and had his thumbs and big toes cut off?",
          correctAnswer: "Adoni-bezek"
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "Who captured the city of Debir and received Caleb’s daughter Achsah as a wife?",
          options: ["Othniel", "Phinehas", "Joshua", "Gideon"],
          correctAnswer: "Othniel"
        },
        {
          id: "q5",
          type: "true-false",
          question: "The tribe of Benjamin successfully drove out the Jebusites from Jerusalem.",
          correctAnswer: false
        },
        {
          id: "q6",
          type: "short-answer",
          question: "What did the angel of Jehovah rebuke Israel for in Judges 2?",
          correctAnswer: "For making covenants with the Canaanites and not tearing down their altars."
        },
        {
          id: "q7",
          type: "multiple-choice",
          question: "What happened after the generation of Joshua died?",
          options: [
            "Israel served Jehovah even more faithfully",
            "Israel began worshipping the Baals",
            "Israel destroyed the remaining idols",
            "Israel returned to Egypt"
          ],
          correctAnswer: "Israel began worshipping the Baals"
        },
        {
          id: "q8",
          type: "true-false",
          question: "Jehovah raised up judges to rescue Israel from their enemies when they cried out to Him.",
          correctAnswer: true
        },
        {
          id: "q9",
          type: "short-answer",
          question: "What pattern of behavior did Israel repeat during the time of the judges?",
          correctAnswer: "They sinned, were oppressed, cried to Jehovah, were rescued, and then fell into sin again."
        },
        {
          id: "q10",
          type: "multiple-choice",
          question: "Why did Jehovah allow nations to remain in the land instead of driving them all out?",
          options: [
            "To test Israel’s faithfulness",
            "To preserve trade routes",
            "Because of lack of soldiers",
            "To protect the Levites"
          ],
          correctAnswer: "To test Israel’s faithfulness"
        }
      ]
    }
  },
  {
    day: 76,
    passage: "Judges 3–5",
    focus: "The first judges and deliverance through Deborah and Barak",
    quiz: {
      title: "📘 Judges 3–5 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "Which nations did Jehovah leave to test Israel in the land?",
          options: [
            "The Philistines, Canaanites, Sidonians, and Hivites",
            "The Moabites and Midianites only",
            "Egyptians and Edomites",
            "The Amorites and Amalekites only"
          ],
          correctAnswer: "The Philistines, Canaanites, Sidonians, and Hivites"
        },
        {
          id: "q2",
          type: "true-false",
          question: "Othniel, Caleb’s nephew, became the first judge of Israel and brought peace for 40 years.",
          correctAnswer: true
        },
        {
          id: "q3",
          type: "short-answer",
          question: "Who was the left-handed judge that killed Eglon, king of Moab?",
          correctAnswer: "Ehud"
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "What weapon did Ehud use to kill Eglon?",
          options: ["A short double-edged sword", "A sling", "A spear", "A dagger made of bronze"],
          correctAnswer: "A short double-edged sword"
        },
        {
          id: "q5",
          type: "true-false",
          question: "After Ehud’s deliverance, Israel enjoyed 80 years of peace.",
          correctAnswer: true
        },
        {
          id: "q6",
          type: "short-answer",
          question: "Which judge defeated the Philistines with an oxgoad?",
          correctAnswer: "Shamgar"
        },
        {
          id: "q7",
          type: "multiple-choice",
          question: "Who was the prophetess and judge who summoned Barak to lead Israel’s army?",
          options: ["Deborah", "Jael", "Huldah", "Abigail"],
          correctAnswer: "Deborah"
        },
        {
          id: "q8",
          type: "true-false",
          question: "Barak agreed to go to battle only if Deborah went with him.",
          correctAnswer: true
        },
        {
          id: "q9",
          type: "short-answer",
          question: "Who killed Sisera, the commander of the Canaanite army, and how?",
          correctAnswer: "Jael killed him by driving a tent peg through his temple while he slept."
        },
        {
          id: "q10",
          type: "multiple-choice",
          question: "What is the theme of Deborah’s song in Judges 5?",
          options: [
            "Praise to Jehovah for delivering Israel and defeating Sisera",
            "A warning to avoid idolatry",
            "A lament for fallen warriors",
            "Instructions for future judges"
          ],
          correctAnswer: "Praise to Jehovah for delivering Israel and defeating Sisera"
        }
      ]
    }
  },
  {
    day: 77,
    passage: "Judges 6–7",
    focus: "Gideon’s call and victory over Midian",
    quiz: {
      title: "📘 Judges 6–7 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "Who oppressed Israel during the time of Gideon?",
          options: ["Philistines", "Midianites", "Amorites", "Moabites"],
          correctAnswer: "Midianites"
        },
        {
          id: "q2",
          type: "true-false",
          question: "Because of Midian’s oppression, the Israelites hid in caves and mountain strongholds.",
          correctAnswer: true
        },
        {
          id: "q3",
          type: "short-answer",
          question: "What was Gideon doing when Jehovah’s angel appeared to him?",
          correctAnswer: "Threshing wheat in a winepress to hide it from the Midianites."
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "How did Jehovah address Gideon when calling him to deliver Israel?",
          options: [
            "‘You man of little faith’",
            "‘You mighty warrior’",
            "‘Faithful servant’",
            "‘Humble farmer’"
          ],
          correctAnswer: "‘You mighty warrior’"
        },
        {
          id: "q5",
          type: "true-false",
          question: "Gideon asked for signs from Jehovah to confirm His calling, including the wet and dry fleece test.",
          correctAnswer: true
        },
        {
          id: "q6",
          type: "short-answer",
          question: "What did Gideon do to his father’s altar to Baal and the sacred pole next to it?",
          correctAnswer: "He tore them down and built an altar to Jehovah."
        },
        {
          id: "q7",
          type: "multiple-choice",
          question: "How many men did Jehovah finally allow Gideon to take into battle against Midian?",
          options: ["300", "3,000", "10,000", "32,000"],
          correctAnswer: "300"
        },
        {
          id: "q8",
          type: "true-false",
          question: "Jehovah reduced Gideon’s army so that Israel would not boast of saving itself.",
          correctAnswer: true
        },
        {
          id: "q9",
          type: "short-answer",
          question: "What three items did Gideon’s men carry during the attack on Midian’s camp?",
          correctAnswer: "Trumpets, empty jars, and torches inside the jars."
        },
        {
          id: "q10",
          type: "multiple-choice",
          question: "What happened when Gideon’s men broke the jars and blew the trumpets?",
          options: [
            "The Midianites attacked each other in confusion and fled",
            "A storm destroyed the Midianite camp",
            "The Israelites charged directly into battle",
            "Fire consumed the enemy camp"
          ],
          correctAnswer: "The Midianites attacked each other in confusion and fled"
        }
      ]
    }
  },
  {
    day: 78,
    passage: "Judges 8–9",
    focus: "Gideon’s later years and Abimelech’s rise and downfall",
    quiz: {
      title: "📘 Judges 8–9 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "What did the men of Ephraim complain to Gideon about after the victory over Midian?",
          options: [
            "They weren’t called to fight earlier",
            "They didn’t receive any spoils of war",
            "They wanted leadership over Israel",
            "They disagreed with Gideon’s tactics"
          ],
          correctAnswer: "They weren’t called to fight earlier"
        },
        {
          id: "q2",
          type: "true-false",
          question: "Gideon pacified the Ephraimites with gentle words and they stopped quarreling with him.",
          correctAnswer: true
        },
        {
          id: "q3",
          type: "short-answer",
          question: "What were the names of the two Midianite kings whom Gideon captured and executed?",
          correctAnswer: "Zebah and Zalmunna"
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "What object did Gideon make from the gold he collected after battle?",
          options: ["An ephod", "A crown", "A sword", "An altar"],
          correctAnswer: "An ephod"
        },
        {
          id: "q5",
          type: "true-false",
          question: "Gideon refused to become king, saying that Jehovah was Israel’s ruler.",
          correctAnswer: true
        },
        {
          id: "q6",
          type: "short-answer",
          question: "How many sons did Gideon have?",
          correctAnswer: "Seventy sons"
        },
        {
          id: "q7",
          type: "multiple-choice",
          question: "Who was Gideon’s son by his concubine in Shechem who later made himself king?",
          options: ["Abimelech", "Jair", "Tola", "Jephthah"],
          correctAnswer: "Abimelech"
        },
        {
          id: "q8",
          type: "true-false",
          question: "Abimelech killed all his brothers except the youngest, Jotham.",
          correctAnswer: true
        },
        {
          id: "q9",
          type: "short-answer",
          question: "From which mountain did Jotham shout his parable about the trees choosing a king?",
          correctAnswer: "Mount Gerizim"
        },
        {
          id: "q10",
          type: "multiple-choice",
          question: "How did Abimelech die?",
          options: [
            "He was killed in battle by Gideon’s men",
            "A woman dropped a millstone on his head, and his armor-bearer finished him off",
            "He was struck by lightning",
            "He was executed by his own soldiers"
          ],
          correctAnswer: "A woman dropped a millstone on his head, and his armor-bearer finished him off"
        }
      ]
    }
  },
  {
    day: 79,
    passage: "Judges 10–11",
    focus: "Jephthah’s rise and deliverance of Israel from the Ammonites",
    quiz: {
      title: "📘 Judges 10–11 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "Which two judges served Israel before Jephthah?",
          options: [
            "Tola and Jair",
            "Ibzan and Elon",
            "Othniel and Ehud",
            "Gideon and Abimelech"
          ],
          correctAnswer: "Tola and Jair"
        },
        {
          id: "q2",
          type: "true-false",
          question: "After Tola and Jair, Israel again turned to serve the Baals and Ashtoreth.",
          correctAnswer: true
        },
        {
          id: "q3",
          type: "short-answer",
          question: "Which nation oppressed Israel during Jephthah’s time?",
          correctAnswer: "The Ammonites"
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "Why had Jephthah fled from his family before becoming a judge?",
          options: [
            "He had killed one of his brothers",
            "His half-brothers drove him away because he was the son of another woman",
            "He was accused of stealing tribute",
            "He refused to worship the Baals"
          ],
          correctAnswer: "His half-brothers drove him away because he was the son of another woman"
        },
        {
          id: "q5",
          type: "true-false",
          question: "The elders of Gilead asked Jephthah to return and lead them against the Ammonites.",
          correctAnswer: true
        },
        {
          id: "q6",
          type: "short-answer",
          question: "Before battle, what message did Jephthah send to the king of Ammon?",
          correctAnswer: "He recounted Israel’s history, explaining that Jehovah had given them the land and they had not taken Ammonite territory."
        },
        {
          id: "q7",
          type: "multiple-choice",
          question: "What vow did Jephthah make to Jehovah before going into battle?",
          options: [
            "He would offer the first person who came out of his house as a burnt offering",
            "He would build a new altar at Mizpah",
            "He would never marry",
            "He would fast for seven days"
          ],
          correctAnswer: "He would offer the first person who came out of his house as a burnt offering"
        },
        {
          id: "q8",
          type: "true-false",
          question: "Jephthah’s daughter was the first to come out of his house to meet him after his victory.",
          correctAnswer: true
        },
        {
          id: "q9",
          type: "short-answer",
          question: "What did Jephthah’s daughter request before fulfilling her father’s vow?",
          correctAnswer: "She asked for two months to go to the mountains and weep for her virginity."
        },
        {
          id: "q10",
          type: "multiple-choice",
          question: "How long did Jephthah serve as judge over Israel?",
          options: ["6 years", "10 years", "12 years", "20 years"],
          correctAnswer: "6 years"
        }
      ]
    }
  },
  {
    day: 80,
    passage: "Judges 12–13",
    focus: "Jephthah’s conflict with Ephraim and the birth of Samson",
    quiz: {
      title: "📘 Judges 12–13 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "Why did the men of Ephraim confront Jephthah after his victory over the Ammonites?",
          options: [
            "Because he did not call them to fight with him",
            "Because he took their land",
            "Because he refused to pay tribute",
            "Because he burned their fields"
          ],
          correctAnswer: "Because he did not call them to fight with him"
        },
        {
          id: "q2",
          type: "true-false",
          question: "Jephthah tried to reason peacefully with the Ephraimites before fighting them.",
          correctAnswer: true
        },
        {
          id: "q3",
          type: "short-answer",
          question: "What word was used as a test to identify fleeing Ephraimites at the Jordan crossings?",
          correctAnswer: "Shibboleth"
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "What happened to the Ephraimites who could not pronounce ‘Shibboleth’ correctly?",
          options: [
            "They were enslaved",
            "They were executed at the Jordan crossings",
            "They were driven from the land",
            "They were imprisoned in Gilead"
          ],
          correctAnswer: "They were executed at the Jordan crossings"
        },
        {
          id: "q5",
          type: "true-false",
          question: "After Jephthah, Israel was judged by Ibzan, Elon, and Abdon.",
          correctAnswer: true
        },
        {
          id: "q6",
          type: "short-answer",
          question: "Who appeared to Manoah’s wife to announce the birth of Samson?",
          correctAnswer: "Jehovah’s angel"
        },
        {
          id: "q7",
          type: "multiple-choice",
          question: "What special condition was Samson to follow from birth?",
          options: [
            "He was to be a Nazirite to God",
            "He was to be a priest in Shiloh",
            "He was to live as a shepherd",
            "He was to avoid warfare"
          ],
          correctAnswer: "He was to be a Nazirite to God"
        },
        {
          id: "q8",
          type: "true-false",
          question: "Samson’s mother was told that no razor should ever touch his head.",
          correctAnswer: true
        },
        {
          id: "q9",
          type: "short-answer",
          question: "How did Manoah and his wife realize their visitor was Jehovah’s angel?",
          correctAnswer: "When He ascended in the flame of their offering and disappeared."
        },
        {
          id: "q10",
          type: "multiple-choice",
          question: "Where did the spirit of Jehovah begin to impel Samson?",
          options: [
            "In the city of Shiloh",
            "In the camp of Dan between Zorah and Eshtaol",
            "At Mount Tabor",
            "In Timnah among the Philistines"
          ],
          correctAnswer: "In the camp of Dan between Zorah and Eshtaol"
        }
      ]
    }
  },
  {
    day: 81,
    passage: "Judges 14–16",
    focus: "Samson’s strength, downfall, and death",
    quiz: {
      title: "📘 Judges 14–16 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "Whom did Samson want to marry, against his parents’ wishes?",
          options: [
            "A woman from Timnah, a Philistine",
            "A woman from Israel",
            "A woman from Moab",
            "A woman from Zorah"
          ],
          correctAnswer: "A woman from Timnah, a Philistine"
        },
        {
          id: "q2",
          type: "true-false",
          question: "Samson killed a lion with his bare hands as he traveled to Timnah.",
          correctAnswer: true
        },
        {
          id: "q3",
          type: "short-answer",
          question: "What did Samson later find in the carcass of the lion?",
          correctAnswer: "A swarm of bees and honey."
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "What riddle did Samson pose to the Philistines at his wedding feast?",
          options: [
            "Out of the eater came something to eat; out of the strong came something sweet.",
            "Who is stronger than a lion and sweeter than honey?",
            "What has power but no tongue?",
            "Who can defeat the mighty without sword or spear?"
          ],
          correctAnswer: "Out of the eater came something to eat; out of the strong came something sweet."
        },
        {
          id: "q5",
          type: "true-false",
          question: "Samson revealed the answer to his riddle only after his wife pressed him for seven days.",
          correctAnswer: true
        },
        {
          id: "q6",
          type: "short-answer",
          question: "What did Samson use to strike down a thousand Philistines?",
          correctAnswer: "The jawbone of a donkey."
        },
        {
          id: "q7",
          type: "multiple-choice",
          question: "Which woman from the valley of Sorek betrayed Samson to the Philistines?",
          options: ["Delilah", "Achsah", "Jael", "Deborah"],
          correctAnswer: "Delilah"
        },
        {
          id: "q8",
          type: "true-false",
          question: "Samson lost his strength when his hair was shaved while he was asleep.",
          correctAnswer: true
        },
        {
          id: "q9",
          type: "short-answer",
          question: "Where did the Philistines take Samson after capturing him?",
          correctAnswer: "To Gaza, where they gouged out his eyes and made him grind grain in prison."
        },
        {
          id: "q10",
          type: "multiple-choice",
          question: "How did Samson kill more Philistines in his death than during his life?",
          options: [
            "By collapsing the temple of Dagon upon them and himself",
            "By burning their fields",
            "By poisoning their water supply",
            "By ambushing their army at night"
          ],
          correctAnswer: "By collapsing the temple of Dagon upon them and himself"
        }
      ]
    }
  },
  {
    day: 82,
    passage: "Judges 17–19",
    focus: "Idolatry in Israel and the outrage at Gibeah",
    quiz: {
      title: "📘 Judges 17–19 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "What did Micah take from his mother and later return in Judges 17?",
          options: [
            "A carved image and silver idol",
            "Silver shekels she had dedicated to Jehovah",
            "A golden calf",
            "Tithes for the Levites"
          ],
          correctAnswer: "Silver shekels she had dedicated to Jehovah"
        },
        {
          id: "q2",
          type: "true-false",
          question: "Micah made a house of gods and appointed one of his sons as a priest.",
          correctAnswer: true
        },
        {
          id: "q3",
          type: "short-answer",
          question: "From which tribe was the Levite who later became Micah’s personal priest?",
          correctAnswer: "From the tribe of Levi, from Bethlehem in Judah."
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "What did the Danites take from Micah’s house on their way to settle in Laish?",
          options: [
            "His idols, ephod, and Levite priest",
            "His gold and livestock",
            "His household and land",
            "His offerings and tithes"
          ],
          correctAnswer: "His idols, ephod, and Levite priest"
        },
        {
          id: "q5",
          type: "true-false",
          question: "The Danites named their new city Dan, after one of their ancestors.",
          correctAnswer: true
        },
        {
          id: "q6",
          type: "short-answer",
          question: "In Judges 19, where was the Levite from who took a concubine?",
          correctAnswer: "From the remote parts of the hill country of Ephraim."
        },
        {
          id: "q7",
          type: "multiple-choice",
          question: "Where did the Levite and his concubine find lodging on their return journey?",
          options: [
            "Bethlehem",
            "Gibeah in Benjamin’s territory",
            "Shiloh",
            "Jericho"
          ],
          correctAnswer: "Gibeah in Benjamin’s territory"
        },
        {
          id: "q8",
          type: "true-false",
          question: "The Levite’s concubine was abused and killed by the men of Gibeah.",
          correctAnswer: true
        },
        {
          id: "q9",
          type: "short-answer",
          question: "What shocking action did the Levite take after finding his concubine dead?",
          correctAnswer: "He cut her body into twelve pieces and sent them throughout Israel."
        },
        {
          id: "q10",
          type: "multiple-choice",
          question: "What was the reaction of the Israelites when they received the Levite’s message and the pieces of his concubine?",
          options: [
            "They ignored it",
            "They gathered as one to seek justice against Gibeah",
            "They attacked the Levite",
            "They made peace with Benjamin"
          ],
          correctAnswer: "They gathered as one to seek justice against Gibeah"
        }
      ]
    }
  },
  {
    day: 83,
    passage: "Judges 20–21",
    focus: "Civil war against Benjamin and the preservation of the tribe",
    quiz: {
      title: "📘 Judges 20–21 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "Why did the tribes of Israel gather at Mizpah in Judges 20?",
          options: [
            "To go to war against Benjamin for the crime committed at Gibeah",
            "To crown a new judge over Israel",
            "To offer sacrifices for peace",
            "To divide the remaining land"
          ],
          correctAnswer: "To go to war against Benjamin for the crime committed at Gibeah"
        },
        {
          id: "q2",
          type: "true-false",
          question: "All the tribes of Israel except Benjamin gathered to confront the evil in Gibeah.",
          correctAnswer: true
        },
        {
          id: "q3",
          type: "short-answer",
          question: "How many soldiers did Benjamin have in the war against Israel?",
          correctAnswer: "26,000 men, plus 700 chosen men from Gibeah."
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "What was unusual about the 700 chosen men of Benjamin?",
          options: [
            "They were left-handed and could sling a stone at a hair and not miss",
            "They were giants",
            "They were priests",
            "They had golden shields"
          ],
          correctAnswer: "They were left-handed and could sling a stone at a hair and not miss"
        },
        {
          id: "q5",
          type: "true-false",
          question: "Israel was immediately victorious in the first battle against Benjamin.",
          correctAnswer: false
        },
        {
          id: "q6",
          type: "short-answer",
          question: "Who did Israel seek guidance from before each battle?",
          correctAnswer: "Jehovah, through the ark of the covenant and the priest Phinehas."
        },
        {
          id: "q7",
          type: "multiple-choice",
          question: "What strategy finally brought victory to Israel over Benjamin?",
          options: [
            "A direct attack",
            "An ambush that lured Benjamin away from the city",
            "Starving them out",
            "Setting traps at the Jordan crossings"
          ],
          correctAnswer: "An ambush that lured Benjamin away from the city"
        },
        {
          id: "q8",
          type: "true-false",
          question: "After the war, nearly all the men of Benjamin were killed.",
          correctAnswer: true
        },
        {
          id: "q9",
          type: "short-answer",
          question: "Why did the Israelites later regret their vow not to give their daughters to Benjamin?",
          correctAnswer: "Because the tribe of Benjamin was on the verge of extinction."
        },
        {
          id: "q10",
          type: "multiple-choice",
          question: "How did the remaining Benjaminites obtain wives to rebuild their tribe?",
          options: [
            "They married foreign women",
            "They captured women from Jabesh-gilead and later from Shiloh",
            "Other tribes volunteered their daughters",
            "They made a treaty with neighboring nations"
          ],
          correctAnswer: "They captured women from Jabesh-gilead and later from Shiloh"
        }
      ]
    }
  },
  {
    day: 84,
    passage: "Ruth 1–4",
    focus: "Loyalty, kindness, and Jehovah’s providence through Ruth and Boaz",
    quiz: {
      title: "📘 Ruth 1–4 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "Why did Elimelech and his family leave Bethlehem to live in Moab?",
          options: [
            "Because of a famine in the land",
            "To seek new business opportunities",
            "To flee from enemies",
            "Because of a drought in Moab"
          ],
          correctAnswer: "Because of a famine in the land"
        },
        {
          id: "q2",
          type: "true-false",
          question: "Ruth and Orpah were the Moabite wives of Naomi’s sons.",
          correctAnswer: true
        },
        {
          id: "q3",
          type: "short-answer",
          question: "What did Ruth say to Naomi to express her loyalty?",
          correctAnswer: "‘Where you go, I will go, and where you stay, I will stay. Your people will be my people and your God my God.’"
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "When Ruth began gleaning, in whose field did she happen to work?",
          options: [
            "Elimelech’s brother’s field",
            "Boaz’s field",
            "A field owned by Naomi",
            "The city elders’ land"
          ],
          correctAnswer: "Boaz’s field"
        },
        {
          id: "q5",
          type: "true-false",
          question: "Boaz showed kindness to Ruth because he had heard of her loyalty to Naomi.",
          correctAnswer: true
        },
        {
          id: "q6",
          type: "short-answer",
          question: "What instruction did Naomi give Ruth when she went to Boaz at the threshing floor?",
          correctAnswer: "To uncover his feet and lie down, as a way of requesting him to act as her redeemer."
        },
        {
          id: "q7",
          type: "multiple-choice",
          question: "What was Boaz’s relationship to Naomi’s family?",
          options: [
            "A close relative who could act as a family redeemer",
            "Naomi’s brother",
            "Elimelech’s servant",
            "A distant cousin of Ruth"
          ],
          correctAnswer: "A close relative who could act as a family redeemer"
        },
        {
          id: "q8",
          type: "true-false",
          question: "Boaz immediately married Ruth without consulting anyone else.",
          correctAnswer: false
        },
        {
          id: "q9",
          type: "short-answer",
          question: "What symbolic action did the closer relative perform to transfer his right of redemption to Boaz?",
          correctAnswer: "He took off his sandal and gave it to Boaz."
        },
        {
          id: "q10",
          type: "multiple-choice",
          question: "Who was Ruth’s son, and why is he significant?",
          options: [
            "Obed, the grandfather of King David",
            "Boaz Jr., a famous warrior",
            "Salmon, the builder of Bethlehem",
            "Jesse, the prophet of Israel"
          ],
          correctAnswer: "Obed, the grandfather of King David"
        }
      ]
    }
  },
  {
    day: 85,
    passage: "1 Samuel 1–2",
    focus: "The birth of Samuel and the corruption of Eli’s sons",
    quiz: {
      title: "📘 1 Samuel 1–2 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "What was the name of Samuel’s mother?",
          options: ["Naomi", "Hannah", "Abigail", "Michal"],
          correctAnswer: "Hannah"
        },
        {
          id: "q2",
          type: "true-false",
          question: "Hannah was barren for many years before Jehovah answered her prayer for a child.",
          correctAnswer: true
        },
        {
          id: "q3",
          type: "short-answer",
          question: "What vow did Hannah make to Jehovah if He gave her a son?",
          correctAnswer: "She vowed to give him to Jehovah all the days of his life, and no razor would touch his head."
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "Who was Eli?",
          options: [
            "The high priest who served at the tabernacle in Shiloh",
            "A Levite from Bethlehem",
            "A prophet of Judah",
            "A judge from Ephraim"
          ],
          correctAnswer: "The high priest who served at the tabernacle in Shiloh"
        },
        {
          id: "q5",
          type: "true-false",
          question: "At first, Eli thought Hannah was drunk when she prayed silently to Jehovah.",
          correctAnswer: true
        },
        {
          id: "q6",
          type: "short-answer",
          question: "What name did Hannah give her son, and why?",
          correctAnswer: "She named him Samuel, meaning ‘Heard of God,’ because Jehovah had heard her prayer."
        },
        {
          id: "q7",
          type: "multiple-choice",
          question: "In Hannah’s song of praise, what main theme did she express?",
          options: [
            "Jehovah exalts the humble and brings down the proud",
            "Israel’s need for a king",
            "A prophecy about the temple",
            "Gratitude to Eli for his blessing"
          ],
          correctAnswer: "Jehovah exalts the humble and brings down the proud"
        },
        {
          id: "q8",
          type: "true-false",
          question: "Eli’s sons, Hophni and Phinehas, faithfully served Jehovah at the tabernacle.",
          correctAnswer: false
        },
        {
          id: "q9",
          type: "short-answer",
          question: "What serious sins did Eli’s sons commit at the tabernacle?",
          correctAnswer: "They took the best parts of the sacrifices for themselves and engaged in immoral acts with women at the entrance of the tent of meeting."
        },
        {
          id: "q10",
          type: "multiple-choice",
          question: "What message did the man of God deliver to Eli about his family?",
          options: [
            "Jehovah would cut off his house and raise up a faithful priest",
            "His sons would become prophets",
            "Eli would lead Israel to victory",
            "The tabernacle would be moved to Bethel"
          ],
          correctAnswer: "Jehovah would cut off his house and raise up a faithful priest"
        }
      ]
    }
  },
  {
    day: 86,
    passage: "1 Samuel 3–6",
    focus: "Jehovah calls Samuel, the Ark is captured, and its return",
    quiz: {
      title: "📘 1 Samuel 3–6 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "What was unusual about Samuel’s first experience hearing Jehovah’s call?",
          options: [
            "He thought Eli was calling him",
            "He saw a vision immediately",
            "He was outside the tabernacle",
            "He was asleep near the Ark of the Covenant"
          ],
          correctAnswer: "He thought Eli was calling him"
        },
        {
          id: "q2",
          type: "true-false",
          question: "At first, Samuel did not recognize Jehovah’s voice because messages from God were rare in those days.",
          correctAnswer: true
        },
        {
          id: "q3",
          type: "short-answer",
          question: "What message did Jehovah give Samuel about Eli’s household?",
          correctAnswer: "That Jehovah would judge Eli’s house permanently because his sons had made themselves contemptible and Eli did not restrain them."
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "When Israel went to battle with the Philistines, what did they bring from Shiloh, hoping it would give them victory?",
          options: [
            "The Ark of the Covenant",
            "The ephod",
            "Moses’ staff",
            "The altar of incense"
          ],
          correctAnswer: "The Ark of the Covenant"
        },
        {
          id: "q5",
          type: "true-false",
          question: "The presence of the Ark guaranteed Israel’s victory against the Philistines.",
          correctAnswer: false
        },
        {
          id: "q6",
          type: "short-answer",
          question: "What happened to Eli’s sons, Hophni and Phinehas, during the battle?",
          correctAnswer: "They were killed when the Ark was captured."
        },
        {
          id: "q7",
          type: "multiple-choice",
          question: "How did Eli die after hearing the news about the Ark?",
          options: [
            "He fell backward from his seat and broke his neck",
            "He had a heart attack",
            "He was struck by lightning",
            "He died peacefully later that night"
          ],
          correctAnswer: "He fell backward from his seat and broke his neck"
        },
        {
          id: "q8",
          type: "true-false",
          question: "The wife of Phinehas named her newborn son Ichabod, meaning ‘The glory has departed from Israel.’",
          correctAnswer: true
        },
        {
          id: "q9",
          type: "short-answer",
          question: "What happened to the idol Dagon when the Ark of Jehovah was placed in his temple?",
          correctAnswer: "Dagon fell before the Ark, and later his head and hands were broken off."
        },
        {
          id: "q10",
          type: "multiple-choice",
          question: "How did the Philistines return the Ark to Israel?",
          options: [
            "On a new cart pulled by two cows with offerings of golden figures of tumors and mice",
            "By escorting it back through soldiers",
            "By throwing it into the sea",
            "By sending it to Egypt"
          ],
          correctAnswer: "On a new cart pulled by two cows with offerings of golden figures of tumors and mice"
        }
      ]
    }
  },
  {
    day: 87,
    passage: "1 Samuel 7–9",
    focus: "Samuel’s leadership and Israel’s request for a king",
    quiz: {
      title: "📘 1 Samuel 7–9 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "How long did the Ark remain at Kiriath-jearim before Israel turned back to Jehovah?",
          options: ["10 years", "20 years", "30 years", "40 years"],
          correctAnswer: "20 years"
        },
        {
          id: "q2",
          type: "true-false",
          question: "Samuel urged Israel to put away their foreign gods and serve Jehovah alone.",
          correctAnswer: true
        },
        {
          id: "q3",
          type: "short-answer",
          question: "At which place did Samuel gather Israel to fast, pray, and confess their sins?",
          correctAnswer: "At Mizpah"
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "What did Jehovah do when the Philistines attacked Israel at Mizpah?",
          options: [
            "He caused a great thunder to confuse them",
            "He sent fire from heaven",
            "He turned them against each other",
            "He sent an angel to destroy them"
          ],
          correctAnswer: "He caused a great thunder to confuse them"
        },
        {
          id: "q5",
          type: "true-false",
          question: "Samuel set up a stone called Ebenezer, meaning ‘The Stone of Help.’",
          correctAnswer: true
        },
        {
          id: "q6",
          type: "short-answer",
          question: "Why did Israel ask Samuel to appoint a king over them?",
          correctAnswer: "Because they wanted to be like the other nations."
        },
        {
          id: "q7",
          type: "multiple-choice",
          question: "How did Jehovah respond when Samuel was displeased with Israel’s request for a king?",
          options: [
            "He said they had rejected Him as their King",
            "He refused their request",
            "He told Samuel to punish them",
            "He promised to destroy the Philistines first"
          ],
          correctAnswer: "He said they had rejected Him as their King"
        },
        {
          id: "q8",
          type: "true-false",
          question: "Samuel warned Israel that a king would take their sons, daughters, and possessions for his own service.",
          correctAnswer: true
        },
        {
          id: "q9",
          type: "short-answer",
          question: "What was the name of the man chosen by Jehovah to become Israel’s first king?",
          correctAnswer: "Saul"
        },
        {
          id: "q10",
          type: "multiple-choice",
          question: "From which tribe was Saul?",
          options: ["Judah", "Benjamin", "Ephraim", "Reuben"],
          correctAnswer: "Benjamin"
        }
      ]
    }
  },
  {
    day: 88,
    passage: "1 Samuel 10–12",
    focus: "Saul’s anointing and Israel’s covenant renewal under Samuel",
    quiz: {
      title: "📘 1 Samuel 10–12 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "Who anointed Saul as Israel’s first king?",
          options: ["Eli", "Nathan", "Samuel", "Jonathan"],
          correctAnswer: "Samuel"
        },
        {
          id: "q2",
          type: "true-false",
          question: "After being anointed, Saul received signs confirming Jehovah’s spirit was with him.",
          correctAnswer: true
        },
        {
          id: "q3",
          type: "short-answer",
          question: "What happened to Saul after the spirit of Jehovah came upon him?",
          correctAnswer: "He began prophesying among a group of prophets."
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "Where was Saul publicly chosen as king before all the tribes of Israel?",
          options: ["Mizpah", "Gilgal", "Shiloh", "Bethel"],
          correctAnswer: "Mizpah"
        },
        {
          id: "q5",
          type: "true-false",
          question: "Some worthless men despised Saul and brought him no gift after he was made king.",
          correctAnswer: true
        },
        {
          id: "q6",
          type: "short-answer",
          question: "Who did Saul rescue when the Ammonites threatened to gouge out their right eyes?",
          correctAnswer: "The people of Jabesh-gilead."
        },
        {
          id: "q7",
          type: "multiple-choice",
          question: "Where did Saul and all Israel renew the kingship and rejoice before Jehovah?",
          options: ["Gilgal", "Jericho", "Ramah", "Hebron"],
          correctAnswer: "Gilgal"
        },
        {
          id: "q8",
          type: "true-false",
          question: "In his farewell speech, Samuel reminded Israel of Jehovah’s faithfulness and their tendency to forget Him.",
          correctAnswer: true
        },
        {
          id: "q9",
          type: "short-answer",
          question: "What sign did Samuel call upon Jehovah to send during the wheat harvest to show Israel their wrongdoing?",
          correctAnswer: "He called for thunder and rain."
        },
        {
          id: "q10",
          type: "multiple-choice",
          question: "What did Samuel urge Israel to do after they admitted their sin in asking for a king?",
          options: [
            "Serve Jehovah with all their heart and not turn aside to worthless things",
            "Destroy the Ark of the Covenant",
            "Abandon Saul as king",
            "Return to Egypt for help"
          ],
          correctAnswer: "Serve Jehovah with all their heart and not turn aside to worthless things"
        }
      ]
    }
  },
  {
    day: 89,
    passage: "1 Samuel 13–14",
    focus: "Saul’s disobedience and Jonathan’s faith in battle",
    quiz: {
      title: "📘 1 Samuel 13–14 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "Why did Saul offer the burnt sacrifice himself at Gilgal?",
          options: [
            "Samuel was late, and the people were scattering",
            "Jehovah commanded him directly",
            "The Philistines demanded a peace offering",
            "He wanted to honor Jonathan"
          ],
          correctAnswer: "Samuel was late, and the people were scattering"
        },
        {
          id: "q2",
          type: "true-false",
          question: "Samuel told Saul that his kingdom would not last because he disobeyed Jehovah’s command.",
          correctAnswer: true
        },
        {
          id: "q3",
          type: "short-answer",
          question: "What did the Philistines do that left Israel without blacksmiths?",
          correctAnswer: "They prevented Israelites from making or sharpening weapons to keep them weak."
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "Who was the only other Israelite besides Saul with a sword during the battle against the Philistines?",
          options: ["Abner", "Jonathan", "Samuel", "Ahijah"],
          correctAnswer: "Jonathan"
        },
        {
          id: "q5",
          type: "true-false",
          question: "Jonathan and his armor-bearer attacked a Philistine outpost by trusting that Jehovah could save by many or by few.",
          correctAnswer: true
        },
        {
          id: "q6",
          type: "short-answer",
          question: "What sign did Jonathan look for to know if Jehovah would give them victory?",
          correctAnswer: "If the Philistines said, ‘Come up to us,’ it would mean Jehovah had given them into his hand."
        },
        {
          id: "q7",
          type: "multiple-choice",
          question: "What caused panic among the Philistines during Jonathan’s attack?",
          options: [
            "An earthquake and confusion from Jehovah",
            "A surprise night attack by Israel",
            "A swarm of locusts",
            "The Ark of the Covenant’s arrival"
          ],
          correctAnswer: "An earthquake and confusion from Jehovah"
        },
        {
          id: "q8",
          type: "true-false",
          question: "Saul made a rash oath that cursed anyone who ate before evening during the battle.",
          correctAnswer: true
        },
        {
          id: "q9",
          type: "short-answer",
          question: "Who unknowingly broke Saul’s oath by eating honey?",
          correctAnswer: "Jonathan"
        },
        {
          id: "q10",
          type: "multiple-choice",
          question: "How was Jonathan saved from being executed for breaking Saul’s oath?",
          options: [
            "The people intervened, saying he had brought great victory to Israel",
            "Samuel stopped Saul",
            "Saul changed his mind",
            "Jonathan fled into the hills"
          ],
          correctAnswer: "The people intervened, saying he had brought great victory to Israel"
        }
      ]
    }
  },
  {
    day: 90,
    passage: "1 Samuel 15–16",
    focus: "Saul’s disobedience and David’s anointing",
    quiz: {
      title: "📘 1 Samuel 15–16 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "What command did Jehovah give Saul regarding the Amalekites?",
          options: [
            "To destroy Amalek completely, including all people and animals",
            "To conquer Amalek but take their possessions",
            "To make a peace treaty with Amalek",
            "To capture King Agag and bring him to Samuel"
          ],
          correctAnswer: "To destroy Amalek completely, including all people and animals"
        },
        {
          id: "q2",
          type: "true-false",
          question: "Saul obeyed Jehovah fully in the battle against Amalek.",
          correctAnswer: false
        },
        {
          id: "q3",
          type: "short-answer",
          question: "Whom did Saul spare, showing disobedience to Jehovah’s command?",
          correctAnswer: "King Agag and the best of the sheep and cattle."
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "What excuse did Saul give Samuel for sparing the best animals?",
          options: [
            "The people wanted to sacrifice them to Jehovah",
            "He forgot Jehovah’s command",
            "He thought they were too valuable to destroy",
            "He wanted to keep them for his army"
          ],
          correctAnswer: "The people wanted to sacrifice them to Jehovah"
        },
        {
          id: "q5",
          type: "true-false",
          question: "Samuel told Saul that obedience is better than sacrifice.",
          correctAnswer: true
        },
        {
          id: "q6",
          type: "short-answer",
          question: "What did Samuel tell Saul that Jehovah had done because of his disobedience?",
          correctAnswer: "Jehovah had rejected him as king over Israel."
        },
        {
          id: "q7",
          type: "multiple-choice",
          question: "What did Samuel do to Agag, the king of Amalek?",
          options: [
            "He sent him back to his land",
            "He imprisoned him for life",
            "He executed him before Jehovah at Gilgal",
            "He handed him over to Saul"
          ],
          correctAnswer: "He executed him before Jehovah at Gilgal"
        },
        {
          id: "q8",
          type: "true-false",
          question: "After Samuel left Saul, he never saw him again until the day of his death.",
          correctAnswer: true
        },
        {
          id: "q9",
          type: "short-answer",
          question: "Whom did Jehovah send Samuel to anoint as the new king?",
          correctAnswer: "David, the son of Jesse of Bethlehem."
        },
        {
          id: "q10",
          type: "multiple-choice",
          question: "How did Jehovah choose David instead of his brothers?",
          options: [
            "By looking at the heart, not outward appearance",
            "By age and experience",
            "By strength and height",
            "By birth order"
          ],
          correctAnswer: "By looking at the heart, not outward appearance"
        },
        {
          id: "q11",
          type: "true-false",
          question: "Samuel anointed David in the presence of his brothers, and Jehovah’s spirit began to empower him.",
          correctAnswer: true
        },
        {
          id: "q12",
          type: "short-answer",
          question: "What happened to Saul after Jehovah’s spirit left him?",
          correctAnswer: "An evil spirit from Jehovah began to terrify him."
        },
        {
          id: "q13",
          type: "multiple-choice",
          question: "How did David first enter Saul’s service?",
          options: [
            "As a musician to calm Saul’s spirit",
            "As a soldier in Saul’s army",
            "As a messenger between prophets",
            "As a servant in Saul’s household"
          ],
          correctAnswer: "As a musician to calm Saul’s spirit"
        },
        {
          id: "q14",
          type: "true-false",
          question: "David played the harp to soothe Saul whenever the bad spirit troubled him.",
          correctAnswer: true
        }
      ]
    }
  },
  {
    day: 91,
    passage: "1 Samuel 17–18",
    focus: "David and Goliath, and Saul’s jealousy of David",
    quiz: {
      title: "📘 1 Samuel 17–18 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "From which Philistine city was Goliath?",
          options: ["Ekron", "Gath", "Ashdod", "Gaza"],
          correctAnswer: "Gath"
        },
        {
          id: "q2",
          type: "true-false",
          question: "Goliath challenged Israel’s army for 40 days before David fought him.",
          correctAnswer: true
        },
        {
          id: "q3",
          type: "short-answer",
          question: "What was David doing before he came to the battlefield to face Goliath?",
          correctAnswer: "He was tending his father’s sheep in Bethlehem."
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "What reward did Saul promise to whoever defeated Goliath?",
          options: [
            "Great riches, his daughter in marriage, and exemption from taxes for his family",
            "A place in the royal army",
            "A crown of honor and land",
            "A golden sword and armor"
          ],
          correctAnswer: "Great riches, his daughter in marriage, and exemption from taxes for his family"
        },
        {
          id: "q5",
          type: "true-false",
          question: "David accepted Saul’s armor and sword for the battle with Goliath.",
          correctAnswer: false
        },
        {
          id: "q6",
          type: "short-answer",
          question: "What weapon did David use to strike down Goliath?",
          correctAnswer: "A sling and a stone."
        },
        {
          id: "q7",
          type: "multiple-choice",
          question: "What did David do after Goliath fell to the ground?",
          options: [
            "He cut off Goliath’s head with Goliath’s own sword",
            "He took Goliath’s armor as a trophy",
            "He fled the battlefield",
            "He gave thanks immediately before Saul"
          ],
          correctAnswer: "He cut off Goliath’s head with Goliath’s own sword"
        },
        {
          id: "q8",
          type: "true-false",
          question: "After David’s victory, Jonathan became deeply bonded to him in friendship.",
          correctAnswer: true
        },
        {
          id: "q9",
          type: "short-answer",
          question: "What did Jonathan give to David as a symbol of their covenant of friendship?",
          correctAnswer: "His robe, armor, sword, bow, and belt."
        },
        {
          id: "q10",
          type: "multiple-choice",
          question: "What made Saul become jealous of David?",
          options: [
            "The women sang, ‘Saul has struck down his thousands, but David his tens of thousands.’",
            "David refused to obey Saul’s orders.",
            "David was chosen as the next high priest.",
            "Jonathan preferred David to his father."
          ],
          correctAnswer: "The women sang, ‘Saul has struck down his thousands, but David his tens of thousands.’"
        },
        {
          id: "q11",
          type: "true-false",
          question: "Saul tried to kill David by hurling a spear at him twice.",
          correctAnswer: true
        },
        {
          id: "q12",
          type: "short-answer",
          question: "Which of Saul’s daughters was eventually given to David in marriage?",
          correctAnswer: "Michal"
        },
        {
          id: "q13",
          type: "multiple-choice",
          question: "What price did Saul demand from David for marrying his daughter?",
          options: [
            "100 foreskins of the Philistines",
            "A share of his father’s land",
            "50 gold coins",
            "Victory in another battle"
          ],
          correctAnswer: "100 foreskins of the Philistines"
        },
        {
          id: "q14",
          type: "true-false",
          question: "Saul realized that Jehovah was with David and became even more afraid of him.",
          correctAnswer: true
        }
      ]
    }
  },
  {
    day: 92,
    passage: "1 Samuel 19–21",
    focus: "Saul’s pursuit of David and David’s flight for his life",
    quiz: {
      title: "📘 1 Samuel 19–21 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "Who first warned David that Saul was planning to kill him?",
          options: ["Jonathan", "Michal", "Samuel", "Abner"],
          correctAnswer: "Jonathan"
        },
        {
          id: "q2",
          type: "true-false",
          question: "Jonathan convinced Saul for a time not to harm David by reminding him of David’s loyalty.",
          correctAnswer: true
        },
        {
          id: "q3",
          type: "short-answer",
          question: "How did Michal help David escape from Saul’s men?",
          correctAnswer: "She let him down through a window and placed an idol in his bed to make it look like he was ill."
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "Where did David flee first after escaping from his house?",
          options: ["To Samuel at Ramah", "To the tabernacle at Nob", "To Gath", "To the cave of Adullam"],
          correctAnswer: "To Samuel at Ramah"
        },
        {
          id: "q5",
          type: "true-false",
          question: "When Saul sent messengers to capture David at Naioth in Ramah, they all began prophesying.",
          correctAnswer: true
        },
        {
          id: "q6",
          type: "short-answer",
          question: "What sign did David and Jonathan agree on to determine Saul’s intentions toward David?",
          correctAnswer: "Jonathan would shoot arrows near a stone and use his words to signal whether it was safe or not."
        },
        {
          id: "q7",
          type: "multiple-choice",
          question: "At the new moon feast, what excuse did Jonathan give Saul for David’s absence?",
          options: [
            "David had gone to Bethlehem for a family sacrifice",
            "David was sick",
            "David was hiding from the Philistines",
            "David was serving at the tabernacle"
          ],
          correctAnswer: "David had gone to Bethlehem for a family sacrifice"
        },
        {
          id: "q8",
          type: "true-false",
          question: "Saul became so angry with Jonathan that he threw a spear at him.",
          correctAnswer: true
        },
        {
          id: "q9",
          type: "short-answer",
          question: "How did Jonathan and David part after confirming Saul’s hostility?",
          correctAnswer: "They wept together and reaffirmed their covenant of friendship before Jehovah."
        },
        {
          id: "q10",
          type: "multiple-choice",
          question: "When David fled to Nob, what did he receive from Ahimelech the priest?",
          options: [
            "Consecrated bread and Goliath’s sword",
            "A new anointing oil and armor",
            "A donkey and travel provisions",
            "A message from Samuel"
          ],
          correctAnswer: "Consecrated bread and Goliath’s sword"
        },
        {
          id: "q11",
          type: "true-false",
          question: "Doeg the Edomite was present when David met with Ahimelech the priest.",
          correctAnswer: true
        },
        {
          id: "q12",
          type: "short-answer",
          question: "To whom did David flee after leaving Nob?",
          correctAnswer: "To Achish, the king of Gath."
        },
        {
          id: "q13",
          type: "multiple-choice",
          question: "How did David avoid being recognized or killed in Gath?",
          options: [
            "He pretended to be insane, letting saliva run down his beard",
            "He disguised himself as a Philistine soldier",
            "He hid in a cave near Gath",
            "He bribed the king’s servants"
          ],
          correctAnswer: "He pretended to be insane, letting saliva run down his beard"
        },
        {
          id: "q14",
          type: "true-false",
          question: "David’s humility and reliance on Jehovah helped him survive Saul’s repeated attempts to kill him.",
          correctAnswer: true
        }
      ]
    }
  },
  {
    day: 93,
    passage: "1 Samuel 22–24",
    focus: "David in hiding and sparing Saul’s life",
    quiz: {
      title: "📘 1 Samuel 22–24 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "Where did David go after fleeing from Gath?",
          options: ["The cave of Adullam", "Bethlehem", "Ramah", "Hebron"],
          correctAnswer: "The cave of Adullam"
        },
        {
          id: "q2",
          type: "true-false",
          question: "David’s family and about 400 men who were in distress or debt gathered around him at Adullam.",
          correctAnswer: true
        },
        {
          id: "q3",
          type: "short-answer",
          question: "To which land did David take his parents for protection?",
          correctAnswer: "The land of Moab."
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "Who betrayed the priests of Nob to Saul?",
          options: ["Doeg the Edomite", "Abner", "Ahithophel", "Jonathan"],
          correctAnswer: "Doeg the Edomite"
        },
        {
          id: "q5",
          type: "true-false",
          question: "Saul ordered all the priests of Nob to be killed, and Doeg carried out the execution.",
          correctAnswer: true
        },
        {
          id: "q6",
          type: "short-answer",
          question: "Who escaped the massacre at Nob and joined David?",
          correctAnswer: "Abiathar, the son of Ahimelech."
        },
        {
          id: "q7",
          type: "multiple-choice",
          question: "How did David save the city of Keilah?",
          options: [
            "By attacking the Philistines who were raiding it",
            "By sending gifts to the elders",
            "By making a treaty with Saul",
            "By hiding the townspeople from Amalekites"
          ],
          correctAnswer: "By attacking the Philistines who were raiding it"
        },
        {
          id: "q8",
          type: "true-false",
          question: "Jehovah revealed to David that the men of Keilah would betray him to Saul.",
          correctAnswer: true
        },
        {
          id: "q9",
          type: "short-answer",
          question: "Who came to strengthen David while he was hiding in the wilderness of Ziph?",
          correctAnswer: "Jonathan, Saul’s son."
        },
        {
          id: "q10",
          type: "multiple-choice",
          question: "In what location did David secretly cut off a piece of Saul’s robe?",
          options: ["A cave in En-gedi", "The cave of Adullam", "The hill of Hachilah", "Keilah’s gate"],
          correctAnswer: "A cave in En-gedi"
        },
        {
          id: "q11",
          type: "true-false",
          question: "After cutting Saul’s robe, David felt remorse for having shown such disrespect to Jehovah’s anointed one.",
          correctAnswer: true
        },
        {
          id: "q12",
          type: "short-answer",
          question: "What did David say to Saul after revealing that he had spared his life?",
          correctAnswer: "He said that Jehovah would judge between them, but he would not harm Saul."
        },
        {
          id: "q13",
          type: "multiple-choice",
          question: "How did Saul respond when David showed him the piece of his robe?",
          options: [
            "He wept and acknowledged David’s righteousness",
            "He attacked David again",
            "He demanded David’s surrender",
            "He accused David of trickery"
          ],
          correctAnswer: "He wept and acknowledged David’s righteousness"
        },
        {
          id: "q14",
          type: "true-false",
          question: "Saul admitted that David would one day become king over Israel.",
          correctAnswer: true
        }
      ]
    }
  },
  {
    day: 94,
    passage: "1 Samuel 25–27",
    focus: "Abigail's intervention, David's respect for Jehovah's anointed, and David's refuge with the Philistines (Ziklag)",
    quiz: {
      title: "📘 1 Samuel 25–27 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "Who was Nabal?",
          options: [
            "A wealthy but harsh man in Carmel",
            "A Philistine commander",
            "David’s loyal chief",
            "A prophet of Jehovah"
          ],
          correctAnswer: "A wealthy but harsh man in Carmel"
        },
        {
          id: "q2",
          type: "multiple-choice",
          question: "What did Abigail do when she met David?",
          options: [
            "Offered gifts, pleaded for mercy, and restrained David from bloodshed",
            "Led David’s men into battle against Nabal",
            "Reported Nabal to the elders of Carmel",
            "Refused to intervene on Nabal’s behalf"
          ],
          correctAnswer: "Offered gifts, pleaded for mercy, and restrained David from bloodshed"
        },
        {
          id: "q3",
          type: "true-false",
          question: "About ten days after Abigail’s intervention, Jehovah struck Nabal and he died.",
          correctAnswer: true
        },
        {
          id: "q4",
          type: "short-answer",
          question: "Why did David originally plan to destroy Nabal?",
          correctAnswer: "Because Nabal refused provisions to David’s men and insulted them, provoking David to seek vengeance."
        },
        {
          id: "q5",
          type: "multiple-choice",
          question: "What warning did Abigail give David when she met him?",
          options: [
            "Do not carry out revenge or shed blood unnecessarily",
            "Seize Nabal’s wealth immediately",
            "Marry another woman to strengthen your position",
            "Make a covenant with the Philistines"
          ],
          correctAnswer: "Do not carry out revenge or shed blood unnecessarily"
        },
        {
          id: "q6",
          type: "true-false",
          question: "After Nabal died, David married Abigail.",
          correctAnswer: true
        },
        {
          id: "q7",
          type: "multiple-choice",
          question: "In chapter 26 what opportunity did David and Abishai find while Saul slept?",
          options: [
            "To kill Saul while he slept in the camp",
            "To steal the Ark of the Covenant",
            "To declare David king before the people",
            "To turn Saul over to the Philistines"
          ],
          correctAnswer: "To kill Saul while he slept in the camp"
        },
        {
          id: "q8",
          type: "short-answer",
          question: "How did David demonstrate he had not harmed Saul in chapter 26?",
          correctAnswer: "He took Saul’s spear and water jug from beside him and later called out to show Saul they had spared his life."
        },
        {
          id: "q9",
          type: "multiple-choice",
          question: "Why did David flee to the Philistine territory and seek refuge with Achish in chapter 27?",
          options: [
            "He feared Saul and sought safety under Achish",
            "He wanted to seize the Philistine throne",
            "Jehovah commanded him to live among the Philistines",
            "He was expelled from Israel by the elders"
          ],
          correctAnswer: "He feared Saul and sought safety under Achish"
        },
        {
          id: "q10",
          type: "true-false",
          question: "While living with Achish, David raided neighboring peoples and misled Achish by claiming his raids were against Israel.",
          correctAnswer: true
        },
        {
          id: "q11",
          type: "short-answer",
          question: "What town did Achish give David to live in while David served him?",
          correctAnswer: "Ziklag"
        },
        {
          id: "q12",
          type: "multiple-choice",
          question: "Which theme is emphasized across these chapters?",
          options: [
            "David’s respect for Jehovah’s anointed and reliance on Jehovah’s guidance",
            "David’s immediate seizure of power by force",
            "Saul’s success in eliminating David",
            "The Philistines’ loyalty to Israel"
          ],
          correctAnswer: "David’s respect for Jehovah’s anointed and reliance on Jehovah’s guidance"
        }
      ]
    }
  },
  {
    day: 94,
    passage: "1 Samuel 25–27",
    focus: "Abigail's wisdom prevents bloodshed; David spares Saul again; David's refuge among the Philistines",
    quiz: {
      title: "📘 1 Samuel 25–27 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "What was Nabal's occupation and how is he described in the account?",
          options: [
            "A shepherd who was kind and generous",
            "A wealthy man with sheep and goats who was harsh and bad in his dealings",
            "A poor farmer who refused to help David",
            "A Philistine merchant who traded with Israel"
          ],
          correctAnswer: "A wealthy man with sheep and goats who was harsh and bad in his dealings"
        },
        {
          id: "q2",
          type: "true-false",
          question: "David's men had protected Nabal's shepherds and flocks while they were in the wilderness.",
          correctAnswer: true
        },
        {
          id: "q3",
          type: "multiple-choice",
          question: "How did Nabal respond when David sent messengers asking for provisions?",
          options: [
            "He generously gave them food and supplies",
            "He insulted David and refused to give anything",
            "He invited David to a feast",
            "He offered David half of his flocks"
          ],
          correctAnswer: "He insulted David and refused to give anything"
        },
        {
          id: "q4",
          type: "short-answer",
          question: "Who intervened to prevent David from taking revenge on Nabal's household?",
          correctAnswer: "Abigail, Nabal's wife"
        },
        {
          id: "q5",
          type: "multiple-choice",
          question: "What did Abigail bring to David and his men?",
          options: [
            "Gold and silver",
            "Bread, wine, sheep, roasted grain, raisin cakes, and fig cakes",
            "Weapons and armor",
            "Only water and bread"
          ],
          correctAnswer: "Bread, wine, sheep, roasted grain, raisin cakes, and fig cakes"
        },
        {
          id: "q6",
          type: "true-false",
          question: "Abigail told Nabal about her meeting with David before she went to see David.",
          correctAnswer: false
        },
        {
          id: "q7",
          type: "short-answer",
          question: "What happened to Nabal about ten days after Abigail told him about her intervention?",
          correctAnswer: "Jehovah struck him and he died"
        },
        {
          id: "q8",
          type: "multiple-choice",
          question: "What did David do after learning of Nabal's death?",
          options: [
            "He took Nabal's wealth for himself",
            "He sent messengers to propose marriage to Abigail",
            "He mourned for Nabal for many days",
            "He returned to Saul's service"
          ],
          correctAnswer: "He sent messengers to propose marriage to Abigail"
        },
        {
          id: "q9",
          type: "true-false",
          question: "David spared Saul's life a second time when he found him sleeping in the camp.",
          correctAnswer: true
        },
        {
          id: "q10",
          type: "multiple-choice",
          question: "What did David take from Saul's camp as proof that he had spared the king's life?",
          options: [
            "Saul's crown and scepter",
            "Saul's spear and water jug",
            "Saul's sword and shield",
            "Saul's robe and sandals"
          ],
          correctAnswer: "Saul's spear and water jug"
        },
        {
          id: "q11",
          type: "short-answer",
          question: "Who was sleeping beside Saul and did not wake up when David entered the camp?",
          correctAnswer: "Abner, the chief of Saul's army"
        },
        {
          id: "q12",
          type: "multiple-choice",
          question: "Where did David go to find refuge from Saul in chapter 27?",
          options: [
            "To Egypt",
            "To the land of the Philistines, to King Achish of Gath",
            "To Moab",
            "To the wilderness of Judah"
          ],
          correctAnswer: "To the land of the Philistines, to King Achish of Gath"
        },
        {
          id: "q13",
          type: "true-false",
          question: "Saul continued to search for David after learning he had gone to the Philistines.",
          correctAnswer: false
        },
        {
          id: "q14",
          type: "multiple-choice",
          question: "How long did David live in Philistine territory according to this account?",
          options: [
            "Four months",
            "One year and four months",
            "Two years",
            "Six months"
          ],
          correctAnswer: "One year and four months"
        }
      ]
    }
  },
  {
    day: 95,
    passage: "1 Samuel 28–31",
    focus: "Saul's desperate consultation with a spirit medium; David dismissed from Philistine battle; Saul and his sons die in battle",
    quiz: {
      title: "📘 1 Samuel 28–31 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "Why did Saul become afraid when he saw the Philistine army?",
          options: [
            "Because his army had deserted him",
            "Because Jehovah did not answer him by dreams, by Urim, or by prophets",
            "Because David had joined the Philistines",
            "Because he had no weapons to fight"
          ],
          correctAnswer: "Because Jehovah did not answer him by dreams, by Urim, or by prophets"
        },
        {
          id: "q2",
          type: "true-false",
          question: "Saul had previously removed the spirit mediums and fortune-tellers from the land.",
          correctAnswer: true
        },
        {
          id: "q3",
          type: "multiple-choice",
          question: "Where did Saul go to consult with a spirit medium?",
          options: [
            "Bethlehem",
            "Endor",
            "Ramah",
            "Gilgal"
          ],
          correctAnswer: "Endor"
        },
        {
          id: "q4",
          type: "short-answer",
          question: "Whom did Saul ask the spirit medium to bring up for him?",
          correctAnswer: "Samuel"
        },
        {
          id: "q5",
          type: "multiple-choice",
          question: "What message did Saul receive through the medium about the upcoming battle?",
          options: [
            "That he would defeat the Philistines",
            "That Jehovah would forgive him if he repented",
            "That he and his sons would die and Israel would be defeated",
            "That David would return to help him"
          ],
          correctAnswer: "That he and his sons would die and Israel would be defeated"
        },
        {
          id: "q6",
          type: "true-false",
          question: "The Philistine lords trusted David and wanted him to fight alongside them against Israel.",
          correctAnswer: false
        },
        {
          id: "q7",
          type: "multiple-choice",
          question: "Why did the Philistine lords object to David going into battle with them?",
          options: [
            "They feared he would turn against them in battle",
            "They didn't think he was a skilled warrior",
            "King Achish refused to let him go",
            "David had requested to stay behind"
          ],
          correctAnswer: "They feared he would turn against them in battle"
        },
        {
          id: "q8",
          type: "short-answer",
          question: "What did David find when he returned to Ziklag after being dismissed by the Philistines?",
          correctAnswer: "The city had been burned and the women and children, including his wives, had been taken captive by the Amalekites"
        },
        {
          id: "q9",
          type: "true-false",
          question: "David's men wanted to stone him because they were bitter over their captured families.",
          correctAnswer: true
        },
        {
          id: "q10",
          type: "multiple-choice",
          question: "How did David know which direction to pursue the Amalekite raiders?",
          options: [
            "He followed their tracks in the sand",
            "He inquired of Jehovah through the priest Abiathar",
            "A Philistine prisoner told him",
            "He guessed their direction"
          ],
          correctAnswer: "He inquired of Jehovah through the priest Abiathar"
        },
        {
          id: "q11",
          type: "multiple-choice",
          question: "Who did David find in the field that helped guide him to the Amalekite camp?",
          options: [
            "An Israelite shepherd",
            "A wounded Philistine soldier",
            "An Egyptian servant who had been abandoned by his Amalekite master",
            "One of Saul's soldiers"
          ],
          correctAnswer: "An Egyptian servant who had been abandoned by his Amalekite master"
        },
        {
          id: "q12",
          type: "true-false",
          question: "David recovered everything the Amalekites had taken, including all the people.",
          correctAnswer: true
        },
        {
          id: "q13",
          type: "multiple-choice",
          question: "Where did the battle between Israel and the Philistines take place?",
          options: [
            "Valley of Elah",
            "Mount Gilboa",
            "Plains of Jezreel",
            "Wilderness of Ziph"
          ],
          correctAnswer: "Mount Gilboa"
        },
        {
          id: "q14",
          type: "short-answer",
          question: "Name at least two of Saul's sons who died in the battle with him.",
          correctAnswer: "Jonathan, Abinadab, and Malchishua (any two acceptable)"
        },
        {
          id: "q15",
          type: "multiple-choice",
          question: "How did Saul die?",
          options: [
            "A Philistine soldier killed him",
            "He fell on his own sword after his armor-bearer refused to kill him",
            "Jonathan accidentally killed him",
            "He died from his battle wounds later"
          ],
          correctAnswer: "He fell on his own sword after his armor-bearer refused to kill him"
        },
        {
          id: "q16",
          type: "true-false",
          question: "The Philistines fastened Saul's body to the wall of Beth-shan.",
          correctAnswer: true
        },
        {
          id: "q17",
          type: "multiple-choice",
          question: "Who risked their lives to recover the bodies of Saul and his sons from Beth-shan?",
          options: [
            "David and his men",
            "The valiant men of Jabesh-gilead",
            "The remaining Israelite army",
            "Saul's servants from Gibeah"
          ],
          correctAnswer: "The valiant men of Jabesh-gilead"
        }
      ]
    }
  },
  {
    day: 96,
    passage: "2 Samuel 1–2",
    focus: "David's lament for Saul and Jonathan; David becomes king over Judah; conflict with Saul's remaining house",
    quiz: {
      title: "📘 2 Samuel 1–2 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "Who brought David the news of Saul's death?",
          options: [
            "One of David's own men",
            "A young Amalekite man",
            "Abner, Saul's army chief",
            "One of the Philistines"
          ],
          correctAnswer: "A young Amalekite man"
        },
        {
          id: "q2",
          type: "true-false",
          question: "The Amalekite claimed that he had killed Saul at Saul's own request.",
          correctAnswer: true
        },
        {
          id: "q3",
          type: "multiple-choice",
          question: "What did the Amalekite bring to David as proof of Saul's death?",
          options: [
            "Saul's sword and armor",
            "Saul's crown and arm bracelet",
            "Saul's robe and ring",
            "Saul's spear and shield"
          ],
          correctAnswer: "Saul's crown and arm bracelet"
        },
        {
          id: "q4",
          type: "short-answer",
          question: "What did David do to the Amalekite who claimed to have killed Saul?",
          correctAnswer: "David had him executed for striking down Jehovah's anointed"
        },
        {
          id: "q5",
          type: "true-false",
          question: "David composed a dirge (lamentation) for Saul and Jonathan that was recorded in the Book of Jashar.",
          correctAnswer: true
        },
        {
          id: "q6",
          type: "multiple-choice",
          question: "In David's lament, how did he describe Saul and Jonathan?",
          options: [
            "Weak and defeated warriors",
            "Swifter than eagles and mightier than lions",
            "Humble and kind rulers",
            "Foolish and disobedient leaders"
          ],
          correctAnswer: "Swifter than eagles and mightier than lions"
        },
        {
          id: "q7",
          type: "short-answer",
          question: "What famous phrase did David use about Jonathan in his lament?",
          correctAnswer: "Your love to me was more wonderful than the love of women (or similar quote about Jonathan's love)"
        },
        {
          id: "q8",
          type: "multiple-choice",
          question: "After inquiring of Jehovah, where did David go to be anointed as king?",
          options: [
            "Jerusalem",
            "Gibeah",
            "Hebron in Judah",
            "Bethlehem"
          ],
          correctAnswer: "Hebron in Judah"
        },
        {
          id: "q9",
          type: "true-false",
          question: "All twelve tribes of Israel immediately accepted David as king after Saul's death.",
          correctAnswer: false
        },
        {
          id: "q10",
          type: "multiple-choice",
          question: "Who made Ish-bosheth, Saul's son, king over Israel?",
          options: [
            "The elders of Israel",
            "Abner, the chief of Saul's army",
            "David himself",
            "The Philistines"
          ],
          correctAnswer: "Abner, the chief of Saul's army"
        },
        {
          id: "q11",
          type: "short-answer",
          question: "What city did David commend for their loyal kindness in burying Saul?",
          correctAnswer: "Jabesh-gilead"
        },
        {
          id: "q12",
          type: "multiple-choice",
          question: "How long did Ish-bosheth rule over Israel?",
          options: [
            "Seven years",
            "Two years",
            "Five years",
            "One year"
          ],
          correctAnswer: "Two years"
        },
        {
          id: "q13",
          type: "true-false",
          question: "A battle took place between David's men and Ish-bosheth's men at the pool of Gibeon.",
          correctAnswer: true
        },
        {
          id: "q14",
          type: "multiple-choice",
          question: "Who was the commander of David's army?",
          options: [
            "Abner",
            "Joab",
            "Asahel",
            "Abishai"
          ],
          correctAnswer: "Joab"
        },
        {
          id: "q15",
          type: "short-answer",
          question: "Which of Joab's brothers was killed by Abner during the pursuit after the battle?",
          correctAnswer: "Asahel"
        },
        {
          id: "q16",
          type: "multiple-choice",
          question: "Why did Abner kill Asahel?",
          options: [
            "Asahel had insulted him",
            "Asahel persistently pursued him and refused to turn away despite warnings",
            "It was an accident during the battle",
            "Joab ordered Abner's death"
          ],
          correctAnswer: "Asahel persistently pursued him and refused to turn away despite warnings"
        }
      ]
    }
  },
  {
    day: 97,
    passage: "2 Samuel 3–5",
    focus: "Abner defects to David but is killed by Joab; Ish-bosheth assassinated; David becomes king over all Israel and conquers Jerusalem",
    quiz: {
      title: "📘 2 Samuel 3–5 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "What caused a quarrel between Abner and Ish-bosheth?",
          options: [
            "Abner wanted to make peace with David",
            "Ish-bosheth accused Abner of relations with Saul's concubine Rizpah",
            "Abner refused to fight against David",
            "Ish-bosheth wanted to remove Abner as army chief"
          ],
          correctAnswer: "Ish-bosheth accused Abner of relations with Saul's concubine Rizpah"
        },
        {
          id: "q2",
          type: "true-false",
          question: "Abner decided to transfer the kingdom to David after his quarrel with Ish-bosheth.",
          correctAnswer: true
        },
        {
          id: "q3",
          type: "short-answer",
          question: "What did David demand be returned to him before he would make a covenant with Abner?",
          correctAnswer: "His wife Michal, Saul's daughter"
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "Why did Joab kill Abner?",
          options: [
            "David ordered him to do it",
            "To avenge the blood of his brother Asahel and out of jealousy",
            "Abner had betrayed David",
            "It was an accident during training"
          ],
          correctAnswer: "To avenge the blood of his brother Asahel and out of jealousy"
        },
        {
          id: "q5",
          type: "true-false",
          question: "David approved of Joab's killing of Abner and rewarded him.",
          correctAnswer: false
        },
        {
          id: "q6",
          type: "multiple-choice",
          question: "Who assassinated Ish-bosheth?",
          options: [
            "Joab and Abishai",
            "Abner's relatives seeking revenge",
            "Two of his own army chiefs, Baanah and Rechab",
            "Philistine raiders"
          ],
          correctAnswer: "Two of his own army chiefs, Baanah and Rechab"
        },
        {
          id: "q7",
          type: "short-answer",
          question: "What did David do to the men who killed Ish-bosheth and brought his head to David?",
          correctAnswer: "He had them executed and their bodies hung up by the pool in Hebron"
        },
        {
          id: "q8",
          type: "multiple-choice",
          question: "How old was David when he became king over all Israel?",
          options: [
            "25 years old",
            "30 years old",
            "35 years old",
            "40 years old"
          ],
          correctAnswer: "30 years old"
        },
        {
          id: "q9",
          type: "true-false",
          question: "David captured Jerusalem from the Jebusites and made it his capital, calling it the City of David.",
          correctAnswer: true
        },
        {
          id: "q10",
          type: "multiple-choice",
          question: "What did the Philistines do when they heard David had been anointed king over all Israel?",
          options: [
            "They made peace with David",
            "They fled back to their own land",
            "They came up to search for David",
            "They sent him gifts and tribute"
          ],
          correctAnswer: "They came up to search for David"
        }
      ]
    }
  },
  {
    day: 98,
    passage: "2 Samuel 6–8",
    focus: "The Ark brought to Jerusalem; David's desire to build a temple; Jehovah's covenant with David; David's military victories",
    quiz: {
      title: "📘 2 Samuel 6–8 Study Quiz (NWT)",
      questions: [
        {
          id: "q1",
          type: "multiple-choice",
          question: "What happened to Uzzah when he reached out to steady the Ark of God?",
          options: [
            "He was blessed by Jehovah",
            "Jehovah struck him down and he died",
            "Nothing happened to him",
            "He became a priest"
          ],
          correctAnswer: "Jehovah struck him down and he died"
        },
        {
          id: "q2",
          type: "true-false",
          question: "David was afraid after Uzzah's death and left the Ark at the house of Obed-edom for three months.",
          correctAnswer: true
        },
        {
          id: "q3",
          type: "short-answer",
          question: "What did David do as the Ark was being brought into the City of David?",
          correctAnswer: "He danced and leaped with all his power before Jehovah (or celebrated with dancing)"
        },
        {
          id: "q4",
          type: "multiple-choice",
          question: "Who despised David in her heart when she saw him leaping and dancing before Jehovah?",
          options: [
            "Abigail",
            "Bathsheba",
            "Michal, Saul's daughter",
            "Ahinoam"
          ],
          correctAnswer: "Michal, Saul's daughter"
        },
        {
          id: "q5",
          type: "true-false",
          question: "Jehovah allowed David to build a house (temple) for Him.",
          correctAnswer: false
        },
        {
          id: "q6",
          type: "multiple-choice",
          question: "Who did Jehovah say would build a house for His name?",
          options: [
            "David himself",
            "The high priest",
            "David's son (Solomon)",
            "The prophet Nathan"
          ],
          correctAnswer: "David's son (Solomon)"
        },
        {
          id: "q7",
          type: "short-answer",
          question: "What did Jehovah promise to establish forever in His covenant with David?",
          correctAnswer: "David's throne/kingdom/dynasty (his royal line)"
        },
        {
          id: "q8",
          type: "multiple-choice",
          question: "Which prophet brought Jehovah's message to David about not building the temple?",
          options: [
            "Samuel",
            "Gad",
            "Nathan",
            "Elijah"
          ],
          correctAnswer: "Nathan"
        },
        {
          id: "q9",
          type: "true-false",
          question: "David defeated the Philistines, Moabites, Syrians, and Edomites, extending Israel's territory.",
          correctAnswer: true
        },
        {
          id: "q10",
          type: "multiple-choice",
          question: "What did David do with the tribute and spoil from the nations he conquered?",
          options: [
            "He kept it all for himself",
            "He distributed it among his soldiers",
            "He sanctified it to Jehovah",
            "He used it to build a palace"
          ],
          correctAnswer: "He sanctified it to Jehovah"
        }
      ]
    }
  }





];

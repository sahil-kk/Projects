// This is a placeholder structure for the 7 categories.
// You can replace the contents of the questions array later.

export const categories = [
  { id: "quant", title: "Quantitative Aptitude & Mathematics" },
  { id: "logic", title: "Logical & Visual Reasoning" },
  { id: "critical", title: "Critical Reasoning" },
  { id: "business", title: "Business Management & Problem Solving" },
  { id: "interview", title: "Interview Preparation" },
  { id: "communication", title: "Communication Skills" },
  { id: "algo", title: "Algorithmic Thinking" }
];

export const quizData = {
  quant: [
    {
      id: 1,
      subtopic: "Logarithms",
      question: "Which of the following statements is not correct?",
      options: [
        "log10(10) = 1",
        "log(2 + 3) = log(2 × 3)",
        "log10(1) = 0",
        "log(1 + 2 + 3) = log1 + log2 + log3"
      ],
      correctAnswer: "log(2 + 3) = log(2 × 3)" // [1, 4]
    },
    {
      id: 2,
      subtopic: "Logarithms",
      question: "If log 2 = 0.3010 and log 3 = 0.4771, the value of log5 512 is:",
      options: ["2.870", "2.967", "3.876", "3.912"],
      correctAnswer: "3.876" // [4, 7]
    },
    {
      id: 3,
      subtopic: "Logarithms",
      question: "If log 27 = 1.431, then the value of log 9 is:",
      options: ["0.934", "0.945", "0.954", "0.958"],
      correctAnswer: "0.954" // [4, 8]
    },
    {
      id: 4,
      subtopic: "Logarithms",
      question: "If log10 2 = 0.3010, then log2 10 is equal to:",
      options: ["699/301", "1000/301", "0.301", "0.699"],
      correctAnswer: "1000/301" // [4, 9]
    },
    {
      id: 5,
      subtopic: "Logarithms",
      question: "If log10 5 + log10 (5x + 1) = log10 (x + 5) + 1, then x is equal to:",
      options: ["1", "3", "5", "10"],
      correctAnswer: "3" // [4, 10]
    },
    {
      id: 6,
      subtopic: "Logarithms",
      question: "If log 2 = 0.30103, the number of digits in 2^64 is:",
      options: ["18", "19", "20", "21"],
      correctAnswer: "20" // [4, 11]
    },
    {
      id: 7,
      subtopic: "Logarithms",
      question: "If logx(y) = 100 and log2(x) = 10, then the value of y is:",
      options: ["2^10", "2^100", "2^1000", "2^10000"],
      correctAnswer: "2^1000" // [5, 12]
    },
    {
      id: 8,
      subtopic: "Logarithms",
      question: "If log4(X) + log4(1/6) = 1/2, then the value of X is?",
      options: ["18", "12", "24", "16"],
      correctAnswer: "12" // [5, 13]
    },
    {
      id: 9,
      subtopic: "Logarithms",
      question: "If 3^(x - 2) = 5 and log 2 = 0.30103, log 3 = 0.4771, then x = ?",
      options: ["2.7", "1.4", "2.4", "3.4"],
      correctAnswer: "3.4" // [5, 14]
    },
    {
      id: 10,
      subtopic: "Logarithms",
      question: "If log10(2) = 0.30103 and log 3 = 0.4771, then number of digits in 648^5 is?",
      options: ["12", "13", "14", "15"],
      correctAnswer: "15" // [5, 15]
    },
    {
      id: 11,
      subtopic: "Logarithms",
      question: "Value of 361^(log19 5) is:",
      options: ["25", "361", "5", "19"],
      correctAnswer: "25" // [5]
    },
    {
      id: 12,
      subtopic: "Logarithms",
      question: "Simplify: log4(3) × log243(64)",
      options: ["3/5", "2/5", "1/2", "2/3"],
      correctAnswer: "3/5" // [2, 5]
    },
    {
      id: 13,
      subtopic: "Logarithms",
      question: "Multiplying a number by 10, its log (base 10):",
      options: ["Increase by 10", "Increase by 1", "Multiplied by 10", "None of these"],
      correctAnswer: "Increase by 1" // [5]
    },
    {
      id: 14,
      subtopic: "Logarithms",
      question: "Find the value of x which satisfies the given expression [log10 2 + log (4x + 1) = log (x + 2) + 1]:",
      options: ["6", "7", "-9", "-7"],
      correctAnswer: "-9" // [5, 16]
    },
    {
      id: 15,
      subtopic: "Logarithms",
      question: "Given log64(x) = 2/6, find x.",
      options: ["2", "4", "6", "8"],
      correctAnswer: "4" // [6]
    },
    {
      id: 16,
      subtopic: "Logarithms",
      question: "If logX = (logY)/2 = (logZ)/5, then X^4 * Y^3 * Z^-2 = ?",
      options: ["2", "10", "1", "0"],
      correctAnswer: "1" // [3]
    },
    {
      id: 17,
      subtopic: "Logarithms",
      question: "If log_n 48 = a and log_n 108 = b. What is the value of log_n 1296 in terms of a and b?",
      options: ["2(2a + b)/5", "(a + 3b)/5", "4(2a + b)/5", "2(a + 3b)/5"],
      correctAnswer: "2(a + 3b)/5" // [17]
    },
    {
      id: 18,
      subtopic: "Logarithms",
      question: "If 2logX = 5logY + 3, then the relation between X and Y is?",
      options: ["X^2 = 100Y^5", "X^(1/5) = 1000Y^(1/2)", "X^2 = Y^5 + 1000", "None of these"],
      correctAnswer: "X^2 = 100Y^5" // [18]
    },

    // --- AP & GP ---
    {
      id: 19,
      subtopic: "AP & GP",
      question: "There is an AP 11, 13, 15.... Which term of this AP is 65?",
      options: ["23th", "31st", "28th", "41st"],
      correctAnswer: "28th"
    },
    {
      id: 20,
      subtopic: "AP & GP",
      question: "Find the 25th term of the sequence 50, 45, 40, ...",
      options: ["-70", "-75", "-65", "-105"],
      correctAnswer: "-70"
    },
    {
      id: 21,
      subtopic: "AP & GP",
      question: "In an A.P t7 – t4 = 20. Which of the following is false?",
      options: [
        "We can’t determine the first term",
        "Difference between first term and tenth term is 60",
        "A.M of 12th term and 20th term is 16th term",
        "A.M of 5th term and 30th term is 17th term"
      ],
      correctAnswer: "A.M of 5th term and 30th term is 17th term"
    },
    {
      id: 22,
      subtopic: "AP & GP",
      question: "The 6th and 20th terms of an AP are 8 and −20 respectively. Find the 30th term.",
      options: ["-34", "-70", "-50", "-40"],
      correctAnswer: "-40"
    },
    {
      id: 23,
      subtopic: "AP & GP",
      question: "If Ajit saves Rs. 400 more each year than he did the year before and if he saves Rs. 2000 in the first year, after how many years will his savings be more than Rs.1,00,000 altogether?",
      options: ["20 years", "19 years", "21 years", "22 years"],
      correctAnswer: "19 years"
    },
    {
      id: 24,
      subtopic: "AP & GP",
      question: "Anita and Babita set out to meet each other from two places 200 km apart. Anita travels 20 km the first day, 19 km the second day, 18 km the third day and so on. Babita travels 8 km the first day, 10 km the second day, 12 km the third day and so on. After how many days will they meet?",
      options: ["7 days", "6 days", "9 days", "9.5 days"],
      correctAnswer: "7 days"
    },
    {
      id: 25,
      subtopic: "AP & GP",
      question: "How many natural numbers between 100 to 500 are multiples of 9?",
      options: ["34", "44", "42", "35"],
      correctAnswer: "44"
    },
    {
      id: 26,
      subtopic: "AP & GP",
      question: "Binay was appointed to Mindworkzz in the pay scale of 12000–1500–22,500. Find how many years he will take to reach the maximum of the scale.",
      options: ["6 years", "7 years", "9 years", "5 years"],
      correctAnswer: "7 years"
    },
    {
      id: 27,
      subtopic: "AP & GP",
      question: "The sum of the first 20 terms of an AP whose first term and third term are 25 and 35, respectively is:",
      options: ["1300", "1200", "1450", "1050"],
      correctAnswer: "1450"
    },
    {
      id: 28,
      subtopic: "AP & GP",
      question: "After striking the floor, a rubber ball rebounds to 3/5th of the height from which it has fallen. Find the total distance that it travels before coming to rest if it has been gently dropped from a height of 20 metres.",
      options: ["80 m", "120 m", "65 m", "45 m"],
      correctAnswer: "80 m"
    },
    {
      id: 29,
      subtopic: "AP & GP",
      question: "Find the 10th term of the AP: 3, 7, 11, 15, …",
      options: ["38", "39", "40", "None of these"],
      correctAnswer: "39"
    },
    {
      id: 30,
      subtopic: "AP & GP",
      question: "Find the common difference of the AP if the 8th term is 21 and the first term is 5",
      options: ["16/7", "15/7", "17/6", "2/3"],
      correctAnswer: "16/7"
    },
    {
      id: 31,
      subtopic: "AP & GP",
      question: "The 5th term of an AP is 23 and the 12th term is 51. Find the first term and the common difference.",
      options: ["a = 4, d = 2", "a = 7, d = 5", "a = 9, d = 4", "a = 7, d = 4"],
      correctAnswer: "a = 7, d = 4"
    },
    {
      id: 32,
      subtopic: "AP & GP",
      question: "If 7th term and 13th term of an AP be 34 and 64 respectively, then its 18th term is:",
      options: ["20", "89", "80", "30"],
      correctAnswer: "89"
    },
    {
      id: 33,
      subtopic: "AP & GP",
      question: "The sum of the first n terms is Sn = 3n² + n. Find the 20th term.",
      options: ["118", "112", "108", "114"],
      correctAnswer: "118"
    },
    {
      id: 34,
      subtopic: "AP & GP",
      question: "Find the 10th term of the GP: 3, 6, 12, 24, …",
      options: ["1456", "1546", "1536", "1523"],
      correctAnswer: "1536"
    },
    {
      id: 35,
      subtopic: "AP & GP",
      question: "The 4th term of a GP is 54 and the 8th term is 4374. Find the first term and common ratio.",
      options: ["a = 2, r = 3", "a = 2, r = 2", "a = 1, r = 3", "a = 2, r = 4"],
      correctAnswer: "a = 2, r = 3"
    },
    {
      id: 36,
      subtopic: "AP & GP",
      question: "If 5th term of a GP is 81 and first term is 16, find the 4th term.",
      options: ["54", "53", "52", "48"],
      correctAnswer: "54"
    },
    {
      id: 37,
      subtopic: "AP & GP",
      question: "How many terms are in GP 5, 20, 80, 320, … 20480 ?",
      options: ["5", "6", "7", "8"],
      correctAnswer: "7"
    },
    {
      id: 38,
      subtopic: "AP & GP",
      question: "If a, b, c are in AP then 3^a, 3^b, 3^c are in ?",
      options: ["AP", "GP", "HP", "None of these"],
      correctAnswer: "GP"
    },
    {
      id: 39,
      subtopic: "AP & GP",
      question: "If x, y, z are in GP and x+y+z = 14, x²+y²+z² = 84, find x, y, z.",
      options: ["2, 4, 10", "2, 4, 8", "2, 8, 10", "None of these"],
      correctAnswer: "2, 4, 8"
    },
    {
      id: 40,
      subtopic: "AP & GP",
      question: "Find the number of 2-digit numbers divisible by 4.",
      options: ["24", "26", "26", "22"],
      correctAnswer: "22"
    },
    {
      id: 41,
      subtopic: "AP & GP",
      question: "In an AP, if pth term = 1/q and qth term = 1/p, then find the sum of terms of p and q.",
      options: ["(pq − 1)", "2(pq − 1)", "(pq − 1)/2", "(pq + 1)/2"],
      correctAnswer: "(pq + 1)/2"
    },
    {
      id: 42,
      subtopic: "AP & GP",
      question: "The sum of three consecutive terms of a GP is 21 and their product is 216. Find the terms.",
      options: ["3, 6, 12", "3, 6, 14", "4, 6, 12", "4, 8, 12"],
      correctAnswer: "3, 6, 12"
    },

    // --- GEOMETRY & MENSURATION ---
    {
      id: 43,
      subtopic: "Geometry & Mensuration",
      question: "If angles P and Q are complementary to one another, and angle P is two times of angle Q. Calculate the measure of angle P.",
      options: ["60°", "90°", "120°", "180°"],
      correctAnswer: "60°"
    },
    {
      id: 44,
      subtopic: "Geometry & Mensuration",
      question: "Find the measure of an angle if five times its complement is 10° less than twice its supplement.",
      options: ["63.33°", "33.33°", "43.33°", "13.33°"],
      correctAnswer: "33.33°"
    },
    {
      id: 45,
      subtopic: "Geometry & Mensuration",
      question: "In a triangle ΔXYZ, if 3∠X = 4∠Y = 5∠Z, then find the value of ∠X.",
      options: ["74.3°", "76.4°", "76.6°", "75.4°"],
      correctAnswer: "76.6°"
    },
    {
      id: 46,
      subtopic: "Geometry & Mensuration",
      question: "In a circle with a radius of 10 cm, find the length of a chord that is 6 cm from the center.",
      options: ["12 cm", "13 cm", "15 cm", "16 cm"],
      correctAnswer: "16 cm"
    },
    {
      id: 47,
      subtopic: "Geometry & Mensuration",
      question: "Which of the following statements about geometric properties is not correct?",
      options: [
        "A line tangent to a circle intersects the circle at one point only.",
        "The longer side in a triangle is greater than the sum of the other two sides.",
        "A triangle with two equal angles is an isosceles triangle.",
        "Two triangles with congruent angles are similar and their corresponding sides are proportional."
      ],
      correctAnswer: "The longer side in a triangle is greater than the sum of the other two sides."
    },
    {
      id: 48,
      subtopic: "Geometry & Mensuration",
      question: "The length of a rectangular land is 4(1/2) times that of its breadth. If the area of the land is 200 square meters, then what is its length?",
      options: ["28 m", "20 m", "62 m", "30 m"],
      correctAnswer: "30 m"
    },
    {
      id: 49,
      subtopic: "Geometry & Mensuration",
      question: "There is a rectangular garden of 220 meters * 70 meters. A Path of width 4 meters is built around the garden. What is the area of the path?",
      options: ["2472 meter^2", "2162 metre^2", "1836 meter^2", "2384 meter^2"],
      correctAnswer: "2384 meter^2"
    },
    {
      id: 50,
      subtopic: "Geometry & Mensuration",
      question: "The width of the path around a square field is 4.5 m and its area is 105.75 m^2. Find the cost of fencing the field at the rate of 100 per meter.",
      options: ["Rs. 275", "Rs. 550", "Rs. 600", "Rs. 400"],
      correctAnswer: "Rs. 550"
    },
    {
      id: 51,
      subtopic: "Geometry & Mensuration",
      question: "The area of a trapezium shaped field is 480 m^2, the distance between two parallel sides is 15 m and one of the parallel sides is 20 m. The length of the other parallel side is ______.",
      options: ["33 m", "44 m", "22 m", "11 m"],
      correctAnswer: "44 m"
    },
    {
      id: 52,
      subtopic: "Geometry & Mensuration",
      question: "The length, width and height of a rectangular solid are in the ratios 5 : 4 : 2. If total surface area is 4864 m^2, then height of the solid is ____________.",
      options: ["16", "20", "24", "28"],
      correctAnswer: "16"
    },
    {
      id: 53,
      subtopic: "Geometry & Mensuration",
      question: "A toy is in the shape of a cylinder surmounted by a hemisphere. The height of the toy is 25 cm. Find the total surface area of the toy if its common diameter is 12 cm.",
      options: ["1800", "1056", "1230", "1560"],
      correctAnswer: "1056"
    },
    {
      id: 54,
      subtopic: "Geometry & Mensuration",
      question: "The length of a rectangular hall exceeds its breadth by 2 metres. If both the length and the breadth are increased by 1 metre, then the area of the hall is increased by 11 sq. m. Find the length and the breadth of the hall.",
      options: ["6 m and 4 m", "3 m and 2 m", "7 m and 9 m", "2 m and 7 m"],
      correctAnswer: "6 m and 4 m"
    },
    {
      id: 55,
      subtopic: "Geometry & Mensuration",
      question: "A tank 40 m long, 30 m broad and 12 m deep is dug in a field 1000 m long and 30 m wide. By how much will the level of the field rise if the earth dug out of the tank is evenly spread over the field?",
      options: ["2 meter", "1.2 meter", "0.5 meter", "5 meter"],
      correctAnswer: "0.5 meter"
    },
    {
      id: 56,
      subtopic: "Geometry & Mensuration",
      question: "A solid cube is cut into three cuboids of same volumes. What is the ratio of the surface area of the cube to the sum of the surface areas of any two of the cuboids so formed?",
      options: ["9:10", "27:16", "27:10", "9:8"],
      correctAnswer: "9:10"
    },
    {
      id: 57,
      subtopic: "Geometry & Mensuration",
      question: "A wall 12 m long, 9 m high and 90 cm thick is to be constructed. Given that one pack contains 450 bricks, how many packs of bricks will be required if each brick is of dimensions 10 cm x 7.5 cm x 7 cm and the cement and sand mixture occupies one-eighteenth volume of the wall?",
      options: ["387", "390", "386", "389"],
      correctAnswer: "389"
    },
    {
      id: 58,
      subtopic: "Geometry & Mensuration",
      question: "A rectangle with perimeter 50 cm has sides in ratio 1:4. What is the perimeter of a square with the same area?",
      options: ["36 cm", "50 cm", "40 cm", "45 cm"],
      correctAnswer: "40 cm"
    },

    // --- PERMUTATION & COMBINATION ---
    {
      id: 59,
      subtopic: "Permutation & Combination",
      question: "There are 12 people in a party. If each of them shakes hands with each other, then how many handshakes are there in the party?",
      options: ["54", "72", "66", "75"],
      correctAnswer: "66"
    },
    {
      id: 60,
      subtopic: "Permutation & Combination",
      question: "I have kept six different books on a shelf. In how many different ways can I arrange them?",
      options: ["6", "12", "120", "720"],
      correctAnswer: "720"
    },
    {
      id: 61,
      subtopic: "Permutation & Combination",
      question: "There are 11 people in a party and if each of them hugs with each other, how often do they hug?",
      options: ["55", "56", "64", "72"],
      correctAnswer: "55"
    },
    {
      id: 62,
      subtopic: "Permutation & Combination",
      question: "How many four digit numbers divisible by 6 can be formed using digits 0,2,3,4,6 without repetition and 0 not first?",
      options: ["98", "100", "50", "250"],
      correctAnswer: "50"
    },
    {
      id: 63,
      subtopic: "Permutation & Combination",
      question: "In how many ways can 6 persons be selected from 4 officers and 8 constables, if at least one officer is included?",
      options: ["224", "896", "672", "576"],
      correctAnswer: "896"
    },
    {
      id: 64,
      subtopic: "Permutation & Combination",
      question: "In how many ways can a person eat 10 items served for him at dinner?",
      options: ["1024", "1023", "100", "10"],
      correctAnswer: "1024"
    },
    {
      id: 65,
      subtopic: "Permutation & Combination",
      question: "In how many ways 8 apples can be divided between 3 friends such that each of them gets at least one apple?",
      options: ["20", "17", "21", "22"],
      correctAnswer: "21"
    },
    {
      id: 66,
      subtopic: "Permutation & Combination",
      question: "How many integers in the set {100,101,...,999} have at least one digit repeated?",
      options: ["252", "442", "548", "624"],
      correctAnswer: "252"
    },
    {
      id: 67,
      subtopic: "Permutation & Combination",
      question: "How many positive integers not more than 4300 can be formed with digits 0,1,2,3,4 if repetitions allowed?",
      options: ["560", "625", "575", "525"],
      correctAnswer: "575"
    },
    {
      id: 68,
      subtopic: "Permutation & Combination",
      question: "There are 45 employees in an evening party, if everybody shake their hands with everybody else, how many handshakes would be there?",
      options: ["990", "1080", "1035", "900"],
      correctAnswer: "990"
    },
    {
      id: 69,
      subtopic: "Permutation & Combination",
      question: "Find the no of ways in which 6 identical toffees can be distributed over 5 different people namely A,B,C,D,E.",
      options: ["120", "210", "252", "300"],
      correctAnswer: "210"
    },
    {
      id: 70,
      subtopic: "Permutation & Combination",
      question: "5 cars are to be parked in 5 parking slots. There are 3 red cars, 1 blue car and 1 green car. How many ways the car can be parked?",
      options: ["20", "60", "120", "15"],
      correctAnswer: "20"
    },
    {
      id: 71,
      subtopic: "Permutation & Combination",
      question: "There are 16 people, they divide into four groups. Now from those four groups select a team of three members, such that no two members in the team should belong to the same group?",
      options: ["256", "512", "128", "64"],
      correctAnswer: "256"
    },
    {
      id: 72,
      subtopic: "Permutation & Combination",
      question: "A total of 28 handshakes were exchanged at the conclusion of a party. The number of people present was:",
      options: ["6", "7", "8", "9"],
      correctAnswer: "8"
    },

    // --- PROBABILITY ---
    {
      id: 73,
      subtopic: "Probability",
      question: "The probability of throwing more than 5 in a single throw of an ordinary die is:",
      options: ["0.17", "1", "0.83", "0"],
      correctAnswer: "0.17"
    },
    {
      id: 74,
      subtopic: "Probability",
      question: "Two unbiased coins are tossed. The probability of obtaining at least one head is:",
      options: ["1/4", "1/2", "3/4", "1"],
      correctAnswer: "3/4"
    },
    {
      id: 75,
      subtopic: "Probability",
      question: "Find the probability of even numbers that can be possible only with 1, 2, 3, 4 in 4 digits?",
      options: ["1", "1/2", "1/4", "1/3"],
      correctAnswer: "1/2"
    },
    {
      id: 76,
      subtopic: "Probability",
      question: "Two bags: (5W, 10R) and (10W, 7R). Probability of drawing a red ball from one bag?",
      options: ["55/102", "17/21", "15/17", "7/8"],
      correctAnswer: "55/102"
    },
    {
      id: 77,
      subtopic: "Probability",
      question: "HIV test: 99% accurate, prevalence 0.3%. If positive, probability actually HIV positive?",
      options: ["23%", "31%", "19%", "37%"],
      correctAnswer: "23%"
    },
    {
      id: 78,
      subtopic: "Probability",
      question: "Probability that a random factor of 10^19 is a multiple of 10^15?",
      options: ["3/16", "2/15", "1/16", "4/19"],
      correctAnswer: "1/16"
    },
    {
      id: 79,
      subtopic: "Probability",
      question: "A man tells truth 4/5 times. He reports die shows five. Probability it is actually five?",
      options: ["1/5", "4/5", "2/5", "7/9"],
      correctAnswer: "7/9"
    },
    {
      id: 80,
      subtopic: "Probability",
      question: "When two unbiased coins are tossed, the probability of getting both heads or both tails is:",
      options: ["1/2", "1/4", "3/4", "1"],
      correctAnswer: "1/2"
    },
    {
      id: 81,
      subtopic: "Probability",
      question: "What is the probability of getting an odd sum when two dice are thrown?",
      options: ["1/3", "2/5", "1/2", "1/4"],
      correctAnswer: "1/2"
    },
    {
      id: 82,
      subtopic: "Probability",
      question: "A quiz has one multiple choice question with answer choices A,B,C and two true or false questions. Probability of answering all correctly by guessing?",
      options: ["1/4", "1/5", "1/3", "1/12"],
      correctAnswer: "1/12"
    },
    {
      id: 83,
      subtopic: "Probability",
      question: "Three dice are rolled. Probability sum equals 10?",
      options: ["27/216", "25/216", "10/216", "11/216"],
      correctAnswer: "27/216"
    },
    {
      id: 84,
      subtopic: "Probability",
      question: "Two dice thrown together. Probability sum divisible by 4?",
      options: ["1/2", "1/4", "1/12", "1/36"],
      correctAnswer: "1/4"
    },
    {
      id: 85,
      subtopic: "Probability",
      question: "A bag contains 20 discs numbered 1 to 20. A disc is drawn from the bag. The probability that the number on it is a multiple of 3 is:",
      options: ["3/10", "1/4", "1/2", "3/20"],
      correctAnswer: "3/10"
    },
    {
      id: 86,
      subtopic: "Probability",
      question: "In a bid, two firms A and B are competing against each other. If the probability of a bid amount quoted by B being lower than that of A is 0.8 and if it is known that the bid is won by the one who quotes the lowest price, what is the probability that A wins the bid?",
      options: ["0.8", "0.004", "0.2", "0.001"],
      correctAnswer: "0.2"
    }
  ],
  logic: [
    // --- LOGICAL CONNECTIVES ---
    {
      id: 87,
      subtopic: "Logical Connectives",
      question: "Which of the given options (in the given order) logically follows the given statement? Mukesh is happy, whenever he gets the first rank. \nA. Mukesh has not got the first rank \nB. Mukesh has got the first rank \nC. Mukesh is happy \nD. Mukesh is not happy",
      options: ["CB", "BC", "DA", "Both BC and DA"],
      correctAnswer: "Both BC and DA"
    },
    {
      id: 88,
      subtopic: "Logical Connectives",
      question: "Which of the given options (in the given order) logically follows the given statement? Sportspersons can win, only if good facilities are available. \nA. Sportspersons can win \nB. Good facilities are not available \nC. Sportspersons cannot win \nD. Good facilities are available",
      options: ["AB", "BC", "DA", "CD"],
      correctAnswer: "BC"
    },
    {
      id: 89,
      subtopic: "Logical Connectives",
      question: "If Ronaldo is taller than Messi, then Ronaldo is shorter than Alex. It is known that no two of them are of equal heights. Which of the following implies a correct logical conclusion?",
      options: [
        "Ronaldo is shorter than Messi, which means he is taller than Alex.",
        "Alex is taller than Ronaldo, which means Messi is shorter than Ronaldo.",
        "Alex is shorter than Ronaldo, which means Ronaldo is shorter than Messi.",
        "Ronaldo is shorter than Messi means Alex is shorter than Messi."
      ],
      correctAnswer: "Alex is shorter than Ronaldo, which means Ronaldo is shorter than Messi."
    },
    {
      id: 90,
      subtopic: "Logical Connectives",
      question: "Which of the given options (in the given order) logically follows the given statement? The current Indian Cricket Team will be considered the best only if it wins a World Cup. \nA. The current Indian Cricket Team won the World Cup \nB. The current Indian Cricket Team did not win the World Cup \nC. The current Indian team is not considered to be one of the best \nD. The current Indian team is considered to be one of the best",
      options: ["DA", "BC", "Both DA and BC", "None of these options"],
      correctAnswer: "Both DA and BC"
    },
    {
      id: 91,
      subtopic: "Logical Connectives",
      question: "Which of the given options (in the given order) logically follows the given statement? I get nostalgic every time I cross my school. \nA. I get nostalgic \nB. I cross my school \nC. I didn’t cross my school \nD. I didn’t get nostalgic",
      options: ["CD", "DC", "AB", "None of the options"],
      correctAnswer: "DC"
    },
    {
      id: 92,
      subtopic: "Logical Connectives",
      question: "Whenever the kids want ice-cream, they go on strike. \nA. The kids do not want ice-cream. \nB. The kids want ice-cream. \nC. The kids went on strike. \nD. The kids did not go on strike.",
      options: ["CA", "BD", "DA", "DB"],
      correctAnswer: "DA"
    },
    {
      id: 93,
      subtopic: "Logical Connectives",
      question: "Consider: 'You will get a bonus only if you meet the sales target.' If you got the bonus, what can you infer?",
      options: [
        "You met the sales target",
        "You did not meet the sales target",
        "You may or may not have met the sales target",
        "You will meet the sales target"
      ],
      correctAnswer: "You met the sales target"
    },
    {
      id: 94,
      subtopic: "Logical Connectives",
      question: "If the statement 'If the alarm rings, then there is a fire' is true and the alarm did not ring, what can be concluded?",
      options: [
        "There is no fire",
        "There is a fire",
        "Cannot be concluded",
        "The alarm will ring soon"
      ],
      correctAnswer: "Cannot be concluded"
    },
    {
      id: 95,
      subtopic: "Logical Connectives",
      question: "Which of the given options (in the given order) logically follows the given statement? Raam is happy, whenever he wins the race. \nA. Raam has not won the race \nB. Raam has won the race \nC. Raam is happy \nD. Raam is not happy",
      options: ["CB", "BC", "DA", "Both BC and DA"],
      correctAnswer: "Both BC and DA"
    },
    {
      id: 96,
      subtopic: "Logical Connectives",
      question: "Statement: 'You can take the final exam only if you complete all assignments.' Which of the following is correct?",
      options: [
        "Completing all assignments allows you to take the exam.",
        "Taking the exam is possible without completing assignments.",
        "Taking the exam guarantees that you completed all assignments.",
        "Completing all assignments is not related to the exam."
      ],
      correctAnswer: "Taking the exam guarantees that you completed all assignments."
    },
    {
      id: 97,
      subtopic: "Logical Connectives",
      question: "Statement: 'If it rains tomorrow, the picnic will be canceled.' It is observed that the picnic was not canceled. What can we conclude?",
      options: [
        "It rained.",
        "It did not rain.",
        "We cannot conclude anything about the rain.",
        "The picnic will happen next week"
      ],
      correctAnswer: "It did not rain."
    },
    {
      id: 98,
      subtopic: "Logical Connectives",
      question: "Neymar plays Soccer, only if he wears red or black.",
      options: [
        "Neymar plays Soccer implies he wears red and black",
        "Neymar plays Soccer but he does not wear red hence he wears black.",
        "Neymar wearing neither red nor black implies he may play Soccer.",
        "Neymar plays Soccer wearing black, which implies he does not wear red."
      ],
      correctAnswer: "Neymar plays Soccer but he does not wear red hence he wears black."
    },
    {
      id: 99,
      subtopic: "Logical Connectives",
      question: "If the milk is hot, then kid cannot drink it. \nA. Kid can drink milk. \nB. The milk is not hot. \nC. Kid cannot drink milk. \nD. The milk is hot.",
      options: ["CB", "AB", "AB and BC", "AB and DC"],
      correctAnswer: "AB and DC"
    },
    {
      id: 100,
      subtopic: "Logical Connectives",
      question: "Statement: 'The students will go on a trip only if they clear all exams.' A student did not go on the trip. What can we infer?",
      options: [
        "They cleared all exams",
        "They did not clear all exams",
        "Nothing can be concluded",
        "They refused to go"
      ],
      correctAnswer: "Nothing can be concluded"
    },

    // --- VENN DIAGRAMS ---
    {
      id: 101,
      subtopic: "Venn Diagrams",
      question: "In a class of 120 students, 70 students passed in English, 80 students passed in Hindi and 40 students passed in both English and Hindi. How many students failed in both the subjects?",
      options: ["10", "15", "20", "7"],
      correctAnswer: "10"
    },
    {
      id: 102,
      subtopic: "Venn Diagrams",
      question: "Of the members of three athletic teams in a school, 21 are in cricket team, 26 are in hockey team, and 29 are in football team. Among them, 14 play hockey and cricket, 15 play hockey and football and 12 play football and cricket. Eight play all the three games. The total number of players in the three athletic teams is?",
      options: ["76", "43", "46", "53"],
      correctAnswer: "43"
    },
    {
      id: 103,
      subtopic: "Venn Diagrams",
      question: "In a class of 30 pupils, 12 take needlework, 16 take physics and 18 take history. If all the 30 students take at least one subject and no one takes all three, then the number of pupils taking 2 subjects is:",
      options: ["16", "6", "18", "20"],
      correctAnswer: "16"
    },
    {
      id: 104,
      subtopic: "Venn Diagrams",
      question: "In a town of 10000 families, it was found that 40% families buy newspaper A, 20% families buy newspaper B and 10% families buy newspaper C. 5% of families buy newspaper A and B, 3% buy B and C and 4% buy A and C. If 2% families buy all the three newspapers, then the number of families which buy A only is:",
      options: ["3200", "3000", "3600", "3300"],
      correctAnswer: "3300"
    },
    {
      id: 105,
      subtopic: "Venn Diagrams",
      question: "In a survey of 500 students of a college, it was found that 49% liked watching football, 53% liked watching hockey and 62% liked watching basketball. Also, 27% liked watching football and hockey both, 29% liked watching basketball and hockey both and 28% liked watching football and basketball both. 5% liked watching none of these games. How many students like watching all the three games?",
      options: ["55", "40", "75", "20"],
      correctAnswer: "75"
    },
    {
      id: 106,
      subtopic: "Venn Diagrams",
      question: "In a class of 106 students, each student studies at least one of the three subjects maths, physics and chemistry. 48 of them study maths, 51 of them study physics and 53 chemistry. 16 study both maths and physics, 17 study maths and chemistry and 18 study physics and chemistry. The number of students who study exactly two subjects is?",
      options: ["36", "32", "31", "41"],
      correctAnswer: "36"
    },
    {
      id: 107,
      subtopic: "Venn Diagrams",
      question: "In a class of 106 students, each student studies at least one of the three subjects maths, physics and chemistry. 48 study maths, 51 study physics and 53 chemistry. 16 study both maths and physics, 17 study maths and chemistry and 18 study physics and chemistry. The number of students who study more than one subject is?",
      options: ["40", "41", "47", "38"],
      correctAnswer: "41"
    },
    {
      id: 108,
      subtopic: "Venn Diagrams",
      question: "In a class of 106 students, each student studies at least one of the three subjects maths, physics and chemistry. 48 study maths, 51 study physics and 53 chemistry. 16 study both maths and physics, 17 study maths and chemistry and 18 study physics and chemistry. The number of students who study all the subjects is?",
      options: ["5", "6", "4", "8"],
      correctAnswer: "5"
    },
    {
      id: 109,
      subtopic: "Venn Diagrams",
      question: "In a class of 106 students, each student studies at least one of the three subjects maths, physics and chemistry. 48 study maths, 51 study physics and 53 chemistry. 16 study both maths and physics, 17 study maths and chemistry and 18 study physics and chemistry. The number of students who study exactly one subject is?",
      options: ["76", "65", "60", "75"],
      correctAnswer: "65"
    },
    {
      id: 110,
      subtopic: "Venn Diagrams",
      question: "In a class of 106 students, each student studies at least one of the three subjects maths, physics and chemistry. 48 study maths, 51 study physics and 53 chemistry. 16 study both maths and physics, 17 study maths and chemistry and 18 study physics and chemistry. The number of students who study physics and maths but not chemistry is?",
      options: ["17", "10", "11", "18"],
      correctAnswer: "11"
    },
    {
      id: 111,
      subtopic: "Venn Diagrams",
      question: "In a group of 120 students, 65 study Maths, 55 Physics, and 50 Chemistry. 30 study Maths & Physics, 25 Physics & Chemistry, 20 Maths & Chemistry. Each studies at least one. Find students studying all three.",
      options: ["25", "21", "18", "26"],
      correctAnswer: "25"
    },
    {
      id: 112,
      subtopic: "Venn Diagrams",
      question: "Out of 90 people, each person likes at least one of the three beverages – Tea, Coffee, and Milk. 50 likes Tea, 45 likes Coffee, and 40 likes Milk. 20 like both Tea and Coffee, 15 likes both Coffee and Milk, and 10 likes both Tea and Milk. Find the number of people who like exactly one beverage.",
      options: ["40", "45", "48", "46"],
      correctAnswer: "45"
    },
    {
      id: 113,
      subtopic: "Venn Diagrams",
      question: "In a survey of 180 people, each person likes at least one of the following – Movies, Sports, or Music. 90 like Movies, 80 like Sports, and 70 like Music. 40 like both Movies and Sports, 30 like both Sports and Music, and 20 like both Movies and Music. Find the number of people who like all three.",
      options: ["30", "32", "38", "41"],
      correctAnswer: "30"
    },
    {
      id: 114,
      subtopic: "Venn Diagrams",
      question: "In a group of 220 people, each person likes at least one fruit – Apples, Bananas, or Oranges. 120 like Apples, 100 like Bananas, and 90 like Oranges. 50 like both Apples and Bananas, 40 like both Bananas and Oranges, and 30 like both Apples and Oranges. Find the number of people who like exactly two fruits.",
      options: ["60", "65", "63", "None of these"],
      correctAnswer: "None of these"
    },
    {
      id: 115,
      subtopic: "Venn Diagrams",
      question: "Out of 140 students, every student studies at least one subject – Maths, Science, or English. 60 study Maths, 55 study Science, and 50 study English. 25 study both Maths and Science, 20 study both Science and English, and 15 study both Maths and English. Find the number of students who study exactly one subject.",
      options: ["80", "70", "60", "90"],
      correctAnswer: "60"
    },

    // --- SYLLOGISMS ---
    {
      id: 116,
      subtopic: "Syllogisms",
      question: "Statements: No coffee is a sweet. All sweets are teas. \nConclusions: 1. No coffee is a tea. 2. Some coffee is tea.",
      options: ["Only (1) follows", "Either (1) or (2) follows", "Both (1) and (2) follow", "Neither (1) nor (2) follows"],
      correctAnswer: "Either (1) or (2) follows"
    },
    {
      id: 117,
      subtopic: "Syllogisms",
      question: "Statements: Some mangoes are yellow. Some tixo are mangoes. \nConclusions: 1. Some mangoes are green. 2. Tixo is yellow.",
      options: ["Only (1) follows", "Only (2) follows", "Both (1) and (2) follow", "Neither (1) nor (2) follows"],
      correctAnswer: "Neither (1) nor (2) follows"
    },
    {
      id: 118,
      subtopic: "Syllogisms",
      question: "Statements: Some ants are parrots. All parrots are apples. \nConclusions: 1. All apples are parrots. 2. Some ants are apples.",
      options: ["Only (1) follows", "Only (2) follows", "Both (1) and (2) follow", "Neither (1) nor (2) follows"],
      correctAnswer: "Only (2) follows"
    },
    {
      id: 119,
      subtopic: "Syllogisms",
      question: "Statements: Some papers are pens. All pencils are pens. \nConclusions: 1. Some pens are pencils. 2. Some pens are papers.",
      options: ["Only (1) follows", "Only (2) follows", "Both (1) and (2) follow", "Neither (1) nor (2) follows"],
      correctAnswer: "Both (1) and (2) follow"
    },
    {
      id: 120,
      subtopic: "Syllogisms",
      question: "Statements: All actors are girls. All girls are beautiful. \nConclusions: 1. All actors are beautiful. 2. Some girls are actors.",
      options: ["Only (1) follows", "Only (2) follows", "Both (1) and (2) follow", "Neither (1) nor (2) follows"],
      correctAnswer: "Both (1) and (2) follow"
    },
    {
      id: 121,
      subtopic: "Syllogisms",
      question: "Statements: All powder is chili. Some chili are nasty. \nConclusions: 1. Some powder can be nasty. 2. All nasty are powder.",
      options: ["Only (1) follows", "Only (2) follows", "Both (1) and (2) follow", "Neither (1) nor (2) follows"],
      correctAnswer: "Only (1) follows"
    },
    {
      id: 122,
      subtopic: "Syllogisms",
      question: "Statements: All wait are onion. Some wait are shadow. No shadow is comb. \nConclusions: 1. Some onion are not comb. 2. Some shadow being onion is a possibility.",
      options: ["Only (1) follows", "Only (2) follows", "Both (1) and (2) follow", "Neither (1) nor (2) follows"],
      correctAnswer: "Only (1) follows"
    },
    {
      id: 123,
      subtopic: "Syllogisms",
      question: "Statements: All section are cup. All cup are box. No box is unbic. \nConclusions: 1. No section is unbic. 2. Some box are section.",
      options: ["Only (1) follows", "Only (2) follows", "Both (1) and (2) follow", "Neither (1) nor (2) follows"],
      correctAnswer: "Both (1) and (2) follow"
    },
    {
      id: 124,
      subtopic: "Syllogisms",
      question: "Statements: Only a few land is red. All red is pink. Some pink is tree. \nConclusions: 1. No red is tree. 2. Some land can be pink.",
      options: ["Only (1) follows", "Only (2) follows", "Both (1) and (2) follow", "Neither (1) nor (2) follows"],
      correctAnswer: "Neither (1) nor (2) follows"
    },
    {
      id: 125,
      subtopic: "Syllogisms",
      question: "Statements: Only a few oranges is banana. Some banana is egg. Some egg is apple. \nConclusions: 1. Some banana is apple. 2. No apple is banana.",
      options: ["Only (1) follows", "Only (2) follows", "Either (1) or (2) follow", "Neither (1) nor (2) follows"],
      correctAnswer: "Either (1) or (2) follow"
    },
    {
      id: 126,
      subtopic: "Syllogisms",
      question: "Statements: Only tree is manuscript. Some tree is leaves. Only a few leaves is caterpillar. \nConclusions: 1. Some leaves can be manuscript. 2. Some leaves is not caterpillar.",
      options: ["Only (1) follows", "Only (2) follows", "Both (1) and (2) follow", "Neither (1) nor (2) follows"],
      correctAnswer: "Only (2) follows"
    },
    {
      id: 127,
      subtopic: "Syllogisms",
      question: "Statements: Only a few seats are EWS. All EWS are author. No author is child. \nConclusions: 1. Some seats are child. 2. No child are seats.",
      options: ["Only (1) follows", "Only (2) follows", "Both (1) and (2) follow", "Neither (1) nor (2) follows"],
      correctAnswer: "Neither (1) nor (2) follows"
    },
    {
      id: 128,
      subtopic: "Syllogisms",
      question: "Statements: All T are N. No M is N. \nConclusions: 1. All T are M. 2. Some T are not M.",
      options: ["Only (1) follows", "Only (2) follows", "Both (1) and (2) follow", "Neither (1) nor (2) follows"],
      correctAnswer: "Only (2) follows"
    },
    {
      id: 129,
      subtopic: "Syllogisms",
      question: "Statements: All flowers are beautiful. Vaidehi is beautiful. \nConclusions: 1. Vaidehi is a flower. 2. Some beautiful are flowers.",
      options: ["Only (1) follows", "Only (2) follows", "Both (1) and (2) follow", "Neither (1) nor (2) follows"],
      correctAnswer: "Only (2) follows"
    },
    {
      id: 130,
      subtopic: "Syllogisms",
      question: "Statements: No chair is a table. No table is a bench. Only a few benches are wood. \nConclusions: 1. Some wood being chair is a possibility. 2. Some wood is not a table.",
      options: ["Only (1) follows", "Only (2) follows", "Both (1) and (2) follow", "Neither (1) nor (2) follows"],
      correctAnswer: "Both (1) and (2) follow"
    },
    {
      id: 131,
      subtopic: "Syllogisms",
      question: "Statement: Only a few tables are fish. No fish is a desktop. All desktops are pens. \nConclusions: 1. Some tables are not desktops. 2. All tables being fish is a possibility.",
      options: ["Only (1) follows", "Only (2) follows", "Both (1) and (2) follow", "Neither (1) nor (2) follows"],
      correctAnswer: "Only (1) follows"
    },
    {
      id: 132,
      subtopic: "Syllogisms",
      question: "Statement: Only perfumes are quiet. Some perfumes are shift. No shift is radius. \nConclusions: 1. All quiet being shift is a possibility. 2. Some perfumes are radius.",
      options: ["Only (1) follows", "Only (2) follows", "Both (1) and (2) follow", "Neither (1) nor (2) follows"],
      correctAnswer: "Neither (1) nor (2) follows"
    },
    {
      id: 133,
      subtopic: "Syllogisms",
      question: "Statement: At least some apples are bun. Few bun are cup. All cups are dancers. \nConclusions: 1. Some apples are cup. 2. Some dancers are bun.",
      options: ["Only (1) follows", "Only (2) follows", "Both (1) and (2) follow", "Neither (1) nor (2) follows"],
      correctAnswer: "Only (2) follows"
    },
    {
      id: 134,
      subtopic: "Syllogisms",
      question: "Statement: No plot is queen. No queen is rose. Only Sarita is rose. \nConclusions: 1. No plot is rose. 2. Some queen are Sarita.",
      options: ["Only (1) follows", "Only (2) follows", "Both (1) and (2) follow", "Neither (1) nor (2) follows"],
      correctAnswer: "Only (1) follows"
    },
    {
      id: 135,
      subtopic: "Syllogisms",
      question: "Statement: All hens are great. Only a few monkeys are rats. No rat is great. \nConclusions: 1. Only a few monkeys are hens. 2. All monkeys are great.",
      options: ["Only (1) follows", "Only (2) follows", "Both (1) and (2) follow", "Neither (1) nor (2) follows"],
      correctAnswer: "Neither (1) nor (2) follows"
    },
    {
      id: 136,
      subtopic: "Syllogisms",
      question: "Statement: Only choco are potatoes. No choco is tasty. \nConclusions: 1. Some potatoes can be tasty. 2. Some choco can be tasty.",
      options: ["Only (1) follows", "Only (2) follows", "Both (1) and (2) follow", "Neither (1) nor (2) follows"],
      correctAnswer: "Neither (1) nor (2) follows"
    },
    {
      id: 137,
      subtopic: "Syllogisms",
      question: "Statement: Only books are correct. No correct is steam. \nConclusions: 1. Some books can be steam. 2. All books can be steam.",
      options: ["Only (1) follows", "Only (2) follows", "Both (1) and (2) follow", "Neither (1) nor (2) follows"],
      correctAnswer: "Only (1) follows"
    },
    {
      id: 138,
      subtopic: "Syllogisms",
      question: "Statement: All Santa are superheroes. All soldiers are Santa. \nConclusions: 1. All Santa are soldiers. 2. All Santa can be soldiers.",
      options: ["Only (1) follows", "Only (2) follows", "Both (1) and (2) follow", "Neither (1) nor (2) follows"],
      correctAnswer: "Only (2) follows"
    },
    {
      id: 139,
      subtopic: "Syllogisms",
      question: "Statement: No cat is a monkey. No monkey is a cow. \nConclusions: 1. No cat is a cow. 2. Some cows are monkeys.",
      options: ["Only (1) follows", "Only (2) follows", "Both (1) and (2) follow", "Neither (1) nor (2) follows"],
      correctAnswer: "Neither (1) nor (2) follows"
    },
    {
      id: 140,
      subtopic: "Syllogisms",
      question: "Statement: All A are B. All B are C. Some D are A. \nConclusions: 1. All D are A is a possibility. 2. All C are A is a possibility.",
      options: ["Only (1) follows", "Only (2) follows", "Both (1) and (2) follow", "Neither (1) nor (2) follows"],
      correctAnswer: "Both (1) and (2) follow"
    },
    {
      id: 141,
      subtopic: "Syllogisms",
      question: "Statement: All engineers are villagers. No villager is a nurse. All nurses are managers. \nConclusions: 1. No engineer is a manager. 2. All villagers being managers is a possibility.",
      options: ["Only (1) follows", "Only (2) follows", "Both (1) and (2) follow", "Neither (1) nor (2) follows"],
      correctAnswer: "Only (2) follows"
    },
    {
      id: 142,
      subtopic: "Syllogisms",
      question: "Statement: Some red are not black. Only a few black are colour. All colours are natural. \nConclusions: 1. Some red can be natural. 2. Some black are not colour.",
      options: ["Only (1) follows", "Only (2) follows", "Both (1) and (2) follow", "Neither (1) nor (2) follows"],
      correctAnswer: "Both (1) and (2) follow"
    },
    {
      id: 143,
      subtopic: "Syllogisms",
      question: "Statement: Only a few claps are sepoy. All sepoy are commandos. All commandos are unique. \nConclusions: 1. Some sepoy are unique. 2. Some sepoy can be commandos.",
      options: ["Only (1) follows", "Only (2) follows", "Both (1) and (2) follow", "Neither (1) nor (2) follows"],
      correctAnswer: "Only (1) follows"
    },

    // --- CODED INEQUALITIES ---
    {
      id: 144,
      subtopic: "Coded Inequalities",
      question: "Statements: B > A ≥ T > F = Y ≤ S < D \nConclusions: I. F < D \nII. A > S",
      options: [
        "Only conclusion I follows",
        "Only conclusion II follows",
        "Both conclusions follow",
        "Neither conclusion I nor conclusion II follows"
      ],
      correctAnswer: "Only conclusion I follows"
    },
    {
      id: 145,
      subtopic: "Coded Inequalities",
      question: "Statements: Y < O ≤ G ≤ K = U > L > P \nConclusions: I. O = U \nII. U > O",
      options: [
        "Only conclusion I follows",
        "Only conclusion II follows",
        "Either conclusion I or conclusion II follows",
        "Both conclusions follow"
      ],
      correctAnswer: "Either conclusion I or conclusion II follows"
    },
    {
      id: 146,
      subtopic: "Coded Inequalities",
      question: "Statements: M < T < G ≤ J = U > Y > R \nConclusions: I. G < U \nII. J > R",
      options: [
        "Only conclusion I follows",
        "Only conclusion II follows",
        "Both conclusions follow",
        "Either conclusion I or conclusion II follows"
      ],
      correctAnswer: "Only conclusion II follows"
    },
    {
      id: 147,
      subtopic: "Coded Inequalities",
      question: "Statements: 3 ≥ 9 < 7 ≤ 10 = 2 ≤ 6 \nConclusions: I. 6 > 9 \nII. 9 ≤ 2",
      options: [
        "Only conclusion I follows",
        "Only conclusion II follows",
        "Both conclusions follow",
        "Neither conclusion I nor conclusion II follows"
      ],
      correctAnswer: "Only conclusion I follows"
    },
    {
      id: 148,
      subtopic: "Coded Inequalities",
      question: "Statements: P ≤ R ≤ C = S > Q > T \nConclusions: I. P < Q \nII. S ≥ P",
      options: [
        "Only conclusion I follows",
        "Only conclusion II follows",
        "Both conclusions follow",
        "Neither conclusion I nor conclusion II follows"
      ],
      correctAnswer: "Only conclusion II follows"
    },
    {
      id: 149,
      subtopic: "Coded Inequalities",
      question: "Statements: H ≥ V = O > R, X ≤ D > Y > R, Y > N = L < Z \nConclusions: I. O < D \nII. R > N",
      options: [
        "Only conclusion I follows",
        "Only conclusion II follows",
        "Either conclusion I or conclusion II follows",
        "Neither conclusion I nor conclusion II follows"
      ],
      correctAnswer: "Neither conclusion I nor conclusion II follows"
    },
    {
      id: 150,
      subtopic: "Coded Inequalities",
      question: "Statements: C < R = X; M = L > O = C; X > L = I \nConclusions: I. O = X \nII. I < R",
      options: [
        "Only conclusion I follows",
        "Only conclusion II follows",
        "Both conclusions follow",
        "Neither conclusion I nor conclusion II follows"
      ],
      correctAnswer: "Only conclusion II follows"
    },
    {
      id: 151,
      subtopic: "Coded Inequalities",
      question: "Statements: T > D ≥ P, F ≥ P = R \nConclusions: I. T > R \nII. D > F",
      options: [
        "Only conclusion I follows",
        "Only conclusion II follows",
        "Either conclusion I or conclusion II follows",
        "Both conclusions follow"
      ],
      correctAnswer: "Only conclusion I follows"
    },
    {
      id: 152,
      subtopic: "Coded Inequalities",
      question: "Statements: C < D, E ≥ B, B > D, A = E \nConclusions: I. B > C \nII. A < D",
      options: [
        "Only conclusion I follows",
        "Only conclusion II follows",
        "Either conclusion I or conclusion II follows",
        "Neither conclusion I nor conclusion II follows"
      ],
      correctAnswer: "Only conclusion I follows"
    },
    {
      id: 153,
      subtopic: "Coded Inequalities",
      question: "Statements: M = X < Z ≥ W = N ≤ Q < T ≤ V = U \nConclusions: I. V ≥ W \nII. T ≯ U",
      options: [
        "Only conclusion I follows",
        "Only conclusion II follows",
        "Either conclusion I or conclusion II follows",
        "Neither conclusion I nor conclusion II follows"
      ],
      correctAnswer: "Only conclusion II follows"
    },
    {
      id: 154,
      subtopic: "Coded Inequalities",
      question: "Statements: P ≤ Q < S = T ≥ U ≥ W < Z \nConclusions: I. S > W \nII. W = T",
      options: [
        "Only conclusion I follows",
        "Only conclusion II follows",
        "Either conclusion I or conclusion II follows",
        "Neither conclusion I nor conclusion II follows"
      ],
      correctAnswer: "Either conclusion I or conclusion II follows"
    },
    {
      id: 155,
      subtopic: "Coded Inequalities",
      question: "Statements: U < I, V = E, R ≥ V, I < N < R \nConclusions: I. R > U \nII. I ≥ E",
      options: [
        "Only conclusion I follows",
        "Only conclusion II follows",
        "Both conclusions follow",
        "Neither conclusion I nor conclusion II follows"
      ],
      correctAnswer: "Only conclusion I follows"
    },
    {
      id: 156,
      subtopic: "Coded Inequalities",
      question: "Statements: T < U = V ≥ S > P ≥ Q \nConclusions: I. S > T \nII. V > Q",
      options: [
        "Only conclusion I follows",
        "Only conclusion II follows",
        "Both conclusions follow",
        "Neither conclusion I nor conclusion II follows"
      ],
      correctAnswer: "Only conclusion II follows"
    },
    {
      id: 157,
      subtopic: "Coded Inequalities",
      question: "Statements: Y ≥ P = O, P < R ≤ J \nConclusions: I. R > Y \nII. J > O",
      options: [
        "Only conclusion I follows",
        "Only conclusion II follows",
        "Either conclusion I or conclusion II follows",
        "Both conclusions follow"
      ],
      correctAnswer: "Only conclusion II follows"
    },
    {
      id: 158,
      subtopic: "Coded Inequalities",
      question: "Statements: D ≥ S, X < W, S = J, W > Y, X > D, Y ≤ O, J ≥ E \nConclusions: I. D > E \nII. D = E",
      options: [
        "Only conclusion I follows",
        "Only conclusion II follows",
        "Either conclusion I or conclusion II follows",
        "Neither conclusion I nor conclusion II follows"
      ],
      correctAnswer: "Either conclusion I or conclusion II follows"
    },

    // --- IMAGE INTERPRETATION (Text-Based) ---
    {
      id: 159,
      subtopic: "Image Interpretation",
      question: "A clock shows time 3:40. If a mirror is placed vertically on its right side, what will be the mirror image time shown?",
      options: ["08:20", "04:20", "08:40", "07:20"],
      correctAnswer: "08:20"
    },
    {
      id: 160,
      subtopic: "Image Interpretation",
      question: "Find the water image of the figure: A triangle with a horizontal base and an arrow pointing upward from the centroid.",
      options: [
        "Triangle with arrow pointing downward",
        "Triangle with arrow pointing left",
        "Triangle with arrow pointing right",
        "Triangle with arrow unchanged direction"
      ],
      correctAnswer: "Triangle with arrow pointing downward"
    },
    {
      id: 161,
      subtopic: "Image Interpretation",
      question: "A square paper is folded along its vertical midline, then folded again along its horizontal midline. A single circular hole is punched through all layers at the top-right corner of the current folded state. Where will the holes appear when the paper is unfolded?",
      options: [
        "One hole at the original top-right corner",
        "Two holes symmetric about vertical axis",
        "Four holes at four corners",
        "One hole at the center"
      ],
      correctAnswer: "Four holes at four corners"
    },
    {
      id: 162,
      subtopic: "Image Interpretation",
      question: "Count the number of triangles in the given figure: A large equilateral triangle subdivided into 4 smaller congruent equilateral triangles by joining midpoints of sides.",
      options: ["4", "5", "8", "16"],
      correctAnswer: "5"
    },
    {
      id: 163,
      subtopic: "Image Interpretation",
      question: "In the following question, a figure (X) is given: a square with both diagonals drawn. Which of the following options contains this figure as an embedded part?",
      options: [
        "Option A: A square with only one diagonal and a circle inside",
        "Option B: A square with both diagonals and an extra line from midpoint of one side to opposite vertex",
        "Option C: A square with both diagonals and a small triangle at one corner",
        "Option D: A square with both diagonals exactly as given"
      ],
      correctAnswer: "Option D: A square with both diagonals exactly as given"
    },
    {
      id: 164,
      subtopic: "Image Interpretation",
      question: "Complete the pattern: In a 3x3 figure matrix, first row: (a) a circle with a dot inside, (b) a circle with a line diameter, (c) ?. Second row: (a) square with dot, (b) square with line, (c) blank. Third row: (a) triangle with dot, (b) triangle with line, (c) ?. The missing figure in (c) for first row is?",
      options: [
        "Triangle with dot",
        "Triangle with line",
        "Circle with diagonal cross",
        "Circle with dot and line"
      ],
      correctAnswer: "Circle with diagonal cross"
    },
    {
      id: 165,
      subtopic: "Image Interpretation",
      question: "Which of the following is a 90-degree clockwise rotation of the given figure? Given figure: An arrow pointing up with a small circle at its tail.",
      options: [
        "Arrow pointing right, circle at left side",
        "Arrow pointing down, circle at top",
        "Arrow pointing left, circle at right side",
        "Arrow pointing right, circle at tail position"
      ],
      correctAnswer: "Arrow pointing right, circle at left side"
    },
    {
      id: 166,
      subtopic: "Image Interpretation",
      question: "An open dice net is given: a cross of 6 squares with numbers: top square '1', middle row left '2', middle '3', right '4', bottom '5', and the square attached to the right of '3' is '6'. Which number is opposite to '1'?",
      options: ["2", "3", "4", "6"],
      correctAnswer: "6"
    },
    {
      id: 167,
      subtopic: "Image Interpretation",
      question: "Find the odd one out among the four figures based on symmetry. Figure A: a square with both diagonals. Figure B: a rectangle with only vertical line of symmetry. Figure C: an equilateral triangle with all medians. Figure D: a circle with two perpendicular diameters.",
      options: ["Figure A", "Figure B", "Figure C", "Figure D"],
      correctAnswer: "Figure B"
    },
    {
      id: 168,
      subtopic: "Image Interpretation",
      question: "A paper is folded in half (top to bottom) and then a cut is made as shown (a semicircle on the folded edge). When unfolded, the resulting pattern will have?",
      options: [
        "Two semicircles symmetric about horizontal axis",
        "Two semicircles symmetric about vertical axis",
        "Four semicircles at four corners",
        "One full circle"
      ],
      correctAnswer: "One full circle"
    },
    {
      id: 169,
      subtopic: "Image Interpretation",
      question: "Count the number of squares in a 4x4 grid of dots (i.e., 4x4 square grid of points forming 3x3 small squares).",
      options: ["14", "16", "30", "25"],
      correctAnswer: "14"
    },
    {
      id: 170,
      subtopic: "Image Interpretation",
      question: "Find the mirror image of the word 'CAT' if the mirror is placed below the word (water image).",
      options: ["CAT (unchanged)", "ƆAꓕ", "ꓕAƆ", "ꓕAƆ (different font)"],
      correctAnswer: "ꓕAƆ"
    },
    {
      id: 171,
      subtopic: "Image Interpretation",
      question: "In a figure, there is a triangle with a circle inscribed touching all three sides. Another figure has a square inscribed in a circle. Which of the following represents the correct embedded figure?",
      options: [
        "Triangle inside circle",
        "Circle inside triangle",
        "Square inside circle",
        "Circle inside square"
      ],
      correctAnswer: "Circle inside triangle"
    },
    {
      id: 172,
      subtopic: "Image Interpretation",
      question: "Select the alternative that will complete the figure pattern: A square with a diagonal from top-left to bottom-right, and the other half has alternating shading. The missing quarter has which shading?",
      options: [
        "Top-left shaded",
        "Bottom-right shaded",
        "Top-right shaded",
        "Bottom-left shaded"
      ],
      correctAnswer: "Top-left shaded"
    },
    {
      id: 173,
      subtopic: "Image Interpretation",
      question: "A figure shows a sequence: first a square, then a square with one diagonal, then a square with both diagonals. If this pattern continues, the fourth figure should be?",
      options: [
        "Square with both diagonals and a circle",
        "Square with a cross (vertical and horizontal lines)",
        "Square with both diagonals and a dot at center",
        "Square with a grid of 4 squares"
      ],
      correctAnswer: "Square with a cross (vertical and horizontal lines)"
    }
  ],
  critical: [
    // --- PREMISE, ASSUMPTION, CONCLUSION ---
    {
      id: 174,
      subtopic: "Premise, Assumption, Conclusion",
      question: "Employees who exercise regularly report lower stress levels. Therefore, the company should provide gym facilities. Which of the following is a premise?",
      options: [
        "The company should provide gym facilities",
        "Employees who exercise regularly report lower stress levels",
        "Stress affects productivity",
        "Gym facilities are expensive"
      ],
      correctAnswer: "Employees who exercise regularly report lower stress levels"
    },
    {
      id: 175,
      subtopic: "Premise, Assumption, Conclusion",
      question: "Electric cars produce zero emissions while driving. We should replace all gasoline cars with electric cars to solve air pollution. Which of the following is a hidden assumption in this argument?",
      options: [
        "Electric cars are cheaper than gasoline cars",
        "Manufacturing electric cars produces no pollution",
        "Air pollution is primarily caused by cars",
        "Electric cars perform as well as gasoline cars"
      ],
      correctAnswer: "Air pollution is primarily caused by cars"
    },
    {
      id: 176,
      subtopic: "Premise, Assumption, Conclusion",
      question: "Critical reasoning primarily focuses on:",
      options: [
        "Emotional intelligence",
        "Logical evaluation of statements",
        "Memorizing theories",
        "Following intuition"
      ],
      correctAnswer: "Logical evaluation of statements"
    },
    {
      id: 177,
      subtopic: "Premise, Assumption, Conclusion",
      question: "What identifies a conclusion in an argument?",
      options: [
        "It appears first",
        "It provides reasons",
        "It is the final claim to be proven",
        "It is always emotional"
      ],
      correctAnswer: "It is the final claim to be proven"
    },
    {
      id: 178,
      subtopic: "Premise, Assumption, Conclusion",
      question: "Words like 'because' and 'since' typically signal:",
      options: [
        "Conclusions",
        "Premises",
        "Assumptions",
        "Opinions"
      ],
      correctAnswer: "Premises"
    },
    {
      id: 179,
      subtopic: "Premise, Assumption, Conclusion",
      question: "Statement: 'He failed the entrance test, so he is not intelligent.' What is the conclusion?",
      options: [
        "He is not intelligent",
        "He failed the test",
        "Entrance test was difficult",
        "Intelligence is genetic"
      ],
      correctAnswer: "He is not intelligent"
    },
    {
      id: 180,
      subtopic: "Premise, Assumption, Conclusion",
      question: "'Sales grew by 40%. Therefore, our new logo is effective.' Which of the following is the premise?",
      options: [
        "New logo is effective",
        "Sales grew by 40%",
        "Logo is beautiful",
        "Marketing team worked hard"
      ],
      correctAnswer: "Sales grew by 40%"
    },
    {
      id: 181,
      subtopic: "Premise, Assumption, Conclusion",
      question: "'All coders know Python. Riya knows Python. So, Riya is a coder.' This reasoning is:",
      options: [
        "Valid",
        "Invalid",
        "Neutral",
        "Always correct"
      ],
      correctAnswer: "Invalid"
    },
    {
      id: 182,
      subtopic: "Premise, Assumption, Conclusion",
      question: "Statement: 'If a product is costly, it must be high quality.' This is an example of a/an:",
      options: [
        "Fact",
        "Inference",
        "Proven evidence",
        "Assumption"
      ],
      correctAnswer: "Assumption"
    },

    // --- STRENGTHENING & WEAKENING STATEMENTS ---
    {
      id: 183,
      subtopic: "Strengthening & Weakening Statements",
      question: "Argument: 'Employees who work from home are more productive. We should allow remote work.' Which STRENGTHENS this argument?",
      options: [
        "Some employees prefer office work",
        "Home workers have fewer distractions",
        "Productivity is hard to measure remotely",
        "Offices have better equipment"
      ],
      correctAnswer: "Home workers have fewer distractions"
    },
    {
      id: 184,
      subtopic: "Strengthening & Weakening Statements",
      question: "Argument: 'Restaurant added vegan options → Sales increased 20% → Vegan options caused sales increase.' Which WEAKENS this argument?",
      options: [
        "The restaurant also lowered prices",
        "Vegan options are cheaper to prepare",
        "Many customers asked for vegan options",
        "Competitors don't offer vegan options"
      ],
      correctAnswer: "The restaurant also lowered prices"
    },
    {
      id: 185,
      subtopic: "Strengthening & Weakening Statements",
      question: "Argument: 'Students with high grades get scholarships → Scholarships improve grades.' Which exposes a flaw in this reasoning?",
      options: [
        "Scholarships require maintaining grades",
        "Smart students get both high grades and scholarships",
        "Scholarships reduce financial stress",
        "Some scholarships aren't based on grades"
      ],
      correctAnswer: "Smart students get both high grades and scholarships"
    },
    {
      id: 186,
      subtopic: "Strengthening & Weakening Statements",
      question: "Claim: 'Quality training increases employee productivity.' Which option strengthens the claim?",
      options: [
        "Company cafeteria was renovated",
        "Employees report fewer errors after training",
        "Two trainers resigned",
        "Office paint was changed"
      ],
      correctAnswer: "Employees report fewer errors after training"
    },
    {
      id: 187,
      subtopic: "Strengthening & Weakening Statements",
      question: "Claim: 'Online advertising boosts sales.' Which option weakens the claim?",
      options: [
        "Sales declined despite ads running.",
        "Ads reached 3 million users.",
        "Website traffic doubled.",
        "Social media following increased."
      ],
      correctAnswer: "Sales declined despite ads running."
    },
    {
      id: 188,
      subtopic: "Strengthening & Weakening Statements",
      question: "Strengthening statements typically:",
      options: [
        "Increase doubt",
        "Add irrelevant facts",
        "Support assumptions or evidence",
        "Attack the conclusion"
      ],
      correctAnswer: "Support assumptions or evidence"
    },
    {
      id: 189,
      subtopic: "Strengthening & Weakening Statements",
      question: "Weakening statements generally:",
      options: [
        "Make argument more persuasive",
        "Provide counterevidence",
        "Confirm data credibility",
        "Improve clarity of the claim"
      ],
      correctAnswer: "Provide counterevidence"
    },
    {
      id: 190,
      subtopic: "Strengthening & Weakening Statements",
      question: "Claim: 'Daily reading improves vocabulary.' Which supports the claim?",
      options: [
        "Reader gained 200 new words in a month.",
        "Newspapers increased prices.",
        "Libraries closed early.",
        "Bookstores offer discounts."
      ],
      correctAnswer: "Reader gained 200 new words in a month."
    },
    {
      id: 191,
      subtopic: "Strengthening & Weakening Statements",
      question: "Claim: 'Team collaboration increases innovation.' Which weakens the claim?",
      options: [
        "Brainstorming sessions doubled.",
        "Teams used new collaboration tools.",
        "Ideas filed for patents.",
        "70% of best ideas came from solo work."
      ],
      correctAnswer: "70% of best ideas came from solo work."
    },
    {
      id: 192,
      subtopic: "Strengthening & Weakening Statements",
      question: "Claim: 'Customer service training reduced complaints.' Which weakens the claim?",
      options: [
        "Complaints increased by 40% post training.",
        "Customers liked staff uniforms.",
        "New call center opened.",
        "New training batch scheduled."
      ],
      correctAnswer: "Complaints increased by 40% post training."
    },
    {
      id: 193,
      subtopic: "Strengthening & Weakening Statements",
      question: "Claim: 'Electric cars are more cost-efficient long term.' Which strengthens the claim?",
      options: [
        "Electric cars look futuristic.",
        "New fuel stations opened.",
        "Paint maintenance is expensive.",
        "Charging costs are lower than fuel costs annually."
      ],
      correctAnswer: "Charging costs are lower than fuel costs annually."
    },
    {
      id: 194,
      subtopic: "Strengthening & Weakening Statements",
      question: "Claim: 'The sales campaign was successful.' Which weakens the claim?",
      options: [
        "Campaign won a design award.",
        "Vendor appreciated the ad quality.",
        "Sales remained unchanged despite campaign.",
        "Campaign videos were trending."
      ],
      correctAnswer: "Sales remained unchanged despite campaign."
    },
    {
      id: 195,
      subtopic: "Strengthening & Weakening Statements",
      question: "Claim: 'Employee engagement events increased morale.' Which weakens the claim?",
      options: [
        "Absenteeism rose after events.",
        "Posters looked nice.",
        "Photos uploaded on Instagram.",
        "CEO attended the event."
      ],
      correctAnswer: "Absenteeism rose after events."
    },
    {
      id: 196,
      subtopic: "Strengthening & Weakening Statements",
      question: "Claim: 'New onboarding reduces early resignations.' Which strengthens the claim?",
      options: [
        "First 90-day exit rate dropped from 22% to 5%.",
        "New employees enjoyed lunch.",
        "Onboarding orientation was colorful.",
        "Managers welcomed new hires."
      ],
      correctAnswer: "First 90-day exit rate dropped from 22% to 5%."
    },
    {
      id: 197,
      subtopic: "Strengthening & Weakening Statements",
      question: "Claim: 'Employee wellness program improved productivity.' Which strengthens the claim?",
      options: [
        "Break rooms redesigned.",
        "Posters looked inspiring.",
        "Employees liked the program logo.",
        "Productivity metrics rose by 12% post implementation."
      ],
      correctAnswer: "Productivity metrics rose by 12% post implementation."
    },
    {
      id: 198,
      subtopic: "Strengthening & Weakening Statements",
      question: "Weakening through alternative cause: Claim: 'Sales increased due to training.' Which alternative cause weakens the claim?",
      options: [
        "Team liked training materials.",
        "Market demand doubled due to festival season.",
        "Trainers are certified.",
        "Training hall was large."
      ],
      correctAnswer: "Market demand doubled due to festival season."
    },
    {
      id: 199,
      subtopic: "Strengthening & Weakening Statements",
      question: "Claim: 'Product quality improved after inspection system upgrade.' Which strengthens the claim?",
      options: [
        "Inspector uniforms were changed.",
        "Warehouse lights upgraded.",
        "Defect rate dropped from 8% to 2%.",
        "CEO visited the plant."
      ],
      correctAnswer: "Defect rate dropped from 8% to 2%."
    },
    {
      id: 200,
      subtopic: "Strengthening & Weakening Statements",
      question: "Claim: 'Leadership workshops improved decision making.' Which strengthens the claim?",
      options: [
        "Participants got certificates.",
        "Speaker was famous.",
        "Workshop held at a resort.",
        "Decision turnaround time dropped 50%."
      ],
      correctAnswer: "Decision turnaround time dropped 50%."
    },
    {
      id: 201,
      subtopic: "Strengthening & Weakening Statements",
      question: "Claim: 'Data entry errors dropped after training.' Which is a strengthening statement?",
      options: [
        "Training was conducted yearly",
        "Employees disliked training",
        "Errors dropped immediately after training",
        "Errors increased later"
      ],
      correctAnswer: "Errors dropped immediately after training"
    },
    {
      id: 202,
      subtopic: "Strengthening & Weakening Statements",
      question: "Weakening the claim: 'Our product is best because it is expensive.'",
      options: [
        "Competitors sell cheaper with better reviews",
        "Raw material price increased",
        "Customers like packaging",
        "Offers are limited"
      ],
      correctAnswer: "Competitors sell cheaper with better reviews"
    },

    // --- MIMIC THE PATTERN ---
    {
      id: 203,
      subtopic: "Mimic the Pattern",
      question: "In critical reasoning, what does it mean to 'mimic the pattern'?",
      options: [
        "Focusing on the specific topic like environment or business",
        "Identifying and reproducing the underlying logical structure",
        "Providing counterevidence to weaken a claim",
        "Supporting the assumption with facts"
      ],
      correctAnswer: "Identifying and reproducing the underlying logical structure"
    },
    {
      id: 204,
      subtopic: "Mimic the Pattern",
      question: "Which of the following statements mimics the necessary vs. sufficient pattern of this original statement: 'Being born in the US is necessary to be President (but not sufficient—you also need other qualifications)'?",
      options: [
        "Submitting the application is necessary for consideration (but not sufficient—quality matters too).",
        "If you submit the application, you are guaranteed the job.",
        "Being born in the US guarantees you will be President.",
        "You do not need to apply to be considered."
      ],
      correctAnswer: "Submitting the application is necessary for consideration (but not sufficient—quality matters too)."
    },
    {
      id: 205,
      subtopic: "Mimic the Pattern",
      question: "Read the flawed argument: 'Every time I wear my lucky socks, my team wins. I wore them today, so we'll win.' Which of the following mimics this exact logical flaw (confusing correlation with causation)?",
      options: [
        "Every time the company reorganized, stock prices rose. They're reorganizing now, so stock prices will rise.",
        "If it rains, the ground gets wet. It is raining, so the ground is wet.",
        "My lucky socks have holes in them, so we might lose.",
        "The team won because they practiced hard every day."
      ],
      correctAnswer: "Every time the company reorganized, stock prices rose. They're reorganizing now, so stock prices will rise."
    },
    {
      id: 206,
      subtopic: "Mimic the Pattern",
      question: "What logical pattern for constructing valid arguments does the following mimic: 'If the server is working, then the website loads. The website is not loading. Therefore, the server is not working.'?",
      options: [
        "Post hoc fallacy",
        "Faulty analogy",
        "Modus Tollens (If P then Q. Not Q. Therefore, not P.)",
        "Modus Ponens"
      ],
      correctAnswer: "Modus Tollens (If P then Q. Not Q. Therefore, not P.)"
    },
    {
      id: 207,
      subtopic: "Mimic the Pattern",
      question: "A colleague argues: 'The Tokyo team used Agile and delivered early. Therefore, if we switch to Agile, we'll deliver early too.' What logical flaw is present in this pattern?",
      options: [
        "Modus Tollens",
        "Post hoc fallacy",
        "Faulty analogy – assumes conditions are identical",
        "Hasty generalization"
      ],
      correctAnswer: "Faulty analogy – assumes conditions are identical"
    }
  ],
  business: [
    // --- DECISION MAKING ---
    {
      id: 208,
      subtopic: "Decision Making",
      question: "What is the core essence of decision-making?",
      options: [
        "Collecting maximum data",
        "Avoiding risk at all costs",
        "Choosing between alternatives and committing resources",
        "Following the instructions of a senior"
      ],
      correctAnswer: "Choosing between alternatives and committing resources"
    },
    {
      id: 209,
      subtopic: "Decision Making",
      question: "Which of the following best describes 'Opportunity Cost' in decision-making?",
      options: [
        "The monetary price of a decision",
        "The value of the next best alternative that is given up",
        "The total time spent making the decision",
        "The penalty for a wrong decision"
      ],
      correctAnswer: "The value of the next best alternative that is given up"
    },
    {
      id: 210,
      subtopic: "Decision Making",
      question: "Why is decision-making considered crucial for organizational survival?",
      options: [
        "It ensures all employees are happy",
        "It allows the organization to adapt to changing environments",
        "It guarantees profit",
        "It eliminates the need for planning"
      ],
      correctAnswer: "It allows the organization to adapt to changing environments"
    },
    {
      id: 211,
      subtopic: "Decision Making",
      question: "In the Blockbuster vs. Netflix case study, what was Blockbuster's fatal decision?",
      options: [
        "To invest too heavily in streaming technology",
        "To lower their late fees",
        "To reject the opportunity to buy Netflix for $50 million",
        "To expand too quickly internationally"
      ],
      correctAnswer: "To reject the opportunity to buy Netflix for $50 million"
    },
    {
      id: 212,
      subtopic: "Decision Making",
      question: "A restaurant manager deciding whether to add a new dish to the menu based on a 60% popularity rating from a customer survey is an example of a decision under:",
      options: ["Risk", "Certainty", "Uncertainty", "Non-Programmed"],
      correctAnswer: "Risk"
    },
    {
      id: 213,
      subtopic: "Decision Making",
      question: "A social media manager trying to predict the viral potential of a completely new type of content format (with no prior data) is operating under:",
      options: ["Risk", "Certainty", "Uncertainty", "Programmed structure"],
      correctAnswer: "Uncertainty"
    },
    {
      id: 214,
      subtopic: "Decision Making",
      question: "Which of the following is an example of a programmed decision?",
      options: [
        "Launching a new product line",
        "Deciding to enter a foreign market",
        "Responding to a PR crisis",
        "Approving an employee's standard vacation request"
      ],
      correctAnswer: "Approving an employee's standard vacation request"
    },
    {
      id: 215,
      subtopic: "Decision Making",
      question: "According to the 'New Coke' case study, why did Coca-Cola's decision fail despite massive market research?",
      options: [
        "The taste test data was fabricated",
        "They treated an emotional, symbolic decision as a purely mathematical one",
        "The new recipe was too expensive to produce",
        "They didn't spend enough money on advertising"
      ],
      correctAnswer: "They treated an emotional, symbolic decision as a purely mathematical one"
    },
    {
      id: 216,
      subtopic: "Decision Making",
      question: "A tech startup deciding whether to merge with a rival company is an example of what type of decision?",
      options: ["Programmed", "Non-Programmed", "Operational", "Rule-based"],
      correctAnswer: "Non-Programmed"
    },
    {
      id: 217,
      subtopic: "Decision Making",
      question: "A bank manager knows exactly that a 1-year fixed deposit will yield a 5% return. This is an example of a decision made under the condition of:",
      options: ["Risk", "Uncertainty", "Ambiguity", "Certainty"],
      correctAnswer: "Certainty"
    },
    {
      id: 218,
      subtopic: "Decision Making",
      question: "What is the first step a manager should take to avoid confusing symptoms with the root cause of a problem?",
      options: [
        "Brainstorm solutions immediately",
        "Establish decision criteria",
        "Implement the cheapest solution",
        "Define the problem accurately"
      ],
      correctAnswer: "Define the problem accurately"
    },
    {
      id: 219,
      subtopic: "Decision Making",
      question: "What is the ultimate purpose of the 'Evaluate and Monitor' step in the DECIDE model?",
      options: [
        "To ensure the solution worked and learn lessons for the future",
        "To punish employees who made mistakes",
        "To file paperwork for the government",
        "To close the project permanently"
      ],
      correctAnswer: "To ensure the solution worked and learn lessons for the future"
    },

    // --- PLAN & ORGANIZE ---
    {
      id: 220,
      subtopic: "Plan & Organize",
      question: "A project manager is setting goals, defining strategies, and outlining tasks before any work begins. What is the primary focus of planning?",
      options: ["Arranging resources", "Defining objectives and actions", "Executing tasks", "Monitoring progress"],
      correctAnswer: "Defining objectives and actions"
    },
    {
      id: 221,
      subtopic: "Plan & Organize",
      question: "A team sets a goal: 'Increase customer satisfaction.' A coach says the goal is too vague. Which SMART criterion is missing?",
      options: ["Specific", "Measurable", "Achievable", "Time-bound"],
      correctAnswer: "Measurable" // Note: Can also be specific, but measurable is frequently used for "by how much" in your slides.
    },
    {
      id: 222,
      subtopic: "Plan & Organize",
      question: "A project manager breaks a product launch into deliverables: design, development, testing, marketing, and training. What is this decomposition called?",
      options: ["RACI matrix", "Gantt chart", "Work Breakdown Structure (WBS)", "Eisenhower matrix"],
      correctAnswer: "Work Breakdown Structure (WBS)"
    },
    {
      id: 223,
      subtopic: "Plan & Organize",
      question: "In a cross-functional project, the team is confused about who approves the final budget. Which tool clarifies roles?",
      options: ["SWOT analysis", "RACI matrix", "PERT chart", "Kanban board"],
      correctAnswer: "RACI matrix"
    },
    {
      id: 224,
      subtopic: "Plan & Organize",
      question: "A company creates a 5-year plan to enter three new international markets. What type of plan is this?",
      options: ["Operational plan", "Tactical plan", "Strategic plan", "Contingency plan"],
      correctAnswer: "Strategic plan"
    },
    {
      id: 225,
      subtopic: "Plan & Organize",
      question: "An event manager starts with the event date (December 10) and schedules backward: venue booking by Nov 1, speaker confirmation by Oct 15, etc. Which planning method is being used?",
      options: ["Forward planning", "Backward planning", "Scenario planning", "SWOT analysis"],
      correctAnswer: "Backward planning"
    },
    {
      id: 226,
      subtopic: "Plan & Organize",
      question: "A team needs to visualize task start/end dates, dependencies, and overlapping activities. Which tool is most appropriate?",
      options: ["RACI matrix", "Gantt chart", "Work Breakdown Structure", "Eisenhower box"],
      correctAnswer: "Gantt chart"
    },
    {
      id: 227,
      subtopic: "Plan & Organize",
      question: "A manager receives two tasks: a client emergency (urgent & important) and a strategic planning session (important but not urgent). According to the Eisenhower matrix, which should be done first?",
      options: ["Strategic planning", "Client emergency", "Delegate both", "Ignore both"],
      correctAnswer: "Client emergency"
    },
    {
      id: 228,
      subtopic: "Plan & Organize",
      question: "A company groups employees into departments: Marketing, Finance, Operations, and HR. What type of organizational structure is this?",
      options: ["Matrix", "Project-based", "Functional", "Flat"],
      correctAnswer: "Functional"
    },
    {
      id: 229,
      subtopic: "Plan & Organize",
      question: "A logistics company creates a backup plan: if the main port closes, shipments will route through an alternate port. What is this type of plan called?",
      options: ["Strategic plan", "Operational plan", "Contingency plan", "Single-use plan"],
      correctAnswer: "Contingency plan"
    },
    {
      id: 230,
      subtopic: "Plan & Organize",
      question: "A software team uses columns: 'To Do,' 'In Progress,' 'Testing,' 'Done' to visualize workflow. What is this tool called?",
      options: ["Gantt chart", "Kanban board", "PERT chart", "RACI matrix"],
      correctAnswer: "Kanban board"
    },
    {
      id: 231,
      subtopic: "Plan & Organize",
      question: "An engineer reports to both a functional manager (Engineering Head) and a project manager (Project Alpha). Which organizational structure is this?",
      options: ["Functional", "Flat", "Matrix", "Network"],
      correctAnswer: "Matrix"
    },
    {
      id: 232,
      subtopic: "Plan & Organize",
      question: "An organization has a formal policy that all expense reports require manager approval within 5 days. What type of plan is this?",
      options: ["Single-use plan", "Standing plan", "Strategic plan", "Tactical plan"],
      correctAnswer: "Standing plan"
    },
    {
      id: 233,
      subtopic: "Plan & Organize",
      question: "In the Spotify case study, what was the primary reason Spotify moved away from a traditional functional structure to create 'Squads'?",
      options: [
        "To fix slow, bureaucratic decision-making caused by functional silos",
        "To save money on office space",
        "To make employees work longer hours",
        "To copy what their competitors were doing"
      ],
      correctAnswer: "To fix slow, bureaucratic decision-making caused by functional silos"
    },

    // --- PROBLEM SOLVING ---
    {
      id: 234,
      subtopic: "Problem Solving",
      question: "What is the first step in any structured problem-solving process?",
      options: [
        "Implement a solution immediately",
        "Identify and define the problem",
        "Brainstorm solutions",
        "Evaluate the results"
      ],
      correctAnswer: "Identify and define the problem"
    },
    {
      id: 235,
      subtopic: "Problem Solving",
      question: "A machine stops working. The operator asks: 'Why did it stop?' (Overload). 'Why overload?' (Bearing not lubricated)... What is the root cause identified by the 5 Whys?",
      options: [
        "Machine overload",
        "Bearing not lubricated",
        "Pump failure",
        "No scheduled maintenance"
      ],
      correctAnswer: "No scheduled maintenance"
    },
    {
      id: 236,
      subtopic: "Problem Solving",
      question: "A quality team is investigating high defect rates. They create a diagram with categories: People, Process, Equipment, Materials, Environment, Measurement. What is this diagram primarily used for?",
      options: [
        "Generating random ideas",
        "Visualizing possible causes of a problem",
        "Ranking solutions by cost",
        "Creating a project timeline"
      ],
      correctAnswer: "Visualizing possible causes of a problem"
    },
    {
      id: 237,
      subtopic: "Problem Solving",
      question: "According to Pareto analysis, if 70% of complaints are about long wait times, 15% about billing errors, 10% about product defects, and 5% about other issues, which issue should be addressed first?",
      options: ["Billing errors", "Product defects", "Long wait times", "Other issues"],
      correctAnswer: "Long wait times"
    },
    {
      id: 238,
      subtopic: "Problem Solving",
      question: "A city government is trying to reduce homelessness. Every solution changes the nature of the problem, and there is no definitive stopping rule. What type of problem is this?",
      options: ["Simple (structured)", "Technical", "Wicked", "Analytical"],
      correctAnswer: "Wicked"
    },
    {
      id: 239,
      subtopic: "Problem Solving",
      question: "A manufacturing team plans a change to reduce waste, implements it, measures the results, and standardizes the change. Which problem-solving methodology are they using?",
      options: ["DMAIC", "PDCA (Plan-Do-Check-Act)", "5 Whys", "Design Thinking"],
      correctAnswer: "PDCA (Plan-Do-Check-Act)"
    },
    {
      id: 240,
      subtopic: "Problem Solving",
      question: "A factory has frequent machine breakdowns. The maintenance team replaces a broken belt, but the belt breaks again next week. What should the team do next?",
      options: [
        "Replace the belt again",
        "Identify why the belt is breaking (root cause)",
        "Increase production speed",
        "Ignore the problem"
      ],
      correctAnswer: "Identify why the belt is breaking (root cause)"
    },
    {
      id: 241,
      subtopic: "Problem Solving",
      question: "A project manager has three solution options. She evaluates each against criteria: cost (weight 40%), time (30%), impact (30%). Option A scores highest. What is the purpose of a decision matrix?",
      options: [
        "To generate creative ideas",
        "To compare options using weighted criteria",
        "To draw cause-effect diagrams",
        "To implement solutions"
      ],
      correctAnswer: "To compare options using weighted criteria"
    },
    {
      id: 242,
      subtopic: "Problem Solving",
      question: "A team wants to redesign the check-in experience at a hospital. They spend a day shadowing patients and interviewing nurses. Which phase of Design Thinking is this?",
      options: ["Define", "Ideate", "Empathize", "Test"],
      correctAnswer: "Empathize"
    },
    {
      id: 243,
      subtopic: "Problem Solving",
      question: "A Six Sigma team is working to reduce variation in a packaging process. They are currently measuring current performance and collecting baseline data. Which phase of DMAIC are they in?",
      options: ["Define", "Measure", "Analyze", "Improve"],
      correctAnswer: "Measure"
    },
    {
      id: 244,
      subtopic: "Problem Solving",
      question: "A team believes that low morale is causing missed deadlines. They only ask employees who agree with this view and ignore data showing that unclear requirements are the real issue. Which cognitive bias is affecting the team?",
      options: ["Anchoring", "Confirmation bias", "Overconfidence", "Hindsight bias"],
      correctAnswer: "Confirmation bias"
    },
    {
      id: 245,
      subtopic: "Problem Solving",
      question: "A product team wants to improve a coffee mug. They ask: 'What can we substitute? Combine with another feature? Adapt for a new use?' Which creative problem-solving tool are they using?",
      options: ["5 Whys", "Pareto analysis", "SCAMPER", "Fishbone diagram"],
      correctAnswer: "SCAMPER"
    },
    {
      id: 246,
      subtopic: "Problem Solving",
      question: "After completing a project, a team discusses: 'What happened? Why did it happen? What went well? What could be improved?' What is the primary purpose of an After Action Review?",
      options: [
        "To assign blame",
        "To capture lessons learned for future projects",
        "To celebrate success only",
        "To restart the project"
      ],
      correctAnswer: "To capture lessons learned for future projects"
    },

    // --- CUSTOMER CENTRICITY ---
    {
      id: 247,
      subtopic: "Customer Centricity",
      question: "Using data to predict a customer's next purchase is an example of:",
      options: ["Empathy", "Proactive personalization", "Blame shifting", "Restriction"],
      correctAnswer: "Proactive personalization"
    },
    {
      id: 248,
      subtopic: "Customer Centricity",
      question: "If a customer requests a non-policy return, what is the most customer-centric approach?",
      options: ["Deny rudely", "Lecture policy", "Explore alternate solutions", "Laugh"],
      correctAnswer: "Explore alternate solutions"
    },
    {
      id: 249,
      subtopic: "Customer Centricity",
      question: "Which of the following is a logistics customer-centric practice?",
      options: [
        "Unannounced deliveries",
        "Wrong address blaming customer",
        "Cancel orders",
        "Sharing delivery tracking and ETA"
      ],
      correctAnswer: "Sharing delivery tracking and ETA"
    },
    {
      id: 250,
      subtopic: "Customer Centricity",
      question: "A telecommunications company analyzes every interaction from ad to support to payment. This visualization process is called:",
      options: [
        "Customer Persona Development",
        "Customer Journey Mapping",
        "Net Promoter Score Analysis",
        "Product Lifecycle Management"
      ],
      correctAnswer: "Customer Journey Mapping"
    },
    {
      id: 251,
      subtopic: "Customer Centricity",
      question: "Which statement reflects a shift to a customer-centric mindset?",
      options: [
        "Our smartphone has the fastest processor—advertise it.",
        "We must beat competitors' prices this quarter.",
        "We help busy parents cook nutritious meals in under 30 minutes.",
        "Our earnings increased 15%."
      ],
      correctAnswer: "We help busy parents cook nutritious meals in under 30 minutes."
    },
    {
      id: 252,
      subtopic: "Customer Centricity",
      question: "Gate agents empowered to rebook passengers or give vouchers without manager approval demonstrates:",
      options: [
        "Shifting what we sell to who we serve",
        "Mapping the customer journey",
        "Empowering frontline employees",
        "Breaking down internal silos"
      ],
      correctAnswer: "Empowering frontline employees"
    },
    {
      id: 253,
      subtopic: "Customer Centricity",
      question: "'Deadly sins of customer centricity' refers to:",
      options: [
        "Criminal acts against customers",
        "Behaviors that harm customer trust despite good intentions",
        "Marketing failures only",
        "Customer complaints"
      ],
      correctAnswer: "Behaviors that harm customer trust despite good intentions"
    },
    {
      id: 254,
      subtopic: "Customer Centricity",
      question: "Why is fake empathy harmful in customer interactions?",
      options: [
        "It saves time",
        "Customers feel manipulated",
        "It reduces training cost",
        "It avoids escalation"
      ],
      correctAnswer: "Customers feel manipulated"
    },
    {
      id: 255,
      subtopic: "Customer Centricity",
      question: "Why does a one-size-fits-all service approach typically fail?",
      options: [
        "Customers are identical",
        "Technology is weak",
        "Needs and contexts differ",
        "Policies demand it"
      ],
      correctAnswer: "Needs and contexts differ"
    },
    {
      id: 256,
      subtopic: "Customer Centricity",
      question: "A hotel relying on its brand history while ignoring declining service quality exhibits:",
      options: [
        "The Sin of Measuring the Wrong Things",
        "The Sin of Corporate Arrogance",
        "The Sin of Ignoring Customer Feedback",
        "The Sin of Data Betrayal"
      ],
      correctAnswer: "The Sin of Corporate Arrogance"
    },
    {
      id: 257,
      subtopic: "Customer Centricity",
      question: "A website promises easy returns but actually charges the full term for a faulty rental product. This illustrates:",
      options: [
        "The Sin of Broken Processes (Systemic Indifference)",
        "The Sin of Corporate Arrogance",
        "The Sin of Data Betrayal",
        "The Sin of Measuring the Wrong Things"
      ],
      correctAnswer: "The Sin of Broken Processes (Systemic Indifference)"
    }

  ],
  interview: [
    // --- MOCK INTERVIEWS ---
    {
      id: 258,
      subtopic: "Mock Interviews",
      question: "A career counselor explains to a student that mock interviews are practice sessions that simulate real job interviews. What is the primary purpose of a mock interview?",
      options: [
        "To guarantee a job offer",
        "To provide a safe environment for practice and feedback",
        "To replace the actual interview",
        "To test technical skills only"
      ],
      correctAnswer: "To provide a safe environment for practice and feedback"
    },
    {
      id: 259,
      subtopic: "Mock Interviews",
      question: "During a mock interview, the candidate is asked: “Tell me about a time you resolved a conflict.” She structures her answer using STAR. In the STAR method, 'R' stands for:",
      options: ["Righteousness", "Rambling", "Regret", "Result"],
      correctAnswer: "Result"
    },
    {
      id: 260,
      subtopic: "Mock Interviews",
      question: "After a mock interview, the interviewer notes that the candidate avoided eye contact and slouched. What aspect of interview performance is being addressed?",
      options: ["Content of answers", "Technical knowledge", "Non-verbal communication", "Question structure"],
      correctAnswer: "Non-verbal communication"
    },
    {
      id: 261,
      subtopic: "Mock Interviews",
      question: "A mock interview is conducted with three interviewers (HR, hiring manager, team lead) asking questions in rotation. What type of mock interview is this?",
      options: ["Behavioral", "Panel", "Case", "Stress"],
      correctAnswer: "Panel"
    },
    {
      id: 262,
      subtopic: "Mock Interviews",
      question: "A candidate watches a recording of her mock interview and notices she says “um” frequently. What is a key benefit of recording mock interviews?",
      options: [
        "It replaces the need for feedback",
        "It helps identify unconscious verbal and non-verbal habits",
        "It guarantees a job offer",
        "It only helps with technical questions"
      ],
      correctAnswer: "It helps identify unconscious verbal and non-verbal habits"
    },
    {
      id: 263,
      subtopic: "Mock Interviews",
      question: "After a mock interview, the interviewer says: “Your answer about the team conflict was well-structured, but you didn’t mention the final outcome. Next time, include the Result part of STAR.” What characteristic makes this feedback effective?",
      options: [
        "It is vague",
        "It is specific and actionable",
        "It only praises",
        "It criticizes without solution"
      ],
      correctAnswer: "It is specific and actionable"
    },
    {
      id: 264,
      subtopic: "Mock Interviews",
      question: "An interviewer intentionally interrupts the candidate, challenges her answers, and remains silent for long periods. What type of mock interview is being simulated?",
      options: ["Panel interview", "Technical interview", "Stress interview", "Case interview"],
      correctAnswer: "Stress interview"
    },
    {
      id: 265,
      subtopic: "Mock Interviews",
      question: "In a mock interview, the candidate is asked: “Give me an example of a time you showed leadership.” Which interview method is being used?",
      options: ["Situational", "Behavioral", "Technical", "Case"],
      correctAnswer: "Behavioral"
    },
    {
      id: 266,
      subtopic: "Mock Interviews",
      question: "After the mock interview, the candidate first shares what she thought went well before the interviewer gives feedback. Why is this beneficial?",
      options: ["It saves time", "It encourages self-reflection", "It avoids criticism", "It is required by law"],
      correctAnswer: "It encourages self-reflection"
    },
    {
      id: 267,
      subtopic: "Mock Interviews",
      question: "During a mock interview, a candidate recites a memorized answer word-for-word, sounding robotic. What is the recommended alternative?",
      options: ["Use bullet points", "Memorize more", "Avoid practice", "Only prepare technical"],
      correctAnswer: "Use bullet points"
    },
    {
      id: 268,
      subtopic: "Mock Interviews",
      question: "A student participates in three mock interviews over two weeks, each with a different interviewer. What concept does this repeated practice reinforce?",
      options: ["Iterative improvement", "Memorization", "Luck", "Avoiding real interviews"],
      correctAnswer: "Iterative improvement"
    },
    {
      id: 269,
      subtopic: "Mock Interviews",
      question: "A candidate practices using Zoom, checking camera angle, lighting, and background before the mock session. What is this preparation focused on?",
      options: ["Coding", "Virtual etiquette", "Storytelling", "Case analysis"],
      correctAnswer: "Virtual etiquette"
    },
    {
      id: 270,
      subtopic: "Mock Interviews",
      question: "An observer uses a rubric with categories: Content, Delivery, Non-Verbal, and Overall Impression. Why is a rubric useful in mock interviews?",
      options: ["It is subjective", "It provides standardized feedback", "No debrief is needed", "It is only for technical interviews"],
      correctAnswer: "It provides standardized feedback"
    },
    {
      id: 271,
      subtopic: "Mock Interviews",
      question: "Rahul failed three real interviews, but after structured mock interviews with feedback, he successfully got a job offer. What does this outcome demonstrate?",
      options: ["Mock interviews are only for technical use", "They guarantee a job", "Practice improves performance", "It is a waste of time"],
      correctAnswer: "Practice improves performance"
    },
    {
      id: 272,
      subtopic: "Mock Interviews",
      question: "An experienced professional acts as an interviewer and takes detailed notes during the mock interview. What should the interviewer focus on in those notes?",
      options: ["The resume only", "Specific examples and behaviors", "General impressions", "Personal opinions"],
      correctAnswer: "Specific examples and behaviors"
    },

    // --- VIRTUAL & TELEPHONIC INTERVIEWS ---
    {
      id: 273,
      subtopic: "Virtual & Telephonic Interviews",
      question: "What is the primary purpose of a telephonic interview in recruitment?",
      options: [
        "To assess technical skills through live coding",
        "To conduct final onsite interviews",
        "To perform initial screening and filter candidates efficiently",
        "To replace all face-to-face interactions"
      ],
      correctAnswer: "To perform initial screening and filter candidates efficiently"
    },
    {
      id: 274,
      subtopic: "Virtual & Telephonic Interviews",
      question: "Which of the following is a key advantage of video interviews (e.g., Skype) over telephonic interviews?",
      options: [
        "Lower bandwidth requirements",
        "Ability to observe non-verbal cues and professionalism",
        "Guaranteed no technical issues",
        "Candidates feel less pressure"
      ],
      correctAnswer: "Ability to observe non-verbal cues and professionalism"
    },
    {
      id: 275,
      subtopic: "Virtual & Telephonic Interviews",
      question: "In a pre-recorded (asynchronous) video interview, candidates typically:",
      options: [
        "Interact live with the interviewer",
        "Record answers to pre-set questions at their own convenience",
        "Only submit a written response",
        "Participate in a panel discussion"
      ],
      correctAnswer: "Record answers to pre-set questions at their own convenience"
    },
    {
      id: 276,
      subtopic: "Virtual & Telephonic Interviews",
      question: "Which of the following is a recommended best practice for candidates during a telephonic interview?",
      options: [
        "Use a speakerphone in a crowded room",
        "Smile while speaking to positively affect your tone",
        "Dress casually since the interviewer cannot see you",
        "Interrupt the interviewer frequently to show enthusiasm"
      ],
      correctAnswer: "Smile while speaking to positively affect your tone"
    },
    {
      id: 277,
      subtopic: "Virtual & Telephonic Interviews",
      question: "What should an interviewer do to ensure a fair evaluation in a telephonic interview?",
      options: [
        "Rely solely on gut feeling",
        "Use a structured scorecard with consistent questions",
        "Allow unlimited time for each candidate",
        "Conduct the interview while multitasking"
      ],
      correctAnswer: "Use a structured scorecard with consistent questions"
    },
    {
      id: 278,
      subtopic: "Virtual & Telephonic Interviews",
      question: "Which of the following is a common disadvantage of video interviews for employers?",
      options: [
        "Cannot assess communication skills",
        "Limited access to global talent",
        "Harder to evaluate cultural fit due to reduced in-person interaction",
        "No ability to record the session"
      ],
      correctAnswer: "Harder to evaluate cultural fit due to reduced in-person interaction"
    },
    {
      id: 279,
      subtopic: "Virtual & Telephonic Interviews",
      question: "In a panel telephonic interview, the most effective way to manage multiple interviewers is:",
      options: [
        "Have all interviewers ask questions simultaneously",
        "Let candidates choose which interviewer to answer",
        "Coordinate turns and have a moderator to avoid crosstalk",
        "Skip introductions to save time"
      ],
      correctAnswer: "Coordinate turns and have a moderator to avoid crosstalk"
    },
    {
      id: 280,
      subtopic: "Virtual & Telephonic Interviews",
      question: "What is the typical duration of an initial screening telephonic interview?",
      options: ["1-2 hours", "15-45 minutes", "5 minutes", "Over 90 minutes"],
      correctAnswer: "15-45 minutes"
    },
    {
      id: 281,
      subtopic: "Virtual & Telephonic Interviews",
      question: "Which action demonstrates a candidate’s professionalism before a Skype interview?",
      options: [
        "Testing the internet connection, camera, and microphone in advance",
        "Joining the call from a noisy coffee shop",
        "Using a casual profile picture on the video platform",
        "Keeping the phone ringer on during the interview"
      ],
      correctAnswer: "Testing the internet connection, camera, and microphone in advance"
    },
    {
      id: 282,
      subtopic: "Virtual & Telephonic Interviews",
      question: "What is the main difference between a live video interview and a pre-recorded video interview?",
      options: [
        "Live interviews are always shorter",
        "Pre-recorded interviews allow candidates to record answers at any time, while live interviews are real-time",
        "Live interviews do not require an internet connection",
        "Pre-recorded interviews cannot include behavioral questions"
      ],
      correctAnswer: "Pre-recorded interviews allow candidates to record answers at any time, while live interviews are real-time"
    },
    {
      id: 283,
      subtopic: "Virtual & Telephonic Interviews",
      question: "Why is it recommended to have a backup plan (e.g., exchange phone numbers) for a video interview?",
      options: [
        "To share confidential documents",
        "To quickly switch to an audio call if video fails",
        "To record the interview without permission",
        "To reschedule without notice"
      ],
      correctAnswer: "To quickly switch to an audio call if video fails"
    },
    {
      id: 284,
      subtopic: "Virtual & Telephonic Interviews",
      question: "Which of the following is an example of a behavioral question commonly asked in telephonic interviews?",
      options: [
        "How would you handle a project delay?",
        "Describe a time you resolved a conflict with a coworker.",
        "What is your greatest strength?",
        "Where do you see yourself in five years?"
      ],
      correctAnswer: "Describe a time you resolved a conflict with a coworker."
    },
    {
      id: 285,
      subtopic: "Virtual & Telephonic Interviews",
      question: "What should an interviewer do immediately after a telephonic interview?",
      options: [
        "Wait for the candidate to follow up",
        "Debrief with the hiring team and capture notes while fresh",
        "Delete all notes to avoid bias",
        "Offer the job on the spot"
      ],
      correctAnswer: "Debrief with the hiring team and capture notes while fresh"
    },
    {
      id: 286,
      subtopic: "Virtual & Telephonic Interviews",
      question: "Which of the following is a key element of candidate preparation for a Skype interview?",
      options: [
        "Using a virtual background that is professional and distraction-free",
        "Keeping the camera off to save bandwidth",
        "Dressing only from the waist down",
        "Eating during the interview to show comfort"
      ],
      correctAnswer: "Using a virtual background that is professional and distraction-free"
    },
    {
      id: 287,
      subtopic: "Virtual & Telephonic Interviews",
      question: "In a telephonic interview, how can an interviewer assess active listening?",
      options: [
        "By asking the candidate to repeat every question",
        "By observing whether the candidate’s answers directly address the question asked",
        "By timing how long the candidate speaks",
        "By interrupting to check attention"
      ],
      correctAnswer: "By observing whether the candidate’s answers directly address the question asked"
    },
    {
      id: 288,
      subtopic: "Virtual & Telephonic Interviews",
      question: "Pre-recorded Video Interviews are also called:",
      options: ["Synchronous", "Review type", "Asynchronous", "All of the above"],
      correctAnswer: "Asynchronous"
    },

    // --- PANEL INTERVIEWS ---
    {
      id: 289,
      subtopic: "Panel Interviews",
      question: "What is a panel interview?",
      options: [
        "An interview conducted by a single interviewer",
        "An interview where the candidate is interviewed by multiple interviewers simultaneously",
        "A group discussion among candidates",
        "A pre-recorded video interview"
      ],
      correctAnswer: "An interview where the candidate is interviewed by multiple interviewers simultaneously"
    },
    {
      id: 290,
      subtopic: "Panel Interviews",
      question: "Which of the following is a key advantage of panel interviews for employers?",
      options: ["Candidates feel less pressure", "Faster decision-making", "No technical tests", "Guarantees hire"],
      correctAnswer: "Faster decision-making"
    },
    {
      id: 291,
      subtopic: "Panel Interviews",
      question: "In a panel interview, which role is typically responsible for managing time and facilitating the conversation?",
      options: ["HR only", "Technical expert", "Lead interviewer", "Candidate"],
      correctAnswer: "Lead interviewer"
    },
    {
      id: 292,
      subtopic: "Panel Interviews",
      question: "Why should a candidate research each panel member before the interview?",
      options: ["Find personal info", "Understand their roles and perspectives", "Avoid specific members", "Prepare controversy"],
      correctAnswer: "Understand their roles and perspectives"
    },
    {
      id: 293,
      subtopic: "Panel Interviews",
      question: "What is the recommended way for a candidate to address the panel when answering a question?",
      options: [
        "Look only at the questioner",
        "Look at the most senior person",
        "Include all panelists with eye contact",
        "Stare fixedly at the camera"
      ],
      correctAnswer: "Include all panelists with eye contact"
    },
    {
      id: 294,
      subtopic: "Panel Interviews",
      question: "Which of the following is a common pitfall for candidates in a panel interview?",
      options: ["Asking questions", "Using the STAR method", "Ignoring certain panelists", "Dressing professionally"],
      correctAnswer: "Ignoring certain panelists"
    },
    {
      id: 295,
      subtopic: "Panel Interviews",
      question: "What should a panel do immediately after the interview to ensure effective evaluation?",
      options: ["Wait a week", "Debrief immediately", "Decide alone", "Send a rejection email"],
      correctAnswer: "Debrief immediately"
    },
    {
      id: 296,
      subtopic: "Panel Interviews",
      question: "Which type of question is most effective for a panel member assessing cultural fit?",
      options: [
        "What is the capital of France?",
        "Give an example of a time you handled critical feedback.",
        "How many golf balls fit in a plane?",
        "What is your desired salary?"
      ],
      correctAnswer: "Give an example of a time you handled critical feedback."
    },
    {
      id: 297,
      subtopic: "Panel Interviews",
      question: "In a virtual panel interview, what is a critical technical best practice for the candidate?",
      options: ["Use a fancy background", "Test your tech beforehand", "Use public WiFi", "Keep the camera off"],
      correctAnswer: "Test your tech beforehand"
    },
    {
      id: 298,
      subtopic: "Panel Interviews",
      question: "How should a candidate handle a situation where a panel member asks a highly technical question they cannot answer?",
      options: ["Guess the answer", "Simply say 'I don't know'", "Explain how you would approach finding the answer", "Blame the interviewer"],
      correctAnswer: "Explain how you would approach finding the answer"
    },
    {
      id: 299,
      subtopic: "Panel Interviews",
      question: "What is the ideal composition of a panel interview?",
      options: ["5 members from HR", "Mixed roles representing different perspectives", "Executives only", "Peers only"],
      correctAnswer: "Mixed roles representing different perspectives"
    },
    {
      id: 300,
      subtopic: "Panel Interviews",
      question: "Why is it recommended that panel members use a shared scoring rubric?",
      options: ["It makes the interview longer", "To ensure consistency and fairness", "So they don't have to take notes", "To automatically select the candidate"],
      correctAnswer: "To ensure consistency and fairness"
    },
    {
      id: 301,
      subtopic: "Panel Interviews",
      question: "During a panel interview, a candidate notices one panel member has remained silent for most of the session. What should the candidate do?",
      options: ["Ignore them", "Include them with a brief, direct comment or eye contact", "Ask them why they are silent", "Report them to HR"],
      correctAnswer: "Include them with a brief, direct comment or eye contact"
    },
    {
      id: 302,
      subtopic: "Panel Interviews",
      question: "What is a best practice for candidates when asking questions at the end of a panel interview?",
      options: [
        "Ask the exact same question to all members",
        "Ask tailored, thoughtful questions",
        "Don't ask any questions to save time",
        "Only ask about the salary"
      ],
      correctAnswer: "Ask tailored, thoughtful questions"
    },
    {
      id: 303,
      subtopic: "Panel Interviews",
      question: "After a panel interview, how should a candidate follow up?",
      options: ["Send one generic email to HR", "Send personalized thank-you emails to each panel member", "Call them repeatedly", "Post about it online"],
      correctAnswer: "Send personalized thank-you emails to each panel member"
    },

    // --- STRESS INTERVIEWS ---
    {
      id: 304,
      subtopic: "Stress Interviews",
      question: "What is the primary purpose of a stress interview?",
      options: [
        "To make the candidate uncomfortable for no reason",
        "To assess how a candidate handles pressure, criticism, and unexpected challenges",
        "To test technical knowledge under strict time limits",
        "To evaluate handwriting and presentation skills"
      ],
      correctAnswer: "To assess how a candidate handles pressure, criticism, and unexpected challenges"
    },
    {
      id: 305,
      subtopic: "Stress Interviews",
      question: "Which of the following is a common technique used in stress interviews?",
      options: [
        "Providing a comfortable waiting area",
        "Offering refreshments",
        "Rapid-fire questioning with interruptions",
        "Allowing unlimited time to answer"
      ],
      correctAnswer: "Rapid-fire questioning with interruptions"
    },
    {
      id: 306,
      subtopic: "Stress Interviews",
      question: "In a stress interview, a candidate answers a question and the interviewer remains silent for 15 seconds while maintaining eye contact. This technique is called:",
      options: ["The silent treatment", "Silence and staring", "Passive listening", "Non-verbal encouragement"],
      correctAnswer: "Silence and staring"
    },
    {
      id: 307,
      subtopic: "Stress Interviews",
      question: "What is a recommended way for a candidate to handle a hostile role-play scenario during a stress interview?",
      options: ["Match their hostility", "Become defensive", "Remain calm and redirect to a solution", "Refuse to participate"],
      correctAnswer: "Remain calm and redirect to a solution"
    },
    {
      id: 308,
      subtopic: "Stress Interviews",
      question: "Which of the following is an example of an absurd or unanswerable question sometimes used in stress interviews?",
      options: [
        "What is your greatest strength?",
        "Tell me about a time you led a team.",
        "If you were a kitchen appliance, which one would you be?",
        "Why do you want to work here?"
      ],
      correctAnswer: "If you were a kitchen appliance, which one would you be?"
    },
    {
      id: 309,
      subtopic: "Stress Interviews",
      question: "Why are stress interviews highly controversial in modern recruitment?",
      options: [
        "They are too easy for candidates",
        "They can create a negative employer brand and bad candidate experience",
        "They result in hiring the wrong people",
        "They take too long to conduct"
      ],
      correctAnswer: "They can create a negative employer brand and bad candidate experience"
    },
    {
      id: 310,
      subtopic: "Stress Interviews",
      question: "In a stress interview, an interviewer says, “Your GPA is quite low compared to other applicants. Do you think that reflects a lack of commitment?” What is this an example of?",
      options: ["Behavioral questioning", "Criticism", "A brainteaser", "Cultural assessment"],
      correctAnswer: "Criticism"
    },
    {
      id: 311,
      subtopic: "Stress Interviews",
      question: "Which of the following is a key evaluation criterion for interviewers in a stress interview?",
      options: ["Memorization skills", "Composure under pressure", "Interviewer's industry knowledge", "The ability to interrupt effectively"],
      correctAnswer: "Composure under pressure"
    },
    {
      id: 312,
      subtopic: "Stress Interviews",
      question: "What should a candidate do if an interviewer uses the silence technique after they finish an answer?",
      options: ["Start rambling to fill the silence", "Wait calmly and maintain eye contact", "Look down nervously", "Ask if the answer was wrong"],
      correctAnswer: "Wait calmly and maintain eye contact"
    },
    {
      id: 313,
      subtopic: "Stress Interviews",
      question: "Which type of question is most likely used to test logical reasoning under time pressure in a stress interview?",
      options: ["What are your career goals?", "Estimate how many gas stations are in the US.", "What is your favorite book?", "Why did you choose your college?"],
      correctAnswer: "Estimate how many gas stations are in the US."
    },
    {
      id: 314,
      subtopic: "Stress Interviews",
      question: "How can a candidate best handle a sudden interruption or contradiction from the interviewer?",
      options: ["Argue back aggressively", "Apologize profusely", "Pause, take a breath, and respond calmly", "Ignore the interruption"],
      correctAnswer: "Pause, take a breath, and respond calmly"
    },
    {
      id: 315,
      subtopic: "Stress Interviews",
      question: "Which of the following is a more modern alternative to overt stress interviews that still assesses resilience?",
      options: ["Skipping interviews altogether", "Situational role-play", "Multiple-choice written tests", "Personality quizzes only"],
      correctAnswer: "Situational role-play"
    },
    {
      id: 316,
      subtopic: "Stress Interviews",
      question: "In a stress interview, the interviewer says, “Your resume has a typo. How do you explain that?” even though there is no typo. What is this primarily testing?",
      options: ["Attention to detail", "Reaction to criticism and composure", "Typing speed", "Grammar knowledge"],
      correctAnswer: "Reaction to criticism and composure"
    },
    {
      id: 317,
      subtopic: "Stress Interviews",
      question: "What is a clear sign of failure on the candidate's part during a stress interview?",
      options: ["Pausing to think", "Exhibiting highly defensive or angry behavior", "Asking a clarifying question", "Maintaining eye contact"],
      correctAnswer: "Exhibiting highly defensive or angry behavior"
    },
    {
      id: 318,
      subtopic: "Stress Interviews",
      question: "If a candidate feels a stress interview has crossed into highly unprofessional or abusive behavior, what is an appropriate response?",
      options: ["Endure it silently", "Storm out without a word", "Set a boundary politely and offer to end the interview", "Call the police"],
      correctAnswer: "Set a boundary politely and offer to end the interview"
    }
  ],
  communication: [
    // --- WRITING SKILLS ---
    {
      id: 319,
      subtopic: "Writing Skills",
      question: "The primary purpose of a thesis statement in an essay is to:",
      options: [
        "Provide a summary of the topic",
        "State the main argument or position",
        "List the sources that will be used",
        "Offer a concluding thought"
      ],
      correctAnswer: "State the main argument or position"
    },
    {
      id: 320,
      subtopic: "Writing Skills",
      question: "Which sentence is written in the active voice?",
      options: [
        "The report was written by the intern.",
        "The committee reached a decision.",
        "The decision was made by the committee.",
        "The project will be completed by the team."
      ],
      correctAnswer: "The committee reached a decision."
    },
    {
      id: 321,
      subtopic: "Writing Skills",
      question: "What is the best way to describe 'concise' writing?",
      options: [
        "Using complex vocabulary.",
        "Using as few words as possible without losing clarity.",
        "Writing in short, choppy sentences.",
        "Avoiding all technical terms."
      ],
      correctAnswer: "Using as few words as possible without losing clarity."
    },
    {
      id: 322,
      subtopic: "Writing Skills",
      question: "Which of the following is a sentence fragment?",
      options: [
        "She decided to run for office.",
        "Because the data was inconclusive.",
        "The team analyzed the results thoroughly.",
        "We will proceed accordingly."
      ],
      correctAnswer: "Because the data was inconclusive."
    },
    {
      id: 323,
      subtopic: "Writing Skills",
      question: "The primary goal of the proofreading stage is to:",
      options: [
        "Generate new ideas.",
        "Check for and correct typos and grammatical errors.",
        "Reorganize the structure of the document.",
        "Determine the target audience."
      ],
      correctAnswer: "Check for and correct typos and grammatical errors."
    },
    {
      id: 324,
      subtopic: "Writing Skills",
      question: "Which sentence is punctuated correctly?",
      options: [
        "The items required are: a pen, a notebook, and a laptop.",
        "The items required are a pen, a notebook and a laptop.",
        "The items required are: a pen, a notebook and a laptop.",
        "The items required are a pen, a notebook, and a laptop."
      ],
      correctAnswer: "The items required are a pen, a notebook, and a laptop."
    },
    {
      id: 325,
      subtopic: "Writing Skills",
      question: "In formal business writing, it is best to avoid:",
      options: [
        "Clear and direct language.",
        "Contractions such as 'don't' or 'can't'.",
        "A professional tone.",
        "Specific data and examples."
      ],
      correctAnswer: "Contractions such as 'don't' or 'can't'."
    },
    {
      id: 326,
      subtopic: "Writing Skills",
      question: "What is the role of transitions in a paragraph?",
      options: [
        "To introduce new topics abruptly.",
        "To create a smooth flow between sentences and ideas.",
        "To summarize the main point.",
        "To provide evidence for claims."
      ],
      correctAnswer: "To create a smooth flow between sentences and ideas."
    },
    {
      id: 327,
      subtopic: "Writing Skills",
      question: "Which version of the sentence is most clear and professional?",
      options: [
        "The utilization of the new system was done by the staff.",
        "The staff used the new system.",
        "The new system saw utilization by the staff.",
        "There was usage of the new system by the staff."
      ],
      correctAnswer: "The staff used the new system."
    },
    {
      id: 328,
      subtopic: "Writing Skills",
      question: "Choosing the right word for the context and meaning is a matter of:",
      options: ["Syntax", "Tone", "Spelling", "Diction"],
      correctAnswer: "Diction"
    },
    {
      id: 329,
      subtopic: "Writing Skills",
      question: "The pattern of stressed and unstressed syllables is known as:",
      options: ["Grammar", "Syntax", "Punctuation", "Prosody"],
      correctAnswer: "Prosody"
    },
    {
      id: 330,
      subtopic: "Writing Skills",
      question: "Which sentence best demonstrates parallel structure?",
      options: [
        "She likes hiking, swimming, and to ride a bicycle.",
        "She likes hiking, swimming, and riding a bicycle.",
        "She likes to hike, swimming, and riding a bicycle.",
        "She likes to hike, to swim, and riding a bicycle."
      ],
      correctAnswer: "She likes hiking, swimming, and riding a bicycle."
    },
    {
      id: 331,
      subtopic: "Writing Skills",
      question: "A writer uses 'furthermore'. It signals:",
      options: [
        "A contrasting idea.",
        "An example.",
        "An additional supporting point.",
        "A conclusion."
      ],
      correctAnswer: "An additional supporting point."
    },
    {
      id: 332,
      subtopic: "Writing Skills",
      question: "Main purpose of an introduction:",
      options: [
        "To summarize all key findings.",
        "To provide detailed background data.",
        "To engage the reader and present the main idea.",
        "To list all references used."
      ],
      correctAnswer: "To engage the reader and present the main idea."
    },
    {
      id: 333,
      subtopic: "Writing Skills",
      question: "Best example of using evidence:",
      options: [
        "Our product is the best.",
        "A recent survey showed 95% satisfaction.",
        "I believe our product is fantastic.",
        "Many people think our product is better."
      ],
      correctAnswer: "A recent survey showed 95% satisfaction."
    },
    {
      id: 334,
      subtopic: "Writing Skills",
      question: "Your/You're is an error involving:",
      options: ["Spelling", "Homophones", "Pronouns", "Subject-verb agreement"],
      correctAnswer: "Homophones"
    },
    {
      id: 335,
      subtopic: "Writing Skills",
      question: "Tone of writing is the writer's:",
      options: ["Overall attitude", "Choice of font", "Grammar accuracy", "Use of complex sentences"],
      correctAnswer: "Overall attitude"
    },
    {
      id: 336,
      subtopic: "Writing Skills",
      question: "Best strategy for non-expert audience:",
      options: [
        "Use technical jargon.",
        "Define terms & avoid acronyms.",
        "Assume prior knowledge.",
        "Write for experts."
      ],
      correctAnswer: "Define terms & avoid acronyms."
    },
    {
      id: 337,
      subtopic: "Writing Skills",
      question: "Final step in writing process:",
      options: ["Drafting", "Revising", "Proofreading", "Brainstorming"],
      correctAnswer: "Proofreading"
    },
    {
      id: 338,
      subtopic: "Writing Skills",
      question: "In the context of email communication, what does the term 'email thread' refer to?",
      options: [
        "A list of email contacts saved in the address book",
        "A sequence of related emails grouped together in a single conversation",
        "A draft email that has not been sent yet",
        "A type of spam email sent automatically"
      ],
      correctAnswer: "A sequence of related emails grouped together in a single conversation"
    },

    // --- READING SKILLS ---
    {
      id: 339,
      subtopic: "Reading Skills",
      question: "Riya is preparing for a competitive exam. She has a thick textbook and wants to quickly understand the chapter structure, main headings, and key concepts before diving into detailed study. Which reading type should she use?",
      options: ["Skimming", "Extensive reading", "Intensive reading", "Speed reading"],
      correctAnswer: "Skimming"
    },
    {
      id: 340,
      subtopic: "Reading Skills",
      question: "Amit is looking for the train departure time from a long timetable displayed on a website. He needs to find only the 9:15 AM train to Chennai. Which reading type is most efficient?",
      options: ["Speed reading", "Scanning", "Extensive reading", "Critical reading"],
      correctAnswer: "Scanning"
    },
    {
      id: 341,
      subtopic: "Reading Skills",
      question: "Dr. Sharma is reviewing a research paper to evaluate the validity of its methodology, the strength of evidence, and whether the conclusions are justified. He plans to publish a rebuttal. What type of reading is he doing?",
      options: ["Intensive reading", "Extensive reading", "Skimming", "Critical reading"],
      correctAnswer: "Critical reading"
    },
    {
      id: 342,
      subtopic: "Reading Skills",
      question: "Meera wants to improve her English fluency and enjoys reading novels. She reads for pleasure, rarely stopping to look up words, and focuses on following the story. This approach is best described as:",
      options: ["Skimming", "Scanning", "Extensive reading", "Intensive reading"],
      correctAnswer: "Extensive reading"
    },
    {
      id: 343,
      subtopic: "Reading Skills",
      question: "Rahul is a law student. He has to study a 50-page Supreme Court judgment word-by-word, understand every legal term, and analyze the reasoning. Which type of reading is required?",
      options: ["Skimming", "Scanning", "Intensive reading", "Speed reading"],
      correctAnswer: "Intensive reading"
    },
    {
      id: 344,
      subtopic: "Reading Skills",
      question: "A manager reads a business book but forgets most of the key points within a week. Which method would most improve long-term retention of what is read?",
      options: [
        "Spaced retrieval (testing at increasing intervals)",
        "Reading the book three times in one day",
        "Highlighting every sentence",
        "Listening to an audiobook at double speed"
      ],
      correctAnswer: "Spaced retrieval (testing at increasing intervals)"
    },
    {
      id: 345,
      subtopic: "Reading Skills",
      question: "A lawyer needs to quickly find a specific clause in a 100-page contract. She reads every word slowly. Which reading type should she use instead?",
      options: ["Intensive reading", "Skimming", "Scanning", "Extensive reading"],
      correctAnswer: "Scanning"
    },
    {
      id: 346,
      subtopic: "Reading Skills",
      question: "A reader says every word in her head while reading, limiting her speed to 200 words per minute. What is the recommended practice to reduce subvocalization?",
      options: [
        "Whisper the words aloud",
        "Use a finger to guide eyes faster than inner speech",
        "Close one eye while reading",
        "Read only at night"
      ],
      correctAnswer: "Use a finger to guide eyes faster than inner speech"
    },
    {
      id: 347,
      subtopic: "Reading Skills",
      question: "A student frequently jumps back to re-read sentences or paragraphs, which slows him down significantly. What technique minimizes regression?",
      options: [
        "Covering already read lines with a card",
        "Reading the same page three times",
        "Listening to music",
        "Using a dictionary for every word"
      ],
      correctAnswer: "Covering already read lines with a card"
    },
    {
      id: 348,
      subtopic: "Reading Skills",
      question: "A college student reads textbook chapters passively, underlining entire pages but not engaging with the content. Which active reading strategy would most improve understanding?",
      options: [
        "Annotating margins and writing summaries",
        "Reading faster to finish early",
        "Memorizing page numbers",
        "Skipping difficult sections"
      ],
      correctAnswer: "Annotating margins and writing summaries"
    },
    {
      id: 349,
      subtopic: "Reading Skills",
      question: "A reader encounters the word 'benevolent' and doesn’t know it. However, she knows that 'bene' means good and 'volent' means wishing. What is this word-analysis technique called?",
      options: [
        "Context clues",
        "Morphology (roots, prefixes, suffixes)",
        "Skimming",
        "Subvocalization"
      ],
      correctAnswer: "Morphology (roots, prefixes, suffixes)"
    },
    {
      id: 350,
      subtopic: "Reading Skills",
      question: "After reading a complex scientific paper, a researcher tries to explain it in simple language to a non-expert friend. What is this technique called, and what does it improve?",
      options: [
        "SQ3R – improves speed",
        "Feynman technique – improves comprehension and retention",
        "Pomodoro – improves focus",
        "Spaced repetition – improves vocabulary"
      ],
      correctAnswer: "Feynman technique – improves comprehension and retention"
    },
    {
      id: 351,
      subtopic: "Reading Skills",
      question: "A student reads a paragraph and then asks herself: 'What was the main idea? Did I understand the author’s purpose?' What is this self-monitoring process called?",
      options: [
        "Scanning",
        "Metacognition (thinking about one’s own thinking)",
        "Regression",
        "Subvocalization"
      ],
      correctAnswer: "Metacognition (thinking about one’s own thinking)"
    },

    // --- LISTENING SKILLS ---
    {
      id: 352,
      subtopic: "Listening Skills",
      question: "A student is sitting in a lecture. The professor’s voice enters his ears, but he is daydreaming about the weekend. He cannot recall any of the content later. What describes the student’s experience?",
      options: ["Active listening", "Hearing only", "Empathetic listening", "Critical listening"],
      correctAnswer: "Hearing only"
    },
    {
      id: 353,
      subtopic: "Listening Skills",
      question: "A manager listens carefully to an employee’s complaint about workload. The employee later says, 'I feel valued and heard.' The manager then adjusts the team’s assignments. Which benefit of listening is demonstrated?",
      options: [
        "Validation and trust building",
        "Increasing reading speed",
        "Improving typing skills",
        "Avoiding eye contact"
      ],
      correctAnswer: "Validation and trust building"
    },
    {
      id: 354,
      subtopic: "Listening Skills",
      question: "During a virtual meeting, a team member’s video lags and there is background construction noise. Several participants cannot follow the discussion. What type of listening barrier is this?",
      options: [
        "Psychological barrier",
        "Semantic barrier",
        "Physical/Environmental barrier",
        "Attitudinal barrier"
      ],
      correctAnswer: "Physical/Environmental barrier"
    },
    {
      id: 355,
      subtopic: "Listening Skills",
      question: "A manager says, 'We need to discuss your recent performance.' Before the manager finishes, the employee starts planning a defensive reply. Which bad listening habit is the employee exhibiting?",
      options: ["Pseudolistening", "Rehearsing", "Derailing", "Glazing over"],
      correctAnswer: "Rehearsing"
    },
    {
      id: 356,
      subtopic: "Listening Skills",
      question: "A customer explains a billing error. The support agent replies, 'So if I understand correctly, you were charged twice for the same subscription, and you’d like a refund for the duplicate charge.' Which active listening technique is the agent using?",
      options: ["Reflecting feelings", "Paraphrasing", "Advising", "Interrupting"],
      correctAnswer: "Paraphrasing"
    },
    {
      id: 357,
      subtopic: "Listening Skills",
      question: "A person can hear a friend speaking but chooses to focus on a TV show instead. The friend later says, 'You’re not listening to me.' What is the key difference illustrated here?",
      options: [
        "Hearing is active; listening is passive",
        "Hearing requires effort; listening is automatic",
        "Hearing is involuntary; listening is voluntary and requires attention",
        "Hearing and listening are identical"
      ],
      correctAnswer: "Hearing is involuntary; listening is voluntary and requires attention"
    },
    {
      id: 358,
      subtopic: "Listening Skills",
      question: "A CEO spends her first month conducting listening tours with frontline employees, asking open questions and taking notes. Employees report higher morale and share innovative ideas. What does this scenario demonstrate about the power of listening?",
      options: [
        "Listening is a sign of weakness",
        "Listening reduces productivity",
        "Listening builds trust and uncovers valuable insights",
        "Listening is only useful in therapy"
      ],
      correctAnswer: "Listening builds trust and uncovers valuable insights"
    },
    {
      id: 359,
      subtopic: "Listening Skills",
      question: "A student is worried about an upcoming exam. While the teacher explains a new concept, the student’s mind keeps returning to the exam. Which psychological barrier is affecting the student’s listening?",
      options: ["Preoccupation", "Defensiveness", "Ambushing", "Glazing over"],
      correctAnswer: "Preoccupation"
    },
    {
      id: 360,
      subtopic: "Listening Skills",
      question: "During a long family update, a teenager nods and says 'uh-huh,' but is actually thinking about a video game. What is this behavior called?",
      options: ["Selective listening", "Pseudolistening", "Rehearsing", "Derailing"],
      correctAnswer: "Pseudolistening"
    },
    {
      id: 361,
      subtopic: "Listening Skills",
      question: "A colleague says, 'I’m so frustrated that the project deadline was moved up without consulting us.' The listener replies, 'It sounds like you’re feeling angry because you weren’t included in the decision.' Which active listening skill is being used?",
      options: ["Paraphrasing content", "Reflecting feelings", "Asking a clarifying question", "Summarizing"],
      correctAnswer: "Reflecting feelings"
    },

    // --- SPEAKING SKILLS ---
    {
      id: 362,
      subtopic: "Speaking Skills",
      question: "A manager is asked to present quarterly results to the board. She researches the audience (executives with limited time), defines her purpose (to secure budget approval), and structures her content around three key metrics. Which of the 3 Ps is she primarily engaged in?",
      options: ["Practice", "Performance", "Preparation", "Post-mortem"],
      correctAnswer: "Preparation"
    },
    {
      id: 363,
      subtopic: "Speaking Skills",
      question: "A speaker begins a talk on cybersecurity with: 'Every 39 seconds, a cyberattack occurs somewhere on the internet. That’s over 2,200 attacks while I speak these first two sentences.' Which attention-grabbing technique is being used?",
      options: ["Anecdote", "Rhetorical question", "Startling statistic", "Silence"],
      correctAnswer: "Startling statistic"
    },
    {
      id: 364,
      subtopic: "Speaking Skills",
      question: "A student rehearses her 10-minute presentation six times: twice alone, twice with a timer, once in front of a friend, and once on video. She adjusts her pacing and gestures based on feedback. Which of the 3 Ps is she focusing on?",
      options: ["Preparation", "Practice", "Performance", "Planning"],
      correctAnswer: "Practice"
    },
    {
      id: 365,
      subtopic: "Speaking Skills",
      question: "A salesperson opens with: 'What would you do if your biggest competitor suddenly cut prices by 40% overnight?' What is the primary purpose of this opening?",
      options: [
        "To confuse the audience",
        "To engage the audience’s thinking and create curiosity",
        "To provide a direct answer immediately",
        "To apologize for the presentation"
      ],
      correctAnswer: "To engage the audience’s thinking and create curiosity"
    },
    {
      id: 366,
      subtopic: "Speaking Skills",
      question: "During a live webinar, the speaker’s slides freeze. She calmly says, 'Let me walk you through the numbers verbally while the tech team fixes this,' and continues without panic. Which of the 3 Ps is being demonstrated?",
      options: ["Preparation", "Practice", "Performance", "Post-event analysis"],
      correctAnswer: "Performance"
    },
    {
      id: 367,
      subtopic: "Speaking Skills",
      question: "A presenter begins: 'Three years ago, I stood in front of a similar audience and made a mistake that cost our team $50,000. Here’s what I learned.' Which attention-grabbing technique is this?",
      options: ["Statistic", "Quotation", "Anecdote (personal story)", "Visual prop"],
      correctAnswer: "Anecdote (personal story)"
    },
    {
      id: 368,
      subtopic: "Speaking Skills",
      question: "A project manager explains a complex technical process to non-technical stakeholders. She avoids jargon, uses simple analogies, and speaks at a moderate pace. Which speaking skill is she demonstrating?",
      options: ["Vocal variety", "Clarity", "Confidence", "Conciseness"],
      correctAnswer: "Clarity"
    },
    {
      id: 369,
      subtopic: "Speaking Skills",
      question: "Before a team meeting, a leader asks: 'Who is in the room? What do they already know? What do they need to decide today?' Which element of preparation is this?",
      options: ["Content structuring", "Audience analysis", "Material gathering", "Environment check"],
      correctAnswer: "Audience analysis"
    },
    {
      id: 370,
      subtopic: "Speaking Skills",
      question: "A speaker opens with: 'Everything you’ve been told about email marketing is wrong.' What is the risk of using a bold statement as a hook?",
      options: [
        "It always bores the audience",
        "It may challenge audience beliefs and risk initial resistance",
        "It is too long",
        "It requires a visual prop"
      ],
      correctAnswer: "It may challenge audience beliefs and risk initial resistance"
    },
    {
      id: 371,
      subtopic: "Speaking Skills",
      question: "A trainer speaks in a monotone voice throughout a 30-minute session. Attendees report being bored and distracted. Which speaking skill is the trainer lacking?",
      options: ["Vocal variety", "Eye contact", "Posture", "Conciseness"],
      correctAnswer: "Vocal variety"
    }
  ],
  algo: [
    {
      id: 372,
      subtopic: "Algorithmic Thinking Basics",
      question: "A programmer is faced with a complex problem. Instead of trying to solve it all at once, she breaks it into smaller steps, looks for patterns, focuses on essential details, and writes a precise sequence of instructions. What is the primary goal of algorithmic thinking?",
      options: [
        "To write computer code quickly",
        "To solve problems using a structured, step-by-step logical approach",
        "To memorize algorithms from textbooks",
        "To avoid using mathematics"
      ],
      correctAnswer: "To solve problems using a structured, step-by-step logical approach"
    },
    {
      id: 373,
      subtopic: "Algorithmic Thinking Basics",
      question: "A team needs to plan a large music festival. They break the work into booking artists, arranging venue logistics, selling tickets, managing security, and coordinating volunteers. Which pillar of algorithmic thinking is being applied?",
      options: [
        "Pattern recognition",
        "Abstraction",
        "Decomposition",
        "Algorithm design"
      ],
      correctAnswer: "Decomposition"
    },
    {
      id: 374,
      subtopic: "Algorithmic Thinking Basics",
      question: "A data analyst notices that customer complaints spike every Monday morning. She uses this insight to schedule extra support staff on Mondays. Which algorithmic thinking pillar involves finding similarities or trends across data?",
      options: [
        "Decomposition",
        "Pattern recognition",
        "Abstraction",
        "Algorithm design"
      ],
      correctAnswer: "Pattern recognition"
    },
    {
      id: 375,
      subtopic: "Algorithmic Thinking Basics",
      question: "A navigation app needs to give driving directions. It ignores details like the color of buildings or the type of trees, focusing only on roads, turns, and distances. What is being demonstrated?",
      options: [
        "Decomposition",
        "Pattern recognition",
        "Abstraction",
        "Algorithm design"
      ],
      correctAnswer: "Abstraction"
    },
    {
      id: 376,
      subtopic: "Algorithmic Thinking Basics",
      question: "A chef writes a recipe for chocolate cake: 'Preheat oven to 350°F. Mix dry ingredients. Add eggs and milk. Bake for 30 minutes.' Which algorithmic thinking pillar is this?",
      options: [
        "Decomposition",
        "Pattern recognition",
        "Abstraction",
        "Algorithm design"
      ],
      correctAnswer: "Algorithm design"
    },
    {
      id: 377,
      subtopic: "Algorithm Design Techniques",
      question: "A sorting algorithm repeatedly splits a list into two halves, sorts each half recursively, then merges the sorted halves. Which algorithmic design technique is this?",
      options: [
        "Greedy algorithm",
        "Dynamic programming",
        "Divide & conquer",
        "Backtracking"
      ],
      correctAnswer: "Divide & conquer"
    },
    {
      id: 378,
      subtopic: "Algorithm Design Techniques",
      question: "A cashier gives change using the fewest coins possible. At each step, they take the largest coin that does not exceed the remaining amount. What is this approach called?",
      options: [
        "Divide & conquer",
        "Greedy algorithm",
        "Dynamic programming",
        "Backtracking"
      ],
      correctAnswer: "Greedy algorithm"
    },
    {
      id: 379,
      subtopic: "Algorithm Design Techniques",
      question: "A project planner calculates the shortest path through a network by storing solutions to overlapping subproblems and reusing them. Which technique is being used?",
      options: [
        "Divide & conquer",
        "Greedy algorithm",
        "Dynamic programming",
        "Backtracking"
      ],
      correctAnswer: "Dynamic programming"
    },
    {
      id: 380,
      subtopic: "Algorithm Design Techniques",
      question: "A puzzle solver tries to place eight queens on a chessboard so none attack each other. When a placement leads to a conflict, they undo that move and try a different position. Which algorithmic method is this?",
      options: [
        "Divide & conquer",
        "Greedy algorithm",
        "Dynamic programming",
        "Backtracking"
      ],
      correctAnswer: "Backtracking"
    },
    {
      id: 381,
      subtopic: "Development Methodologies",
      question: "A software team completes requirements documentation, then design, then coding, then testing, with each phase finishing before the next begins. What development methodology is this?",
      options: [
        "Agile",
        "Waterfall",
        "Scrum",
        "Kanban"
      ],
      correctAnswer: "Waterfall"
    },
    {
      id: 382,
      subtopic: "Development Methodologies",
      question: "A development team works in two-week sprints, delivering small features, gathering feedback, and adjusting priorities at the end of each sprint. Which methodology is this?",
      options: [
        "Waterfall",
        "Agile",
        "V-model",
        "Spiral"
      ],
      correctAnswer: "Agile"
    },
    {
      id: 383,
      subtopic: "Algorithmic Thinking Basics",
      question: "A transportation planner wants to model the subway system to find the fastest route. She ignores train car colors and station artwork, focusing only on stations and travel times. Why is abstraction useful here?",
      options: [
        "It makes the model more realistic",
        "It simplifies the problem by removing unnecessary details",
        "It increases the number of variables",
        "It guarantees the shortest route"
      ],
      correctAnswer: "It simplifies the problem by removing unnecessary details"
    },
    {
      id: 384,
      subtopic: "Algorithmic Thinking Basics",
      question: "An e-commerce site notices that 70% of abandoned carts occur at the shipping cost step. They decide to offer free shipping for orders over $50. Which algorithmic thinking pillar helped identify the solution?",
      options: [
        "Decomposition",
        "Pattern recognition",
        "Abstraction",
        "Algorithm design"
      ],
      correctAnswer: "Pattern recognition"
    },
    {
      id: 385,
      subtopic: "Algorithm Design Techniques",
      question: "A search algorithm for a phone book repeatedly splits the book in half, checks which half the name falls into, and continues until the name is found. What is the name of this classic divide-and-conquer algorithm?",
      options: [
        "Linear search",
        "Binary search",
        "Bubble sort",
        "Depth-first search"
      ],
      correctAnswer: "Binary search"
    },
    {
      id: 386,
      subtopic: "Algorithm Design Techniques",
      question: "A password cracker tries every possible combination of characters until the correct password is found. Which algorithmic approach is this?",
      options: [
        "Heuristic",
        "Greedy",
        "Brute force",
        "Divide & conquer"
      ],
      correctAnswer: "Brute force"
    },
    {
      id: 387,
      subtopic: "Algorithm Design Techniques",
      question: "A logistics company needs to find the most efficient delivery route that visits multiple cities exactly once and returns to the start (Traveling Salesman Problem). For small numbers of cities, they try all permutations and backtrack when a partial route becomes longer than the best found so far. Which algorithmic method is appropriate for this combinatorial problem?",
      options: [
        "Greedy algorithm",
        "Divide & conquer",
        "Dynamic programming",
        "Backtracking"
      ],
      correctAnswer: "Backtracking"
    },
    {
      id: 388,
      subtopic: "Complexity Analysis",
      question: "A developer writes two search algorithms for a list of 10,000 items. Algorithm A takes about 10,000 steps. Algorithm B takes about 14 steps. Which complexity classes best describe Algorithm A and Algorithm B?",
      options: [
        "A: O(1), B: O(n)",
        "A: O(n), B: O(log n)",
        "A: O(n²), B: O(n)",
        "A: O(log n), B: O(n)"
      ],
      correctAnswer: "A: O(n), B: O(log n)"
    },
    {
      id: 389,
      subtopic: "Programming Concepts",
      question: "A function calculates factorial(n) as: if n = 0 return 1; else return n * factorial(n-1). What is this programming concept called?",
      options: [
        "Iteration",
        "Recursion",
        "Backtracking",
        "Dynamic programming"
      ],
      correctAnswer: "Recursion"
    },
    {
      id: 390,
      subtopic: "Programming Concepts",
      question: "A programmer is sorting an array using bubble sort. She states: “After each pass through the array, the largest unsorted element is in its final position.” What is this statement called?",
      options: [
        "Precondition",
        "Postcondition",
        "Loop invariant",
        "Base case"
      ],
      correctAnswer: "Loop invariant"
    },
    {
      id: 391,
      subtopic: "Algorithm Design Techniques",
      question: "A route planning app for a large city does not always find the absolute shortest path but finds a very good path quickly by always moving toward the destination. What is this type of problem‑solving strategy called?",
      options: [
        "Exact algorithm",
        "Heuristic",
        "Dynamic programming",
        "Divide & conquer"
      ],
      correctAnswer: "Heuristic"
    },
    {
      id: 392,
      subtopic: "Programming Concepts",
      question: "An instructor writes: “INPUT n, SET factorial = 1, FOR i = 1 TO n, factorial = factorial * i, OUTPUT factorial”. What is this textual representation called?",
      options: [
        "High‑level programming language",
        "Pseudocode",
        "Machine code",
        "Flowchart"
      ],
      correctAnswer: "Pseudocode"
    },
    {
      id: 393,
      subtopic: "Programming Concepts",
      question: "In a recursive algorithm to compute Fibonacci numbers: fib(0)=0, fib(1)=1 are given. What are these initial conditions called?",
      options: [
        "Recursive steps",
        "Base cases",
        "Loop invariants",
        "Termination conditions"
      ],
      correctAnswer: "Base cases"
    },
    {
      id: 394,
      subtopic: "Complexity Analysis",
      question: "An algorithm uses an additional array of the same size as the input to store intermediate results. What is the space complexity of this algorithm?",
      options: [
        "O(1)",
        "O(log n)",
        "O(n)",
        "O(n²)"
      ],
      correctAnswer: "O(n)"
    },
    {
      id: 395,
      subtopic: "Programming Concepts",
      question: "A while loop condition is: “while (x > 0) { x = x – 1; }”. The programmer argues that x decreases each iteration and cannot go below 0, so the loop must end. What is this reasoning called?",
      options: [
        "Invariant",
        "Precondition",
        "Termination proof",
        "Postcondition"
      ],
      correctAnswer: "Termination proof"
    },
    {
      id: 396,
      subtopic: "Algorithmic Thinking Basics",
      question: "A developer needs to sort a list of employee records by last name. She decides to ignore all other fields (first name, ID, salary) during the sorting step. Which algorithmic thinking pillar is she using?",
      options: [
        "Decomposition",
        "Pattern recognition",
        "Abstraction",
        "Recursion"
      ],
      correctAnswer: "Abstraction"
    }
  ]
};

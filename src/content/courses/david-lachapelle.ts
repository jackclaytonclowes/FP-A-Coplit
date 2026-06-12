import type { Course } from "@/types"

const course: Course = {
  id: "david-lachapelle",
  title: "David LaChapelle",
  slug: "david-lachapelle",
  description:
    "A study of David LaChapelle — fashion photography's great maximalist. LaChapelle's hyper-saturated, surrealist, often religious imagery is among the most visually extreme and culturally resonant in the medium's history.",
  category: "great-photographers",
  accentColor: "#e84747",
  estimatedHours: 3,
  tags: ["fashion", "surrealist", "maximalist", "american", "celebrity"],
  photographerId: "david-lachapelle",
  lessons: [
    {
      id: "dl-01-biography",
      title: "Biography & Background",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "David LaChapelle (b. 1963, Fairfield, Connecticut)" },
        {
          type: "paragraph",
          content:
            "David LaChapelle was born in 1963 in Fairfield, Connecticut and moved to New York as a teenager, finding his way into the Factory scene and Andy Warhol's orbit. It was Warhol himself who gave LaChapelle his first photography assignment — for Interview magazine — recognising in the young man a sensibility that matched the Factory's own maximalism and celebration of American popular culture.",
        },
        {
          type: "paragraph",
          content:
            "His career through the 1990s and 2000s was characterised by extraordinary commercial success — campaigns for Versace, Diesel, and dozens of other major brands; portraits of every significant celebrity of the era; music videos for Britney Spears, Eminem, and Christina Aguilera. And then, in 2006, he withdrew entirely from commercial photography, retreating to a farm in Maui.",
        },
        {
          type: "heading",
          content: "Key Career Milestones",
        },
        {
          type: "list",
          items: [
            "1984: Andy Warhol gives him his first assignment at Interview magazine",
            "1990s: Staff photographer for Details and contributing photographer for Rolling Stone",
            "1995: Begins regular work with Versace, Diesel, and major fashion houses",
            "2004: 'Hotel LaChapelle' — the most commercially successful photography book of its year",
            "2006: Withdraws from commercial photography; moves to farm in Maui",
            "2007: Returns with 'Earth Laughs in Flowers' — large-scale religious allegories",
          ],
        },
        {
          type: "quote",
          content: "I want to make the world more beautiful and more disturbing. At the same time.",
          author: "David LaChapelle",
        },
      ],
      quiz: {
        question: "Who gave David LaChapelle his first photography assignment, and why is this significant?",
        options: [
          { id: "a", text: "Anna Wintour at Vogue, launching him into mainstream fashion photography", isCorrect: false },
          { id: "b", text: "Andy Warhol at Interview magazine, connecting him to Pop Art's legacy of treating popular culture as fine art", isCorrect: true },
          { id: "c", text: "Versace's design team, creating his association with luxury fashion", isCorrect: false },
          { id: "d", text: "Rolling Stone's art director, establishing his celebrity photography career", isCorrect: false },
        ],
        explanation:
          "Warhol's assignment placed LaChapelle squarely in the Pop Art tradition — the idea that celebrities, consumer culture, and popular imagery are legitimate subjects for art with the same seriousness as any other. This connection shaped his entire career's approach to the intersection of art and commercial culture.",
      },
    },
    {
      id: "dl-02-style",
      title: "Visual Style Analysis",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Hyper-Saturation" },
        {
          type: "paragraph",
          content:
            "LaChapelle's most immediately recognisable technical signature is extreme colour saturation — colours pushed beyond what is possible in nature to a state that is simultaneously artificial and more real than real. This hyper-saturation is both a technical choice and a philosophical one: the world of popular culture and desire is more vivid than ordinary reality.",
        },
        { type: "heading", content: "Religious Iconography" },
        {
          type: "paragraph",
          content:
            "LaChapelle uses religious imagery extensively — and with genuine conviction rather than irony. Celebrities as saints, fashion shoots as the Last Supper, brand products as relics. He grew up Catholic and finds in Christian iconography a visual language capable of bearing the weight of his ideas about American culture, desire, and excess.",
        },
        { type: "heading", content: "Maximalism" },
        {
          type: "paragraph",
          content:
            "LaChapelle is the great maximalist of fashion photography. Where other photographers remove, he adds. His sets are elaborate beyond function; his costumes are excessive beyond practicality; his narratives are crowded with meaning, reference, and visual incident. This maximalism is not lack of control — it is a sustained argument about American cultural excess.",
        },
        { type: "heading", content: "Surrealist Influence" },
        {
          type: "paragraph",
          content:
            "LaChapelle's images operate in a Surrealist register — objects behave unexpectedly, scales are wrong, impossible things happen in recognisable spaces. Unlike European Surrealism, however, his surrealism is specifically American: it is the surrealism of consumerism, celebrity, and the fever-dream of the American Dream itself.",
        },
        {
          type: "quote",
          content: "Excess is the truth. America is excessive. I just photograph what I see.",
          author: "David LaChapelle",
        },
      ],
      quiz: {
        question: "What does LaChapelle's use of extreme colour saturation communicate philosophically?",
        options: [
          { id: "a", text: "A technical rejection of naturalistic colour photography in favour of graphic design principles", isCorrect: false },
          { id: "b", text: "That the world of desire and popular culture is more vivid than ordinary reality — that saturation is its true colour", isCorrect: true },
          { id: "c", text: "A homage to the Technicolor films of the 1950s that influenced his childhood", isCorrect: false },
          { id: "d", text: "A commercial strategy for making images that stand out in magazine environments", isCorrect: false },
        ],
        explanation:
          "LaChapelle's hyper-saturation is both technical and philosophical. By pushing colours beyond nature, he is saying that the world of celebrity, desire, and consumer culture is not mundane — it is hyper-real. The saturation is the truth of that world's relationship to image and appearance.",
      },
    },
    {
      id: "dl-03-works",
      title: "Signature Works",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "Hotel LaChapelle (2004)" },
        {
          type: "paragraph",
          content:
            "LaChapelle's defining monograph — hyper-saturated, maximalist, celebrity-filled images organised as if they were rooms in an impossible hotel. Each image is a complete world. The book was the best-selling photography book of 2004 and brought his work to the widest possible audience.",
        },
        { type: "heading", content: "Earth Laughs in Flowers (2011)" },
        {
          type: "paragraph",
          content:
            "Made after his withdrawal from commercial photography, this series of large-scale images draws on the history of Western painting — particularly the Northern Renaissance — to comment on environmental destruction, materialism, and spiritual emptiness. The most ambitious and complex work of his post-commercial period.",
        },
        { type: "heading", content: "Deluge (2007)" },
        {
          type: "paragraph",
          content:
            "A monumental photograph referencing Michelangelo's Sistine Chapel — figures drowning in a flooded world surrounded by consumer products. Made in the aftermath of Hurricane Katrina, it is his most explicitly political image and one of the most cited large-scale photographs of the 2000s.",
        },
        { type: "heading", content: "Music Video Work" },
        {
          type: "paragraph",
          content:
            "LaChapelle directed music videos for Britney Spears, Eminem, Christina Aguilera, and others — extending his photographic aesthetic into the time-based medium. His videos are extensions of his stills work: the same maximalism, the same hyper-saturation, the same surrealist imagery in motion.",
        },
      ],
      quiz: {
        question: "Which famous artwork does LaChapelle's 'Deluge' (2007) directly reference?",
        options: [
          { id: "a", text: "Leonardo da Vinci's The Last Supper", isCorrect: false },
          { id: "b", text: "Michelangelo's Sistine Chapel ceiling", isCorrect: true },
          { id: "c", text: "Raphael's School of Athens", isCorrect: false },
          { id: "d", text: "Hieronymus Bosch's Garden of Earthly Delights", isCorrect: false },
        ],
        explanation:
          "'Deluge' references Michelangelo's Sistine Chapel — specifically the figures of the damned from the Last Judgement fresco. LaChapelle places these classical figures in a flooded consumer landscape, creating a meditation on environmental catastrophe and the emptiness of materialism that is simultaneously art-historical and urgently contemporary.",
      },
    },
    {
      id: "dl-04-techniques",
      title: "Techniques & Approach",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "The Production Machine" },
        {
          type: "paragraph",
          content:
            "LaChapelle's shoots are among the most elaborately produced in fashion photography. He works with large teams of set builders, prop makers, costume designers, and special effects technicians. The sets are frequently constructed entirely from scratch — a flooded room requires an actual flooded room, built in a studio.",
        },
        { type: "heading", content: "Painting as Reference" },
        {
          type: "paragraph",
          content:
            "LaChapelle prepares extensive visual references from Western painting history before each shoot. He is deeply conversant with art history, particularly the Northern Renaissance and the Baroque, and uses these references not as pastiche but as genuine starting points for thinking about light, composition, and meaning.",
        },
        { type: "heading", content: "Lighting the Impossible" },
        {
          type: "paragraph",
          content:
            "LaChapelle's lighting is simultaneously naturalistic and impossible — lit as if by a sun that exists at a perfect angle, with shadows that go exactly where they need to go. This requires extensive pre-planning and multiple light sources that create the illusion of a single perfect light.",
        },
        { type: "heading", content: "The Withdrawal and Return" },
        {
          type: "paragraph",
          content:
            "LaChapelle's 2006 withdrawal from commercial photography — motivated by exhaustion, spiritual hunger, and dissatisfaction with celebrity culture — and his subsequent return with more ambitious, more serious work is one of the most interesting biographical arcs in contemporary photography. The retreat proved artistically productive.",
        },
      ],
      quiz: {
        question: "Why did LaChapelle withdraw from commercial photography in 2006?",
        options: [
          { id: "a", text: "Health problems that prevented him from continuing demanding studio work", isCorrect: false },
          { id: "b", text: "Exhaustion, spiritual hunger, and dissatisfaction with celebrity culture after two decades of commercial success", isCorrect: true },
          { id: "c", text: "A commercial dispute with his primary clients that led to legal action", isCorrect: false },
          { id: "d", text: "The closure of the major magazines that provided most of his commissions", isCorrect: false },
        ],
        explanation:
          "LaChapelle's withdrawal was motivated by personal exhaustion and a spiritual hunger for work with more depth and less commercial compromise. Moving to a farm in Maui, he returned to making images for himself — without commercial briefs — and the resulting work (Earth Laughs in Flowers, Deluge) is widely considered his most serious and ambitious.",
      },
    },
    {
      id: "dl-05-legacy",
      title: "Influence & Legacy",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "Pop Art and Photography" },
        {
          type: "paragraph",
          content:
            "LaChapelle represents the most direct continuation of Andy Warhol's Pop Art project in contemporary photography. He treats popular culture — celebrities, brands, consumer products — as the legitimate subject of serious art, with the same visual intensity that Warhol brought to Campbell's soup cans.",
        },
        { type: "heading", content: "American Culture as Subject" },
        {
          type: "paragraph",
          content:
            "LaChapelle has created the most sustained photographic commentary on American culture — its excesses, its religious undercurrents, its relationship to celebrity and desire — of any photographer working today. His images are simultaneously of their time and archaeological documents of a specific American moment.",
        },
        { type: "heading", content: "Maximalism as Counterpoint" },
        {
          type: "paragraph",
          content:
            "In an era when 'less is more' has become the dominant aesthetic in fashion and advertising, LaChapelle's maximalism is a genuine counterpoint — a reminder that more is also a valid position, and that excess can be as meaningful as restraint. His work gives permission to photographers who want to say something large and crowded.",
        },
        { type: "heading", content: "The Sacred in the Secular" },
        {
          type: "paragraph",
          content:
            "LaChapelle's use of religious iconography in commercial and celebrity contexts is among the most interesting theological statements in contemporary art. By treating celebrities as saints and consumer products as relics, he is not simply being provocative — he is arguing that these things have become the actual objects of religious devotion in contemporary America.",
        },
      ],
      quiz: {
        question: "What serious argument underlies LaChapelle's use of religious iconography in celebrity and consumer contexts?",
        options: [
          { id: "a", text: "That religion should be more visible in public cultural life", isCorrect: false },
          { id: "b", text: "That celebrities and consumer products have become the actual objects of religious devotion in contemporary culture", isCorrect: true },
          { id: "c", text: "That religious imagery should be made more accessible through popular culture", isCorrect: false },
          { id: "d", text: "That there is no meaningful distinction between sacred and secular in modern America", isCorrect: false },
        ],
        explanation:
          "LaChapelle's theological argument is that celebrity culture and consumerism have replaced religion as the dominant belief systems in contemporary America. By depicting celebrities as saints and products as relics, he is not being irreverent — he is making a sincere observation about what people actually worship.",
      },
    },
    {
      id: "dl-06-learn",
      title: "What You Can Learn From LaChapelle",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Practical Lessons From His Practice" },
        {
          type: "paragraph",
          content:
            "LaChapelle teaches the power of commitment to an idea — the willingness to build the entire world an image needs, whatever that requires.",
        },
        { type: "heading", content: "1. Commit Fully to the Concept" },
        {
          type: "paragraph",
          content:
            "LaChapelle builds actual flooded rooms for flooded rooms. He doesn't suggest or approximate — he builds the reality the concept requires. How fully are you committing to the concepts behind your images? What would you need to build, buy, or construct to realise them completely?",
        },
        { type: "heading", content: "2. Study Art History" },
        {
          type: "paragraph",
          content:
            "LaChapelle's deepest references are from the Northern Renaissance and the Baroque. Before your next ambitious shoot, spend an hour with art history images. Identify one compositional or lighting principle from a painting you admire and try to apply it literally to a photograph.",
        },
        { type: "heading", content: "3. Make Images With Arguments" },
        {
          type: "paragraph",
          content:
            "LaChapelle's images are arguments — about American culture, about desire, about what we worship. What argument do you want your photography to make? Not a vague theme but a specific argument, with a position. Images with arguments are stronger than images with subjects.",
        },
        { type: "heading", content: "4. Permit Yourself Excess" },
        {
          type: "paragraph",
          content:
            "Contemporary visual culture prizes restraint and minimalism. Deliberately make an image that uses too much — too much colour, too much content, too many elements. Notice what excess communicates that restraint cannot. Then decide which serves your purpose.",
        },
        { type: "heading", content: "5. Know When to Withdraw" },
        {
          type: "paragraph",
          content:
            "LaChapelle's withdrawal from commercial work — and the artistic growth it produced — is a model for any creative practice. Exhaustion and dissatisfaction are information. What would happen if you stopped doing what you're doing for six months and made only the images you actually want to make?",
        },
      ],
      reflection: {
        prompt:
          "LaChapelle says 'excess is the truth — America is excessive, I just photograph what I see.' What excessive thing in your own culture or environment have you been photographing with restraint rather than with the excess it actually represents? What would the maximalist version of that image look like?",
      },
    },
  ],
}

export default course

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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Warhol's Protégé, America's Prophet" },
        {
          type: "image",
          content: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/David_LaChapelle_Tak_pravil_LaChapelle,_Galerie_Rudolfinum,_Praha,_2011_12_01.JPG/1280px-David_LaChapelle_Tak_pravil_LaChapelle,_Galerie_Rudolfinum,_Praha,_2011_12_01.JPG",
          caption: "David LaChapelle at his exhibition 'Tak pravil LaChapelle', Galerie Rudolfinum, Prague, 2011",
          alt: "Portrait of photographer David LaChapelle at his Prague exhibition in 2011",
        },
        {
          type: "paragraph",
          content:
            "Born in Connecticut in 1963, LaChapelle made it to New York as a teenager and found Andy Warhol. Warhol gave him his first photography job at Interview magazine — and handed him a creative DNA he's never shaken.",
        },
        {
          type: "paragraph",
          content:
            "He spent the 1990s and 2000s at the top — Versace, Diesel, Britney, Eminem, every celebrity of the era. Then in 2006 he walked away entirely and moved to a farm in Maui.",
        },
        {
          type: "heading",
          content: "Key Career Milestones",
        },
        {
          type: "list",
          items: [
            "1984: Andy Warhol hands him his first assignment at Interview magazine",
            "1990s: Staff photographer at Details; contributor to Rolling Stone",
            "1995: Major campaigns for Versace, Diesel, and other fashion houses begin",
            "2004: 'Hotel LaChapelle' — best-selling photography book of the year",
            "2006: Withdraws from commercial photography; retreats to Maui",
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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "More Colour Than Nature Allows" },
        {
          type: "paragraph",
          content:
            "LaChapelle pushes saturation past what's physically possible — because desire and celebrity culture are more vivid than ordinary reality. The colour isn't exaggerated; it's honest.",
        },
        { type: "heading", content: "Saints, Relics, and Celebrities" },
        {
          type: "paragraph",
          content:
            "He uses religious imagery with genuine conviction, not irony. Growing up Catholic gave him a visual vocabulary capable of carrying the weight of his ideas about American worship — of brands, bodies, and fame.",
        },
        { type: "heading", content: "Maximum Everything" },
        {
          type: "paragraph",
          content:
            "Where other photographers remove, he adds. Sets built beyond function, costumes beyond practicality, images crowded with meaning. His maximalism is a sustained argument about American excess.",
        },
        { type: "heading", content: "American Surrealism" },
        {
          type: "paragraph",
          content:
            "His images operate in a Surrealist register — wrong scales, impossible events, recognisable spaces made strange. But it's specifically American surrealism: the fever-dream of consumerism and the celebrity-industrial complex.",
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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Hotel LaChapelle (2004)" },
        {
          type: "paragraph",
          content:
            "His defining monograph — hyper-saturated, maximalist, celebrity-packed, organised like rooms in an impossible hotel. Best-selling photography book of 2004. Each image is a complete world.",
        },
        { type: "heading", content: "Earth Laughs in Flowers (2011)" },
        {
          type: "paragraph",
          content:
            "Made after his commercial withdrawal, this large-scale series draws on Northern Renaissance painting to comment on environmental destruction and spiritual emptiness. His most ambitious post-commercial work.",
        },
        { type: "heading", content: "Deluge (2007)" },
        {
          type: "paragraph",
          content:
            "Michelangelo's Sistine Chapel meets Hurricane Katrina: figures drowning in a consumer-product flood. His most explicitly political image and one of the most cited large-scale photographs of the 2000s.",
        },
        { type: "heading", content: "Music Videos as Extended Photography" },
        {
          type: "paragraph",
          content:
            "Britney, Eminem, Christina Aguilera — his music videos are his stills work in motion. Same maximalism, same hyper-saturation, same surrealist logic. One visual language, two mediums.",
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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Build the World, Don't Suggest It" },
        {
          type: "paragraph",
          content:
            "LaChapelle builds actual flooded rooms for flooded-room images. His sets are constructed from scratch by full teams of builders, prop makers, and effects technicians. There is no approximation.",
        },
        { type: "heading", content: "Art History Is His Visual Bible" },
        {
          type: "paragraph",
          content:
            "He prepares deep visual research from Western painting — especially the Northern Renaissance and Baroque — before every shoot. Not as pastiche; as genuine creative starting material.",
        },
        { type: "heading", content: "Light That Shouldn't Be Possible" },
        {
          type: "paragraph",
          content:
            "His lighting looks natural but is completely engineered — multiple sources creating the illusion of one perfect sun, shadows landing exactly where they need to go.",
        },
        { type: "heading", content: "The Retreat That Made Him Better" },
        {
          type: "paragraph",
          content:
            "His 2006 withdrawal — driven by exhaustion, spiritual hunger, and disillusionment — produced his most serious work. Sometimes stopping is the most productive move.",
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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Warhol's Heir" },
        {
          type: "paragraph",
          content:
            "LaChapelle is the most direct continuation of Pop Art in contemporary photography. He treats celebrities and consumer products as legitimate art subjects with the same intensity Warhol brought to soup cans.",
        },
        { type: "heading", content: "The Greatest Critic of American Culture" },
        {
          type: "paragraph",
          content:
            "No photographer has produced a more sustained commentary on American excess, celebrity worship, and consumer religion. His images are both of their time and archaeological documents of a specific American moment.",
        },
        { type: "heading", content: "More Is Valid Too" },
        {
          type: "paragraph",
          content:
            "In an era of minimalism, LaChapelle's maximalism is a genuine counterpoint. His work gives permission to photographers who have something large and crowded to say.",
        },
        { type: "heading", content: "What We Actually Worship" },
        {
          type: "paragraph",
          content:
            "His use of religious iconography in celebrity contexts isn't provocative — it's observational. He argues that celebrities and brands have become the actual objects of religious devotion in contemporary America. It's hard to argue with him.",
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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Commit Fully or Don't Bother" },
        {
          type: "paragraph",
          content:
            "LaChapelle teaches one thing above all: if you have an idea, build the world it needs. Half-measures produce half-images.",
        },
        { type: "heading", content: "1. Commit Fully to the Concept" },
        {
          type: "paragraph",
          content:
            "He builds actual flooded rooms. Don't approximate — realise. What would you need to build, source, or construct to make your concept completely real?",
        },
        { type: "heading", content: "2. Study Art History" },
        {
          type: "paragraph",
          content:
            "Before your next ambitious shoot, spend an hour with Northern Renaissance or Baroque paintings. Find one compositional principle and apply it literally to a photograph.",
        },
        { type: "heading", content: "3. Make Images With Arguments" },
        {
          type: "paragraph",
          content:
            "LaChapelle's images have positions — about desire, worship, excess. What argument do you want your photography to make? Not a theme. A specific position.",
        },
        { type: "heading", content: "4. Permit Yourself Excess" },
        {
          type: "paragraph",
          content:
            "Deliberately make an image with too much colour, too many elements, too much happening. Notice what excess communicates that restraint never could.",
        },
        { type: "heading", content: "5. Know When to Withdraw" },
        {
          type: "paragraph",
          content:
            "LaChapelle's retreat made him a better artist. Exhaustion and dissatisfaction are data. What would six months of making only images you actually want to make do to your practice?",
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

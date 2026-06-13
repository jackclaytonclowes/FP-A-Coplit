import type { Course } from "@/types"

const course: Course = {
  id: "brutalism",
  title: "Brutalism & Le Corbusier",
  slug: "brutalism",
  description:
    "The most controversial architectural movement of the 20th century — raw concrete, utopian ambition, and the buildings everyone has an opinion about.",
  category: "architecture",
  accentColor: "#6E7F8D",
  estimatedHours: 3,
  tags: ["brutalism", "le-corbusier", "architecture", "modernism", "concrete"],
  lessons: [
    {
      id: "br-01-origins",
      title: "Origins & Context",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Concrete Was the New Stone" },
        {
          type: "paragraph",
          content:
            "Post-WWII, architects believed they could redesign society from scratch. Cities had been bombed flat. Housing was catastrophically short. Concrete was cheap, fast, and endlessly mouldable.",
        },
        { type: "heading", content: "Béton Brut: Honesty as Aesthetic" },
        {
          type: "paragraph",
          content:
            "\"Béton brut\" — French for raw concrete — became the movement's name and its manifesto. No cladding. No hiding the structure. The building tells you exactly how it was built.",
        },
        {
          type: "paragraph",
          content:
            "That honesty was the point. Brutalism rejected decoration as dishonesty. Every surface meant something.",
        },
        { type: "heading", content: "Architecture as Social Engineering" },
        {
          type: "paragraph",
          content:
            "Brutalism wasn't about aesthetics — it was about solving the housing crisis. Mass production, prefabrication, vertical density. Move the working class off slum streets and into towers with light, air, and community.",
        },
        { type: "heading", content: "1950s–1970s: One Generation, One Movement" },
        {
          type: "paragraph",
          content:
            "London's South Bank, Boston's City Hall, the Barbican, Chandigarh — brutalism built entire cities in a single generation, then collapsed almost as fast under the weight of its own ambition.",
        },
      ],
      quiz: {
        question: "What does \"béton brut\" mean, and why did it define the movement's entire philosophy?",
        options: [
          {
            id: "a",
            text: "\"Beautiful concrete\" — brutalists believed concrete had an inherent visual beauty that should be celebrated",
            isCorrect: false,
          },
          {
            id: "b",
            text: "\"Raw concrete\" — leaving structure exposed was a statement that honest materials need no decoration or disguise",
            isCorrect: true,
          },
          {
            id: "c",
            text: "\"Brutal construction\" — a term coined by critics to describe the movement's aggressive visual style",
            isCorrect: false,
          },
          {
            id: "d",
            text: "\"Hard concrete\" — referring to the high-density concrete mixes required for the structural demands of tall residential towers",
            isCorrect: false,
          },
        ],
        explanation:
          "\"Béton brut\" is simply French for raw or unfinished concrete. Le Corbusier used the term to describe his approach: leave the concrete as it comes out of the formwork — with its texture, its imperfections, its marks from the casting process. The philosophy behind it is that a building should be honest about its materials and its construction. Covering concrete with cladding or decoration was, to the brutalists, a form of lying. The raw surface was the architecture.",
      },
    },
    {
      id: "br-02-corbusier",
      title: "Le Corbusier",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "The Man Who Wanted to Demolish Paris" },
        {
          type: "paragraph",
          content:
            "Le Corbusier's Plan Voisin (1925) proposed demolishing central Paris north of the Seine and replacing it with 18 identical cruciform towers set in parkland. He was completely serious.",
        },
        { type: "heading", content: "Five Points of a New Architecture" },
        {
          type: "paragraph",
          content:
            "Pilotis (stilts to lift the building off the ground), roof gardens, free plan, ribbon windows, free façade. These five principles defined modern architecture for a century.",
        },
        { type: "heading", content: "\"A Machine for Living In\"" },
        {
          type: "quote",
          content: "A house is a machine for living in.",
          author: "Le Corbusier",
        },
        {
          type: "paragraph",
          content:
            "Not a home. Not a shelter. A machine — efficient, rational, without sentiment. He meant it as a compliment. Most people didn't take it that way.",
        },
        { type: "heading", content: "Chandigarh: The Dream Built" },
        {
          type: "paragraph",
          content:
            "After Partition, India needed a new capital for Punjab. Nehru gave Le Corbusier the commission. Chandigarh is his most complete vision — an entire planned city in the Indian desert, built exactly as he imagined.",
        },
      ],
      quiz: {
        question: "What did Le Corbusier mean when he called a house \"a machine for living in\"?",
        options: [
          {
            id: "a",
            text: "That houses should be built using industrial machinery and standardised factory components",
            isCorrect: false,
          },
          {
            id: "b",
            text: "That a home should be rationally designed for efficiency and function, as a machine is — without decorative or sentimental elements",
            isCorrect: true,
          },
          {
            id: "c",
            text: "That modern cities were becoming mechanised and dehumanising, and architecture should resist this",
            isCorrect: false,
          },
          {
            id: "d",
            text: "That the structure of a house should be exposed like an engine, showing all its functional components",
            isCorrect: false,
          },
        ],
        explanation:
          "Le Corbusier's \"machine for living in\" was a prescription, not a criticism. He was arguing against the Victorian and Beaux-Arts tradition of decorating buildings with ornament that served no structural purpose. A good machine does exactly what it needs to do, with no wasted material, no unnecessary complexity. A good house should do the same: maximise light, air, and space through rational design. The statement was provocative precisely because it reduced the most emotionally loaded human space — the home — to a functional object.",
      },
    },
    {
      id: "br-03-buildings",
      title: "The Buildings",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Unité d'Habitation: A Vertical City" },
        {
          type: "paragraph",
          content:
            "Marseille, 1952. 337 apartments across 23 different floor plans. Internal shopping street on the 7th and 8th floors. Rooftop running track, gym, and paddling pool. Le Corbusier designed it as a complete vertical city — you'd never need to leave.",
        },
        { type: "heading", content: "The Barbican: Villain to Trophy Address" },
        {
          type: "paragraph",
          content:
            "Built on London's WWII bomb damage, the Barbican Estate opened in the 1970s as 2,000 apartments, an arts centre, a lake, and elevated walkways. It was called inhuman. It's now the most sought-after address in the City of London.",
        },
        { type: "heading", content: "Trellick Tower: \"Monument to Human Misery\"" },
        {
          type: "paragraph",
          content:
            "Residents called Ernő Goldfinger's 1972 tower a monument to human misery. The lifts broke constantly. The walkways felt dangerous. Today it's Grade II* listed and the flats sell for £600k+.",
        },
        { type: "heading", content: "Boston City Hall: The Unloved Masterpiece" },
        {
          type: "paragraph",
          content:
            "Voted the ugliest building in Boston. Simultaneously listed as one of the most architecturally significant buildings in America. Boston City Hall (1968) is brutalism's central contradiction in a single structure.",
        },
      ],
      quiz: {
        question: "What was Le Corbusier's concept behind Unité d'Habitation — and how does it differ from conventional apartment buildings?",
        options: [
          {
            id: "a",
            text: "It was designed as luxury housing with more space per apartment than any equivalent building of its era",
            isCorrect: false,
          },
          {
            id: "b",
            text: "It was conceived as a self-contained vertical city with its own shops, rooftop facilities, and community spaces — residents would have no need to leave",
            isCorrect: true,
          },
          {
            id: "c",
            text: "It pioneered prefabricated modular construction that allowed individual apartments to be factory-built and slotted into the frame",
            isCorrect: false,
          },
          {
            id: "d",
            text: "It was the first residential building to use pilotis — columns lifting the structure entirely off the ground — at this scale",
            isCorrect: false,
          },
        ],
        explanation:
          "Unité d'Habitation was not an apartment block that happened to be tall — it was a deliberate attempt to create a complete urban environment in a single structure. Le Corbusier's ambition was that residents would have everything they needed within the building: groceries, a hotel, a nursery, a gym, a rooftop running track. The building was a critique of the horizontal city, proposing that density, when properly designed, could create community rather than destroy it. Whether it succeeded is debated; that it was unprecedented is not.",
      },
    },
    {
      id: "br-04-philosophy",
      title: "The Philosophy",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "The Building Shows Its Working" },
        {
          type: "paragraph",
          content:
            "Brutalism's core principle: don't pretend the structure is anything other than what it is. Exposed concrete, visible pipes, structural elements as design. The building shows you how it was made.",
        },
        { type: "heading", content: "Modernism's Utopian Problem" },
        {
          type: "paragraph",
          content:
            "Modernism believed architecture could solve social problems. Streets replaced by elevated walkways. The city replaced by superblocks. People living in rationally designed machines.",
        },
        {
          type: "paragraph",
          content:
            "The problem: people didn't want to live in machines. They wanted streets, corner shops, messy urban life. The architects forgot to ask.",
        },
        { type: "heading", content: "Scale as a Political Statement" },
        {
          type: "paragraph",
          content:
            "Brutalism operates at the scale of the state — public institutions, universities, social housing, civic centres. The individual is supposed to feel the weight of the collective. That was the point.",
        },
        { type: "heading", content: "Le Corbusier vs. Jane Jacobs" },
        {
          type: "paragraph",
          content:
            "Jane Jacobs (The Death and Life of Great American Cities, 1961) demolished Le Corbusier's thinking: cities work because of their messiness, their street life, their density of uses. The machine for living in doesn't understand how life actually works.",
        },
      ],
      quiz: {
        question: "What was Jane Jacobs' core argument against Le Corbusier's urban vision?",
        options: [
          {
            id: "a",
            text: "That concrete was an environmentally irresponsible material that should be replaced with traditional brick and stone",
            isCorrect: false,
          },
          {
            id: "b",
            text: "That cities derive their vitality from mixed uses, street-level activity, and organic density — the opposite of the superblock model",
            isCorrect: true,
          },
          {
            id: "c",
            text: "That high-density housing was structurally unsafe and should be limited to no more than five storeys",
            isCorrect: false,
          },
          {
            id: "d",
            text: "That modernist architecture ignored regional character and imposed a culturally homogeneous international style",
            isCorrect: false,
          },
        ],
        explanation:
          "Jane Jacobs observed that the features Le Corbusier wanted to eliminate — the short blocks, the mixed uses, the old buildings alongside new ones, the street life — were precisely what made cities functional and safe. Le Corbusier's towers-in-the-park model eliminated \"eyes on the street,\" the natural surveillance of a busy neighbourhood. It replaced the complexity of urban life with a rational order that looked good on a plan but felt inhuman to inhabit. The debate between Le Corbusier's top-down rationalism and Jacobs' bottom-up urbanism remains the central argument in city planning.",
      },
    },
    {
      id: "br-05-legacy",
      title: "Legacy & Rehabilitation",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "What Went Wrong" },
        {
          type: "paragraph",
          content:
            "Brutalist social housing — built for the working class — was handed to underfunded housing authorities who couldn't maintain it. Lifts broke. Walkways emptied after dark. The utopia became the problem estate.",
        },
        { type: "heading", content: "Pruitt-Igoe: The Symbolic Failure" },
        {
          type: "paragraph",
          content:
            "St. Louis, 1956: 33 towers, 2,870 apartments, designed by Minoru Yamasaki (later the World Trade Center architect). Demolished 1972–1976 after rapid deterioration. The demolition footage became modernism's death certificate.",
        },
        { type: "heading", content: "What Endured" },
        {
          type: "paragraph",
          content:
            "Brutalism's honest material use influenced every generation of architects that followed. The exposed concrete of today's galleries, offices, and luxury apartments is Le Corbusier's legacy — even when the architects don't acknowledge it.",
        },
        { type: "heading", content: "Instagram Did What Critics Couldn't" },
        {
          type: "paragraph",
          content:
            "The qualities that made brutalism unloved — the shadows, the monumental scale, the raw texture — turned out to be exactly what made it photogenic. A new generation found the buildings beautiful precisely because they make no concessions.",
        },
      ],
      quiz: {
        question: "Why is the demolition of Pruitt-Igoe considered symbolically significant beyond its own failure?",
        options: [
          {
            id: "a",
            text: "Because it was the first time a government had demolished a building for aesthetic rather than structural reasons",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Because it represented the visible collapse of modernism's belief that good design could solve social problems",
            isCorrect: true,
          },
          {
            id: "c",
            text: "Because the demolition footage revealed the structural deficiencies of reinforced concrete construction",
            isCorrect: false,
          },
          {
            id: "d",
            text: "Because Pruitt-Igoe's architects had claimed it would stand for 500 years, making its demolition after 20 an embarrassment to the profession",
            isCorrect: false,
          },
        ],
        explanation:
          "Pruitt-Igoe's implosion in 1972 was filmed and widely broadcast. Charles Jencks, the architecture critic, later called this moment \"the death of modern architecture.\" The building had been designed according to every principle Le Corbusier advocated: towers, open space, separation of pedestrian and traffic. Its rapid decline into uninhabitable conditions suggested that the social problems modernism claimed to solve could not be solved by good design alone — and that design divorced from community, maintenance, and economic reality would always fail. The images of those towers falling became shorthand for an entire ideology's collapse.",
      },
    },
    {
      id: "br-06-reveals",
      title: "What Architecture Reveals",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Every Building Is a Political Statement" },
        {
          type: "paragraph",
          content:
            "Who the building serves, who paid for it, who will maintain it — architecture is always political. Brutalism was unusually explicit about this. It announced its ambitions in 12-storey concrete.",
        },
        { type: "heading", content: "The Gap Between Intention and Experience" },
        {
          type: "paragraph",
          content:
            "Le Corbusier's plans were beautiful. Living in them was often not. The gap between the architect's vision and the resident's daily experience is brutalism's most important lesson.",
        },
        { type: "heading", content: "Beauty Takes Time" },
        {
          type: "paragraph",
          content:
            "The brutalist buildings people hated in 1985 are the ones they're campaigning to save in 2025. That reversal tells you something about how aesthetic judgement works — and how urgently we dismiss things before understanding them.",
        },
        { type: "heading", content: "The Concrete Is Still There" },
        {
          type: "paragraph",
          content:
            "Unlike glass-curtain towers or historical pastiche, brutalist buildings age into their material. Concrete stains, weathers, moss grows. The building becomes more itself over time. That was always the point.",
        },
      ],
      reflection: {
        prompt:
          "Find a brutalist building near you — or if none exists nearby, spend ten minutes with images of the Barbican, Trellick Tower, or the Unité d'Habitation. Look at it long enough to get past your first reaction. Do you find it beautiful? Oppressive? Both? What does your reaction tell you about what you want buildings to do — and for whom? And: is there a building you initially hated and later came to love? What changed?",
      },
    },
  ],
}

export default course

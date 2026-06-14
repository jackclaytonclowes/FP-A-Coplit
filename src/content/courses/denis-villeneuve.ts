import type { Course } from "@/types"

const course: Course = {
  id: "denis-villeneuve",
  title: "Denis Villeneuve",
  slug: "denis-villeneuve",
  description:
    "A study of Denis Villeneuve — science fiction's most contemplative practitioner. From Prisoners to Dune, Villeneuve creates cinema of overwhelming scale and quiet philosophical depth.",
  category: "directors",
  accentColor: "#8b6014",
  estimatedHours: 3,
  tags: ["science-fiction", "cerebral", "slow-cinema", "epic", "canadian"],
  lessons: [
    {
      id: "dv-01-biography",
      title: "Biography & Background",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Denis Villeneuve (Born 1967, Gentilly, Quebec)" },
        {
          type: "paragraph",
          content:
            "Villeneuve grew up speaking French in Quebec — a province that prizes cultural distinctness. His early cinema is literary, philosophically ambitious, and formally rigorous. He didn't arrive at that; he started there.",
        },
        {
          type: "paragraph",
          content:
            "Incendies (2010) — based on Wajdi Mouawad's play about a family torn apart by the Lebanese Civil War — was nominated for the Academy Award for Best Foreign Language Film. International audiences took notice. He's been operating at the highest level since.",
        },
        {
          type: "heading",
          content: "Key Career Milestones",
        },
        {
          type: "list",
          items: [
            "2000: Maelström — French-language feature establishing his contemplative voice",
            "2010: Incendies — Oscar-nominated adaptation, international breakthrough",
            "2013: Prisoners and Enemy — English-language debut, dual releases in the same year",
            "2015: Sicario — first collaboration with Roger Deakins",
            "2016: Arrival — science fiction as linguistic philosophy, six Academy Award nominations",
            "2017: Blade Runner 2049 — sequel to a classic, extending Deakins partnership",
            "2021: Dune — adaptation of Frank Herbert's novel, ten Academy Award nominations",
            "2024: Dune Part Two — continuation, cementing his status as the defining epic filmmaker of his era",
          ],
        },
        {
          type: "image",
          content: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Denis_Villeneuve_Cannes_2018.jpg/1280px-Denis_Villeneuve_Cannes_2018.jpg",
          caption: "Denis Villeneuve at the Cannes Film Festival, 2018",
          alt: "Denis Villeneuve at Cannes Film Festival 2018",
        },
        {
          type: "quote",
          content: "Cinema for me is a way to dream awake.",
          author: "Denis Villeneuve",
        },
      ],
      quiz: {
        question: "What was the significance of Incendies in Villeneuve's career?",
        options: [
          { id: "a", text: "It was his first film to use visual effects on a large scale", isCorrect: false },
          { id: "b", text: "It was his Oscar-nominated French-language breakthrough that announced him to international audiences", isCorrect: true },
          { id: "c", text: "It marked his first collaboration with Roger Deakins", isCorrect: false },
          { id: "d", text: "It was the first film he made in the English language", isCorrect: false },
        ],
        explanation:
          "Incendies (2010), an adaptation of Wajdi Mouawad's play about a family's journey into the Lebanese Civil War, was nominated for the Academy Award for Best Foreign Language Film and introduced Villeneuve to a global audience. It remains one of the most powerful films of his career and demonstrated the moral and formal ambition that would define all his subsequent work.",
      },
    },
    {
      id: "dv-02-influences",
      title: "Influences & Lineage",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Tarkovsky: Sci-Fi as Spiritual Inquiry" },
        {
          type: "paragraph",
          content:
            "Stalker, Solaris — Tarkovsky's slow cinema uses science fiction to ask questions about consciousness and the soul. Villeneuve cites him most often. Arrival is Tarkovsky's heir.",
        },
        { type: "heading", content: "Kubrick: Control the Frame, Control the World" },
        {
          type: "paragraph",
          content:
            "2001's scale and silence live directly inside Dune and Blade Runner 2049. Like Kubrick, Villeneuve treats the frame as a space to be completely controlled — no accident, no waste.",
        },
        { type: "heading", content: "Malick and Contemplative Time" },
        {
          type: "paragraph",
          content:
            "Malick proved that slowing down is itself a form of meaning. Villeneuve's willingness to let scenes breathe — to trust his audience's patience — comes from watching Malick and agreeing.",
        },
        { type: "heading", content: "Bergman and Emotional Depth" },
        {
          type: "paragraph",
          content:
            "The close study of faces in crisis, the chamber drama of grief — Bergman's influence is clearest in Prisoners: a father disintegrating under fear, shot like psychological excavation.",
        },
      ],
      quiz: {
        question: "Which director does Villeneuve cite as his most important cinematic influence, particularly in the use of science fiction as spiritual inquiry?",
        options: [
          { id: "a", text: "Stanley Kubrick", isCorrect: false },
          { id: "b", text: "Terrence Malick", isCorrect: false },
          { id: "c", text: "Andrei Tarkovsky", isCorrect: true },
          { id: "d", text: "Ingmar Bergman", isCorrect: false },
        ],
        explanation:
          "Villeneuve has repeatedly named Andrei Tarkovsky as his most important influence. Tarkovsky's slow cinema — particularly Stalker and Solaris, which use science fiction as a vehicle for philosophical and spiritual inquiry — is the direct ancestor of Villeneuve's approach to the genre. Both directors treat science fiction not as adventure but as a meditation on consciousness.",
      },
    },
    {
      id: "dv-03-visual-style",
      title: "Visual Style",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Two Cinematographers, Two Grammars" },
        {
          type: "paragraph",
          content:
            "Roger Deakins shot Prisoners, Sicario, and Blade Runner 2049. Greig Fraser shot Arrival and Dune. Both are extraordinary — and their approaches produce distinctly different visual worlds.",
        },
        { type: "heading", content: "Deakins: Painterly Precision" },
        {
          type: "paragraph",
          content:
            "Every frame composed as a landscape painting. Light source always identifiable. Blade Runner 2049 is among the most formally perfect cinematography in the history of science fiction.",
        },
        { type: "heading", content: "Fraser: Texture and Immensity" },
        {
          type: "paragraph",
          content:
            "Dune's desert landscapes feel genuinely inhabited, not composed. Fraser used thermal imaging and infrared photography to create a visual world with no precedent in science fiction cinema. He won the Oscar.",
        },
        { type: "heading", content: "Scale and Silence as Style" },
        {
          type: "paragraph",
          content:
            "Tiny human figures in overwhelming landscapes. Very slow camera movements. Long silences that charge dialogue with weight. Scale isn't spectacle for Villeneuve — it's a philosophical statement.",
        },
      ],
      quiz: {
        question: "Which cinematographer won the Academy Award for his work on Dune?",
        options: [
          { id: "a", text: "Roger Deakins", isCorrect: false },
          { id: "b", text: "Emmanuel Lubezki", isCorrect: false },
          { id: "c", text: "Hoyte van Hoytema", isCorrect: false },
          { id: "d", text: "Greig Fraser", isCorrect: true },
        ],
        explanation:
          "Greig Fraser won the Academy Award for Best Cinematography for Dune (2021). His work introduced a distinctive tactile quality to the Villeneuve visual grammar — a departure from the painterly precision of Roger Deakins. Fraser also used thermal and infrared photography to create the Dune landscape's singular appearance. He would later win a second Oscar for The Batman.",
      },
    },
    {
      id: "dv-04-essential-films",
      title: "Essential Films",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Incendies (2010)" },
        {
          type: "paragraph",
          content:
            "Twins travel to the Middle East to execute their dead mother's will — and discover a devastating family secret. Past and present, building toward a revelation of extraordinary moral weight.",
        },
        { type: "heading", content: "Prisoners (2013)" },
        {
          type: "paragraph",
          content:
            "Two missing girls, a father's disintegration, Roger Deakins in winter grey and shadow. How does moral certainty survive grief? Hugh Jackman's performance is one of the great screen studies in rage and desperation.",
        },
        { type: "heading", content: "Arrival (2016)" },
        {
          type: "paragraph",
          content:
            "His greatest film. A linguist communicates with alien spacecraft — and learns to perceive time non-linearly. The final twenty minutes reframe everything that came before. Intellectually stunning. Emotionally devastating.",
        },
        { type: "heading", content: "Blade Runner 2049 (2017)" },
        {
          type: "paragraph",
          content:
            "A sequel that surpasses its predecessor in visual ambition and philosophical depth. Slow, demanding, utterly confident in its own pace. A civilisation that has consumed itself, rendered in extraordinary bleakness.",
        },
        { type: "heading", content: "Dune (2021)" },
        {
          type: "paragraph",
          content:
            "After decades of failed attempts, Villeneuve adapted Frank Herbert's novel with the seriousness it deserved. The most fully realised alien world in cinema since 2001. Zimmer's score, Fraser's images, Herbert's ideas — all treated as literature.",
        },
      ],
      quiz: {
        question: "What does Arrival ultimately reveal that reframes its entire narrative?",
        options: [
          { id: "a", text: "That the alien language is actually a form of mathematics", isCorrect: false },
          { id: "b", text: "That learning the alien language allows perception of time non-linearly, meaning the film's 'memories' are visions of the future", isCorrect: true },
          { id: "c", text: "That the aliens have visited Earth before and influenced human civilisation", isCorrect: false },
          { id: "d", text: "That the protagonist has been an alien observer all along", isCorrect: false },
        ],
        explanation:
          "Arrival's climactic revelation is that the alien language — once learned — restructures human perception of time, allowing one to experience past and future simultaneously. What the film has presented as the protagonist's memories of her daughter's life and death are actually visions of events that have not yet happened. This structural twist is both scientifically grounded in the Sapir-Whorf hypothesis and emotionally shattering.",
      },
    },
    {
      id: "dv-05-themes",
      title: "Themes & Philosophy",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Language Shapes Consciousness" },
        {
          type: "paragraph",
          content:
            "Arrival dramatises the Sapir-Whorf hypothesis: the language you think in shapes what you're able to think. Learn a language with no linear time — and you stop experiencing time linearly.",
        },
        { type: "heading", content: "Grief as Distorting Force" },
        {
          type: "paragraph",
          content:
            "In Prisoners, grief destroys a man's moral clarity. In Arrival, grief and time become philosophically inseparable. Villeneuve treats grief not as weakness but as the measure of love.",
        },
        { type: "heading", content: "The Weight of Inherited History" },
        {
          type: "paragraph",
          content:
            "Incendies is about choices made by parents falling on their children. Dune is about political inheritance — reputation, enemies, history, all inherited. The past has physical weight in his films.",
        },
        { type: "heading", content: "Technology vs. Spiritual Depth" },
        {
          type: "paragraph",
          content:
            "Blade Runner 2049 and Dune both stage this confrontation. The most artificial world contains the most human longing. Technology can replicate everything except the capacity to feel it.",
        },
      ],
      quiz: {
        question: "Which philosophical theory about the relationship between language and thought does Arrival dramatise?",
        options: [
          { id: "a", text: "The Chomskyan universal grammar hypothesis", isCorrect: false },
          { id: "b", text: "The Sapir-Whorf hypothesis — that the language you think in shapes what you can think", isCorrect: true },
          { id: "c", text: "Wittgenstein's language game theory", isCorrect: false },
          { id: "d", text: "Derrida's theory of linguistic différance", isCorrect: false },
        ],
        explanation:
          "Arrival is grounded in the Sapir-Whorf hypothesis, also known as linguistic relativity — the idea that the language in which you think determines the structure of your thought. The film takes this to a speculative extreme: if you learn a language with no linear time, you begin to perceive past and future simultaneously. This is the mechanism by which the protagonist comes to know her daughter's life before it begins.",
      },
    },
    {
      id: "dv-06-learn",
      title: "What You Can Learn From Villeneuve",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "What Villeneuve Teaches" },
        {
          type: "paragraph",
          content:
            "Scale and silence aren't luxuries reserved for epic cinema. They're tools available to any filmmaker willing to trust their audience's patience.",
        },
        { type: "heading", content: "1. Scale Creates Emotional Impact" },
        {
          type: "paragraph",
          content:
            "When the camera pulls back to show how small your character is within a world, it asks the audience to feel the weight of what they're facing. That's not grandstanding — that's meaning.",
        },
        { type: "heading", content: "2. Silence Is a Cinematic Tool" },
        {
          type: "paragraph",
          content:
            "Contemporary cinema fills every gap with music, dialogue, or sound effects. Villeneuve doesn't. Silence creates expectation, weight, and presence. Try letting a scene run longer than feels comfortable.",
        },
        { type: "heading", content: "3. Choose Collaborators and Trust Them Completely" },
        {
          type: "paragraph",
          content:
            "Deakins, Fraser, Zimmer, Amy Adams — Villeneuve finds people whose vision extends his own, then gets out of their way. The director who enables genius in others produces better work than the one who controls everything.",
        },
        { type: "heading", content: "4. Find the Philosophical Question" },
        {
          type: "paragraph",
          content:
            "Every Villeneuve film is organised around a question. Arrival: would you choose a life whose losses you knew in advance? Prisoners: how does moral certainty survive grief? Find the question. Questions stay open. Themes close.",
        },
        { type: "heading", content: "5. Respect Your Source Material" },
        {
          type: "paragraph",
          content:
            "Villeneuve was given Dune because Herbert's son trusted his seriousness. Adapt what's difficult about your source — its ecology, politics, spiritual complexity — not just what's convenient.",
        },
      ],
      reflection: {
        prompt:
          "Villeneuve's Arrival asks whether you would choose to live a life knowing all its future losses in advance. What does your answer to that question reveal about how you relate to time, grief, and the nature of love? How might you translate a personal philosophical question — one that genuinely troubles you — into a visual story?",
      },
    },
  ],
}

export default course

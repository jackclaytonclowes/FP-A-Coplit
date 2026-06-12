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
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "Denis Villeneuve (Born 1967, Gentilly, Quebec)" },
        {
          type: "paragraph",
          content:
            "Denis Villeneuve was born in 1967 in Gentilly, a small town in Quebec, Canada. He grew up speaking French in a province fiercely proud of its cultural distinctness, and his early cinema was shaped entirely by that Francophone tradition — literary, philosophically ambitious, formally rigorous. He studied at the Université du Québec à Montréal and began making short films before his feature debut.",
        },
        {
          type: "paragraph",
          content:
            "His first feature films were made in French and established his voice with remarkable clarity. Maelström (2000) and Incendies (2010) — an adaptation of Wajdi Mouawad's stage play about a family torn apart by the Lebanese Civil War — showed a director of uncommon patience and moral seriousness. Incendies was nominated for the Academy Award for Best Foreign Language Film and announced Villeneuve to international audiences.",
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
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "Andrei Tarkovsky and Slow Cinema" },
        {
          type: "paragraph",
          content:
            "Villeneuve has repeatedly cited Andrei Tarkovsky as his most important cinematic influence. Tarkovsky's slow cinema — long takes, contemplative silences, science fiction as spiritual inquiry — is the direct ancestor of Villeneuve's approach. Stalker and Solaris are clearly behind Arrival's use of the alien as a philosophical mirror. Both directors understand that science fiction's real subject is consciousness.",
        },
        { type: "heading", content: "Stanley Kubrick and Formal Control" },
        {
          type: "paragraph",
          content:
            "Kubrick's epic formal control — the perfectly composed frame, the merciless pacing, the refusal of sentiment — is the other major architectural influence on Villeneuve's style. 2001: A Space Odyssey's treatment of scale and silence is directly visible in Dune and Blade Runner 2049. Like Kubrick, Villeneuve treats the frame as a space to be completely controlled.",
        },
        { type: "heading", content: "Terrence Malick and Contemplative Time" },
        {
          type: "paragraph",
          content:
            "Terrence Malick's approach to time — the use of silence and natural imagery to create a meditative rhythm — has also shaped Villeneuve's sense of pace. Both directors resist the conventional acceleration of contemporary cinema. They believe that slowing down is itself a form of meaning. Villeneuve's willingness to let scenes breathe owes much to Malick's example.",
        },
        { type: "heading", content: "Ingmar Bergman and Emotional Depth" },
        {
          type: "paragraph",
          content:
            "Bergman's chamber dramas — the close study of faces and silences, the willingness to place emotional suffering at the centre of the frame — underlie Villeneuve's more intimate work. Prisoners in particular, with its study of a father's disintegration under grief, draws on the Bergman tradition of cinema as psychological excavation.",
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
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Two Defining Cinematographic Partnerships" },
        {
          type: "paragraph",
          content:
            "Villeneuve's visual identity has been defined by two of the greatest cinematographers working today — and the contrast between their approaches illuminates how much a director can achieve by choosing the right collaborator. Roger Deakins shot Prisoners (2013), Sicario (2015), and Blade Runner 2049 (2017). Greig Fraser shot Arrival (2016) and Dune (2021, 2024). Both are extraordinary, and both produce distinctly different visual grammars.",
        },
        { type: "heading", content: "Roger Deakins: Control and Precision" },
        {
          type: "paragraph",
          content:
            "Deakins brings a painterly precision to light. His work on Blade Runner 2049 is among the most formally perfect cinematography in the history of science fiction film — every frame composed as a landscape painting, the light source always identifiable, the colours controlled to create emotional weather. His collaboration with Villeneuve on Sicario produced an image language of extreme geographical scale contrasted with suffocating close-ups.",
        },
        { type: "heading", content: "Greig Fraser: Texture and Immensity" },
        {
          type: "paragraph",
          content:
            "Fraser's work on Dune introduced a different grammar — a more tactile, material quality to the image, the desert landscapes feeling genuinely inhabited rather than composed. His use of thermal imaging and infrared photography in Dune created a visual world with no precedent in science fiction cinema. Fraser would go on to win the Academy Award for Dune.",
        },
        { type: "heading", content: "Scale and Silence as Style" },
        {
          type: "paragraph",
          content:
            "Across both partnerships, Villeneuve's signature is consistent: extreme wide shots that place human beings as tiny figures within overwhelming natural or architectural landscapes, very slow camera movements that give the audience time to experience rather than simply process, long silences that make dialogue feel charged with weight. Scale is not spectacle for Villeneuve — it is a philosophical statement about the human position in the universe.",
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
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Incendies (2010)" },
        {
          type: "paragraph",
          content:
            "Villeneuve's French-language masterwork. Adapted from Wajdi Mouawad's play, it follows twins who travel to the Middle East to execute their dead mother's will and discover a devastating family secret. The film moves between past and present, building toward a revelation of extraordinary moral weight. It established Villeneuve as a director of rare seriousness and emotional ambition.",
        },
        { type: "heading", content: "Prisoners (2013)" },
        {
          type: "paragraph",
          content:
            "A thriller about two missing girls in Pennsylvania and the moral disintegration of their father. Shot by Roger Deakins in a palette of winter grey and shadow. The film is a study of how grief and fear can lead a morally certain man to become a monster. Hugh Jackman's performance is one of the great screen studies in rage and desperation.",
        },
        { type: "heading", content: "Arrival (2016)" },
        {
          type: "paragraph",
          content:
            "Villeneuve's greatest film. A linguist is recruited to communicate with alien spacecraft that have landed around the world. What begins as a science fiction procedural becomes a meditation on time, grief, language and the relationship between consciousness and causality. The final twenty minutes reframe everything that has come before in a manner that is both intellectually stunning and emotionally devastating.",
        },
        { type: "heading", content: "Blade Runner 2049 (2017)" },
        {
          type: "paragraph",
          content:
            "A sequel to Ridley Scott's 1982 classic that surpasses its predecessor in visual ambition and philosophical depth. Roger Deakins' cinematography creates a world of extraordinary bleakness — the landscape of a civilisation that has consumed itself. The film is slow, demanding, and utterly confident in its own pace.",
        },
        { type: "heading", content: "Dune (2021)" },
        {
          type: "paragraph",
          content:
            "After decades of attempts by other filmmakers, Villeneuve was the director to successfully adapt Frank Herbert's novel. His Dune treats the material with the seriousness of great literature — the score by Hans Zimmer, the sound design, the scale of the landscape all combine to create the most fully realised alien world in cinema since 2001.",
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
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "Language and Consciousness" },
        {
          type: "paragraph",
          content:
            "Arrival is Villeneuve's most explicit statement on his central theme: language as the structure of consciousness. The film is based on the Sapir-Whorf hypothesis — the idea that the language you think in shapes what you are able to think. If you learn a language with no linear time, you cease to experience time linearly. Villeneuve is interested in the limits of what human consciousness can contain.",
        },
        { type: "heading", content: "Grief and Time" },
        {
          type: "paragraph",
          content:
            "Grief recurs throughout his filmography as a distorting force. In Prisoners, a father's grief for his missing daughter destroys his moral clarity. In Arrival, grief and time become philosophically inseparable — the question of whether you would choose to live a life knowing its losses in advance is the film's deepest inquiry. Villeneuve treats grief not as weakness but as the measure of love.",
        },
        { type: "heading", content: "Inherited Moral Weight" },
        {
          type: "paragraph",
          content:
            "Incendies is the purest expression of Villeneuve's theme of moral inheritance — the weight of choices made by parents falling on their children. In Dune this becomes political: the Atreides family's history, their reputation, and their enemies are all inherited. Villeneuve is drawn to stories where the past has a physical weight that the present must carry.",
        },
        { type: "heading", content: "Technology versus Spiritual Depth" },
        {
          type: "paragraph",
          content:
            "Blade Runner 2049 and Dune both stage a confrontation between technological civilisation and something older and deeper — the capacity for spiritual experience, for genuine consciousness, for feeling that technology cannot replicate or replace. In both films the most artificial world contains the most human longing.",
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
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Practical Lessons From His Practice" },
        {
          type: "paragraph",
          content:
            "Villeneuve teaches that scale and silence are not luxuries reserved for epic cinema — they are tools available to any filmmaker willing to trust their audience's patience.",
        },
        { type: "heading", content: "1. Scale Creates Emotional Impact" },
        {
          type: "paragraph",
          content:
            "Villeneuve consistently places human figures as tiny elements within enormous landscapes, architectural spaces, or alien geometries. This is not grandstanding — it is a statement about meaning. When the camera pulls back to reveal how small a character is within a world, it is asking the audience to feel the weight of what that character is facing.",
        },
        { type: "heading", content: "2. Silence Is a Cinematic Tool" },
        {
          type: "paragraph",
          content:
            "Contemporary cinema tends to fill silence with music, dialogue, or sound effects. Villeneuve resists this. His willingness to let scenes breathe — to let an image sit without commentary — is one of his most powerful techniques. Silence creates expectation, weight, and presence. Try letting a scene run in silence for longer than feels comfortable.",
        },
        { type: "heading", content: "3. Choose Collaborators and Trust Them Completely" },
        {
          type: "paragraph",
          content:
            "Villeneuve's most important artistic decisions have been about who to work with — Deakins, Fraser, Hans Zimmer, Amy Adams. He finds people whose vision complements and extends his own, and then trusts them to do extraordinary work. His films are collaborations of equals. The director who tries to control every department produces lesser work than one who enables genius in others.",
        },
        { type: "heading", content: "4. Find the Philosophical Question" },
        {
          type: "paragraph",
          content:
            "Every Villeneuve film is organised around a genuine philosophical question. Arrival asks: would you choose a life whose losses you knew in advance? Prisoners asks: how does moral certainty survive grief? Dune asks: what is the cost of becoming a messiah? Before you begin a film, find the question your story is asking. Not the theme — the question. Questions remain open. Themes close.",
        },
        { type: "heading", content: "5. Respect Your Source Material" },
        {
          type: "paragraph",
          content:
            "Villeneuve was given the rights to Dune because Herbert's son trusted his seriousness. The film's success came from treating the novel's ideas — its ecology, its politics, its spiritual complexity — as genuinely important rather than as scaffolding for action sequences. Adapt what is difficult about your source, not just what is convenient.",
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

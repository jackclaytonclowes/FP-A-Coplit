import type { Course } from "@/types"

const course: Course = {
  id: "roman-polanski",
  title: "Roman Polanski",
  slug: "roman-polanski",
  description:
    "A study of Roman Polanski — cinema's master of psychological confinement. His apartment trilogy and noir masterworks create paranoia, isolation and dread through intimate space and unreliable perception.",
  category: "directors",
  accentColor: "#8b2222",
  estimatedHours: 3,
  tags: ["psychological-thriller", "european", "claustrophobic", "alienation", "apartment-trilogy"],
  lessons: [
    {
      id: "rp-01-biography",
      title: "Biography & Background",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Roman Polanski (Born 1933, Kraków)" },
        {
          type: "paragraph",
          content:
            "Polanski survived the Kraków ghetto as a child — slipping through a hole in the wall while his mother was taken to Auschwitz. He spent the war alone, passing as a gentile in occupied Poland.",
        },
        {
          type: "paragraph",
          content:
            "That childhood — confinement, persecution, nowhere safe — became the DNA of his cinema. He trained at the Łódź Film School and arrived fully formed: claustrophobic, paranoid, brilliant.",
        },
        {
          type: "heading",
          content: "Key Career Milestones",
        },
        {
          type: "list",
          items: [
            "1962: Knife in the Water — debut feature, nominated for Best Foreign Film Oscar",
            "1965: Repulsion — first entry in the unofficial Apartment Trilogy",
            "1968: Rosemary's Baby — Hollywood breakthrough, second Apartment Trilogy entry",
            "1974: Chinatown — considered one of the greatest screenplays ever written",
            "1976: The Tenant — Polanski directs and stars, completing the Apartment Trilogy",
            "2002: The Pianist — wins the Palme d'Or at Cannes and three Academy Awards",
          ],
        },
        {
          type: "quote",
          content: "Cinema should make you forget you are sitting in a theater.",
          author: "Roman Polanski",
        },
      ],
      quiz: {
        question: "Which personal experience from Polanski's childhood most directly shaped the paranoia and confinement at the heart of his films?",
        options: [
          { id: "a", text: "Surviving the Kraków ghetto as a child, with his mother killed in Auschwitz", isCorrect: true },
          { id: "b", text: "Studying experimental cinema under radical professors at the Łódź Film School", isCorrect: false },
          { id: "c", text: "His parents' return to Poland from Paris when he was a small child", isCorrect: false },
          { id: "d", text: "The critical failure of his early short films in Poland", isCorrect: false },
        ],
        explanation:
          "Polanski's childhood in the Kraków ghetto — hiding his identity, watching his parents taken away, surviving in an environment where trust was impossible and confined space meant danger — became the emotional source of his recurring themes. The sense that apartments and enclosed spaces can become traps, and that persecution can come from anywhere, has direct biographical roots.",
      },
    },
    {
      id: "rp-02-influences",
      title: "Influences & Cinematic Education",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "The French New Wave Cracks the Rules" },
        {
          type: "paragraph",
          content:
            "Godard, Truffaut, Chabrol — they broke Hollywood's rules and made it look easy. Polanski absorbed their alienated urban protagonists and their willingness to leave the audience uncomfortable.",
        },
        { type: "heading", content: "Kafka and Beckett" },
        {
          type: "paragraph",
          content:
            "Kafka gave him nightmare bureaucracy — guilt assumed, authority unreachable. Beckett gave him radical reduction: two people, a room, time passing. Both haunt every Polanski film.",
        },
        { type: "heading", content: "Orson Welles: Rooms That Think" },
        {
          type: "paragraph",
          content:
            "Welles proved a room could express a mind. His extreme wide angles and deep shadows gave Polanski a technical language for turning architecture into psychology.",
        },
        { type: "heading", content: "Ingmar Bergman" },
        {
          type: "paragraph",
          content:
            "Bergman showed that a face in a small room could hold the whole of human suffering. Polanski agreed: cinema's real subject is the inside of a mind.",
        },
      ],
      quiz: {
        question: "Which literary writer most influenced the nightmare logic of institutional persecution found in Polanski's films?",
        options: [
          { id: "a", text: "Franz Kafka, whose work depicts persecution by an unseen, unapproachable authority", isCorrect: true },
          { id: "b", text: "Samuel Beckett, whose minimalism shaped Polanski's reduction of dramatic elements", isCorrect: false },
          { id: "c", text: "Albert Camus, whose absurdist philosophy informed Polanski's alienated protagonists", isCorrect: false },
          { id: "d", text: "Fyodor Dostoevsky, whose psychological realism Polanski studied at Łódź", isCorrect: false },
        ],
        explanation:
          "Kafka's nightmare logic — the individual caught in a system of persecution whose rules are never explained, whose authority can never be appealed to, whose guilt is assumed — is the direct literary ancestor of the paranoid worldview in films like The Tenant and Rosemary's Baby. Beckett was also a major influence, but for formal minimalism rather than the specific texture of persecution.",
      },
    },
    {
      id: "rp-03-style",
      title: "Visual Style & Techniques",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Wide Lens, Tiny Room — Maximum Dread" },
        {
          type: "paragraph",
          content:
            "Wide-angle lenses in small spaces shouldn't work — but they do. Walls lean inward, ceilings press down, and the room feels both vast and inescapable at the same time.",
        },
        { type: "heading", content: "A Camera That's Afraid" },
        {
          type: "paragraph",
          content:
            "Polanski's handheld shots carry a faint, involuntary tremor. The camera itself seems scared — because it is. It's a consciousness, and that consciousness is watching something terrible.",
        },
        { type: "heading", content: "The Apartment That Turns on You" },
        {
          type: "paragraph",
          content:
            "In each Apartment Trilogy film, the home becomes a trap. Angles tighten, light shrinks, the walls rearrange. The space mirrors the mind falling apart.",
        },
        { type: "heading", content: "Shadow That Lies to You" },
        {
          type: "paragraph",
          content:
            "Half-lit faces suggest divided selves. Blocked doorways hide threats not yet visible. The image itself can't be trusted — and neither can the person watching it.",
        },
        {
          type: "quote",
          content: "I don't want to make a film about what happens. I want to make a film about what it feels like.",
          author: "Roman Polanski",
        },
      ],
      quiz: {
        question: "Why does Polanski use wide-angle lenses in confined interiors, despite the seeming contradiction?",
        options: [
          { id: "a", text: "To allow more of the apartment to be visible, giving the viewer more spatial information", isCorrect: false },
          { id: "b", text: "To distort the geometry of rooms so that confined spaces feel simultaneously large and inescapable", isCorrect: true },
          { id: "c", text: "To replicate the exaggerated perspective of horror film conventions from the 1960s", isCorrect: false },
          { id: "d", text: "To compensate for the technical limitations of filming in practical locations", isCorrect: false },
        ],
        explanation:
          "Wide angles in small spaces create a highly specific psychological effect: the room appears to have more volume than it should, while simultaneously distorting walls and ceilings into threatening shapes. The result is a space that feels impossible to escape precisely because its geometry is wrong. This is the visual signature of Polanski's claustrophobia.",
      },
    },
    {
      id: "rp-04-films",
      title: "Essential Films",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "The Apartment Trilogy" },
        {
          type: "paragraph",
          content:
            "Three films, one obsession: a single person in an urban apartment, slowly losing their mind. The apartment is refuge and prison — and it doesn't stay neutral for long.",
        },
        { type: "heading", content: "Repulsion (1965)" },
        {
          type: "paragraph",
          content:
            "Carol is left alone in a London flat. The walls crack. Hands reach through the plaster. Catherine Deneuve gives one of cinema's great portraits of a disintegrating mind.",
        },
        { type: "heading", content: "Rosemary's Baby (1968)" },
        {
          type: "paragraph",
          content:
            "Rosemary suspects her neighbours — and husband — are conspiring with Satanic forces. The genius: she's right. Polanski's biography makes paranoia feel like documentary.",
        },
        { type: "heading", content: "The Tenant (1976)" },
        {
          type: "paragraph",
          content:
            "Polanski plays a Polish exile in Paris convinced his neighbours are engineering his transformation into a dead woman. Strange, personal, and deeply unsettling.",
        },
        { type: "heading", content: "Chinatown (1974)" },
        {
          type: "paragraph",
          content:
            "The masterpiece. Corruption as systemic fact, not individual flaw. Polanski fought for the nihilistic ending — and won. One of cinema's most devastating final scenes.",
        },
      ],
      quiz: {
        question: "What is the crucial ambiguity that makes Rosemary's Baby a quintessential Polanski film?",
        options: [
          { id: "a", text: "Whether the neighbours are real or imagined figures from Rosemary's childhood trauma", isCorrect: false },
          { id: "b", text: "Whether Rosemary is delusional or is actually being persecuted — and the horror turns out to be real", isCorrect: true },
          { id: "c", text: "Whether Rosemary's husband is aware of the conspiracy or is himself a victim", isCorrect: false },
          { id: "d", text: "Whether the ending represents Rosemary's acceptance or her final psychotic break", isCorrect: false },
        ],
        explanation:
          "The film maintains the ambiguity of whether Rosemary is suffering paranoid delusion or genuine persecution — then reveals that the persecution is real. This merges Polanski's formal interest in unreliable perception with his biographical knowledge that paranoia can be entirely justified: sometimes the threat is real, and those around you truly cannot be trusted.",
      },
    },
    {
      id: "rp-05-themes",
      title: "Themes & Obsessions",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Paranoia as Rational Response" },
        {
          type: "paragraph",
          content:
            "Polanski's paranoia isn't a symptom — it's a conclusion. A filmmaker who survived the Holocaust as a child knows that persecution is real. His protagonists aren't imagining it.",
        },
        { type: "heading", content: "The Apartment as Trap" },
        {
          type: "paragraph",
          content:
            "The space that should protect you is the one that destroys you. Polanski returns to this again and again — because he lived it. The ghetto. The wall. The hole in the fence.",
        },
        { type: "heading", content: "You Can't Trust What You See" },
        {
          type: "paragraph",
          content:
            "His films are unreliable by design. What you're watching might be hallucination, paranoid projection, or reality. That uncertainty is the philosophical point, not a narrative trick.",
        },
        { type: "heading", content: "The Displaced Person" },
        {
          type: "paragraph",
          content:
            "His protagonists don't belong where they are. Identity slips. Environments turn hostile. It runs through everything he made — because it ran through everything he lived.",
        },
      ],
      quiz: {
        question: "Why, in Polanski's films, is paranoia never simply a psychological disorder?",
        options: [
          { id: "a", text: "Because his characters are always shown to have rational reasons for their fears before the paranoia begins", isCorrect: false },
          { id: "b", text: "Because his childhood experience of the Holocaust showed him that institutional persecution is real and that danger can be entirely justified", isCorrect: true },
          { id: "c", text: "Because the horror genre conventions he works within require that threats be made real at the end", isCorrect: false },
          { id: "d", text: "Because European arthouse cinema of his period rejected purely psychological explanations of behaviour", isCorrect: false },
        ],
        explanation:
          "Polanski's biography gives his treatment of paranoia a weight no purely formal explanation can account for. A filmmaker who survived the Holocaust as a child by hiding his identity knows from direct experience that institutional persecution is not irrational fear but observed reality. His films explore paranoia from the inside of someone who knows that sometimes the threat is absolutely real.",
      },
    },
    {
      id: "rp-06-learn",
      title: "What You Can Learn",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "What Polanski Teaches" },
        {
          type: "paragraph",
          content:
            "Space is psychology. The architecture of a scene can reveal a character's inner state more powerfully than any line of dialogue.",
        },
        { type: "heading", content: "1. Use Confined Space to Create Tension" },
        {
          type: "paragraph",
          content:
            "You don't need action sequences or exotic locations. One room, used with intelligence, can be the most threatening space in cinema. Make your locations psychological environments.",
        },
        { type: "heading", content: "2. Let Space Externalise Mental States" },
        {
          type: "paragraph",
          content:
            "The walls of Repulsion crack as Carol's mind cracks. Ask yourself: how can the physical environment show the viewer what's happening inside your character?",
        },
        { type: "heading", content: "3. Embrace the Unresolved Ending" },
        {
          type: "paragraph",
          content:
            "Polanski fought for endings that don't resolve. Chinatown ends in catastrophe. Resist the pressure to tie things up — some situations don't resolve, and forcing them to is a lie.",
        },
        { type: "heading", content: "4. Biography Is Material" },
        {
          type: "paragraph",
          content:
            "Your experiences of confinement, displacement, or unreliable perception aren't liabilities. They're the raw material of your most singular work. Use them.",
        },
      ],
      reflection: {
        prompt:
          "Think of a physical space — a room, a corridor, a building — that has felt psychologically threatening or oppressive to you, even if nothing overtly dangerous was happening. What specific physical qualities created that feeling? How would you film that space to communicate its psychological charge to a viewer who has never been there?",
      },
    },
  ],
}

export default course

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
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "Roman Polanski (Born 1933, Kraków)" },
        {
          type: "paragraph",
          content:
            "Roman Polanski was born in Paris in 1933 to Polish-Jewish parents who returned to Kraków when he was three. When the Nazis invaded Poland and created the Kraków ghetto, Polanski survived as a child by slipping through a hole in the ghetto wall and living among Polish families in the countryside. His mother was taken to Auschwitz, where she died. His father survived Mauthausen. Polanski spent the war years alone, a Jewish child passing as a gentile in occupied Poland.",
        },
        {
          type: "paragraph",
          content:
            "These childhood experiences — persecution, confinement, the unreliability of safe spaces, the constant threat of discovery — became the emotional DNA of his cinema. After the war he studied at the prestigious Łódź Film School, where the Polish New Wave was being born. His early short films demonstrated an already fully formed sense of psychological unease and spatial claustrophobia.",
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
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "The French New Wave and European Modernism" },
        {
          type: "paragraph",
          content:
            "Polanski came of age as a filmmaker at the moment of the French New Wave — that explosion of personal, formally adventurous cinema associated with Godard, Truffaut, and Chabrol. The Nouvelle Vague's willingness to break classical Hollywood conventions of narrative continuity, its embrace of psychological realism, and its fascination with alienated urban protagonists all fed directly into Polanski's sensibility.",
        },
        { type: "heading", content: "Kafka and Beckett" },
        {
          type: "paragraph",
          content:
            "Two literary presences haunt Polanski's work more than any filmmaker: Franz Kafka and Samuel Beckett. From Kafka he takes the nightmare logic of bureaucratic persecution and the impossibility of appealing against an unseen authority. From Beckett he takes the reduction of human experience to its starkest elements — two people in a room, time passing, endurance as the only existential response.",
        },
        { type: "heading", content: "Orson Welles and Expressionism" },
        {
          type: "paragraph",
          content:
            "Orson Welles' expressionistic visual language — the extreme wide angles that distort space, the deep shadows that give architecture a threatening life, the ceilings that trap characters — gave Polanski a technical vocabulary for rendering psychological states as spatial environments. Welles showed that a room could be an expression of a mind.",
        },
        { type: "heading", content: "Ingmar Bergman" },
        {
          type: "paragraph",
          content:
            "Bergman's ability to render interior psychological states through the faces of actors and the geometry of intimate spaces was equally formative. Polanski shares Bergman's conviction that cinema's proper subject is the inside of a human mind — and that the camera should be an instrument of psychological investigation rather than mere narrative delivery.",
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
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "Claustrophobia Through the Wide Angle" },
        {
          type: "paragraph",
          content:
            "Polanski's most distinctive technical signature is the use of wide-angle lenses in confined interiors — a combination that seems contradictory but produces a deeply unsettling effect. Wide angles in small spaces distort the geometry of rooms, making walls seem to lean inward, corridors to elongate, and ceilings to press down. The space feels simultaneously large and inescapable.",
        },
        { type: "heading", content: "The Camera as Instrument of Paranoia" },
        {
          type: "paragraph",
          content:
            "Polanski uses camera movement not to clarify but to destabilise. His hand-held sequences introduce a faint, involuntary tremor into the image — suggesting that what we are watching is being observed by something anxious, something that itself is afraid. The camera becomes a consciousness, and that consciousness is frightened.",
        },
        { type: "heading", content: "Confined Interiors as Psychological Prisons" },
        {
          type: "paragraph",
          content:
            "All three films of the Apartment Trilogy use the apartment itself as the primary dramatic setting — and in each case the apartment gradually transforms from refuge to prison. This is achieved through cinematography (tightening angles, reducing light), sound design (ambient noise becoming threatening), and production design (subtle alterations to the apartment's configuration between scenes).",
        },
        { type: "heading", content: "Expressionistic Shadow and the Unreliable Image" },
        {
          type: "paragraph",
          content:
            "Polanski uses shadow expressionistically — not to create atmosphere in the conventional Gothic sense, but to indicate that what we see cannot be trusted. Faces half-lit suggest divided selves. Doorways blocked by shadow imply threats not yet visible. The image itself becomes unreliable, reflecting the perceptual world of protagonists who may be delusional.",
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
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "The Apartment Trilogy" },
        {
          type: "paragraph",
          content:
            "Three films united not by narrative connection but by shared obsessions: a single protagonist in an urban apartment, escalating psychological disintegration, confined space as metaphor for a collapsing mind.",
        },
        { type: "heading", content: "Repulsion (1965)" },
        {
          type: "paragraph",
          content:
            "A young Belgian woman (Catherine Deneuve) left alone in a London flat while her sister holidays in Italy. As the days pass, her phobia of male sexuality causes a complete psychotic break. The apartment becomes her hallucination: walls crack, hands emerge from the plaster, the space shifts. Shot in black and white with extraordinary formal control, it remains one of cinema's most disturbing portraits of a disintegrating mind.",
        },
        { type: "heading", content: "Rosemary's Baby (1968)" },
        {
          type: "paragraph",
          content:
            "A young woman in a New York apartment building suspects her neighbours — and eventually her husband — of conspiring with Satanic forces. The genius of the film is that Rosemary's paranoia may be entirely justified: the horror is real. This ambiguity — is she delusional or persecuted? — makes the film an almost perfect Polanski text, merging his personal history of real persecution with his formal interest in unreliable perception.",
        },
        { type: "heading", content: "The Tenant (1976)" },
        {
          type: "paragraph",
          content:
            "Polanski himself plays a timid Polish man in a Paris apartment who becomes convinced his neighbours are engineering his descent into the identity of the apartment's previous female tenant, who committed suicide. The most autobiographically charged of the trilogy — a Polish exile in Paris gradually losing his sense of self. Deeply strange and deeply personal.",
        },
        { type: "heading", content: "Chinatown (1974)" },
        {
          type: "paragraph",
          content:
            "Polanski's undisputed masterpiece of neo-noir. Robert Towne's screenplay — perhaps the finest American screenplay ever written — and Polanski's insistence on the downbeat, nihilistic ending against studio pressure produced a film that understands corruption as a systemic condition rather than an individual aberration. The ending remains one of cinema's most devastating.",
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
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "Paranoia and Its Biographical Roots" },
        {
          type: "paragraph",
          content:
            "Paranoia in Polanski's films is never simply a psychological symptom — it is a rational response to actual historical experience. A filmmaker who survived the Holocaust as a child, who watched his parents taken away, who lived by concealing his identity, understands that institutional persecution is not delusional. His protagonists are not imagining their enemies.",
        },
        { type: "heading", content: "Confined Space as Psychological Metaphor" },
        {
          type: "paragraph",
          content:
            "The apartment — the ghetto — the enclosed space from which there is no exit. Polanski returns obsessively to the confined interior as the primary dramatic arena. In each case the space that should be refuge becomes trap. The apartment is both the safest and most dangerous place: the world outside is threatening, but the space inside mirrors the protagonist's collapsing mental state.",
        },
        { type: "heading", content: "The Unreliable Narrator" },
        {
          type: "paragraph",
          content:
            "We experience Polanski's films entirely through the perceptions of protagonists whose grip on reality is uncertain. The formal consequence is that the film itself cannot be trusted: what we see may be hallucination, paranoid projection, or accurate perception. This uncertainty is not a narrative trick but a philosophical statement about the reliability of individual experience.",
        },
        { type: "heading", content: "Displacement and Identity" },
        {
          type: "paragraph",
          content:
            "Many of Polanski's protagonists are displaced persons — people who do not belong where they find themselves, whose identity is unstable, who are perceived as foreign or threatening by their environments. This is most explicit in The Tenant, where the Polish protagonist gradually loses himself to the identity of a dead woman, but it runs through all his work as a displaced Polish-Jewish director working in multiple national cinemas.",
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
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Lessons From Polanski's Cinema" },
        {
          type: "paragraph",
          content:
            "Polanski teaches that space is psychology — that the architecture of a scene can externalise the interior state of a character more powerfully than dialogue or performance alone.",
        },
        { type: "heading", content: "1. Use Confined Space to Create Tension" },
        {
          type: "paragraph",
          content:
            "The apartment trilogy demonstrates that you do not need elaborate locations or action sequences to generate extreme dramatic tension. A single room, used with formal intelligence, can become the most threatening space in cinema. Think about how your locations can become psychological environments rather than neutral backgrounds.",
        },
        { type: "heading", content: "2. Let Space Externalise Mental States" },
        {
          type: "paragraph",
          content:
            "Polanski never explains his characters' inner lives through dialogue if he can express them through mise-en-scène. The walls of Repulsion crack as Carol's mind cracks. The apartment in The Tenant shifts as its occupant's identity shifts. Ask yourself: how can the physical environment of a scene show the viewer what is happening inside a character's mind?",
        },
        { type: "heading", content: "3. Embrace the Unresolved Ending" },
        {
          type: "paragraph",
          content:
            "Polanski fought against studios and distributors for endings that did not resolve — that left the audience in a state of disturbed uncertainty. Chinatown ends in catastrophe. Rosemary's Baby ends with the horror acknowledged but no escape. The Tenant ends in repetition and oblivion. Resist the pressure to resolve. Some situations do not resolve, and forcing resolution is a lie.",
        },
        { type: "heading", content: "4. Biography Is Material" },
        {
          type: "paragraph",
          content:
            "The most powerful element in Polanski's work is that his obsessions are not chosen — they are given, by the history he survived. Your own experiences of confinement, persecution, displacement, or unreliable perception are not liabilities to be concealed. They are the raw material of your most singular work.",
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

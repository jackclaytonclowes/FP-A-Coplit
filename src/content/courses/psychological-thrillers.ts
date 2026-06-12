import type { Course } from "@/types"

const course: Course = {
  id: "psychological-thrillers",
  title: "Psychological Thrillers",
  slug: "psychological-thrillers",
  description:
    "A guide to the psychological thriller — cinema's greatest tool for exploring paranoia, identity and the unreliable mind. From Hitchcock to Fincher to Polanski.",
  category: "film",
  accentColor: "#1a2840",
  estimatedHours: 3,
  tags: ["thriller", "psychological", "paranoia", "unreliable-narrator", "suspense"],
  lessons: [
    {
      id: "pt-01-origins",
      title: "Origins: Hitchcock and the Grammar of Paranoia",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "Alfred Hitchcock: The Founder" },
        {
          type: "paragraph",
          content:
            "Alfred Hitchcock invented the grammar of the psychological thriller. Working in British cinema in the 1930s and then in Hollywood from 1940 onward, he developed a set of techniques for producing suspense, paranoia, and psychological dread that every subsequent filmmaker in the genre inherits. The psychological thriller as a genre is largely a description of what Hitchcock did.",
        },
        { type: "heading", content: "Suspense vs. Surprise" },
        {
          type: "paragraph",
          content:
            "Hitchcock's most important distinction was between suspense and surprise. Surprise: two characters talk at a table; a bomb explodes. Fifteen seconds of shock. Suspense: the audience sees the bomb under the table before the characters speak. The same conversation becomes fifteen minutes of unbearable tension. Hitchcock always gave the audience information that the characters lacked, then let them suffer knowing what was coming.",
        },
        { type: "heading", content: "The MacGuffin" },
        {
          type: "paragraph",
          content:
            "The MacGuffin is the object or goal that motivates the plot — the microfilm in North by Northwest, the money Marion Crane steals in Psycho — but which matters less than the suspense it generates. The MacGuffin is whatever makes characters move, without itself having any intrinsic significance. What matters is not what is being pursued but the psychological state produced by the pursuit.",
        },
        { type: "heading", content: "The Subjective Camera and the Audience as Voyeur" },
        {
          type: "paragraph",
          content:
            "Hitchcock used the subjective camera — showing what characters see, from where they see it — to make audiences complicit in the film's psychology. In Rear Window, we watch what Jefferies watches; we cannot look away any more than he can. In Psycho, the camera inhabits Norman Bates' perspective just long enough to implicate us. Hitchcock understood that cinema makes voyeurs of its audiences and built this into his technique.",
        },
        {
          type: "list",
          items: [
            "Rear Window (1954) — voyeurism, isolation, the watcher and the watched",
            "Vertigo (1958) — obsession, identity, the male gaze as psychological disorder",
            "Psycho (1960) — the death of the protagonist, the unreliable narrator, Norman Bates",
            "The Birds (1963) — irrational threat, the breakdown of natural order",
          ],
        },
      ],
      quiz: {
        question: "What is the difference between suspense and surprise as Hitchcock defined it?",
        options: [
          {
            id: "a",
            text: "Surprise uses special effects; suspense relies on psychological performance",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Surprise withholds information from the audience; suspense gives the audience information characters lack and makes them suffer knowing what is coming",
            isCorrect: true,
          },
          {
            id: "c",
            text: "Surprise occurs in action scenes; suspense occurs in dialogue scenes",
            isCorrect: false,
          },
          {
            id: "d",
            text: "Surprise produces momentary shock; suspense builds gradually through score and camera movement",
            isCorrect: false,
          },
        ],
        explanation:
          "Hitchcock's formulation: if a bomb explodes without warning, the audience gets fifteen seconds of shock. If the audience can see the bomb under the table while the characters talk, the same scene becomes fifteen minutes of unbearable suspense. The difference is information asymmetry: suspense requires the audience to know more than the characters, and to suffer from that knowledge. This is the foundational technique of the thriller.",
      },
    },
    {
      id: "pt-02-directors",
      title: "Key Directors",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Roman Polanski: Paranoia in Confined Space" },
        {
          type: "paragraph",
          content:
            "Polanski's apartment trilogy — Repulsion (1965), Rosemary's Baby (1968), The Tenant (1976) — established confined domestic space as the primary environment of psychological horror. In each film a character alone in an apartment loses their grip on reality: the apartment becomes a projection of their mental state. Polanski understood that the most claustrophobic space is one you cannot leave.",
        },
        { type: "heading", content: "David Fincher: Procedural Obsession" },
        {
          type: "paragraph",
          content:
            "Fincher's thrillers — Se7en (1995), Fight Club (1999), Zodiac (2007), Gone Girl (2014) — are studies in obsession and procedural precision. Where Hitchcock produces anxiety through suspense, Fincher produces it through a quality of relentlessness: his films feel inevitable, their darkness carefully prepared and meticulously delivered. Zodiac in particular is a film about the obsession the thriller itself induces.",
        },
        { type: "heading", content: "Brian De Palma: Hitchcock's Heir" },
        {
          type: "paragraph",
          content:
            "De Palma's Dressed to Kill (1980), Blow Out (1981), and Body Double (1984) are explicit engagements with Hitchcock — using his techniques (the split-screen, the subjective camera, the MacGuffin) while pushing them toward more extreme visual and psychological territory. De Palma treats cinema as a system of voyeuristic pleasure and positions his audience to feel the moral complexity of that pleasure.",
        },
        { type: "heading", content: "Darren Aronofsky: Psychological Disintegration" },
        {
          type: "paragraph",
          content:
            "Aronofsky's Pi (1998), Requiem for a Dream (2000), and Black Swan (2010) use the thriller's tools — dread, suspense, paranoia — to dramatise psychological disintegration from the inside. The audience inhabits the deteriorating mind of the protagonist and is given no stable external perspective from which to evaluate what is real. His films are experiences of dissolution as much as stories about it.",
        },
      ],
      quiz: {
        question: "What was Roman Polanski's specific contribution to the psychological thriller through his apartment trilogy?",
        options: [
          {
            id: "a",
            text: "He introduced the unreliable narrator as a structural device to the thriller genre",
            isCorrect: false,
          },
          {
            id: "b",
            text: "He established confined domestic space as the primary environment for psychological horror — the apartment as a projection of mental state",
            isCorrect: true,
          },
          {
            id: "c",
            text: "He was the first filmmaker to use the subjective camera to represent psychological breakdown",
            isCorrect: false,
          },
          {
            id: "d",
            text: "He introduced dream sequences as an explanation for otherwise impossible narrative events",
            isCorrect: false,
          },
        ],
        explanation:
          "Polanski's apartment trilogy — Repulsion, Rosemary's Baby, The Tenant — made the confined domestic space the definitive environment of psychological horror. In each film the protagonist is alone in an apartment that gradually reveals itself as a projection of their deteriorating mental state. The walls close in. Objects become threatening. The apartment cannot be left. Polanski showed that the most claustrophobic space is one you cannot escape.",
      },
    },
    {
      id: "pt-03-visual",
      title: "Visual Language of Paranoia",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "The Dolly Zoom" },
        {
          type: "paragraph",
          content:
            "The dolly zoom — moving the camera toward or away from a subject while simultaneously zooming in the opposite direction — creates a vertiginous effect in which the subject stays the same size but the background appears to move. Hitchcock invented it for the vertigo sequence in Vertigo (1958). It has since become shorthand for the specific psychological sensation of sudden dread or disorientation — the world shifting while you remain fixed.",
        },
        { type: "heading", content: "Tight Close-Ups and Claustrophobia" },
        {
          type: "paragraph",
          content:
            "The psychological thriller uses tight close-ups not to produce emotional intimacy but to produce claustrophobia — the sense that there is no escape from what is being experienced. Close-ups in Aronofsky's Black Swan trap the audience inside Nina's narrowing perception. Fincher's close-ups of evidence and procedure in Zodiac produce a forensic obsession that mirrors the film's subject.",
        },
        { type: "heading", content: "Shadow, Expressionistic Light, and the Desaturated Palette" },
        {
          type: "paragraph",
          content:
            "The thriller inherits its visual language from film noir and German expressionism: deep shadows, single-source key lighting that creates strong shadow, a generally desaturated colour palette that drains warmth from the world. Se7en's colour-drained, rain-soaked city is the visual expression of the film's moral universe. Black Swan's cold whites and blacks externalise Nina's psychological state.",
        },
        { type: "heading", content: "Mirrors, Windows, and the Watcher Watched" },
        {
          type: "paragraph",
          content:
            "Mirrors and windows appear constantly in the psychological thriller as visual metaphors for the double consciousness of the genre: the character watching and being watched, the self and the shadow self, the seen and the surveilled. Mirrors in Black Swan show Nina her darker self. The window in Rear Window is simultaneously the screen through which Jefferies watches and the screen through which the audience watches Jefferies.",
        },
        { type: "heading", content: "The Point-of-View Shot as Complicity" },
        {
          type: "paragraph",
          content:
            "Where Hitchcock used the POV shot to create suspense, the psychological thriller extends it to create moral implication: we see what the character sees, and we are therefore implicated in what they do. In Psycho, the camera adopts Norman Bates' point of view at key moments — making the audience accomplices in the film's violence. This is the psychological thriller's darkest use of a basic tool.",
        },
      ],
      quiz: {
        question: "What psychological sensation does the dolly zoom (invented for Vertigo) physically represent?",
        options: [
          {
            id: "a",
            text: "The experience of falling — the world rushing upward as the body falls",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Sudden dread or disorientation — the world shifting while the subject remains fixed",
            isCorrect: true,
          },
          {
            id: "c",
            text: "The distorted vision of a character under the influence of drugs or alcohol",
            isCorrect: false,
          },
          {
            id: "d",
            text: "Heightened attention — the world coming into sharp focus at a moment of realisation",
            isCorrect: false,
          },
        ],
        explanation:
          "The dolly zoom moves the camera in one direction while zooming in the opposite direction, keeping the subject the same size while the background appears to rush toward or away from it. Hitchcock created this for Scottie's fear of heights in Vertigo: the visual experience of the world shifting while you remain fixed. It has since become the genre's visual signature for that specific psychological moment — when reality becomes unstable.",
      },
    },
    {
      id: "pt-04-narrator",
      title: "The Unreliable Narrator",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "What Makes a Narrator Unreliable?" },
        {
          type: "paragraph",
          content:
            "An unreliable narrator is one whose account of events cannot be trusted — because they are lying, self-deceived, mentally unstable, or simply wrong about their own experience. In literature the narrator's unreliability must be inferred from contradictions in the text. In film the visual track itself becomes unreliable: we cannot trust what we see as well as what we are told.",
        },
        { type: "heading", content: "Fight Club: The Narrator Whose Story Cannot Be Trusted" },
        {
          type: "paragraph",
          content:
            "Fight Club's narrator (Edward Norton) describes events that are structurally impossible — a second character who is in too many places, who does things the narrator cannot have witnessed. The film invites early re-reading: once the revelation is delivered, everything changes. Fincher seeds the unreliability throughout without making it obvious.",
        },
        { type: "heading", content: "Shutter Island: Environment as Mental Projection" },
        {
          type: "paragraph",
          content:
            "Shutter Island places the audience inside the delusion of its protagonist: the asylum island is not what it appears, and the visual reality of the film is a projection of Teddy Daniels' constructed identity. The film makes the viewer experience the protagonist's delusion from the inside — so that the revelation dismantles not just the character's world but the audience's.",
        },
        { type: "heading", content: "The Sixth Sense: The Recontextualising Twist" },
        {
          type: "paragraph",
          content:
            "The Sixth Sense's reveal retroactively recontextualises everything the audience has seen. Every scene had a different meaning from the one we assigned it during first viewing. This is the most audience-participatory form of unreliable narration: the audience has been constructing a wrong reading of the film all along, and the revelation invites them to re-read the entire film they have just watched.",
        },
        { type: "heading", content: "American Psycho: The Radical Ambiguity" },
        {
          type: "paragraph",
          content:
            "American Psycho maintains a permanent ambiguity: is Patrick Bateman actually committing murders, or is the violence entirely fantasy? The film offers evidence for both readings and refuses to resolve them. This is unreliable narration at its most demanding: the viewer must remain permanently suspended between readings, unable to settle.",
        },
      ],
      quiz: {
        question: "What makes The Sixth Sense's use of unreliable narration particularly audience-participatory?",
        options: [
          {
            id: "a",
            text: "The audience is given clues throughout that invite them to guess the reveal before it arrives",
            isCorrect: false,
          },
          {
            id: "b",
            text: "The revelation recontextualises everything already seen — the audience has been constructing a wrong reading all along",
            isCorrect: true,
          },
          {
            id: "c",
            text: "The audience sees events from multiple characters' perspectives that contradict each other",
            isCorrect: false,
          },
          {
            id: "d",
            text: "The child narrator is clearly unreliable from the start, which invites the audience to actively question his account",
            isCorrect: false,
          },
        ],
        explanation:
          "The Sixth Sense's reveal works by retroactive recontextualisation: every scene the audience has watched had a different meaning from the one they assigned it. After the revelation, the film invites — almost demands — an immediate second viewing to reconstruct the story correctly. The audience has not just been surprised; they have been shown that they were wrong about everything. This is unreliable narration that implicates the audience's own reading process.",
      },
    },
    {
      id: "pt-05-viewing",
      title: "Essential Viewing Guide",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "The Canon: Where to Start" },
        {
          type: "paragraph",
          content:
            "The psychological thriller has a clear canon. For a newcomer, the following films represent the genre at its best and most essential, arranged roughly in order of accessibility. Each film both delivers the genre's pleasures and advances the genre's formal possibilities.",
        },
        {
          type: "list",
          items: [
            "Rear Window (1954) — Hitchcock's most accessible and pleasurable demonstration of his techniques",
            "Vertigo (1958) — his deepest and most formally complex film; increasingly considered his masterpiece",
            "Psycho (1960) — the film that broke cinema's rules about who can be a protagonist",
            "Repulsion (1965) — Polanski's first apartment film; overwhelming",
            "Rosemary's Baby (1968) — paranoia as the experience of pregnancy",
            "Chinatown (1974) — the noir thriller as investigation of corruption and power",
            "Se7en (1995) — Fincher's breakthrough; the procedural as moral horror",
            "Fight Club (1999) — the unreliable narrator as critique of masculine identity",
            "Mulholland Drive (2001) — where the psychological thriller meets surrealism",
            "Zodiac (2007) — obsession with a case that cannot be solved",
            "Black Swan (2010) — psychological disintegration and the Aronofsky method",
            "Gone Girl (2014) — the marriage as psychological warfare",
          ],
        },
        { type: "heading", content: "Recommended Viewing Order" },
        {
          type: "paragraph",
          content:
            "Start with Rear Window and Psycho to establish Hitchcock's grammar. Then Rosemary's Baby and Se7en for the post-Hitchcock tradition. Then Fight Club for the unreliable narrator. Then Zodiac — the most demanding and most rewarding — and finally Mulholland Drive, which requires the full genre context to be understood.",
        },
      ],
      quiz: {
        question: "Why is Psycho (1960) a landmark in the history of narrative cinema beyond its genre?",
        options: [
          {
            id: "a",
            text: "It was the first film to be shot entirely in black and white with a commercial Hollywood budget",
            isCorrect: false,
          },
          {
            id: "b",
            text: "It killed its apparent protagonist a third of the way through, breaking cinema's assumed rules about narrative structure",
            isCorrect: true,
          },
          {
            id: "c",
            text: "It was the first film to receive an X rating for its depiction of violence",
            isCorrect: false,
          },
          {
            id: "d",
            text: "It demonstrated that a film without a sympathetic protagonist could succeed commercially",
            isCorrect: false,
          },
        ],
        explanation:
          "Psycho's most radical structural gesture is the death of Marion Crane — established as the film's protagonist for the first half hour — in the shower scene. No film had killed its apparent protagonist this early. Audiences did not know what to do: the story they thought they were watching had ended and a different, stranger story had begun. This violation of the protagonist contract is the film's most lasting influence on the grammar of narrative cinema.",
      },
    },
    {
      id: "pt-06-learn",
      title: "How to Watch a Psychological Thriller",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "The Thriller Asks You to Be Suspicious" },
        {
          type: "paragraph",
          content:
            "The psychological thriller is a genre that actively recruits audience suspicion. Unlike drama, which asks you to trust what you see, the thriller invites — even requires — you to question what you are being shown. When something is too clear, too convenient, or too reassuring, the thriller is probably hiding something.",
        },
        { type: "heading", content: "Watch for What the Film Is Hiding" },
        {
          type: "paragraph",
          content:
            "Great thrillers construct the audience's attention carefully: they make you look at what they want you to see while concealing what they do not want you to notice yet. On a second viewing, these concealment strategies become visible. Watch for what is off-screen, what is in the background, what a character does not say.",
        },
        { type: "heading", content: "The Score Tells You to Be Afraid Before You Know Why" },
        {
          type: "paragraph",
          content:
            "Notice when the score rises before anything threatening has happened. This is the director's instruction to your nervous system: be afraid. The thriller uses music as a pre-cognitive alarm — you feel dread before your conscious mind has identified its cause. Watching the same scene without sound will show you exactly what the image alone communicates versus what the score is adding.",
        },
        { type: "heading", content: "Rewatch to See the Architecture" },
        {
          type: "paragraph",
          content:
            "The great psychological thrillers reward second viewings more than almost any other genre. On first viewing, you experience the narrative. On second viewing, you see the construction: how information was withheld, how misleading images were placed, how the audience's assumptions were deliberately cultivated and then dismantled. The second viewing is the more interesting one.",
        },
      ],
      reflection: {
        prompt:
          "Choose one film from the essential viewing list. Watch the first twenty minutes with the sound off. Write down what the image alone communicates: what is in frame, what is in shadow, where the camera is placed, what it moves toward. Then watch the same twenty minutes with sound. What does the score add? What does it override? Finally, if you have already seen the film: what in these twenty minutes is hiding something you only understood later? Write a paragraph on what the thriller is concealing in its opening, and how.",
      },
    },
  ],
}

export default course

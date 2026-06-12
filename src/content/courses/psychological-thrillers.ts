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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Hitchcock Invented the Rulebook" },
        {
          type: "paragraph",
          content:
            "Hitchcock built the psychological thriller from scratch — working in Britain in the 1930s, then Hollywood from 1940. Every technique the genre uses, he developed first.",
        },
        { type: "heading", content: "Suspense vs. Surprise: Know the Difference" },
        {
          type: "paragraph",
          content:
            "Surprise: bomb explodes. Fifteen seconds of shock. Suspense: you see the bomb under the table before the characters start talking. Same conversation — now fifteen minutes of unbearable tension.",
        },
        { type: "heading", content: "The MacGuffin: It Doesn't Actually Matter" },
        {
          type: "paragraph",
          content:
            "The microfilm in North by Northwest. The money Marion steals in Psycho. The MacGuffin makes characters move — its content is irrelevant. The pursuit is everything.",
        },
        { type: "heading", content: "The Camera Makes You Complicit" },
        {
          type: "paragraph",
          content:
            "In Rear Window, we watch what Jefferies watches. We can't look away any more than he can. Hitchcock knew cinema makes voyeurs of its audience — and built that into every frame.",
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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Polanski: The Apartment Is the Mind" },
        {
          type: "paragraph",
          content:
            "Repulsion, Rosemary's Baby, The Tenant — three films, one rule: the apartment becomes a projection of its occupant's deteriorating mind. The most claustrophobic space is one you cannot leave.",
        },
        { type: "heading", content: "Fincher: Darkness, Delivered Precisely" },
        {
          type: "paragraph",
          content:
            "Se7en, Fight Club, Zodiac, Gone Girl — each is a study in obsession, built with relentless formal control. Zodiac is a film about the obsession the thriller itself induces.",
        },
        { type: "heading", content: "De Palma: Hitchcock's Heir, Turned Up Loud" },
        {
          type: "paragraph",
          content:
            "Dressed to Kill, Blow Out, Body Double — De Palma takes Hitchcock's tools and pushes them to extremes. He wants you to feel the moral complexity of voyeuristic pleasure.",
        },
        { type: "heading", content: "Aronofsky: Dissolution From the Inside" },
        {
          type: "paragraph",
          content:
            "Pi, Requiem for a Dream, Black Swan — no stable external view, no safe distance. You inhabit the deteriorating mind. His films are experiences of breakdown, not just stories about it.",
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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "The Dolly Zoom: The World Shifts, You Stay Still" },
        {
          type: "paragraph",
          content:
            "Camera moves one way, lens zooms the other — the subject stays the same size while the background rushes. Hitchcock invented it for Vertigo. It's become the genre's shorthand for sudden dread.",
        },
        { type: "heading", content: "Close-Ups That Trap, Not Comfort" },
        {
          type: "paragraph",
          content:
            "In Black Swan, Aronofsky's close-ups lock you inside Nina's narrowing perception. Fincher uses them forensically. The close-up in a thriller produces claustrophobia, not intimacy.",
        },
        { type: "heading", content: "Shadows, Desaturation, and the Noir Inheritance" },
        {
          type: "paragraph",
          content:
            "The thriller borrows from German expressionism and noir: deep shadows, single-source lighting, washed-out colour. Se7en's rain-soaked palette is the film's moral universe made visible.",
        },
        { type: "heading", content: "Mirrors and Windows: The Double Consciousness" },
        {
          type: "paragraph",
          content:
            "Mirrors show the self and its shadow. Windows are screens within screens. In Rear Window, Jefferies's window is both his screen and ours — everyone is watching someone.",
        },
        { type: "heading", content: "POV as Moral Implication" },
        {
          type: "paragraph",
          content:
            "In Psycho, the camera adopts Norman Bates's point of view at key moments. You see what he sees. That makes you an accomplice — and that's the thriller's darkest move.",
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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "When You Can't Trust What You See" },
        {
          type: "paragraph",
          content:
            "In novels, unreliability is in the words. In film, the image itself becomes suspect. You can't trust what you're shown — and the thriller makes that terrifying.",
        },
        { type: "heading", content: "Fight Club: A Narrator Who Can't Be Trusted" },
        {
          type: "paragraph",
          content:
            "The narrator describes events that are structurally impossible. Fincher seeds the unreliability throughout without telegraphing it — rewatch it and everything changes.",
        },
        { type: "heading", content: "Shutter Island: The Delusion Is the Film" },
        {
          type: "paragraph",
          content:
            "The audience inhabits Teddy Daniels's constructed identity from inside. The revelation doesn't just surprise you — it dismantles the reality you've been inhabiting.",
        },
        { type: "heading", content: "The Sixth Sense: You Were Wrong About Everything" },
        {
          type: "paragraph",
          content:
            "Every scene had a different meaning from the one you assigned it. The reveal invites you to re-read the whole film — and find you were constructing the wrong story all along.",
        },
        { type: "heading", content: "American Psycho: Permanently Suspended" },
        {
          type: "paragraph",
          content:
            "Is Bateman actually killing people, or is it all fantasy? The film refuses to decide. You must stay permanently suspended between both readings — that's the point.",
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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Start Here" },
        {
          type: "paragraph",
          content:
            "The psychological thriller has a clear canon. These films deliver the genre's pleasures and advance its possibilities — arranged roughly from accessible to demanding.",
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
        { type: "heading", content: "The Right Order" },
        {
          type: "paragraph",
          content:
            "Start with Rear Window and Psycho. Then Rosemary's Baby and Se7en. Then Fight Club. Then Zodiac — demanding, essential. Mulholland Drive last: it rewards the full genre context.",
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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "The Thriller Wants You Suspicious" },
        {
          type: "paragraph",
          content:
            "Unlike drama, the thriller actively recruits your doubt. When something feels too clear or too reassuring, that's the film hiding something.",
        },
        { type: "heading", content: "Watch for What's Being Concealed" },
        {
          type: "paragraph",
          content:
            "Great thrillers make you look where they want while hiding what they're not ready to show. On a second viewing, those concealment strategies become visible — and fascinating.",
        },
        { type: "heading", content: "The Score Tells You to Fear Before You Know Why" },
        {
          type: "paragraph",
          content:
            "The music rises before the threat arrives. That's the director's instruction to your nervous system. Watch the same scene without sound — you'll see exactly what the image earns on its own.",
        },
        { type: "heading", content: "Second Viewings Are the Real Experience" },
        {
          type: "paragraph",
          content:
            "First viewing: the story. Second viewing: the architecture. You see how information was withheld, how assumptions were planted, how the whole thing was constructed to fool you once.",
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

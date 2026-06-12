import type { Course } from "@/types"

const course: Course = {
  id: "david-lynch",
  title: "David Lynch",
  slug: "david-lynch",
  description:
    "A study of David Lynch — cinema's great surrealist. Lynch's dreamlike images of American darkness and suburban dread created a wholly original cinematic language that influenced every subsequent generation.",
  category: "directors",
  accentColor: "#8b1c1c",
  estimatedHours: 3,
  tags: ["surrealist", "american", "dream-logic", "darkness", "avant-garde"],
  lessons: [
    {
      id: "dlynch-01-biography",
      title: "Biography & Background",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "David Lynch (1946–2025, Missoula, Montana)" },
        {
          type: "paragraph",
          content:
            "Lynch came to filmmaking through painting — he studied at the Pennsylvania Academy of Fine Arts in Philadelphia. He always thought as a painter who discovered cinema, not as a filmmaker. Image first. Story second, if at all.",
        },
        {
          type: "paragraph",
          content:
            "Eraserhead took five years and an AFI grant. Blue Velvet (1986) was his definitive statement. Mulholland Drive (2001) is consistently voted among the greatest films ever made. He died in January 2025, still making things.",
        },
        {
          type: "paragraph",
          content:
            "Twin Peaks: The Return (2017) — 18 hours on Showtime — was widely recognised as among the most ambitious things ever made for a screen. Lynch never stopped pushing.",
        },
        {
          type: "heading",
          content: "Key Career Milestones",
        },
        {
          type: "list",
          items: [
            "1977: Eraserhead — shot over five years, a cult phenomenon",
            "1980: The Elephant Man — first mainstream production, Academy Award nominations",
            "1984: Dune — commercial disaster, later disowned",
            "1986: Blue Velvet — his definitive statement, Kyle MacLachlan and Isabella Rossellini",
            "1990: Wild at Heart — Palme d'Or, Cannes; Twin Peaks begins on ABC",
            "2001: Mulholland Drive — consistently ranked among the greatest films ever made",
            "2017: Twin Peaks: The Return — 18-hour work, Showtime",
            "2025: Dies in Los Angeles, January",
          ],
        },
        {
          type: "quote",
          content:
            "I have a habit of asking myself: what is the idea? And then I fall in love with the idea and I want to do it.",
          author: "David Lynch",
        },
      ],
      quiz: {
        question: "What professional background before filmmaking most shaped Lynch's distinctive visual approach?",
        options: [
          {
            id: "a",
            text: "Industrial design and architecture, which gave him his interest in machine aesthetics",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Fine art study at the Pennsylvania Academy of Fine Arts, where he thought as a painter from the beginning",
            isCorrect: true,
          },
          {
            id: "c",
            text: "A career as a commercial photographer in advertising before moving to narrative film",
            isCorrect: false,
          },
          {
            id: "d",
            text: "Theatre direction in regional American theatre through the 1960s",
            isCorrect: false,
          },
        ],
        explanation:
          "Lynch came to cinema through fine art — he studied painting at the Pennsylvania Academy of Fine Arts and first made films as experimental extensions of his visual art practice. This foundation means he always thought as a painter first: image-making is primary, narrative secondary. His films are conceived as visual experiences before they are stories.",
      },
    },
    {
      id: "dlynch-02-influences",
      title: "Influences & Cinematic Education",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Kafka: Rules That Are Wrong in Ways You Can't Explain" },
        {
          type: "paragraph",
          content:
            "The Trial, The Metamorphosis — inexplicable bureaucratic menace, guilt assumed, authority unreachable. This is Lynch's world too. You know something is wrong. You can't say what.",
        },
        { type: "heading", content: "Francis Bacon: The Body as Horror" },
        {
          type: "paragraph",
          content:
            "Bacon's screaming figures and distorted flesh showed Lynch that the human body itself could be the primary site of existential dread. Eraserhead shares a world with those paintings.",
        },
        { type: "heading", content: "Edward Hopper: The Darkness Inside American Normality" },
        {
          type: "paragraph",
          content:
            "Hopper's diners, motels, and suburban interiors — empty, lit harshly, figures who can't connect. Lynch's suburbs are Hopper's suburbs with the rot revealed.",
        },
        { type: "heading", content: "Roy Orbison: Darkness Inside American Pop" },
        {
          type: "paragraph",
          content:
            "'In Dreams' in Blue Velvet — love songs that become laments from somewhere beyond ordinary reality. Lynch believed American pop music contains a darkness coiled inside its sweetness.",
        },
        { type: "heading", content: "Sunset Boulevard: Hollywood's Dark Mythology" },
        {
          type: "paragraph",
          content:
            "Wilder's film about Hollywood's capacity to grind people to nothing lives directly inside Mulholland Drive. Lynch loves Hollywood mythology — and is haunted by what it costs.",
        },
      ],
      quiz: {
        question: "What does Lynch take from his use of Roy Orbison's music in Blue Velvet?",
        options: [
          {
            id: "a",
            text: "Ironic distance — using nostalgic music to comment critically on its period",
            isCorrect: false,
          },
          {
            id: "b",
            text: "The darkness coiled within American pop sweetness — love songs that become laments from beyond ordinary reality",
            isCorrect: true,
          },
          {
            id: "c",
            text: "A sense of period authenticity appropriate to the film's 1950s-inflected setting",
            isCorrect: false,
          },
          {
            id: "d",
            text: "A connection to the film's working-class American setting and characters",
            isCorrect: false,
          },
        ],
        explanation:
          "Lynch's use of Orbison — 'In Dreams' in Blue Velvet, performed by Dean Stockwell's Ben in a devastating scene — draws on his belief that American pop music contains a darkness within its apparent sweetness. Orbison's voice, in Lynch's films, is not nostalgic but alien: it sounds like a transmission from somewhere else, where love is also grief and the familiar becomes unbearable.",
      },
    },
    {
      id: "dlynch-03-style",
      title: "Visual Style & Techniques",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Sound Is Half the Film" },
        {
          type: "paragraph",
          content:
            "Alan Splet, Lynch's sound designer, was as crucial as any cinematographer. Industrial hum, electrical noise, machinery — these form an ambient emotional field that operates below conscious attention.",
        },
        { type: "heading", content: "The Slow Zoom into Darkness" },
        {
          type: "paragraph",
          content:
            "The camera pushes toward a dark space — grass, a radiator, a diner corner. It's the unconscious as physical location. Something may emerge. You may be drawn in and not return.",
        },
        { type: "heading", content: "Ordinary Space, Pushed Slightly Past Comfort" },
        {
          type: "paragraph",
          content:
            "Lynch's great technique: take something normal and hold one element one beat too long. The fireman in Blue Velvet. The too-red roses. Nothing is overtly wrong — but something is.",
        },
        { type: "heading", content: "Red Curtains, Fire, and the Recurring Symbols" },
        {
          type: "paragraph",
          content:
            "Red velvet curtains signal a threshold between ordinary and extraordinary consciousness. Fire means transformation. The roadhouse is where American darkness surfaces through music. Lynch's symbols work like emotional switches.",
        },
        { type: "heading", content: "Dreams That Contaminate Waking Reality" },
        {
          type: "paragraph",
          content:
            "In Mulholland Drive and Lost Highway, Lynch blurs dream and reality until you can't orient yourself. His point: the dream is continuous with waking life, not separate. And the dream may be more real.",
        },
      ],
      quiz: {
        question: "What is the function of Lynch's slow camera zoom toward darkness — as seen at the opening of Blue Velvet?",
        options: [
          {
            id: "a",
            text: "A stylistic signature identifying the film as belonging to Lynch's visual brand",
            isCorrect: false,
          },
          {
            id: "b",
            text: "The camera as a probe into the unconscious — moving into a darkness from which something may emerge or into which we may be drawn",
            isCorrect: true,
          },
          {
            id: "c",
            text: "A practical technique for introducing characters or locations without conventional scene-setting",
            isCorrect: false,
          },
          {
            id: "d",
            text: "An homage to the zoom techniques of Italian giallo cinema",
            isCorrect: false,
          },
        ],
        explanation:
          "Lynch's slow push toward darkness is one of his most characteristic gestures, and it is always meaningful in the same way: the camera moves toward a space from which something may emerge, or into which we may disappear. It is the unconscious as physical location — the place beneath ordinary surface reality where the real forces operate. The grass in Blue Velvet, the radiator in Eraserhead, the diner darkness in Mulholland Drive are all the same threshold.",
      },
    },
    {
      id: "dlynch-04-films",
      title: "Essential Films",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Eraserhead (1977)" },
        {
          type: "paragraph",
          content:
            "Shot over five years, partly on an AFI grant. Industrial anxiety, paternal terror, distorted bodies in a blasted urban landscape. Every element of Lynch's visual language, fully formed from the start.",
        },
        { type: "heading", content: "Blue Velvet (1986)" },
        {
          type: "paragraph",
          content:
            "A severed ear in a suburban field. Jeffrey Beaumont descends into the darkness beneath American normality. Lynch's definitive statement: beneath the white picket fence, something has been cut off and left to rot.",
        },
        { type: "heading", content: "Mulholland Drive (2001)" },
        {
          type: "paragraph",
          content:
            "Consistently voted among the greatest films ever made. A woman arrives in LA with dreams. The film gradually reveals that what you've been watching may be the dream of the woman she could have been.",
        },
        { type: "heading", content: "The Straight Story (1999)" },
        {
          type: "paragraph",
          content:
            "Lynch's one 'normal' film — a G-rated road movie about an old man on a lawnmower. It reveals: his formal experiments are not arbitrary. They're demanded by his subjects. The exception clarifies the rule.",
        },
      ],
      quiz: {
        question: "What does the severed ear in the grass at the opening of Blue Velvet symbolise?",
        options: [
          {
            id: "a",
            text: "A straightforward narrative clue that sets the murder mystery plot in motion",
            isCorrect: false,
          },
          {
            id: "b",
            text: "The darkness and sexual violence concealed beneath the surface of the American suburban ideal",
            isCorrect: true,
          },
          {
            id: "c",
            text: "A Surrealist image drawn from Lynch's fine art background with no specific symbolic intention",
            isCorrect: false,
          },
          {
            id: "d",
            text: "A reference to Van Gogh's severed ear as a symbol of artistic obsession",
            isCorrect: false,
          },
        ],
        explanation:
          "The severed ear in the grass is Lynch's central image: the hidden horror beneath the immaculate lawn. Blue Velvet opens with roses, a white picket fence, a man watering his garden — American suburban normality at its most idealised. Then the camera descends into the grass and finds the ear. The movement is the film's entire argument: beneath the surface of American normality lies something that has been cut off and left to rot.",
      },
    },
    {
      id: "dlynch-05-themes",
      title: "Themes & Obsessions",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "The Horror Beneath the Perfect Lawn" },
        {
          type: "paragraph",
          content:
            "Lynch loves the American suburban ideal — genuinely. The white picket fence is beautiful to him. That's what makes the darkness beneath it so disturbing. He's not cynical. He's heartbroken.",
        },
        { type: "heading", content: "Dreams Are More Real Than Waking Life" },
        {
          type: "paragraph",
          content:
            "Mulholland Drive's structure depends on this inversion. What we experience as dream is more real than what we experience as waking life. Lynch isn't using dream sequences — he's making you live in one.",
        },
        { type: "heading", content: "Identity Is a Performance That Can Be Interrupted" },
        {
          type: "paragraph",
          content:
            "In Lost Highway and Mulholland Drive, characters undergo identity transformations without explanation. Who you are isn't stable. It's a story that can be replaced by a different story.",
        },
        { type: "heading", content: "Innocence and Corruption: Inseparable" },
        {
          type: "paragraph",
          content:
            "Sandy and Dorothy in Blue Velvet, the two women in Mulholland Drive — innocence requires corruption to define itself, and may conceal corruption within. Lynch keeps showing you the same thing.",
        },
        { type: "heading", content: "The Feeling Is the Meaning" },
        {
          type: "paragraph",
          content:
            "Lynch refused to explain his films. He believed verbal explanation reduces feeling to information. The dread, the grief, the wonder — that's the meaning. Don't explain. Generate.",
        },
      ],
      quiz: {
        question: "How does Lynch treat the relationship between the American suburban ideal and the darkness beneath it?",
        options: [
          {
            id: "a",
            text: "With cynicism — the ideal is a deliberate lie constructed to conceal exploitation",
            isCorrect: false,
          },
          {
            id: "b",
            text: "With genuine love for the ideal alongside unflinching exposure of the darkness, making the contrast more disturbing",
            isCorrect: true,
          },
          {
            id: "c",
            text: "As a purely aesthetic contrast — the visual beauty of the suburb against the visual ugliness of its underworld",
            isCorrect: false,
          },
          {
            id: "d",
            text: "With nostalgia for an America that existed before its corruption began",
            isCorrect: false,
          },
        ],
        explanation:
          "Lynch's treatment of the American suburban ideal is not satirical or cynical — he seems genuinely to love it, to find the white picket fence and the rose garden genuinely beautiful. This is what makes the darkness beneath it so disturbing. If he were cynical, the horror would be predictable. Because he loves the surface, the discovery of what it conceals carries the force of genuine betrayal.",
      },
    },
    {
      id: "dlynch-06-learn",
      title: "What You Can Learn",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "The Technique Is Simple" },
        {
          type: "paragraph",
          content:
            "Lynch's advice: sit quietly for 20 minutes before working. Let surface noise settle. The best ideas don't arrive under pressure — they arrive in the space you make for them.",
        },
        { type: "heading", content: "Study the Opening of Blue Velvet" },
        {
          type: "paragraph",
          content:
            "Roses, a white picket fence, a smiling fireman, a dog. Then the man falls and the camera descends into the grass. Nothing has changed — except the direction of attention. Watch it and count what makes you uneasy.",
        },
        { type: "heading", content: "Push One Element Past Comfort" },
        {
          type: "paragraph",
          content:
            "The fireman is held one beat too long. The roses are slightly too red. Lynch's core technique: take something ordinary, push one element slightly past comfort, then hold it there. Nothing overtly wrong. Something wrong.",
        },
        { type: "heading", content: "Sound Is Half the Film" },
        {
          type: "paragraph",
          content:
            "Before you commit to an image, consider what accompanies it acoustically. The industrial hum in Eraserhead isn't incidental — it's the film's primary emotional instrument. What does your scene sound like?",
        },
      ],
      reflection: {
        prompt:
          "Watch the opening five minutes of Blue Velvet and list every element that makes you slightly uneasy — without anything overtly wrong having happened. Then take a piece of your own work — a photograph, a scene, a design — and identify one ordinary element you could push slightly past comfort. What would that change? Lynch's technique is not surrealism but precision: the ordinary, held one beat too long.",
      },
    },
  ],
}

export default course

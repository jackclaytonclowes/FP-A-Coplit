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
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "David Lynch (1946–2025, Missoula, Montana)" },
        {
          type: "paragraph",
          content:
            "David Lynch was born in 1946 in Missoula, Montana, and grew up across multiple American towns as his father moved for work. He came to filmmaking through fine art — he studied at the Pennsylvania Academy of Fine Arts in Philadelphia, where he first made experimental moving images. The art school grounding was decisive: Lynch always thought as a painter who had discovered cinema, not as a filmmaker.",
        },
        {
          type: "paragraph",
          content:
            "Eraserhead, shot over five years in the early 1970s and partly funded by the AFI, established the core of his visual language: industrial soundscapes, distorted bodies, domestic horror, the uncanny beneath the ordinary. The Elephant Man (1980) was his first mainstream film. Dune (1984) was a commercial and critical disaster he later disowned. Blue Velvet (1986) was his definitive statement.",
        },
        {
          type: "paragraph",
          content:
            "What followed was a career of radical formal experiment: Wild at Heart won the Palme d'Or at Cannes in 1990. Twin Peaks (TV, 1990–91) brought his sensibility to a mass audience. Lost Highway (1997), Mulholland Drive (2001) — consistently voted among the greatest films ever made — and Inland Empire (2006) pushed further into dream logic. Twin Peaks: The Return (2017), an 18-hour work in TV format, was widely recognised as among the most ambitious things ever made for a screen. He died in January 2025.",
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
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Franz Kafka: Inexplicable Bureaucratic Dread" },
        {
          type: "paragraph",
          content:
            "Kafka's novels — The Trial, The Castle, The Metamorphosis — gave Lynch a model for a world in which the rules are wrong in ways that cannot be explained or appealed. The inexplicable bureaucratic menace, the protagonist who cannot understand the forces operating on him, the transformation that happens without cause: all appear in Lynch.",
        },
        { type: "heading", content: "Francis Bacon: Distorted Flesh and the Body as Horror" },
        {
          type: "paragraph",
          content:
            "Bacon's paintings — screaming figures, distorted flesh, bodies caught in their own biological horror — were a direct visual influence on Lynch's early work. Eraserhead's imagery of distorted bodies and Bacon's screaming popes share a world. Lynch absorbed from Bacon the idea that the human body could be the primary site of existential horror.",
        },
        { type: "heading", content: "Edward Hopper: American Alienation and Isolation" },
        {
          type: "paragraph",
          content:
            "Hopper's paintings of American diners, motels, and suburban interiors — empty, lit harshly, inhabited by figures who cannot connect — are the visual world of Lynch's America. The dark underside of the sunny American suburban ideal is a Hopper inheritance. Lynch's suburbs are Hopper's suburbs with the rot revealed.",
        },
        { type: "heading", content: "Roy Orbison: Darkness Within American Pop Music" },
        {
          type: "paragraph",
          content:
            "Lynch's use of American popular music — Orbison's 'In Dreams' in Blue Velvet, the roadhouse performances in Twin Peaks — draws on his conviction that American pop music contains a darkness coiled within its sweetness. Orbison's voice, in Lynch's use, becomes unbearable: love songs that are also laments from somewhere beyond ordinary reality.",
        },
        { type: "heading", content: "Billy Wilder's Sunset Boulevard: Hollywood's Dark Mythology" },
        {
          type: "paragraph",
          content:
            "Sunset Boulevard's story of a faded Hollywood star and Hollywood's capacity for self-mythologisation is directly present in Mulholland Drive — Lynch's dream of Hollywood as a place where identity dissolves and the film industry's machinery grinds people to nothing. Lynch loves and is haunted by Hollywood mythology.",
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
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "Industrial Sound Design as Primary Emotional Instrument" },
        {
          type: "paragraph",
          content:
            "Lynch's sound designer Alan Splet was as crucial a collaborator as any cinematographer. In Eraserhead and subsequent films, industrial sound — hum, hiss, machinery, electrical noise — forms an ambient emotional field that operates beneath conscious attention. Lynch considers sound the more important half of film; his films are as much heard as seen.",
        },
        { type: "heading", content: "The Slow Zoom into Darkness" },
        {
          type: "paragraph",
          content:
            "A characteristic Lynch move: a slow zoom or camera push toward a dark space — the grass at the beginning of Blue Velvet, the radiator in Eraserhead, the darkness behind the diner in Mulholland Drive. The camera as probe into the unconscious: moving slowly into a darkness from which something may emerge, or into which we may be drawn and not return.",
        },
        { type: "heading", content: "Ordinary Space Concealing Extraordinary Menace" },
        {
          type: "paragraph",
          content:
            "Lynch's great subject is the American suburban ideal — white picket fences, manicured lawns, cheerful diners — and the horror concealed beneath it. He achieves this not by showing the horror beside the normality but by pushing the normality itself slightly past comfort. The perfectly normal neighbourhood in Blue Velvet is wrong in a way that is hard to locate precisely.",
        },
        { type: "heading", content: "Red Curtains, Fire, and Recurring Symbols" },
        {
          type: "paragraph",
          content:
            "Lynch's visual language includes recurring symbols that function as emotional signals rather than narrative information: red velvet curtains (the threshold between ordinary and extraordinary consciousness), fire (transformation, the unconscious, the dangerous), the roadhouse (the place where American darkness surfaces through music), the diner (American normality as facade).",
        },
        { type: "heading", content: "Dream Sequences That Contaminate Waking Reality" },
        {
          type: "paragraph",
          content:
            "In Mulholland Drive and Lost Highway, Lynch deliberately blurs the boundary between dream and reality until the viewer cannot orient themselves. This is not a narrative trick but a statement about the nature of consciousness: the dream is not separate from the waking world but continuous with it, and the waking world may be the less real of the two.",
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
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "Eraserhead (1977)" },
        {
          type: "paragraph",
          content:
            "Shot over five years on an AFI grant and personal funds, Eraserhead is Lynch's most purely personal film — a nightmare of industrial anxiety, paternal terror, and bodily horror set in a blasted urban landscape. It established every element of his visual language: the industrial soundscape, the distorted body, the domestic space as horror, the dream that contaminates reality.",
        },
        { type: "heading", content: "Blue Velvet (1986)" },
        {
          type: "paragraph",
          content:
            "Lynch's definitive statement: a young man finds a severed ear in a suburban field and descends into the darkness beneath American normality. Jeffrey Beaumont's discovery of Frank Booth's world is the discovery of the sexual violence, criminal pathology, and existential horror concealed beneath the white picket fence. The film that established Lynch's central theme once and for all.",
        },
        { type: "heading", content: "Mulholland Drive (2001)" },
        {
          type: "paragraph",
          content:
            "Consistently voted among the greatest films ever made, Mulholland Drive is Lynch's investigation of Hollywood mythology, identity, and the dream as more real than waking consciousness. A woman arrives in Los Angeles with dreams; the film gradually reveals that what we have been watching may be the dream of the woman she could have been.",
        },
        { type: "heading", content: "The Straight Story (1999)" },
        {
          type: "paragraph",
          content:
            "Lynch's one 'normal' film — a G-rated road movie about an old man who drives a lawnmower across Iowa and Wisconsin to visit his dying brother — is as instructive as any of his stranger works. Made within conventional narrative form, it reveals that Lynch's formal experiments are not arbitrary but are demanded by his subjects. The exception clarifies the rule.",
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
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "Darkness Concealed Beneath American Suburban Normality" },
        {
          type: "paragraph",
          content:
            "Lynch's fundamental subject is the gap between the American ideal — the clean suburb, the cheerful diner, the happy family — and the reality of violence, sexuality, and psychological damage that the ideal conceals. He is not cynical about the ideal: he seems genuinely to love it, and to find it genuinely beautiful. This makes the darkness beneath it more disturbing.",
        },
        { type: "heading", content: "Dreams as More Real Than Waking Consciousness" },
        {
          type: "paragraph",
          content:
            "Lynch's films increasingly treat the dream not as escapism but as a more accurate representation of reality than the waking world's conventional surfaces. Mulholland Drive's structure depends on this inversion: what we experience as dream is more real than what we experience as waking life.",
        },
        { type: "heading", content: "Identity as Fluid and Unstable" },
        {
          type: "paragraph",
          content:
            "Lynch's characters — particularly in Lost Highway and Mulholland Drive — undergo identity transformations that have no psychological or narrative explanation. Identity is not stable in Lynch's world; it is a performance that can be interrupted, replaced, or revealed to have been a fiction from the beginning.",
        },
        { type: "heading", content: "Duality: Innocence and Corruption" },
        {
          type: "paragraph",
          content:
            "Sandy and Dorothy in Blue Velvet, the two women in Mulholland Drive, the innocent detective and the corrupt world in Twin Peaks: Lynch returns obsessively to the opposition of innocence and corruption, and to the suggestion that the two are not separable — that innocence requires corruption to define itself, and may conceal corruption within.",
        },
        { type: "heading", content: "The Inexplicable as the Deepest Level of Truth" },
        {
          type: "paragraph",
          content:
            "Lynch resists rational explanation. When asked to explain his films' meanings, he declines: he believes the feeling produced by a work is its meaning, and that verbal explanation reduces feeling to information. His films end in states of inexplicable emotion — dread, grief, wonder — that are, he insists, more true than any interpretation.",
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
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "The Technique Is Simple" },
        {
          type: "paragraph",
          content:
            "Lynch's advice was to sit quietly for 20 minutes before working — to allow the surface noise of consciousness to settle before attempting to reach the ideas that live beneath it. This is not mysticism but practical creative methodology: the best ideas do not arrive under pressure.",
        },
        { type: "heading", content: "The Opening of Blue Velvet" },
        {
          type: "paragraph",
          content:
            "Watch the opening five minutes of Blue Velvet. You will see: roses in sunlight, a white picket fence, a smiling fireman on a passing truck, a man watering his garden, a woman watching TV, a dog playing. Then the man falls, and the camera descends into the grass to find the ear. Notice how quickly the normal world becomes wrong. Nothing has changed except the direction of attention.",
        },
        { type: "heading", content: "Push One Element Past Comfort" },
        {
          type: "paragraph",
          content:
            "Lynch's core technique is simple: take something ordinary and push one element slightly past the point of comfort, then hold it there. The fireman in Blue Velvet's opening is held one beat too long. The roses are slightly too red. The camera descends slightly further into the grass than any establishing shot needs to go. Nothing is overtly wrong — but something is wrong.",
        },
        { type: "heading", content: "Sound Is Half the Film" },
        {
          type: "paragraph",
          content:
            "Lynch's most transferable lesson for any discipline is his insistence that sound is half the film — or, in his later work, more than half. Before you commit to an image, consider what accompanies it acoustically. The industrial hum beneath Eraserhead is not incidental; it is the film's primary emotional instrument. Ask of any scene: what does this sound like, and what should it sound like?",
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

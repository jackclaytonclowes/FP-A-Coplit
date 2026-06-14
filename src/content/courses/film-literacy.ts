import type { Course } from "@/types"

const course: Course = {
  id: "film-literacy",
  title: "Film Literacy",
  slug: "film-literacy",
  description:
    "The foundations of reading and understanding cinema. Learn the visual language of film — how shots, editing, sound and narrative structure create meaning.",
  category: "film",
  accentColor: "#c83020",
  coverImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Technician_35mm_projector.jpg/1280px-Technician_35mm_projector.jpg",
  estimatedHours: 4,
  tags: ["foundations", "cinematography", "editing", "narrative", "visual-language"],
  lessons: [
    {
      id: "fl-01-shot",
      title: "The Shot: Cinema's Basic Unit",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "What Is a Shot?" },
        {
          type: "paragraph",
          content:
            "A shot is everything the camera captures between start and stop. Film is just shots, cut together — understand one shot and you understand the language.",
        },
        { type: "heading", content: "Shot Sizes Do Emotional Work" },
        {
          type: "paragraph",
          content:
            "Close-up means intimacy. Wide shot means insignificance. The extreme close-up — an eye, a hand — creates dread or significance depending on context.",
        },
        {
          type: "paragraph",
          content:
            "The point-of-view shot puts you inside a character's head. Hitchcock used it to make audiences complicit — in Rear Window, you watch what Jefferies watches, and you can't stop.",
        },
        { type: "heading", content: "Framing Is a Meaning Machine" },
        {
          type: "paragraph",
          content:
            "Every framing choice — where the subject sits, how much empty space surrounds them — is a meaning-making decision. Negative space can express loneliness. Tight headroom expresses oppression.",
        },
        { type: "heading", content: "Depth of Field: Who Controls Your Eyes?" },
        {
          type: "paragraph",
          content:
            "Shallow focus isolates your subject. Deep focus — as in Citizen Kane — keeps everything sharp, letting the audience choose where to look. One locks your attention; the other trusts you.",
        },
        {
          type: "image",
          content: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Technician_35mm_projector.jpg/1280px-Technician_35mm_projector.jpg",
          caption: "A film projectionist at work: the moment where cinema's craft — its shots, cuts, and decisions — meets the audience",
          alt: "Film technician operating a 35mm film projector in a projection booth",
        },
      ],
      quiz: {
        question: "What is the primary function of the point-of-view shot?",
        options: [
          {
            id: "a",
            text: "To provide a wider view of the environment than standard medium shots allow",
            isCorrect: false,
          },
          {
            id: "b",
            text: "To place the audience inside a character's perspective, making their experience directly our own",
            isCorrect: true,
          },
          {
            id: "c",
            text: "To signal to the audience that a character is about to make an important decision",
            isCorrect: false,
          },
          {
            id: "d",
            text: "To create the sensation of movement through tracking or handheld camera motion",
            isCorrect: false,
          },
        ],
        explanation:
          "The point-of-view shot shows what a character sees, from where they see it. For the duration of the shot, we inhabit their consciousness — we see their world, not a view of them in their world. Hitchcock used this to make audiences complicit: in Rear Window, we watch what Jefferies watches through his window, and we cannot stop watching any more than he can. Identification, implication, and intimacy are all products of the POV shot.",
      },
    },
    {
      id: "fl-02-editing",
      title: "Editing and Time",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Editing Controls Time Itself" },
        {
          type: "paragraph",
          content:
            "Film can compress days into seconds or stretch one second into minutes. The cut — the moment one shot becomes another — is where meaning is made.",
        },
        { type: "heading", content: "Continuity Editing: The Art of Invisibility" },
        {
          type: "paragraph",
          content:
            "Hollywood's dominant style hides the cut. Matching action, the 180-degree rule, eyeline matching — all designed to make you forget you're watching edited footage.",
        },
        { type: "heading", content: "The Jump Cut: Disorientation as Statement" },
        {
          type: "paragraph",
          content:
            "Godard's jump cuts in Breathless (1960) looked like errors. They were declarations — disorientation is a valid emotional state to produce.",
        },
        { type: "heading", content: "Kuleshov and the Match Cut" },
        {
          type: "paragraph",
          content:
            "Kubrick cut from a prehistoric bone to a space station — four million years in one frame. Kuleshov proved the same face reads as hunger, grief, or joy depending on what precedes it. Meaning lives in the edit, not the image.",
        },
        { type: "heading", content: "Montage: Collision as Idea" },
        {
          type: "paragraph",
          content:
            "Eisenstein didn't edit for flow — he edited for collision. Two images crash together to produce a third concept. Cross-cutting asks: which action will end first?",
        },
      ],
      quiz: {
        question: "What does the Kuleshov effect demonstrate about how film meaning is created?",
        options: [
          {
            id: "a",
            text: "That actors need not convey emotion — the audience will supply it from context",
            isCorrect: false,
          },
          {
            id: "b",
            text: "That meaning is made in the editing — the same image reads differently depending on what surrounds it",
            isCorrect: true,
          },
          {
            id: "c",
            text: "That Soviet cinema was superior to Hollywood cinema in its understanding of audience psychology",
            isCorrect: false,
          },
          {
            id: "d",
            text: "That continuity editing is the most powerful tool for creating emotional response in audiences",
            isCorrect: false,
          },
        ],
        explanation:
          "Kuleshov intercut the same neutral close-up of an actor's face with three different images: a bowl of soup, a dead woman, a child playing. Audiences consistently read different emotions on the identical face depending on context — hunger, grief, joy. This proved that meaning in film is not contained within individual images but is created by the relationship between images. Editing is the construction of meaning, not merely the assembly of footage.",
      },
    },
    {
      id: "fl-03-sound",
      title: "Sound, Silence and Score",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Diegetic vs. Non-Diegetic: Two Worlds of Sound" },
        {
          type: "paragraph",
          content:
            "Diegetic sound lives inside the film — characters can hear it. Non-diegetic sound is for your ears only: the score, the narrator. The distinction defines what's real and what's the filmmaker talking directly to you.",
        },
        { type: "heading", content: "Silence Is a Weapon" },
        {
          type: "paragraph",
          content:
            "No Country for Old Men strips out the score entirely. Without music telling you how to feel, you're alone with what's happening — and that's far more frightening than any cue.",
        },
        { type: "heading", content: "Score: Amplifier or Manipulator?" },
        {
          type: "paragraph",
          content:
            "At its worst, score tells you what to feel when the image hasn't earned it. At its best — Herrmann's strings in Psycho, Greenwood's noise in There Will Be Blood — it adds a dimension neither image nor music could produce alone.",
        },
        { type: "heading", content: "Sound Design Builds Worlds" },
        {
          type: "paragraph",
          content:
            "Sound design isn't effects — it's acoustic reality. Lynch's Alan Splet, Murch on Apocalypse Now, Lopatin on Uncut Gems all use sound as a primary tool of meaning. The texture of a space tells you how to inhabit it.",
        },
        { type: "heading", content: "Music Against Image Creates a Third Thing" },
        {
          type: "paragraph",
          content:
            "Apocalypse Now opens with 'The End' over napalm. A Clockwork Orange uses 'Singin' in the Rain' during a beating. When music contradicts image, the collision creates irony, horror, or dislocation that neither element produces alone.",
        },
      ],
      quiz: {
        question: "Why does No Country for Old Men's near-absence of score create anxiety rather than simply silence?",
        options: [
          {
            id: "a",
            text: "Because the absence of music is unusual enough to signal something is wrong",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Because score is the signal that mediates audience experience — removing it leaves the audience alone with unmediated reality",
            isCorrect: true,
          },
          {
            id: "c",
            text: "Because dialogue carries more weight when it is not competing with musical accompaniment",
            isCorrect: false,
          },
          {
            id: "d",
            text: "Because the sound design is more audible without a score covering the ambient sonic environment",
            isCorrect: false,
          },
        ],
        explanation:
          "Film score is a mediating signal: it tells the audience how to feel and assures them that a filmmaker is guiding their experience. When the Coens withhold this signal in No Country for Old Men, they remove the mediation between audience and event. There is no reassuring commentary on what is happening. The audience must encounter what is on screen without the buffer of emotional guidance — and this direct encounter is far more frightening than any music could achieve.",
      },
    },
    {
      id: "fl-04-narrative",
      title: "Narrative Structure and Genre",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Three Acts: Not a Formula, a Description" },
        {
          type: "paragraph",
          content:
            "Setup, confrontation, resolution — it's not Hollywood law, it's how desire works. Something is wanted. Something blocks it. Something happens.",
        },
        { type: "heading", content: "Non-Linear Narrative Plays With Your Assumptions" },
        {
          type: "paragraph",
          content:
            "Pulp Fiction, Memento, Rashomon — all start mid-story or scramble time. Where you begin tells you what the film thinks is important.",
        },
        { type: "heading", content: "Unreliable Narrators Make You Work" },
        {
          type: "paragraph",
          content:
            "When the storyteller can't be trusted, you have to read between the lines. The unreliable narrator turns passive watching into active suspicion.",
        },
        { type: "heading", content: "Genre Is a Contract" },
        {
          type: "paragraph",
          content:
            "Horror promises dread. Rom-com promises reunion. The contract gives you permission to feel. Breaking the contract — when the filmmaker earns it — produces discovery.",
        },
        { type: "heading", content: "Genre: Tools, Not Cages" },
        {
          type: "paragraph",
          content:
            "Get Out uses horror to deliver social critique. No Country for Old Men is a thriller without a resolution. Parasite starts as comedy and ends as tragedy. Genre is a set of tools — not a limit.",
        },
      ],
      quiz: {
        question: "What is the function of genre conventions in cinema, beyond simply categorising films?",
        options: [
          {
            id: "a",
            text: "To help studios market films to appropriate demographic audiences",
            isCorrect: false,
          },
          {
            id: "b",
            text: "They form a contract with the audience that sets expectations — which can be fulfilled or subverted to create meaning",
            isCorrect: true,
          },
          {
            id: "c",
            text: "To give directors a template that reduces the uncertainty of creative decisions",
            isCorrect: false,
          },
          {
            id: "d",
            text: "To allow audiences to predict outcomes, reducing anxiety and increasing enjoyment",
            isCorrect: false,
          },
        ],
        explanation:
          "Genre conventions are a contract: the filmmaker signals the kind of experience being offered, and the audience agrees to engage on those terms. This contract gives the audience permission to feel — they know what emotions they have signed up for. But the most interesting films use genre strategically: fulfilling some conventions to establish trust, then violating others to produce surprise, discovery, or discomfort that exceeds what the genre conventionally delivers.",
      },
    },
    {
      id: "fl-05-cinematography",
      title: "Cinematography and Light",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Aspect Ratio Shapes How You Feel" },
        {
          type: "paragraph",
          content:
            "The Academy ratio is nearly square — intimate, containing. Widescreen stretches the world into landscape. Eggers and Lanthimos pick unusual ratios on purpose, for specific psychological effects.",
        },
        { type: "heading", content: "Warm vs. Cool: Cinema's Emotional Shorthand" },
        {
          type: "paragraph",
          content:
            "Warm amber light signals safety and memory. Cool blue-white signals threat and alienation. Roger Deakins uses this consciously — you feel it before you name it.",
        },
        { type: "heading", content: "Three-Point Lighting: The Standard and Its Departures" },
        {
          type: "paragraph",
          content:
            "Key, fill, back — the standard setup. Remove the fill and you get stark chiaroscuro. Use only practicals and you get raw presence. Every departure from the standard is a choice.",
        },
        { type: "heading", content: "Natural Light Has a Quality Money Can't Buy" },
        {
          type: "paragraph",
          content:
            "Late-afternoon sun raking across a face. Flat grey overcast. Candlelight flicker. Malick, Varda, Eggers chase something artificial light can't replicate.",
        },
        { type: "heading", content: "The Cinematographer Is an Author" },
        {
          type: "paragraph",
          content:
            "Deakins and Villeneuve. Gordon Willis and Coppola. Storaro and Bertolucci. The director imagines; the cinematographer makes it real. These are creative partnerships, not service relationships.",
        },
        {
          type: "image",
          content: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/35mm_movie_negative.jpg/1280px-35mm_movie_negative.jpg",
          caption: "35mm film: the material that cinematographers shaped by controlling light, colour, and grain across every frame",
          alt: "35mm movie negative showing the film frames and sprocket holes",
        },
      ],
      quiz: {
        question: "What does warm versus cool colour temperature communicate as an emotional code in film?",
        options: [
          {
            id: "a",
            text: "Warm temperature indicates natural light; cool temperature indicates artificial studio lighting",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Warm temperature signals intimacy, comfort, and the past; cool temperature signals alienation, threat, and modernity",
            isCorrect: true,
          },
          {
            id: "c",
            text: "Warm temperature is used for exteriors; cool temperature for interiors",
            isCorrect: false,
          },
          {
            id: "d",
            text: "Warm temperature indicates a film's positive resolution; cool temperature indicates tragedy",
            isCorrect: false,
          },
        ],
        explanation:
          "Colour temperature is one of cinema's most consistent emotional codes. Warm light — amber, orange, gold — signals safety, intimacy, memory, and belonging. Cool light — blue, grey, white — signals alienation, threat, clinical detachment, and the modern. This is partly physiological (sunlight is warm; cold environments are cool) and partly cultural convention reinforced by decades of film. Cinematographers use it deliberately as an emotional shorthand that operates before conscious analysis.",
      },
    },
    {
      id: "fl-06-watching",
      title: "How to Watch Films Actively",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Most People Watch Films Wrong" },
        {
          type: "paragraph",
          content:
            "Passive watching lets the film happen to you. Active watching means feeling and analysing simultaneously — noticing the choices that produce your reactions.",
        },
        { type: "heading", content: "Keep a Notebook" },
        {
          type: "paragraph",
          content:
            "When something moves or disturbs you, write down what the film was doing at that exact moment. That note is more valuable than any analysis written later.",
        },
        { type: "heading", content: "Pause and Rewind Are Your Friends" },
        {
          type: "paragraph",
          content:
            "Freeze a frame and read it like a photograph. Rewind a scene and watch only the background. Films are layered — the foreground is just the top layer.",
        },
        { type: "heading", content: "Watch Five Minutes Without Sound" },
        {
          type: "paragraph",
          content:
            "Kill the audio and watch the image alone. Then put it back. Notice what the score was adding — and what it was overriding.",
        },
        { type: "heading", content: "Notice What You Don't Notice" },
        {
          type: "paragraph",
          content:
            "Films direct your attention on purpose. The best craft hides at the edges — the subtle camera drift, the recurring background figure, the colour shift across a film. Active watching lives in the margins.",
        },
        { type: "heading", content: "Ask How Before Whether" },
        {
          type: "paragraph",
          content:
            "Skip 'did you like it?' and go straight to 'how did it make you feel that?' You learn more from a film you can explain than one you merely enjoyed.",
        },
      ],
      reflection: {
        prompt:
          "Choose a film you have already seen. Watch it again, but this time with a notebook, pausing and rewinding freely. At least once, watch five minutes without sound. Write down: three moments where you were moved or disturbed and what the film was formally doing at that moment; one thing you notice now that you did not notice on first viewing; one question the film raises that you cannot yet answer. What changes when you watch actively rather than passively?",
      },
    },
  ],
}

export default course

import type { Course } from "@/types"

const course: Course = {
  id: "film-literacy",
  title: "Film Literacy",
  slug: "film-literacy",
  description:
    "The foundations of reading and understanding cinema. Learn the visual language of film — how shots, editing, sound and narrative structure create meaning.",
  category: "film",
  accentColor: "#c83020",
  estimatedHours: 4,
  tags: ["foundations", "cinematography", "editing", "narrative", "visual-language"],
  lessons: [
    {
      id: "fl-01-shot",
      title: "The Shot: Cinema's Basic Unit",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "What Is a Shot?" },
        {
          type: "paragraph",
          content:
            "A shot is a single uninterrupted recording: everything the camera captures between the moment it begins and the moment it stops. Film is constructed from sequences of shots edited together. Understanding individual shots — what they are, what they do, why a filmmaker chooses one over another — is the foundation of visual literacy.",
        },
        { type: "heading", content: "Shot Sizes and Their Functions" },
        {
          type: "paragraph",
          content:
            "The close-up places us in emotional intimacy with a subject — we cannot maintain distance from a face filling the frame. The medium shot shows a character in relation to their immediate space, balancing person and environment. The wide shot gives us scale and context: the character becomes a figure in a world larger than themselves. The extreme close-up — a detail, an eye, a hand — creates either dread or significance depending on context.",
        },
        {
          type: "paragraph",
          content:
            "The point-of-view shot shows us what a character sees, making their perspective our own. It is the most intimate shot in cinema: for its duration, we inhabit another consciousness. Directors use POV to create identification, to implicate the audience in a character's desire or fear, or — in Hitchcock — to make us complicit in something we might prefer to watch from outside.",
        },
        { type: "heading", content: "Framing: What the Camera Includes and Excludes" },
        {
          type: "paragraph",
          content:
            "Framing is the decision about what to include within the rectangle of the image and what to leave outside it. The rule of thirds places subjects off-centre for dynamic tension. Negative space — the empty part of a frame — can express loneliness, threat, or imbalance. Headroom — the space above a subject's head — communicates confidence or oppression. Every framing decision is a meaning-making choice.",
        },
        { type: "heading", content: "Depth of Field" },
        {
          type: "paragraph",
          content:
            "Depth of field describes how much of the image — foreground, middle ground, background — is in sharp focus simultaneously. Shallow depth of field (common in portrait photography) separates the subject from background, directing attention and creating intimacy or isolation. Deep focus (as in Orson Welles' Citizen Kane) keeps everything sharp, allowing the audience to choose where to look — and the filmmaker to construct meaning through simultaneous action in multiple planes.",
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
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "What Editing Does" },
        {
          type: "paragraph",
          content:
            "Editing is cinema's most distinctive power: the ability to control time. Film can compress days into minutes, expand a second into minutes, move between locations simultaneously, or juxtapose images that have no spatial or temporal connection. The cut — the moment of transition from one shot to the next — is where meaning is made.",
        },
        { type: "heading", content: "Continuity Editing: The Invisible Cut" },
        {
          type: "paragraph",
          content:
            "Continuity editing is the dominant convention of commercial cinema: cuts are made to be invisible, to maintain the illusion of continuous space and time. Matching action (cutting on a movement as it continues across shots), the 180-degree rule (keeping the camera on one side of an axis to preserve spatial orientation), and eyeline matching (cutting from a character looking to what they see) are the tools of this system.",
        },
        { type: "heading", content: "The Jump Cut and Disorientation" },
        {
          type: "paragraph",
          content:
            "The jump cut removes a section from the middle of a continuous shot, creating a sudden lurch in time. Jean-Luc Godard's use of jump cuts in Breathless (1960) was initially perceived as an error; it was in fact a deliberate violation of continuity, announcing that the film's logic was different from Hollywood's — and that disorientation was a valid emotional state to produce in an audience.",
        },
        { type: "heading", content: "The Match Cut and the Kuleshov Effect" },
        {
          type: "paragraph",
          content:
            "The match cut connects two images through visual rhyme: Kubrick's cut from the prehistoric bone to the space station in 2001: A Space Odyssey compresses four million years in one frame. The Kuleshov effect — demonstrated by Soviet filmmaker Lev Kuleshov in the 1920s — shows that the same shot of a face reads differently depending on what precedes it: the identical neutral expression appears to show hunger, grief, or desire depending on context. Meaning is made in the editing, not the individual shot.",
        },
        { type: "heading", content: "Montage and Cross-Cutting" },
        {
          type: "paragraph",
          content:
            "Eisenstein's intellectual montage assembled shots not for narrative continuity but for dialectical meaning: the collision of two images producing a third concept not present in either. Cross-cutting intercuts between simultaneous events in different locations, creating tension through the implicit question of which action will conclude first.",
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
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "Diegetic and Non-Diegetic Sound" },
        {
          type: "paragraph",
          content:
            "Diegetic sound exists within the world of the film: the characters can hear it. A car door slamming, a conversation, a song playing on a radio in the scene — all diegetic. Non-diegetic sound exists outside the film's world: only the audience hears it. The orchestral score that swells as the hero runs, the narrator's voice — non-diegetic. This distinction matters because it defines what is real within the film and what is the filmmaker speaking directly to the audience.",
        },
        { type: "heading", content: "Silence as a Weapon" },
        {
          type: "paragraph",
          content:
            "No Country for Old Men (2007) is one of the most notable recent films for its near-absence of score. The Coen Brothers withhold the non-diegetic safety signal that most films provide — the music that tells you how to feel — and force the audience into a state of unmediated anxiety. Silence means nothing is mediating your experience; you are alone with what is happening.",
        },
        { type: "heading", content: "The Function of Score" },
        {
          type: "paragraph",
          content:
            "Film score operates on a spectrum from manipulation to emotional amplification. At its worst, score tells audiences what to feel when the image has not earned it. At its best — Bernard Herrmann's strings in Psycho, Jonny Greenwood's score in There Will Be Blood — it amplifies and extends what the image has already achieved, adding an emotional dimension that neither image nor music could produce alone.",
        },
        { type: "heading", content: "Sound Design as World-Building" },
        {
          type: "paragraph",
          content:
            "Sound design constructs the acoustic environment of the film's world: the specific quality of an industrial space, the texture of silence in a desert, the ambient noise of a city at 3am. This is not sound effects — it is the creation of an acoustic reality that the audience inhabits. Lynch's collaborator Alan Splet, Apocalypse Now's sound designer Walter Murch, and the Safdie Brothers' Daniel Lopatin all use sound design as a primary tool of meaning-making.",
        },
        { type: "heading", content: "Music Against Image" },
        {
          type: "paragraph",
          content:
            "The most powerful uses of film music are often counterintuitive: music that contradicts the image rather than reinforcing it. Apocalypse Now opens with The Doors' 'The End' over images of napalm destroying a jungle. A Clockwork Orange uses 'Singin' in the Rain' as Alex beats a man. The contrast between image and music creates a third meaning — irony, horror, or dislocation — that neither element produces alone.",
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
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Three-Act Structure and Its Function" },
        {
          type: "paragraph",
          content:
            "The dominant narrative structure in commercial cinema divides story into three acts: setup (establishing character, world, and desire), confrontation (the protagonist pursues their goal against escalating obstacles), and resolution (the desire is achieved or surrendered, with consequences). This structure is not a formula but a description of how stories work: something is wanted, something stands in the way, something happens.",
        },
        { type: "heading", content: "In Medias Res and Non-Linear Narrative" },
        {
          type: "paragraph",
          content:
            "In medias res begins the story in the middle of the action and fills in context as the narrative proceeds. Non-linear narrative — used in Pulp Fiction, Memento, Rashomon — abandons chronological order to create meaning through juxtaposition, perspective, or the gradual revelation of information. The choice of where to begin a story is itself a meaning-making decision.",
        },
        { type: "heading", content: "The Unreliable Narrator" },
        {
          type: "paragraph",
          content:
            "When the narrator of a story cannot be trusted — because they are lying, mistaken, or whose perspective is limited — the audience must actively question what they are being told. The unreliable narrator invites a second-order reading: what is actually happening, behind what we are shown? This produces a particular kind of engaged, suspicious attention.",
        },
        { type: "heading", content: "Genre Conventions as Audience Contract" },
        {
          type: "paragraph",
          content:
            "Genre is a contract between filmmaker and audience: a horror film promises certain experiences; a romantic comedy promises a particular emotional journey and resolution. This contract gives audiences permission to feel — they know what kind of experience they have signed up for. But genre conventions can also be subverted: the filmmaker fulfils some expectations and violates others, producing surprise and, at best, discovery.",
        },
        { type: "heading", content: "Genre: Setting Expectations to Break Them" },
        {
          type: "paragraph",
          content:
            "Thriller, horror, drama, comedy — each genre establishes expectations that a skilled filmmaker can exploit. Get Out (2017) uses horror conventions to deliver a social critique; No Country for Old Men is a thriller without conventional resolution; Parasite begins as a comedy and ends as tragedy. Genre is not a limit but a set of available tools.",
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
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Aspect Ratio" },
        {
          type: "paragraph",
          content:
            "Aspect ratio is the relationship between the width and height of the image. The Academy ratio (1.33:1) was the standard of the studio era — nearly square, intimate, containing. Widescreen formats (2.39:1 anamorphic, 1.85:1 flat) create a panoramic image suited to landscape, spectacle, and the formal compositions of directors like Welles and Kubrick. Some contemporary filmmakers — Eggers, Lanthimos — choose unusual ratios for specific psychological purposes.",
        },
        { type: "heading", content: "Colour Temperature as Emotional Code" },
        {
          type: "paragraph",
          content:
            "Film images have a colour temperature — a bias toward warm orange-yellow or cool blue-white — that operates as an emotional code. Warm light signals intimacy, comfort, memory, and the past. Cool light signals alienation, modernity, threat, and the clinical. Roger Deakins' work on No Country for Old Men uses cool, bleached light to make the Southwest feel inhospitable; his work on Blade Runner 2049 uses both warm and cool to separate the film's emotional registers.",
        },
        { type: "heading", content: "Key, Fill, and Back Light" },
        {
          type: "paragraph",
          content:
            "The standard three-point lighting setup uses a key light (the primary source, establishing the dominant shadow), a fill light (softening shadows from the opposite side), and a back light (separating the subject from the background with a rim of light). Departures from this standard — using only key light for harsh shadow, removing fill entirely for stark chiaroscuro, using practical sources only — all carry meaning.",
        },
        { type: "heading", content: "Natural Light and Its Qualities" },
        {
          type: "paragraph",
          content:
            "Natural light — available light from sun, sky, and practical sources — has qualities that artificial light struggles to replicate: the way late-afternoon sun rakes across a face, the flat grey of overcast sky, the flicker of candlelight. Directors who shoot primarily in natural light — Terrence Malick, Agnès Varda, Eggers — seek a quality of presence that studio lighting cannot produce.",
        },
        { type: "heading", content: "The Cinematographer-Director Relationship" },
        {
          type: "paragraph",
          content:
            "The cinematographer translates the director's vision into photographic reality. Great director-cinematographer collaborations are creative partnerships: Roger Deakins with Denis Villeneuve (Blade Runner 2049, Dune), Gordon Willis with Coppola and Woody Allen (the darkness of The Godfather, the Manhattan black-and-white), Vittorio Storaro with Bertolucci. The cinematographer is not a technician but an author of the visual experience.",
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
      estimatedMinutes: 12,
      blocks: [
        { type: "heading", content: "Most People Watch Films Wrong" },
        {
          type: "paragraph",
          content:
            "Most people watch films as passengers: they sit in the experience and allow it to happen to them. Active watching is different — it is a practice of simultaneous experiencing and analysing, of staying present to what you are feeling while also noticing the formal choices that produce those feelings.",
        },
        { type: "heading", content: "Take Notes While Watching" },
        {
          type: "paragraph",
          content:
            "Keep a notebook. Note when something surprises you, disturbs you, or moves you — and also note what the film was doing at that moment. What shot was on screen? Was there music? Had anything just changed? The note you make immediately after an emotional response is more valuable than any analysis written later.",
        },
        { type: "heading", content: "Use Pause and Rewind" },
        {
          type: "paragraph",
          content:
            "Films reward multiple viewings and close inspection. Pause a frame and examine it as a photograph: what is in the frame, where is the light coming from, what is out of focus? Rewind a scene and watch it again, this time looking only at the background. Scenes are layered: the foreground action is the first layer; the visual world constructed around it is several more.",
        },
        { type: "heading", content: "Watch Without Sound" },
        {
          type: "paragraph",
          content:
            "Turn off the sound for five minutes of any film and watch the image alone. You will suddenly notice what the image is doing without musical assistance — what the composition, lighting, and movement alone communicate. Then turn the sound back on and notice how the acoustic environment changes your experience of the same images.",
        },
        { type: "heading", content: "Notice What You Do Not Notice" },
        {
          type: "paragraph",
          content:
            "Films are designed to direct your attention — to make you look where the filmmaker wants. The most interesting craft is often in what you do not consciously notice: the slight camera movement that edges you toward anxiety, the way the colour of a character's clothing changes across a film, the background character who appears in multiple scenes. Active watching includes noticing the edges and borders of attention.",
        },
        { type: "heading", content: "Discuss Analytically, Not Critically" },
        {
          type: "paragraph",
          content:
            "When you discuss a film with others, start with questions of how before questions of whether: how did the film create that effect? How did it make you feel that? The critical question — did you like it? — comes too quickly and forecloses the more interesting analytical questions. You learn more from a film you can explain than from one you merely liked.",
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

import type { Course } from "@/types"

const course: Course = {
  id: "concept-development",
  title: "Concept Development",
  slug: "concept-development",
  description:
    "How to develop creative concepts — from initial idea through research, refinement, and execution. The process behind great campaigns, editorials, and creative projects.",
  category: "creative-direction",
  accentColor: "#a8b8a0",
  estimatedHours: 3,
  tags: ["concept", "creative", "ideation", "strategy", "direction"],
  lessons: [
    {
      id: "cd-01-concept",
      title: "What Makes a Strong Concept",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "Theme vs. Concept" },
        {
          type: "paragraph",
          content:
            "The most common confusion in creative work is between a theme and a concept. A theme is a subject: 'sadness,' 'power,' 'nature.' A concept is a specific proposition: 'what grief looks like from the inside in the first week,' 'the loneliness of people who have everything,' 'the beauty of natural systems in states of decay.' The difference is specificity. A theme can be illustrated in thousands of ways. A concept has one right answer — or at least, a much smaller set of right answers.",
        },
        {
          type: "paragraph",
          content:
            "Specificity is the most reliable mark of a strong concept. If you can summarise the concept in a short, specific sentence and someone immediately understands what the work will feel like, the concept is doing its job. If the summary could describe many different works, the concept needs more development.",
        },
        { type: "heading", content: "The Concept Answers 'What Are We Saying?'" },
        {
          type: "paragraph",
          content:
            "A strong concept answers the question 'what are we saying?' before it answers 'how does it look?' This sequence is critical. Most weak creative work begins with aesthetic decisions — 'I want it to look dark and cinematic' — without a prior decision about what the darkness and the cinematography are in service of. The aesthetics become the concept by default, and aesthetic decisions made without a conceptual framework are just decoration.",
        },
        { type: "heading", content: "Great Campaign Concepts" },
        {
          type: "paragraph",
          content:
            "Nike's 'Just Do It' (1988) is not a product description. It is a philosophy: the internal struggle that precedes every athletic act, and the decision to proceed anyway. It works for a marathon runner and for someone getting off the sofa to take a walk, because it describes a universal human experience of inertia and resolution. Apple's '1984' commercial (Ridley Scott, 1984) is not a feature list. It is a position: we are not IBM, we are the ones who will break the corporate monopoly on information. Both concepts answer 'what are we saying?' with something that exceeds any product description.",
        },
      ],
      quiz: {
        question: "What is the essential difference between a theme and a concept?",
        options: [
          {
            id: "a",
            text: "A theme is used in art while a concept is used in commercial work",
            isCorrect: false,
          },
          {
            id: "b",
            text: "A theme is a subject that can be illustrated many ways; a concept is a specific proposition with a much smaller set of right answers",
            isCorrect: true,
          },
          {
            id: "c",
            text: "A theme requires visual development while a concept can remain verbal and strategic",
            isCorrect: false,
          },
          {
            id: "d",
            text: "A concept is a developed theme — all concepts begin as themes and are refined over time",
            isCorrect: false,
          },
        ],
        explanation:
          "The distinction is specificity. A theme is a subject area — 'sadness,' 'power,' 'isolation' — that could be illustrated in thousands of ways. A concept is a specific proposition — 'what grief looks like from the inside in the first week' — that has a much more defined set of right answers. The specificity of a concept is what makes it actionable: it tells you what to make, not just what to think about.",
      },
    },
    {
      id: "cd-02-research",
      title: "Research and Reference",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Primary vs. Secondary Research" },
        {
          type: "paragraph",
          content:
            "Primary research means going to the source: visiting a place, speaking to people with direct experience, handling the object, watching the event. Secondary research means reading about the source: books, articles, interviews, documentaries. Both are necessary, but they produce different kinds of knowledge. Primary research gives you sensory and emotional data — what does this place smell like, what is the quality of light, how do people in this situation hold their bodies? Secondary research gives you context, history, and structure.",
        },
        {
          type: "paragraph",
          content:
            "In creative work, the most useful research for concept development is often primary research conducted in unexpected places: looking at industrial processes when developing a fashion concept, looking at medical imagery when developing a beauty concept, looking at architectural spaces when developing a music project. The unexpected field produces unexpected connections.",
        },
        { type: "heading", content: "Visual Reference: Building and Using" },
        {
          type: "paragraph",
          content:
            "Visual reference — films, photography books, architecture, textiles, natural phenomena, historical images, painting — is the essential raw material of concept development in visual fields. The mistake most often made is using reference from the same field as the project: fashion reference for a fashion concept, music video reference for a music video. This produces work that recycles the visual language of its own field. The more interesting reference comes from outside: Japanese painting for a Western fashion shoot, industrial architecture for an intimate portrait project.",
        },
        { type: "heading", content: "The Risk of Reference Replacing Thinking" },
        {
          type: "paragraph",
          content:
            "Reference becomes a problem when it replaces thinking rather than stimulating it. The sign that this is happening: you can describe the project entirely in terms of its references ('it's like this film meets this photograph') rather than in terms of what it is saying. Reference should refine and sharpen a concept that already exists, not generate the concept by accumulation. If you cannot state the concept before showing the references, the research has not done its job.",
        },
      ],
      quiz: {
        question: "Why is visual reference from outside a project's own field often more productive than reference from within it?",
        options: [
          {
            id: "a",
            text: "Because cross-field references are less likely to be recognised by clients and therefore appear more original",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Because reference from the same field tends to recycle that field's existing visual language rather than producing unexpected connections",
            isCorrect: true,
          },
          {
            id: "c",
            text: "Because outside references require more creative interpretation and therefore produce stronger concepts",
            isCorrect: false,
          },
          {
            id: "d",
            text: "Because clients in specialist fields are more impressed by references they don't already know",
            isCorrect: false,
          },
        ],
        explanation:
          "When you use reference from within your own field, you are already working inside that field's established visual language. The resulting work tends to recycle and recombine existing conventions. Reference from outside the field — Japanese painting for a fashion concept, industrial architecture for a portrait project — brings visual logic from a different system, which produces unexpected connections and genuinely new visual propositions. The surprise of the cross-reference is often the source of the concept's originality.",
      },
    },
    {
      id: "cd-03-direction",
      title: "From Concept to Direction",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "The Concept as Generator" },
        {
          type: "paragraph",
          content:
            "A strong concept generates decisions. When you have a clear concept, the question 'what should this look like?' has a smaller, more defined set of answers. The concept functions as a generator — a machine that, when you feed a visual or directorial question into it, produces the right answer or a small set of right answers. Weak concepts do not generate decisions; they leave every decision equally open.",
        },
        {
          type: "paragraph",
          content:
            "Consider the concept 'isolation.' This concept could generate: empty spaces (the person in a large space, surrounded by nothing). Single figures (no other people in frame). Muted colour (colour that has retreated, that carries no energy). Silence in the sound design (space around sounds, long reverbs, very little). Extreme close-ups that remove context (so close to the subject that the world disappears). Each of these is a directorial decision that flows from the same concept — and each would produce a recognisably coherent body of work.",
        },
        { type: "heading", content: "Translating Emotional to Physical" },
        {
          type: "paragraph",
          content:
            "The core skill in concept-to-direction translation is converting emotional or psychological qualities into physical parameters. 'The concept requires tension' becomes 'small space between subjects, harder light, shorter focal length.' 'The concept requires warmth' becomes 'practicals rather than daylight, shallow depth of field, warm colour grade, subjects allowed to be physically close.' The emotional logic of the concept must be traceable in every physical decision made on set.",
        },
        { type: "heading", content: "Consistency as Evidence of Concept" },
        {
          type: "paragraph",
          content:
            "The test of whether a concept is doing its work is consistency: can every decision made on a project be traced back to the concept, and does the concept rule out as many decisions as it rules in? If you can make any visual choice without contradiction — any light quality, any casting, any wardrobe — then you do not have a concept, you have a theme. The concept's value is precisely in its constraints.",
        },
      ],
      quiz: {
        question: "What is the test of whether a concept is doing its work in a creative project?",
        options: [
          {
            id: "a",
            text: "Whether the concept can be summarised in a single memorable sentence for client presentation",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Whether every decision can be traced back to the concept and the concept rules out as many choices as it rules in",
            isCorrect: true,
          },
          {
            id: "c",
            text: "Whether the concept is original — not derived from an existing work or precedent",
            isCorrect: false,
          },
          {
            id: "d",
            text: "Whether the team understands the concept and can each describe it in their own words",
            isCorrect: false,
          },
        ],
        explanation:
          "A concept that does its work constrains decisions: it rules certain choices in and rules others out. If you can make any visual decision — any light, any casting, any palette — without contradicting the concept, the concept is not working as a generator. It is just a label. The value of a concept is precisely in its constraints: by defining what the project is, it also defines what it is not, and this is what makes consistent creative direction possible.",
      },
    },
    {
      id: "cd-04-iteration",
      title: "Iteration and Refinement",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "The First Idea" },
        {
          type: "paragraph",
          content:
            "The first idea is rarely the best idea. This is not a counsel of despair — the first idea is essential, because it gives you something to improve. The creative process is not one of waiting for the right idea to arrive fully formed. It is one of generating a first idea, identifying its weaknesses, and improving it through iteration. The first idea defines the problem space; subsequent ideas solve it.",
        },
        {
          type: "paragraph",
          content:
            "The question to ask of any initial concept is: what is the weakest part? What assumption is this concept making that may not be right? What has been left out because it was uncomfortable or inconvenient? Where is the concept most dependent on reference rather than original thinking? These questions generate the next iteration.",
        },
        { type: "heading", content: "Kill Your Darlings" },
        {
          type: "paragraph",
          content:
            "The most valuable editing skill in concept development is the willingness to remove what you are most attached to. The concept element you are most proud of — the clever reference, the visual flourish, the unexpected connection — is also the element most likely to be serving your own satisfaction rather than the project's needs. If you find yourself unwilling to change a specific element of a concept, ask: is this element serving the concept, or has it become the concept? If the answer is the latter, the element needs to go.",
        },
        { type: "heading", content: "Giving and Receiving Creative Notes" },
        {
          type: "paragraph",
          content:
            "Creative notes — feedback on work in development — are most useful when they are specific and directional. 'This isn't working' is not a note. 'The concept's energy feels diffuse — can we find one image that is the concept rather than ten images that are around it?' is a note. When receiving notes, the discipline is to separate the note from the solution: the collaborator is identifying a problem, not necessarily prescribing the fix. Your job is to fix it in a way that serves the concept.",
        },
      ],
      quiz: {
        question: "What does 'kill your darlings' mean as a principle in concept development?",
        options: [
          {
            id: "a",
            text: "That initial concepts should be abandoned in favour of entirely fresh approaches",
            isCorrect: false,
          },
          {
            id: "b",
            text: "That the element you are most attached to should be questioned — it may be serving your satisfaction rather than the project's needs",
            isCorrect: true,
          },
          {
            id: "c",
            text: "That personal taste should never influence professional creative decisions",
            isCorrect: false,
          },
          {
            id: "d",
            text: "That creative partners should challenge each other's ideas directly and without softening",
            isCorrect: false,
          },
        ],
        explanation:
          "'Kill your darlings' is a principle from writing (attributed to various sources, including Faulkner and Quiller-Couch) that translates directly to concept development. The element you are most attached to — the clever reference, the visual flourish, the unexpected connection that made you proud — is the element most likely to be serving your own creative satisfaction rather than the project's conceptual needs. Attachment is a signal: if removing this element feels painful, ask whether it is load-bearing or decorative. Often, it is decorative.",
      },
    },
    {
      id: "cd-05-presenting",
      title: "Presenting Creative Concepts",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "The Moodboard as Communication Tool" },
        {
          type: "paragraph",
          content:
            "When presenting a creative concept, the moodboard is the primary communication tool for visual direction. Its job is to make someone else see what you see — to communicate the feeling and visual logic of the concept before a single image has been made. A moodboard that simply collects beautiful images is not a communication tool. A moodboard that makes someone immediately understand what the work will feel like has done its job.",
        },
        { type: "heading", content: "The Deck as Narrative" },
        {
          type: "paragraph",
          content:
            "A presentation deck for a creative concept is a narrative document, not a catalogue. It should begin with the problem or opportunity, move through the concept's logic, arrive at the visual direction, and end with a clear statement of what will be made and why. Each slide should earn its place in the sequence. The deck is not a portfolio of everything you thought of — it is a curated argument for a specific approach.",
        },
        { type: "heading", content: "Presenting Before Fully Formed" },
        {
          type: "paragraph",
          content:
            "One of the most valuable skills in creative work is the ability to present a concept before it is fully formed — to communicate the direction without having all the answers. This requires confidence in the concept's logic: you may not know exactly what every image will look like, but you know what every image is trying to do. Present the concept's intelligence, not its completion. A concept that cannot be discussed before it is finished will never get made.",
        },
        { type: "heading", content: "Client vs. Collaborator" },
        {
          type: "paragraph",
          content:
            "The difference between pitching to a client and presenting to a collaborator is a difference in purpose. Pitching to a client is persuasion: you are making an argument for an approach, and the client's role is to approve or redirect. Presenting to a collaborator is a different activity: sharing a thinking-in-progress and inviting the collaborator's intelligence to develop it. Both require clarity, but the client presentation is closed (here is what we are proposing) while the collaborator presentation is open (here is where we are, and where do you think we should go?).",
        },
      ],
      quiz: {
        question: "What is the difference between a presentation deck for a client and a concept presentation to a collaborator?",
        options: [
          {
            id: "a",
            text: "The client deck uses more visual references; the collaborator presentation is more verbal and strategic",
            isCorrect: false,
          },
          {
            id: "b",
            text: "The client deck is a closed persuasive argument; the collaborator presentation is an open invitation to develop thinking-in-progress",
            isCorrect: true,
          },
          {
            id: "c",
            text: "The client deck needs to be more polished; the collaborator presentation can be rougher and more provisional",
            isCorrect: false,
          },
          {
            id: "d",
            text: "The client deck shows the final outcome; the collaborator presentation shows the process",
            isCorrect: false,
          },
        ],
        explanation:
          "The distinction is in purpose. Pitching to a client is persuasion: you are making a closed argument for a specific approach, and the client's role is to accept or redirect. Presenting to a collaborator is sharing thinking-in-progress: the presentation is an invitation for the collaborator's intelligence to enter the concept and develop it further. Confusing these modes — being persuasive with a collaborator, or tentative with a client — is a common source of failed creative relationships.",
      },
    },
    {
      id: "cd-06-learn",
      title: "Develop a Concept From Scratch",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "The Starting Point: One Word" },
        {
          type: "paragraph",
          content:
            "Concept development can begin from many places — a brief, a reference, a conversation, a material. But the most useful starting point for developing conceptual muscle is a single word: a feeling, a state of being, a quality. Not a subject (a person, a place, an event) but a quality (longing, resistance, amplitude, stillness). The single word is the test of whether you can develop a concept from genuine thinking rather than from accumulating references.",
        },
        { type: "heading", content: "Finding References That Don't Illustrate" },
        {
          type: "paragraph",
          content:
            "The key discipline in this exercise is finding visual references that connect to the word without obviously illustrating it. If your word is 'stillness,' a photograph of a lake is an illustration, not a reference. A photograph of a person in a crowd who is not moving is a reference — it captures something about the quality of stillness in relation to its opposite. An architectural image of a room with a single window is a reference. The search for non-obvious references forces the concept to become more specific: you have to articulate what, precisely, about your word you are trying to get at.",
        },
        { type: "heading", content: "The Sentence That Explains the Connection" },
        {
          type: "paragraph",
          content:
            "For each reference image, the exercise requires a single sentence explaining not what the image shows, but what it contributes to your understanding of the concept. This is where the thinking happens. Writing 'this image shows a dark room' is a description. Writing 'this image shows the quality of attention that stillness requires — the way a very still thing demands that you become still to perceive it' is a concept statement. The sentence test reveals whether you are thinking or just collecting.",
        },
        { type: "heading", content: "Beginning a Concept" },
        {
          type: "paragraph",
          content:
            "What you have after this exercise — a word, five unexpected references, five sentences explaining the connections — is the beginning of a concept. Not the concept itself, but the raw material from which a concept can be developed: the specific quality you are interested in, the visual territory you are drawn toward, and the first articulation of why. This is how all concept development begins: not with a finished idea, but with a direction of attention.",
        },
      ],
      reflection: {
        prompt:
          "Take one word — a feeling or a state of being, not a subject or a thing. Spend 30 minutes finding 5 visual references that don't obviously illustrate it but feel connected to it. For each reference, write one sentence explaining the connection — not what the image shows, but what quality it contributes to your concept. Then write one sentence that synthesises all five: what, precisely, is the concept? What does this exercise reveal about where your creative thinking naturally goes?",
      },
    },
  ],
}

export default course

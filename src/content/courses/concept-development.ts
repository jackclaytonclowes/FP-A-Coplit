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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Theme vs. Concept: Know the Difference" },
        {
          type: "paragraph",
          content:
            "A theme is a subject: 'sadness,' 'power,' 'nature.' A concept is a specific proposition: 'the loneliness of people who have everything.' The difference is specificity — and specificity is everything.",
        },
        {
          type: "paragraph",
          content:
            "A theme can be illustrated a thousand ways. A concept has a much smaller set of right answers. If you can summarise it in one sharp sentence and someone immediately knows what the work will feel like — that's a concept.",
        },
        { type: "heading", content: "'What Are We Saying?' Comes First" },
        {
          type: "paragraph",
          content:
            "Strong concepts answer 'what are we saying?' before 'how does it look?' Start with aesthetics and you end up with decoration — vibes without a point.",
        },
        { type: "heading", content: "Concepts That Worked" },
        {
          type: "paragraph",
          content:
            "Nike's 'Just Do It' isn't a product description — it's a philosophy about inertia and the decision to move anyway. Apple's '1984' isn't a feature list — it's a position: we're the ones who break the monopoly. Both answer 'what are we saying?' with something that outlasts any product.",
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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Primary vs. Secondary: Both Matter" },
        {
          type: "paragraph",
          content:
            "Primary research gives you sensory data — what does this place smell like, how do people hold their bodies? Secondary research gives you context and structure. You need both. But they do different things.",
        },
        {
          type: "paragraph",
          content:
            "The most useful primary research often comes from unexpected fields: industrial processes for a fashion concept, medical imagery for a beauty brief. The unexpected source produces the unexpected connection.",
        },
        { type: "heading", content: "Go Outside Your Field" },
        {
          type: "paragraph",
          content:
            "Fashion references for a fashion concept recycle fashion's existing visual language. Japanese painting for a Western fashion shoot, industrial architecture for an intimate portrait — these bring visual logic from a different system entirely.",
        },
        { type: "heading", content: "When Reference Replaces Thinking" },
        {
          type: "paragraph",
          content:
            "Bad sign: you can describe the project entirely in terms of its references ('it's like this film meets this photo'). If you can't state the concept before showing references, the research hasn't done its job.",
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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "A Strong Concept Generates Decisions" },
        {
          type: "paragraph",
          content:
            "A clear concept is a machine: feed it a visual question, it produces the right answer. Weak concepts leave every decision equally open — which means nothing gets decided, which means everything looks arbitrary.",
        },
        {
          type: "paragraph",
          content:
            "Take 'isolation.' It generates: empty spaces, single figures, muted colour, silence in the sound design, extreme close-ups that remove context. Each directorial decision flows from the same source — and they're recognisably coherent.",
        },
        { type: "heading", content: "Emotional to Physical: The Core Translation" },
        {
          type: "paragraph",
          content:
            "'Tension' becomes small space, harder light, shorter focal length. 'Warmth' becomes practicals, shallow depth of field, subjects physically close. The emotional logic must be traceable in every physical decision made on set.",
        },
        { type: "heading", content: "The Concept's Value Is Its Constraints" },
        {
          type: "paragraph",
          content:
            "If you can make any visual choice without contradicting the concept, you don't have a concept — you have a theme. A concept rules choices out as much as it rules them in. That's what makes consistent creative direction possible.",
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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "First Ideas Are Starting Points" },
        {
          type: "paragraph",
          content:
            "The first idea is rarely the best idea — but it's essential, because it gives you something to improve. The creative process is generating a first idea, finding its weaknesses, and iterating. The first idea defines the problem space.",
        },
        {
          type: "paragraph",
          content:
            "Ask of any initial concept: what's the weakest part? What assumption might be wrong? Where is this most dependent on reference rather than original thinking? Those questions generate the next iteration.",
        },
        { type: "heading", content: "Kill Your Darlings" },
        {
          type: "paragraph",
          content:
            "The element you're most proud of — the clever reference, the visual flourish — is the one most likely to be serving your satisfaction, not the project's needs. If you can't bring yourself to cut it, ask: is it load-bearing or decorative? Usually it's decorative.",
        },
        { type: "heading", content: "Notes That Actually Help" },
        {
          type: "paragraph",
          content:
            "'This isn't working' is not a note. 'The energy feels diffuse — can we find one image that is the concept rather than ten images around it?' is a note. When receiving notes, separate the problem from the solution. Find your own fix.",
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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "The Moodboard: Make Them See What You See" },
        {
          type: "paragraph",
          content:
            "The moodboard's job is to transfer your creative vision to someone else before a single image has been made. A board that collects beautiful images isn't a communication tool. A board that makes someone immediately feel the project — that is.",
        },
        { type: "heading", content: "The Deck Is a Narrative, Not a Catalogue" },
        {
          type: "paragraph",
          content:
            "A concept deck should start with the problem, move through the logic, arrive at the visual direction, and end with a clear statement of what gets made and why. Each slide earns its place. It's a curated argument, not a portfolio.",
        },
        { type: "heading", content: "Present Before It's Finished" },
        {
          type: "paragraph",
          content:
            "Present the concept's intelligence, not its completion. You don't need every answer — you need to know what every decision is trying to do. A concept that can't be discussed before it's finished will never get made.",
        },
        { type: "heading", content: "Client vs. Collaborator: Different Games" },
        {
          type: "paragraph",
          content:
            "Pitching to a client is persuasion — a closed argument for an approach. Presenting to a collaborator is sharing thinking-in-progress and inviting their intelligence in. Confuse the two and you'll either alienate a collaborator or underwhelm a client.",
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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Start With One Word" },
        {
          type: "paragraph",
          content:
            "Not a subject — a quality. Not 'a person' but 'longing.' Not 'a city' but 'resistance.' The single word is the test: can you develop a concept from genuine thinking rather than accumulated references?",
        },
        { type: "heading", content: "Find References That Don't Illustrate" },
        {
          type: "paragraph",
          content:
            "If your word is 'stillness,' a lake is an illustration. A person not moving in a crowd is a reference. A room with a single window is a reference. Non-obvious references force the concept to become more specific.",
        },
        { type: "heading", content: "Write the Sentence of Connection" },
        {
          type: "paragraph",
          content:
            "'This image shows a dark room' is a description. 'This image shows the quality of attention that stillness demands — the way a still thing makes you still to perceive it' is a concept statement. That's where the thinking happens.",
        },
        { type: "heading", content: "What You Have Now Is the Beginning" },
        {
          type: "paragraph",
          content:
            "A word, five unexpected references, five sentences explaining the connections — that's the raw material of a concept. Not the concept itself, but the direction of attention from which one can grow.",
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

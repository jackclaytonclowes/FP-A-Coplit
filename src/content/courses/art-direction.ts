import type { Course } from "@/types"

const course: Course = {
  id: "art-direction",
  title: "Art Direction",
  slug: "art-direction",
  description:
    "The art director's role in visual media — how to direct photography, construct an image, and translate abstract concepts into concrete visual decisions.",
  category: "creative-direction",
  accentColor: "#c0a870",
  estimatedHours: 3,
  tags: ["art-direction", "visual", "editorial", "commercial", "design"],
  lessons: [
    {
      id: "ad-01-role",
      title: "What an Art Director Does",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "The Visual Architect" },
        {
          type: "paragraph",
          content:
            "The art director is the visual architect of a publication, campaign, or project. Where the designer executes — laying out pages, choosing type sizes, refining the grid — the art director conceives: deciding what the whole thing should look and feel like, and why. The distinction matters. Design is the execution of a visual language. Art direction is the creation of that language in the first place.",
        },
        {
          type: "paragraph",
          content:
            "In editorial contexts (magazines, books), the art director decides what each story looks like visually — what photographs are commissioned, how they are cropped, what image leads a feature, how type and image work together across a spread. In advertising, the art director partners with a copywriter to conceive the campaign: the visual idea that will carry the message. In fashion, the art director oversees shoots — directing the photographer toward a specific visual outcome.",
        },
        { type: "heading", content: "Key Relationships" },
        {
          type: "paragraph",
          content:
            "An art director works inside a web of relationships. With the photographer: translating a visual concept into shoot direction, communicating what the images need to do rather than exactly how to make them (leaving room for the photographer's vision within the art director's framework). With the creative director: receiving the conceptual brief and translating it into actionable visual choices. With the editor: aligning visual choices with editorial strategy. Each relationship requires a different kind of communication.",
        },
        { type: "heading", content: "What Art Direction Is Not" },
        {
          type: "paragraph",
          content:
            "Art direction is not aesthetic preference. It is not choosing what you personally think looks beautiful. It is making visual decisions in service of a communication goal — asking not 'do I like this?' but 'does this do what we need it to do?' This distinction separates the art director from the person who just has good taste.",
        },
      ],
      quiz: {
        question: "What is the essential distinction between art direction and design?",
        options: [
          {
            id: "a",
            text: "Art direction deals with photography while design deals with typography and layout",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Art direction creates the visual language; design executes it",
            isCorrect: true,
          },
          {
            id: "c",
            text: "Art directors work in editorial contexts while designers work in commercial ones",
            isCorrect: false,
          },
          {
            id: "d",
            text: "Art direction is a senior role while design is a junior role in the same discipline",
            isCorrect: false,
          },
        ],
        explanation:
          "The distinction between art direction and design is conceptual, not hierarchical. Art direction is the creation of a visual language — deciding what something should look and feel like, and why. Design is the execution of that language: the layout, the type sizes, the grid, the specific visual decisions that realise the art director's concept. Both are essential; neither is more important. But they are different cognitive activities.",
      },
    },
    {
      id: "ad-02-legends",
      title: "Legendary Art Directors",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Alexey Brodovitch: 'Astonish Me'" },
        {
          type: "paragraph",
          content:
            "Alexey Brodovitch was art director of Harper's Bazaar from 1934 to 1958 and ran a legendary design laboratory at the New School in New York. His teaching principle was the imperative he gave his students: 'astonish me.' He believed that photography in magazines should capture the energy of movement rather than static poses, that layouts should create visual rhythm across spreads rather than present isolated images. His graduates included Richard Avedon, Irving Penn, and Garry Winogrand. His influence on American visual culture in the second half of the twentieth century is without parallel.",
        },
        { type: "heading", content: "Fabien Baron and Alexander Liberman" },
        {
          type: "paragraph",
          content:
            "Fabien Baron redesigned Harper's Bazaar in 1992 — bold typography, white space as a design element, a visual language of confident luxury that defined magazine design for the decade. He also art directed Madonna's 'Sex' book (1992), Steven Meisel's photographs given a framework of metal binding and shrink-wrap. Alexander Liberman served as editorial director of Condé Nast from 1943 to 1994 — overseeing Vogue, Vanity Fair, The New Yorker — and shaped American magazine culture across five decades.",
        },
        { type: "heading", content: "Neville Brody and The Face" },
        {
          type: "paragraph",
          content:
            "Neville Brody's art direction of The Face magazine (1981–1986) was one of the most influential bodies of magazine design in the twentieth century. He used typography as image — letters as graphic elements, type that commented on and interacted with the photography rather than simply captioning it. His work made The Face the defining visual record of its cultural moment: post-punk London, the birth of the music video, the emergence of a new kind of youth culture.",
        },
        { type: "heading", content: "David Carson: Deconstructive Typography" },
        {
          type: "paragraph",
          content:
            "David Carson art directed Ray Gun magazine (1992–1995) and developed a visual language of extreme typographic deconstructivism: columns of text set in illegible display fonts, words broken across lines without apparent logic, images layered over type, an overall aesthetic of visual noise and information overload. It was simultaneously a critique of readability conventions and a prefigurement of the visual language of the internet. His work forced designers to confront what type is actually for.",
        },
      ],
      quiz: {
        question: "What was Alexey Brodovitch's central teaching principle, and what did it mean in practice?",
        options: [
          {
            id: "a",
            text: "'Less is more' — he taught that reduction and simplicity were the marks of mature design",
            isCorrect: false,
          },
          {
            id: "b",
            text: "'Astonish me' — he demanded that photography and layouts capture energy and movement rather than static poses",
            isCorrect: true,
          },
          {
            id: "c",
            text: "'The grid is everything' — he believed rigorous typographic structure was the foundation of all good design",
            isCorrect: false,
          },
          {
            id: "d",
            text: "'Photography is truth' — he taught that the art director's role was to display photographs without interference",
            isCorrect: false,
          },
        ],
        explanation:
          "'Astonish me' was Brodovitch's challenge to his students at the Design Laboratory, and it shaped the work of everyone who studied with him, including Richard Avedon. In practice it meant: if the image does not surprise me, it is not finished. It meant photographing movement not stillness, using the white space of the page as an active element, and treating the magazine spread as a visual sequence with rhythm and energy rather than a series of isolated image-and-caption units.",
      },
    },
    {
      id: "ad-03-brief",
      title: "The Visual Brief",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "Translating Concept into Direction" },
        {
          type: "paragraph",
          content:
            "The visual brief is the art director's primary tool for communication. It translates an abstract concept — 'we want something that feels both intimate and slightly unsettling' — into the concrete visual decisions a photographer can act on. The brief must answer, at minimum: what is the mood? what is the light quality? what is the palette? what is the casting direction? what is the wardrobe direction? what is the set or location direction?",
        },
        {
          type: "paragraph",
          content:
            "The brief exists because a photograph cannot be made from an abstraction. The photographer needs to know where to stand, how to light, what to look for. The art director's job is to translate the concept's emotional logic into physical parameters: the mood of the concept becomes the quality of light; the concept's palette becomes the colour of walls, clothes, and skin tones; the concept's emotional temperature becomes the casting decision.",
        },
        { type: "heading", content: "Reference Images: Use and Misuse" },
        {
          type: "paragraph",
          content:
            "Tearsheets and moodboards are the most common reference tools. Used well, they communicate a feeling — a light quality, a spatial relationship, a quality of tension between subject and background — that words cannot convey efficiently. Used badly, they communicate 'copy this': they replace creative thinking with reproduction. The difference is in how you select references. The goal is never to recreate a specific image. The goal is to isolate a specific quality that image contains and carry that quality into new work.",
        },
        { type: "heading", content: "Showing the Feeling" },
        {
          type: "paragraph",
          content:
            "The most common mistake in briefing is confusing the reference with the target. 'I want it to look like this' — pointing at an Avedon portrait — is a different instruction from 'I want it to have this quality of psychological presence' — pointing at the same Avedon portrait. The first instruction produces copying. The second produces thinking. The art director's skill is in identifying precisely which quality of a reference is relevant and communicating only that.",
        },
      ],
      quiz: {
        question: "What is the key distinction between using a reference image correctly and using it incorrectly in a visual brief?",
        options: [
          {
            id: "a",
            text: "Correct use is showing images from the same field; incorrect use is showing images from unrelated disciplines",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Correct use isolates a specific quality the reference contains; incorrect use instructs the photographer to copy the image",
            isCorrect: true,
          },
          {
            id: "c",
            text: "Correct use shows recent images; incorrect use shows historical references that may not resonate",
            isCorrect: false,
          },
          {
            id: "d",
            text: "Correct use provides many references; incorrect use provides too few for the photographer to understand the concept",
            isCorrect: false,
          },
        ],
        explanation:
          "The misuse of reference images — saying 'I want it to look like this' — instructs a photographer to reproduce rather than create. The correct use isolates a specific quality: the light quality, the spatial tension, the psychological temperature of a specific image — and communicates that quality as the target, leaving the photographer free to find their own path toward it. This distinction separates art direction from art copying.",
      },
    },
    {
      id: "ad-04-shoot",
      title: "Directing a Shoot",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "The Art Director on Set" },
        {
          type: "paragraph",
          content:
            "The art director's position on set is specific: beside the monitor, not behind the lens. The photographer looks through the camera and sees the world through their own eye. The art director watches the monitor and asks a different question: does this image do what we need it to do? These are not the same question, and the person who asks the second question must not be the same as the person asking the first.",
        },
        {
          type: "paragraph",
          content:
            "The monitor relationship defines the art director's role. You are watching for whether the images are hitting the brief — whether the light has the quality specified, whether the model's expression carries the correct emotional temperature, whether the composition is creating the spatial relationships the concept requires. You are not watching for whether the photograph is beautiful. Beauty is the photographer's concern. Intentionality is yours.",
        },
        { type: "heading", content: "The Language of Redirection" },
        {
          type: "paragraph",
          content:
            "When an image is not working, the art director must redirect — and do so without undermining the photographer's authority on set. The language matters enormously. 'Can we try moving the light slightly warmer?' is a request. 'This light is wrong' is a criticism. 'What if we pushed the energy just slightly — a bit more forward in the body?' is a suggestion that gives the photographer room to interpret. The best art directors communicate what they want in terms of outcomes, not instructions.",
        },
        { type: "heading", content: "Real-Time Decision Making" },
        {
          type: "paragraph",
          content:
            "A shoot is not a controlled laboratory. Models tire, light shifts, unexpected things happen, the energy of the room changes. The art director must make decisions in real time — recognising when something unexpected is better than what was planned, recognising when the session needs to change direction, knowing when enough frames have been made and when to push for one more. This requires the brief to be so thoroughly understood that it functions as a compass rather than a map: you always know which direction you're heading, even when the terrain is unfamiliar.",
        },
      ],
      quiz: {
        question: "Why must the art director watch the monitor rather than look through the camera on set?",
        options: [
          {
            id: "a",
            text: "To maintain a professional separation from the photographer and avoid undermining their authority",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Because the monitor shows the final image while the camera viewfinder shows only an approximation",
            isCorrect: false,
          },
          {
            id: "c",
            text: "To ask a different question than the photographer — not 'is this beautiful?' but 'does this do what we need it to do?'",
            isCorrect: true,
          },
          {
            id: "d",
            text: "To be available to direct the model while the photographer concentrates on technical elements",
            isCorrect: false,
          },
        ],
        explanation:
          "The art director and photographer ask fundamentally different questions. The photographer asks: is this a good photograph? The art director asks: does this photograph do what the brief requires? These are not the same question. A technically beautiful photograph that doesn't carry the concept is a failure for the art director's purposes. The monitor position keeps the art director focused on intentionality — whether the images are serving the concept — rather than on the photograph's internal qualities.",
      },
    },
    {
      id: "ad-05-contexts",
      title: "Art Direction in Editorial vs. Commercial",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "Editorial Art Direction" },
        {
          type: "paragraph",
          content:
            "Editorial art direction has a luxury that commercial work rarely affords: the page. A magazine feature spreads across multiple pages, and the art director's job is to think across that space — how does the sequence of images build? What does the opening image establish, and what does the final image resolve? The spread is the unit: two facing pages that must work as a single visual object, creating a relationship between image and type, between large and small, between colour and white space.",
        },
        {
          type: "paragraph",
          content:
            "Editorial work also has relatively little accountability to a paying client. The art director answers to an editor and to the reader, but the brief is internal and the creative freedom is correspondingly large. This is why the most experimental visual work happens in editorial contexts: magazines have always been the laboratory for visual culture.",
        },
        { type: "heading", content: "Commercial Art Direction" },
        {
          type: "paragraph",
          content:
            "Commercial art direction is typically compressed to a single deliverable: the advertisement, the campaign image, the product photograph. The client has a brief, a brand identity, legal requirements, and a budget. The art director must work within all four constraints simultaneously. The creative freedom is smaller and the accountability is total: if the campaign doesn't work commercially, the art director has failed, regardless of whether the images are beautiful.",
        },
        { type: "heading", content: "The Transfer of Skills" },
        {
          type: "paragraph",
          content:
            "The skills transfer in both directions. Editorial art directors who move into commercial work bring narrative intelligence — the ability to tell a story across a sequence of images rather than relying on a single hero shot. Commercial art directors who work in editorial bring discipline: the single-image mindset, the ability to distil a concept to its most essential visual statement. The most accomplished art directors move between contexts, letting each sharpen the other.",
        },
        {
          type: "quote",
          content: "In advertising you have one image to say everything. In editorial you have twelve pages to say nothing, or everything. The discipline is different but the intelligence is the same.",
          author: "Fabien Baron",
        },
      ],
      quiz: {
        question: "What is the primary creative resource that editorial art direction has but commercial art direction typically lacks?",
        options: [
          {
            id: "a",
            text: "A larger budget for photography and production",
            isCorrect: false,
          },
          {
            id: "b",
            text: "The page sequence — multiple spreads across which a visual narrative can be built",
            isCorrect: true,
          },
          {
            id: "c",
            text: "Access to more established photographers and talent",
            isCorrect: false,
          },
          {
            id: "d",
            text: "Freedom from brand identity guidelines and visual systems",
            isCorrect: false,
          },
        ],
        explanation:
          "Editorial art direction's primary creative resource is the page — specifically, the sequence of pages across which a visual story can unfold. The art director thinks about the opening spread, the narrative builds, the resolution, the pacing of image sizes and white space across six, twelve, or twenty-four pages. Commercial art direction must typically make its statement in a single image. This changes the cognitive process entirely: from narrative sequence to essential distillation.",
      },
    },
    {
      id: "ad-06-learn",
      title: "Develop Your Visual Language",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "The Visual Brief as Creative Tool" },
        {
          type: "paragraph",
          content:
            "The most useful exercise in developing art direction skills is making visual briefs for shoots that don't exist — yet. The brief is not a planning document. It is a thinking tool. The process of assembling references, specifying light quality, defining a palette, and writing the single-sentence mood statement forces you to translate an abstract feeling into concrete visual parameters. Do this regularly and you develop a visual language: a vocabulary of specific qualities you can reach for when a concept requires articulation.",
        },
        { type: "heading", content: "Building a Reference Library" },
        {
          type: "paragraph",
          content:
            "Art directors who work well under pressure have spent years building reference libraries — not archives of images they want to copy, but archives of specific qualities: this quality of light, this spatial relationship between figure and ground, this quality of tension in a face. The reference library is a vocabulary of visual effects. The more precisely it is organised (not by image, but by quality), the more useful it becomes.",
        },
        { type: "heading", content: "Looking at the World as an Art Director" },
        {
          type: "paragraph",
          content:
            "Art direction is a mode of attention as much as a skill. It means looking at every image you encounter — in a magazine, on a screen, in a gallery, in a film — and asking: what is the light doing? what is the space doing? what is the relationship between the subject and the background? what would this feel like if the light were different, or the space were smaller, or the subject were further away? This is not analysis for its own sake. It is the building of a visual intelligence that eventually operates automatically.",
        },
        { type: "heading", content: "Your First Brief" },
        {
          type: "paragraph",
          content:
            "The practical exercise is simple: create a single-page visual brief for a shoot that doesn't exist yet. Choose a concept — one word or short phrase that names a feeling or a state. Find five reference images that connect to that concept without obviously illustrating it. Specify the palette in three colours. Describe the light quality in one sentence. Write the mood in one sentence. This is your visual brief. It is also the beginning of your visual language.",
        },
      ],
      reflection: {
        prompt:
          "Create a visual brief for a shoot that doesn't exist yet. Start with one word or phrase — a feeling or a state of being. Find five reference images that connect to it without simply illustrating it. What palette does the concept require? What quality of light? What would the space feel like? Write one sentence that captures the overall mood. Then ask: what does this brief reveal about your visual instincts — what qualities do you reach for, and why?",
      },
    },
  ],
}

export default course

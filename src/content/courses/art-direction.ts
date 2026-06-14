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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "The Visual Architect" },
        {
          type: "paragraph",
          content:
            "The designer executes a visual language. The art director creates it. That distinction — conception vs. execution — is everything.",
        },
        {
          type: "paragraph",
          content:
            "In editorial, the art director decides what each story looks like. In advertising, they conceive the campaign. In fashion, they direct the photographer. Different contexts, same core skill: deciding what something should look and feel like, and why.",
        },
        { type: "heading", content: "A Web of Relationships" },
        {
          type: "paragraph",
          content:
            "Art directors work inside relationships — with photographers, creative directors, editors. Each requires different communication. With a photographer: what the images need to do, not how to make them. With a creative director: translating brief into visual choices.",
        },
        { type: "heading", content: "Not Taste. Intentionality." },
        {
          type: "paragraph",
          content:
            "Art direction isn't choosing what you personally find beautiful. It's asking: does this do what we need it to do? That question separates the art director from the person who just has good taste.",
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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Brodovitch: 'Astonish Me'" },
        {
          type: "paragraph",
          content:
            "Alexey Brodovitch ran Harper's Bazaar from 1934 to 1958 and taught everyone who mattered. His principle: 'astonish me.' Capture energy, not poses. Create rhythm across spreads, not isolated images. His graduates included Avedon and Penn.",
        },
        { type: "heading", content: "Baron and Liberman: Magazine Shapers" },
        {
          type: "paragraph",
          content:
            "Fabien Baron redesigned Harper's Bazaar in 1992 — bold type, white space as design element, confident luxury. He also art directed Madonna's 'Sex.' Alexander Liberman ran Condé Nast for five decades and shaped American magazine culture.",
        },
        { type: "heading", content: "Neville Brody: Type as Image" },
        {
          type: "paragraph",
          content:
            "Brody's art direction of The Face (1981–1986) used typography as image — letters as graphic elements that commented on the photography, not just captioned it. The visual record of post-punk London.",
        },
        { type: "heading", content: "David Carson: Beautiful Chaos" },
        {
          type: "paragraph",
          content:
            "Carson art directed Ray Gun with extreme typographic deconstructivism — illegible fonts, images layered over text, visual noise as a statement. It was a critique of readability and a preview of the internet's visual language.",
        },
        {
          type: "image",
          content: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Avedon_nyc_1969.jpg/800px-Avedon_nyc_1969.jpg",
          caption: "Richard Avedon in New York, 1969 — trained under Brodovitch at Harper's Bazaar, he became the defining portrait photographer of his era and the proof of his teacher's methods",
          alt: "Richard Avedon photographed in New York in 1969",
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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Abstractions Don't Make Photographs" },
        {
          type: "paragraph",
          content:
            "The visual brief translates feeling into decisions. 'Intimate and slightly unsettling' means nothing to a photographer. Light quality, palette, casting direction, set direction — those mean something.",
        },
        {
          type: "paragraph",
          content:
            "The emotional logic of the concept becomes physical parameters. Mood becomes light quality. Palette becomes the colour of walls, clothes, and skin. Emotional temperature becomes casting. That's the translation.",
        },
        { type: "heading", content: "References: Use, Don't Copy" },
        {
          type: "paragraph",
          content:
            "Tearsheets communicate feeling faster than words. Used well, they point at a quality — a light, a tension, a spatial relationship. Used badly, they say: copy this. The goal is never to recreate a specific image. It's to isolate a quality and carry it somewhere new.",
        },
        { type: "heading", content: "The Right Question" },
        {
          type: "paragraph",
          content:
            "'I want it to look like this Avedon' produces copying. 'I want this quality of psychological presence' produces thinking. Identifying precisely which quality matters — and communicating only that — is the art director's core skill.",
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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Stand by the Monitor, Not the Lens" },
        {
          type: "paragraph",
          content:
            "The photographer looks through the camera and asks: is this a good photograph? The art director watches the monitor and asks: does this do what we need it to do? These are different questions. They need different people.",
        },
        {
          type: "paragraph",
          content:
            "Watch for whether the images hit the brief — whether the light has the right quality, whether the expression carries the right emotional temperature. Beauty is the photographer's concern. Intentionality is yours.",
        },
        { type: "heading", content: "Redirect Without Undermining" },
        {
          type: "paragraph",
          content:
            "'This light is wrong' is a criticism. 'Can we try moving it slightly warmer?' is a request. 'What if we pushed the energy just a bit more forward?' gives the photographer room to interpret. Communicate outcomes, not instructions.",
        },
        { type: "heading", content: "Brief as Compass, Not Map" },
        {
          type: "paragraph",
          content:
            "Shoots are unpredictable. Models tire, light shifts, the room changes. Know the brief so well it functions as a compass — you always know the direction even when the terrain is unfamiliar. And know when unexpected is better than planned.",
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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Editorial: You Have the Page" },
        {
          type: "paragraph",
          content:
            "Editorial art direction thinks in sequences — opening spread, narrative build, resolution, pacing across pages. The spread is the unit: two facing pages that must work as one. The most experimental visual work happens here because magazines are the laboratory.",
        },
        {
          type: "paragraph",
          content:
            "Editorial work answers to an editor and a reader, not a paying client. The creative freedom is correspondingly large. That's why the boldest visual ideas live in magazines first.",
        },
        { type: "heading", content: "Commercial: One Shot to Say Everything" },
        {
          type: "paragraph",
          content:
            "Commercial work compresses to a single deliverable. Client brief, brand identity, legal requirements, budget — all four constraints simultaneously. If the campaign doesn't work commercially, the images' beauty is irrelevant.",
        },
        { type: "heading", content: "Skills That Travel Both Ways" },
        {
          type: "paragraph",
          content:
            "Editorial art directors who go commercial bring narrative intelligence. Commercial art directors who go editorial bring the single-image discipline — distilling a concept to its most essential statement. The best art directors move between both.",
        },
        {
          type: "quote",
          content: "In advertising you have one image to say everything. In editorial you have twelve pages to say nothing, or everything. The discipline is different but the intelligence is the same.",
          author: "Fabien Baron",
        },
        {
          type: "image",
          content: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Dali_Atomicus_%281948%29_by_Philippe_Halsman.jpg/1280px-Dali_Atomicus_%281948%29_by_Philippe_Halsman.jpg",
          caption: "Dalí Atomicus by Philippe Halsman (1948): the result of art direction at its most ambitious — a single image that took 28 takes and required precise coordination of timing, physics, and visual intelligence",
          alt: "Philippe Halsman's Dalí Atomicus, showing Salvador Dalí leaping with cats and splashing water",
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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Brief Shoots That Don't Exist Yet" },
        {
          type: "paragraph",
          content:
            "The best exercise in art direction: make visual briefs for imaginary shoots. Assembling references, specifying light quality, defining a palette, writing the mood sentence — this forces abstract feeling into concrete parameters. Do it enough and you build a visual language.",
        },
        { type: "heading", content: "Build Your Reference Library Now" },
        {
          type: "paragraph",
          content:
            "Art directors who work well under pressure have been collecting for years. Not images to copy — qualities to reach for. Organise by quality, not subject. Light, spatial tension, emotional temperature. That's the vocabulary.",
        },
        { type: "heading", content: "Look Like an Art Director" },
        {
          type: "paragraph",
          content:
            "Art direction is a mode of attention. Every image you see — magazine, screen, gallery, film — ask: what is the light doing? What is the space doing? What would this feel like if the light were different? This builds visual intelligence that eventually runs automatically.",
        },
        { type: "heading", content: "Your First Brief, Right Now" },
        {
          type: "paragraph",
          content:
            "Pick one word — a feeling or a state. Find five reference images that connect without obviously illustrating it. Specify the palette in three colours. Describe the light in one sentence. Write the mood in one sentence. That's your visual brief. That's the beginning of your language.",
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

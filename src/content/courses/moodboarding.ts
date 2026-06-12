import type { Course } from "@/types"

const course: Course = {
  id: "moodboarding",
  title: "Moodboarding",
  slug: "moodboarding",
  description:
    "The art and craft of the moodboard — how to build visual references that actually communicate your creative vision rather than just collecting images you like.",
  category: "creative-direction",
  accentColor: "#b8c4c8",
  estimatedHours: 2,
  tags: ["moodboard", "reference", "visual", "creative-process", "direction"],
  lessons: [
    {
      id: "mb-01-purpose",
      title: "What a Moodboard Actually Does",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Not a Collection. A Communication." },
        {
          type: "paragraph",
          content:
            "A moodboard isn't a collection of things you like. That's the most common mistake — and it produces the most common failure: a board that shows your taste but fails to transfer your vision.",
        },
        {
          type: "paragraph",
          content:
            "The test: show it to someone who hasn't seen your brief. Ask them to describe what the project will feel like. If they're right, the board is working. If not, it has failed — regardless of how beautiful the individual images are.",
        },
        { type: "heading", content: "Reference vs. Inspiration: Not the Same Thing" },
        {
          type: "paragraph",
          content:
            "Reference is specific and directional: this light quality, this spatial relationship, this tension between subject and environment. Inspiration is diffuse: it points at a mood without specifying how to get there. Both are useful — at different stages.",
        },
        { type: "heading", content: "When to Build One" },
        {
          type: "paragraph",
          content:
            "Moodboards work at three moments: at the start of a project, when briefing collaborators, and when a concept gets stuck and needs a visual approach instead of a verbal one. Each time, the board must do something specific.",
        },
      ],
      quiz: {
        question: "What is the simple test of whether a moodboard is communicating effectively?",
        options: [
          {
            id: "a",
            text: "Whether the images are consistently high quality and professionally photographed",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Whether someone who hasn't seen the brief can describe what the project will feel like after seeing the board",
            isCorrect: true,
          },
          {
            id: "c",
            text: "Whether the colour palette is consistent across all the images on the board",
            isCorrect: false,
          },
          {
            id: "d",
            text: "Whether the images collectively represent every element of the project's visual brief",
            isCorrect: false,
          },
        ],
        explanation:
          "A moodboard's job is to transfer a creative vision from one person's imagination to another's understanding. The only reliable test of whether it has done this is showing it to someone without prior knowledge of the brief and asking them to describe what the project will feel like. If the description matches the intent, the board is communicating. Everything else — image quality, palette consistency, aesthetic beauty — is secondary to this communication function.",
      },
    },
    {
      id: "mb-02-finding",
      title: "Finding the Right References",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Look Outside Your Field" },
        {
          type: "paragraph",
          content:
            "Fashion moodboards built from fashion images recycle fashion's visual language. Go adjacent: films for a fashion project, textile details for food, natural phenomena for a product campaign. The unexpected source produces the unexpected connection.",
        },
        {
          type: "paragraph",
          content:
            "Great sources: photography books outside your field, architecture monographs, natural history photography, historical painting, industrial and scientific imagery, film stills, geological or meteorological photography. Surprise yourself.",
        },
        { type: "heading", content: "Build the Library Before You Need It" },
        {
          type: "paragraph",
          content:
            "Collect images continuously — not when you have a brief. Organise by quality, not subject: images with a specific light quality, images with a specific spatial tension, images with a specific emotional temperature. That's the vocabulary you'll reach for under pressure.",
        },
        { type: "heading", content: "The Surprising Image Is the Best Image" },
        {
          type: "paragraph",
          content:
            "The most memorable moodboards contain at least one image that surprises the viewer — one that isn't obviously related but captures something essential. It works precisely because it doesn't illustrate. It illuminates from an unexpected angle.",
        },
      ],
      quiz: {
        question: "Why is it more productive to look for visual references outside your project's immediate field?",
        options: [
          {
            id: "a",
            text: "Because clients are more impressed by references they don't recognise from the industry",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Because field-internal references recycle existing visual language; adjacent fields produce unexpected connections and genuine originality",
            isCorrect: true,
          },
          {
            id: "c",
            text: "Because cross-field research demonstrates the breadth of the creative director's knowledge",
            isCorrect: false,
          },
          {
            id: "d",
            text: "Because images from other fields are less likely to be recognised and copied by competitors",
            isCorrect: false,
          },
        ],
        explanation:
          "Field-internal references — fashion images for a fashion project — tend to recycle the visual language already established within that field. The result is work that feels familiar because it is drawing from familiar sources. References from adjacent or distant fields bring visual logic from different systems: the quality of light in an architecture photograph, the spatial compression in a geological closeup, the emotional temperature of a historical painting. These unexpected sources produce visual propositions the field has not already seen.",
      },
    },
    {
      id: "mb-03-composition",
      title: "Composition and Curation",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Arrangement Creates Meaning" },
        {
          type: "paragraph",
          content:
            "Images placed in proximity create relationships. Weathered leather beside an old face: texture, age, material memory — the viewer finds it without being told. Use scale, contrast, and proximity deliberately. These are compositional principles, same as any printed page.",
        },
        {
          type: "paragraph",
          content:
            "Large image = primary. Small image = detail or texture. Dark beside light = tension. Close together = tight relationship. You're designing the board, not just filling it.",
        },
        { type: "heading", content: "Colour Tells the Story" },
        {
          type: "paragraph",
          content:
            "A board of warm ochres and dark greens says something completely different from pale lavenders and deep indigos — even if the text brief uses the same words. Check how the overall colour temperature reads from a distance. If the palette isn't working, the concept might not be either.",
        },
        { type: "heading", content: "Edit Ruthlessly. Always." },
        {
          type: "paragraph",
          content:
            "Ten images pointing at slightly different things produce visual noise. Five images all pointing at the same thing produce communication. Rule: if an image isn't saying something no other image on the board says, cut it.",
        },
      ],
      quiz: {
        question: "What is the most common structural error in moodboard construction?",
        options: [
          {
            id: "a",
            text: "Using images from too many different sources or fields",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Including too many images, which creates visual noise rather than focused communication",
            isCorrect: true,
          },
          {
            id: "c",
            text: "Arranging images in a grid rather than a more organic, editorial layout",
            isCorrect: false,
          },
          {
            id: "d",
            text: "Failing to include text annotations that explain the relevance of each image",
            isCorrect: false,
          },
        ],
        explanation:
          "The most common error is too many images. A moodboard that includes every interesting image found during research ends up pointing in multiple directions simultaneously, producing visual noise rather than a clear statement. The discipline is ruthless editing: if an image is not contributing something that no other image on the board contributes, it should be removed. Fewer images, each doing specific work, communicate far more precisely than many images collectively.",
      },
    },
    {
      id: "mb-04-purposes",
      title: "Moodboards for Different Purposes",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Shoot Moodboard: Align the Whole Team" },
        {
          type: "paragraph",
          content:
            "A shoot moodboard speaks to photographer, stylist, hair, make-up, and set designer simultaneously. It must communicate light quality, palette, subject-background relationship, emotional temperature, and wardrobe direction. Show it to all of them and get the same understanding back.",
        },
        { type: "heading", content: "Campaign Moodboard: Help the Client Say Yes" },
        {
          type: "paragraph",
          content:
            "A client moodboard is a decision-making tool — it helps someone visualise and approve a direction before resources are committed. Balance creative ambition with legibility. Add explanatory text where the visual language isn't shared.",
        },
        { type: "heading", content: "Personal Moodboard: Think Visually" },
        {
          type: "paragraph",
          content:
            "A board for yourself operates by different rules. Include images you don't yet understand, images that feel connected without explanation, images that contradict each other. This is visual thinking — making visible what you're drawn to, which is the first step in knowing your own instincts.",
        },
        { type: "heading", content: "Audience Changes Everything" },
        {
          type: "paragraph",
          content:
            "A board with no text can communicate everything to a collaborator who shares your visual language. The same board might completely fail a client without it. Know your audience before you decide what kind of board to build.",
        },
      ],
      quiz: {
        question: "How should a moodboard for a client campaign differ from one made for a creative team?",
        options: [
          {
            id: "a",
            text: "The client board should include more images to provide more options for the client to choose from",
            isCorrect: false,
          },
          {
            id: "b",
            text: "The client board needs to balance creative ambition with legibility, often including more explanatory text to support decision-making",
            isCorrect: true,
          },
          {
            id: "c",
            text: "The client board should show more finished and polished imagery rather than rough creative references",
            isCorrect: false,
          },
          {
            id: "d",
            text: "The client board should focus on competitor brands and industry reference rather than wider cultural sources",
            isCorrect: false,
          },
        ],
        explanation:
          "The client moodboard is a decision-making tool — its job is to help a client visualise and approve a creative direction before resources are committed. This requires balancing creative ambition (showing where you intend to go) with legibility (making sure the client can see and understand what you're proposing). Explanatory text helps bridge the gap between the creative team's visual fluency and the client's unfamiliarity with the reference. A board that works perfectly for a photographer may completely fail a client who lacks the visual vocabulary to read it.",
      },
    },
    {
      id: "mb-05-communication",
      title: "The Moodboard as Communication",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Present It. Don't Just Show It." },
        {
          type: "paragraph",
          content:
            "A moodboard should be presented, not just revealed. But keep it short — if you need to explain each image at length, the board isn't communicating. It's surviving on your narration. The goal: a board that works without you in the room.",
        },
        { type: "heading", content: "Say the Concept. Then Stop." },
        {
          type: "paragraph",
          content:
            "State the concept in one sentence. Point to key images and what they contribute. Name the palette, the light quality, the emotional temperature. Then let the viewer respond to the whole. Don't pre-empt. Don't apologise. Don't manage.",
        },
        { type: "heading", content: "Questions a Moodboard Should Answer" },
        {
          type: "list",
          items: [
            "What is the overall mood of this project? (Can be felt immediately, without explanation)",
            "What is the light quality? (Visible in the images)",
            "What is the colour palette? (Visible across the board as a whole)",
            "What is the relationship between subject and environment? (Visible in the spatial qualities of the images)",
            "What is the emotional temperature — how will the viewer feel? (Communicated by the cumulative effect)",
          ],
        },
        { type: "heading", content: "Test It Before You Present It" },
        {
          type: "paragraph",
          content:
            "Show the board to someone unfamiliar with the brief for thirty seconds. Ask: what do you think this is? What does it feel like? If the answers align — the board works. If not, the curation needs fixing, not your presentation script.",
        },
      ],
      quiz: {
        question: "What does it indicate when you need to explain each image at length during a moodboard presentation?",
        options: [
          {
            id: "a",
            text: "That the images are too abstract and should be replaced with more literal references",
            isCorrect: false,
          },
          {
            id: "b",
            text: "That the board is not communicating — it is surviving on explanations rather than doing its own work",
            isCorrect: true,
          },
          {
            id: "c",
            text: "That the audience lacks the visual literacy to read the board without guidance",
            isCorrect: false,
          },
          {
            id: "d",
            text: "That the concept is too sophisticated to be communicated through images alone",
            isCorrect: false,
          },
        ],
        explanation:
          "A moodboard that requires lengthy explanation is failing at its primary function: visual communication. The goal is a board that works without the presenter in the room — that communicates its visual logic and emotional temperature to someone who has never heard the brief. When you find yourself explaining what each image is trying to say, the board's curation or composition needs to change. The explanation is compensating for what the board is failing to communicate visually.",
      },
    },
    {
      id: "mb-06-learn",
      title: "Build a Moodboard",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "The Exercise: Nine Images, Nine Sentences" },
        {
          type: "paragraph",
          content:
            "Choose a creative project. Build a moodboard of exactly nine images. Nine is intentional: enough to create a visual world, not so many that editing discipline collapses. Then write one sentence per image — not what it shows, but what it contributes.",
        },
        { type: "heading", content: "The Sentence Test" },
        {
          type: "paragraph",
          content:
            "Not: 'this is a dark room.' But: 'this image brings the quality of threshold — the moment before entering a space — which is the emotional state the project lives in.' If you can't write that sentence, the image shouldn't be on the board.",
        },
        { type: "heading", content: "Edit the Board" },
        {
          type: "paragraph",
          content:
            "Read all nine sentences aloud. Are any saying the same thing? If two sentences describe the same quality, one image is redundant — cut it and find one that contributes something not yet represented. Each image should be load-bearing.",
        },
        { type: "heading", content: "What the Exercise Reveals" },
        {
          type: "paragraph",
          content:
            "Beyond the board itself, the exercise shows you your visual instincts: what qualities you reach for, what fields you look in, what emotional temperatures draw you in. Repeat it and the patterns become visible. That's your visual language.",
        },
      ],
      reflection: {
        prompt:
          "Choose a creative project — a shoot that doesn't yet exist, a room, a collection, a film, or a brand identity. Build a moodboard of exactly 9 images. For each image, write one sentence explaining what it contributes to the whole — not what it shows, but what quality it communicates. Then remove any image whose sentence duplicates another's. What does the final board reveal about your visual instincts? What qualities do you reach for without thinking?",
      },
    },
  ],
}

export default course

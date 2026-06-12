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
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "A Communication Tool, Not a Collection" },
        {
          type: "paragraph",
          content:
            "A moodboard is not a collection of things you like. This is the most common misunderstanding of the form, and it produces the most common failure: a board that expresses the maker's taste but fails to communicate a specific vision. The moodboard's job is to make someone else see what you see — to transfer a creative vision from your imagination to another person's understanding, using images rather than words.",
        },
        {
          type: "paragraph",
          content:
            "The test of a moodboard is simple: show it to someone who hasn't seen your brief, and ask them to describe what they think the project will feel like. If their description matches what you intend, the board is working. If it doesn't, the board has failed — regardless of how beautiful the individual images are.",
        },
        { type: "heading", content: "Reference vs. Inspiration" },
        {
          type: "paragraph",
          content:
            "There is an important distinction between reference ('this is what I'm thinking about') and inspiration ('this is the feeling I'm going for'). Reference images are specific and directional: this light quality, this spatial relationship, this quality of tension between subject and environment. Inspiration images are more diffuse: they point at a mood without specifying how to achieve it. Both have uses, but they belong at different stages and need to be clearly distinguished in a brief.",
        },
        { type: "heading", content: "When to Use a Moodboard" },
        {
          type: "paragraph",
          content:
            "Moodboards are most useful at three moments: at the beginning of a project, to establish the visual territory before any other decisions are made; when briefing collaborators, to communicate the visual logic of a concept to photographers, stylists, set designers, or clients; and as a thinking tool when a concept is stuck, to approach the problem visually rather than verbally. In each case, the board must do something specific, not simply exist.",
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
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "Where to Look" },
        {
          type: "paragraph",
          content:
            "The most common mistake in building a moodboard is looking only in the field closest to the project. Fashion moodboards built from other fashion photographs, architecture moodboards built from architecture publications, film moodboards built from other films — all of these risk recycling the visual language of their own field. The more interesting sources are adjacent: films for a fashion project, textile details for a food project, natural phenomena for a product campaign, historical painting for a contemporary portrait series.",
        },
        {
          type: "paragraph",
          content:
            "Productive sources for visual reference include: photography books (especially those outside your immediate field), architecture magazines and monographs, natural history photography, historical costume and painting archives, industrial and scientific photography, film stills (particularly from cinematographers whose light quality is distinctive), textile and material closeups, and geological or meteorological imagery. The unexpected source produces the unexpected connection.",
        },
        { type: "heading", content: "Building a Reference Library" },
        {
          type: "paragraph",
          content:
            "The most useful practice for building strong moodboards is building a reference library before you need it. Collect images continuously — not when you have a brief, but always. Organise them not by subject (fashion, architecture, portraits) but by quality: images that have a specific quality of light, images that create a specific quality of spatial tension, images that carry a specific emotional temperature. A quality-organised library lets you find the right reference quickly when a concept requires articulation.",
        },
        { type: "heading", content: "The Unexpected Reference" },
        {
          type: "paragraph",
          content:
            "The most memorable moodboards contain at least one image that surprises the viewer — an image that is not obviously related to the project but that captures something essential about it. This image works precisely because it does not illustrate the concept: it illuminates it from an unexpected angle. Finding these images requires knowing what specific quality you are looking for and being willing to find it in unfamiliar places.",
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
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "Arrangement Creates Meaning" },
        {
          type: "paragraph",
          content:
            "The arrangement of images on a moodboard creates meaning beyond what any individual image contains. Two images placed in proximity create a relationship: if you place a detail of weathered leather beside a portrait of an old face, the viewer will find a connection — texture, age, time, material memory. The art director uses this principle deliberately: proximity, scale, and contrast between images all generate meaning that the images do not contain individually.",
        },
        {
          type: "paragraph",
          content:
            "Scale matters: a large image on a board reads as primary, a small image reads as detail or texture. Contrast matters: placing a very light image beside a very dark one creates tension. Proximity matters: images placed close together create a tighter relationship than images separated by space. These compositional principles are the same as those that govern the design of the printed page, and they work the same way in a moodboard.",
        },
        { type: "heading", content: "Colour Across the Board" },
        {
          type: "paragraph",
          content:
            "Colour harmony and tension across a moodboard communicate palette in a way that a written specification cannot. A board that leans toward warm ochres and dark greens communicates a very different palette from one that is built around pale lavenders and deep indigos, even if the text brief says the same words. When curating a board, consider how the overall colour temperature reads from a distance. If the palette is not working, the concept may not be working either.",
        },
        { type: "heading", content: "Edit Ruthlessly" },
        {
          type: "paragraph",
          content:
            "The most common error in moodboard construction is too many images. Ten images that are all pointing at slightly different things produce visual noise. Five images that are all pointing at the same thing with absolute precision produce communication. The rule: if an image is not saying something that no other image on the board says, remove it. Every image should contribute a distinct quality to the overall statement. Fewer, more specific is always better than many, general.",
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
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "The Shoot Moodboard" },
        {
          type: "paragraph",
          content:
            "A moodboard for a shoot communicates to the photographer, stylist, hair and make-up artists, and set designer. Its job is to align everyone's understanding of the visual target before a single decision is made on set. It must communicate: light quality, colour palette, the relationship between subject and background, the emotional temperature of the images, and the wardrobe and styling direction. A shoot moodboard that is shown to a photographer and a stylist should produce the same understanding in both.",
        },
        { type: "heading", content: "The Campaign Moodboard" },
        {
          type: "paragraph",
          content:
            "A moodboard for a client campaign has a different function: it is a decision-making tool. Its job is to help a client visualise and approve a creative direction before significant resources are committed. This moodboard must balance creative ambition with legibility: the client must be able to see where you are going and feel confident about it. Boards for clients often include more explanatory text than those made for creative teams.",
        },
        { type: "heading", content: "The Personal Moodboard" },
        {
          type: "paragraph",
          content:
            "A moodboard made for yourself — as a thinking tool, not a communication tool — operates by different rules. Its job is to help you understand what you are responding to and why. You can include images that you don't yet understand, images that feel connected without being able to explain why, images that contradict each other. The personal moodboard is a form of visual thinking: it makes visible what you are drawn to, which is the first step in understanding your own creative instincts.",
        },
        { type: "heading", content: "The Audience Changes the Construction" },
        {
          type: "paragraph",
          content:
            "The audience of a moodboard determines its structure, level of explanation, and degree of resolution. For a collaborator who shares your visual language, a board with no text can communicate everything. For a client without visual vocabulary in your field, the same board with explanatory text at each image may still fail to communicate. Understanding your audience is the first step in deciding what kind of moodboard to build.",
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
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "Presenting a Moodboard" },
        {
          type: "paragraph",
          content:
            "A moodboard should be presented, not just shown. The presentation is the moment of translation: you explain what the board is trying to say and invite the viewer into the logic you have built. But the presentation should be short. If you have to explain each image at length, the board is not communicating — it is surviving on your explanations. The goal is a board that works without you in the room: that communicates its visual logic to someone who has never heard the brief.",
        },
        { type: "heading", content: "What to Say and What Not to Say" },
        {
          type: "paragraph",
          content:
            "In a moodboard presentation, say the concept in one sentence, then let the board speak. Point out the key images and what each contributes to the concept. Name the palette and the light quality. Describe the emotional temperature. Then stop. Do not caption every image. Do not apologise for images that are not quite right. Do not pre-empt objections. Let the viewer respond to the board as a whole before you start managing their reaction.",
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
        { type: "heading", content: "Testing Your Moodboard" },
        {
          type: "paragraph",
          content:
            "Before presenting a moodboard to a collaborator or client, test it on someone who hasn't seen the brief. Show them the board for thirty seconds without explanation. Then ask: what do you think this project is? What does it feel like? What would the images look like? If the answers align with your brief, the board is working. If they don't, something in the curation or composition needs to change — not your presentation script.",
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
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "The Exercise: Nine Images, Nine Sentences" },
        {
          type: "paragraph",
          content:
            "The most useful exercise in moodboard development is this: choose a creative project — a shoot, a room, a collection, a film, a brand identity. Build a moodboard of exactly nine images. The constraint of nine images is intentional: enough to create a coherent visual world, not so many that editing discipline collapses. Then write one sentence for each image — not describing what the image shows, but explaining what it contributes to the whole.",
        },
        { type: "heading", content: "The Sentence Test" },
        {
          type: "paragraph",
          content:
            "The sentence must answer: what quality does this image bring to the concept? Not: 'this is a photograph of a dark room.' But: 'this image brings the quality of threshold — the moment before entering a space — which is the emotional state the project lives in.' If you cannot write this sentence, you do not know why the image is on the board, which means it should not be on the board.",
        },
        { type: "heading", content: "Editing the Board" },
        {
          type: "paragraph",
          content:
            "After writing all nine sentences, read them aloud. Are any of them saying the same thing? If two sentences are describing the same quality, one of those images is redundant. Remove it and find an image that contributes a quality not yet on the board. The edited board — nine images, each contributing a distinct and necessary quality — is a communication tool. Each image is load-bearing; remove any one of them and the concept loses something specific.",
        },
        { type: "heading", content: "What the Exercise Reveals" },
        {
          type: "paragraph",
          content:
            "Beyond the specific moodboard, this exercise reveals your visual instincts: what qualities do you reach for, what fields do you look in, what emotional temperatures are you drawn to? Repeat the exercise with different projects and the patterns become visible. Your visual language — the specific set of qualities and emotional territories you return to — is what makes your creative work distinctively yours.",
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

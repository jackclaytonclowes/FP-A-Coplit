import type { Course } from "@/types"

const course: Course = {
  id: "paolo-roversi",
  title: "Paolo Roversi",
  slug: "paolo-roversi",
  description:
    "A study of Paolo Roversi — fashion photography's great mystic. Roversi's large-format Polaroid images combine technical mastery with an almost painterly approach to light and beauty.",
  category: "great-photographers",
  accentColor: "#b8c4e8",
  estimatedHours: 3,
  tags: ["fashion", "polaroid", "ethereal", "painterly", "portrait"],
  photographerId: "paolo-roversi",
  lessons: [
    {
      id: "pr-01-biography",
      title: "Biography & Background",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "Paolo Roversi (b. 1947, Ravenna, Italy)" },
        {
          type: "paragraph",
          content:
            "Paolo Roversi was born in 1947 in Ravenna, Italy — a city saturated in Byzantine mosaics and ancient light. He taught himself photography as a young man, initially working as a photojournalist and portrait photographer in Ravenna before moving to Paris in 1973. The move was decisive: Paris gave him access to fashion and to the artistic milieu that would shape his mature work.",
        },
        {
          type: "paragraph",
          content:
            "He began assisting photographer Laurence Sackman and learned studio photography from him. But the turning point came when he encountered the 20x24 Polaroid camera — a massive, room-sized instrument that produced large-format Polaroid prints of extraordinary quality. He became one of its few devoted practitioners, and it became his signature.",
        },
        {
          type: "heading",
          content: "Key Career Milestones",
        },
        {
          type: "list",
          items: [
            "1973: Moves to Paris from Ravenna",
            "1980: Begins working with the large-format Polaroid camera",
            "1985: First solo exhibition in Paris",
            "1990s: Regular contributor to Vogue Italia, British Vogue, and major fashion houses",
            "2007: Major monograph 'Studio' published",
            "2020: Appointed to photograph Pirelli Calendar — chosen for his timeless approach to beauty",
          ],
        },
        {
          type: "quote",
          content: "A photograph is a meeting between a photographer and their subject, and my job is to make that meeting as honest and as beautiful as possible.",
          author: "Paolo Roversi",
        },
      ],
      quiz: {
        question: "What city did Roversi grow up in, and why is this culturally significant to his work?",
        options: [
          { id: "a", text: "Milan — the centre of Italian fashion", isCorrect: false },
          { id: "b", text: "Ravenna — a city saturated in Byzantine mosaics and ancient light", isCorrect: true },
          { id: "c", text: "Florence — the birthplace of the Renaissance", isCorrect: false },
          { id: "d", text: "Venice — a city of reflections and mysterious light", isCorrect: false },
        ],
        explanation:
          "Roversi grew up in Ravenna, famous for its extraordinary Byzantine mosaics — art characterised by golden light, flat composition, and transcendent beauty. This early visual environment is traceable in his work's relationship to light and his preference for images that feel timeless rather than contemporary.",
      },
    },
    {
      id: "pr-02-style",
      title: "Visual Style Analysis",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "The Painterly Photograph" },
        {
          type: "paragraph",
          content:
            "Roversi's images are often described as painterly — and the description is accurate. His work draws on the tradition of European painting, particularly the Symbolists and Pre-Raphaelites, in its use of soft focus, dreamlike atmosphere, and subjects who seem to exist outside ordinary time. He is interested in timelessness rather than trend.",
        },
        { type: "heading", content: "Soft Focus and Long Exposure" },
        {
          type: "paragraph",
          content:
            "Roversi works with deliberately soft focus, using lenses set to minimum sharpness and long exposures that allow movement to blur. The resulting images have an ethereal quality — subjects seem not quite solid, not quite present in the physical world. They exist at the boundary between photograph and painting.",
        },
        { type: "heading", content: "The Large-Format Polaroid" },
        {
          type: "paragraph",
          content:
            "The large-format Polaroid camera Roversi uses produces prints of extraordinary tonal range and surface quality. The Polaroid process itself contributes to the aesthetic: colours are slightly shifted, edges are soft, and the image has a warmth and depth that digital photography rarely matches. Each frame is unique — there is no negative, only the print.",
        },
        { type: "heading", content: "Colour and Light" },
        {
          type: "paragraph",
          content:
            "Roversi's colour palette is muted and warm — blues and silvers, cream and gold. He uses light that seems to emanate from within subjects rather than falling on them from outside. His lighting is often a single soft source, heavily diffused, creating images that feel lit by candlelight even when they are studio photographs.",
        },
        {
          type: "quote",
          content: "I want my photographs to be like memories — things you almost remember but cannot quite grasp.",
          author: "Paolo Roversi",
        },
      ],
      quiz: {
        question: "What does Roversi's use of soft focus and long exposure achieve in his images?",
        options: [
          { id: "a", text: "It corrects technical limitations of the large-format Polaroid camera", isCorrect: false },
          { id: "b", text: "It creates an ethereal quality where subjects seem to exist outside ordinary time", isCorrect: true },
          { id: "c", text: "It allows him to work in low-light conditions without flash", isCorrect: false },
          { id: "d", text: "It creates the appearance of movement in otherwise still images", isCorrect: false },
        ],
        explanation:
          "Roversi's soft focus and long exposures create images in which subjects seem not quite solid, not quite present — they exist at the boundary between photograph and painting. This deliberately undermines photography's documentary function in favour of something closer to memory or dream.",
      },
    },
    {
      id: "pr-03-works",
      title: "Signature Works",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "Work for Comme des Garçons" },
        {
          type: "paragraph",
          content:
            "Roversi's ongoing collaboration with Rei Kawakubo and Comme des Garçons has produced images of extraordinary beauty. Kawakubo's deconstructed, conceptual garments and Roversi's ethereal photography are an unexpected but perfect match — the clothes' refusal to be conventionally beautiful finds its complement in images that are too beautiful to be merely fashionable.",
        },
        { type: "heading", content: "Work for Romeo Gigli" },
        {
          type: "paragraph",
          content:
            "In the 1990s, Roversi's collaboration with designer Romeo Gigli produced some of the most celebrated fashion images of the decade. Gigli's romantic, historicist aesthetic and Roversi's painterly photography created images that seemed to come from a parallel fashion history — one more interested in poetry than trend.",
        },
        { type: "heading", content: "Studio (2007)" },
        {
          type: "paragraph",
          content:
            "A major monograph documenting Roversi's studio practice over three decades. The book reveals the intimacy of his working method — his Paris studio is a small, quiet place, nothing like the productions that other fashion photographers require. The images show how extraordinary work can be made in modest circumstances.",
        },
        { type: "heading", content: "Pirelli Calendar (2020)" },
        {
          type: "paragraph",
          content:
            "Roversi's Pirelli Calendar — themed 'Looking for Juliet' — cast women from different cultural backgrounds in Shakespeare's Verona. Shot in his characteristic Polaroid soft focus, it was one of the most artistically ambitious calendars in the project's history and introduced his work to a new generation.",
        },
      ],
      quiz: {
        question: "Why is Roversi's collaboration with Comme des Garçons described as 'unexpected but perfect'?",
        options: [
          { id: "a", text: "Because both artist and brand are usually known for maximalist rather than minimal work", isCorrect: false },
          { id: "b", text: "Because the clothes' refusal to be conventionally beautiful is complemented by photographs too beautiful to be merely fashionable", isCorrect: true },
          { id: "c", text: "Because Kawakubo usually works exclusively with Japanese photographers", isCorrect: false },
          { id: "d", text: "Because Roversi's images are too dark and mysterious for most fashion houses", isCorrect: false },
        ],
        explanation:
          "Comme des Garçons' deconstructed, conceptual garments refuse conventional beauty — they are challenging, strange, and often deliberately difficult. Roversi's images are so beautiful they transcend fashion. Together they create something that is neither purely fashion nor purely art.",
      },
    },
    {
      id: "pr-04-techniques",
      title: "Techniques & Approach",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "The Studio as Sanctuary" },
        {
          type: "paragraph",
          content:
            "Roversi's Paris studio is small and quiet, deliberately removed from the apparatus of major fashion production. He works with minimal teams — often just himself, his subject, and perhaps a stylist. This creates the conditions for genuine intimacy: subjects are not performing for a crew, they are present with one person who is paying them deep attention.",
        },
        { type: "heading", content: "Long Sessions" },
        {
          type: "paragraph",
          content:
            "Roversi is known for long, unhurried sessions. He shoots relatively few frames — each large-format Polaroid is expensive and irreplaceable — so he waits. The waiting is productive: subjects relax, expressions shift from the performed to the authentic, and the quality of attention in the room changes.",
        },
        { type: "heading", content: "Music as Environment" },
        {
          type: "paragraph",
          content:
            "Roversi plays music throughout his sessions — classical, ambient, whatever creates the atmosphere he is working toward. He uses music to establish an emotional environment that prepares subjects before the camera is even raised. The session is as much about creating the right conditions as about technical execution.",
        },
        { type: "heading", content: "The Unique Print" },
        {
          type: "paragraph",
          content:
            "Because Roversi shoots on large-format Polaroid, there is no negative — each Polaroid is the only copy. This gives his prints a unique value and physicality. The photograph exists as a singular object, not a reproducible image. This relationship with physical uniqueness shapes how he approaches each frame.",
        },
      ],
      quiz: {
        question: "Why does Roversi's use of large-format Polaroid give his prints a unique status?",
        options: [
          { id: "a", text: "The format creates superior image sharpness compared to other mediums", isCorrect: false },
          { id: "b", text: "There is no negative — each Polaroid is the only copy, making it a singular physical object", isCorrect: true },
          { id: "c", text: "The large format allows his images to be printed at billboard scale", isCorrect: false },
          { id: "d", text: "The Polaroid process automatically colour-corrects for the most flattering skin tones", isCorrect: false },
        ],
        explanation:
          "Unlike conventional photography where negatives can produce unlimited prints, each large-format Polaroid is the only copy. There is no negative, no second chance. This makes each Roversi print a singular physical object — more like a painting than a photograph — and shapes his careful, unhurried approach to each frame.",
      },
    },
    {
      id: "pr-05-legacy",
      title: "Influence & Legacy",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "Poetry in Fashion Photography" },
        {
          type: "paragraph",
          content:
            "Roversi's most significant contribution is demonstrating that fashion photography can aspire to the condition of poetry — can be about timelessness rather than trend, about beauty rather than desire, about mystery rather than aspiration. In an industry defined by its relationship to the immediate moment, this is a radical position.",
        },
        { type: "heading", content: "The Analogue Holdout" },
        {
          type: "paragraph",
          content:
            "Roversi's continued commitment to the large-format Polaroid in the digital age has made him an important counter-voice in contemporary photography. He demonstrates that the qualities of analogue photography — uniqueness, slowness, materiality — are not simply nostalgic but are active artistic choices with ongoing value.",
        },
        { type: "heading", content: "Influence on Contemporary Fashion Photography" },
        {
          type: "paragraph",
          content:
            "The contemporary fashion photography interest in soft focus, film grain, and analogue processes owes something to Roversi's persistent example. He proved, throughout the digital revolution, that these qualities were not outdated but were simply a different tool for a different kind of truth.",
        },
        { type: "heading", content: "Fashion as Fine Art" },
        {
          type: "paragraph",
          content:
            "Roversi's work exists comfortably in art galleries as well as fashion magazines — it is genuinely ambiguous about which world it belongs to. This ambiguity is not a weakness but a strength: it demonstrates that the boundary between fashion photography and fine art photography is more porous than either side admits.",
        },
      ],
      quiz: {
        question: "What radical position does Roversi's work take within an industry defined by its relationship to the immediate moment?",
        options: [
          { id: "a", text: "That fashion photography should refuse to engage with commercial clients", isCorrect: false },
          { id: "b", text: "That fashion photography can aspire to timelessness, beauty, and mystery rather than trend and aspiration", isCorrect: true },
          { id: "c", text: "That analogue photography is technically superior to digital in all circumstances", isCorrect: false },
          { id: "d", text: "That fashion photography should be made in black and white only", isCorrect: false },
        ],
        explanation:
          "Fashion is fundamentally about the moment — the new season, the new trend, the now. Roversi's work refuses this temporality. His images are about beauty that doesn't age, mystery that doesn't resolve, and presence that transcends trend. In this, he is genuinely radical within his industry.",
      },
    },
    {
      id: "pr-06-learn",
      title: "What You Can Learn From Roversi",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Practical Lessons From His Practice" },
        {
          type: "paragraph",
          content:
            "Roversi teaches slowness, mystery, and the value of working against your medium's most obvious tendencies.",
        },
        { type: "heading", content: "1. Slow Down" },
        {
          type: "paragraph",
          content:
            "Limit yourself to ten frames in your next portrait session. Choose each frame deliberately, as if each one costs something irreplaceable. Notice how the session changes — how you look differently when you can't rely on shooting a hundred frames and finding the one.",
        },
        { type: "heading", content: "2. Create an Environment Before You Shoot" },
        {
          type: "paragraph",
          content:
            "Use music, lighting, and conversation to establish an atmosphere before you raise the camera. The photograph is an expression of the room's emotional state at the moment it is made. Control that state before you try to capture it.",
        },
        { type: "heading", content: "3. Embrace Soft Focus" },
        {
          type: "paragraph",
          content:
            "Try shooting at your lens's minimum sharpness setting. Allow faces to be slightly soft, edges to blur. Notice what this does to the feeling of the image — whether it creates mystery or merely looks like a mistake. The distinction is about intent.",
        },
        { type: "heading", content: "4. Look at Painting" },
        {
          type: "paragraph",
          content:
            "Roversi's references are more often painters than photographers. Spend time with the Pre-Raphaelites, the Symbolists, Vermeer, and Caravaggio. Identify what qualities of light, composition, and emotional register you want to bring into your photography.",
        },
        { type: "heading", content: "5. Pursue Timelessness" },
        {
          type: "paragraph",
          content:
            "Ask of each image you make: will this still be interesting in twenty years? If the answer depends on the subject being fashionable or the moment being current, reconsider. What would you need to change to make the image timeless rather than topical?",
        },
      ],
      reflection: {
        prompt:
          "Roversi says he wants photographs that feel 'like memories — things you almost remember but cannot quite grasp.' When you look at your own photographs, which one most has this quality? What is it about that image that creates mystery rather than certainty?",
      },
    },
  ],
}

export default course

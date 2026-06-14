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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "From Byzantine Mosaics to Paris Studios" },
        {
          type: "image",
          content: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Paolo_Roversi_Paris_Fashion_Week_Spring_Summer_2019.jpg/1280px-Paolo_Roversi_Paris_Fashion_Week_Spring_Summer_2019.jpg",
          caption: "Paolo Roversi at Paris Fashion Week, Spring/Summer 2019",
          alt: "Portrait of fashion photographer Paolo Roversi at Paris Fashion Week 2019",
        },
        {
          type: "paragraph",
          content:
            "Paolo Roversi grew up in Ravenna — a city literally covered in ancient golden mosaics. That early visual education in timeless, luminous beauty never left him.",
        },
        {
          type: "paragraph",
          content:
            "He moved to Paris in 1973 and found his true instrument: the massive 20x24 Polaroid camera. One frame at a time, no negatives, each print totally unique. It was made for him.",
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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Photograph or Painting? Yes." },
        {
          type: "paragraph",
          content:
            "Roversi's images look like Symbolist paintings — soft, dreamlike, outside ordinary time. He's not trying to document reality; he's trying to touch memory.",
        },
        { type: "heading", content: "Blur as a Choice" },
        {
          type: "paragraph",
          content:
            "He shoots deliberately soft, with long exposures that let subjects blur slightly. They exist at the boundary between solid and ghost. That's the point.",
        },
        { type: "heading", content: "The Polaroid That Changes Everything" },
        {
          type: "paragraph",
          content:
            "His large-format Polaroid shifts colours slightly, softens edges, adds warmth that digital can't replicate. And there's no negative — each print is the only one.",
        },
        { type: "heading", content: "Light From Within" },
        {
          type: "paragraph",
          content:
            "Roversi lights his subjects as if the glow comes from inside them. One soft, heavily diffused source — and suddenly everything feels like candlelight.",
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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Comme des Garçons: Strange Meets Beautiful" },
        {
          type: "paragraph",
          content:
            "Rei Kawakubo's deconstructed clothes refuse conventional beauty. Roversi's images are so beautiful they transcend fashion. Together they create something neither world could alone.",
        },
        { type: "heading", content: "Romeo Gigli: Poetry Over Trend" },
        {
          type: "paragraph",
          content:
            "Their 1990s collaboration looked like fashion from a parallel history — one that cared more about poetry than seasons. Among the most celebrated images of the decade.",
        },
        { type: "heading", content: "Studio (2007): The Quiet Truth" },
        {
          type: "paragraph",
          content:
            "His monograph reveals a small, quiet studio — nothing like fashion's usual productions. Extraordinary work made in modest circumstances. The book proves it.",
        },
        { type: "heading", content: "Pirelli 2020: Looking for Juliet" },
        {
          type: "paragraph",
          content:
            "Women from across cultures cast in Shakespeare's Verona, shot in his signature Polaroid soft focus. One of the most artistically ambitious Pirelli Calendars ever made.",
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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "The Studio as Sanctuary" },
        {
          type: "paragraph",
          content:
            "His Paris studio is small, quiet, and stripped of fashion's usual apparatus. One person, one camera, real attention. That's the whole setup.",
        },
        { type: "heading", content: "Shoot Less, See More" },
        {
          type: "paragraph",
          content:
            "Each large-format Polaroid is expensive and irreplaceable, so Roversi waits. The sessions are long. Subjects relax, expressions shift, authenticity surfaces.",
        },
        { type: "heading", content: "Music Sets the Room" },
        {
          type: "paragraph",
          content:
            "He plays music throughout — classical, ambient, whatever fits the atmosphere he's building. The emotional environment is set before the camera is even raised.",
        },
        { type: "heading", content: "One Print, No Copies" },
        {
          type: "paragraph",
          content:
            "No negative means no reprints. Each Polaroid is the only one. More like a painting than a photograph — and he treats each frame accordingly.",
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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Fashion Photography That Aims at Poetry" },
        {
          type: "paragraph",
          content:
            "Roversi proved fashion photography can be about timelessness, mystery, and beauty — not just trend. In an industry obsessed with the new, that's genuinely radical.",
        },
        { type: "heading", content: "Analogue in the Digital Age" },
        {
          type: "paragraph",
          content:
            "He never switched to digital. His Polaroid practice shows that slowness, materiality, and uniqueness are active artistic choices — not nostalgia.",
        },
        { type: "heading", content: "The Soft Focus Revival" },
        {
          type: "paragraph",
          content:
            "Contemporary fashion's love of film grain and soft focus owes something to Roversi's decades-long example. He kept the flame alive through the digital revolution.",
        },
        { type: "heading", content: "Art Gallery or Fashion Magazine?" },
        {
          type: "paragraph",
          content:
            "His work lives comfortably in both. That ambiguity isn't a problem — it proves the boundary between fashion photography and fine art is far more porous than either side admits.",
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
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Five Lessons Worth Stealing" },
        {
          type: "paragraph",
          content:
            "Roversi teaches slowness, mystery, and the value of working against your medium's most obvious instincts.",
        },
        { type: "heading", content: "1. Slow Down" },
        {
          type: "paragraph",
          content:
            "Limit yourself to ten frames in your next portrait session. Choose each deliberately, as if it's irreplaceable. Notice how your looking changes.",
        },
        { type: "heading", content: "2. Create an Environment Before You Shoot" },
        {
          type: "paragraph",
          content:
            "Use music, light, and conversation to set the atmosphere before you raise the camera. The photograph captures the room's emotional state — control that first.",
        },
        { type: "heading", content: "3. Embrace Soft Focus" },
        {
          type: "paragraph",
          content:
            "Try shooting at minimum sharpness. Let faces blur slightly. Ask whether it creates mystery or looks like a mistake. The difference is intent.",
        },
        { type: "heading", content: "4. Look at Painting" },
        {
          type: "paragraph",
          content:
            "Roversi references painters more than photographers. Spend time with the Pre-Raphaelites, the Symbolists, Vermeer. Identify the light, mood, and emotional register you want to steal.",
        },
        { type: "heading", content: "5. Pursue Timelessness" },
        {
          type: "paragraph",
          content:
            "Ask of each image: will this still be interesting in twenty years? If the answer depends on being fashionable right now, reconsider what would make it last.",
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

import type { Course } from "@/types"

const course: Course = {
  id: "richard-avedon",
  title: "Richard Avedon",
  slug: "richard-avedon",
  description:
    "A study of Richard Avedon — perhaps the most influential American photographer of the 20th century. His stark white backgrounds and psychological intensity revolutionised both fashion and portrait photography.",
  category: "great-photographers",
  accentColor: "#e8e8e8",
  estimatedHours: 3,
  tags: ["portrait", "fashion", "american", "20th-century", "stark"],
  photographerId: "richard-avedon",
  lessons: [
    {
      id: "ra-01-biography",
      title: "Biography & Background",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Born Into Fashion, Obsessed With Faces" },
        {
          type: "paragraph",
          content:
            "Avedon grew up in New York staring at Vogue photos in his father's Fifth Avenue clothing store. He knew exactly what he wanted to do.",
        },
        {
          type: "paragraph",
          content:
            "After serving as a WWII military photographer, he studied under Harper's Bazaar art director Alexey Brodovitch — the man who taught him that photography is movement, not stillness.",
        },
        {
          type: "heading",
          content: "A Career That Never Slowed Down",
        },
        {
          type: "list",
          items: [
            "1944: Studies under Alexey Brodovitch at the Design Laboratory",
            "1945: Joins Harper's Bazaar as staff photographer, aged 22",
            "1966: First major retrospective at the Smithsonian Institution",
            "1992: Moves to The New Yorker as first staff photographer",
            "1994: 'In the American West' — 5-year documentary project, 17,000 miles of travel",
            "2004: Dies while on assignment for The New Yorker in San Antonio",
          ],
        },
        {
          type: "quote",
          content: "All photographs are accurate. None of them is the truth.",
          author: "Richard Avedon",
        },
      ],
      quiz: {
        question: "Which legendary art director was Avedon's most important early mentor?",
        options: [
          { id: "a", text: "Alexey Brodovitch of Harper's Bazaar", isCorrect: true },
          { id: "b", text: "Alexander Liberman of Condé Nast", isCorrect: false },
          { id: "c", text: "Henry Wolf of Esquire", isCorrect: false },
          { id: "d", text: "Leo Lionni of Fortune", isCorrect: false },
        ],
        explanation:
          "Alexey Brodovitch — the legendary art director of Harper's Bazaar — was Avedon's most important early influence. Brodovitch's teaching principle was 'astonish me'; he believed fashion photography should capture movement and energy, not stillness. Avedon spent his career pursuing that instruction.",
      },
    },
    {
      id: "ra-02-style",
      title: "Visual Style Analysis",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "No Backdrop. No Excuses." },
        {
          type: "paragraph",
          content:
            "No backdrop. No props. No excuses. Avedon's white background strips everything away and forces you to look at the face.",
        },
        { type: "heading", content: "Fashion That Actually Moves" },
        {
          type: "paragraph",
          content:
            "Brodovitch told him fashion should have energy. Avedon listened — models jumping, running, turning. His images crackle with life.",
        },
        { type: "heading", content: "He Wanted the Mask to Slip" },
        {
          type: "paragraph",
          content:
            "Avedon would say something shocking mid-session, make subjects wait, flip the mood. He wanted the person behind the persona — not the polished front.",
        },
        { type: "heading", content: "Go Big or Go Home" },
        {
          type: "paragraph",
          content:
            "Avedon printed portraits at life size. You can't look away from a face that fills a wall. That's the whole point.",
        },
        {
          type: "quote",
          content: "My portraits are more about me than they are about the people I photograph.",
          author: "Richard Avedon",
        },
      ],
      quiz: {
        question: "What was the philosophical purpose of Avedon's signature stark white background?",
        options: [
          { id: "a", text: "To make retouching faster and easier in post-production", isCorrect: false },
          { id: "b", text: "To assert that the person, and only the person, matters — eliminating all contextual noise", isCorrect: true },
          { id: "c", text: "To echo the white pages of the magazines that published his work", isCorrect: false },
          { id: "d", text: "To make his studio lighting easier to control consistently", isCorrect: false },
        ],
        explanation:
          "The white background was an assertion: this person is what matters. By removing all environmental context, Avedon forced the viewer into an unmediated encounter with the subject. There is nowhere to look but at the face. This is both a compositional and a philosophical choice.",
      },
    },
    {
      id: "ra-03-works",
      title: "Signature Works",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Dovima With Elephants — Fashion's Greatest Photo" },
        {
          type: "paragraph",
          content:
            "A model in black Dior, flanked by circus elephants in Paris. The tension between elegance and raw power makes this the most celebrated fashion photograph ever made.",
        },
        { type: "heading", content: "In the American West — Same Camera, Different America" },
        {
          type: "paragraph",
          content:
            "Five years, 17,000 miles, white backdrop in the field. Miners, drifters, slaughterhouse workers — all treated like Vogue cover stars. Dignity for everyone.",
        },
        { type: "heading", content: "The Family — Power, Stripped Bare" },
        {
          type: "paragraph",
          content:
            "Sixty-nine of America's most powerful people. Same white background, same direct gaze. Suddenly they just look like people with unusual jobs.",
        },
        { type: "heading", content: "Warhol's Factory — The Definitive Record" },
        {
          type: "paragraph",
          content:
            "Avedon documented Andy Warhol's world so thoroughly his images are now the primary visual record of that entire era.",
        },
      ],
      quiz: {
        question: "What made 'In the American West' philosophically significant given Avedon's fashion photography background?",
        options: [
          { id: "a", text: "It was the first project he completed without using artificial lighting", isCorrect: false },
          { id: "b", text: "It showed that his technique — white background, frontal gaze — conferred dignity, not just glamour, on any subject", isCorrect: true },
          { id: "c", text: "It was his first project shot outside a studio environment", isCorrect: false },
          { id: "d", text: "It was funded entirely without commercial sponsorship", isCorrect: false },
        ],
        explanation:
          "'In the American West' applied Avedon's fashion photography technique — white background, frontal confrontation — to working people with no claim to glamour or celebrity. This revealed that his technique was fundamentally about human dignity, not fashion. Every subject received the same attentive respect as a Vogue cover star.",
      },
    },
    {
      id: "ra-04-techniques",
      title: "Techniques & Approach",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Slow Camera, Tense Room" },
        {
          type: "paragraph",
          content:
            "An 8x10 large format camera is slow and deliberate — it gives subjects time to settle, and time to get anxious. Avedon used both.",
        },
        { type: "heading", content: "He'd Say Anything to Get the Shot" },
        {
          type: "paragraph",
          content:
            "False news. Long waits. Sudden mood changes. Avedon was willing to manipulate the room to crack the persona and find the person underneath.",
        },
        { type: "heading", content: "The Print Is Where It Happens" },
        {
          type: "paragraph",
          content:
            "Avedon spent as much time in the darkroom as behind the camera. He believed the photograph wasn't finished until the print was perfect.",
        },
        { type: "heading", content: "Warm Up, Then Strike" },
        {
          type: "paragraph",
          content:
            "Sessions started slow — casual chat, early frames to relax everyone. By the time Avedon made the images he actually used, both he and the subject were completely present.",
        },
      ],
      quiz: {
        question: "What was Avedon's purpose in deliberately provoking emotional responses in his portrait subjects?",
        options: [
          { id: "a", text: "To create striking facial expressions for commercial fashion work", isCorrect: false },
          { id: "b", text: "To cause the social mask to slip and photograph the person behind the persona", isCorrect: true },
          { id: "c", text: "To test whether subjects were professional enough to maintain composure", isCorrect: false },
          { id: "d", text: "To create the sense of spontaneity in otherwise highly controlled situations", isCorrect: false },
        ],
        explanation:
          "Avedon wanted to photograph the person behind the persona — the human being underneath the public mask. By creating moments of unexpected emotion or discomfort, he gave subjects no time to perform. What remained was something closer to truth.",
      },
    },
    {
      id: "ra-05-legacy",
      title: "Influence & Legacy",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "He Defined How America Saw Itself" },
        {
          type: "paragraph",
          content:
            "For sixty years, Avedon shaped how Americans depicted their celebrities, politicians, artists, and workers. His fingerprints are on everything.",
        },
        { type: "heading", content: "Fashion Photography Grew Up" },
        {
          type: "paragraph",
          content:
            "Before Avedon, fashion photography showed products. After Avedon, it told stories. Every photographer who shoots narrative fashion owes him a debt.",
        },
        { type: "heading", content: "Anyone Can Be the Subject" },
        {
          type: "paragraph",
          content:
            "'In the American West' proved fine-art portraiture works for any subject. Alec Soth, Rineke Dijkstra — they're all working in a tradition Avedon opened up.",
        },
        { type: "heading", content: "A Portrait Is a Fight" },
        {
          type: "paragraph",
          content:
            "Avedon made portraits uncomfortable on purpose. They should ask questions, not provide easy answers. That confrontational energy is his most lasting gift to photography.",
        },
      ],
      quiz: {
        question: "Which tradition of subsequent photography can be directly traced to Avedon's 'In the American West'?",
        options: [
          { id: "a", text: "Celebrity editorial portraiture in glossy magazines", isCorrect: false },
          { id: "b", text: "Fine-art documentary portraiture applied democratically to any subject", isCorrect: true },
          { id: "c", text: "Fashion photography using movement and energy", isCorrect: false },
          { id: "d", text: "Environmental portraiture shot in domestic settings", isCorrect: false },
        ],
        explanation:
          "'In the American West' opened a tradition of fine-art documentary portraiture — the application of rigorous photographic technique to subjects outside the traditional subject hierarchies of art and fashion photography. Photographers like Alec Soth, Rineke Dijkstra, and August Sander work in a tradition Avedon helped define.",
      },
    },
    {
      id: "ra-06-learn",
      title: "What You Can Learn From Avedon",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Five Things to Steal From Avedon" },
        {
          type: "paragraph",
          content:
            "Avedon's lesson: portraiture is a confrontation. Your job is to create conditions for truth, not comfort.",
        },
        { type: "heading", content: "1. Simplify Ruthlessly" },
        {
          type: "paragraph",
          content:
            "Strip your portrait down to the minimum. What's the least this image needs? Start there.",
        },
        { type: "heading", content: "2. Move Your Subjects" },
        {
          type: "paragraph",
          content:
            "Ask your subjects to walk, turn, gesture — keep them moving. The in-between frames are often the best ones.",
        },
        { type: "heading", content: "3. The Session Is Psychological" },
        {
          type: "paragraph",
          content:
            "Think about the emotional arc. What happens after twenty minutes when the performance fades? Shoot then.",
        },
        { type: "heading", content: "4. Your Subject Is Everyone" },
        {
          type: "paragraph",
          content:
            "No one is beneath the attention of serious photography. The slaughterhouse worker deserves the same gaze as the movie star.",
        },
        { type: "heading", content: "5. Print as Carefully as You Shoot" },
        {
          type: "paragraph",
          content:
            "The image isn't finished when the shutter closes. Treat editing and printing with the same seriousness as the shoot.",
        },
      ],
      reflection: {
        prompt:
          "Avedon said 'all photographs are accurate — none of them is the truth.' What does a portrait of someone you know accurately show about them, and what truth does it fail to capture? How might you get closer to that truth in a photograph?",
      },
    },
  ],
}

export default course

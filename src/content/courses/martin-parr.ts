import type { Course } from "@/types"

const course: Course = {
  id: "martin-parr",
  title: "Martin Parr",
  slug: "martin-parr",
  description:
    "A study of Martin Parr — documentary photography's great satirist. Parr's vivid, close-range photographs of British life and global consumer culture are among the most important and entertaining in contemporary photography.",
  category: "great-photographers",
  accentColor: "#e87847",
  estimatedHours: 3,
  tags: ["documentary", "street", "british", "colour", "satire"],
  photographerId: "martin-parr",
  lessons: [
    {
      id: "mp-01-biography",
      title: "Biography & Background",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Born in Surrey, Raised in Salford" },
        {
          type: "paragraph",
          content:
            "Parr found photography through his grandfather and never stopped pointing it at the awkward, funny, uncomfortable truth of British life. He studied at Manchester Polytechnic and started with black-and-white social documentary.",
        },
        {
          type: "paragraph",
          content:
            "'The Last Resort' (1986) changed everything — vivid colour, flash, close-ups, sardonic humour. When Magnum elected him in 1994, it caused a row. Some members weren't sure his brand of satire was ethical documentary. That debate never really ended.",
        },
        {
          type: "heading",
          content: "Key Career Milestones",
        },
        {
          type: "list",
          items: [
            "1971: Studies at Manchester Polytechnic",
            "1986: 'The Last Resort' — his mature style arrives fully formed",
            "1994: Elected to Magnum Photos (controversially)",
            "1995: 'Common Sense' — takes his lens global",
            "2004: Barbican retrospective, London",
            "2013: Appointed President of Magnum Photos",
            "Ongoing: Documentary work, commercial photography, serious book collecting",
          ],
        },
        {
          type: "quote",
          content: "Photography is about finding out what can happen in the frame when you put some interesting things in it.",
          author: "Martin Parr",
        },
      ],
      quiz: {
        question: "Why was Parr's election to Magnum Photos in 1994 controversial?",
        options: [
          { id: "a", text: "He was too young to be elected as a full member at that time", isCorrect: false },
          { id: "b", text: "Some members questioned whether his satirical, sometimes unkind approach was ethical documentary photography", isCorrect: true },
          { id: "c", text: "He had previously criticised several Magnum photographers publicly", isCorrect: false },
          { id: "d", text: "He was not British, and Magnum had a preference for non-European photographers", isCorrect: false },
        ],
        explanation:
          "Parr's Magnum election was controversial because his approach — satirical, close-range, sometimes mocking — conflicted with the agency's tradition of empathetic documentary photography. His images of working-class tourists at New Brighton were considered by some members to be exploitative or condescending. The debate about his work's ethics continues.",
      },
    },
    {
      id: "mp-02-style",
      title: "Visual Style Analysis",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Flash in Daylight: The Signature" },
        {
          type: "paragraph",
          content:
            "Flash plus bright outdoor light bleaches skin to near-white and hyper-saturates colour. Combine that with extreme close-ups and you get something simultaneously funny, uncomfortable, and brutally honest.",
        },
        { type: "heading", content: "So Close It's Rude" },
        {
          type: "paragraph",
          content:
            "Parr gets within inches — close enough to see the texture of sunburned skin, the detail of cheap jewellery, the reality of the food. At that distance, context disappears and truth is all that's left.",
        },
        { type: "heading", content: "Satire or Affection? Both." },
        {
          type: "paragraph",
          content:
            "The honest answer to the big question about Parr's work: he finds his subjects funny and he loves them simultaneously. That ambivalence is what makes you laugh and then wonder if you should be laughing.",
        },
        { type: "heading", content: "The Definitive British Eye" },
        {
          type: "paragraph",
          content:
            "Parr documents Britain's class anxieties, its resort culture, its relationship with food, its collective awkwardness about having fun. His images are simultaneously cruel and loving — like the best British comedy.",
        },
        {
          type: "quote",
          content: "I think of myself as a humanist. A humanist with a slightly dark sense of humour.",
          author: "Martin Parr",
        },
      ],
      quiz: {
        question: "What creates the technical signature of Parr's 'flash in daylight' technique?",
        options: [
          { id: "a", text: "It allows photography in low-light indoor conditions without natural light", isCorrect: false },
          { id: "b", text: "Flash combined with bright outdoor conditions bleaches skin tones and hyper-saturates colours, creating a distinctive visual unreality", isCorrect: true },
          { id: "c", text: "It freezes fast movement that would otherwise be blurred in outdoor conditions", isCorrect: false },
          { id: "d", text: "It creates a consistent exposure regardless of changing outdoor light conditions", isCorrect: false },
        ],
        explanation:
          "Flash in daylight creates a distinctive effect: skin tones are bleached to near-white by the flash's proximity, while the ambient bright light makes colours appear hyper-saturated. The combination creates images with a quality of visual strangeness — too sharp, too bright, slightly unreal — that serves Parr's satirical documentary purposes.",
      },
    },
    {
      id: "mp-03-works",
      title: "Signature Works",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "The Last Resort (1986)" },
        {
          type: "paragraph",
          content:
            "Working-class tourists at New Brighton, near Liverpool — shot in vivid colour, with all the gap between leisure aspiration and leisure reality exposed. Accused of mocking the poor on publication; now recognised as one of the most important British photography projects ever made.",
        },
        { type: "heading", content: "Common Sense (1999)" },
        {
          type: "paragraph",
          content:
            "He went global — documenting the visual culture of consumerism across multiple countries in extreme close-up. The result proved his approach wasn't about Britain. It was about everyone.",
        },
        { type: "heading", content: "The Cost of Living (1989)" },
        {
          type: "paragraph",
          content:
            "Middle-class Britain in the Thatcher era: wine bars, dinner parties, garden fetes, new prosperity. His most explicitly political project — the English class system dissected with surgical precision.",
        },
        { type: "heading", content: "Luxury (2009)" },
        {
          type: "paragraph",
          content:
            "He turned the same flash-and-close-up treatment on the super-rich at Davos and Monaco. The finding: the wealthy are as absurd as everyone else.",
        },
      ],
      quiz: {
        question: "What accusation was 'The Last Resort' subject to on its publication in 1986?",
        options: [
          { id: "a", text: "That it was technically incompetent — badly exposed and poorly composed", isCorrect: false },
          { id: "b", text: "That it mocked working-class people and exploited them for an art-world audience", isCorrect: true },
          { id: "c", text: "That it was too similar in approach to existing documentary photography traditions", isCorrect: false },
          { id: "d", text: "That it misrepresented New Brighton by showing only its worst aspects", isCorrect: false },
        ],
        explanation:
          "The Last Resort was accused of mocking working-class people — of creating images for art-world entertainment at the expense of people who had no access to that world and couldn't represent themselves. This criticism is unresolved: Parr's defenders argue the images show affection; his critics argue they show condescension. The ambivalence is built into the work.",
      },
    },
    {
      id: "mp-04-techniques",
      title: "Techniques & Approach",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "The Ring Flash: Nothing to Hide" },
        {
          type: "paragraph",
          content:
            "A circular flash unit that mounts around the lens creates shadowless, frontal light — clinical, revealing, forensic. Everything visible. Nothing hidden.",
        },
        { type: "heading", content: "Get Closer Than Feels Comfortable" },
        {
          type: "paragraph",
          content:
            "Parr moves in closer than social convention allows. That's the point. Close range reveals the texture and detail that polite photography keeps at arm's length.",
        },
        { type: "heading", content: "The Long Day" },
        {
          type: "paragraph",
          content:
            "He spends hours in a single environment — a resort, a fete, a food market — moving slowly, photographing repeatedly. Extended presence is how the ordinary becomes extraordinary.",
        },
        { type: "heading", content: "The Collector's Eye" },
        {
          type: "paragraph",
          content:
            "Parr collects photobooks, kitsch objects, and vernacular photography obsessively. His collector's eye — always looking for what's culturally specific — is inseparable from his photographic eye.",
        },
      ],
      quiz: {
        question: "What specific quality of light does Parr's ring flash create?",
        options: [
          { id: "a", text: "Dramatic shadows that create a sense of depth and volume", isCorrect: false },
          { id: "b", text: "Shadowless, frontal illumination that reveals detail with forensic clarity", isCorrect: true },
          { id: "c", text: "Warm, directional light simulating natural afternoon sunlight", isCorrect: false },
          { id: "d", text: "Soft, diffused light that flatters skin tones and reduces texture", isCorrect: false },
        ],
        explanation:
          "The ring flash creates shadowless, frontally lit illumination because the circular flash unit surrounds the lens. Nothing can hide behind a shadow because the light comes from exactly the same angle as the camera's perspective. This clinical quality of revelation — everything visible, nothing hidden — is central to Parr's documentary aesthetic.",
      },
    },
    {
      id: "mp-05-legacy",
      title: "Influence & Legacy",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "He Blew Up British Documentary" },
        {
          type: "paragraph",
          content:
            "Before Parr, British documentary photography was sympathetic, black-and-white, compassionate. He introduced colour satire — political but ironic, engaged but wry. The field has never looked the same since.",
        },
        { type: "heading", content: "Colour as Serious Medium" },
        {
          type: "paragraph",
          content:
            "In British photography, colour was commercial — advertising, not art. Parr proved colour could be as rigorous and critical as any black-and-white tradition. That decision changed the game for generations.",
        },
        { type: "heading", content: "The Ethics of Satire" },
        {
          type: "paragraph",
          content:
            "The debate his work sparks — affection or exploitation? — is one of the most important in photography's ethics. He made the question of whose perspective operates in a documentary image impossible to ignore.",
        },
        { type: "heading", content: "The Photobook Canon" },
        {
          type: "paragraph",
          content:
            "With Gerry Badger, Parr wrote 'The Photobook: A History' — three volumes that transformed how the photobook is understood as an art form. Enormously influential worldwide.",
        },
      ],
      quiz: {
        question: "What did Parr's use of vivid colour challenge in British documentary photography?",
        options: [
          { id: "a", text: "The documentary tradition's interest in working-class subjects", isCorrect: false },
          { id: "b", text: "The convention that colour was commercial and black and white was the serious medium for documentary art", isCorrect: true },
          { id: "c", text: "The use of film rather than digital capture in documentary photography", isCorrect: false },
          { id: "d", text: "The tradition of photographers spending extended time in communities before photographing them", isCorrect: false },
        ],
        explanation:
          "In British photography, colour was considered commercial — the medium of advertising — while black and white was considered serious art. Parr used vivid colour as the primary medium for serious documentary work, demonstrating that colour could be as critically and artistically rigorous as any other choice.",
      },
    },
    {
      id: "mp-06-learn",
      title: "What You Can Learn From Parr",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Proximity, Colour, Honesty" },
        {
          type: "paragraph",
          content:
            "Parr teaches that ordinary life, photographed close and in vivid colour, is more revealing than you think. Here's how to steal his methods.",
        },
        { type: "heading", content: "1. Move Closer" },
        {
          type: "paragraph",
          content:
            "Closer than feels socially comfortable. Notice what detail becomes visible at close range that disappears at a polite distance. That detail is usually the truth.",
        },
        { type: "heading", content: "2. Photograph the Ordinary" },
        {
          type: "paragraph",
          content:
            "Supermarket queues, seaside lunches, office parties — the most revealing images are often of the most unremarkable situations. What have you been shooting around rather than of?",
        },
        { type: "heading", content: "3. Use Flash in Daylight" },
        {
          type: "paragraph",
          content:
            "Try it. Colour hyper-saturates, skin bleaches — you get something strange and more revealing than natural light. Experiment with what that strangeness communicates.",
        },
        { type: "heading", content: "4. Consider Your Own Position" },
        {
          type: "paragraph",
          content:
            "Are you inside or outside the situation you're photographing? Whose perspective does your image represent? These questions don't have easy answers, but they make you a more honest photographer.",
        },
        { type: "heading", content: "5. Build a Visual Archive" },
        {
          type: "paragraph",
          content:
            "Collect obsessively — photobooks, postcards, objects, advertisements. A collector's eye for what's culturally specific is inseparable from a good photographic eye.",
        },
      ],
      reflection: {
        prompt:
          "Parr says he is 'a humanist with a slightly dark sense of humour.' Looking at the ordinary events in your own life and environment — the supermarket, the family gathering, the work party — what would happen if you photographed them with flash, in vivid colour, at close range? What truths might those images reveal that polite photography avoids?",
      },
    },
  ],
}

export default course

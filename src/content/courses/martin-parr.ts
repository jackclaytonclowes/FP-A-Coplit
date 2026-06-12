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
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "Martin Parr (b. 1952, Epsom, Surrey)" },
        {
          type: "paragraph",
          content:
            "Martin Parr was born in 1952 in Epsom, Surrey, and grew up in Salford, where he discovered photography through his grandfather. He studied at Manchester Polytechnic and began his documentary career photographing working-class communities in the north of England — a far cry from the fashion world he would later intersect with.",
        },
        {
          type: "paragraph",
          content:
            "His transition from black-and-white social documentary to his mature style — vivid colour, flash, extreme close-ups, sardonic humour — came with his project 'The Last Resort' (1986), which documented working-class tourists on a Liverpool beach. His election to Magnum Photos in 1994 was controversial among members who questioned whether his satirical approach was ethical documentary photography.",
        },
        {
          type: "heading",
          content: "Key Career Milestones",
        },
        {
          type: "list",
          items: [
            "1971: Studies photography at Manchester Polytechnic",
            "1986: 'The Last Resort' — the defining statement of his mature style",
            "1994: Elected to Magnum Photos (controversially)",
            "1995: 'Common Sense' — global documentation of consumer culture",
            "2004: Retrospective at Barbican, London",
            "2013: Appointed President of Magnum Photos",
            "Ongoing: Documentary work, commercial photography, book collecting",
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
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Vivid Colour and Flash" },
        {
          type: "paragraph",
          content:
            "Parr's mature style is characterised by extremely vivid colour — achieved through the combination of flash photography in bright outdoor conditions. The flash bleaches skin tones to near-white and makes colours appear hyper-saturated. Used in combination with extreme close-ups, it creates images that are simultaneously funny, uncomfortable, and deeply honest.",
        },
        { type: "heading", content: "The Extreme Close-Up" },
        {
          type: "paragraph",
          content:
            "Parr is famous for extreme close-ups that fill the frame with details — greasy food, sunburned skin, cheap jewellery, out-of-date fashion. By moving to within inches of his subjects, he removes the context that might render these details sympathetic or explicable, leaving only the detail itself: exposed, slightly absurd, deeply revealing of social class and consumer behaviour.",
        },
        { type: "heading", content: "Satire and Affection" },
        {
          type: "paragraph",
          content:
            "The ongoing question about Parr's work is whether it is satirical mockery or affectionate documentation — and the honest answer is that it is both simultaneously. He finds his subjects funny and also, clearly, loves them. This ambivalence is what makes his work genuinely uncomfortable: you laugh, and then you wonder whether you should be laughing.",
        },
        { type: "heading", content: "The British Subject" },
        {
          type: "paragraph",
          content:
            "Parr is the great documentarian of British culture — specifically its class anxieties, its resort culture, its relationship to food, its collective desire to enjoy itself and its collective awkwardness about doing so. His images could only be of Britain and they reveal something about Britain that is simultaneously cruel and loving.",
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
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "The Last Resort (1986)" },
        {
          type: "paragraph",
          content:
            "Parr's defining work: a documentation of working-class tourists at New Brighton, a seaside resort near Liverpool. Made in vivid colour during overcast summer days, the images document the gap between the aspirations of leisure and its reality. Controversial on publication — accused of mocking the poor — but now widely recognised as one of the most significant British photography projects of the 20th century.",
        },
        { type: "heading", content: "Common Sense (1999)" },
        {
          type: "paragraph",
          content:
            "A global project documenting the visual culture of consumerism — food, fashion, tourism, souvenirs — in extreme close-up and vivid colour, across multiple countries. The project demonstrated that Parr's approach was not specific to Britain but described a global condition. The book is one of the most important photography books of its decade.",
        },
        { type: "heading", content: "The Cost of Living (1989)" },
        {
          type: "paragraph",
          content:
            "A documentation of middle-class British life in the Thatcher era — the new prosperity, the wine bars and dinner parties, the garden parties and village fetes. Parr's most explicitly political work, in which the English class system is dissected with uncomfortable precision.",
        },
        { type: "heading", content: "Luxury (2009)" },
        {
          type: "paragraph",
          content:
            "Parr turned his lens on the super-rich — Davos, Monaco, the Henley Regatta — applying the same close-up, flash-in-daylight aesthetic that he had used to document the working class. The result is images that treat the wealthy with the same slightly satirical attention he had always given everyone else. The rich are as absurd as everyone else.",
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
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "The Ring Flash" },
        {
          type: "paragraph",
          content:
            "Parr's characteristic ring flash — a circular flash unit that mounts around the lens — creates a specific quality of light: shadowless, frontally lit, slightly clinical. It reveals detail with the merciless clarity of a forensic photograph. Everything is visible; nothing is hidden in shadow.",
        },
        { type: "heading", content: "Extreme Proximity" },
        {
          type: "paragraph",
          content:
            "Parr moves very close to his subjects — closer than is socially comfortable, closer than most photographers. This proximity requires both physical courage and social confidence. At close range, the detail that tells the truth becomes visible: the texture of sunburned skin, the close examination of food, the quality of cheap materials.",
        },
        { type: "heading", content: "The Long Day" },
        {
          type: "paragraph",
          content:
            "Parr's documentary projects typically involve spending extended time in a specific environment — a resort, a village fete, a food market — moving slowly through it and photographing repeatedly. This extended presence allows him to find the specific moments that reveal larger truths, and to be present when the ordinary becomes extraordinary.",
        },
        { type: "heading", content: "The Collector's Eye" },
        {
          type: "paragraph",
          content:
            "Parr is also a serious collector of photobooks, kitsch objects, and vernacular photography. This collecting sensibility informs his documentary practice: he has an eye for the culturally specific, for the objects and images that define a time and a place, that is as much curatorial as photographic.",
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
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "British Documentary Photography" },
        {
          type: "paragraph",
          content:
            "Parr transformed British documentary photography. Before his mature work, the dominant tradition was sympathetic, black-and-white, compassionate — the humanist tradition of the 1950s and 60s. Parr's colour satire challenged this, creating a new possibility for documentary photography that was political but ironic, engaged but wry.",
        },
        { type: "heading", content: "Colour Documentary Photography" },
        {
          type: "paragraph",
          content:
            "Parr was among the first British photographers to use vivid colour as the primary medium for serious documentary work, at a time when colour was considered commercial and black and white was considered art. This decision changed British photography and has been enormously influential on subsequent generations.",
        },
        { type: "heading", content: "The Ethics of Satire in Photography" },
        {
          type: "paragraph",
          content:
            "The ongoing debate about Parr's work — affection or exploitation, satire or mockery — is one of the most important in contemporary photography's ethics. He has made the question of whose perspective is operating in a documentary photograph unavoidable, which is in itself a significant contribution.",
        },
        { type: "heading", content: "The Photobook Movement" },
        {
          type: "paragraph",
          content:
            "Parr, with Gerry Badger, wrote 'The Photobook: A History' — a three-volume encyclopaedia of photography books that transformed how the photobook is understood as an art form. This scholarly work has been enormously influential on photographers, collectors, and publishers worldwide.",
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
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Practical Lessons From His Practice" },
        {
          type: "paragraph",
          content:
            "Parr teaches the power of proximity, vivid colour, and the honest documentation of ordinary life — however uncomfortable that honesty might be.",
        },
        { type: "heading", content: "1. Move Closer" },
        {
          type: "paragraph",
          content:
            "Robert Capa's maxim — 'if your pictures aren't good enough, you aren't close enough' — is Parr's principle too. Move physically closer to your subjects than feels socially comfortable. Notice what detail becomes visible at close range that disappears at a polite distance.",
        },
        { type: "heading", content: "2. Photograph the Ordinary" },
        {
          type: "paragraph",
          content:
            "Parr documents supermarket queues, seaside lunches, village fetes, business conferences. The most revealing photographs are often of the most ordinary situations. What ordinary events in your environment have you been photographing around rather than of?",
        },
        { type: "heading", content: "3. Use Flash in Daylight" },
        {
          type: "paragraph",
          content:
            "Try using a flash unit in bright outdoor conditions. Notice what it does to colour saturation and skin tones. The effect is not naturalistic — it's something stranger and more revealing. Experiment with what this quality of light communicates.",
        },
        { type: "heading", content: "4. Consider Your Own Position" },
        {
          type: "paragraph",
          content:
            "Parr's work forces the question: what is your relationship to the people you photograph? Are you inside or outside the situation? Whose perspective is your photograph taken from? These questions don't have easy answers, but asking them makes you a more honest photographer.",
        },
        { type: "heading", content: "5. Build a Visual Archive" },
        {
          type: "paragraph",
          content:
            "Parr collects photobooks, objects, and images obsessively. His collecting sensibility informs his photographic eye. Build your own visual archive — not just photographs you admire but objects, advertisements, postcards, vernacular images that tell you something about the culture you're photographing.",
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

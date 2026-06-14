import type { Course } from "@/types"

const course: Course = {
  id: "realism-photography",
  title: "Realism in Photography",
  slug: "realism-photography",
  description:
    "Photography's oldest and most enduring commitment — depicting the world as it actually is. The realist tradition encompasses documentary photography, social portraiture, and street work united by a single ethical obligation: to show the truth of ordinary life without flattery, staging, or manipulation.",
  category: "style-movements",
  accentColor: "#8b7040",
  estimatedHours: 3,
  tags: ["realism", "documentary", "truthful", "social", "historical"],
  lessons: [
    {
      id: "rm-01-origins",
      title: "Origins & History",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "The Camera That Refused to Lie" },
        {
          type: "paragraph",
          content:
            "Point. Shoot. Don't lie. When the daguerreotype landed in 1839, photography was immediately understood as something radically different from painting — not an interpretation, but the world's own impression on a surface.",
        },
        {
          type: "paragraph",
          content:
            "By the 1860s, photographers were charging into Civil War battlefields and slum alleyways with one goal: show what's actually there. Evidence, not beauty.",
        },
        { type: "heading", content: "Photography Meets Social Justice" },
        {
          type: "paragraph",
          content:
            "Jacob Riis photographed New York tenements in the 1880s and basically invented reform photography. The camera's apparent objectivity made it the most persuasive argument in any social justice toolkit.",
        },
        { type: "heading", content: "Realism's Greatest Hits: A Timeline" },
        {
          type: "list",
          items: [
            "1839: Daguerreotype announced — photography positioned as mirror of nature",
            "1860s: Mathew Brady documents the American Civil War with unflinching honesty",
            "1880s: Jacob Riis photographs New York tenements for How the Other Half Lives",
            "1900s: Eugene Atget begins his systematic documentation of disappearing Paris",
            "1900s–1910s: Lewis Hine photographs child labour for the National Child Labor Committee",
            "1930s: FSA project — Dorothea Lange, Walker Evans, Gordon Parks document the Depression",
            "1950s–60s: The term 'social documentary' becomes codified in photography criticism",
          ],
        },
        {
          type: "quote",
          content: "I want to show the things that have to be corrected. I want to show the things that have to be appreciated.",
          author: "Lewis Hine",
        },
      ],
      quiz: {
        question: "What made photography a uniquely persuasive tool for social reform movements in the late 19th century?",
        options: [
          { id: "a", text: "Its ability to produce multiple identical copies from a single negative", isCorrect: false },
          { id: "b", text: "Its apparent objectivity — the sense that the photograph showed what was actually there, without an artist's interpretation", isCorrect: true },
          { id: "c", text: "Its low cost compared to painted or drawn illustrations", isCorrect: false },
          { id: "d", text: "Its ability to capture colour more accurately than other visual media", isCorrect: false },
        ],
        explanation:
          "Photography's persuasive power for social documentary came from its apparent objectivity. Unlike a drawing or painting — clearly an artist's interpretation — a photograph seemed to show what was actually there. This gave documentary photographs an evidentiary quality that made them powerful tools for social reform arguments. The camera appeared not to lie.",
      },
    },
    {
      id: "rm-02-practitioners",
      title: "Key Practitioners",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Eugene Atget (1857–1927)" },
        {
          type: "paragraph",
          content:
            "Atget spent thirty years making a photographic inventory of Paris before modernisation swallowed it whole. He called himself a craftsman supplying documents — the Surrealists called him a genius.",
        },
        { type: "heading", content: "Lewis Hine (1874–1940)" },
        {
          type: "paragraph",
          content:
            "Trained as a sociologist, Hine used the camera as a weapon. His photographs of child labourers in mills and mines weren't art — they were evidence that changed laws.",
        },
        {
          type: "image",
          content: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Lewis_Hine,_A_little_spinner_in_the_Mollahan_Mills,_Newberry,_S.C._(LOC_nclc.01451).jpg/1280px-Lewis_Hine,_A_little_spinner_in_the_Mollahan_Mills,_Newberry,_S.C._(LOC_nclc.01451).jpg",
          caption: "Lewis Hine, A little spinner in the Mollahan Mills, Newberry, South Carolina, c.1908 (Library of Congress)",
          alt: "Young girl working as a spinner in a cotton mill, photographed by Lewis Hine for the National Child Labor Committee",
        },
        { type: "heading", content: "Dorothea Lange (1895–1965)" },
        {
          type: "paragraph",
          content:
            "Lange started as a portrait photographer and became the face of Depression-era documentary. Migrant Mother (1936) is one of the most reproduced photographs ever made. Empathy and honesty — not opposites.",
        },
        { type: "heading", content: "Walker Evans (1903–1975)" },
        {
          type: "paragraph",
          content:
            "Evans brought cold formal precision where Lange brought warmth. His Alabama sharecropper portraits are unflinching — no sentiment, no flattery, just ruthless looking.",
        },
        { type: "heading", content: "August Sander (1876–1964)" },
        {
          type: "paragraph",
          content:
            "Sander set out to photograph all of German society, sorted by type. Farmers, artists, the unemployed — all treated identically. The Nazis found the democratic idea so threatening they destroyed his printing plates.",
        },
        {
          type: "quote",
          content: "I hold the human face in the highest regard, and I wish to be an honest broker between nature and the viewer.",
          author: "August Sander",
        },
      ],
      quiz: {
        question: "What distinguished Walker Evans's documentary approach from photographers like Dorothea Lange?",
        options: [
          { id: "a", text: "Evans worked exclusively in colour while Lange worked in black and white", isCorrect: false },
          { id: "b", text: "Evans brought formalist rigour and refused sentimentality, prioritising precise formal composition over emotional engagement", isCorrect: true },
          { id: "c", text: "Evans photographed exclusively wealthy subjects while Lange focused on poverty", isCorrect: false },
          { id: "d", text: "Evans worked only in studio conditions while Lange worked in the field", isCorrect: false },
        ],
        explanation:
          "Evans's distinctive contribution was his formalist rigour — a refusal of sentimentality and emotional manipulation in favour of frontal, precisely composed, documentary observation. Where Lange worked to create empathetic connection between viewer and subject, Evans worked to create a condition for careful looking. Both approaches are within the realist tradition, but they represent genuinely different philosophical positions about what documentary photography should do.",
      },
    },
    {
      id: "rm-03-characteristics",
      title: "Visual Characteristics",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "No Flattery Allowed" },
        {
          type: "paragraph",
          content:
            "Realist photography's defining move is the refusal to flatter. Tired, worn, imperfect — the subject is shown as-is, not as they'd like to appear.",
        },
        { type: "heading", content: "The Ordinary Is the Subject" },
        {
          type: "paragraph",
          content:
            "Factories, roadside camps, shop fronts. Realism is implicitly democratic — a farmhand's life deserves the same serious photographic attention as a president's.",
        },
        { type: "heading", content: "Use the Light That's Already There" },
        {
          type: "paragraph",
          content:
            "Realist photography works with available light — window glow, street ambience, whatever's there. Bringing in your own light starts changing the scene, which starts making it fiction.",
        },
        { type: "heading", content: "Don't Arrange Anything" },
        {
          type: "paragraph",
          content:
            "No moving props, no positioning subjects. What the camera records was there before the camera arrived. That's the line between documentary and everything else.",
        },
        {
          type: "quote",
          content: "The best thing about a picture is that it never changes, even when the people in it do.",
          author: "Andy Warhol",
        },
      ],
      quiz: {
        question: "What is the philosophical significance of using available light in realist documentary photography?",
        options: [
          { id: "a", text: "Available light is cheaper and requires less equipment than studio lighting setups", isCorrect: false },
          { id: "b", text: "Available light grounds the image in the actual conditions of the photographed space, maintaining the scene's integrity", isCorrect: true },
          { id: "c", text: "Available light is technically superior for producing sharp, detailed images of still subjects", isCorrect: false },
          { id: "d", text: "Available light was the only option before portable flash equipment became affordable", isCorrect: false },
        ],
        explanation:
          "The use of available light in realist photography is both practical and philosophical. Philosophically, the light that exists in a space belongs to that space — it is part of its reality, not something imposed by the photographer. Using it maintains the documentary integrity of the image. Bringing in artificial light begins to transform the scene, which puts the photographer in the business of construction rather than documentation.",
      },
    },
    {
      id: "rm-04-works",
      title: "Defining Works",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Migrant Mother — Dorothea Lange (1936)" },
        {
          type: "paragraph",
          content:
            "Six frames at a pea-pickers' camp in Nipomo, California. The last one — Florence Owens Thompson looking away, two children burying their faces in her shoulders — became the definitive image of the Depression.",
        },
        {
          type: "image",
          content: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Lange-MigrantMother02.jpg/1280px-Lange-MigrantMother02.jpg",
          caption: "Dorothea Lange, Migrant Mother, 1936 — Florence Owens Thompson with her children at a pea-pickers' camp, Nipomo, California (Library of Congress / Farm Security Administration)",
          alt: "Dorothea Lange's Migrant Mother photograph showing Florence Owens Thompson with two children leaning against her shoulders",
        },
        { type: "heading", content: "Let Us Now Praise Famous Men — Walker Evans & James Agee (1941)" },
        {
          type: "paragraph",
          content:
            "Eight weeks living with Alabama sharecroppers. Evans's frontal, unsentimental photographs paired with Agee's extraordinary prose. A commercial failure on release. Now: a masterpiece.",
        },
        { type: "heading", content: "People of the Twentieth Century — August Sander (1929–)" },
        {
          type: "paragraph",
          content:
            "Every social type in German society, photographed with the same frontal dignity. Farmers next to politicians next to the unemployed. The Nazis destroyed the printing plates in 1936 — they understood what equal treatment meant.",
        },
        { type: "heading", content: "New York Street Photography — Berenice Abbott, 1930s" },
        {
          type: "paragraph",
          content:
            "Abbott documented a city transforming at speed — old neighbourhoods vanishing, skyscrapers rising. She learned documentary rigour from Atget, then applied it to New York.",
        },
      ],
      quiz: {
        question: "Why were the printing plates for Sander's People of the Twentieth Century destroyed by the Nazi regime?",
        options: [
          { id: "a", text: "The project was considered too technically poor to represent German artistic achievement", isCorrect: false },
          { id: "b", text: "The project's democratic treatment of all social types as equally worthy subjects was considered politically threatening", isCorrect: true },
          { id: "c", text: "Sander had included photographs critical of Nazi party officials in the project", isCorrect: false },
          { id: "d", text: "The project was considered to be stolen property of the Weimar government", isCorrect: false },
        ],
        explanation:
          "Sander's project treated every social type — from wealthy industrialists to the unemployed and the disabled — with identical formal attention and dignity. This democratic levelling, which refused hierarchy between subjects, was precisely what made it threatening to a regime that depended on rigid social and racial hierarchies. The Nazis destroyed the printing plates in 1936.",
      },
    },
    {
      id: "rm-05-influence",
      title: "Modern Influence",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Alec Soth: The Great American Interior" },
        {
          type: "paragraph",
          content:
            "Soth travels the rural midwest — towns without social media presence, lives mainstream culture ignores — with a large-format camera and Evans's democratic eye. The realist tradition is alive.",
        },
        { type: "heading", content: "Rineke Dijkstra: Updating Sander" },
        {
          type: "paragraph",
          content:
            "Frontal portraits, natural light, large format. Dijkstra photographs adolescents on beaches and new mothers with the same methodological honesty Sander brought to German society. Same ethics, new subjects.",
        },
        { type: "heading", content: "Documentary Isn't Dead" },
        {
          type: "paragraph",
          content:
            "Lynsey Addario, Paolo Pellegrin, Pieter Hugo — contemporary photographers still doing exactly what Hine did. The context changed (Instagram, 24-hour news). The practice didn't.",
        },
        { type: "heading", content: "The Ethics Got Harder" },
        {
          type: "paragraph",
          content:
            "Who benefits from this image? What does being photographed cost the subject? These questions were always there — now global distribution and social media make them impossible to ignore.",
        },
      ],
      quiz: {
        question: "What connects Rineke Dijkstra's portrait practice to August Sander's earlier work?",
        options: [
          { id: "a", text: "Both photographed the same social subjects — German working-class communities — in the same locations", isCorrect: false },
          { id: "b", text: "Both used frontal, formally precise portraiture with natural light to document subjects without flattery or embellishment", isCorrect: true },
          { id: "c", text: "Both worked exclusively in black and white and refused to use colour photography", isCorrect: false },
          { id: "d", text: "Both photographed subjects exclusively in studio conditions with controlled lighting", isCorrect: false },
        ],
        explanation:
          "Dijkstra's connection to Sander is methodological and philosophical: she uses the same formal approach — frontal composition, large format, natural light — combined with the same democratic humanism that treats each subject with equal formal attention. She updates the practice by focusing on transitional moments of vulnerability (adolescence, new motherhood, military service) but the visual methodology is continuous with the realist portrait tradition Sander exemplifies.",
      },
    },
    {
      id: "rm-06-learn",
      title: "What You Can Learn",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "What Realism Actually Teaches You" },
        {
          type: "paragraph",
          content:
            "The realist tradition isn't just about technique — it's about ethics. What does it mean to show rather than construct? To document rather than flatter?",
        },
        { type: "heading", content: "1. Catch Yourself Flattering" },
        {
          type: "paragraph",
          content:
            "Flattery isn't always wrong — portraiture involves negotiation. But know when you're doing it. Ask yourself: what would this look like if I refused to make anyone look good?",
        },
        { type: "heading", content: "2. The Ordinary Is Enough" },
        {
          type: "paragraph",
          content:
            "Hine shot factories. Atget shot shop fronts. Stop waiting for something photogenic enough. The world in front of you is the subject.",
        },
        { type: "heading", content: "3. Work With Available Light Only" },
        {
          type: "paragraph",
          content:
            "Try a week with only the light that's already there. Window glow, street lamps, fluorescent overheads. It's not a compromise — it's a choice with its own visual intelligence.",
        },
        { type: "heading", content: "4. Build a Project, Not Just a Portfolio" },
        {
          type: "paragraph",
          content:
            "The realist tradition works at project scale. Pick one subject — a place, a community — and return to it for weeks. One visit doesn't make a documentary.",
        },
        { type: "heading", content: "5. Ask the Uncomfortable Questions" },
        {
          type: "paragraph",
          content:
            "What does this person get from being photographed? What do you get? What does the viewer get? There are no clean answers. Asking anyway is what separates serious documentary from extraction.",
        },
      ],
      reflection: {
        prompt:
          "Walker Evans said his goal was 'to let the subject speak for itself.' Choose an ordinary space in your everyday life — a workplace, a domestic room, a neighbourhood street — and spend thirty minutes photographing it with available light, no staging, and a commitment to showing it exactly as it is rather than as you wish it appeared. What truths does this approach reveal that a more stylised approach would suppress?",
      },
    },
  ],
}

export default course

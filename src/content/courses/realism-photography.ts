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
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "Photography as Document of Reality" },
        {
          type: "paragraph",
          content:
            "From the moment the daguerreotype was announced in 1839, photography was understood as something fundamentally different from painting: not an interpretation of the world, but the world's own impression upon a surface. This was the original promise and the original burden of the medium. Before the word 'realism' was applied to photographic practice, the medium itself embodied it.",
        },
        {
          type: "paragraph",
          content:
            "The early impulse to use photography as evidence rather than art shaped the medium's trajectory. By the 1860s and 1870s, photographers were documenting the American Civil War, Parisian streets, and working-class urban life with an intention that was explicitly documentary — to record what existed, not to beautify it.",
        },
        { type: "heading", content: "The Social Documentary Impulse" },
        {
          type: "paragraph",
          content:
            "The convergence of photography with social reform movements in the late 19th century gave realism its moral foundation. Jacob Riis's documentation of New York tenements in the 1880s established the model: the photograph as evidence in an argument for justice. Photography's apparent objectivity made it a uniquely persuasive tool for social documentation.",
        },
        { type: "heading", content: "Timeline of the Realist Tradition" },
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
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Eugene Atget (1857–1927)" },
        {
          type: "paragraph",
          content:
            "Atget spent three decades making a systematic photographic inventory of Paris — its streets, courtyards, shop fronts, parks, and working people — before the city was transformed by modernisation. He worked with large-format equipment and long exposures, producing images of extraordinary stillness and detail. He considered himself a craftsman supplying documents to artists, not an artist himself. The Surrealists recognised his images' dreamlike quality; subsequent generations recognised him as one of photography's greatest realists.",
        },
        { type: "heading", content: "Lewis Hine (1874–1940)" },
        {
          type: "paragraph",
          content:
            "Hine trained as a sociologist and used photography as a sociological instrument. His documentation of child labour in American mills, mines, and factories in the 1900s and 1910s was explicitly reform photography — made to provide evidence for legislative change. He later documented the construction of the Empire State Building, turning his lens upward to show the dignity of dangerous labour. His work established the model of photography in service of social justice.",
        },
        { type: "heading", content: "Dorothea Lange (1895–1965)" },
        {
          type: "paragraph",
          content:
            "Lange began as a portrait photographer and became the central figure of Depression-era social documentary through her work for the Farm Security Administration. Her photograph 'Migrant Mother' (1936) is among the most reproduced photographs ever made. She worked with extraordinary empathy — entering into genuine relationship with her subjects — while maintaining documentary honesty. Her work demonstrated that realism was not incompatible with profound human feeling.",
        },
        { type: "heading", content: "Walker Evans (1903–1975)" },
        {
          type: "paragraph",
          content:
            "Evans brought a formalist rigour to documentary photography that distinguished his approach from the empathetic engagement of Lange or Hine. His photographs of Alabama sharecroppers, made with James Agee for Let Us Now Praise Famous Men, document poverty with frontal directness and formal precision. Evans refused sentimentality; his photographs are the evidence of careful looking rather than emotional response. His influence on subsequent documentary photographers — and on American art photography generally — is enormous.",
        },
        { type: "heading", content: "August Sander (1876–1964)" },
        {
          type: "paragraph",
          content:
            "Sander's life project, People of the Twentieth Century, was a systematic photographic typology of German society — workers, farmers, craftsmen, artists, politicians, the unemployed — organised by social category. He photographed his subjects frontally, in their working environments, without flattery or dramatisation. The project was suppressed by the Nazis, who found its democratic levelling of social types politically threatening. It remains one of photography's most ambitious and achieved realist projects.",
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
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "The Unflattering Truth" },
        {
          type: "paragraph",
          content:
            "Realist photography's defining refusal is the refusal to flatter. Where portraiture traditionally involves the negotiation of a flattering image — the subject presenting their best self, the photographer collaborating in that presentation — realist photography resists this. The subject is shown as they are, not as they would like to appear. This refusal is both ethical and aesthetic: the truth of a face or a room includes what is worn, tired, poor, and imperfect.",
        },
        { type: "heading", content: "Ordinary Subjects" },
        {
          type: "paragraph",
          content:
            "Realism's subject matter is the ordinary world — working people, everyday spaces, unremarkable objects and moments. The tradition is implicitly democratic: it insists that the life of a factory worker or a Depression-era farmhand is as worthy of serious photographic attention as the life of a politician or artist. The ordinary is not background material; it is the subject.",
        },
        { type: "heading", content: "Available Light and Natural Conditions" },
        {
          type: "paragraph",
          content:
            "Realist photography generally works with the light that exists rather than creating the light it needs. Available light — window light, ambient outdoor light, existing interior illumination — grounds the image in the actual conditions of the photographed space. This is partly practical and partly philosophical: the light belongs to the scene and the scene belongs to the world being documented.",
        },
        { type: "heading", content: "No Staging" },
        {
          type: "paragraph",
          content:
            "The realist tradition's clearest prohibition is against staging — arranging subjects, moving objects, constructing scenes for the camera. Documentary photographers have debated the edges of this prohibition endlessly: asking someone to look up, returning to a location at a particular time, waiting for a scene to complete itself. But the core principle — that what the camera records was there without the camera — distinguishes realism from other photographic traditions.",
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
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "Migrant Mother — Dorothea Lange (1936)" },
        {
          type: "paragraph",
          content:
            "Made at a pea-pickers' camp in Nipomo, California, during the Depression, Lange's photograph of Florence Owens Thompson and her children is among the most widely reproduced photographs ever made. Lange made six frames; the final image, in which Thompson looks away from the camera while two children bury their faces in her shoulders, became the definitive image of Depression-era suffering. It demonstrates realism's capacity to contain enormous human complexity within a single frame.",
        },
        { type: "heading", content: "Let Us Now Praise Famous Men — Walker Evans & James Agee (1941)" },
        {
          type: "paragraph",
          content:
            "Evans and Agee spent eight weeks living with three Alabama sharecropper families in 1936, producing a book that combined Evans's photographs — frontal, formally rigorous, unsentimentalised — with Agee's extraordinary prose. Evans's photographs of the Gudger, Woods, and Ricketts families, their homes and possessions, remain the definitive statement of realist documentary photography's formal aspirations. The book was a commercial failure on publication and is now considered a masterpiece.",
        },
        { type: "heading", content: "People of the Twentieth Century — August Sander (1929–)" },
        {
          type: "paragraph",
          content:
            "Sander's systematic project documented German society as a series of social types — Farmers, Skilled Tradesmen, The Woman, Classes and Professions, The City, The Last People. His frontal portraits, made in natural light with a large-format camera, treat each subject with equal formal attention regardless of social standing. The project's democratic vision made it politically dangerous under the Nazi regime, which destroyed the printing plates.",
        },
        { type: "heading", content: "New York Street Photography — Berenice Abbott, 1930s" },
        {
          type: "paragraph",
          content:
            "Abbott's Changing New York project documented the city during a period of rapid transformation — the old city giving way to skyscrapers, elevated railways being demolished, immigrant neighbourhoods changing. Working for the Federal Art Project, she photographed both the vanishing and the emerging city with the systematic documentary intention she had absorbed from Atget. Her work established the template for urban documentary photography.",
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
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "Alec Soth and the American Interior" },
        {
          type: "paragraph",
          content:
            "Soth's large-format documentary projects — Sleeping by the Mississippi, Broken Manual, Songbook — are direct descendants of the Evans and Lange tradition. He travels through American spaces that mainstream culture ignores — the rural midwest, the margins of small towns, the lives of people without social media presence — and photographs them with the formal attention and democratic humanism of the realist tradition. His work demonstrates that the tradition is not merely historical.",
        },
        { type: "heading", content: "Rineke Dijkstra and the Portrait Tradition" },
        {
          type: "paragraph",
          content:
            "Dijkstra's frontal portraits of adolescents on beaches, new mothers, soldiers, and bullfighters develop Sander's portrait methodology into a contemporary practice. Her subjects are photographed directly, without flattery, in moments of physical and psychological transition. The formal precision of her approach — large format, natural light, frontal composition — connects explicitly to the realist portrait tradition.",
        },
        { type: "heading", content: "Contemporary Social Documentary" },
        {
          type: "paragraph",
          content:
            "Contemporary social documentary photography — work by photographers like Lynsey Addario, Paolo Pellegrin, and Pieter Hugo — continues the realist tradition's commitment to depicting difficult social realities without embellishment. The context has changed: digital distribution, Instagram, and the news cycle have transformed how documentary work reaches audiences, but the fundamental practice of sustained, honest engagement with social reality remains.",
        },
        { type: "heading", content: "The Ethics Debate" },
        {
          type: "paragraph",
          content:
            "Contemporary documentary photography has inherited the realist tradition's ethical tensions. The questions raised by Hine and Sander — who is the photographer in relation to the subject, what is owed to photographed people, whose interests does the documentary image serve — are more complex in an era of instant global distribution, social media, and heightened awareness of representation and power.",
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
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Practical Lessons From the Realist Tradition" },
        {
          type: "paragraph",
          content:
            "The realist tradition offers lessons not just in technique but in the ethics and philosophy of photographic practice — in what it means to document rather than construct, to show rather than interpret.",
        },
        { type: "heading", content: "1. Resist Flattery" },
        {
          type: "paragraph",
          content:
            "Notice when you are collaborating with a subject to produce a flattering image rather than an honest one. Flattery is not wrong — portraiture is negotiation — but knowing when you are doing it is essential. The realist tradition asks: what would this photograph look like if you refused flattery entirely?",
        },
        { type: "heading", content: "2. Photograph the Ordinary World" },
        {
          type: "paragraph",
          content:
            "Hine photographed factories, Lange photographed a roadside camp, Atget photographed shop fronts. The realist tradition insists that the unremarkable world around you is worthy of serious photographic attention. What ordinary spaces and people in your environment have you been overlooking because they don't seem photogenic enough?",
        },
        { type: "heading", content: "3. Work With Available Light" },
        {
          type: "paragraph",
          content:
            "Spend a period working exclusively with whatever light exists in the spaces you photograph. Notice what that constraint forces you to pay attention to — the quality of light through a window, the direction of shadow in an interior. Available light is not a compromise; it is a choice with its own visual intelligence.",
        },
        { type: "heading", content: "4. Build a Documentary Project" },
        {
          type: "paragraph",
          content:
            "The realist tradition works at the scale of the project, not the single image. Identify a subject — a community, a place, a social phenomenon — that you can return to over weeks or months. The sustained engagement that produces real documentary work cannot be accomplished in a single visit.",
        },
        { type: "heading", content: "5. Ask the Ethical Questions" },
        {
          type: "paragraph",
          content:
            "Every documentary photograph involves relationships of power between photographer and subject. Ask yourself: what does this person get from being photographed? What do I get? What does the viewer get? Who benefits from this image existing? These questions don't have comfortable answers, but asking them is part of what makes documentary photography a serious practice.",
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

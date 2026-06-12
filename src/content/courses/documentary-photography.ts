import type { Course } from "@/types"

const course: Course = {
  id: "documentary-photography",
  title: "Documentary Photography",
  slug: "documentary-photography",
  description:
    "Documentary photography as a sustained practice — the project as form, the long-term engagement as method, and the ethical obligations that distinguish serious documentary work from photojournalism. From the FSA to Magnum to the contemporary long-form project.",
  category: "style-movements",
  accentColor: "#6a6a6a",
  estimatedHours: 3,
  tags: ["documentary", "photojournalism", "social", "narrative", "truth"],
  lessons: [
    {
      id: "dp-01",
      title: "Origins & History",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "The Documentary Tradition" },
        {
          type: "paragraph",
          content:
            "Documentary photography as a named practice emerged in the 1930s, but its roots go back to photography's origins. From the moment photographers could carry equipment into the field — the American Civil War, the slums of New York, the factories of industrial Britain — there was a tradition of making photographs whose primary purpose was to show what existed, not to construct something beautiful.",
        },
        {
          type: "paragraph",
          content:
            "The term 'documentary' acquired its specific meaning in the context of film first — John Grierson's 1926 description of Flaherty's Moana as having 'documentary value' is the origin — and was adopted by photographers to describe sustained, intentional, socially engaged photographic work that went beyond single news images.",
        },
        { type: "heading", content: "The FSA Project" },
        {
          type: "paragraph",
          content:
            "The Farm Security Administration photography project (1935–1944), directed by Roy Stryker, is the foundational institutional expression of American documentary photography. Stryker employed photographers including Dorothea Lange, Walker Evans, Gordon Parks, Russell Lee, and Ben Shahn to document rural poverty and the effects of the Depression. The project produced over 175,000 images and established the documentary project — sustained, organised, purposeful — as photography's most serious form.",
        },
        { type: "heading", content: "Life Magazine and the Picture Essay" },
        {
          type: "paragraph",
          content:
            "Life magazine, founded in 1936, created the mass audience for documentary photography by distributing photographic essays to millions of readers. The picture essay — a sequence of photographs with text that told a story over multiple pages — became the defining form of mid-20th century documentary photography. Photographers including W. Eugene Smith, Alfred Eisenstaedt, and Gordon Parks developed the essay as an artistic and journalistic form within its pages.",
        },
        { type: "heading", content: "Magnum Photos" },
        {
          type: "paragraph",
          content:
            "Magnum Photos, founded in 1947 by Henri Cartier-Bresson, Robert Capa, George Rodger, and David 'Chim' Seymour, represented a revolution in the status of documentary photographers. As a cooperative owned by its photographer-members, Magnum gave photographers control over their negatives and their assignments — for the first time, documentary photographers could pursue their own projects rather than working entirely to editorial briefs.",
        },
        {
          type: "quote",
          content: "Photography is the simultaneous recognition, in a fraction of a second, of the significance of an event as well as of a precise organisation of forms which give that event its proper expression.",
          author: "Henri Cartier-Bresson",
        },
      ],
      quiz: {
        question: "What made Magnum Photos a revolution in documentary photography when it was founded in 1947?",
        options: [
          { id: "a", text: "It was the first photography agency to use 35mm cameras rather than large-format equipment", isCorrect: false },
          { id: "b", text: "As a photographer-owned cooperative, it gave members control over their negatives and the ability to pursue their own projects", isCorrect: true },
          { id: "c", text: "It was the first agency to exclusively represent photographers working in the documentary tradition", isCorrect: false },
          { id: "d", text: "It guaranteed photographers a minimum income regardless of editorial assignments", isCorrect: false },
        ],
        explanation:
          "The revolutionary aspect of Magnum was ownership and control. Before Magnum, photographers who worked for magazines and agencies typically surrendered their negatives and had little control over how their work was used. Magnum's cooperative structure meant photographers owned their negatives, controlled their archives, and could pursue personal projects — a fundamental shift in the status and autonomy of documentary photographers.",
      },
    },
    {
      id: "dp-02",
      title: "Key Practitioners",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Henri Cartier-Bresson (1908–2004)" },
        {
          type: "paragraph",
          content:
            "Cartier-Bresson is documentary photography's central theoretical figure as well as one of its greatest practitioners. His concept of the 'decisive moment' — the instant at which form and content converge in a perfect photographic image — defined the aspirations of a generation of photographers. He worked with a small Leica, moving invisibly through public spaces, making photographs of extraordinary formal precision and human richness. His book Images à la sauvette (The Decisive Moment, 1952) remains the most influential photography book ever published.",
        },
        { type: "heading", content: "Robert Frank (1924–2019)" },
        {
          type: "paragraph",
          content:
            "Frank's The Americans (1958) is the decisive rupture in the documentary tradition — the moment when the form turned inward, becoming subjective and personal rather than objective and evidential. Frank drove across America in 1955–56 making photographs that were dark, off-angle, blurred, emotionally weighted, and implicitly critical of American society. The book was rejected by American publishers and first published in France. Its influence on subsequent documentary photography — and on street photography — cannot be overstated.",
        },
        { type: "heading", content: "W. Eugene Smith (1918–1978)" },
        {
          type: "paragraph",
          content:
            "Smith is the defining figure of the picture essay tradition. His essays for Life magazine — Country Doctor (1948), Nurse Midwife (1951), A Man of Mercy (Albert Schweitzer, 1954) — established the form: a sustained, immersive engagement with a single subject over time, told through a sequence of photographs and text. His final major project, Minamata (1975), documented mercury poisoning in a Japanese fishing community with unflinching directness and produced one of documentary photography's most iconic single images.",
        },
        { type: "heading", content: "Diane Arbus (1923–1971)" },
        {
          type: "paragraph",
          content:
            "Arbus occupied a unique position in documentary photography: her subjects were people on the social margins — nudists, twins, dwarfs, transvestites, carnival performers — whom she photographed with a directness that was simultaneously empathetic and confrontational. Her square-format, flash-lit, frontally composed portraits implicate the viewer in the act of looking, refusing both the distance of reportage and the sentimentality of social documentary. Her posthumous monograph (1972) was a sensation.",
        },
        { type: "heading", content: "Mary Ellen Mark (1940–2015)" },
        {
          type: "paragraph",
          content:
            "Mark embodied the documentary tradition's commitment to long-term engagement. Her projects — on homeless youth in Seattle (Streetwise), heroin addiction in India, psychiatric patients — involved months and years of sustained presence with communities. She believed that meaningful documentary photography required genuine relationship with subjects, not observation at a distance. Her work is distinguished by the depth of access she achieved through extended engagement.",
        },
        {
          type: "quote",
          content: "I want to photograph people living on the edges of society. I want to document people who have been ignored.",
          author: "Mary Ellen Mark",
        },
      ],
      quiz: {
        question: "What made Robert Frank's The Americans a rupture in the documentary tradition?",
        options: [
          { id: "a", text: "It was the first documentary project to be published as a book rather than in a magazine format", isCorrect: false },
          { id: "b", text: "Frank introduced a subjective, personal, emotionally weighted approach that challenged documentary's claims to objectivity", isCorrect: true },
          { id: "c", text: "Frank's use of colour photography was unprecedented in serious documentary work at the time", isCorrect: false },
          { id: "d", text: "The project was the first to document American culture from the perspective of an outsider", isCorrect: false },
        ],
        explanation:
          "The Americans broke with documentary photography's tradition of apparent objectivity — the sense that the photographer was recording events as they actually were. Frank's photographs were visibly personal: dark, off-kilter, blurred, emotionally charged. They showed America not as it presented itself but as Frank felt it to be. This subjective turn was controversial and enormously influential, opening documentary photography to approaches that previous traditions had excluded.",
      },
    },
    {
      id: "dp-03",
      title: "Visual Characteristics",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "The Decisive Moment" },
        {
          type: "paragraph",
          content:
            "Cartier-Bresson's concept defines a visual ideal: the photograph made at the precise instant when the geometry of the frame and the significance of the event converge. The decisive moment is not simply the peak of action — it is the moment when the visual elements of the image are in their most resonant relationship. Documentary photographers trained in this tradition look for formal completion within the found world rather than constructing it.",
        },
        { type: "heading", content: "Series Over Singles" },
        {
          type: "paragraph",
          content:
            "Documentary photography's most powerful unit is not the single photograph but the series — the sequence of images that together create a narrative or argument that no individual image could sustain. W. Eugene Smith's picture essays work by accumulation: each image adds something, and the sequence creates a totality. This orientation toward the project and the series, rather than the decisive single image, is one of documentary photography's defining characteristics.",
        },
        { type: "heading", content: "Long-Term Engagement" },
        {
          type: "paragraph",
          content:
            "Serious documentary photography requires time. The photographs that come from a single afternoon's visit to a community are fundamentally different from photographs made after months of presence. Long-term engagement produces access that cannot be forced or shortened: people stop performing for the camera, reveal things they would not reveal to a stranger, allow photographs that would otherwise be refused.",
        },
        { type: "heading", content: "Narrative Coherence" },
        {
          type: "paragraph",
          content:
            "A documentary project is not simply a collection of photographs from the same location. It has a beginning, development, and culmination — it creates a coherent world that the viewer can enter and understand. This narrative coherence requires editorial judgement: knowing which images to include, which to omit, what sequence produces the most complete and honest account of the subject.",
        },
        {
          type: "quote",
          content: "The camera is an instrument that teaches people how to see without a camera.",
          author: "Dorothea Lange",
        },
      ],
      quiz: {
        question: "What distinguishes a documentary project from a collection of photographs taken in the same location?",
        options: [
          { id: "a", text: "A documentary project uses only black-and-white photography while a collection may use colour", isCorrect: false },
          { id: "b", text: "A documentary project has narrative coherence — a structured sequence that creates a world the viewer can enter and understand", isCorrect: true },
          { id: "c", text: "A documentary project must include a minimum number of photographs to qualify", isCorrect: false },
          { id: "d", text: "A documentary project requires the photographer to be physically present for at least one year", isCorrect: false },
        ],
        explanation:
          "The distinction between a documentary project and a mere collection of photographs from the same place is narrative coherence — the sense that the images together create something larger than their sum. A project has structure: it enters a world, explores it, and produces understanding. This requires editorial intelligence about selection and sequence, not just photographic skill. It is a compositional act at the scale of the book or exhibition.",
      },
    },
    {
      id: "dp-04",
      title: "Defining Works",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "The Americans — Robert Frank (1958)" },
        {
          type: "paragraph",
          content:
            "Frank's 83-photograph journey through mid-1950s America remains the most influential photography book ever made. The images — of jukeboxes, diners, parades, funerals, and the American flag recurring as ironic motif — are made with a restless, personal, subjective energy that broke every convention of the documentary tradition. The book was initially rejected by American publishers, first published by Delpire in Paris, and later became the photographer's bible for two generations of documentary and street photographers.",
        },
        { type: "heading", content: "Country Doctor — W. Eugene Smith (1948)" },
        {
          type: "paragraph",
          content:
            "Smith spent three weeks with Dr. Ernest Ceriani, a rural Colorado physician who was the only doctor for a community of 2,000 people. The resulting picture essay — published in Life magazine across 22 pages — is the model of the form: intimate, sustained, narrative, human. The essay shows Ceriani working with exhausted dedication across a range of situations, and its structure — the arc of days and cases — gives it the quality of a short story. It changed what picture essays could do.",
        },
        { type: "heading", content: "Diane Arbus Monograph (1972)" },
        {
          type: "paragraph",
          content:
            "Arbus's posthumous monograph, published the year after her death, was an immediate sensation: it sold out within days of publication and went through multiple printings. The book collected the work for which she is known — the square-format, flash-lit, frontal portraits of people on social margins — and forced a confrontation with documentary photography's relationship to the gaze, to the margin, and to the ethics of representation. It remains one of the most discussed photography books ever published.",
        },
        { type: "heading", content: "Streetwise — Mary Ellen Mark (1988)" },
        {
          type: "paragraph",
          content:
            "Mark's book about homeless teenagers in Seattle — which began as a magazine assignment and became a years-long project — is the definitive example of documentary photography's long-term engagement methodology. The teenagers she documented, particularly Tiny and Rat, became fully realised presences through the depth of access that only sustained relationship could produce. The project later became a documentary film. It is both a deeply humanist work and a troubling examination of what documentary photography costs its subjects.",
        },
      ],
      quiz: {
        question: "Why was W. Eugene Smith's Country Doctor significant for the picture essay form?",
        options: [
          { id: "a", text: "It was the first picture essay to use colour photography in a major magazine publication", isCorrect: false },
          { id: "b", text: "It demonstrated that sustained, intimate engagement with a single subject over time could produce narrative depth comparable to written journalism", isCorrect: true },
          { id: "c", text: "It was the first picture essay to take a political position rather than simply documenting its subject", isCorrect: false },
          { id: "d", text: "It proved that documentary photography could reach a larger audience than written reportage on the same subject", isCorrect: false },
        ],
        explanation:
          "Country Doctor was significant because it proved what the picture essay could achieve through sustained engagement. Smith spent three weeks with Dr. Ceriani, producing an essay with narrative arc, emotional depth, and structural integrity that single-day coverage could never have achieved. It became the template for serious picture-essay work — the demonstration that documentary photography's most powerful form required time, relationship, and editorial intelligence, not just skill with a camera.",
      },
    },
    {
      id: "dp-05",
      title: "Modern Influence",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "The Long-Form Documentary Project" },
        {
          type: "paragraph",
          content:
            "Contemporary photographers like Alec Soth, Jim Goldberg, Taryn Simon, and Susan Meiselas continue the documentary tradition's commitment to the sustained project. Their work appears in books and gallery exhibitions rather than primarily in magazines — a fundamental shift in how documentary photography reaches audiences — but its methodological commitment to long-term engagement and narrative coherence connects directly to Smith and Mark.",
        },
        { type: "heading", content: "Digital Distribution and Instagram" },
        {
          type: "paragraph",
          content:
            "Instagram and online publishing have democratised documentary photography's distribution while simultaneously fragmenting it. Work that would previously have required a magazine publisher or gallery can now reach global audiences directly. But the platform's emphasis on single images and engagement metrics works against the serial, project-based form that documentary photography's most serious practitioners consider its essential unit.",
        },
        { type: "heading", content: "The Ethics Debate" },
        {
          type: "paragraph",
          content:
            "Contemporary documentary photography has inherited all of the ethical tensions the tradition accumulated over a century, and added new ones. The questions of consent, representation, power, and the photographer's relationship to their subjects have become central to how documentary work is taught, reviewed, and received. Photographers like Zanele Muholi and Pieter Hugo have produced work that explicitly engages with these questions rather than treating them as peripheral.",
        },
        { type: "heading", content: "Documentary and Fiction" },
        {
          type: "paragraph",
          content:
            "A significant strand of contemporary photography consciously blurs the line between documentary and fiction — photographers like Gregory Crewdson, Jeff Wall, and Anna Gaskell construct elaborate staged scenes that mimic documentary aesthetics. The tension between these constructed quasi-documentary images and straightforward documentary photography has produced one of the most productive debates in contemporary photography.",
        },
      ],
      quiz: {
        question: "How has Instagram both helped and challenged contemporary documentary photography?",
        options: [
          { id: "a", text: "Instagram has improved documentary photography technically but reduced its commercial value", isCorrect: false },
          { id: "b", text: "Instagram enables direct global distribution but its emphasis on single images works against documentary's project-based, serial form", isCorrect: true },
          { id: "c", text: "Instagram has made documentary photography more accessible to working-class communities but harder to sell to galleries", isCorrect: false },
          { id: "d", text: "Instagram has replaced magazines as the primary venue for documentary photography without significant trade-offs", isCorrect: false },
        ],
        explanation:
          "Instagram has created genuine democratic access to distribution for documentary photographers, eliminating the previous gatekeeping role of magazines and agencies. But its platform mechanics — the single image, the scroll, engagement optimisation — work against documentary photography's most important formal characteristic: the series and the project as the essential unit of meaning. This tension is not resolved; it is one of the defining problems for contemporary documentary practitioners.",
      },
    },
    {
      id: "dp-06",
      title: "What You Can Learn",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Practical Lessons From Documentary Photography" },
        {
          type: "paragraph",
          content:
            "Documentary photography's lessons are as much methodological as visual — they concern how to work, how to develop relationships with subjects, and how to think about the ethics of representation, as much as they concern specific technical or compositional approaches.",
        },
        { type: "heading", content: "1. Commit to a Subject Over Time" },
        {
          type: "paragraph",
          content:
            "The single most important lesson of the documentary tradition is the value of sustained engagement. Identify a subject — a community, a place, a person's life — and return to it over weeks or months. Notice how your photographs change as your access and understanding deepen. The images you make on your tenth visit will be fundamentally different from those you make on the first.",
        },
        { type: "heading", content: "2. Think in Sequences" },
        {
          type: "paragraph",
          content:
            "Train yourself to think about how photographs relate to each other rather than existing in isolation. After any shooting session, sequence your images and ask: what does this sequence say that no individual photograph can say? What is missing — what photographs would complete this story? The sequence is the fundamental unit of serious documentary work.",
        },
        { type: "heading", content: "3. Study the Picture Essay Form" },
        {
          type: "paragraph",
          content:
            "Read Smith's Country Doctor, Frank's The Americans, and Mark's Streetwise as editorial constructions — pay attention to sequence, to the relationship between images, to how the project enters its subject and where it ends. The editorial intelligence that constructs a documentary project is a skill distinct from photographic skill, and it can be learned.",
        },
        { type: "heading", content: "4. Ask the Ethical Questions First" },
        {
          type: "paragraph",
          content:
            "Before you begin any documentary project, ask: what is my relationship to this subject? What does being photographed cost the people in these images? Who benefits from this work existing? These questions are not obstacles to the work; they are part of what makes documentary photography a serious practice rather than a extractive one.",
        },
        { type: "heading", content: "5. The Camera as a Tool for Seeing" },
        {
          type: "paragraph",
          content:
            "Dorothea Lange said that the camera teaches you to see without a camera. Use documentary practice as a discipline of sustained attention — showing up to the same place repeatedly, looking carefully at what changes and what stays the same. The photographs are the product; the attention is the practice.",
        },
      ],
      reflection: {
        prompt:
          "W. Eugene Smith spent three weeks with a rural doctor to produce Country Doctor. Think about a subject in your own life — a person, a community, a recurring event — that you could return to over an extended period. What would you need to do to earn the kind of access that produces genuinely intimate documentary photographs? What would change between your first visit and your tenth? Write a one-paragraph documentary project proposal, then go and make the first six photographs.",
      },
    },
  ],
}

export default course

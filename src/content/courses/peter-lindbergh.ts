import type { Course } from "@/types"

const course: Course = {
  id: "peter-lindbergh",
  title: "Peter Lindbergh",
  slug: "peter-lindbergh",
  description:
    "A study of Peter Lindbergh — the photographer who stripped fashion of artifice and gave us women as they actually are. Discover the man who launched the supermodel era and changed the grammar of fashion photography.",
  category: "great-photographers",
  accentColor: "#a0a0a0",
  estimatedHours: 3,
  tags: ["fashion", "documentary", "black-and-white", "natural", "portrait"],
  photographerId: "peter-lindbergh",
  lessons: [
    {
      id: "pl-01-biography",
      title: "Biography & Background",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "Peter Lindbergh (1944–2019, Lissa, Germany)" },
        {
          type: "paragraph",
          content:
            "Peter Lindbergh was born in 1944 in Lissa (now Leszno, Poland) and grew up in Duisburg, Germany. He first trained as a window dresser and later as a painter — studying at the Kunstakademie Krefeld — before turning to photography in his late twenties. This background in painting gave him an unusually composed eye for light, shadow, and emotional register.",
        },
        {
          type: "paragraph",
          content:
            "In 1978 he moved to Paris and began shooting for French Vogue. Within years he had become the most sought-after fashion photographer in the world — the man Anna Wintour called first. But Lindbergh's relationship with fashion was always ambivalent. He found its demand for artificial perfection troubling and spent his career pushing against it.",
        },
        {
          type: "heading",
          content: "Key Career Milestones",
        },
        {
          type: "list",
          items: [
            "1978: Moves to Paris; begins shooting for French Vogue",
            "1988: Shoots 'The New Supermodels' campaign — Crawford, Campbell, Turlington, Schiffer, MacPherson and others together for the first time",
            "1990: Shoots iconic British Vogue cover — the first issue under Anna Wintour's era — on a Malibu beach, launching the supermodel era",
            "1999: Documents Karl Lagerfeld's Chanel retrospective",
            "2017: Curates the Pirelli Calendar, choosing 'natural beauty' as his guiding principle",
            "2019: Dies in Paris, aged 74",
          ],
        },
        {
          type: "quote",
          content: "It's the photographer's responsibility to free women from the terror of youth and perfection.",
          author: "Peter Lindbergh",
        },
      ],
      quiz: {
        question: "Before becoming a photographer, Peter Lindbergh trained in which discipline?",
        options: [
          { id: "a", text: "Architecture", isCorrect: false },
          { id: "b", text: "Painting at the Kunstakademie Krefeld", isCorrect: true },
          { id: "c", text: "Cinema and film direction", isCorrect: false },
          { id: "d", text: "Graphic design", isCorrect: false },
        ],
        explanation:
          "Lindbergh studied painting before turning to photography. This background shaped his approach to composition and light, giving his images a pictorial quality distinct from photographers who came up through the fashion system.",
      },
    },
    {
      id: "pl-02-style",
      title: "Visual Style Analysis",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Against Artifice" },
        {
          type: "paragraph",
          content:
            "Lindbergh's visual style was built on a paradox: he was the most in-demand fashion photographer in the world, yet his entire project was an argument against fashion photography's conventions. No retouching. Minimal make-up. Natural light. Women as themselves.",
        },
        { type: "heading", content: "Black and White" },
        {
          type: "paragraph",
          content:
            "Lindbergh worked predominantly in black and white throughout his career. He believed colour could distract from emotion — that the absence of colour forces the eye to focus on expression, gesture, and light. His black and white was never simply monochrome; it was deeply modulated, with rich shadow and delicate highlight.",
        },
        { type: "heading", content: "Industrial Settings" },
        {
          type: "paragraph",
          content:
            "Many of Lindbergh's most celebrated images were made in industrial or unglamorous settings — warehouses, wastelands, beaches at dawn. He liked the tension between high fashion and raw environment. A model in haute couture standing in front of a steel factory is not an ironic image for Lindbergh; it is an honest one.",
        },
        { type: "heading", content: "The Unretouched Face" },
        {
          type: "paragraph",
          content:
            "Lindbergh insisted on showing his subjects without extensive retouching. Lines, pores, and age were not to be erased. This was not just an aesthetic choice but an ethical one — he believed fashion's demand for airbrushed perfection was harmful and dishonest. His late portraits of older women are among the most moving photographs in contemporary fashion.",
        },
        {
          type: "quote",
          content: "The most important thing is to bring out the truth of the person in front of you.",
          author: "Peter Lindbergh",
        },
      ],
      quiz: {
        question: "What is Peter Lindbergh's most consistent ethical position regarding his subjects' appearance?",
        options: [
          { id: "a", text: "He believed in heavy retouching to create an ideal beauty", isCorrect: false },
          { id: "b", text: "He insisted on natural appearance and minimal retouching", isCorrect: true },
          { id: "c", text: "He used only professional models with specific physical criteria", isCorrect: false },
          { id: "d", text: "He avoided photographing women entirely in later career", isCorrect: false },
        ],
        explanation:
          "Lindbergh's most consistent ethical position was against retouching. He believed fashion's demand for artificial perfection was harmful, and made it a condition of his work that images would not be excessively manipulated. He called this freeing women 'from the terror of youth and perfection.'",
      },
    },
    {
      id: "pl-03-works",
      title: "Signature Works",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "The Malibu Supermodels (1990)" },
        {
          type: "paragraph",
          content:
            "Shot for British Vogue on a Malibu beach at dawn for Anna Wintour's first issue as editor. Cindy Crawford, Naomi Campbell, Linda Evangelista, Tatjana Patitz, and Christy Turlington — jeans and white shirts, hair blowing, laughing. The image launched the supermodel era and was later referenced in George Michael's 'Freedom '90' video.",
        },
        { type: "heading", content: "Stories of the Sahara (2007)" },
        {
          type: "paragraph",
          content:
            "A cinematic project shot in the Tunisian desert. Women in couture against vast, empty landscapes — an almost melancholy confrontation between luxury and scale. The series demonstrated Lindbergh's ability to work in environments that seemed to dwarf his subjects without diminishing them.",
        },
        { type: "heading", content: "Untold Stories (2010)" },
        {
          type: "paragraph",
          content:
            "A book and exhibition documenting his subjects without the context of fashion — portraits that reveal rather than sell. Shot against plain backgrounds, the images have a psychological intensity more common to studio portraiture than fashion photography.",
        },
        { type: "heading", content: "Pirelli Calendar (2017)" },
        {
          type: "paragraph",
          content:
            "Lindbergh's Pirelli Calendar — perhaps the most discussed in the calendar's history — featured women including Nicole Kidman, Julianne Moore, and Patti Smith, photographed naturally, without extensive styling or retouching. It was a deliberate manifesto against the calendar's traditional emphasis on sexualised nudity.",
        },
      ],
      quiz: {
        question: "Which video director used the iconic Malibu supermodel image as direct inspiration for a famous 1990s music video?",
        options: [
          { id: "a", text: "Michel Gondry for Björk", isCorrect: false },
          { id: "b", text: "Spike Jonze for Weezer", isCorrect: false },
          { id: "c", text: "David Fincher for George Michael's 'Freedom '90'", isCorrect: true },
          { id: "d", text: "Anton Corbijn for Depeche Mode", isCorrect: false },
        ],
        explanation:
          "David Fincher directed George Michael's 'Freedom '90' video, which featured the same five supermodels from Lindbergh's Malibu shoot — Crawford, Campbell, Evangelista, Patitz, and Turlington — cementing the image's place in cultural history.",
      },
    },
    {
      id: "pl-04-techniques",
      title: "Techniques & Approach",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "Natural Light as Principle" },
        {
          type: "paragraph",
          content:
            "Lindbergh's commitment to natural light was both aesthetic and ethical. He believed that natural light respects its subject — it illuminates rather than transforms. He was known for shooting at dawn or dusk, in overcast conditions, or in the soft, directional light of open shade. This required patience and planning but produced images with a quality of honesty that studio light rarely achieves.",
        },
        { type: "heading", content: "The Cinematic Reference" },
        {
          type: "paragraph",
          content:
            "Lindbergh's primary references were not photographers but filmmakers — Ingmar Bergman, Wim Wenders, John Cassavetes. He was interested in the emotional truth of cinema, in faces caught between expressions, in the drama of a moment just before or just after the obvious one. His fashion images often read as stills from films that don't exist.",
        },
        { type: "heading", content: "Collaboration as Method" },
        {
          type: "paragraph",
          content:
            "Lindbergh's shoots were conversations, not productions. He worked with small teams and built genuine relationships with his subjects. Many of the world's most famous models — Crawford, Campbell, Evangelista — have cited him as the photographer with whom they felt most themselves. This trust shows in the images.",
        },
        { type: "heading", content: "Resisting Fashion's Timeline" },
        {
          type: "paragraph",
          content:
            "Fashion photography typically serves the season — images must be current, on-trend, disposable. Lindbergh resisted this by making images he hoped would last. He was uninterested in trend. His approach to fashion was archaeological: what is essential, permanent, true about the way these clothes relate to these people?",
        },
      ],
      quiz: {
        question: "Which art form most directly influenced Lindbergh's approach to capturing emotion in his photographs?",
        options: [
          { id: "a", text: "Classical painting, particularly the Old Masters", isCorrect: false },
          { id: "b", text: "Cinema, particularly the work of Bergman and Wenders", isCorrect: true },
          { id: "c", text: "Street photography, particularly the New York school", isCorrect: false },
          { id: "d", text: "Architectural photography", isCorrect: false },
        ],
        explanation:
          "Lindbergh's primary references were filmmakers rather than photographers — Bergman, Wenders, Cassavetes. He was interested in the emotional truth of cinema: faces between expressions, the moment before and after the obvious one. His images often read as stills from imaginary films.",
      },
    },
    {
      id: "pl-05-legacy",
      title: "Influence & Legacy",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "Changing Fashion Photography's Standards" },
        {
          type: "paragraph",
          content:
            "Lindbergh's most significant legacy is the argument — made through decades of work — that fashion photography does not require the erasure of humanity. He demonstrated that images could be commercially successful and emotionally honest simultaneously. In an era of extreme retouching and digital manipulation, this argument is more relevant than ever.",
        },
        { type: "heading", content: "The Supermodel Era" },
        {
          type: "paragraph",
          content:
            "Ironically for a photographer who opposed fashion's obsession with celebrity, Lindbergh's work helped create the supermodel era. His images of Crawford, Campbell, Evangelista, and others gave models individual identities and faces — they became people rather than mannequins. This was both his greatest commercial impact and something he viewed with ambivalence.",
        },
        { type: "heading", content: "Documentary Fashion" },
        {
          type: "paragraph",
          content:
            "The aesthetic of 'documentary fashion' — candid, unposed, shot on location with available light — owes much to Lindbergh. Photographers from Corinne Day to Harley Weir to Theo Wenner work in traditions he helped establish. His insistence that fashion photography could tell emotional truths opened the door for an entire generation.",
        },
        { type: "heading", content: "Against Digital Perfection" },
        {
          type: "paragraph",
          content:
            "In his final years Lindbergh became an increasingly prominent voice against the culture of digital retouching. His position — that showing the reality of a person's face is a form of respect — resonates more powerfully now than it did when he began saying it in the 1980s.",
        },
      ],
      quiz: {
        question: "Lindbergh's work helped create the 'supermodel era' — but how did he personally view this outcome?",
        options: [
          { id: "a", text: "He was proud to have elevated models to celebrity status", isCorrect: false },
          { id: "b", text: "He viewed it with ambivalence — it was counter to his values around human truth", isCorrect: true },
          { id: "c", text: "He actively promoted celebrity culture throughout his career", isCorrect: false },
          { id: "d", text: "He considered it irrelevant to his photographic project", isCorrect: false },
        ],
        explanation:
          "Though his images helped create the supermodel era, Lindbergh viewed celebrity culture with ambivalence. His project was always about human truth and emotional honesty — the opposite of the spectacle that surrounded the models he photographed.",
      },
    },
    {
      id: "pl-06-learn",
      title: "What You Can Learn From Lindbergh",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Practical Lessons From His Practice" },
        {
          type: "paragraph",
          content:
            "Lindbergh's work teaches a philosophy of photography that runs counter to most of the industry's values. That is exactly why it is worth studying.",
        },
        { type: "heading", content: "1. Prioritise Natural Light" },
        {
          type: "paragraph",
          content:
            "Commit to shooting in natural light for a month. Notice what different qualities of natural light do to your subjects — dawn, overcast, golden hour, shade. Natural light respects its subject in a way that artificial light rarely does.",
        },
        { type: "heading", content: "2. Resist Retouching" },
        {
          type: "paragraph",
          content:
            "Before reaching for the healing brush or smoothing filter, ask whether the 'flaw' you are about to remove is actually information. Lines, texture, and asymmetry tell us who people are. Decide consciously what you are removing and why.",
        },
        { type: "heading", content: "3. Study Cinema, Not Just Photography" },
        {
          type: "paragraph",
          content:
            "Lindbergh's approach to emotion came from filmmakers. Expand your visual references beyond photography. What can you learn about light from Bergman? About framing from Wenders? About character from Cassavetes?",
        },
        { type: "heading", content: "4. Build Genuine Relationships With Subjects" },
        {
          type: "paragraph",
          content:
            "The best portraits come from trust. Before you shoot, talk. Learn about your subject. Give them time to relax. The moment when someone forgets there is a camera present is often the most valuable moment.",
        },
        { type: "heading", content: "5. Photograph Against the Trend" },
        {
          type: "paragraph",
          content:
            "Lindbergh was always slightly behind or ahead of fashion's current moment. He was interested in what lasts. Look at the images that were considered 'old-fashioned' or 'too simple' in their day and often find the ones that age best.",
        },
      ],
      reflection: {
        prompt:
          "Lindbergh said his greatest responsibility was 'to free women from the terror of youth and perfection.' What standards of perfection do you apply to your own photography — in your subjects, in your technique, in your editing — that might be worth questioning?",
      },
    },
  ],
}

export default course

import type { Course } from "@/types"

const course: Course = {
  id: "fashion-history",
  title: "Fashion History",
  slug: "fashion-history",
  description:
    "A survey of fashion history from the House of Worth and haute couture through to streetwear and sustainability — the designers, movements, and cultural forces that shaped how we dress.",
  category: "fashion",
  accentColor: "#c8a0c8",
  coverImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Christian_Dior_-_1947.jpg/800px-Christian_Dior_-_1947.jpg",
  estimatedHours: 4,
  tags: ["fashion", "history", "haute-couture", "ready-to-wear", "style"],
  lessons: [
    {
      id: "fh-01-origins",
      title: "The Birth of Fashion: Worth to Poiret",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Worth: The First Designer Ego" },
        {
          type: "paragraph",
          content:
            "In 1858, Charles Frederick Worth put his own name on a garment label — and fashion was never the same. Before him, dressmakers did what clients asked. After him, clients came to the designer for a vision.",
        },
        {
          type: "paragraph",
          content:
            "Worth dressed empresses, invented the fashion season, and built the atelier model that still defines couture. He didn't just make clothes — he created the idea of the designer as creative authority.",
        },
        { type: "heading", content: "Poiret: Free the Body, Shackle the Legs" },
        {
          type: "paragraph",
          content:
            "Paul Poiret ditched the corset and borrowed shapes from Japan, Persia, and the harem. He turned fashion shows into theatrical spectacles — clothes as performance.",
        },
        {
          type: "paragraph",
          content:
            "Haute couture still follows the rules this era established: handmade, custom-fitted, legally defined. The designer's authority, the client's body, the artisan's hands — that's the trinity.",
        },
        {
          type: "quote",
          content: "I freed the bust, shackled the legs.",
          author: "Paul Poiret",
        },
      ],
      quiz: {
        question: "What did Charles Frederick Worth establish that made him the first true couturier?",
        options: [
          {
            id: "a",
            text: "He was the first designer to put his own name on garment labels, asserting the designer as creative authority",
            isCorrect: true,
          },
          {
            id: "b",
            text: "He invented the corset and made it the centrepiece of nineteenth-century fashion",
            isCorrect: false,
          },
          {
            id: "c",
            text: "He was the first dressmaker to open a shop on the rue de la Paix in Paris",
            isCorrect: false,
          },
          {
            id: "d",
            text: "He introduced orientalist influences to Western fashion design",
            isCorrect: false,
          },
        ],
        explanation:
          "Worth's decisive innovation was placing his own name on garment labels — establishing the designer, rather than the client, as the creative authority. Before Worth, dressmakers were skilled craftspeople who executed their clients' wishes. Worth changed the power relationship: clients came to him for his vision. This is the foundation of everything we call fashion today.",
      },
    },
    {
      id: "fh-02-century",
      title: "Chanel, Dior and the 20th Century",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Chanel: Less Is More, Always" },
        {
          type: "paragraph",
          content:
            "Chanel stole jersey from men's sportswear and made women's clothes that actually let them move. The little black dress, the quilted bag, the No. 5 — she invented modern elegance by taking things away.",
        },
        {
          type: "paragraph",
          content:
            "Her most radical move? Wearing fake pearls next to real ones. She turned costume jewellery into a deliberate choice — and invented a whole new kind of luxury based on taste, not wealth.",
        },
        { type: "heading", content: "Dior's New Look: Controversial, Enormous" },
        {
          type: "paragraph",
          content:
            "In 1947, Dior showed nipped waists, padded hips, and full skirts. Carmel Snow called it 'a new look' and the name stuck. Half the world was outraged. The other half copied it immediately.",
        },
        { type: "heading", content: "Balenciaga and YSL: The Masters" },
        {
          type: "paragraph",
          content:
            "Balenciaga could cut, sew, and construct a garment alone — Dior called him 'the master of us all.' YSL brought le smoking to women in 1966 and made prêt-à-porter legitimate as luxury.",
        },
        {
          type: "quote",
          content: "Balenciaga was the master of us all.",
          author: "Christian Dior",
        },
      ],
      quiz: {
        question: "What was Chanel's radical innovation in using costume jewellery?",
        options: [
          {
            id: "a",
            text: "She made it affordable by producing it in large quantities for mass-market stores",
            isCorrect: false,
          },
          {
            id: "b",
            text: "She wore it alongside real pearls to reframe adornment as aesthetic choice rather than economic necessity",
            isCorrect: true,
          },
          {
            id: "c",
            text: "She was the first designer to use precious metals in fashion accessories",
            isCorrect: false,
          },
          {
            id: "d",
            text: "She eliminated jewellery entirely from her designs to emphasise fabric and cut",
            isCorrect: false,
          },
        ],
        explanation:
          "Chanel's genius was in reframing the meaning of costume jewellery. By wearing faux pearls alongside real ones, she made the point that adornment was a matter of taste and intention, not economic display. This transformed jewellery from a status signal into a stylistic choice — and in doing so, invented a whole new kind of modern luxury.",
      },
    },
    {
      id: "fh-03-youth",
      title: "The Youthquake: 1960s-1980s",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "London Swings. Hemlines Rise." },
        {
          type: "paragraph",
          content:
            "Mary Quant opened Bazaar in 1955 and spent a decade shortening hemlines until she hit the mini. She named it after her favourite car. The mini wasn't just a skirt — it was a declaration of freedom.",
        },
        {
          type: "paragraph",
          content:
            "The boutique replaced the department store. Small, cheap, theatrical, disposable — Biba and Bazaar invented a new way to shop and a new kind of customer: young, restless, and setting the agenda.",
        },
        { type: "heading", content: "Punk: Anti-Fashion Becomes Fashion" },
        {
          type: "paragraph",
          content:
            "Vivienne Westwood and Malcolm McLaren built the visual language of punk on the King's Road: ripped fabric, safety pins, bondage trousers, confrontational slogans. Anti-fashion absorbed by fashion — it's fashion's oldest trick.",
        },
        { type: "heading", content: "Power Shoulders and the Japanese Invasion" },
        {
          type: "paragraph",
          content:
            "The 80s brought padded shoulders and corporate armour. Then Miyake, Yamamoto, and Kawakubo arrived in Paris with dark, asymmetric, oversized clothes that ignored every Western convention. Fashion was never the same.",
        },
      ],
      quiz: {
        question: "What term did Diana Vreeland coin to describe the cultural shift in which young people became fashion's primary audience in the 1960s?",
        options: [
          { id: "a", text: "The Style Revolution", isCorrect: false },
          { id: "b", text: "The Youthquake", isCorrect: true },
          { id: "c", text: "The Boutique Moment", isCorrect: false },
          { id: "d", text: "The Mod Awakening", isCorrect: false },
        ],
        explanation:
          "Diana Vreeland — editor of Vogue — coined 'Youthquake' to describe the seismic cultural shift of the 1960s, in which young people displaced the established fashion client (wealthy, older, couture-wearing) as the primary audience and subject of fashion. The mini-skirt, the boutique, and Swinging London were all expressions of this shift.",
      },
    },
    {
      id: "fh-04-global",
      title: "Deconstruction to Globalism: 1990s-2000s",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Margiela: Fashion Critiquing Itself" },
        {
          type: "paragraph",
          content:
            "Margiela showed clothes inside-out. Linings on the outside, seams visible, shoulder padding exposed. The white label sewn over the brand label was a refusal of branding — institutional critique from inside the institution.",
        },
        { type: "heading", content: "Supermodels, Grunge, and Two-Year Cycles" },
        {
          type: "paragraph",
          content:
            "Linda Evangelista didn't wake up for less than $10,000 a day. Then grunge arrived from Seattle and fashion absorbed it within seasons — distressed denim to runway to high street in under two years.",
        },
        { type: "heading", content: "Tom Ford Saved Gucci. Spectacularly." },
        {
          type: "paragraph",
          content:
            "Ford joined a Gucci in disarray and turned it into the most sexually confident brand of the decade. Velvet hipsters, satin shirts, the GG logo as status object. Then he did the same thing at YSL.",
        },
        { type: "heading", content: "Streetwear Goes Luxury" },
        {
          type: "paragraph",
          content:
            "Supreme launched in 1994 on Lafayette Street and made scarcity a product. The trainer became a luxury object. Fast fashion compressed the trend cycle. Two opposite forces reshaped the market simultaneously.",
        },
      ],
      quiz: {
        question: "What was the defining critical gesture of Martin Margiela's fashion practice?",
        options: [
          {
            id: "a",
            text: "He refused to show in Paris and presented his collections in unconventional spaces",
            isCorrect: false,
          },
          {
            id: "b",
            text: "He exposed construction — visible seams, turned-out linings, shown padding — as an institutional critique of fashion",
            isCorrect: true,
          },
          {
            id: "c",
            text: "He designed exclusively in white to reject the colour-driven fashion system",
            isCorrect: false,
          },
          {
            id: "d",
            text: "He was the first designer to refuse interviews and maintain personal anonymity",
            isCorrect: false,
          },
        ],
        explanation:
          "Margiela's critical gesture was exposing the construction of fashion garments — showing linings on the outside, leaving seams visible, using unfinished hems. This turned the garment into a commentary on the conventions it usually concealed. His white label (sewn over the brand label) was a refusal of branding. The work asked: what is fashion, and why do we pretend it is seamless?",
      },
    },
    {
      id: "fh-05-houses",
      title: "Fashion Houses: The Major Names",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Lagerfeld at Chanel: 36 Years of Reinvention" },
        {
          type: "paragraph",
          content:
            "Karl Lagerfeld took the Chanel codes — the quilted bag, the braid, the camellia — and treated them as a vocabulary, not a constraint. He redeployed them season after season without betraying them. Then he built the spectacle to match.",
        },
        { type: "heading", content: "Dior: A House That Keeps Changing" },
        {
          type: "paragraph",
          content:
            "YSL. Bohan. Ferré. Galliano — spectacular, then self-destructive. Raf Simons — minimal and divisive. Maria Grazia Chiuri — the first woman to lead Dior, and she brought feminism with her.",
        },
        { type: "heading", content: "Gucci, Balenciaga, Prada: Three Directions" },
        {
          type: "paragraph",
          content:
            "Michele's Gucci went maximalist — camp, layered, gender-fluid. Demna's Balenciaga went ironic — the destroyed cardigan at £4,000, the IKEA bag as luxury object. Miuccia's Prada just kept thinking.",
        },
        { type: "heading", content: "Hermès: Craft as the Ultimate Flex" },
        {
          type: "paragraph",
          content:
            "A Birkin takes 18–24 hours to make, by one artisan, start to finish. In a world of mass luxury, Hermès insists on the reality of craft. That insistence is its most powerful brand statement.",
        },
      ],
      quiz: {
        question: "What was Karl Lagerfeld's essential insight about sustaining a brand with a highly codified identity like Chanel?",
        options: [
          {
            id: "a",
            text: "That the codes should be retired each decade to keep the brand contemporary",
            isCorrect: false,
          },
          {
            id: "b",
            text: "That Chanel's codes could be endlessly redeployed and reinterpreted without being betrayed",
            isCorrect: true,
          },
          {
            id: "c",
            text: "That spectacular show productions could substitute for genuine design innovation",
            isCorrect: false,
          },
          {
            id: "d",
            text: "That the brand needed to expand into new product categories to remain relevant",
            isCorrect: false,
          },
        ],
        explanation:
          "Lagerfeld's genius at Chanel was his understanding that the house's visual codes — the quilted bag, the braid, the camellia, the two-tone shoe — were not constraints but a vocabulary. They could be redeployed in every season, scaled up or subverted, made contemporary or historical, without losing their meaning. This insight — that a strong code is an asset, not a limitation — is the foundation of sustainable luxury brand management.",
      },
    },
    {
      id: "fh-06-learn",
      title: "How to Read Fashion",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Clothes Are Never Neutral" },
        {
          type: "paragraph",
          content:
            "Every garment encodes something: class, tribe, era, aspiration. The New Look said femininity. The safety pin said refusal. The luxury trainer says the new prestige hierarchy. Learn to decode the message.",
        },
        { type: "heading", content: "Old Clothes Are Historical Documents" },
        {
          type: "paragraph",
          content:
            "An 80s power suit tells you about women in the corporate world. The unstructured linen jacket tells you about the reaction against that. Skirt length, shoulder structure, fabric weight — all historical data.",
        },
        { type: "heading", content: "The Silhouette Tells All" },
        {
          type: "paragraph",
          content:
            "Fashion historians can date a garment to within a few years by silhouette alone. The hourglass 50s, the geometric 60s, the padded 80s, the minimal 90s — each outline encodes a whole cultural moment.",
        },
        { type: "heading", content: "What to Look For" },
        {
          type: "list",
          items: [
            "Silhouette: What is the shape? Where does it place the body's emphasis?",
            "Fabric: What does the material choice communicate (luxury, utility, irony)?",
            "Construction: Is the making visible or concealed? What does that choice mean?",
            "Reference: What historical period, culture, or subculture is the garment in dialogue with?",
            "Context: Who is wearing it, and what does that wearer relationship communicate?",
          ],
        },
      ],
      reflection: {
        prompt:
          "Find a photograph of yourself, or someone you know well, from at least ten years ago. What does the clothing in the image communicate now that it may not have communicated then? What would those clothes say about the wearer to someone who didn't know them — their era, tribe, aspirations, class? What do your clothes say about you today?",
      },
    },
  ],
}

export default course

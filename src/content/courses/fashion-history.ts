import type { Course } from "@/types"

const course: Course = {
  id: "fashion-history",
  title: "Fashion History",
  slug: "fashion-history",
  description:
    "A survey of fashion history from the House of Worth and haute couture through to streetwear and sustainability — the designers, movements, and cultural forces that shaped how we dress.",
  category: "fashion",
  accentColor: "#c8a0c8",
  estimatedHours: 4,
  tags: ["fashion", "history", "haute-couture", "ready-to-wear", "style"],
  lessons: [
    {
      id: "fh-01-origins",
      title: "The Birth of Fashion: Worth to Poiret",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "Charles Frederick Worth and the First Couturier" },
        {
          type: "paragraph",
          content:
            "In 1858, Charles Frederick Worth opened his house on the rue de la Paix in Paris and changed the relationship between clothes and the person who made them. Worth was the first couturier to put his own name on a garment label — an assertion that the designer, not the client, was the creative authority. Before Worth, dressmakers executed their clients' wishes. After him, clients came to the designer for a vision.",
        },
        {
          type: "paragraph",
          content:
            "Worth dressed Empress Eugénie and the queens of Europe. He invented the concept of the fashion season — presenting new designs twice a year to buyers and clients. He established the house structure: a couturier at the head, supported by skilled petites mains (little hands) who executed the work by hand. The model of fashion as an industry was born in his ateliers.",
        },
        { type: "heading", content: "Paul Poiret and the Liberation of Fashion" },
        {
          type: "paragraph",
          content:
            "Paul Poiret, working in the first decades of the twentieth century, did two defining things: he liberated women from the corset, and he brought theatricality to fashion. Poiret drew on orientalism — Japanese kimonos, Persian robes, the harem trouser — to create shapes that had never appeared in Western fashion. He staged extraordinary parties as fashion spectacles, blurring the line between clothes and performance.",
        },
        {
          type: "paragraph",
          content:
            "Haute couture today retains the definition established by this era: garments made entirely by hand, custom-fitted to a named client, produced by a house that meets the legal criteria of the Chambre Syndicale de la Haute Couture in Paris. The client, the craft, and the creative authority of the designer remain the three constants.",
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
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Gabrielle Chanel: Modernity in Fabric" },
        {
          type: "paragraph",
          content:
            "Chanel's revolution was one of subtraction. She borrowed jersey from sportswear — a fabric previously used for men's undergarments — and used it to make women's clothes that allowed the body to move. The Chanel suit (braid-trimmed, collarless jacket over a straight skirt) proposed elegance without armour. The little black dress, introduced in 1926, democratised sophistication. Chanel No. 5, launched in 1921, was the first perfume built around a synthetic aldehyde rather than a natural flower — modernity in a bottle.",
        },
        {
          type: "paragraph",
          content:
            "Chanel's most radical act was making costume jewellery — previously the mark of those who could not afford real gems — a deliberate choice, worn alongside real pearls to signal that adornment was aesthetic, not economic. She created a new kind of luxury based on restraint rather than excess.",
        },
        { type: "heading", content: "Christian Dior: The New Look (1947)" },
        {
          type: "paragraph",
          content:
            "When Christian Dior presented his first collection in February 1947, Carmel Snow of Harper's Bazaar exclaimed: 'It's quite a new look!' The name stuck. The New Look was ultra-feminine in reaction to wartime austerity — nipped waists, padded hips, full skirts falling to mid-calf, soft shoulders. It was attacked as an insult to women who had spent the war working in practical clothes. It was also enormously, immediately influential.",
        },
        { type: "heading", content: "Balenciaga and YSL" },
        {
          type: "paragraph",
          content:
            "Cristóbal Balenciaga was considered by his peers — including Dior and Chanel — to be the supreme technician: 'the master.' He could cut, sew, and construct a garment entirely alone, a skill rare even among couturiers. Yves Saint Laurent, who had succeeded Dior and then founded his own house, introduced le smoking in 1966 — the tuxedo for women — and built the prêt-à-porter tradition in luxury fashion.",
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
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "Mary Quant and the Mini-Skirt" },
        {
          type: "paragraph",
          content:
            "In the early 1960s, a new centre of fashion gravity appeared: London. Mary Quant opened Bazaar on the King's Road in 1955 and spent the decade shortening hemlines until she arrived, around 1964, at the mini-skirt. She named it after her favourite car. The mini was not just a garment — it was a declaration of freedom, a break from the couture establishment, and the visual emblem of the Youthquake: Diana Vreeland's term for the cultural shift in which young people became the primary audience for fashion.",
        },
        {
          type: "paragraph",
          content:
            "The boutique — small, owner-run, selling directly to young customers — replaced the department store as the defining retail form of the decade. Biba, Granny Takes a Trip, and Quant's own Bazaar created a new kind of shopping experience: theatrical, cheap, disposable, exciting.",
        },
        { type: "heading", content: "Punk and the 1970s-1980s" },
        {
          type: "paragraph",
          content:
            "Vivienne Westwood and Malcolm McLaren's shop on the King's Road — which changed its name repeatedly, finally becoming 'Seditionaries' — created the visual language of punk: ripped fabric, bondage trousers, safety pins, confrontational slogans. Punk was anti-fashion that became fashion, which is one of the defining patterns of the twentieth century.",
        },
        { type: "heading", content: "Power Dressing and the Japanese Revolution" },
        {
          type: "paragraph",
          content:
            "The 1980s brought power dressing: padded shoulders, strong silhouettes, the suit as corporate armour. Giorgio Armani deconstructed the man's suit and made it soft, unstructured, relaxed — and sold it to women as power on different terms. In 1981, Issey Miyake, Yohji Yamamoto, and Rei Kawakubo of Comme des Garçons arrived on the Paris runways with clothes that ignored every convention of Western fashion — dark, asymmetric, unfinished, oversized. The confrontation was deliberate and permanent.",
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
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "Deconstruction: Martin Margiela" },
        {
          type: "paragraph",
          content:
            "Martin Margiela's Maison Martin Margiela, founded in 1988, made fashion think about itself. Margiela showed garments with their construction exposed — lining on the outside, seams visible, shoulder padding shown for what it was. He turned ready-made items into garments and used the white label as a refusal of branding. His work was an institutional critique of fashion from inside the institution.",
        },
        { type: "heading", content: "The Supermodel Era and Grunge" },
        {
          type: "paragraph",
          content:
            "The early 1990s supermodel era — Naomi Campbell, Linda Evangelista, Christy Turlington, Claudia Schiffer — elevated models to celebrity status. Evangelista's line ('we don't wake up for less than $10,000 a day') defined the moment. Then grunge arrived from Seattle and fashion absorbed it within seasons: distressed denim, flannel shirts, combat boots moved from the underground to the runway to the high street in under two years.",
        },
        { type: "heading", content: "Tom Ford's Gucci and the Luxury Revival" },
        {
          type: "paragraph",
          content:
            "Tom Ford joined Gucci in 1990 and became creative director in 1994, inheriting a brand in disarray. His intervention — sleek, overtly sexual, powerfully commercial — rescued Gucci and reframed what luxury fashion could be. His 1995 collection, featuring velvet hipsters and satin shirts open to the waist, was called one of the most influential of the decade. He then took over YSL.",
        },
        { type: "heading", content: "Streetwear as Luxury" },
        {
          type: "paragraph",
          content:
            "The late 1990s and 2000s saw streetwear — rooted in skate culture, hip-hop, and New York downtown — begin its ascent into luxury. Supreme, founded on Lafayette Street in 1994, operated on scarcity: limited drops that sold out in minutes. The trainer (sneaker) became a luxury object. Raf Simons began his career bringing intelligence and restraint from Belgian fashion. Fast fashion — Zara, H&M — simultaneously democratised trends by producing them at speed and low cost, compressing the cycle between runway and mass market.",
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
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "Chanel Under Lagerfeld" },
        {
          type: "paragraph",
          content:
            "Karl Lagerfeld took over as creative director of Chanel in 1983 and held the role until his death in 2019 — thirty-six years of continuous reinvention of one of fashion's most codified identities. He understood that the Chanel codes (the quilted bag, the braid, the camellia, the two-tone shoe) could be endlessly redeployed and reinterpreted without being betrayed. He also understood spectacle: Chanel shows became events, staged in the Grand Palais at extraordinary cost.",
        },
        { type: "heading", content: "Dior: A House of Creative Directors" },
        {
          type: "paragraph",
          content:
            "After Dior's death in 1957, YSL briefly succeeded him before being dismissed. The house passed through Marc Bohan, Gianfranco Ferré, and then John Galliano — whose tenure (1996–2011) was the most spectacular and ultimately self-destructive in fashion history. Raf Simons succeeded him in 2012 with minimal, intellectual collections that divided opinion. Maria Grazia Chiuri became the first woman to lead Dior in 2016 and introduced explicit feminist messaging: the 'We Should All Be Feminists' T-shirt.",
        },
        { type: "heading", content: "Gucci, Balenciaga and Prada" },
        {
          type: "paragraph",
          content:
            "Gucci under Alessandro Michele (2015–2022) became fashion's maximalist fantasy: layering, embroidery, historical reference, gender fluidity, camp. Balenciaga under Demna Gvasalia (from 2015) went the opposite direction — irony, ugliness as luxury, the destroyed cardigan, the IKEA bag as $2,000 object, fashion as cultural commentary. Miuccia Prada at Prada produced work that was consistently intellectual — fashion that thought, rather than fashion that simply seduced.",
        },
        { type: "heading", content: "Hermès: Craftsmanship as Luxury" },
        {
          type: "paragraph",
          content:
            "Hermès began as a saddlery in 1837 and has never fully left that origin. The leather goods — the Birkin, the Kelly, the Constance — are made by individual artisans who spend years learning the craft. A Birkin bag takes between 18 and 24 hours to make. The horse-and-carriage logo is not nostalgia: it is a statement that the values of the founding craft persist. In a fashion landscape of fast production and mass luxury, Hermès's insistence on genuine artisanal manufacture is its most powerful brand statement.",
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
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Fashion as Communication" },
        {
          type: "paragraph",
          content:
            "Clothes are not neutral. Every garment encodes information: class, aspiration, tribe, politics, era. The New Look's full skirt and nipped waist communicated femininity as a reaction against wartime utility. Punk's safety pins communicated refusal. The trainer-as-luxury-object communicates the new prestige hierarchy in which streetwear supersedes suiting. Learning to read fashion means learning to decode these messages.",
        },
        { type: "heading", content: "The Garment as Historical Object" },
        {
          type: "paragraph",
          content:
            "Any garment more than a decade old is a historical document. The shoulder padding of an 1980s power suit tells you about women's position in the corporate world. The unstructured linen jacket of the same decade tells you about a reaction against that position. The length of a skirt, the structure of a shoulder, the weight of a fabric — all of these are historical data.",
        },
        { type: "heading", content: "The Silhouette" },
        {
          type: "paragraph",
          content:
            "The silhouette — the outline of the body as defined by clothes — is the most defining single statement of any decade. Fashion historians can date a garment to within a few years by silhouette alone. The hourglass of the 1950s, the geometric shift of the 1960s, the fluid layers of the 1970s, the padded square of the 1980s, the minimal slip of the 1990s — each silhouette expresses a whole cultural moment.",
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

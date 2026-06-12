import type { Course } from "@/types"

const course: Course = {
  id: "luxury-branding",
  title: "Luxury Branding",
  slug: "luxury-branding",
  description:
    "The specific strategies and psychology of luxury brand building — how heritage, craftsmanship, exclusivity and price create the world's most powerful and desirable brands.",
  category: "marketing",
  accentColor: "#c8b878",
  estimatedHours: 3,
  tags: ["luxury", "branding", "heritage", "exclusivity", "premium"],
  lessons: [
    {
      id: "lb-01-luxury",
      title: "What Makes a Brand Luxury",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Three Things. All Three." },
        {
          type: "paragraph",
          content:
            "Luxury requires quality, price, and perception — simultaneously. Remove any one and the system collapses.",
        },
        {
          type: "paragraph",
          content:
            "Quality without perception is just premium. Perception without quality gets exposed. Price without both is just expensive.",
        },
        { type: "heading", content: "Premium vs Masstige vs Luxury" },
        {
          type: "paragraph",
          content:
            "Premium competes on product superiority. Masstige sells the luxury aesthetic at accessible prices — think Michael Kors, not Hermès.",
        },
        {
          type: "paragraph",
          content:
            "True luxury sells cultural meaning and genuine exclusivity. Access is limited by design, not just by price.",
        },
        { type: "heading", content: "The Signal Is the Product" },
        {
          type: "paragraph",
          content:
            "A Hermès bag at £300 wouldn't be desirable. The price is part of what it is — it tells a story about who has it.",
        },
        { type: "heading", content: "Different Arguments for Different Tiers" },
        {
          type: "paragraph",
          content:
            "Premium uses rational arguments. Masstige uses emotional ones. Luxury doesn't advertise to you — it's communicated by the calibre of people already wearing it.",
        },
      ],
      quiz: {
        question: "Why must true luxury require all three dimensions — quality, price, and perception — rather than any two alone?",
        options: [
          {
            id: "a",
            text: "Because industry regulatory bodies define luxury brands as meeting all three criteria simultaneously",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Because each dimension reinforces the others: without all three, the system collapses — quality without perception is merely premium, perception without quality will eventually be exposed",
            isCorrect: true,
          },
          {
            id: "c",
            text: "Because consumers use all three criteria when making purchasing decisions and will reject brands that score poorly on any one",
            isCorrect: false,
          },
          {
            id: "d",
            text: "Because the three dimensions correspond to the three types of buyer motivation — functional, emotional, and social",
            isCorrect: false,
          },
        ],
        explanation:
          "The three dimensions of luxury are mutually reinforcing and mutually necessary. Premium quality without premium perception is simply a high-end product — competent but not culturally significant. Premium perception without genuine quality is a lie that time and scrutiny will expose. Premium price without the other two is just expensive. Only when all three are present and consistent does the luxury system function: the craft justifies the price, the price signals the exclusivity, the exclusivity sustains the perception, and the perception makes the craft meaningful as a signal.",
      },
    },
    {
      id: "lb-02-pillars",
      title: "The Luxury Brand Pillars",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Heritage: Time Is a Brand Asset" },
        {
          type: "paragraph",
          content:
            "Hermès founded 1837. Chanel 1910. Louis Vuitton 1854. These dates aren't trivia — they signal permanence no new brand can replicate.",
        },
        {
          type: "paragraph",
          content:
            "Heritage says: we were making this before you were born, and we'll be making it after you're gone.",
        },
        { type: "heading", content: "Craftsmanship: The Story You Can Tell" },
        {
          type: "paragraph",
          content:
            "A Hermès Birkin is made by a single artisan, start to finish, 18–24 hours. The saddle-stitching is done by hand with two needles.",
        },
        {
          type: "paragraph",
          content:
            "These facts are true. But their real function is giving the buyer a story — one that moves the purchase from 'conspicuous excess' into 'connoisseurship'.",
        },
        { type: "heading", content: "Exclusivity: The Waiting List Is the Product" },
        {
          type: "paragraph",
          content:
            "The Birkin waiting list could be eliminated tomorrow by scaling production. It isn't — because the scarcity is the mechanism that makes it a positional good.",
        },
        { type: "heading", content: "Excellence: The Foundation Under Everything" },
        {
          type: "paragraph",
          content:
            "The product must actually justify the price. Feel of the leather, weight of the hardware, precision of the stitching — these are physical evidence that the price isn't pure fantasy.",
        },
      ],
      quiz: {
        question: "Why is the Hermès Birkin waiting list maintained as a strategy rather than eliminated by scaling production?",
        options: [
          {
            id: "a",
            text: "Because the artisanal manufacturing process genuinely cannot be scaled without compromising quality",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Because the scarcity is the mechanism that makes the bag a positional good — universal availability would destroy its signal value",
            isCorrect: true,
          },
          {
            id: "c",
            text: "Because Hermès's family ownership structure prevents the capital investment required for production scaling",
            isCorrect: false,
          },
          {
            id: "d",
            text: "Because the waiting list creates marketing value by keeping the bag in conversation and generating press coverage",
            isCorrect: false,
          },
        ],
        explanation:
          "The Birkin waiting list is a strategic choice, not a manufacturing constraint. It could be shortened or eliminated by expanding production capacity. It is not, because the scarcity is what makes the Birkin a positional good: its value derives partly from the fact that most people cannot have one immediately, that having one required the resources and relationship to wait. A Birkin that could be purchased off the shelf would no longer send the same signal, and the signal is the primary product. The waiting is part of what is being purchased.",
      },
    },
    {
      id: "lb-03-heritage",
      title: "Heritage and Storytelling",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "The Founding Narrative Is a Brand Asset" },
        {
          type: "paragraph",
          content:
            "Hermès began serving European cavalry. Chanel came from an orphanage. Vuitton made trunks for the French imperial court.",
        },
        {
          type: "paragraph",
          content:
            "Each story establishes founding values — and connects them to the present product. The origin is still in every object.",
        },
        { type: "heading", content: "Chanel's Myth" },
        {
          type: "paragraph",
          content:
            "Gabrielle Chanel, born to a laundress, raised in an orphanage, went on to redefine what women wear and what that wearing means.",
        },
        {
          type: "paragraph",
          content:
            "The myth — partly history, partly construction — positions Chanel as the ultimate outsider who transformed the inside. Every garment carries that subtext.",
        },
        { type: "heading", content: "Heritage vs Nostalgia" },
        {
          type: "paragraph",
          content:
            "Heritage is a foundation — values that make present work meaningful. Nostalgia treats the past as the product, producing replicas instead of evolution.",
        },
        { type: "heading", content: "You Can Build Heritage Without History" },
        {
          type: "paragraph",
          content:
            "A brand founded in 1985 with four decades of unwavering commitment is building genuine heritage — just more recently. Consistency over time is the mechanism, not a founding date.",
        },
      ],
      quiz: {
        question: "What is the distinction between heritage used as a foundation and heritage converted into nostalgia?",
        options: [
          {
            id: "a",
            text: "Heritage refers to recent design history while nostalgia refers to founding-era history more than 100 years ago",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Heritage establishes values that make present work meaningful; nostalgia treats the past as the product, producing replica and pastiche",
            isCorrect: true,
          },
          {
            id: "c",
            text: "Heritage is used in communications to older customers while nostalgia is deployed to reach younger aspirational buyers",
            isCorrect: false,
          },
          {
            id: "d",
            text: "Heritage references the brand's craft origins while nostalgia references the cultural moments in which the brand became famous",
            isCorrect: false,
          },
        ],
        explanation:
          "Heritage used as a foundation connects the brand's founding values to its present work: the same commitment to craft, the same relationship with materials, the same standard of quality — applied to contemporary products. This makes the heritage meaningful because it is living. Nostalgia treats the past as the product: it produces replicas of archive pieces, references historical aesthetics without connecting them to present values, and essentially runs backward. The nostalgic brand has stopped developing; the heritage brand continues to develop on its foundations.",
      },
    },
    {
      id: "lb-04-exclusivity",
      title: "Exclusivity and Controlled Distribution",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Where You Sell Is What You Are" },
        {
          type: "paragraph",
          content:
            "Hermès doesn't wholesale. No department stores, no multi-brand retailers. Every product sold in an Hermès boutique, by Hermès-trained staff.",
        },
        {
          type: "paragraph",
          content:
            "The boutique is a controlled environment — every element designed and maintained to express exactly what the brand is.",
        },
        { type: "heading", content: "Limiting Distribution Increases Desirability" },
        {
          type: "paragraph",
          content:
            "Standard logic: more distribution = more sales. Luxury logic: a brand available everywhere isn't exclusive — so it isn't luxury.",
        },
        {
          type: "paragraph",
          content:
            "Scarcity of access sustains desirability. The boutique in a curated location says something that a shelf in Selfridges cannot.",
        },
        { type: "heading", content: "The LVMH Tension" },
        {
          type: "paragraph",
          content:
            "LVMH is publicly listed — it must grow. But each brand's value depends on exclusivity. Volume growth risks diluting the exclusivity that makes the brands worth anything.",
        },
        { type: "heading", content: "The Solution: Grow Price, Not Volume" },
        {
          type: "paragraph",
          content:
            "LVMH has resolved this imperfectly by raising prices rather than expanding volume — and by using aspirational entry-level products that extend reach without touching the core.",
        },
      ],
      quiz: {
        question: "Why does Hermès refuse to wholesale its leather goods through department stores or multi-brand retailers?",
        options: [
          {
            id: "a",
            text: "Because wholesale margins would make the products unprofitable at Hermès's manufacturing cost structure",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Because the retail environment is part of the luxury experience — controlling distribution maintains control of every brand touchpoint",
            isCorrect: true,
          },
          {
            id: "c",
            text: "Because department stores have historically been unwilling to meet Hermès's minimum order requirements",
            isCorrect: false,
          },
          {
            id: "d",
            text: "Because exclusive distribution creates higher retail prices that support the brand's premium positioning",
            isCorrect: false,
          },
        ],
        explanation:
          "Hermès's refusal to wholesale is a strategy of total brand control. In a department store, Hermès leather goods would sit alongside other brands, be served by staff not trained by Hermès, and be encountered in an environment designed by the department store rather than by Hermès. All of these elements — the adjacency to other brands, the untrained staff, the alien environment — would compromise the luxury experience. By selling only in Hermès boutiques, the brand maintains control of every element of the customer encounter. The distribution strategy is the brand's quality standard extended to the point of sale.",
      },
    },
    {
      id: "lb-05-digital",
      title: "Luxury in the Digital Age",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "The Social Media Paradox" },
        {
          type: "paragraph",
          content:
            "Social media is radically democratic — anyone can follow. Luxury value depends on exclusivity — not everyone can have. These are in tension.",
        },
        {
          type: "paragraph",
          content:
            "Luxury brands have resolved this by treating Instagram as aspiration management: feed the dream without fully demystifying the brand.",
        },
        { type: "heading", content: "Digital-Native Luxury" },
        {
          type: "paragraph",
          content:
            "New luxury brands without 150-year histories build credibility differently: ultra-transparent manufacturing, extremely limited releases, and association with respected cultural figures.",
        },
        {
          type: "paragraph",
          content:
            "The fundamentals are the same. The tools are different.",
        },
        { type: "heading", content: "The Second-Hand Market Is Now an Asset" },
        {
          type: "paragraph",
          content:
            "A Birkin that resells above its purchase price isn't just a bag — it's an investment. The secondary market adds a rational justification to an emotional purchase.",
        },
        { type: "heading", content: "Digital Goods: Unresolved" },
        {
          type: "paragraph",
          content:
            "Scarcity can be engineered digitally. Signal value can potentially transfer. But the feel of the leather, the weight of the hardware — that can't be replicated. The jury's still out.",
        },
      ],
      quiz: {
        question: "How has the luxury industry's understanding of the second-hand market shifted — and what does the shift reveal about luxury value?",
        options: [
          {
            id: "a",
            text: "Luxury brands now partner with second-hand platforms to control quality standards and prevent counterfeit goods entering the market",
            isCorrect: false,
          },
          {
            id: "b",
            text: "The market is now understood as legitimising — it demonstrates that luxury goods hold value, adding a rational investment dimension to an emotional purchase",
            isCorrect: true,
          },
          {
            id: "c",
            text: "Luxury brands have accepted the second-hand market as a way of reaching younger customers who cannot afford primary purchases",
            isCorrect: false,
          },
          {
            id: "d",
            text: "The shift reflects luxury brands' recognition that second-hand purchases eventually convert into primary purchases",
            isCorrect: false,
          },
        ],
        explanation:
          "The luxury industry initially feared the second-hand market as competition for primary sales. The analysis has inverted. A Birkin that retains or appreciates in value is not just a luxury good — it is an investment object, and this adds a powerful rational dimension to an otherwise primarily emotional purchase. The secondary market demonstrates the durability of luxury value, which reinforces the primary purchase decision. This is why several luxury groups have either invested in or collaborated with second-hand platforms: they understand that the secondary market is part of the luxury ecosystem, not outside it.",
      },
    },
    {
      id: "lb-06-learn",
      title: "Build a Luxury Brand Concept",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Start From a Real Craft" },
        {
          type: "paragraph",
          content:
            "Hermès began with equestrian leather. Vuitton with trunks. Chanel with jersey dressmaking. Each started from genuine excellence — not a marketing concept.",
        },
        { type: "heading", content: "Build the Three Pillars First" },
        {
          type: "paragraph",
          content:
            "Before visual identity, before advertising: articulate the heritage story, the craftsmanship narrative, and the exclusivity strategy. Everything else flows from these.",
        },
        { type: "heading", content: "Identity Expresses the Pillars" },
        {
          type: "paragraph",
          content:
            "Typography communicates your relationship to time. Colour sets the emotional register. Photography style defines the world the brand inhabits. Tone of voice does the rest.",
        },
        { type: "heading", content: "Where You Sell Is Brand Strategy" },
        {
          type: "paragraph",
          content:
            "Where would this brand sell — and equally, where would it refuse to sell? The distribution decision is an exclusivity statement. Answer it before you choose a platform.",
        },
      ],
      reflection: {
        prompt:
          "Take a craft skill, material, or artisan process you find genuinely interesting — something made by hand, with depth, that takes time and skill to do well. Build the three luxury brand pillars around it: write the heritage story (where does this craft come from, what values does that origin establish?), the craftsmanship narrative (how is it made, by whom, with what, and why does that process justify a significant price?), and the exclusivity strategy (how will you limit access, and through what mechanism?). What would this brand look like? Sound like? Where would it sell — and where would it refuse to sell?",
      },
    },
  ],
}

export default course

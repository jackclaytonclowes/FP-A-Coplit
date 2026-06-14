import type { Course } from "@/types"

const course: Course = {
  id: "consumer-psychology",
  title: "Consumer Psychology",
  slug: "consumer-psychology",
  description:
    "How and why people make purchasing decisions — the psychology of desire, status, scarcity, and social proof that drives consumer behaviour.",
  category: "marketing",
  accentColor: "#a0b8c8",
  estimatedHours: 3,
  tags: ["psychology", "consumer", "behaviour", "decision-making", "marketing"],
  lessons: [
    {
      id: "cp-01-why",
      title: "Why People Buy",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Three Reasons People Buy Anything" },
        {
          type: "paragraph",
          content:
            "Functional: the purchase solves a problem. I need a coat because I'm cold. Emotional: the purchase creates a feeling — the texture, the way it changes how I carry myself. Social: the purchase communicates something. What it says about my taste, my tribe, my resources.",
        },
        {
          type: "paragraph",
          content:
            "Most significant purchases involve all three — but one dominates. Basic commodities: functional. Fashion and luxury: mostly social and emotional. Know which motivation you're speaking to before you open your mouth.",
        },
        { type: "heading", content: "Maslow: Useful, But Incomplete" },
        {
          type: "paragraph",
          content:
            "Maslow's hierarchy says status purchases happen only after basic needs are met. Useful as a first pass — but it badly underestimates social pressure. People with genuinely unmet basic needs still spend on status objects when the social stakes are high enough.",
        },
        { type: "heading", content: "Fashion Is Social Communication" },
        {
          type: "paragraph",
          content:
            "Fashion purchases are almost always primarily social. The garment communicates group membership, aspiration, values, distance from other groups. That's why fashion ads never show the product being worn functionally. They show someone living in a way you want to live.",
        },
      ],
      quiz: {
        question: "Why do most fashion and luxury advertisements show products being inhabited rather than used functionally?",
        options: [
          {
            id: "a",
            text: "Because fashion products have no functional use case that could be demonstrated in an advertisement",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Because fashion purchases are primarily socially and emotionally motivated — the communication is about aspiration and identity, not function",
            isCorrect: true,
          },
          {
            id: "c",
            text: "Because functional demonstrations are associated with lower-market products and would undermine luxury positioning",
            isCorrect: false,
          },
          {
            id: "d",
            text: "Because fashion products are too complex to demonstrate functionally in a short format advertisement",
            isCorrect: false,
          },
        ],
        explanation:
          "Fashion and luxury purchases are primarily socially and emotionally motivated — they are bought for what they communicate and how they make the wearer feel, not for their functional performance. The most effective advertising for these products therefore communicates the aspired social identity and emotional experience of owning them, not their functional attributes. Showing a coat keeping someone warm is irrelevant when the buyer's primary question is not 'will this keep me warm?' but 'what will this say about me?'",
      },
    },
    {
      id: "cp-02-desire",
      title: "Desire, Status and Aspiration",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Veblen: The Price Is the Point" },
        {
          type: "paragraph",
          content:
            "In 1899, Thorstein Veblen coined 'conspicuous consumption' — buying visible things at visible prices so others can register your wealth. The consumption was the product. Sound familiar?",
        },
        {
          type: "paragraph",
          content:
            "A Birkin costs tens of thousands not because it functions better. It's a visible signal that you can spare that sum on a handbag. The price isn't a cost — it's the message.",
        },
        { type: "heading", content: "Positional Goods: Value From Scarcity" },
        {
          type: "paragraph",
          content:
            "A positional good gets its value from other people not having it. Make the limited-edition sneaker universally available and its value collapses. Luxury brands understand this — the Birkin waiting list is a deliberate mechanism, not a manufacturing problem.",
        },
        { type: "heading", content: "The Dream Buyer" },
        {
          type: "paragraph",
          content:
            "Most people who follow Chanel on Instagram will never buy a Chanel suit. But their aspiration sustains the social meaning that makes the suit desirable to the people who can. The aspiration of the many creates the desirability that drives the purchases of the few.",
        },
      ],
      quiz: {
        question: "What is a positional good, and why does its value depend on scarcity?",
        options: [
          {
            id: "a",
            text: "A good whose position in the product range (premium vs. entry-level) determines its desirability",
            isCorrect: false,
          },
          {
            id: "b",
            text: "A good whose value derives partly from other people not having it — universal availability would collapse its value entirely",
            isCorrect: true,
          },
          {
            id: "c",
            text: "A good that signals the owner's position in a social hierarchy through its visible brand markings",
            isCorrect: false,
          },
          {
            id: "d",
            text: "A good that maintains its value over time and can be resold at or above its purchase price",
            isCorrect: false,
          },
        ],
        explanation:
          "Positional goods derive their value from their relative scarcity — from the fact that most people cannot have them. A limited-edition release, a waiting list, a made-to-order process: these are all mechanisms that make a good positional. If a positional good becomes universally available, its value collapses, because the meaning it communicates (I have something you cannot have) disappears. Luxury brands manage this dynamic deliberately: the scarcity is often manufactured rather than intrinsic, maintained as a brand strategy rather than a manufacturing constraint.",
      },
    },
    {
      id: "cp-03-biases",
      title: "Cognitive Biases in Consumer Decisions",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Anchoring: The First Number Wins" },
        {
          type: "paragraph",
          content:
            "The first price you see becomes the frame everything else is evaluated against. List the most expensive wine first and the rest of the list looks reasonable. Lead with your most expensive product and the range feels accessible. The anchor is the frame.",
        },
        { type: "heading", content: "Scarcity Bias and Social Proof" },
        {
          type: "paragraph",
          content:
            "'Only 3 left in stock.' The Birkin waiting list. The limited drop. All exploit scarcity bias — hard to get must be worth getting. Social proof works the other way: if lots of people are buying it, it's probably safe to buy. Both operate below conscious awareness.",
        },
        { type: "heading", content: "The Decoy Effect" },
        {
          type: "paragraph",
          content:
            "Add a third option that nobody chooses, and it changes which of the other two people pick. Print-only at £125 makes print + digital at £125 look like a steal — suddenly that's what everyone buys. The decoy exists only to shift perception. It never gets purchased.",
        },
        { type: "heading", content: "Loss Aversion: Losses Hurt Twice as Much" },
        {
          type: "paragraph",
          content:
            "Kahneman and Tversky found that the pain of losing £100 is roughly twice the pleasure of gaining £100. That's why 'don't miss out' outperforms 'get this' — and why warranties increase purchase rates. Frame purchases as preventing loss, not acquiring gain.",
        },
      ],
      quiz: {
        question: "How does the decoy effect work in pricing strategy?",
        options: [
          {
            id: "a",
            text: "By introducing a lower-priced option that makes premium products appear better value by comparison",
            isCorrect: false,
          },
          {
            id: "b",
            text: "By adding a third option that is never chosen but makes another existing option appear more attractive by comparison",
            isCorrect: true,
          },
          {
            id: "c",
            text: "By temporarily reducing prices to create the impression of a special offer that increases purchase urgency",
            isCorrect: false,
          },
          {
            id: "d",
            text: "By offering a premium version at a much higher price to make the standard version feel reasonably priced",
            isCorrect: false,
          },
        ],
        explanation:
          "The decoy effect works by changing the comparative context in which a choice is made. The decoy option is never the 'right' choice — it exists only to make another option look better by comparison. In the classic subscription example, the print-only option at £125 is the decoy: it makes print + digital at the same price look like exceptional value, shifting most buyers from digital-only (£59) to print + digital (£125). The decoy was never intended to be purchased; its entire function is structural, changing how the other options are perceived.",
      },
    },
    {
      id: "cp-04-luxury",
      title: "The Psychology of Luxury",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Why People Pay 100x More" },
        {
          type: "paragraph",
          content:
            "A Birkin buyer isn't making an irrational choice — they're buying something entirely different from what the functional buyer is buying. The Birkin isn't primarily a bag. It's a signal: resources, taste, access. The bag just delivers the signal.",
        },
        { type: "heading", content: "The Dimensions of Luxury Value" },
        {
          type: "list",
          items: [
            "Signal value: the bag communicates to others — resources, taste, cultural knowledge, access",
            "Craftmanship narrative: the 18-24 hours of a single artisan's work justify the price rationally, even if few buyers could distinguish the craft from a good imitation",
            "Heritage: the brand's 185-year history is part of what you own — you are buying into a continuity that predates you",
            "Material quality: the leather, the stitching, the hardware — the actual functional superiority of materials, present as a foundation even if not the primary motivation",
          ],
        },
        { type: "heading", content: "Higher Price, More Desirable" },
        {
          type: "paragraph",
          content:
            "Raising prices can increase desirability in luxury markets. Price isn't just a cost — it's a signal. A Hermès bag at £200 would be less desirable, not more accessible. Brands that discount damage their equity, sometimes permanently.",
        },
        { type: "heading", content: "The Aspirational Majority" },
        {
          type: "paragraph",
          content:
            "Most luxury brand followers can't afford the product. But their awareness is essential — the Birkin's signal value depends on the majority knowing what a Birkin is and knowing they can't have one. Luxury marketing targets two audiences at once: the actual buyer and the aspirational many.",
        },
        {
          type: "image",
          content: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Christian_Dior_-_1947.jpg/800px-Christian_Dior_-_1947.jpg",
          caption: "Christian Dior, 1947: the designer whose New Look demonstrated that luxury fashion sells aspiration and identity, not clothes — the aspirational majority made the actual purchases meaningful",
          alt: "Christian Dior photographed in 1947, the year his luxury fashion vision changed how the world dressed",
        },
      ],
      quiz: {
        question: "Why does discounting damage luxury brand equity more severely than it damages standard consumer brand equity?",
        options: [
          {
            id: "a",
            text: "Because luxury customers spend more, so the revenue lost per sale is greater",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Because price is part of the luxury product's signal value — discounting undermines the signal the product is designed to send",
            isCorrect: true,
          },
          {
            id: "c",
            text: "Because luxury brands have higher fixed costs and cannot sustain the margin reduction that discounting requires",
            isCorrect: false,
          },
          {
            id: "d",
            text: "Because luxury customers notice discounting more readily and form negative impressions of brand management",
            isCorrect: false,
          },
        ],
        explanation:
          "In luxury markets, price is not merely a cost — it is a signal. A £10,000 bag signals something that a £200 bag cannot signal, regardless of functional equivalence. When a luxury brand discounts, it undermines this signal: if you could get it at 30% off, the full-price purchase no longer signals what it was designed to signal. The product's social value — the reason most luxury buyers actually buy it — is damaged. This is why luxury brands prefer to destroy excess inventory rather than discount it: the destroyed goods damage nothing; the discounted goods damage the brand.",
      },
    },
    {
      id: "cp-05-emotion",
      title: "Emotion vs. Reason in Purchase Decisions",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "System 1 and System 2" },
        {
          type: "paragraph",
          content:
            "System 1 is fast, automatic, emotional — it runs below conscious awareness and makes most of our decisions. System 2 is slow, deliberate, rational — it reasons step by step and can override System 1, but usually doesn't bother. Most purchases: System 1.",
        },
        { type: "heading", content: "The Post-Purchase Rationalisation" },
        {
          type: "paragraph",
          content:
            "After buying expensive shoes, people report: 'they were well-made,' 'they'll last longer.' Maybe true. But almost certainly not the real reason. The actual decision was made before the rational analysis — System 1 saw the shoes and decided. System 2 wrote the justification.",
        },
        { type: "heading", content: "Feel First. Argue Second." },
        {
          type: "paragraph",
          content:
            "If most purchase decisions are System 1, the primary job of brand communication is to feel right — not to convince. The brand that produces the right emotional response in three seconds has done most of its work. Rational arguments serve System 2's need for a story, not the decision itself.",
        },
        { type: "heading", content: "The Implications" },
        {
          type: "paragraph",
          content:
            "For brand managers: lead with emotion, follow with reason. For creative directors: the image that feels right in three seconds outperforms a paragraph of product benefits. System 1 decides. System 2 explains.",
        },
        {
          type: "image",
          content: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Dali_Atomicus_%281948%29_by_Philippe_Halsman.jpg/1280px-Dali_Atomicus_%281948%29_by_Philippe_Halsman.jpg",
          caption: "Dalí Atomicus operates entirely on System 1: the visceral, immediate emotional impact of suspended chaos. The rational reading — atomic age anxiety, Surrealist philosophy — comes after",
          alt: "Dalí Atomicus, demonstrating how great images communicate emotionally before rationally",
        },
      ],
      quiz: {
        question: "What is 'post-purchase rationalisation' and why does it matter for brand communication strategy?",
        options: [
          {
            id: "a",
            text: "The process by which buyers return products when the rational case for the purchase proves unconvincing after reflection",
            isCorrect: false,
          },
          {
            id: "b",
            text: "The construction of rational reasons by System 2 to justify an emotional decision already made by System 1 — showing that rational arguments are supporting, not primary",
            isCorrect: true,
          },
          {
            id: "c",
            text: "The way brands use customer reviews and testimonials to provide rational evidence after an emotional campaign",
            isCorrect: false,
          },
          {
            id: "d",
            text: "The marketing strategy of following emotional brand advertising with rational product advertising in the post-purchase period",
            isCorrect: false,
          },
        ],
        explanation:
          "Post-purchase rationalisation is the process by which System 2 — the slow, rational, deliberate thinking system — constructs a logical narrative to justify a decision that was actually made by System 1 — the fast, emotional, automatic system. The buyer decided emotionally and then invented reasons. This has a direct implication for brand communication: if the actual decision is emotional and the rational reasons are constructed after the fact, then communication should primarily produce the right emotional response, with rational evidence as supporting material that helps System 2 feel good about the decision System 1 already made.",
      },
    },
    {
      id: "cp-06-learn",
      title: "Apply Consumer Psychology",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Turn the Lens on Yourself First" },
        {
          type: "paragraph",
          content:
            "The most useful application is autobiographical. Apply the frameworks to your own purchases — honestly. Your stated reasons are probably not your real reasons. The discomfort is the point. Understanding your own mechanisms makes you far better at activating them in others.",
        },
        { type: "heading", content: "The Real Reason" },
        {
          type: "paragraph",
          content:
            "The stated reason is the System 2 narrative: good value, will last, quality justified the price. The actual reason is the System 1 motivation: the status signal, the aspiration, the scarcity that made it urgent, the social proof that made it safe.",
        },
        { type: "heading", content: "The Psychological Mechanisms" },
        {
          type: "list",
          items: [
            "Status: I bought it because of what it communicates to others about my position, taste, or resources",
            "Aspiration: I bought it because it connects me to a version of myself or a lifestyle I aspire to",
            "Social proof: I bought it because people I want to identify with were buying it",
            "Scarcity: I bought it because limited availability created urgency — I feared missing out",
            "Emotional reward: I bought it because the act of buying it produced a specific positive feeling",
          ],
        },
        { type: "heading", content: "Apply It to Your Work" },
        {
          type: "paragraph",
          content:
            "What psychological need does your brand serve? Are you activating it deliberately or accidentally? Consumer psychology isn't just a framework for understanding buyers — it's a tool for designing better work.",
        },
      ],
      reflection: {
        prompt:
          "Think about your last significant discretionary purchase — something you chose rather than needed. What was the stated reason? Now identify the actual reason: which psychological mechanism was primarily at work — status, aspiration, social proof, scarcity, emotional reward, or something else? How does the gap between stated and actual reason feel to acknowledge? Now apply the same analysis to your creative work or the brand you work for: what psychological need does it serve, and is that need being served deliberately?",
      },
    },
  ],
}

export default course

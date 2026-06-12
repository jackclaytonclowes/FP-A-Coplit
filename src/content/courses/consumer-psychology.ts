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
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "Three Motivations for Purchase" },
        {
          type: "paragraph",
          content:
            "Consumer researchers generally identify three categories of motivation for purchase. Functional motivation: the purchase solves a problem. I need a coat because I am cold. The coat's primary value is its ability to keep me warm. Emotional motivation: the purchase creates a feeling. I want this coat because of how I feel wearing it — the texture of the fabric, the way it changes how I carry myself. Social motivation: the purchase communicates to others. I want this coat because of what it says about me — my taste, my resources, my tribe.",
        },
        {
          type: "paragraph",
          content:
            "In practice, most significant purchases involve all three motivations simultaneously, but one usually dominates. Most basic commodity purchases are primarily functional. Most fashion and luxury purchases are primarily social and emotional. Understanding which motivation dominates a purchase is the first step in communicating effectively about a product.",
        },
        { type: "heading", content: "Maslow and Its Limitations" },
        {
          type: "paragraph",
          content:
            "Abraham Maslow's hierarchy of needs (1943) proposes that human motivations are arranged in a hierarchy: physiological needs (food, shelter) at the base, then safety, then belonging, then esteem, then self-actualisation at the peak. Luxury purchases would sit at the esteem and self-actualisation levels — acquired only once the lower needs are met. The framework is useful as a first approximation, but it badly underestimates the power of status and belonging motivations at all income levels. People with genuinely unmet physiological needs will still spend on status objects if the social pressure is sufficiently strong.",
        },
        { type: "heading", content: "Fashion as Social Communication" },
        {
          type: "paragraph",
          content:
            "Fashion purchases are almost always primarily social. A garment is chosen not because it is the most functional covering available but because of what wearing it communicates: membership of a group, aspiration to a lifestyle, alignment with a set of values, distance from other groups. This is why fashion advertising rarely shows the product being used functionally. It shows the product being inhabited by someone living in a way the target customer aspires to.",
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
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Veblen and Conspicuous Consumption" },
        {
          type: "paragraph",
          content:
            "In 1899, Thorstein Veblen published 'The Theory of the Leisure Class' and coined the term 'conspicuous consumption': the purchase and display of goods for the purpose of signalling economic status. Veblen observed that wealthy Americans did not simply buy things for their functional value — they bought visible things at visible prices, so that others could observe and register their wealth. The consumption was its own product: the buying and owning was a form of communication.",
        },
        {
          type: "paragraph",
          content:
            "Veblen's insight remains the foundation of luxury marketing. A Hermès Birkin bag costs tens of thousands of pounds not because it functions better than bags costing a hundredth of the price, but because it is a visible signal of resources so substantial that their owner can spare that sum on a handbag. The price is the point. The price is the signal.",
        },
        { type: "heading", content: "Positional Goods" },
        {
          type: "paragraph",
          content:
            "Positional goods are goods whose value derives partly from other people not having them. The value of a limited-edition sneaker release is not the sneaker's function but its scarcity: the fact that most people cannot have it. If it were universally available, its positional value would collapse entirely. Luxury brands understand this. The Birkin waiting list is not just a manufacturing reality — it is a deliberate mechanism for maintaining the bag's status as a positional good.",
        },
        { type: "heading", content: "The Dream Buyer" },
        {
          type: "paragraph",
          content:
            "Luxury brands sell aspiration to many more people than can actually afford the products. Most people who follow Chanel on Instagram, who save images of Chanel campaigns, who stop at Chanel counters for samples, will never buy a Chanel suit. But they are part of the brand's market: the 'dream buyers' whose aspiration sustains the social meaning that makes the 'actual buyers' — those who can afford the suit — want to buy it. The aspiration of the many is what creates the desirability that drives the purchases of the few.",
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
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "Anchoring" },
        {
          type: "paragraph",
          content:
            "Anchoring is the tendency for the first piece of information encountered to disproportionately influence all subsequent judgements. In pricing, the first price seen becomes the anchor against which all other prices are evaluated. A restaurant that lists its most expensive bottle of wine first on the wine list makes all other wines look reasonable by comparison. A luxury brand that leads with its most expensive product makes the rest of the range feel accessible. The anchor is a frame; everything else is evaluated inside it.",
        },
        { type: "heading", content: "Scarcity Bias and Social Proof" },
        {
          type: "paragraph",
          content:
            "Scarcity bias is the tendency for limited availability to increase perceived value: the sense that if something is hard to get, it must be worth getting. 'Only 3 left in stock,' the Birkin waiting list, the limited-edition drop — all of these exploit scarcity bias. Social proof is the tendency to use other people's behaviour as evidence of the right choice: if many people are buying something, it is probably worth buying. Reviews, bestseller lists, and Instagram posts of celebrities wearing a brand all activate social proof. Both biases operate below conscious awareness.",
        },
        { type: "heading", content: "The Decoy Effect" },
        {
          type: "paragraph",
          content:
            "The decoy effect is the observation that adding a third option can change choices between two existing options, even though the third option is not itself chosen. Classic example: a subscription that offers digital ($59) or print + digital ($125). Most choose digital. Add a print-only option at $125, and suddenly print + digital — the same price, but now 'better value' compared to print-only — is chosen by most. The decoy (print-only) is never purchased; its function is to make another option look attractive by comparison.",
        },
        { type: "heading", content: "Loss Aversion" },
        {
          type: "paragraph",
          content:
            "Loss aversion — identified by Kahneman and Tversky in 1979 — is the finding that people feel losses approximately twice as strongly as equivalent gains. The pain of losing £100 is roughly twice the pleasure of gaining £100. This has significant implications for consumer psychology: framing a purchase as preventing a loss ('don't miss out') is more effective than framing it as acquiring a gain ('get this'). It also explains why warranties and guarantees increase purchase rates: they convert a potential loss (buying a product that breaks) into a protected gain.",
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
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "Why People Pay 100x More" },
        {
          type: "paragraph",
          content:
            "A Hermès Birkin bag can cost more than a car. A functional bag of equal carrying capacity can be purchased for a tiny fraction of the price. The Birkin buyer is not making an irrational choice — they are purchasing something entirely different from what the functional buyer is purchasing. The Birkin is not primarily a bag. It is a signal: of resources, of taste, of access (you had to wait for it, which means you have the patience and the relationship to wait). The bag is the delivery vehicle for the signal.",
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
        { type: "heading", content: "Counter-Intuitive Luxury Pricing" },
        {
          type: "paragraph",
          content:
            "One of the most counter-intuitive findings in luxury marketing is that raising prices can increase desirability. At standard price points, higher price reduces demand (the normal demand curve). In luxury markets, higher price increases perceived value and desirability — up to a point. This is because price is not just a cost; it is a signal. A Hermès bag that cost £200 would be less desirable, not more accessible — the price is part of what makes it what it is. Luxury brands that discount damage their brand equity, sometimes permanently.",
        },
        { type: "heading", content: "The Aspirational Majority" },
        {
          type: "paragraph",
          content:
            "Most people who are aware of luxury brands cannot afford them. But their awareness and aspiration is essential to the brand's value. The Birkin's signal value depends on the majority of people knowing what a Birkin is and knowing they cannot have one. Without the aspirational majority who know and desire the brand, the signal sent to the few who actually buy it would be meaningless. Luxury marketing therefore targets two audiences simultaneously: the actual buyer (with the price and the product) and the aspirational majority (with the brand's cultural presence).",
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
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "System 1 and System 2" },
        {
          type: "paragraph",
          content:
            "Daniel Kahneman's framework distinguishes between two modes of thinking. System 1 is fast, automatic, emotional, and intuitive: it operates below conscious awareness, makes rapid judgements, and is responsible for most of our immediate responses to the world. System 2 is slow, deliberate, rational, and effortful: it reasons through problems step by step and can override System 1's responses when given time and attention. Most human decisions — including most purchase decisions — are made by System 1 and subsequently rationalised by System 2.",
        },
        { type: "heading", content: "The Post-Purchase Rationalisation" },
        {
          type: "paragraph",
          content:
            "When someone buys an expensive pair of shoes, they typically report reasons that sound System 2: 'they were well-made,' 'they'll last longer than cheaper alternatives,' 'the leather was superior.' These reasons may be true. But they are almost certainly not the primary driver of the purchase. The actual decision was made before the rational analysis: a System 1 response to seeing the shoes, to the feeling they produced, to the social signal they sent. System 2 then constructed a rational narrative that justified the System 1 decision — this is post-purchase rationalisation.",
        },
        { type: "heading", content: "What This Means for Brand Communication" },
        {
          type: "paragraph",
          content:
            "If most purchase decisions are System 1 — emotional, automatic, intuitive — then the primary job of brand communication is not to convince but to feel right. The brand that produces the right emotional response in the first fraction of a second of encounter has already done most of its work. The rational arguments about quality, value, and durability serve System 2's need for a story — they are necessary, but they are supporting, not primary. This is why great brand communications work emotionally first and rationally second.",
        },
        { type: "heading", content: "The Implications" },
        {
          type: "paragraph",
          content:
            "For brand managers: lead with emotion, follow with reason. For creative directors: the image that produces the right feeling in three seconds has done more work than a paragraph of product benefits. For anyone building a creative practice: the work that feels right to the right person matters more than the work that argues most coherently for itself. System 1 decides; System 2 explains.",
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
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Turning the Lens Inward" },
        {
          type: "paragraph",
          content:
            "The most useful application of consumer psychology is autobiographical: applying the frameworks to your own purchasing behaviour. This is uncomfortable, because it requires honest acknowledgement that your stated reasons for buying things are often not your real reasons. But the discomfort is the point. The person who can accurately identify the psychological mechanism behind their own purchases is in a far better position to design products and communications that activate those mechanisms in others.",
        },
        { type: "heading", content: "The Real Reason" },
        {
          type: "paragraph",
          content:
            "For any significant discretionary purchase — a piece of clothing, a piece of technology, an experience — the exercise is to identify the stated reason and the actual reason. The stated reason is the System 2 narrative: it was good value, it will last, the quality justified the price. The actual reason is the System 1 motivation: the status signal it sent, the aspiration it expressed, the social group membership it conferred, the scarcity that made it feel urgent, the social proof that made it feel safe.",
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
        { type: "heading", content: "Applying It to Your Work" },
        {
          type: "paragraph",
          content:
            "The same analysis applies to work you create or contribute to. What psychological need does your work serve? If you are building a brand, which of these mechanisms are you activating — and are you activating them deliberately or accidentally? If you are creating content, what emotional response are you producing, and does that response serve the brand's positioning? Consumer psychology is not just a framework for understanding buyers. It is a tool for designing better work.",
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

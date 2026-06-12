import type { Course } from "@/types"

const course: Course = {
  id: "brand-strategy",
  title: "Brand Strategy",
  slug: "brand-strategy",
  description:
    "The fundamentals of brand strategy — how brands are built, positioned, and sustained. From brand identity to brand architecture, with case studies in fashion, luxury and culture.",
  category: "marketing",
  accentColor: "#c8b078",
  estimatedHours: 3,
  tags: ["brand", "strategy", "identity", "positioning", "marketing"],
  lessons: [
    {
      id: "bs-01-brand",
      title: "What Is a Brand?",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "A Brand Is a Promise" },
        {
          type: "paragraph",
          content:
            "A brand isn't the thing you make — it's what people expect when they hear your name. Walk into a Chanel boutique and you already know what you'll find. Those expectations are the brand. The products are just the delivery mechanism.",
        },
        {
          type: "paragraph",
          content:
            "Marty Neumeier nailed it: 'A brand is not what you say it is. It's what they say it is.' You can intend to be modern and innovative. If customers experience you as old-fashioned and indifferent, that's the brand. Strategy is closing that gap.",
        },
        { type: "heading", content: "Brand vs. Product: Not the Same Thing" },
        {
          type: "paragraph",
          content:
            "Products can be copied. Brands can't. Anyone can make a quilted leather bag with a chain strap. Only Chanel can make a Chanel bag — an object carrying meaning accumulated across a century.",
        },
        { type: "heading", content: "Case Studies in Brand Meaning" },
        {
          type: "list",
          items: [
            "Apple: simplicity and human technology — the brand promise that technology should serve human intuition, not require adaptation to it",
            "Chanel: eternal modernity — classic forms that never become dated because they were never fully of any single moment",
            "Nike: athletic aspiration — the internal struggle that precedes every physical act, and the decision to proceed anyway",
          ],
        },
      ],
      quiz: {
        question: "What does Marty Neumeier's definition — 'A brand is not what you say it is. It's what they say it is' — tell us about brand management?",
        options: [
          {
            id: "a",
            text: "That marketing communications are more important than product quality in building a brand",
            isCorrect: false,
          },
          {
            id: "b",
            text: "That the brand exists in the customer's perception, not the company's intention — and strategy must close that gap",
            isCorrect: true,
          },
          {
            id: "c",
            text: "That word-of-mouth and customer reviews are more valuable than paid advertising",
            isCorrect: false,
          },
          {
            id: "d",
            text: "That brand identity documents and guidelines are ultimately ineffective at controlling brand perception",
            isCorrect: false,
          },
        ],
        explanation:
          "Neumeier's definition locates the brand in the customer's experience rather than the company's intention. This has a crucial practical implication: brand strategy cannot stop at defining what you want to be. It must include the delivery mechanisms — product quality, service, communications, retail environment — that create the intended experience in the customer's actual encounter with the brand. The gap between intended brand and experienced brand is where most brand strategy fails.",
      },
    },
    {
      id: "bs-02-positioning",
      title: "Brand Positioning",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "'What Are You, and Who Are You For?'" },
        {
          type: "paragraph",
          content:
            "Positioning answers two questions in the consumer's mind: what are you, and who are you for? A brand that can't answer clearly isn't positioned. You need three things: category, differentiation, and target. All three, specific.",
        },
        { type: "heading", content: "The Positioning Statement (Don't Skip It)" },
        {
          type: "paragraph",
          content:
            "The structure: 'For [target customer] who [needs or wants], [brand] is the [category] that [benefit] because [reason to believe].' The template is just a checklist — but every brand strategy needs to answer all four questions it asks.",
        },
        { type: "heading", content: "Map Your Competitive Space" },
        {
          type: "paragraph",
          content:
            "A positioning map plots brands on two axes — price vs. quality, heritage vs. contemporary — to show where you sit and where the gaps are. It oversimplifies. That's the point. Simplification reveals the space no one is occupying.",
        },
        { type: "heading", content: "Red Ocean vs. Blue Ocean" },
        {
          type: "paragraph",
          content:
            "Red ocean: compete in an existing category by existing rules. Blue ocean: define a new category where you make the rules. Hermès doesn't compete in 'bags' — it competes in 'heirloom objects with waiting lists.' That's blue ocean positioning.",
        },
      ],
      quiz: {
        question: "What are the three essential components of brand positioning?",
        options: [
          {
            id: "a",
            text: "Logo, typography, and colour palette",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Category (what you compete in), differentiation (what makes you different), and target (who specifically)",
            isCorrect: true,
          },
          {
            id: "c",
            text: "Product quality, price point, and distribution channel",
            isCorrect: false,
          },
          {
            id: "d",
            text: "Brand history, current offer, and future vision",
            isCorrect: false,
          },
        ],
        explanation:
          "Positioning answers the question 'what are you and who are you for?' with three specific components: the category (the competitive space you compete in), the differentiation (what makes you distinct within that category), and the target (who, specifically, the brand is for). Without all three, positioning is incomplete. Many brands can articulate differentiation but fail to define category precisely enough (which makes differentiation meaningless) or target specifically enough (which makes it impossible to maintain consistent creative direction).",
      },
    },
    {
      id: "bs-03-identity",
      title: "Brand Identity and Visual Language",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "The Identity System" },
        {
          type: "paragraph",
          content:
            "Brand identity is the system that expresses positioning consistently across every touchpoint: logo, typography, colour palette, photography style, tone of voice. Together they create the recognisable experience of encountering the brand.",
        },
        {
          type: "paragraph",
          content:
            "Every element should serve the positioning, not personal taste. Hermès's typography is old-style and unhurried — that's a statement about craft and time. Apple's is clean and geometric — that's a statement about simplicity and technology. Neither is arbitrary.",
        },
        { type: "heading", content: "Consistency Builds Trust" },
        {
          type: "paragraph",
          content:
            "Every time the brand delivers exactly what the customer expected — same typography, same imagery quality, same service character — the expectation deepens. Every inconsistency erodes it. Brand equity is accumulated consistency. Built slowly. Destroyed quickly.",
        },
        { type: "heading", content: "Audit an Existing Brand" },
        {
          type: "paragraph",
          content:
            "Gather all touchpoints — website, packaging, ads, retail, social — and ask: do these feel like they come from the same brand? Where inconsistencies appear, look for the unclear or unenforced strategy underneath them.",
        },
      ],
      quiz: {
        question: "Why should each element of a brand identity system be determined by positioning rather than aesthetic preference?",
        options: [
          {
            id: "a",
            text: "Because aesthetic preferences change over time while positioning is stable, ensuring the identity doesn't become dated",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Because identity elements are positioning statements — each visual choice communicates what the brand stands for and who it is for",
            isCorrect: true,
          },
          {
            id: "c",
            text: "Because positioning-driven identity is easier to explain and justify to clients and stakeholders",
            isCorrect: false,
          },
          {
            id: "d",
            text: "Because aesthetic preferences vary between designers, while positioning provides a stable brief for the whole creative team",
            isCorrect: false,
          },
        ],
        explanation:
          "Identity elements are not decorative — they are positioning statements. Hermès's unhurried old-style typography expresses its relationship to time and craft. Apple's clean geometric typography expresses its relationship to simplicity and technology. When identity decisions are made on the basis of aesthetic preference rather than positioning, the resulting system may be visually coherent but strategically incoherent — looking beautiful without saying anything specific. Positioning-driven identity makes every visual choice meaningful.",
      },
    },
    {
      id: "bs-04-architecture",
      title: "Brand Architecture",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Branded House vs. House of Brands" },
        {
          type: "paragraph",
          content:
            "In a branded house, everything carries the parent name: Apple iPhone, Apple Watch, Apple MacBook. The brand extends its equity to every product — but every product affects the parent's equity too. High upside, high exposure.",
        },
        { type: "heading", content: "LVMH: The House of Brands" },
        {
          type: "paragraph",
          content:
            "LVMH owns Louis Vuitton, Dior, Givenchy, Celine, Loewe, Fendi, and dozens more. Each brand has its own identity, its own creative director, its own customer. LVMH's name never appears on a product. One crisis at one brand doesn't ripple through the portfolio.",
        },
        { type: "heading", content: "Armani: Branded House Done Right" },
        {
          type: "paragraph",
          content:
            "Armani puts its name on everything — Giorgio Armani, Armani Exchange, Armani Casa — reaching different price points under one equity umbrella. The name does the work across the whole range.",
        },
        { type: "heading", content: "The Architecture Decision" },
        {
          type: "paragraph",
          content:
            "House of brands: brands are protected from each other, but each needs its own investment. Branded house: equity flows between products, but dilution risk is real if lower-quality products undermine the premium positioning. Choose based on strategic goals, not habit.",
        },
      ],
      quiz: {
        question: "What strategic advantage does LVMH's house of brands architecture provide over a branded house model?",
        options: [
          {
            id: "a",
            text: "It allows LVMH to invest the same marketing budget across more brands by sharing resources",
            isCorrect: false,
          },
          {
            id: "b",
            text: "It protects each brand's distinct identity and insulates brands from each other's reputational problems",
            isCorrect: true,
          },
          {
            id: "c",
            text: "It allows consumers to easily discover new LVMH brands once they become loyal to one",
            isCorrect: false,
          },
          {
            id: "d",
            text: "It gives LVMH greater pricing power by concentrating all luxury equity under a single parent brand",
            isCorrect: false,
          },
        ],
        explanation:
          "LVMH's house of brands architecture keeps each brand — Louis Vuitton, Dior, Givenchy, Celine — entirely distinct. The LVMH name never appears on a product. This protects each brand's individual equity from the reputation of every other: a crisis at one brand does not automatically damage the others. It also allows each brand to occupy a distinct position in the market, serving different customers at different price points, without any of them cannibalising the others. The group extracts financial value from the portfolio without requiring any individual brand to share its equity.",
      },
    },
    {
      id: "bs-05-equity",
      title: "Brand Equity and Management",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Equity Is the Premium You Can Charge" },
        {
          type: "paragraph",
          content:
            "Brand equity is the premium consumers pay for a name over a generic equivalent. The difference between £3,000 for a Chanel bag and £300 for an equivalent unbranded one — that's Chanel's equity. Accumulated over time. Destroyed quickly.",
        },
        { type: "heading", content: "Built by Ordinary Consistency" },
        {
          type: "paragraph",
          content:
            "Equity isn't built by one brilliant campaign. It's built by hundreds of consistent ordinary encounters — every product that delivers as expected, every service interaction that matches the brand's character, every communication that feels true.",
        },
        { type: "heading", content: "Destroyed by Inconsistency" },
        {
          type: "paragraph",
          content:
            "A premium brand that produces a cheap-feeling product breaks the promise. A luxury brand that licenses too broadly dilutes the equity it spent decades building. Fashion history is full of licenses that destroyed brands in a decade.",
        },
        { type: "heading", content: "Rebranding: High Risk, One Rule" },
        {
          type: "paragraph",
          content:
            "Rebranding is one of the highest-risk strategic moves. The one rule: say the same thing in a new visual language. Change how the brand says it — not what it says. Change both and you confuse existing customers without attracting new ones.",
        },
      ],
      quiz: {
        question: "What is the mechanism by which brand equity is built over time?",
        options: [
          {
            id: "a",
            text: "Through high-profile advertising campaigns that establish strong emotional associations",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Through consistent delivery of the brand promise at every touchpoint across hundreds of ordinary encounters",
            isCorrect: true,
          },
          {
            id: "c",
            text: "Through celebrity endorsements and cultural collaborations that expand brand reach",
            isCorrect: false,
          },
          {
            id: "d",
            text: "Through pricing strategy — maintaining premium prices that signal quality to consumers",
            isCorrect: false,
          },
        ],
        explanation:
          "Brand equity is not built by any single spectacular action — not by a brilliant campaign, a celebrity endorsement, or a viral moment. It is built by consistency: hundreds of encounters in which the brand delivers exactly what it promised. Each positive encounter reinforces the expectation; the accumulated depth of expectation is equity. This is why equity takes years to build (consistent delivery is incremental) and can be destroyed quickly (a single significant violation of the promise can undermine years of consistent delivery).",
      },
    },
    {
      id: "bs-06-learn",
      title: "Define Your Brand",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "One Page. No More." },
        {
          type: "paragraph",
          content:
            "Write a one-page brand brief for something you care about. If you can't describe the strategy in one page, it isn't clear enough. A brief that needs three pages to explain its positioning has a positioning problem.",
        },
        { type: "heading", content: "The Brief's Five Questions" },
        {
          type: "list",
          items: [
            "What is it? (Category definition — what do you compete in, and how do you define that category?)",
            "Who is it for? (Target — not 'everyone who likes quality' but a specific, imaginable person)",
            "What problem does it solve, or what desire does it serve? (The reason to buy)",
            "What does it stand for? (The brand's values and the promise it makes)",
            "What does it look, sound, and feel like? (The identity expression — the visual and verbal language)",
          ],
        },
        { type: "heading", content: "Specificity Is Everything" },
        {
          type: "paragraph",
          content:
            "'For discerning consumers who care about quality' is not a target. 'For women in their thirties who buy one significant piece per season and regard their clothes as an expression of considered identity' is a target. Vague briefs produce vague brands.",
        },
        { type: "heading", content: "The Brief Should Answer Questions Before They're Asked" },
        {
          type: "paragraph",
          content:
            "Should we use this model? Should we produce a cheaper line? Should we open a flagship here? A good brief answers all three without a meeting. If it can't, the positioning needs more work.",
        },
      ],
      reflection: {
        prompt:
          "Write a one-page brand brief for something you care about — a creative project, a practice, a concept, a product that doesn't exist yet but should. Answer: What is it? Who is it for? What problem does it solve or desire does it serve? What does it stand for? What does it look, sound, and feel like? Then test your brief: does it answer the question 'should we do X?' for at least three specific decisions? If not, what needs to be sharper?",
      },
    },
  ],
}

export default course

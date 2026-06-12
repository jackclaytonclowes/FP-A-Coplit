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
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "A Brand Is a Promise" },
        {
          type: "paragraph",
          content:
            "A brand is a promise — the set of expectations a person holds when they encounter a name, a logo, or a product. When someone walks into a Chanel boutique, they bring a set of expectations about what they will find: a specific quality of product, a specific aesthetic, a specific kind of service. Those expectations are the brand. The products and the boutique are just the delivery mechanism.",
        },
        {
          type: "paragraph",
          content:
            "Brand strategist Marty Neumeier's most useful definition: 'A brand is not what you say it is. It's what they say it is.' This distinction matters enormously. A company can intend to be modern, innovative, and caring. If customers experience it as old-fashioned, conservative, and indifferent, those are the brand's actual attributes — regardless of the intention. Brand strategy is the work of closing the gap between what you intend to be and what customers experience you as being.",
        },
        { type: "heading", content: "Brand vs. Product" },
        {
          type: "paragraph",
          content:
            "The product is the thing: the bag, the shoe, the garment, the perfume. The brand is the meaning attached to the thing: the associations, the feelings, the status signals, the quality expectations. Products can be copied; brands cannot. Any manufacturer can produce a quilted leather bag with a chain strap. Only Chanel can produce a Chanel bag — an object that carries meaning accumulated across a century.",
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
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "The Question a Brand Answers" },
        {
          type: "paragraph",
          content:
            "Positioning is the question a brand answers in the consumer's mind: 'what are you, and who are you for?' A brand that cannot answer this question clearly is not positioned. Positioning defines three things: the category (what do you compete in?), the differentiation (what makes you different within that category?), and the target (who, specifically, is this for?). A brand that answers all three questions with specificity and consistency is well-positioned.",
        },
        { type: "heading", content: "The Positioning Statement" },
        {
          type: "paragraph",
          content:
            "A positioning statement has a conventional structure: 'For [target customer] who [needs or wants], [brand name] is the [category] that [differentiating benefit] because [reason to believe].' The structure is not important in itself — few brands use it verbatim — but the questions it asks are: who is the customer, what is the category, what is the benefit, and why should the customer believe the claim? Every brand strategy should be able to answer all four.",
        },
        { type: "heading", content: "The Positioning Map" },
        {
          type: "paragraph",
          content:
            "A positioning map plots brands within a category on two axes that define the competitive space. Common axes in fashion: price vs. quality (though luxury brands complicate this by using price to signal quality); formal vs. casual; heritage vs. contemporary. The value of the map is not its accuracy — all simplifications are inaccurate — but its clarity: it makes visible where a brand sits relative to its competitors and where the unoccupied space is.",
        },
        { type: "heading", content: "Blue Ocean vs. Red Ocean" },
        {
          type: "paragraph",
          content:
            "Red ocean strategy competes within an existing category: you position against known competitors within defined rules. Blue ocean strategy defines a new category: you create the rules. Hermès does not compete in 'bags' — it competes in 'heirloom objects with waiting lists.' This is blue ocean positioning: it redefines the category in terms that Hermès dominates. The most powerful positioning moves create new categories rather than winning existing ones.",
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
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "The Identity System" },
        {
          type: "paragraph",
          content:
            "Brand identity is the system of visual and verbal elements that express a brand's positioning consistently across every touchpoint. The core elements: logo (the primary graphic mark), typography (the typefaces that carry the brand's written voice), colour palette (the specific colours associated with the brand), photography style (how the brand depicts the world visually), and tone of voice (how the brand writes and speaks). Together, these elements create the recognisable experience of encountering the brand.",
        },
        {
          type: "paragraph",
          content:
            "Each element should be a decision made in service of the positioning, not an aesthetic preference. Hermès's typography is old-style, refined, unhurried — a choice that expresses the brand's relationship to time and craft. Apple's typography is clean, geometric, modern — a choice that expresses the brand's relationship to simplicity and technology. The typography is not just a visual preference; it is a positioning statement.",
        },
        { type: "heading", content: "The Consistency Imperative" },
        {
          type: "paragraph",
          content:
            "Consistency is the mechanism by which brand equity is built. Every time a customer encounters the brand and the experience matches their expectation — the typography is the same, the imagery has the same quality, the service has the same character — the expectation is reinforced and deepened. Every inconsistency degrades the expectation. Brand equity is accumulated consistency: the depth of trust built through hundreds of consistent encounters over time.",
        },
        { type: "heading", content: "Auditing an Existing Brand" },
        {
          type: "paragraph",
          content:
            "To audit an existing brand's visual language, gather all its touchpoints — website, packaging, advertising, retail environment, social media — and ask: do they feel like they come from the same brand? Is the photography style consistent? Is the typography the same? Is the colour palette stable? Where do inconsistencies appear, and what do they tell you about where the brand's strategy is unclear or unenforced? The audit reveals the gap between the intended identity system and the actual one.",
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
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "How Parent Brands Relate to Sub-Brands" },
        {
          type: "paragraph",
          content:
            "Brand architecture is the strategy that governs how a parent brand relates to the brands it owns or endorses. The two principal models are the branded house and the house of brands. In a branded house, all products are sold under the parent brand name: Apple iPhone, Apple Watch, Apple MacBook — the parent brand is the primary entity, and the product names are secondary. The brand extends its equity to every product, but every product affects the parent brand's equity.",
        },
        { type: "heading", content: "House of Brands: LVMH" },
        {
          type: "paragraph",
          content:
            "LVMH — Moët Hennessy Louis Vuitton — is the world's largest luxury group and the defining example of the house of brands architecture. LVMH owns Louis Vuitton, Christian Dior, Givenchy, Celine, Loewe, Marc Jacobs, Kenzo, Fendi, Berluti, and dozens of others. Each brand maintains its own identity, its own creative director, its own customer, and its own price architecture. LVMH's name never appears on a product. The group extracts value from the portfolio without exposing any individual brand to the reputation of any other.",
        },
        { type: "heading", content: "Branded House: An Alternative" },
        {
          type: "paragraph",
          content:
            "Procter & Gamble is the classic branded house example in consumer goods — though in a different form, as P&G's consumer-facing brands (Tide, Pampers, Gillette) are actually distinct brands managed within the P&G portfolio, making it also a house of brands at the consumer level. A cleaner branded house example is Armani, where every product — Giorgio Armani, Armani Exchange, Armani Collezioni, Armani Casa — carries the Armani name, creating a brand extension that reaches different price points under one equity umbrella.",
        },
        { type: "heading", content: "The Architecture Decision" },
        {
          type: "paragraph",
          content:
            "The choice between architectures depends on strategic goals. The house of brands model protects individual brands from each other's problems but requires investment in building each brand separately. The branded house model allows equity to flow between products but risks dilution if lower-price or lower-quality products undermine the parent brand's premium positioning. Co-branding — two distinct brands collaborating — has a different logic: each brand lends its equity to a joint product, and both benefit from the association.",
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
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "What Brand Equity Means" },
        {
          type: "paragraph",
          content:
            "Brand equity is the premium that consumers are willing to pay for a brand name over a generic equivalent. If you would pay £3,000 for a Chanel bag but only £300 for an equivalent unbranded bag, the difference — £2,700 — is a measure of Chanel's brand equity in your perception. Brand equity is the accumulated value of consistent delivery of the brand promise over time. It is built slowly and destroyed quickly.",
        },
        { type: "heading", content: "How Equity Is Built" },
        {
          type: "paragraph",
          content:
            "Brand equity is built through consistent delivery of the brand promise at every touchpoint, over time. Each positive encounter with the brand — a product that delivers as expected, a service interaction that matches the brand's character, a communication that feels true to the brand's identity — reinforces the expectation and deepens the trust. Equity is not built through any single spectacular action; it is built through hundreds of consistent ordinary ones.",
        },
        { type: "heading", content: "How Equity Is Destroyed" },
        {
          type: "paragraph",
          content:
            "Brand equity is destroyed by inconsistency, controversy, and quality failure. When a premium brand produces a product that feels cheap, the entire promise is undermined — the customer's expectation is violated, and trust is eroded. When a luxury brand extends too broadly — placing its logo on products at price points that contradict its premium positioning — the resulting dilution can permanently damage equity. The history of fashion is full of licenses that destroyed brand equity in a decade.",
        },
        { type: "heading", content: "Managing Equity During a Rebrand" },
        {
          type: "paragraph",
          content:
            "Rebranding — changing a brand's identity system — is one of the highest-risk strategic actions, because it risks disrupting the consistent expectations that equity depends on. Successful rebrands maintain the core positioning promise while updating its visual expression: the brand says the same thing in a new visual language. Failed rebrands change what the brand says as well as how it says it, leaving existing customers confused and failing to attract new ones. The key question in any rebrand: what is being changed, and what is being preserved?",
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
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "The One-Page Brand Brief" },
        {
          type: "paragraph",
          content:
            "The most practical exercise in brand strategy is writing a one-page brand brief for something you care about. The constraint of one page is intentional: if you cannot describe a brand's essential strategy in one page, the strategy is not clear enough. A brand brief that requires three pages of elaboration to explain its positioning has a positioning problem.",
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
        { type: "heading", content: "Writing With Specificity" },
        {
          type: "paragraph",
          content:
            "The discipline of the brand brief exercise is specificity. 'For discerning consumers who care about quality' is not a target — it is an aspiration. 'For women in their thirties who buy one significant piece per season rather than many trend-driven pieces, and who regard their clothes as an expression of considered identity rather than fashion membership' is a target. The more specific the brief, the more useful it becomes as a decision-making tool.",
        },
        { type: "heading", content: "The Brief as a Decision Tool" },
        {
          type: "paragraph",
          content:
            "A well-written brand brief should be able to answer creative questions before they are asked. Should we use this model? Does she match the target? Should we produce a cheaper line? Does it fit the positioning? Should we open a flagship in this city? Does it fit the distribution strategy? If the brief answers these questions clearly, it is doing its job. If it doesn't, more work is needed on the positioning.",
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

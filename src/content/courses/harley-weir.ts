import type { Course } from "@/types"

const course: Course = {
  id: "harley-weir",
  title: "Harley Weir",
  slug: "harley-weir",
  description:
    "A study of Harley Weir — one of Britain's most compelling contemporary photographers. Weir's intimate, often sensual images merge fashion with a raw personal aesthetic that has redefined contemporary editorial photography.",
  category: "great-photographers",
  accentColor: "#e8b4c4",
  estimatedHours: 3,
  tags: ["contemporary", "fashion", "intimate", "british", "portrait"],
  photographerId: "harley-weir",
  lessons: [
    {
      id: "hw-01-biography",
      title: "Biography & Background",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Fine Artist Who Picked Up a Camera" },
        {
          type: "paragraph",
          content:
            "Harley Weir studied fine art at Central Saint Martins — not photography. That background shows: her work has conceptual ambition and resists easy interpretation.",
        },
        {
          type: "paragraph",
          content:
            "She moved from editorial work at Dazed and AnOther into major campaigns for Givenchy, Valentino, and Céline. Her intimate aesthetic survived the commercial world intact.",
        },
        {
          type: "heading",
          content: "Key Career Milestones",
        },
        {
          type: "list",
          items: [
            "2008–2012: Studies at Central Saint Martins",
            "2012: Begins contributing to Dazed & Confused and AnOther Magazine",
            "2015: First campaigns for major fashion houses",
            "2016: Shoots Givenchy campaign — breakthrough into mainstream fashion",
            "2018: Major editorial for British Vogue",
            "Ongoing: One of the most in-demand fashion photographers of her generation",
          ],
        },
        {
          type: "quote",
          content: "I'm interested in vulnerability and power — and how often they're the same thing.",
          author: "Harley Weir",
        },
      ],
      quiz: {
        question: "What was Harley Weir's original field of study at Central Saint Martins, and why is this significant?",
        options: [
          { id: "a", text: "Fashion design — she transitioned from making clothes to photographing them", isCorrect: false },
          { id: "b", text: "Fine art — her background gives her work conceptual ambition beyond conventional fashion photography", isCorrect: true },
          { id: "c", text: "Film and video — her photographic work is influenced by cinematic storytelling", isCorrect: false },
          { id: "d", text: "Graphic design — her strong compositional sense comes from this background", isCorrect: false },
        ],
        explanation:
          "Weir studied fine art before moving into photography. This background is visible in her work's conceptual ambition, its willingness to make images that resist easy interpretation, and its treatment of the body and intimacy as art historical subjects rather than simply fashion propositions.",
      },
    },
    {
      id: "hw-02-style",
      title: "Visual Style Analysis",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "This Close" },
        {
          type: "paragraph",
          content:
            "Weir gets physically and psychologically close to her subjects. Her images feel like you're present in the moment — not directed from outside it.",
        },
        { type: "heading", content: "Skin, Hair, the Space Between People" },
        {
          type: "paragraph",
          content:
            "She photographs the body as landscape — extreme details, close range. These fragments create physical presence that full-length fashion shoots rarely achieve.",
        },
        { type: "heading", content: "Warmth That Feels Like Memory" },
        {
          type: "paragraph",
          content:
            "Her colour palette is warm and slightly desaturated — colours that feel faded in the best way. Emotional temperature over visual spectacle, every time.",
        },
        { type: "heading", content: "Sensual With Agency" },
        {
          type: "paragraph",
          content:
            "Her images are often sensual, but subjects are clearly there as participants — looking, choosing, existing. They're not being arranged for a viewer's consumption.",
        },
        {
          type: "quote",
          content: "I want to photograph people feeling things, not performing things.",
          author: "Harley Weir",
        },
      ],
      quiz: {
        question: "What distinguishes Weir's sensual images from objectifying fashion photography?",
        options: [
          { id: "a", text: "Her subjects are always fully clothed, making sensuality purely atmospheric", isCorrect: false },
          { id: "b", text: "Subjects are evidently present as participants — looking, choosing, existing — not arranged as objects for a viewer", isCorrect: true },
          { id: "c", text: "She only photographs same-gender subjects to avoid exploitative dynamics", isCorrect: false },
          { id: "d", text: "All her images are approved by subjects before publication", isCorrect: false },
        ],
        explanation:
          "The distinguishing quality in Weir's images is the evident agency of her subjects. Even in intimate or sensual images, subjects are looking, responding, existing — not simply posed for a viewer's consumption. The difference between sensual photography and objectifying photography is often a question of whose desire is visible in the frame.",
      },
    },
    {
      id: "hw-03-works",
      title: "Signature Works",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Dazed and AnOther: Where the Aesthetic Was Born" },
        {
          type: "paragraph",
          content:
            "Her early editorial work set the template for a generation of British fashion photographers. Intimate, slightly raw, formally sophisticated — and impossible to ignore.",
        },
        { type: "heading", content: "Givenchy: Intimacy Goes Luxury" },
        {
          type: "paragraph",
          content:
            "The challenge was keeping her close, personal aesthetic alive within luxury advertising. She succeeded: the Givenchy campaigns felt like Weir images, not brand productions.",
        },
        { type: "heading", content: "Activist Work: Beyond Fashion" },
        {
          type: "paragraph",
          content:
            "Weir has made images for environmental, feminist, and political campaigns. Photography's power to create emotional presence works beyond fashion — she uses it deliberately.",
        },
        { type: "heading", content: "Personal Projects: Where the Real Work Lives" },
        {
          type: "paragraph",
          content:
            "Her personal photographs — friends, her own life, places she finds compelling — feed directly into her commercial practice. The private and professional are continuous.",
        },
      ],
      quiz: {
        question: "What was the challenge Weir faced when moving from editorial to commercial fashion photography?",
        options: [
          { id: "a", text: "Adapting to much larger production budgets and teams than she was used to", isCorrect: false },
          { id: "b", text: "Translating her intimate editorial aesthetic to luxury advertising while retaining its quality of closeness", isCorrect: true },
          { id: "c", text: "Learning to photograph products rather than people for the first time", isCorrect: false },
          { id: "d", text: "Working within the strict brand guidelines that commercial clients impose", isCorrect: false },
        ],
        explanation:
          "The challenge in commercial fashion photography for a photographer with Weir's intimate style is retaining authenticity within the more controlled commercial context. She succeeded with Givenchy and others by insisting on conditions — small teams, genuine relationships with subjects, creative control — that allowed her aesthetic to survive the commercial brief.",
      },
    },
    {
      id: "hw-04-techniques",
      title: "Techniques & Approach",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Small Room, Real Intimacy" },
        {
          type: "paragraph",
          content:
            "Weir works with minimal crews — only who's necessary. Fewer people means subjects stop performing for a room and start being present with one person.",
        },
        { type: "heading", content: "Take the Time" },
        {
          type: "paragraph",
          content:
            "She builds conversation before she shoots. The session breathes. Images that need real connection can't be rushed into existence.",
        },
        { type: "heading", content: "Get Closer" },
        {
          type: "paragraph",
          content:
            "Many of her images are made at very close physical range. That proximity requires trust — and creates images with a palpable sense of being there.",
        },
        { type: "heading", content: "Film and Digital: Both Are Tools" },
        {
          type: "paragraph",
          content:
            "She uses both formats based on what each produces for a specific purpose. Film for grain and warmth. Digital for speed and review. No fetishising, just choosing.",
        },
      ],
      quiz: {
        question: "Why does Weir insist on working with small teams in her sessions?",
        options: [
          { id: "a", text: "To reduce production costs and allow more creative freedom with budgets", isCorrect: false },
          { id: "b", text: "To create conditions where subjects forget they're in a fashion shoot, enabling genuine intimacy", isCorrect: true },
          { id: "c", text: "Because she handles all technical aspects herself and requires no assistance", isCorrect: false },
          { id: "d", text: "Because small teams are the industry standard for editorial photography", isCorrect: false },
        ],
        explanation:
          "A large crew creates self-consciousness — subjects perform for the room rather than being present for the photographer. Weir's small teams create the intimacy necessary for the kind of images she makes: ones where subjects feel the session is a private conversation, not a production.",
      },
    },
    {
      id: "hw-05-legacy",
      title: "Influence & Legacy",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Defining a Generation's Aesthetic" },
        {
          type: "paragraph",
          content:
            "Weir is central to contemporary British fashion photography's shift away from maximalism toward something more intimate, personal, and formally complex.",
        },
        { type: "heading", content: "The Female Gaze, in Practice" },
        {
          type: "paragraph",
          content:
            "Her images of women look different from most male fashion photographers' work. Different assumptions about agency, desire, and visibility — and that difference is meaningful.",
        },
        { type: "heading", content: "Intimacy Sells" },
        {
          type: "paragraph",
          content:
            "Like Teller before her, Weir proved rawness and closeness are commercially valuable — not obstacles. Major brands discovered that authenticity earns more emotional engagement than polish.",
        },
        { type: "heading", content: "Still Forming" },
        {
          type: "paragraph",
          content:
            "She's still mid-career, and her influence on younger photographers is still spreading. The warm, close, intimate aesthetic she built is already visible worldwide.",
        },
      ],
      quiz: {
        question: "How is Weir's work discussed in the context of the 'female gaze' in photography?",
        options: [
          { id: "a", text: "Her work only photographs female subjects, excluding men entirely", isCorrect: false },
          { id: "b", text: "Her images of women are made with different assumptions about agency, desire, and visibility than most male fashion photographers' work", isCorrect: true },
          { id: "c", text: "She advocates for equal pay between male and female photographers", isCorrect: false },
          { id: "d", text: "She only accepts commissions from female-led fashion brands and magazines", isCorrect: false },
        ],
        explanation:
          "The 'female gaze' in photography describes work where women are depicted with different assumptions from the conventional male gaze — with evident agency, as subjects rather than objects. Whether or not this is the complete explanation for Weir's distinctiveness, her images do look different from most male fashion photographers' work of similar subjects.",
      },
    },
    {
      id: "hw-06-learn",
      title: "What You Can Learn From Weir",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Five Lessons Worth Stealing" },
        {
          type: "paragraph",
          content:
            "Weir's practice is about proximity — physical and psychological — and the difference between photographing someone and photographing with someone.",
        },
        { type: "heading", content: "1. Reduce the Room" },
        {
          type: "paragraph",
          content:
            "Next session, cut the crew to the minimum. Notice how the atmosphere shifts when subjects stop performing for a crowd.",
        },
        { type: "heading", content: "2. Photograph the Detail" },
        {
          type: "paragraph",
          content:
            "Spend a session shooting only hands, skin, hair, the space between people. No faces. Notice what those images say that full portraits can't.",
        },
        { type: "heading", content: "3. Build Relationships Before You Shoot" },
        {
          type: "paragraph",
          content:
            "Meet your subject before the shoot — not to discuss the images, but to know them. That knowledge shapes the session even when it never shows up explicitly.",
        },
        { type: "heading", content: "4. Ask Whose Desire Is Visible" },
        {
          type: "paragraph",
          content:
            "In intimate or sensual images, ask: is this person the object of a gaze, or a full person with their own interiority? The answer shapes both ethics and aesthetics.",
        },
        { type: "heading", content: "5. Let Your Personal Work Inform Your Commercial Work" },
        {
          type: "paragraph",
          content:
            "Weir's personal images feed her commissioned work. What are you making when no one has asked you to? That's where your real aesthetic lives.",
        },
      ],
      reflection: {
        prompt:
          "Weir is interested in 'vulnerability and power — and how often they're the same thing.' Think of a person in your life who embodies both vulnerability and power. How would you photograph them? What would you need to do to earn the access that image would require?",
      },
    },
  ],
}

export default course

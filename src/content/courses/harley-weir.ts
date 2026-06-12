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
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "Harley Weir (b. 1988, London)" },
        {
          type: "paragraph",
          content:
            "Harley Weir was born in 1988 in London and grew up in a household where art and creativity were central. She studied at Central Saint Martins, originally on a fine art course, before moving into photography. Her background in fine art rather than photography is traceable in her work's conceptual ambition and its willingness to make images that resist easy interpretation.",
        },
        {
          type: "paragraph",
          content:
            "She began assisting photographers after graduating and quickly developed her own practice, contributing to Dazed & Confused, AnOther Magazine, and later to international editions of Vogue. Her work attracted the attention of major fashion houses — Givenchy, Valentino, Celine — who commissioned campaigns that demonstrated her approach was not only artistically but commercially compelling.",
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
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Intimacy as Subject" },
        {
          type: "paragraph",
          content:
            "Weir's work is defined by an extreme closeness to its subjects — physical and psychological. Her images feel as if they have been made by someone present in the moment rather than directing it. This intimacy is not accidental; it is a product of the trust she builds with subjects and the patience she brings to sessions.",
        },
        { type: "heading", content: "The Body as Landscape" },
        {
          type: "paragraph",
          content:
            "Weir frequently photographs the body in close detail — skin, hair, hands, the space between two people — treating the body as a landscape to be explored rather than a figure to be depicted. These close-range details create a sense of physical presence that full-length fashion photography rarely achieves.",
        },
        { type: "heading", content: "Colour" },
        {
          type: "paragraph",
          content:
            "Weir's colour work has a distinctive warmth and slight desaturation — colours that feel like memories, slightly faded, slightly too real. She uses colour to create emotional temperature rather than visual spectacle. The palette often feels warm even in cool environments.",
        },
        { type: "heading", content: "Sensuality and Agency" },
        {
          type: "paragraph",
          content:
            "Weir's images are frequently sensual, but they give subjects evident agency. The difference between Weir's sensual images and the objectifying tradition is that her subjects are clearly present in the frame as participants, not as objects. They are looking, choosing, existing — not being arranged for a viewer.",
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
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "Dazed & Confused and AnOther Editorials" },
        {
          type: "paragraph",
          content:
            "Weir's editorial work for Dazed and AnOther in her early career established her aesthetic and demonstrated its relevance to contemporary fashion culture. These images — intimate, slightly raw, formally sophisticated — created a template for a generation of fashion photographers working in Britain in the 2010s.",
        },
        { type: "heading", content: "Givenchy Campaigns" },
        {
          type: "paragraph",
          content:
            "Her breakthrough into major commercial fashion came with campaigns for Givenchy. The challenge was translating her intimate aesthetic to luxury advertising — and she succeeded by retaining the quality of closeness and presence even within the more controlled commercial context. The campaigns felt like Weir images, not brand productions.",
        },
        { type: "heading", content: "Work with Activist Causes" },
        {
          type: "paragraph",
          content:
            "Weir has used her platform to create images for activist causes — environmental, feminist, and political campaigns have all benefited from her participation. This demonstrates her belief that photography's power to create emotional presence can be directed beyond fashion.",
        },
        { type: "heading", content: "Personal Projects" },
        {
          type: "paragraph",
          content:
            "Outside her commercial work, Weir makes personal photographs — of friends, of her own life, of environments she finds compelling. These personal images inform her commercial work and demonstrate the continuity between her private and professional practice.",
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
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "Small Teams, High Trust" },
        {
          type: "paragraph",
          content:
            "Weir works with deliberately small teams — minimal crew, no more people in the room than necessary. This creates the conditions for subjects to forget they are in a fashion shoot. The intimacy of the room creates the intimacy of the image.",
        },
        { type: "heading", content: "Extended Time" },
        {
          type: "paragraph",
          content:
            "Weir takes time with her subjects — building conversation, establishing genuine connection, allowing the session to breathe before she begins shooting. The images that emerge from this patient approach have a quality that rushed shoots cannot replicate.",
        },
        { type: "heading", content: "Close Physical Proximity" },
        {
          type: "paragraph",
          content:
            "Many of Weir's images are made at very close range — she approaches subjects physically, reducing the social distance that the camera usually maintains. This requires subjects' trust and creates images with a palpable sense of proximity.",
        },
        { type: "heading", content: "Film and Digital" },
        {
          type: "paragraph",
          content:
            "Weir works across film and digital formats, choosing based on the quality of image each produces for a specific purpose. Film gives her images grain and warmth; digital gives speed and the ability to review. She uses both as tools, not fetishes.",
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
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "Contemporary British Fashion Photography" },
        {
          type: "paragraph",
          content:
            "Weir is one of the central figures of contemporary British fashion photography — a generation that has moved away from the maximalism of previous decades toward something more intimate, more personal, and more formally sophisticated. Her work defines a contemporary aesthetic that has been widely influential.",
        },
        { type: "heading", content: "The Female Gaze in Fashion" },
        {
          type: "paragraph",
          content:
            "Weir's work is frequently discussed in the context of the 'female gaze' — photography of women made by women, with different assumptions about agency, desire, and visibility. Whether or not this framing is adequate, her images do look different from most male fashion photographers' work, and that difference is meaningful.",
        },
        { type: "heading", content: "Intimacy as Commercial Value" },
        {
          type: "paragraph",
          content:
            "Weir has demonstrated — as Teller did before her — that intimacy and rawness are commercially valuable qualities, not obstacles to commercial effectiveness. Her major brand campaigns show that consumers respond to authenticity with more emotional engagement than to polish.",
        },
        { type: "heading", content: "Emerging as Influence" },
        {
          type: "paragraph",
          content:
            "As one of the leading photographers of her generation, Weir's influence on younger photographers is still forming. But the aesthetic she has developed — intimate, warm, close, present — is already visible in the work of younger photographers across fashion and editorial photography worldwide.",
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
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Practical Lessons From Her Practice" },
        {
          type: "paragraph",
          content:
            "Weir's practice teaches the value of proximity — physical and psychological — and the difference between photographing someone and photographing with someone.",
        },
        { type: "heading", content: "1. Reduce the Room" },
        {
          type: "paragraph",
          content:
            "For your next portrait session, reduce the number of people present to the minimum necessary. Notice how the atmosphere in the room changes. Subjects behave differently when they are not performing for a crowd. Intimacy is a condition you create as much as an image you capture.",
        },
        { type: "heading", content: "2. Photograph the Detail" },
        {
          type: "paragraph",
          content:
            "Spend a session photographing only details — hands, skin, hair, the space between people. Don't photograph faces. Notice what these images communicate that full portraits cannot. The body as landscape is an entire subject that most photographers leave undiscovered.",
        },
        { type: "heading", content: "3. Build Relationships Before You Shoot" },
        {
          type: "paragraph",
          content:
            "Meet your subject before the shoot date. Have a conversation — not about the images you want to make, but about them. Who are they? What matters to them? This knowledge shapes the session even when it never becomes explicit in the images.",
        },
        { type: "heading", content: "4. Ask Whose Desire Is Visible" },
        {
          type: "paragraph",
          content:
            "When photographing sensual or intimate subject matter, ask: whose desire is this image expressing? Is the subject the object of someone's gaze, or are they present as a full person with their own interiority? The answer shapes the ethics and the aesthetics of the image.",
        },
        { type: "heading", content: "5. Let Your Personal Work Inform Your Commercial Work" },
        {
          type: "paragraph",
          content:
            "Weir makes personal photographs that are continuous with her commercial practice. The best commercial photographers maintain a personal practice that feeds the commissioned work. What are you making when no one has asked you to make anything?",
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

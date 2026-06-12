import type { Course } from "@/types"

const course: Course = {
  id: "herb-ritts",
  title: "Herb Ritts",
  slug: "herb-ritts",
  description:
    "A study of Herb Ritts — the great Californian photographer. Ritts's sun-drenched, sculptural black-and-white images of the human body defined the visual language of celebrity and fashion photography in the 1980s and 90s.",
  category: "great-photographers",
  accentColor: "#c8c8b0",
  estimatedHours: 3,
  tags: ["portrait", "fashion", "black-and-white", "american", "sculptural"],
  photographerId: "herb-ritts",
  lessons: [
    {
      id: "hr-01-biography",
      title: "Biography & Background",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "A Breakdown That Started Everything" },
        {
          type: "paragraph",
          content:
            "Born in 1952, raised in Bel Air surrounded by Hollywood glamour — Ritts absorbed the aesthetics of the film world before he ever picked up a camera.",
        },
        {
          type: "paragraph",
          content:
            "In 1978, his car broke down outside Twentynine Palms. He photographed his friend Richard Gere against the desert. The images were published. A career was born — from an accident.",
        },
        {
          type: "heading",
          content: "Key Career Milestones",
        },
        {
          type: "list",
          items: [
            "1978: Car breakdown, Twentynine Palms — first major shoot with Richard Gere",
            "1982: First major fashion assignments for Vogue and Interview",
            "1986: Begins shooting Madonna — 'True Blue' and beyond",
            "1990: Directs Chris Isaak's 'Wicked Game' video",
            "1992: 'Africa' — his most celebrated and debated project",
            "2002: Dies of AIDS-related pneumonia, aged 50",
          ],
        },
        {
          type: "quote",
          content: "California light is the most honest light in the world. It shows everything.",
          author: "Herb Ritts",
        },
      ],
      quiz: {
        question: "How did Herb Ritts make his first significant photographs that launched his career?",
        options: [
          { id: "a", text: "By winning a major photography competition while studying at art school", isCorrect: false },
          { id: "b", text: "When his car broke down in the California desert and he photographed his friend Richard Gere", isCorrect: true },
          { id: "c", text: "By assisting a major fashion photographer and then shooting on the side", isCorrect: false },
          { id: "d", text: "Through a friend's connection to an editor at Vogue magazine", isCorrect: false },
        ],
        explanation:
          "Ritts's career began with an accidental breakdown in Twentynine Palms, California in 1978. He photographed his friend Richard Gere against the desert landscape and the resulting images were published and well-received. This chance beginning was characteristic of his approach — his best work always feels like a found image rather than a manufactured one.",
      },
    },
    {
      id: "hr-02-style",
      title: "Visual Style Analysis",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Sun + Body = Sculpture" },
        {
          type: "paragraph",
          content:
            "California's strong, directional sunlight was Ritts's studio. He used it to carve bodies into form — creating volumes, shadows, and textures that no studio light replicates.",
        },
        { type: "heading", content: "Black and White Was a Statement" },
        {
          type: "paragraph",
          content:
            "In an era dominated by colour, Ritts chose black and white deliberately. It made his images timeless — anchored in the history of the human body, not in the fashion of the moment.",
        },
        { type: "heading", content: "Desert, Beach, Rock — Not Luxury" },
        {
          type: "paragraph",
          content:
            "Forget Parisian hotels. Ritts placed bodies against elemental California landscapes. The geology dwarfs fashion and places the human form in permanent, geological time.",
        },
        { type: "heading", content: "Beautiful AND Real" },
        {
          type: "paragraph",
          content:
            "His subjects are gorgeous but they have weight, texture, and physical presence. No airbrushed perfection — just bodies that exist in the world.",
        },
        {
          type: "quote",
          content: "The best photographs are about time — about the moment that was there and then was gone.",
          author: "Herb Ritts",
        },
      ],
      quiz: {
        question: "Why did Ritts choose to work predominantly in black and white rather than colour?",
        options: [
          { id: "a", text: "He was colour-blind and found colour photography technically challenging", isCorrect: false },
          { id: "b", text: "Black and white created timelessness — removing images from their specific moment and placing them in a longer visual history", isCorrect: true },
          { id: "c", text: "Black and white was the industry standard in the 1980s when he began", isCorrect: false },
          { id: "d", text: "Colour film was too expensive for the scale of his productions", isCorrect: false },
        ],
        explanation:
          "Ritts's choice of black and white was deliberate and philosophical. He believed it created a timelessness that colour couldn't — images that didn't belong to a specific decade but to a longer tradition of depicting the human body, referencing classical sculpture and the golden age of Hollywood photography.",
      },
    },
    {
      id: "hr-03-works",
      title: "Signature Works",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Richard Gere, Twentynine Palms (1978)" },
        {
          type: "paragraph",
          content:
            "The accidental start: a broken-down car, a perfect subject, and the honest California light. These images announced something new the moment they appeared.",
        },
        { type: "heading", content: "Africa (1992)" },
        {
          type: "paragraph",
          content:
            "His most celebrated and most debated project — Kenyan desert, natural light, bodies in landscape. Extraordinary beauty, and an ongoing ethical conversation about Western photographers in Africa.",
        },
        { type: "heading", content: "Madonna: Portraits for Posterity" },
        {
          type: "paragraph",
          content:
            "Multiple albums, multiple tours. His Madonna images feel less like promotional material and more like documents for history — timeless where they could have been disposable.",
        },
        { type: "heading", content: "Wicked Game (1991)" },
        {
          type: "paragraph",
          content:
            "Possibly the most beautiful music video ever made. Black and white, California beach, his photographic aesthetic in motion. Proof that his visual language worked in any medium.",
        },
      ],
      quiz: {
        question: "What ongoing ethical discussion does Ritts's 'Africa' project generate?",
        options: [
          { id: "a", text: "Whether black and white photography can be considered ethnographically valid", isCorrect: false },
          { id: "b", text: "The ethics of Western photographers applying an aesthetic framework to subjects outside their own culture", isCorrect: true },
          { id: "c", text: "Whether commercial photography should be sold as fine art", isCorrect: false },
          { id: "d", text: "Whether photographs of the natural world require different consent standards", isCorrect: false },
        ],
        explanation:
          "The 'Africa' project, despite its extraordinary beauty, generates ongoing discussion about the ethics of Western photographers using African people and landscapes within an aesthetic framework developed for different purposes. Questions about whose gaze is operating, and in whose interest, are legitimate and unresolved.",
      },
    },
    {
      id: "hr-04-techniques",
      title: "Techniques & Approach",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Know Your Light Like Your Name" },
        {
          type: "paragraph",
          content:
            "Ritts knew California light in his bones — its quality hour by hour, season by season. That intimacy let him choose exactly the right moment every time.",
        },
        { type: "heading", content: "The Body Is the Subject" },
        {
          type: "paragraph",
          content:
            "Not clothes. Not celebrity. The body itself — its form, weight, and texture — was what fascinated him. He photographed it with the rigour of classical sculpture and the honesty of documentary.",
        },
        { type: "heading", content: "Location Is a Collaborator" },
        {
          type: "paragraph",
          content:
            "Ritts scouted California relentlessly. The rock, the beach, the desert plain weren't backgrounds — they made the image as much as the subject did.",
        },
        { type: "heading", content: "Strip It Back" },
        {
          type: "paragraph",
          content:
            "Person. Landscape. Light. That's it. Ritts resisted production apparatus because simplicity let the physical truth of his subjects speak without distraction.",
        },
      ],
      quiz: {
        question: "How did Ritts treat the landscape in his outdoor photography?",
        options: [
          { id: "a", text: "As a neutral backdrop that wouldn't distract from the subject", isCorrect: false },
          { id: "b", text: "As a collaborator that helped create the image as much as the subject did", isCorrect: true },
          { id: "c", text: "As an environmental context providing social and cultural information", isCorrect: false },
          { id: "d", text: "As a technical challenge requiring careful exposure management", isCorrect: false },
        ],
        explanation:
          "Ritts's landscapes are never simply backdrop. The rock, the desert, the beach participate in the image — their scale, texture, and elemental quality create a relationship with the human body that transforms both. The landscape is a collaborator, chosen as carefully as the subject.",
      },
    },
    {
      id: "hr-05-legacy",
      title: "Influence & Legacy",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "He Defined an Era" },
        {
          type: "paragraph",
          content:
            "From 1982 to 2002, Ritts's black-and-white sun-drenched images were the visual language of American celebrity culture. That's just what that world looked like.",
        },
        { type: "heading", content: "Timeless Beats Trendy Every Time" },
        {
          type: "paragraph",
          content:
            "Most fashion photography from his era looks dated. His doesn't — because he was never chasing the trend. Natural light and classical black and white don't expire.",
        },
        { type: "heading", content: "Music Videos as Photography" },
        {
          type: "paragraph",
          content:
            "Madonna, Chris Isaak, Janet Jackson — he brought his photographic eye to moving image and it worked. His videos remain the most visually distinct of their era.",
        },
        { type: "heading", content: "Art, Activism, Identity" },
        {
          type: "paragraph",
          content:
            "Ritts was openly gay and used his platform for AIDS activism throughout his career. He died of AIDS-related pneumonia in 2002. His life is a case study in using art for something larger than art.",
        },
      ],
      quiz: {
        question: "Why has Ritts's work aged better than most fashion photography of his era?",
        options: [
          { id: "a", text: "His images were digitally restored and updated after his death", isCorrect: false },
          { id: "b", text: "His commitment to timelessness through black and white and natural light meant his work was never completely in trend and therefore never dated", isCorrect: true },
          { id: "c", text: "Fashion trends are cyclical and his work is now fashionable again", isCorrect: false },
          { id: "d", text: "His celebrity subjects remain famous, keeping the images culturally relevant", isCorrect: false },
        ],
        explanation:
          "Work that chases trend dates when trend moves on. Ritts's commitment to timelessness — classical black and white, natural light, the permanent qualities of landscape and the human body — gave his images a resistance to dating that contemporary-looking work rarely achieves.",
      },
    },
    {
      id: "hr-06-learn",
      title: "What You Can Learn From Ritts",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Simplicity Is a Skill" },
        {
          type: "paragraph",
          content:
            "Ritts teaches the power of natural light, elemental landscapes, and the courage to strip everything back. Less kit, more intention.",
        },
        { type: "heading", content: "1. Know Your Light" },
        {
          type: "paragraph",
          content:
            "Study the light in your own environment obsessively. What does it do at 7am in November? At 2pm in July? Your local light is your greatest tool.",
        },
        { type: "heading", content: "2. Find the Landscape" },
        {
          type: "paragraph",
          content:
            "Photograph people in landscape settings. The scale, the permanence — it transforms both the person and you. The landscape is a second subject, not a backdrop.",
        },
        { type: "heading", content: "3. Pursue Timelessness" },
        {
          type: "paragraph",
          content:
            "Ask what in your image will date it to this year. Then ask what you'd need to remove to make it feel timeless. Often the answer is: less.",
        },
        { type: "heading", content: "4. Photograph the Body With Respect" },
        {
          type: "paragraph",
          content:
            "Ritts treated bodies as subjects of formal beauty, not spectacle. Collaboration creates dignity; imposition creates exploitation. The difference shows in the final image.",
        },
        { type: "heading", content: "5. Use Your Platform" },
        {
          type: "paragraph",
          content:
            "Ritts used his fame for AIDS activism. Whatever cause matters to you, your photographic practice can serve it. Art and activism aren't opposites.",
        },
      ],
      reflection: {
        prompt:
          "Ritts's most celebrated images are made with the simplest possible means: a person, a landscape, natural light. What landscape is available to you that you have not yet explored photographically? What would happen if you took a person you wanted to photograph to that landscape and worked with nothing but the available light?",
      },
    },
  ],
}

export default course

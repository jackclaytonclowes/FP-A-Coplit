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
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "Herb Ritts (1952–2002, Los Angeles)" },
        {
          type: "paragraph",
          content:
            "Herb Ritts was born in 1952 in Los Angeles, the son of a successful furniture manufacturer. He grew up in Bel Air, surrounded by the film industry and its aesthetics — a formative environment for a photographer who would spend his career photographing the bodies and faces of Hollywood and the fashion world.",
        },
        {
          type: "paragraph",
          content:
            "He took his first significant photographs by accident: in 1978 his car broke down outside Twentynine Palms, California, and he photographed his friend Richard Gere against the desert landscape. The images were published and immediately attracted attention. This accidental beginning shaped his entire career — his best work always has the quality of something found rather than made.",
        },
        {
          type: "heading",
          content: "Key Career Milestones",
        },
        {
          type: "list",
          items: [
            "1978: Accidental first major shoot — Richard Gere in the California desert",
            "1982: First major fashion assignments for Vogue and Interview",
            "1986: Begins work for Madonna — shoots 'True Blue' and subsequent album covers",
            "1990: Directs music videos including Chris Isaak's 'Wicked Game'",
            "1992: 'Africa' book — his most celebrated photographic project",
            "2002: Dies of AIDS-related pneumonia in Los Angeles, aged 50",
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
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "California Light and Sculptural Bodies" },
        {
          type: "paragraph",
          content:
            "Ritts's visual signature is the combination of California's strong, directional sunlight and the sculptural presentation of the human body. His black-and-white images treat the body as an object of formal beauty — like classical sculpture — using the sun's angle to create volumes, shadows, and textures that studio lighting rarely achieves.",
        },
        { type: "heading", content: "Black and White as Choice" },
        {
          type: "paragraph",
          content:
            "Ritts worked predominantly in black and white — a deliberate choice in an era when colour was the commercial standard. He believed black and white created a timelessness that colour never could; it removed the image from its specific cultural moment and placed it in a longer visual history. His black and white references classical sculpture and the golden age of Hollywood photography.",
        },
        { type: "heading", content: "The Desert and the Coast" },
        {
          type: "paragraph",
          content:
            "Ritts's most characteristic setting is the California landscape — desert, beach, dry rock — which gives his images a quality of elemental simplicity. The landscape strips away context and places the human body against a permanent, geological time. This is the opposite of fashion photography's usual relationship with luxury settings.",
        },
        { type: "heading", content: "Elegance and Physicality" },
        {
          type: "paragraph",
          content:
            "Ritts's images are simultaneously elegant and physical. His subjects are always beautiful but they are also always present — their bodies have weight, their skin has texture, their physicality is palpable. This is the opposite of the airbrushed perfection that was simultaneously dominating fashion photography.",
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
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "Richard Gere, Twentynine Palms (1978)" },
        {
          type: "paragraph",
          content:
            "The accidental beginning: Ritts's first significant images, made during a car breakdown in the California desert. Gere against rock and sky — the combination of a perfect physical subject and the honest California light created images that were immediately recognisable as something new.",
        },
        { type: "heading", content: "Africa (1992)" },
        {
          type: "paragraph",
          content:
            "Ritts's most celebrated project: a book of photographs made in the Kenyan desert, depicting people and animals in landscape settings. The images apply his Californian approach — natural light, sculptural bodies, elemental landscapes — to subjects outside the fashion world. It is both his most beautiful and most complex work, generating ongoing discussion about the ethics of Western photographers in Africa.",
        },
        { type: "heading", content: "Madonna Albums and Tours" },
        {
          type: "paragraph",
          content:
            "Ritts shot multiple Madonna albums and tour campaigns, creating iconic images that defined her visual identity in the late 1980s and early 1990s. His Madonna images have the timeless quality of his landscape work — they feel less like promotional photographs and more like portraits for posterity.",
        },
        { type: "heading", content: "Wicked Game (1991)" },
        {
          type: "paragraph",
          content:
            "Ritts directed the music video for Chris Isaak's 'Wicked Game' — arguably the most beautiful music video ever made. Shot in black and white on a California beach, it applies his photographic aesthetic to moving image. The video demonstrated that his visual language was as powerful in film as in photography.",
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
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "Natural Light as Foundation" },
        {
          type: "paragraph",
          content:
            "Ritts built his entire practice on natural light — specifically the strong, directional light of California. He understood this light intimately: its quality at different times of day, in different seasons, in different landscapes. This knowledge allowed him to choose exactly the right moment and angle to create the sculptural effects he wanted.",
        },
        { type: "heading", content: "The Body as Subject" },
        {
          type: "paragraph",
          content:
            "Ritts was one of the great photographers of the human body — interested in it as a formal subject with intrinsic beauty, not simply as a vehicle for clothes or celebrity. His approach to the body combined the formal rigour of classical sculpture with the honesty of documentary photography: bodies are real, weighted, textured.",
        },
        { type: "heading", content: "Location Scouting as Practice" },
        {
          type: "paragraph",
          content:
            "Ritts was a meticulous location scout. He knew California's landscapes intimately and could identify exactly the right rock formation, beach section, or desert plain for the image he had in mind. The landscape was not a backdrop but a collaborator — it created the image as much as the subject did.",
        },
        { type: "heading", content: "Simplicity" },
        {
          type: "paragraph",
          content:
            "Ritts consistently worked with the minimum of elements: a person, a landscape, natural light. He resisted the production apparatus of mainstream fashion photography, preferring the simplicity that allowed the physical truth of his subjects to speak without distraction.",
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
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "Defining an Era" },
        {
          type: "paragraph",
          content:
            "Ritts's images defined the visual language of a specific era — roughly 1982 to 2002 — in American celebrity and fashion photography. His black-and-white, sun-drenched, physically honest images are the aesthetic counterpart of the music and culture of that period. They are how we know what that world looked like.",
        },
        { type: "heading", content: "Timeless Versus Trend" },
        {
          type: "paragraph",
          content:
            "Ritts's work has aged differently from most fashion photography of his era: it still looks contemporary because it was never completely in trend. His commitment to timelessness through black and white and natural light has given his images a longevity that contemporary-looking work rarely achieves.",
        },
        { type: "heading", content: "Music Video Direction" },
        {
          type: "paragraph",
          content:
            "Through videos for Madonna, Chris Isaak, Janet Jackson, and others, Ritts extended his photographic aesthetic into film and demonstrated its power in the time-based medium. His videos remain among the most visually distinctive of their era.",
        },
        { type: "heading", content: "AIDS Activism" },
        {
          type: "paragraph",
          content:
            "Ritts was openly gay and used his platform extensively for AIDS activism and HIV/AIDS awareness campaigns. He died of AIDS-related pneumonia in 2002 at 50. His life demonstrates the intersection of art, politics, and personal experience that defines the most important creative careers.",
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
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Practical Lessons From His Practice" },
        {
          type: "paragraph",
          content:
            "Ritts teaches the power of simplicity, natural light, and the pursuit of timelessness over trend.",
        },
        { type: "heading", content: "1. Know Your Light" },
        {
          type: "paragraph",
          content:
            "Ritts knew California light with extraordinary intimacy. Spend time studying the light in your own environment — its quality at different times and in different conditions. What does the light in your city do at 7am in November? At 2pm in July? Understanding your specific light is the foundation of using it.",
        },
        { type: "heading", content: "2. Find the Landscape" },
        {
          type: "paragraph",
          content:
            "Photograph people in landscape settings. Notice what the scale and permanence of landscape does to the human figure — how it creates relationships, suggests scale, adds elemental significance. The landscape is not a backdrop; it is a second subject.",
        },
        { type: "heading", content: "3. Pursue Timelessness" },
        {
          type: "paragraph",
          content:
            "Ask of each image: what in this photograph will date it to a specific year or decade? What could you change to make it feel timeless? Sometimes the answer is 'nothing' — some images simply belong to their moment. But often, simplicity and a removal of fashion-specific elements creates durability.",
        },
        { type: "heading", content: "4. Photograph the Body With Respect" },
        {
          type: "paragraph",
          content:
            "Ritts photographed the body as a formal subject of beauty — not as object or spectacle. The difference is in the relationship between photographer and subject: one creates collaboration, the other creates exploitation. How you engage with your subjects' bodies shapes the images you make.",
        },
        { type: "heading", content: "5. Use Your Platform" },
        {
          type: "paragraph",
          content:
            "Ritts used his considerable platform for AIDS activism throughout his career. Whatever cause matters to you, consider how your photographic practice can serve it. Art and activism are not incompatible — sometimes the most powerful advocacy is also the most beautiful.",
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

import type { Course } from "@/types"

const course: Course = {
  id: "richard-avedon",
  title: "Richard Avedon",
  slug: "richard-avedon",
  description:
    "A study of Richard Avedon — perhaps the most influential American photographer of the 20th century. His stark white backgrounds and psychological intensity revolutionised both fashion and portrait photography.",
  category: "great-photographers",
  accentColor: "#e8e8e8",
  estimatedHours: 3,
  tags: ["portrait", "fashion", "american", "20th-century", "stark"],
  photographerId: "richard-avedon",
  lessons: [
    {
      id: "ra-01-biography",
      title: "Biography & Background",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "Richard Avedon (1923–2004, New York)" },
        {
          type: "paragraph",
          content:
            "Richard Avedon was born in 1923 in New York City, the son of Russian-Jewish immigrants who ran a clothing store on Fifth Avenue. He grew up surrounded by fashion and by images — his father's store sold clothes, and Avedon as a boy studied the Vogue photographs displayed in the window. He knew from early on what he wanted to do.",
        },
        {
          type: "paragraph",
          content:
            "He served in the Merchant Marine during World War II as a photographer, identifying men for their ID photographs. After the war he studied with Alexey Brodovitch, the legendary art director of Harper's Bazaar, who would become his most important influence. Brodovitch taught Avedon that photography was movement, not stillness.",
        },
        {
          type: "heading",
          content: "Key Career Milestones",
        },
        {
          type: "list",
          items: [
            "1944: Studies under Alexey Brodovitch at the Design Laboratory",
            "1945: Joins Harper's Bazaar as staff photographer, aged 22",
            "1966: First major retrospective at the Smithsonian Institution",
            "1992: Moves to The New Yorker as first staff photographer",
            "1994: 'In the American West' — 5-year documentary project, 17,000 miles of travel",
            "2004: Dies while on assignment for The New Yorker in San Antonio",
          ],
        },
        {
          type: "quote",
          content: "All photographs are accurate. None of them is the truth.",
          author: "Richard Avedon",
        },
      ],
      quiz: {
        question: "Which legendary art director was Avedon's most important early mentor?",
        options: [
          { id: "a", text: "Alexey Brodovitch of Harper's Bazaar", isCorrect: true },
          { id: "b", text: "Alexander Liberman of Condé Nast", isCorrect: false },
          { id: "c", text: "Henry Wolf of Esquire", isCorrect: false },
          { id: "d", text: "Leo Lionni of Fortune", isCorrect: false },
        ],
        explanation:
          "Alexey Brodovitch — the legendary art director of Harper's Bazaar — was Avedon's most important early influence. Brodovitch's teaching principle was 'astonish me'; he believed fashion photography should capture movement and energy, not stillness. Avedon spent his career pursuing that instruction.",
      },
    },
    {
      id: "ra-02-style",
      title: "Visual Style Analysis",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "The White Background" },
        {
          type: "paragraph",
          content:
            "Avedon's most immediately recognisable technique is the stark white background — a seamless white paper or cyclorama that removes all context and places the subject in a kind of non-space. This was not purely aesthetic. The white background is an assertion: this person, and only this person, is what matters. Everything else is noise.",
        },
        { type: "heading", content: "Movement in Fashion" },
        {
          type: "paragraph",
          content:
            "His mentor Brodovitch told him that fashion photography should capture the energy of movement, not a static pose. Avedon spent years developing techniques for photographing movement — models jumping, turning, running. The resulting images have an electricity that transforms fashion from still life into living performance.",
        },
        { type: "heading", content: "Psychological Portraiture" },
        {
          type: "paragraph",
          content:
            "In his portrait work Avedon pursued psychological truth at the expense of flattery. He is famous for provoking strong emotional reactions in his subjects before pressing the shutter — telling them something shocking, making them wait, disrupting their composure. The resulting images show people caught between masks.",
        },
        { type: "heading", content: "Scale" },
        {
          type: "paragraph",
          content:
            "Avedon printed large — very large. His portraits, printed at life-size or larger, have a confrontational quality. You cannot look away from an Avedon portrait the size of a person. The scale is not vanity; it is a claim that this face deserves to be seen at full size.",
        },
        {
          type: "quote",
          content: "My portraits are more about me than they are about the people I photograph.",
          author: "Richard Avedon",
        },
      ],
      quiz: {
        question: "What was the philosophical purpose of Avedon's signature stark white background?",
        options: [
          { id: "a", text: "To make retouching faster and easier in post-production", isCorrect: false },
          { id: "b", text: "To assert that the person, and only the person, matters — eliminating all contextual noise", isCorrect: true },
          { id: "c", text: "To echo the white pages of the magazines that published his work", isCorrect: false },
          { id: "d", text: "To make his studio lighting easier to control consistently", isCorrect: false },
        ],
        explanation:
          "The white background was an assertion: this person is what matters. By removing all environmental context, Avedon forced the viewer into an unmediated encounter with the subject. There is nowhere to look but at the face. This is both a compositional and a philosophical choice.",
      },
    },
    {
      id: "ra-03-works",
      title: "Signature Works",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "Dovima with Elephants (1955)" },
        {
          type: "paragraph",
          content:
            "Perhaps the most celebrated fashion photograph ever made. Model Dovima in a black Dior dress, flanked by circus elephants, Cirque d'Hiver, Paris. The tension between elegance and power, between the model's stillness and the elephants' mass, creates an image of extraordinary beauty and strangeness. It was made for Harper's Bazaar and is now in permanent collections worldwide.",
        },
        { type: "heading", content: "In the American West (1985)" },
        {
          type: "paragraph",
          content:
            "A five-year project photographing working people across the American West — miners, drifters, slaughterhouse workers, mental patients. Shot against a white seamless backdrop in the field, the portraits are intensely democratic: everyone receives the same treatment as a Vogue cover. The project revealed that Avedon's technique was not about glamour but about human dignity.",
        },
        { type: "heading", content: "The Family (1976)" },
        {
          type: "paragraph",
          content:
            "For the U.S. Bicentennial, Rolling Stone commissioned Avedon to photograph 69 people who held political, corporate, and cultural power in America. Shot in an identical manner — white background, frontal gaze — the images strip authority figures of their trappings, revealing them as simply people with unusual jobs.",
        },
        { type: "heading", content: "Portraits of Andy Warhol's Factory" },
        {
          type: "paragraph",
          content:
            "Avedon's ongoing documentation of Andy Warhol and the Factory world produced images that are now the primary visual record of that milieu. His 1969 portrait of the Factory — all figures in a single massive composite — is one of the defining images of the late 20th century.",
        },
      ],
      quiz: {
        question: "What made 'In the American West' philosophically significant given Avedon's fashion photography background?",
        options: [
          { id: "a", text: "It was the first project he completed without using artificial lighting", isCorrect: false },
          { id: "b", text: "It showed that his technique — white background, frontal gaze — conferred dignity, not just glamour, on any subject", isCorrect: true },
          { id: "c", text: "It was his first project shot outside a studio environment", isCorrect: false },
          { id: "d", text: "It was funded entirely without commercial sponsorship", isCorrect: false },
        ],
        explanation:
          "'In the American West' applied Avedon's fashion photography technique — white background, frontal confrontation — to working people with no claim to glamour or celebrity. This revealed that his technique was fundamentally about human dignity, not fashion. Every subject received the same attentive respect as a Vogue cover star.",
      },
    },
    {
      id: "ra-04-techniques",
      title: "Techniques & Approach",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "The Large Format Camera" },
        {
          type: "paragraph",
          content:
            "Avedon shot most of his portrait work on an 8x10 large format camera — a slow, deliberate instrument that requires precise focusing and careful preparation. The resulting negatives contain extraordinary detail, allowing prints to be made at life size without loss of quality. The camera's slowness also served the session psychologically: the extended preparation gives subjects time to settle, and time to become anxious.",
        },
        { type: "heading", content: "Provoking Emotional Response" },
        {
          type: "paragraph",
          content:
            "Avedon was famously willing to manipulate his subjects' emotional states to get the image he wanted. He might tell them something false, keep them waiting beyond the point of comfort, or suddenly change the atmosphere of the room. He wanted the mask to slip — to photograph the person behind the persona.",
        },
        { type: "heading", content: "The Print as Artwork" },
        {
          type: "paragraph",
          content:
            "Avedon was deeply involved in the printing of his own work. He developed close relationships with master printers and spent enormous time in the darkroom perfecting the translation from negative to print. He considered the print to be where the photograph was really made.",
        },
        { type: "heading", content: "The Slow Build" },
        {
          type: "paragraph",
          content:
            "Avedon's portrait sessions typically began with casual conversation and built slowly toward the images he intended. He would shoot extensively before the 'real' session began — using early frames to relax subjects and warm up his own eye. By the time he made the images he actually used, both he and the subject were fully present.",
        },
      ],
      quiz: {
        question: "What was Avedon's purpose in deliberately provoking emotional responses in his portrait subjects?",
        options: [
          { id: "a", text: "To create striking facial expressions for commercial fashion work", isCorrect: false },
          { id: "b", text: "To cause the social mask to slip and photograph the person behind the persona", isCorrect: true },
          { id: "c", text: "To test whether subjects were professional enough to maintain composure", isCorrect: false },
          { id: "d", text: "To create the sense of spontaneity in otherwise highly controlled situations", isCorrect: false },
        ],
        explanation:
          "Avedon wanted to photograph the person behind the persona — the human being underneath the public mask. By creating moments of unexpected emotion or discomfort, he gave subjects no time to perform. What remained was something closer to truth.",
      },
    },
    {
      id: "ra-05-legacy",
      title: "Influence & Legacy",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "The Most Influential American Photographer" },
        {
          type: "paragraph",
          content:
            "Avedon's influence on American photography is immeasurable. He defined how American celebrities, politicians, artists, and workers were depicted for sixty years. His techniques — the white background, the large format, the psychological confrontation — have been adopted and adapted by photographers worldwide.",
        },
        { type: "heading", content: "Fashion Photography" },
        {
          type: "paragraph",
          content:
            "Avedon's fashion work transformed the medium from product display to narrative art. His sense of movement, energy, and story brought fashion photography into the mainstream of visual culture. Every fashion photographer who works with narrative or energy rather than static display owes him a debt.",
        },
        { type: "heading", content: "Documentary Portraiture" },
        {
          type: "paragraph",
          content:
            "'In the American West' demonstrated that fine-art portraiture techniques could be applied democratically — to any subject, regardless of their social status. This opened a tradition of documentary portraiture that continues today in photographers like Alec Soth and Rineke Dijkstra.",
        },
        { type: "heading", content: "The Photograph as Confrontation" },
        {
          type: "paragraph",
          content:
            "Avedon established the idea that a portrait is a confrontation — between photographer and subject, between image and viewer. He believed photographs should make demands on their viewers, should be uncomfortable to look at, should ask questions rather than provide easy answers.",
        },
      ],
      quiz: {
        question: "Which tradition of subsequent photography can be directly traced to Avedon's 'In the American West'?",
        options: [
          { id: "a", text: "Celebrity editorial portraiture in glossy magazines", isCorrect: false },
          { id: "b", text: "Fine-art documentary portraiture applied democratically to any subject", isCorrect: true },
          { id: "c", text: "Fashion photography using movement and energy", isCorrect: false },
          { id: "d", text: "Environmental portraiture shot in domestic settings", isCorrect: false },
        ],
        explanation:
          "'In the American West' opened a tradition of fine-art documentary portraiture — the application of rigorous photographic technique to subjects outside the traditional subject hierarchies of art and fashion photography. Photographers like Alec Soth, Rineke Dijkstra, and August Sander work in a tradition Avedon helped define.",
      },
    },
    {
      id: "ra-06-learn",
      title: "What You Can Learn From Avedon",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Practical Lessons From His Practice" },
        {
          type: "paragraph",
          content:
            "Avedon teaches that portraiture is a confrontation, and that the photographer's job is to create the conditions for truth — not to document comfort.",
        },
        { type: "heading", content: "1. Simplify Ruthlessly" },
        {
          type: "paragraph",
          content:
            "The white background is a lesson in simplification. Remove everything from your portrait that is not your subject. What is the minimum information a portrait needs? Start from there and add only what is absolutely necessary.",
        },
        { type: "heading", content: "2. Move Your Subjects" },
        {
          type: "paragraph",
          content:
            "Avedon photographed movement — models jumping, turning, running. Try a session where you ask your subjects to move continuously: walk toward the camera, turn away, gesture. The images from the movement will often be more alive than those from posed stillness.",
        },
        { type: "heading", content: "3. The Session Is Psychological" },
        {
          type: "paragraph",
          content:
            "Think about the emotional arc of a portrait session. What happens at the beginning, when the subject is still performing? What happens after twenty minutes, when they relax? What happens when something unexpected occurs? The best frames often come at unexpected moments.",
        },
        { type: "heading", content: "4. Your Subject Is Everyone" },
        {
          type: "paragraph",
          content:
            "'In the American West' is Avedon's greatest lesson: no one is beneath the attention of serious photography. The slaughterhouse worker deserves the same attentive gaze as the movie star. Photography's greatest democratic power is making any subject worthy of sustained attention.",
        },
        { type: "heading", content: "5. Print as Carefully as You Shoot" },
        {
          type: "paragraph",
          content:
            "Avedon considered the print to be where the photograph was finally made. Whether you print physically or edit digitally, treat the output stage with the same seriousness as the shooting stage. The image is not finished when the shutter closes.",
        },
      ],
      reflection: {
        prompt:
          "Avedon said 'all photographs are accurate — none of them is the truth.' What does a portrait of someone you know accurately show about them, and what truth does it fail to capture? How might you get closer to that truth in a photograph?",
      },
    },
  ],
}

export default course

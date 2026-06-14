import type { Course } from "@/types"

const course: Course = {
  id: "helmut-newton",
  title: "Helmut Newton",
  slug: "helmut-newton",
  description:
    "A study of Helmut Newton — fashion photography's great provocateur. His images of powerful, sexualised women in luxury settings remain among the most debated and influential in the medium's history.",
  category: "great-photographers",
  accentColor: "#555555",
  coverImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Helmut_Newton_at_work.jpg/800px-Helmut_Newton_at_work.jpg",
  estimatedHours: 3,
  tags: ["fashion", "provocateur", "black-and-white", "luxury", "portrait"],
  photographerId: "helmut-newton",
  lessons: [
    {
      id: "hn-01-biography",
      title: "Biography & Background",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Berlin Kid, World Photographer" },
        {
          type: "image",
          content: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Helmut_Newton_at_work.jpg/800px-Helmut_Newton_at_work.jpg",
          caption: "Helmut Newton at work",
          alt: "Photographer Helmut Newton working with camera",
        },
        {
          type: "paragraph",
          content:
            "Helmut Newton was born Helmut Neustädter in Berlin in 1920 — son of a button manufacturer, apprentice to a photographer, Jewish refugee. He fled Hitler in 1938, bounced through Singapore, and ended up in Australia.",
        },
        {
          type: "paragraph",
          content:
            "He landed in Paris in 1957 and started shooting for French Vogue. That was it — the career that would make him one of fashion's most argued-about names.",
        },
        {
          type: "heading",
          content: "Key Career Milestones",
        },
        {
          type: "list",
          items: [
            "1936: Apprenticed to photographer Yva in Berlin",
            "1938: Flees Nazi Germany; eventually settles in Australia",
            "1957: Moves to Paris; begins shooting for French Vogue",
            "1975: 'Big Nudes' series for Vogue — the defining statement of his aesthetic",
            "1982: 'Helmut Newton's Illustrated' — self-curated magazine",
            "2003: Helmut Newton Foundation opens in Berlin",
            "2004: Dies in a car accident in Los Angeles",
          ],
        },
        {
          type: "quote",
          content: "I am not interested in photographing beautiful women. I am interested in women who are powerful.",
          author: "Helmut Newton",
        },
      ],
      quiz: {
        question: "Why was Helmut Newton forced to flee Berlin in the late 1930s?",
        options: [
          { id: "a", text: "He was expelled for controversial photographic work", isCorrect: false },
          { id: "b", text: "Because he was Jewish, he fled Nazi persecution", isCorrect: true },
          { id: "c", text: "He was offered a more prestigious position in Paris", isCorrect: false },
          { id: "d", text: "His photography studio burned down, forcing him to start elsewhere", isCorrect: false },
        ],
        explanation:
          "Newton (born Neustädter) was Jewish. The rise of Hitler and Nazi persecution forced him to flee Germany in 1938. He escaped via Singapore to Australia, where he eventually became a citizen and served in the Australian Army before his postwar return to Europe.",
      },
    },
    {
      id: "hn-02-style",
      title: "Visual Style Analysis",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Beautiful, Wrong, Charged" },
        {
          type: "paragraph",
          content:
            "Newton's images are never simply pretty — they're always slightly off, buzzing with tension between luxury and transgression. You can't look away, and that's entirely on purpose.",
        },
        { type: "heading", content: "Shadows Do the Heavy Lifting" },
        {
          type: "paragraph",
          content:
            "He borrowed chiaroscuro from Renaissance painters: one hard light source, dramatic shadows, and a film-noir mood. It always looks like evening, even at noon.",
        },
        { type: "heading", content: "Luxury That Unnerves" },
        {
          type: "paragraph",
          content:
            "Hotel rooms, casinos, private pools — Newton's settings are rich and slightly sinister. The glamour isn't aspirational; it's a stage for power games.",
        },
        { type: "heading", content: "Women Who Own the Frame" },
        {
          type: "paragraph",
          content:
            "His women stand dominantly, hold eye contact, and surround diminished men. Whether that's feminist or not has been debated for fifty years — and still isn't settled.",
        },
        {
          type: "quote",
          content: "My photographs are not about sex. They are about the idea of power.",
          author: "Helmut Newton",
        },
      ],
      quiz: {
        question: "The chiaroscuro technique Newton employed originates from which tradition?",
        options: [
          { id: "a", text: "The Japanese woodblock print tradition", isCorrect: false },
          { id: "b", text: "Renaissance painting, particularly the use of dramatic single-source lighting", isCorrect: true },
          { id: "c", text: "Early 20th century photojournalism", isCorrect: false },
          { id: "d", text: "Bauhaus design principles", isCorrect: false },
        ],
        explanation:
          "Chiaroscuro — 'light-dark' in Italian — is a technique developed by Renaissance painters including Caravaggio, Rembrandt, and da Vinci. It uses a single directional light source to create dramatic shadows, investing subjects with volume and intensity. Newton brought this painterly technique into fashion photography.",
      },
    },
    {
      id: "hn-03-works",
      title: "Signature Works",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Big Nudes: No Looking Away" },
        {
          type: "paragraph",
          content:
            "Four women, photographed dressed then nude, staring straight at you. Printed enormous. You can't be a voyeur here — they're more powerful than you are.",
        },
        { type: "heading", content: "Sumo: The Book That Needed a Stand" },
        {
          type: "paragraph",
          content:
            "His 1999 monograph was over 30kg and came with its own furniture. It wasn't just a book — it was a provocation you could injure yourself lifting.",
        },
        { type: "heading", content: "They're Coming (1981)" },
        {
          type: "paragraph",
          content:
            "Four women striding at you in Monte Carlo — two in evening wear, two nude — like they own the street. They do.",
        },
        { type: "heading", content: "Self-Portrait With Wife and Models" },
        {
          type: "paragraph",
          content:
            "Newton in a wheelchair, his wife behind him, two nude models in front. He made his own role in the image totally visible — no pretending the camera isn't there.",
        },
      ],
      quiz: {
        question: "What makes the 'Big Nudes' confrontational rather than simply voyeuristic?",
        options: [
          { id: "a", text: "The subjects are clothed, not nude", isCorrect: false },
          { id: "b", text: "The subjects meet the viewer's gaze directly and stand with dominant posture, refusing passivity", isCorrect: true },
          { id: "c", text: "The images are shot from above, giving the viewer a position of power", isCorrect: false },
          { id: "d", text: "The subjects are photographed from behind, denying the viewer access to their faces", isCorrect: false },
        ],
        explanation:
          "The 'Big Nudes' refuse the conventional voyeuristic framing of nude photography. The subjects stand with arms at their sides, making direct eye contact with the viewer, from a frontal position that gives them equal or greater presence than the viewer. Printed at enormous scale, they cannot be looked at from a position of dominance.",
      },
    },
    {
      id: "hn-04-techniques",
      title: "Techniques & Approach",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Real Places, Real Weight" },
        {
          type: "paragraph",
          content:
            "Newton shot on location because real environments carry meaning that studios can't fake. A hotel room in Monte Carlo says something. A white backdrop says nothing.",
        },
        { type: "heading", content: "One Extra Light, That's It" },
        {
          type: "paragraph",
          content:
            "He'd add a single light source to whatever was already there — just enough to create his signature chiaroscuro without killing the room's atmosphere.",
        },
        { type: "heading", content: "Direct Like You Own the Place" },
        {
          type: "paragraph",
          content:
            "Newton told models to look at him like they owned him. He wanted genuine authority, not performed ease. The difference shows in every frame.",
        },
        { type: "heading", content: "Small Camera, Big Impact" },
        {
          type: "paragraph",
          content:
            "He used a Leica 35mm — quiet, small, no intimidation factor. Speed and portability beat technical perfection every time.",
        },
      ],
      quiz: {
        question: "Why did Newton prefer location work over studio photography?",
        options: [
          { id: "a", text: "Location work was cheaper and required less equipment", isCorrect: false },
          { id: "b", text: "Real environments created a sense of reality and situational authenticity the studio could not provide", isCorrect: true },
          { id: "c", text: "Natural light was his preferred lighting medium in all situations", isCorrect: false },
          { id: "d", text: "He never owned a professional studio during his career", isCorrect: false },
        ],
        explanation:
          "Newton believed real environments created situational authenticity. A hotel room, a Monte Carlo street, a private pool — these locations are loaded with meaning. The luxury setting was not just a backdrop but a participant in the image's power dynamics.",
      },
    },
    {
      id: "hn-05-legacy",
      title: "Influence & Legacy",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Fashion's Most Argued Photographer" },
        {
          type: "paragraph",
          content:
            "Newton's legacy is the argument — feminist icon or male gaze personified? Fifty years in, nobody's won. That unresolved tension is exactly why you can't ignore him.",
        },
        { type: "heading", content: "He Rewired the Whole Industry" },
        {
          type: "paragraph",
          content:
            "Fashion as sexual, power-laden, and charged? That's Newton's invention. Meisel, Tom Ford, Testino — they all work in traditions he built.",
        },
        { type: "heading", content: "His Foundation Keeps the Fire Alive" },
        {
          type: "paragraph",
          content:
            "The Helmut Newton Foundation in Berlin is one of Germany's most visited photography museums. He'd have liked that it keeps the debate running.",
        },
        { type: "heading", content: "The Anti-Smooth Corrective" },
        {
          type: "paragraph",
          content:
            "In a world of airbrushed perfection, Newton's rough-edged reality hits differently. His images acknowledge desire, power, and actual bodies — things digital polish tends to erase.",
        },
      ],
      quiz: {
        question: "The ongoing debate about Newton's work centres on what fundamental interpretive question?",
        options: [
          { id: "a", text: "Whether his use of black and white was an artistic or a commercial choice", isCorrect: false },
          { id: "b", text: "Whether his images celebrate female power or simply enact the male gaze", isCorrect: true },
          { id: "c", text: "Whether luxury settings are appropriate subjects for serious photography", isCorrect: false },
          { id: "d", text: "Whether provocation in art requires a moral framework to justify it", isCorrect: false },
        ],
        explanation:
          "The central interpretive debate about Newton's work is whether his images of powerful, sexualised women celebrate female power (as he claimed) or are simply the male gaze made visible in fashion photography (as many critics argue). This debate is unresolved and forms part of his work's continuing relevance.",
      },
    },
    {
      id: "hn-06-learn",
      title: "What You Can Learn From Newton",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Five Lessons Worth Stealing" },
        {
          type: "paragraph",
          content:
            "Newton's work proves that photography needs a point of view. The most interesting images are rarely comfortable ones.",
        },
        { type: "heading", content: "1. Use Directional Light" },
        {
          type: "paragraph",
          content:
            "Try chiaroscuro: one light at 45 degrees, the other side in shadow. It always feels like evening. Compare it to flat frontal light and see which image has a pulse.",
        },
        { type: "heading", content: "2. Photograph Power, Not Beauty" },
        {
          type: "paragraph",
          content:
            "Ask: how does this person look at their most powerful? That's a different question from most beautiful — and a more interesting one.",
        },
        { type: "heading", content: "3. Understand Your Own Position" },
        {
          type: "paragraph",
          content:
            "Every photograph reflects whose gaze is behind the lens. Being conscious of your own position is where photographic ethics actually begins.",
        },
        { type: "heading", content: "4. Choose Your Location Like It Matters" },
        {
          type: "paragraph",
          content:
            "Location in Newton's work is never neutral — it participates in the image. Scout places that carry meaning: power, status, desire. The backdrop is half the story.",
        },
        { type: "heading", content: "5. Don't Avoid Discomfort" },
        {
          type: "paragraph",
          content:
            "If every image you make is easy to look at, you're probably playing it safe. Push toward what's slightly wrong, slightly too much. That's where it gets interesting.",
        },
      ],
      reflection: {
        prompt:
          "Newton's work is among the most debated in photography history. Looking at his images (search his name), what is your honest reaction? Where do you think the line lies between provocation that illuminates and provocation for its own sake?",
      },
    },
  ],
}

export default course

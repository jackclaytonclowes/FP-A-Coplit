import type { Course } from "@/types"

const course: Course = {
  id: "editorial-fashion-movement",
  title: "Editorial Fashion Photography",
  slug: "editorial-fashion-movement",
  description:
    "Editorial fashion photography as a distinct artistic tradition — the difference between advertising and editorial, the story-over-product imperative, and the creative freedoms that make the magazine spread one of photography's most ambitious forms. From Cecil Beaton to Guy Bourdin to Nick Knight.",
  category: "style-movements",
  accentColor: "#c847a0",
  estimatedHours: 3,
  tags: ["editorial", "fashion", "narrative", "conceptual", "magazine"],
  lessons: [
    {
      id: "ef-01",
      title: "Origins & History",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "The Free Pages Inside the Ad Machine" },
        {
          type: "paragraph",
          content:
            "Fashion magazines make money from advertising. The editorial pages — produced by the magazine's own staff — aren't directly paid for by brands. That gap is where editorial photography lives: creatively freer, commercially unobliged.",
        },
        {
          type: "paragraph",
          content:
            "That's why the tradition's most transgressive work ran in Vogue and Harper's Bazaar, not in ad campaigns. The magazine structure created the freedom by accident.",
        },
        { type: "heading", content: "Condé Nast Changes Everything" },
        {
          type: "paragraph",
          content:
            "Condé Nast bought Vogue in 1909 and made a foundational bet: photography over illustration. He recruited Baron de Meyer, then Edward Steichen. Fashion photography as an art form begins here.",
        },
        {
          type: "image",
          content: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Pelegrina_Pastorino_(Pele),_Harrods_editorial_catalogue,_Spring_1920s,_by_photographer_Louis_Pastorino.jpg/1280px-Pelegrina_Pastorino_(Pele),_Harrods_editorial_catalogue,_Spring_1920s,_by_photographer_Louis_Pastorino.jpg",
          caption: "Pelegrina Pastorino (Pele), Harrods editorial catalogue, Spring 1920s, photograph by Louis Pastorino — an early example of editorial fashion catalogue photography",
          alt: "1920s Harrods editorial catalogue photograph of a woman in fashionable dress, photographed by Louis Pastorino",
        },
        { type: "heading", content: "The Tradition's Greatest Hits" },
        {
          type: "list",
          items: [
            "1910s: Baron de Meyer brings Pictorialist aesthetics to fashion photography for Vogue",
            "1923: Edward Steichen joins Condé Nast, introducing modernist clarity to fashion imagery",
            "1930s–1940s: Cecil Beaton establishes the studio theatrical tradition in British Vogue",
            "1940s–50s: Irving Penn and Richard Avedon redefine the possibilities of fashion photography",
            "1960s: David Bailey and the 'Swinging London' photographers democratise fashion imagery",
            "1970s–80s: Guy Bourdin and Helmut Newton introduce narrative provocation and sexual politics",
            "1990s–2000s: Nick Knight and digital media open the tradition to new visual languages",
          ],
        },
        { type: "heading", content: "Cecil Beaton (1904–1980)" },
        {
          type: "paragraph",
          content:
            "Beaton ran British Vogue for decades with a theatrical sensibility borrowed from his parallel life as a set designer. Every fashion photograph was a production — elaborate sets, dramatic light, pure spectacle.",
        },
        {
          type: "quote",
          content: "Be daring, be different, be impractical. Be anything that will assert integrity of purpose and imaginative vision against the play-it-safers, the creatures of the commonplace, the slaves of the ordinary.",
          author: "Cecil Beaton",
        },
      ],
      quiz: {
        question: "What structural feature of fashion magazines creates the space for editorial photography's relative creative freedom?",
        options: [
          { id: "a", text: "Fashion magazines are not required to make a profit, unlike general interest publications", isCorrect: false },
          { id: "b", text: "Editorial pages are not directly paid for by advertisers, giving editors and photographers more creative latitude than advertising pages", isCorrect: true },
          { id: "c", text: "Fashion photographers are employed on staff by magazines rather than hired as freelancers", isCorrect: false },
          { id: "d", text: "Fashion magazines have a legal obligation to include a certain percentage of non-commercial content", isCorrect: false },
        ],
        explanation:
          "The editorial/advertising distinction is the economic foundation of editorial fashion photography. Advertising pages are purchased by brands to sell specific products — the photography must serve commercial objectives. Editorial pages are produced by the magazine's staff and are not directly purchased; they earn their value indirectly by making the magazine worth reading. This distinction creates the relative creative freedom that allows editorial photography to be conceptual, narrative, provocative, and even uncommercial.",
      },
    },
    {
      id: "ef-02",
      title: "Key Practitioners",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Irving Penn (1917–2009)" },
        {
          type: "paragraph",
          content:
            "Penn stripped fashion photography bare: plain white or grey backgrounds, precise light, zero theatrics. For Vogue from 1943 onward, he treated fashion as a formal problem to solve, not a spectacle to produce.",
        },
        { type: "heading", content: "Guy Bourdin (1928–1991)" },
        {
          type: "paragraph",
          content:
            "Bourdin made images where shoes appeared next to crime scenes, erotic ambiguity, and surrealist violence. The shoes were almost incidental. He took editorial freedom to its absolute limit — and then kept going.",
        },
        { type: "heading", content: "Helmut Newton (1920–2004)" },
        {
          type: "paragraph",
          content:
            "Newton's Big Nudes — naked women in high heels, confrontational and physically powerful — ran in Vogue and caused outrage. Were they empowering or objectifying? Still debated. That's the point.",
        },
        { type: "heading", content: "Nick Knight (b. 1958)" },
        {
          type: "paragraph",
          content:
            "Knight founded SHOWstudio in 2000 and pushed fashion photography into digital, film, and live-streamed territory. His collaborations with Alexander McQueen treated fashion as raw material for visual art.",
        },
        { type: "heading", content: "Steven Meisel (b. 1954)" },
        {
          type: "paragraph",
          content:
            "Meisel made entire issues of Italian Vogue about oil spills, plastic surgery, and police violence. Fashion photography's visual language applied to things that have nothing to do with fashion. It worked.",
        },
        {
          type: "quote",
          content: "Fashion is about dreaming and making other people dream.",
          author: "Donatella Versace",
        },
      ],
      quiz: {
        question: "What made Guy Bourdin's fashion photography for French Vogue and Charles Jourdan radical within the tradition?",
        options: [
          { id: "a", text: "He was the first fashion photographer to use colour photography in a major editorial context", isCorrect: false },
          { id: "b", text: "He constructed unsettling psychological narratives in which the fashion items appeared incidentally, pushing editorial freedom to its limits", isCorrect: true },
          { id: "c", text: "He introduced location photography to a tradition that had previously worked exclusively in studios", isCorrect: false },
          { id: "d", text: "He was the first photographer to use non-professional models in major fashion editorial work", isCorrect: false },
        ],
        explanation:
          "Bourdin's radicalism lay in inverting the basic purpose of fashion photography. Where fashion images exist to present clothes or products desirably, his images used the fashion context as a frame for psychological narratives in which the products were peripheral. Crime scene compositions, sexual ambiguity, surrealist violence — these were the content of his images, with shoes appearing almost incidentally. He used editorial freedom to produce work that was effectively anti-fashion within a fashion context.",
      },
    },
    {
      id: "ef-03",
      title: "Visual Characteristics",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Editorial Tells Stories. Advertising Presents Products." },
        {
          type: "paragraph",
          content:
            "The image implies a before and after, a relationship, an event half-visible. That narrative dimension is what distinguishes editorial from advertising — even when the surface visual language looks similar.",
        },
        { type: "heading", content: "Every Great Editorial Has an Idea" },
        {
          type: "paragraph",
          content:
            "Bourdin's crime-scene aesthetics. Newton's power-sexuality dialectic. Knight's digitally dismembered bodies. These aren't vibes — they're conceptual positions expressed through fashion photography's visual language.",
        },
        { type: "heading", content: "The Spread Is the Unit" },
        {
          type: "paragraph",
          content:
            "Fashion editorial isn't made image by image — it's made spread by spread, story by story. Six to twenty images that build a coherent world. Individual photographs are elements of a sequence, not standalone pieces.",
        },
        { type: "heading", content: "Art Direction Is Half the Work" },
        {
          type: "paragraph",
          content:
            "The art director, stylist, hair, makeup, and set designer are all co-creators. The great editorial partnerships — Penn and Vreeland, Knight and McQueen — made work that neither could have made alone.",
        },
        {
          type: "quote",
          content: "In photography there is a reality so subtle that it becomes more real than reality.",
          author: "Alfred Stieglitz",
        },
      ],
      quiz: {
        question: "What is the 'spread' in editorial fashion photography and why does it matter?",
        options: [
          { id: "a", text: "The spread refers to the range of models used across a single editorial story", isCorrect: false },
          { id: "b", text: "The spread is the double-page layout that functions as the fundamental compositional unit of magazine fashion photography", isCorrect: true },
          { id: "c", text: "The spread describes the geographic range of locations used in a fashion story", isCorrect: false },
          { id: "d", text: "The spread refers to the colour palette that unifies images across an editorial story", isCorrect: false },
        ],
        explanation:
          "The spread — the double-page layout — is editorial fashion photography's fundamental compositional unit because magazine photography is designed to be seen in this format. A photograph that works brilliantly as a full right-hand page may be diminished when placed next to another image. The photographer and art director compose images in relation to each other and to the page, making editorial fashion photography a form of visual sequencing as much as individual image-making.",
      },
    },
    {
      id: "ef-04",
      title: "Defining Works",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Guy Bourdin for Charles Jourdan (1967–1981)" },
        {
          type: "paragraph",
          content:
            "A woman's legs extending from under a car. A crime scene with a shoe as the only clue. Charles Jourdan gave Bourdin the freedom of a fine artist and got the most radical fashion images ever made.",
        },
        { type: "heading", content: "Helmut Newton's Big Nudes in Vogue (1981)" },
        {
          type: "paragraph",
          content:
            "Large-format photographs of naked women in high heels, standing in confrontational contrapposto — published in French Vogue. No clothes to sell. Pure physical presence. The controversy was inseparable from the meaning.",
        },
        { type: "heading", content: "Steven Meisel's Issue-Length Essays for Italian Vogue" },
        {
          type: "paragraph",
          content:
            "Plastic surgery culture. The BP oil spill. Police violence. Meisel applied fashion photography's visual language to social documentary subjects and proved the form could carry any content.",
        },
        { type: "heading", content: "Nick Knight and SHOWstudio" },
        {
          type: "paragraph",
          content:
            "SHOWstudio (founded 2000) moved editorial fashion decisively online and into motion. Knight's live-streamed McQueen show in 2010 was watched globally. Fashion presentation had a new form.",
        },
      ],
      quiz: {
        question: "What was significant about Steven Meisel's issue-length essays for Italian Vogue addressing subjects like the BP oil spill and police violence?",
        options: [
          { id: "a", text: "They were the first fashion stories to use non-white models as primary subjects", isCorrect: false },
          { id: "b", text: "They demonstrated that fashion photography's visual language could carry social and political content entirely unrelated to fashion", isCorrect: true },
          { id: "c", text: "They were the first fashion stories to be published online before appearing in print", isCorrect: false },
          { id: "d", text: "They proved that fashion photography could be financially successful without featuring any fashion products", isCorrect: false },
        ],
        explanation:
          "Meisel's Italian Vogue essays were significant because they expanded fashion photography's subject matter to its limit. By applying fashion photography's visual language — its lighting, casting, art direction, and production values — to subjects like environmental disaster and police violence, they demonstrated that the form's visual sophistication could carry any content. The result was simultaneously fashion photography and social documentary: a hybrid that neither tradition could have produced alone.",
      },
    },
    {
      id: "ef-05",
      title: "Modern Influence",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Print Collapsed. Ambition Moved Indie." },
        {
          type: "paragraph",
          content:
            "The big magazine budgets dried up. The best editorial work now often appears in AnOther, Document Journal, i-D, or SHOWstudio — smaller, weirder, more willing to take risks.",
        },
        { type: "heading", content: "Instagram Made Everyone Look Editorial" },
        {
          type: "paragraph",
          content:
            "Editorial lighting ratios, colour grades, compositional conventions — all now default visual language for aspirational personal branding. The tradition got democratised and diluted at the same time.",
        },
        { type: "heading", content: "Editorial vs Content: The Fight Is Real" },
        {
          type: "paragraph",
          content:
            "'Content' means photography made to generate engagement. 'Editorial' traditionally meant photography made with conceptual ambition. Many photographers argue the distinction is being erased. Others argue it was always ideological.",
        },
        { type: "heading", content: "Fashion Photography as Fine Art" },
        {
          type: "paragraph",
          content:
            "Museum retrospectives of Newton, Penn, Avedon, Bourdin, Knight. Vintage fashion prints selling at gallery prices. The tradition now knows it's a tradition — which changes how it sees itself.",
        },
      ],
      quiz: {
        question: "What does the editorial-vs-content debate in contemporary fashion media concern?",
        options: [
          { id: "a", text: "Whether fashion photography should be produced by photographers or by stylists and art directors", isCorrect: false },
          { id: "b", text: "Whether the term 'editorial' is being debased by social-media-optimised photography that prioritises engagement over conceptual or narrative ambition", isCorrect: true },
          { id: "c", text: "Whether editorial fashion photography should be produced for print or digital distribution", isCorrect: false },
          { id: "d", text: "Whether fashion photographers should retain copyright to their editorial images", isCorrect: false },
        ],
        explanation:
          "The editorial-vs-content debate concerns the meaning and value of the term 'editorial' itself. 'Editorial' traditionally meant photography made with conceptual ambition and creative freedom, distinct from commercially driven advertising work. 'Content' — a term that has proliferated in the social-media era — describes photography produced primarily to generate engagement and traffic. Critics argue that calling social-media-optimised fashion photography 'editorial' dilutes a tradition that represented something genuinely different.",
      },
    },
    {
      id: "ef-06",
      title: "What You Can Learn",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "What Editorial Teaches Everyone" },
        {
          type: "paragraph",
          content:
            "Editorial fashion photography teaches collaborative process, narrative construction, and concept-first thinking — skills that apply far beyond fashion.",
        },
        { type: "heading", content: "1. Start With a Concept, Not a Camera" },
        {
          type: "paragraph",
          content:
            "What is this story about? What should it feel like? What would success look like? Answer those before you pick up the camera. The concept drives everything — light, location, casting, styling.",
        },
        { type: "heading", content: "2. Think Sequence, Not Singles" },
        {
          type: "paragraph",
          content:
            "Plan a sequence: establishing shot, details, full-length, intimate. When editing, ask what the sequence says that no single image can. The story is the unit. The photograph is an element.",
        },
        { type: "heading", content: "3. Find Collaborators and Keep Them" },
        {
          type: "paragraph",
          content:
            "Find a stylist, a set designer, a hair and makeup artist whose aesthetic clicks with yours. Keep working together. Penn and Vreeland, Knight and McQueen — great editorial comes from sustained creative relationships.",
        },
        { type: "heading", content: "4. Learn to Spot the Difference" },
        {
          type: "paragraph",
          content:
            "Train your eye to distinguish editorial from advertising. Advertising presents. Editorial narrates. The distinction is blurring — but understanding it gives you a critical tool for evaluating what any fashion image is actually doing.",
        },
        { type: "heading", content: "5. Buy the Physical Magazines" },
        {
          type: "paragraph",
          content:
            "Get physical copies of Vogue, AnOther, i-D, Dazed. Study how stories are laid out across spreads. See the rhythm of sequencing. The spread as unit is only visible in print.",
        },
      ],
      reflection: {
        prompt:
          "Guy Bourdin once said that a photograph should be 'like a punch in the stomach.' Choose a simple concept — a mood, a relationship, a psychological state — and plan a three-image editorial sequence that expresses it using fashion or clothing as a vehicle. Write a brief treatment for the shoot: the concept, the location or set, the mood of the styling, and what each of the three images contributes to the sequence. Then, if possible, make the images.",
      },
    },
  ],
}

export default course

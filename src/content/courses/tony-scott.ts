import type { Course } from "@/types"

const course: Course = {
  id: "tony-scott",
  title: "Tony Scott",
  slug: "tony-scott",
  description:
    "A study of Tony Scott — cinema's master of kinetic energy. Scott's visual restlessness, saturated colour and relentless momentum redefined the action film and influenced an entire generation of filmmakers.",
  category: "directors",
  accentColor: "#e87830",
  estimatedHours: 3,
  tags: ["action", "kinetic", "energy", "commercial", "american"],
  lessons: [
    {
      id: "ts-01-biography",
      title: "Biography & Background",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Tony Scott (1944–2012)" },
        {
          type: "paragraph",
          content:
            "Scott trained in fine art at Leeds and the Royal College of Art — no film school, just colour, shape, and graphic design. That education made him think in images before he thought in stories.",
        },
        {
          type: "paragraph",
          content:
            "His brother Ridley was already proving that commercial visual intelligence and cinematic ambition could coexist. Tony pushed that tension even further — and made it louder.",
        },
        {
          type: "heading",
          content: "Career Timeline",
        },
        {
          type: "list",
          items: [
            "1944: Born in Durham, England",
            "1960s: Studies at Leeds College of Art and Royal College of Art",
            "1973: Hovis bread commercial — career-launching advertising work",
            "1983: The Hunger — striking debut feature",
            "1986: Top Gun — career-making commercial blockbuster",
            "1993: True Romance — the Tarantino collaboration revealing his dramatic range",
            "1995: Crimson Tide — critical and commercial success with Denzel Washington",
            "2004: Man on Fire — his most emotionally engaged film",
            "2005: Domino — the most extreme expression of his late visual style",
            "2010: Unstoppable — late masterwork of pure tension",
            "2012: Died August 2012",
          ],
        },
        {
          type: "quote",
          content: "I'm a commercial filmmaker. I make movies for a wide audience. But I also have a strong visual sense, and I want to use it.",
          author: "Tony Scott",
        },
      ],
      quiz: {
        question: "What formal training did Tony Scott receive before beginning his film career?",
        options: [
          { id: "a", text: "He studied film production at the London Film School before moving into commercials", isCorrect: false },
          { id: "b", text: "He trained in fine art at Leeds College of Art and then the Royal College of Art, with no film school training", isCorrect: true },
          { id: "c", text: "He studied architecture and engineering before discovering cinema through his brother Ridley", isCorrect: false },
          { id: "d", text: "He trained as a cinematographer at the National Film and Television School before becoming a director", isCorrect: false },
        ],
        explanation:
          "Scott's fine art training — at Leeds and the RCA — gave him a visual education in graphic design, colour, and composition that was more relevant to his eventual style than film school would have been. His understanding of images as visual experiences rather than narrative vehicles came from art education. His advertising career then trained him in compression and impact. He never attended film school.",
      },
    },
    {
      id: "ts-02-influences",
      title: "Influences & Cinematic Education",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Fine Art First, Story Second" },
        {
          type: "paragraph",
          content:
            "Leeds and the RCA gave Scott a painter's brain. He thought in colour, shape, and rhythm before he thought in narrative — which is exactly why his images hit harder than his plots.",
        },
        { type: "heading", content: "Ridley and the Commercial Tradition" },
        {
          type: "paragraph",
          content:
            "Ridley proved it was possible: Alien and Blade Runner showed that advertising-trained directors could make art. Tony ran with that permission — and turned the volume up.",
        },
        { type: "heading", content: "Peckinpah: Feel It, Don't Follow It" },
        {
          type: "paragraph",
          content:
            "The Wild Bunch taught Scott that action editing could be kinetic and fragmentary. Confusion and energy are legitimate effects. You don't need to understand every frame — you need to feel it.",
        },
        { type: "heading", content: "MTV Didn't Ruin Him — It Made Him" },
        {
          type: "paragraph",
          content:
            "Most filmmakers treat music video influence as something to transcend. Scott embraced it. He understood that MTV's visual language was a different kind of cinema — with its own possibilities.",
        },
      ],
      quiz: {
        question: "What did Sam Peckinpah establish that directly influenced Tony Scott's action sequences?",
        options: [
          { id: "a", text: "That violence in cinema should be shown in single long takes without editing cuts, to preserve the reality of the event", isCorrect: false },
          { id: "b", text: "That action editing could be kinetic and fragmentary rather than continuous — that confusion and energy were legitimate aesthetic effects", isCorrect: true },
          { id: "c", text: "That action films required authentic locations rather than studio sets to achieve genuine tension", isCorrect: false },
          { id: "d", text: "That slowing down action to normal speed after fast cutting created an effective emotional counterpoint", isCorrect: false },
        ],
        explanation:
          "Peckinpah's The Wild Bunch (1969) used slow-motion, multiple camera angles, and fragmented editing to render action as a kinetic visual experience rather than a comprehensible spatial sequence. The viewer is not always certain where everyone is or what is happening — but the confusion is the point. Scott absorbed this understanding that action could be felt rather than followed, and developed it into his own highly personal editing style.",
      },
    },
    {
      id: "ts-03-style",
      title: "Visual Style & Techniques",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Orange and Teal Pushed to the Limit" },
        {
          type: "paragraph",
          content:
            "Scott used bleach-bypass and skip-bleach techniques to push colour past normal limits. Warm tones go amber-hot. Shadows go deep teal. The world in his films burns.",
        },
        { type: "heading", content: "Multiple Frame Rates, One Sequence" },
        {
          type: "paragraph",
          content:
            "Normal speed, slow motion, and acceleration — all running at once in the same scene. No two moments look alike. The visual tempo never stops shifting.",
        },
        { type: "heading", content: "The Camera Never Sits Still" },
        {
          type: "paragraph",
          content:
            "Handheld as default, with crash zooms and whip pans. Scott's camera communicates the emotional state of the scene through its own agitation. It's an argument about how the scene feels.",
        },
        { type: "heading", content: "Style That Kept Intensifying" },
        {
          type: "paragraph",
          content:
            "Top Gun is relatively restrained. Domino is everything at once. Unstoppable pulls back — and that restraint produces his most focused, tightest film. Extreme style lands hardest when it's aimed.",
        },
      ],
      quiz: {
        question: "How did Tony Scott use multiple frame rates within single action sequences?",
        options: [
          { id: "a", text: "He shot the entire sequence at high speed and then selectively slowed sections in post-production using digital retiming", isCorrect: false },
          { id: "b", text: "He ran multiple cameras simultaneously at different speeds — some normal, some overcranked, some undercranked — within the same sequence, creating moments of different visual tempo within a single event", isCorrect: true },
          { id: "c", text: "He used a single camera that could switch between frame rates during a shot, controlled by the camera operator", isCorrect: false },
          { id: "d", text: "He used normal frame rates during principal photography and added frame rate effects during optical printing in post-production", isCorrect: false },
        ],
        explanation:
          "Scott's approach to action sequences involved running multiple cameras simultaneously at different frame rates. Some cameras might be at 24fps (normal), others at 72fps or 96fps (slow motion when projected at 24fps), others at 12fps (accelerated). The resulting footage, edited together, creates sequences where the visual tempo constantly varies — different moments have different qualities of time — producing a kinetic restlessness that a single frame rate cannot achieve.",
      },
    },
    {
      id: "ts-04-films",
      title: "Essential Films",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Top Gun (1986)" },
        {
          type: "paragraph",
          content:
            "A Navy recruitment film in disguise — and a cultural phenomenon. The aerial photography is still extraordinary. The politics aged badly. The energy never will.",
        },
        { type: "heading", content: "True Romance (1993)" },
        {
          type: "paragraph",
          content:
            "Scott changed Tarantino's ending — both protagonists survive instead of dying. Tarantino resented it. Scott was right: the film earns its happiness. His most complete work.",
        },
        { type: "heading", content: "Man on Fire (2004)" },
        {
          type: "paragraph",
          content:
            "Denzel Washington finds purpose protecting a child, loses her, then destroys half of Mexico City. The emotional core makes the violence mean something. Style as expression, not decoration.",
        },
        { type: "heading", content: "Domino (2005) and Unstoppable (2010)" },
        {
          type: "paragraph",
          content:
            "Domino is maximalism at its absolute limit. Unstoppable strips everything back to a train, two men, one outcome — and channels all that kinetic energy through a narrow pipe. His tightest film.",
        },
      ],
      quiz: {
        question: "What key creative decision did Tony Scott make about True Romance that Quentin Tarantino originally opposed?",
        options: [
          { id: "a", text: "Scott removed a significant subplot involving a DEA investigation that Tarantino considered essential to the story", isCorrect: false },
          { id: "b", text: "Scott changed Tarantino's ending — in which both protagonists die — to a Hollywood resolution in which they survive", isCorrect: true },
          { id: "c", text: "Scott reordered the film's chronology from Tarantino's non-linear script into a conventional linear narrative", isCorrect: false },
          { id: "d", text: "Scott replaced Tarantino's original choice of leads with Christian Slater and Patricia Arquette, whom Tarantino did not want", isCorrect: false },
        ],
        explanation:
          "Tarantino's original script ended with both Clarence and Alabama dying — a tragic conclusion consistent with the script's influences (the crime film tradition, Bonnie and Clyde). Scott changed the ending so both survive, which Tarantino resented as a commercial compromise. But Scott's version is arguably more emotionally satisfying: the film has built genuine investment in the relationship, and the happy ending is earned rather than merely given. The argument about the ending encapsulates the tension between Tarantino's literary intentions and Scott's instinct for emotional experience.",
      },
    },
    {
      id: "ts-05-themes",
      title: "Themes & Obsessions",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "The Damaged American Hero" },
        {
          type: "paragraph",
          content:
            "Maverick, Creasy, Ramsey — competent, scarred, capable of extraordinary violence. Scott celebrates this archetype while showing what it costs. Both things at once.",
        },
        { type: "heading", content: "Speed Is Alive" },
        {
          type: "paragraph",
          content:
            "In Scott's films, momentum is metaphysical. Characters who move fast are alive. Slowing down means danger or death. Unstoppable makes this literal: the train cannot stop.",
        },
        { type: "heading", content: "Men Who Need Each Other" },
        {
          type: "paragraph",
          content:
            "Maverick and Goose. Hunter and Ramsey. Scott is fascinated by the specific intensity of men who depend on each other under pressure — and what happens when that dependency gets complicated.",
        },
        { type: "heading", content: "Adrenaline as Philosophy" },
        {
          type: "paragraph",
          content:
            "Scott wasn't faking it. He genuinely believed speed and danger were the condition of being fully alive. The style isn't decoration — it's his worldview, made visible.",
        },
      ],
      quiz: {
        question: "What does speed represent thematically in Tony Scott's films, beyond visual excitement?",
        options: [
          { id: "a", text: "Speed signifies American military and technological superiority over international rivals", isCorrect: false },
          { id: "b", text: "Speed is a metaphysical condition — characters who move fast are alive, slowing down is danger, and momentum is both literal and existential", isCorrect: true },
          { id: "c", text: "Speed represents the passing of time and the characters' awareness of their own mortality", isCorrect: false },
          { id: "d", text: "Speed is a class marker in Scott's films, distinguishing working-class characters who act from upper-class characters who deliberate", isCorrect: false },
        ],
        explanation:
          "In Scott's cinema, speed is not decorative but thematic. His heroes are defined by their ability to act faster than circumstances — to stay ahead of danger, complexity, and doubt through sheer momentum. Unstoppable makes this explicit by removing all metaphor: the film is literally about a vehicle that cannot stop, and the tension is entirely generated by momentum. For Scott, speed is the condition of being fully alive.",
      },
    },
    {
      id: "ts-06-learn",
      title: "What You Can Learn",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "What Scott Teaches" },
        {
          type: "paragraph",
          content:
            "Style is not decoration — it's argument. How a film looks communicates what it means, independently of story. And extreme style can serve emotion just as well as restraint.",
        },
        { type: "heading", content: "1. Colour as Emotion" },
        {
          type: "paragraph",
          content:
            "Man on Fire's amber communicates grief turned to rage. Unstoppable's cooler tones say industrial tension. Colour shifts with feeling. Watch Scott change it and ask why.",
        },
        { type: "heading", content: "2. Motion Blur as Feeling" },
        {
          type: "paragraph",
          content:
            "Blurred movement isn't a mistake — it communicates disorientation, speed, and psychological pressure. Notice when Scott's frames are crisp versus blurred, and what emotional state each corresponds to.",
        },
        { type: "heading", content: "3. Restraint as Power" },
        {
          type: "paragraph",
          content:
            "Unstoppable works because Scott narrowed his focus: one train, two men, one event. Visual energy is most powerful when it's aimed at something specific. Constraint is your friend.",
        },
        { type: "heading", content: "4. Style in Service of Feeling" },
        {
          type: "paragraph",
          content:
            "True Romance and Man on Fire prove his style can carry genuine emotional weight. Domino proves what happens when it can't. Watch both and judge for yourself where the line is.",
        },
      ],
      reflection: {
        prompt:
          "Watch Unstoppable and pause on 10 random frames. Study each one: the colour, the motion blur, the framing, the relationship between figures. Notice how tension is created visually rather than through story information. Then watch True Romance and notice how the same visual energy — the kinetic editing, the saturated colour — serves character and emotional engagement. What is the difference between style as decoration and style as feeling? Where does Scott achieve the latter?",
      },
    },
  ],
}

export default course

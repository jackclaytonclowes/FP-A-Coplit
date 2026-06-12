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
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "Tony Scott (1944–2012)" },
        {
          type: "paragraph",
          content:
            "Tony Scott was born in 1944 in Durham, England, into a working-class family. He trained in fine art at Leeds College of Art and then at the Royal College of Art in London — an education in visual culture and graphic design that would prove more formative than any film school training could have been. His older brother Ridley Scott was already making commercials and would soon make Alien (1979); Tony followed him into advertising, where both brothers developed a visual fluency with image-making that the film industry found irresistible.",
        },
        {
          type: "paragraph",
          content:
            "Scott's commercial work — including the celebrated Hovis bread commercial of 1973, which launched him — gave him a mastery of compressed visual storytelling and the ability to make anything look beautiful. Hollywood came calling, and his first feature, The Hunger (1983), announced a filmmaker of distinctive visual intelligence. Top Gun (1986) made him one of the most commercially powerful directors in the world.",
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
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Fine Art and Graphic Design" },
        {
          type: "paragraph",
          content:
            "Scott's education at Leeds and the Royal College of Art gave him a relationship to image-making that was fundamentally visual and graphic rather than narrative. He thought in terms of colour, shape, rhythm, and movement — the concerns of a graphic designer and painter — before he thought in terms of story. This is why his films are often more satisfying as visual experiences than as narratives: the image was always primary.",
        },
        { type: "heading", content: "Ridley Scott and the Commercial Tradition" },
        {
          type: "paragraph",
          content:
            "His brother Ridley's influence was both personal and professional. Ridley had established that a director trained in commercials and advertising could make serious, visually distinguished cinema: Alien (1979) and Blade Runner (1982) demonstrated that commercial visual intelligence and artistic ambition were compatible. Tony carried this into his own work, where the commercial energy and the artistic ambition were even more openly in tension.",
        },
        { type: "heading", content: "Sam Peckinpah and Dynamic Violence" },
        {
          type: "paragraph",
          content:
            "Peckinpah's use of slow-motion, multiple cameras, and editing that fractured time in action sequences had a decisive influence on Scott's approach to violence and movement. The Wild Bunch (1969) established that action editing could be kinetic and fragmentary rather than continuous and comprehensible — that confusion and energy were legitimate aesthetic effects of an action sequence. Scott absorbed this lesson deeply.",
        },
        { type: "heading", content: "Music Videos and Television Commercials" },
        {
          type: "paragraph",
          content:
            "The editing rhythms, colour saturation, and visual restlessness of 1980s music videos and television commercials were the visual culture in which Scott worked throughout his career. While many filmmakers treated these influences as something to transcend, Scott embraced them and refined them into a personal style. He understood that MTV's visual language was not a lesser cinema — it was a different kind of cinema with its own possibilities.",
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
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "Colour Saturation and the Orange-Teal World" },
        {
          type: "paragraph",
          content:
            "Scott's films are among the most colour-saturated in mainstream cinema. He worked with cinematographers including Jeffrey Kimball and Daniel Mindel to push colour processing beyond normal parameters — bleach-bypass techniques, skip-bleach processing, and photochemical treatments that retained grain while boosting saturation. The result is a palette in which warm tones (orange, amber, gold) are pushed to near-extremity and shadows go deep teal or blue.",
        },
        { type: "heading", content: "Multiple Frame Rates and Shutter Manipulation" },
        {
          type: "paragraph",
          content:
            "Scott regularly shot within single sequences using multiple frame rates — some cameras running at normal speed, others overcranked for slow motion, others undercranked for acceleration. Combined with shutter angle manipulation (wider angles creating more motion blur, narrower angles creating stroboscopic staccato movement), this created action sequences with a visual complexity unprecedented in mainstream cinema. No two moments within a sequence looked the same.",
        },
        { type: "heading", content: "Constant Camera Movement" },
        {
          type: "paragraph",
          content:
            "Scott's cameras are almost never still. He used handheld cameras as a default, combined with aggressive zooming, crash zooms, and whip pans. This restlessness was not a documentary technique — it was expressionistic, communicating the emotional state of characters and situations through the camera's own agitation. The camera's movement was an argument about what the scene felt like from the inside.",
        },
        { type: "heading", content: "The Intensifying Career Arc" },
        {
          type: "paragraph",
          content:
            "Scott's style intensified throughout his career rather than settling. Top Gun (1986) is relatively conventional by his later standards; Man on Fire (2004) is already extreme; Domino (2005) — in which lens filters, multiple formats, frame rate variation, and extreme colour all operate simultaneously — represents the outermost limit of his visual experimentation. Unstoppable (2010) pulls back to achieve maximum tension through restraint.",
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
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "Top Gun (1986)" },
        {
          type: "paragraph",
          content:
            "Top Gun was Scott's commercial breakthrough — a Navy recruitment film disguised as an action movie, a cultural phenomenon that shaped the 1980s aesthetic of masculine aspiration. Its aerial photography remains extraordinary; its Kenny Loggins soundtrack remains unmistakeable; its politics have aged badly. But its visual energy and compositional bravura established Scott as a director who could make the mundane look spectacular.",
        },
        { type: "heading", content: "True Romance (1993)" },
        {
          type: "paragraph",
          content:
            "The Tarantino-scripted True Romance reveals a different Scott — one capable of emotional engagement, of sustained character work, of the tender alongside the brutal. Scott changed Tarantino's original ending (in which both protagonists die) to a Hollywood resolution, which Tarantino resented but Scott judged correctly: the film earns its happiness. It is Scott's most complete film and the demonstration that his visual energy could serve character rather than overwhelm it.",
        },
        { type: "heading", content: "Man on Fire (2004)" },
        {
          type: "paragraph",
          content:
            "Scott's most emotionally engaged film: Denzel Washington as a burned-out bodyguard who finds purpose in protecting a child, loses her, and destroys half of Mexico City in his grief. The film's emotional core — Washington's performance, his relationship with Dakota Fanning — makes the violence mean something. Scott's extreme visual style, here, is not decorative but expressive: the image's agitation mirrors Creasy's psychological state.",
        },
        { type: "heading", content: "Domino (2005) and Unstoppable (2010)" },
        {
          type: "paragraph",
          content:
            "Domino is Scott's most extreme work: every visual technique deployed simultaneously, to excess. It is maximalism so total it approaches incoherence, which may be the point — the film is about a life of violent chaos. Unstoppable is its opposite: a relentlessly stripped film about a runaway train, in which Scott's kinetic energy is focused through the narrow constraint of a single event with a single outcome. It is his tightest and possibly his best film.",
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
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "American Masculine Heroism and Its Costs" },
        {
          type: "paragraph",
          content:
            "Scott's films return repeatedly to a specific kind of American masculine hero: competent, damaged, capable of extreme violence, ultimately redeemed through sacrifice or action. This figure — Maverick in Top Gun, Creasy in Man on Fire, Ramsey in Crimson Tide — carries the weight of American masculine mythology while also questioning it: the costs of this kind of manhood are visible in Scott's films even when they are also being celebrated.",
        },
        { type: "heading", content: "Speed as Meaning and Emotional State" },
        {
          type: "paragraph",
          content:
            "In Scott's films, speed is not merely a visual excitement but a metaphysical condition: the characters who move fast are alive; slowing down is danger or death. Unstoppable's runaway train is the purest expression of this — a vehicle that cannot stop, whose momentum is both literal and metaphorical. Speed in Scott's cinema is both the subject and the means of expression.",
        },
        { type: "heading", content: "Loyalty and Betrayal Between Men" },
        {
          type: "paragraph",
          content:
            "The emotional core of most Scott films is a male relationship structured by loyalty and the possibility of betrayal: Maverick and Goose, then Maverick and Iceman; Hunter and Ramsey in Crimson Tide; McCauley and the anonymous street criminal in Enemy of the State. Scott is interested in the specific intensity of men who depend on each other in conditions of danger, and what happens when that dependency becomes complicated.",
        },
        { type: "heading", content: "Adrenaline as a Way of Being Alive" },
        {
          type: "paragraph",
          content:
            "Scott's films are made by someone who finds speed, danger, and kinetic energy to be the condition of feeling fully alive. This is not just a commercial choice — it is a genuine philosophical position that saturates his work. His characters are most alive when moving fastest, most at risk, most committed. The style is the argument.",
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
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Scott's Lessons for Filmmakers and Visual Artists" },
        {
          type: "paragraph",
          content:
            "Scott teaches that style is not decoration but argument — that how a film looks communicates what it means, independently of story. He also teaches that visual restlessness is a learnable skill with specific techniques, and that extreme style and emotional engagement are compatible rather than opposed.",
        },
        { type: "heading", content: "1. Colour as Emotion" },
        {
          type: "paragraph",
          content:
            "Scott's saturated oranges and teals are not arbitrary — they correspond to the films' emotional temperatures. Man on Fire's warm amber communicates grief turned to rage; Unstoppable's cooler palette communicates industrial cold and practical tension. Look at how his colour choices change between films and within films at moments of emotional shift.",
        },
        { type: "heading", content: "2. Motion Blur as Feeling" },
        {
          type: "paragraph",
          content:
            "Scott uses shutter angle manipulation — wider shutter creating more motion blur — to communicate psychological states. Blurred movement is not a failure of technique; it is a way of communicating disorientation, speed, and psychological pressure. Notice when his frames are crisp and when they are blurred, and what emotional state that corresponds to.",
        },
        { type: "heading", content: "3. Restraint as Power" },
        {
          type: "paragraph",
          content:
            "Unstoppable is Scott's tightest film because it has the narrowest constraint: a train, two men, one event. The extreme visual style is channelled rather than dispersed. The lesson is that visual energy is most powerful when it is focused — when style serves a specific emotional or narrative function rather than existing for its own sake.",
        },
        { type: "heading", content: "4. Style in Service of Feeling" },
        {
          type: "paragraph",
          content:
            "The argument against Scott is that his style overwhelms his content — that Domino, for instance, is style without subject. The argument for him is that True Romance and Man on Fire demonstrate that his visual energy can serve emotional engagement as powerfully as any filmmaker's more conventional technique. Study both films and judge for yourself.",
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

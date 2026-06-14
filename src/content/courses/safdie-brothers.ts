import type { Course } from "@/types"

const course: Course = {
  id: "safdie-brothers",
  title: "The Safdie Brothers",
  slug: "safdie-brothers",
  description:
    "A study of Josh and Benny Safdie — cinema's great anxiety merchants. From Good Time to Uncut Gems, the Safdies create panic cinema with extraordinary propulsive energy and emotional honesty.",
  category: "directors",
  accentColor: "#444444",
  estimatedHours: 3,
  tags: ["new-york", "anxiety", "realism", "handheld", "urban"],
  lessons: [
    {
      id: "saf-01-biography",
      title: "Biography & Background",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Josh Safdie (born 1984) and Benny Safdie (born 1986), New York City" },
        {
          type: "paragraph",
          content:
            "The Safdies grew up in New York City, raised largely by a single father who worked in the film industry as a runner. Their subject is the city as it actually is — relentless, indifferent, not romantic.",
        },
        {
          type: "paragraph",
          content:
            "Their early films were made with minimal resources and non-professional casts from actual communities. Heaven Knows What used real members of a Manhattan homeless community. That's the Safdie method: some realities can't be researched into performance. They have to be inhabited.",
        },
        {
          type: "paragraph",
          content:
            "Good Time (2017) brought them to Cannes. Uncut Gems (2019) — Adam Sandler, 24 hours, compulsive gambling — became one of the defining films of its decade. The brothers have since moved toward separate projects.",
        },
        {
          type: "heading",
          content: "Key Career Milestones",
        },
        {
          type: "list",
          items: [
            "2009: Daddy Longlegs — early feature, semi-autobiographical",
            "2014: Heaven Knows What — non-professional cast from an actual Manhattan homeless community",
            "2017: Good Time — Robert Pattinson, Competition at Cannes",
            "2019: Uncut Gems — Adam Sandler in a career-defining performance, A24",
            "Post-2019: Brothers move toward separate individual projects",
          ],
        },
        {
          type: "image",
          content: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/SafdieBros.jpeg/1280px-SafdieBros.jpeg",
          caption: "Josh and Benny Safdie, the New York filmmaking duo whose work is rooted in the city they grew up in",
          alt: "Josh and Benny Safdie, the Safdie Brothers",
        },
        {
          type: "quote",
          content:
            "We're not interested in making films about New York. We're interested in making films about people who happen to be in New York.",
          author: "Josh Safdie",
        },
      ],
      quiz: {
        question: "What was the casting method for Heaven Knows What (2014) and why did it matter?",
        options: [
          {
            id: "a",
            text: "They cast professional actors who spent months living with homeless communities to research their roles",
            isCorrect: false,
          },
          {
            id: "b",
            text: "They cast actual members of a Manhattan homeless community, producing images of unmediated reality that performance could not achieve",
            isCorrect: true,
          },
          {
            id: "c",
            text: "They used a combination of documentary footage and scripted scenes with volunteer actors",
            isCorrect: false,
          },
          {
            id: "d",
            text: "They held open auditions in Manhattan shelters and selected the most naturally gifted performers",
            isCorrect: false,
          },
        ],
        explanation:
          "Heaven Knows What cast Arielle Holmes, a young woman who had actually lived on the streets of Manhattan, in a story drawn directly from her own experience. Other cast members came from the same community. The film's quality of reality — its authentic environment, its understanding of addiction and survival — is inseparable from these choices. The Safdies understood that some realities cannot be researched into performance; they must be inhabited.",
      },
    },
    {
      id: "saf-02-influences",
      title: "Influences & Cinematic Education",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Cassavetes: Feeling True Comes First" },
        {
          type: "paragraph",
          content:
            "Cassavetes showed the Safdies that the most important thing a film can do is feel true. A Woman Under the Influence, The Killing of a Chinese Bookie — improvisation, non-professionals, domestic realism. Direct ancestors.",
        },
        { type: "heading", content: "Lumet: New York as Pressure" },
        {
          type: "paragraph",
          content:
            "Dog Day Afternoon is the single-day anxiety film: New York closing in on a man who can't escape his own situation. Propulsive energy, comedy and terror together. Good Time and Uncut Gems are built on the same engine.",
        },
        { type: "heading", content: "Elaine May: Catastrophe Is Also Funny" },
        {
          type: "paragraph",
          content:
            "Mikey and Nicky showed the Safdies that watching someone unable to stop destroying their own life is simultaneously funny and devastating. That double register defines Uncut Gems.",
        },
        { type: "heading", content: "The French New Wave: Catch Reality, Don't Construct It" },
        {
          type: "paragraph",
          content:
            "Real streets, real light, formal freedom, energy over polish. The New Wave gave the Safdies permission to work in the city the way documentary filmmakers do — catching rather than constructing.",
        },
      ],
      quiz: {
        question: "What specific quality did Sidney Lumet's Dog Day Afternoon provide as a model for the Safdies?",
        options: [
          {
            id: "a",
            text: "Its approach to police procedure and realistic depiction of law enforcement",
            isCorrect: false,
          },
          {
            id: "b",
            text: "The single-day anxiety film: New York as physical pressure closing in on a character who cannot escape his situation",
            isCorrect: true,
          },
          {
            id: "c",
            text: "Its use of Al Pacino's acting method as a template for directing non-professional performers",
            isCorrect: false,
          },
          {
            id: "d",
            text: "Its documentary approach to filming the real Brooklyn neighbourhood where events occurred",
            isCorrect: false,
          },
        ],
        explanation:
          "Dog Day Afternoon's structural influence on the Safdies is the single-location, single-day scenario in which a character — through panic, compulsion, or catastrophic decision — cannot escape the consequences of their own psychology. New York in Lumet's film is not background but pressure: the city crowds in, the situation escalates, and there is no exit. Good Time and Uncut Gems are built on the same engine.",
      },
    },
    {
      id: "saf-03-style",
      title: "Visual Style & Techniques",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "The Camera Is Always Pursuing" },
        {
          type: "paragraph",
          content:
            "Safdie handheld never locks off. The camera seems to be chasing the characters rather than observing them — and that produces helpless empathy. You're running with them.",
        },
        { type: "heading", content: "Faces So Close You Can See the Sweat" },
        {
          type: "paragraph",
          content:
            "Extreme tight close-ups — closer than comfort allows. When Howard Ratner panics, the camera is so close to Adam Sandler's face that you panic with him. Distance produces observation. Proximity produces experience.",
        },
        { type: "heading", content: "Editing That Refuses to Let You Breathe" },
        {
          type: "paragraph",
          content:
            "Cuts come before scenes conclude. Conversations overlap their shots. There's no moment to think — only to react. The editing is a formal analogue for the protagonist's psychological state.",
        },
        { type: "heading", content: "Daniel Lopatin's Electronic Dread" },
        {
          type: "paragraph",
          content:
            "Oneohtrix Point Never's scores sit beneath the image like an anxiety that can't be located or resolved. The music doesn't tell you how to feel — it creates a physiological state your nervous system reads as fear.",
        },
        { type: "heading", content: "Night-Time New York: The City That Doesn't Care" },
        {
          type: "paragraph",
          content:
            "Grain, neon, practical light, actual locations. This texture isn't just aesthetic — it's the physical reality of a city indifferent to whether you survive.",
        },
      ],
      quiz: {
        question: "What specific effect do the Safdies' extreme tight close-ups on faces produce in the audience?",
        options: [
          {
            id: "a",
            text: "A sense of directorial control — signalling to the audience that this moment is important",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Empathetic panic — we are so close to these people that their experience becomes inescapably our own",
            isCorrect: true,
          },
          {
            id: "c",
            text: "Aesthetic beauty — the human face in extreme close-up as a formal composition",
            isCorrect: false,
          },
          {
            id: "d",
            text: "Claustrophobia analogous to the physical spaces the characters are trapped in",
            isCorrect: false,
          },
        ],
        explanation:
          "The Safdies' extreme close-up technique is an empathy machine: by placing the camera so close to the face that the actor's every micro-expression is visible, they make it physiologically impossible to detach from the character's experience. When Howard Ratner is panicking in Uncut Gems, the camera is so close to Adam Sandler's face that we cannot help but panic with him. Distance produces observation; proximity produces experience.",
      },
    },
    {
      id: "saf-04-films",
      title: "Essential Films",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Heaven Knows What (2014)" },
        {
          type: "paragraph",
          content:
            "A love story in a Manhattan homeless community, drawn from the real life of its lead actress Arielle Holmes. Documentary observation that aestheticises nothing. The community is not a backdrop — it's the subject.",
        },
        { type: "heading", content: "Good Time (2017)" },
        {
          type: "paragraph",
          content:
            "One night, Robert Pattinson, Rikers Island, a bank robbery that goes wrong. Pure propulsive machine: one thing fails, then another, then another, with no moment of relief. Pattinson in a career-redefining performance.",
        },
        { type: "heading", content: "Uncut Gems (2019)" },
        {
          type: "paragraph",
          content:
            "Howard Ratner, jeweller, compulsive gambler, 24 hours of escalating crisis. Adam Sandler's performance is among the decade's finest. The film is an anxiety experience as much as a narrative one.",
        },
        {
          type: "quote",
          content:
            "We're trying to make the audience feel what the character feels — not observe what the character feels. There's a difference.",
          author: "Benny Safdie",
        },
      ],
      quiz: {
        question: "What structural principle drives the plots of both Good Time and Uncut Gems?",
        options: [
          {
            id: "a",
            text: "A mystery narrative in which the protagonist and audience discover information simultaneously",
            isCorrect: false,
          },
          {
            id: "b",
            text: "An escalating series of compulsive decisions in which each attempt at resolution creates a worse crisis",
            isCorrect: true,
          },
          {
            id: "c",
            text: "A chase structure in which an antagonist closes in on a protagonist who cannot escape",
            isCorrect: false,
          },
          {
            id: "d",
            text: "A countdown structure in which a deadline creates urgency that the plot must resolve",
            isCorrect: false,
          },
        ],
        explanation:
          "Both films are addiction narratives in structural form: the protagonist cannot stop making decisions that make their situation worse. In Good Time, Connie's every improvised solution creates a new problem. In Uncut Gems, Howard's every bet digs the hole deeper. The Safdies understand addiction as a narrative form: the compulsion loop, the next action, the impossibility of stopping, as the engine of both psychology and plot.",
      },
    },
    {
      id: "saf-05-themes",
      title: "Themes & Obsessions",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Addiction as Plot Structure" },
        {
          type: "paragraph",
          content:
            "The compulsion loop isn't just a character trait — it's the shape of the film. The next bet, the next fix, the next improvised solution that creates the next crisis. Their films are formally addicted.",
        },
        { type: "heading", content: "New York's Invisible Population" },
        {
          type: "paragraph",
          content:
            "The unhoused, the desperate, the people for whom New York is relentless rather than romantic. The Safdies insist these lives deserve sustained cinematic attention. Not as thesis — just as truth.",
        },
        { type: "heading", content: "Love as Complicity in Self-Destruction" },
        {
          type: "paragraph",
          content:
            "The people who love Connie and Howard love them partly because of their self-destructive qualities, not despite them. Love doesn't save. It witnesses.",
        },
        { type: "heading", content: "Character as Fate" },
        {
          type: "paragraph",
          content:
            "There's no version of Howard Ratner who wins and stays won. His compulsion is both his most essential quality and what destroys him. Safdie protagonists aren't undone by circumstance — they're undone by themselves.",
        },
      ],
      quiz: {
        question: "How do the Safdies use addiction as more than character psychology in their films?",
        options: [
          {
            id: "a",
            text: "As a social commentary on the addictive structures of consumer capitalism",
            isCorrect: false,
          },
          {
            id: "b",
            text: "As a structural principle: the compulsion loop drives the plot's shape in the same way it drives the character's psychology",
            isCorrect: true,
          },
          {
            id: "c",
            text: "As a naturalistic character trait that explains why characters make poor decisions",
            isCorrect: false,
          },
          {
            id: "d",
            text: "As an emotional lens that produces sympathy for protagonists who might otherwise be unsympathetic",
            isCorrect: false,
          },
        ],
        explanation:
          "The Safdies use addiction structurally, not just psychologically. In Good Time and Uncut Gems, the plot itself is organised like an addiction: each decision produces a slightly worse crisis that demands another decision, producing another crisis. There is no moment of rest, no step back. The films are formally addicted — unable to stop, unable to resolve — in the same way their protagonists are.",
      },
    },
    {
      id: "saf-06-learn",
      title: "What You Can Learn",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Anxiety as Aesthetic Strategy" },
        {
          type: "paragraph",
          content:
            "Watch any 20-minute section of Uncut Gems: camera never still, something always going wrong, no silence, score always present. These aren't incidental — they're a coordinated strategy to produce a specific physiological experience.",
        },
        { type: "heading", content: "The Same Tools at Any Budget" },
        {
          type: "paragraph",
          content:
            "Then watch 20 minutes of Heaven Knows What. The same techniques — handheld, tight close-ups, overlapping sound — applied to non-professional actors on real locations. The anxiety aesthetic doesn't require resources. It requires decisions.",
        },
        { type: "heading", content: "Empathy Through Proximity" },
        {
          type: "paragraph",
          content:
            "The Safdies don't explain their characters — they put the camera close enough that you inhabit the experience directly. Are you explaining your subject or inhabiting it? Is your audience observing or experiencing?",
        },
        { type: "heading", content: "The City as a Character" },
        {
          type: "paragraph",
          content:
            "New York in their films pushes back. It doesn't care. Whatever environment you work in — ask whether it's background or participant. Are you using its specific qualities to generate story energy?",
        },
      ],
      reflection: {
        prompt:
          "Watch 20 minutes from the middle of Uncut Gems with a notebook. List every formal element contributing to the film's anxiety: camera movement, editing rhythm, sound design, score, close-up frequency, dialogue overlap. Then watch 20 minutes of Heaven Knows What and note the same elements. What do these two films — one with stars and production resources, one made on almost nothing — share formally? How could you apply even two of these elements to your own work?",
      },
    },
  ],
}

export default course

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
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "Josh Safdie (born 1984) and Benny Safdie (born 1986), New York City" },
        {
          type: "paragraph",
          content:
            "Josh and Benny Safdie grew up in New York City, largely raised by their single father, who worked in the film industry as a runner. Their upbringing — the actual city, not its cinematic mythology — is their primary subject: the New York of people for whom the city is not romantic but relentless, the city of survival rather than aspiration.",
        },
        {
          type: "paragraph",
          content:
            "Their early features — Daddy Longlegs (2009) and Heaven Knows What (2014) — were made with minimal resources and non-professional casts drawn from the actual communities they depicted. Heaven Knows What used cast members from a real homeless community in Manhattan, a decision that produced images of unmediated reality that no amount of research-based performance could have achieved.",
        },
        {
          type: "paragraph",
          content:
            "Good Time (2017), starring Robert Pattinson in a career-redefining performance as a bank robber trying to free his brother from jail over the course of a single night, brought the Safdies to international recognition at Cannes. Uncut Gems (2019), starring Adam Sandler as a jeweller whose gambling addiction drives a 24-hour anxiety spiral, became one of the defining films of its decade. The brothers subsequently moved toward separate projects.",
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
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "John Cassavetes: Improvisation and Raw Performance" },
        {
          type: "paragraph",
          content:
            "Cassavetes showed the Safdies that the most important thing a film could do was feel true — and that feeling true required a different relationship to performance and scripting than conventional Hollywood filmmaking allowed. His use of improvisation, non-professional actors, and domestic realism in films like A Woman Under the Influence and The Killing of a Chinese Bookie is the direct ancestor of the Safdie method.",
        },
        { type: "heading", content: "Sidney Lumet: New York as Character" },
        {
          type: "paragraph",
          content:
            "Lumet's Dog Day Afternoon (1975), set during a real bank robbery in Brooklyn, established for the Safdies a model for the single-day anxiety film: New York as a physical pressure, the city closing in on a character who cannot escape his own situation. Dog Day Afternoon's propulsive energy, its mixture of comedy and terror, is present throughout the Safdie filmography.",
        },
        { type: "heading", content: "Elaine May: Comedy Inside Catastrophe" },
        {
          type: "paragraph",
          content:
            "Elaine May's Mikey and Nicky and A New Leaf showed the Safdies that catastrophe and dark comedy could be the same thing — that watching a person unable to stop destroying their own life was simultaneously funny and devastating. This double register is characteristic of Uncut Gems.",
        },
        { type: "heading", content: "Jerzy Skolimowski and the French New Wave" },
        {
          type: "paragraph",
          content:
            "The French New Wave's liberation from studio convention — the ability to film in real streets with real light, the embrace of formal freedom, the celebration of energy over polish — gave the Safdies permission to work in the city as documentary filmmakers work, catching rather than constructing reality.",
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
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "Handheld Camera in Constant Motion" },
        {
          type: "paragraph",
          content:
            "The Safdies' camera is never still. Their handheld cinematography — always slightly in motion, never locked off — creates a constant low-grade anxiety that operates beneath conscious attention. The camera seems to be pursuing the characters rather than observing them, an effect that produces helpless empathy.",
        },
        { type: "heading", content: "Extreme Tight Close-Ups on Faces" },
        {
          type: "paragraph",
          content:
            "The Safdies shoot faces extremely close — tighter than comfort dictates, close enough to see the pores, the sweat, the moment-by-moment emotional processing. This produces a specific kind of empathetic panic: we are so close to these people that their experience becomes inescapably ours.",
        },
        { type: "heading", content: "Rapid Editing That Refuses Breath" },
        {
          type: "paragraph",
          content:
            "The editing in Safdie films never lets the audience catch its breath. Cuts come before scenes conclude; conversations overlap the shots that show them; sequences run at a pace that creates a sensation of controlled panic. This is a formal analogue for the psychological state of the protagonist: there is no moment to think, only to react.",
        },
        { type: "heading", content: "Daniel Lopatin's Electronic Scores" },
        {
          type: "paragraph",
          content:
            "The composer Daniel Lopatin — working as Oneohtrix Point Never — provides scores of sustained electronic dread that sit beneath the image like an anxiety that cannot be located or resolved. The music does not tell you how to feel; it creates a physiological state that your nervous system interprets as fear.",
        },
        { type: "heading", content: "Night-Time New York and Documentary Texture" },
        {
          type: "paragraph",
          content:
            "The Safdies shoot in the actual city — night-time New York with grain and texture that recalls 16mm documentary, practical light from neon signs and street lamps, actual locations rather than dressed sets. This texture is not an aesthetic choice in isolation; it is the physical reality of a city that does not care whether you survive.",
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
      estimatedMinutes: 9,
      blocks: [
        { type: "heading", content: "Heaven Knows What (2014)" },
        {
          type: "paragraph",
          content:
            "A love story set within a Manhattan homeless community, drawn from the real experiences of its lead actress Arielle Holmes. The film watches its protagonist's addiction and her relationship with a young man who may or may not want her alive — with a quality of documentary observation that is the result of the Safdies' casting methods and their refusal to aestheticise their subjects' lives.",
        },
        { type: "heading", content: "Good Time (2017)" },
        {
          type: "paragraph",
          content:
            "A single night in New York in which Connie Nikas — Robert Pattinson in a performance that redefined his career — attempts to rescue his brother from Rikers Island after a bank robbery goes wrong. The film is a pure propulsive machine: one thing goes wrong, then another, then another, with no moment of relief. Pattinson's performance is the fulcrum on which everything turns.",
        },
        { type: "heading", content: "Uncut Gems (2019)" },
        {
          type: "paragraph",
          content:
            "Howard Ratner, a New York jeweller and compulsive gambler, must manage a series of escalating crises over 24 hours. Adam Sandler's performance is among the decade's finest: a man who cannot stop making things worse, whose love of the action is stronger than any desire for the outcome. The film is an anxiety experience as much as a narrative one.",
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
      estimatedMinutes: 8,
      blocks: [
        { type: "heading", content: "Addiction as Narrative Structure" },
        {
          type: "paragraph",
          content:
            "The Safdies use addiction not merely as a character trait but as a structural principle. The compulsion loop — the next bet, the next fix, the next improvised solution to the problem the last solution created — drives the plot in the same way it drives the psychology. Their films are formally addicted: unable to stop, unable to look away.",
        },
        { type: "heading", content: "New York's Invisible Population" },
        {
          type: "paragraph",
          content:
            "The Safdies are interested in people the mainstream cinema ignores: the unhoused, the desperate, the people for whom New York is not glamorous or aspirational but simply relentless. This is not social realism as thesis; it is an insistence that these lives are as worthy of sustained cinematic attention as any other.",
        },
        { type: "heading", content: "Love as Complicity in Self-Destruction" },
        {
          type: "paragraph",
          content:
            "Relationships in Safdie films are not rescues: the people who love the protagonists love them partly because of, not despite, their self-destructive qualities. Loving someone like Connie or Howard means accepting complicity in what they cannot stop doing. Love does not save; it witnesses.",
        },
        { type: "heading", content: "The Impossibility of Escaping One's Own Character" },
        {
          type: "paragraph",
          content:
            "Safdie protagonists are not tragic figures undone by circumstance. They are people whose character — their compulsion, their optimism in the face of catastrophe, their inability to stop — is both their most essential quality and the thing that destroys them. There is no version of Howard Ratner who wins and stays won. The character is the fate.",
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
      estimatedMinutes: 10,
      blocks: [
        { type: "heading", content: "Anxiety as Aesthetic Strategy" },
        {
          type: "paragraph",
          content:
            "Watch any 20-minute section of Uncut Gems and make a list: the camera is never still, something is always going wrong, there is never silence, the score is always present underneath. These are not incidental qualities — they are a coordinated aesthetic strategy to produce a specific physiological experience in the audience.",
        },
        { type: "heading", content: "The Practical Exercise" },
        {
          type: "paragraph",
          content:
            "Then watch 20 minutes of Heaven Knows What. Notice that the same energy — handheld camera, tight close-ups, overlapping sound — is applied to non-professional actors on real locations. The anxiety aesthetic is not dependent on production resources; it is a set of formal decisions available at any budget level.",
        },
        { type: "heading", content: "Empathy Through Proximity" },
        {
          type: "paragraph",
          content:
            "The Safdies' core lesson is that empathy is produced by proximity, not explanation. They do not explain their characters' psychology — they put the camera so close to their faces that the audience inhabits their experience directly. In your own work, ask: are you explaining your subject or inhabiting it? Is the audience observing or experiencing?",
        },
        { type: "heading", content: "The City as a Character" },
        {
          type: "paragraph",
          content:
            "The Safdies use New York not as backdrop but as active force: the city pushes back, the city does not care, the city is indifferent to whether you survive. Whatever environment you work in, ask whether it is background or participant — and whether you are using its specific qualities to generate story energy.",
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

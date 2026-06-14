import type { Course } from "@/types"

const course: Course = {
  id: "michael-mann",
  title: "Michael Mann",
  slug: "michael-mann",
  description:
    "A study of Michael Mann — cinema's poet of professional obsession. Mann's nocturnal urban cinematography and deeply researched characters define the modern crime film.",
  category: "directors",
  accentColor: "#1a8899",
  coverImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Los_Angeles_at_Night%2C_2011.jpg/1280px-Los_Angeles_at_Night%2C_2011.jpg",
  estimatedHours: 3,
  tags: ["crime", "procedural", "male-obsession", "digital", "nocturnal"],
  lessons: [
    {
      id: "mm-01-biography",
      title: "Biography & Background",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Michael Mann (b. 1943)" },
        {
          type: "paragraph",
          content:
            "Mann grew up in Chicago and studied at the London Film School, where he absorbed the British documentary tradition. That instinct — ground fiction in how things actually work — never left him.",
        },
        {
          type: "paragraph",
          content:
            "Miami Vice didn't just launch his style. It changed what TV could look like — and what criminals could be. Mann took professionals seriously before anyone else did.",
        },
        {
          type: "heading",
          content: "Career Timeline",
        },
        {
          type: "list",
          items: [
            "1943: Born in Chicago, Illinois",
            "Late 1960s: Film studies at London Film School",
            "1970s: Television work including Police Story, Starsky and Hutch episodes",
            "1984: Creates Miami Vice TV series — career-defining cultural phenomenon",
            "1981: Thief — feature debut, establishing the Mann protagonist",
            "1986: Manhunter — the first Hannibal Lecter film, underrated on release",
            "1992: The Last of the Mohicans — unexpected departure, major commercial success",
            "1995: Heat — the definitive American crime film",
            "1999: The Insider — his most underrated masterwork",
            "2004: Collateral — Sony HDV and Tom Cruise, digital's cinematic coming-of-age",
            "2006: Miami Vice feature — late style in its purest form",
            "2009: Public Enemies — digital period crime film",
            "2023: Ferrari — late-career return",
          ],
        },
        {
          type: "quote",
          content: "I'm interested in people who are dedicated professionals. People who are very, very good at what they do.",
          author: "Michael Mann",
        },
      ],
      quiz: {
        question: "What did Mann's London Film School education contribute to his approach to fiction filmmaking?",
        options: [
          { id: "a", text: "It gave him technical training in widescreen cinematography that he applied immediately to his television work", isCorrect: false },
          { id: "b", text: "He absorbed the British documentary tradition and social realism, giving him a drive to ground fiction in the specificity of how things actually work", isCorrect: true },
          { id: "c", text: "It connected him with European art cinema directors whose influence is visible in his non-linear narrative structures", isCorrect: false },
          { id: "d", text: "He developed his signature approach to colour and visual design through the school's graphic arts programme", isCorrect: false },
        ],
        explanation:
          "Mann's documentary-inflected approach — the obsessive research, the procedural specificity, the sense that his characters' professional lives are shown with genuine accuracy — comes from his formation in the British documentary tradition at the London Film School. He carries a documentary filmmaker's commitment to authenticity into genre fiction: the guns, the techniques, the professional rituals are shown as they actually are.",
      },
    },
    {
      id: "mm-02-influences",
      title: "Influences & Cinematic Education",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Melville: Criminals as Professionals" },
        {
          type: "paragraph",
          content:
            "Le Samourai, Le Cercle Rouge — Melville's criminals have codes. Discipline, not morality. Mann took this and ran: Heat, Thief, Collateral all live in Melville's moral universe.",
        },
        { type: "heading", content: "The French New Wave: Real Streets, Real Light" },
        {
          type: "paragraph",
          content:
            "Godard and Truffaut proved authenticity and genre were compatible. Mann went further than either of them — his location research is legendary.",
        },
        { type: "heading", content: "Chicago Writers and Masculine Isolation" },
        {
          type: "paragraph",
          content:
            "Hemingway, Saul Bellow — men for whom professional excellence has become the whole of identity. Mann's characters are their descendants: solitary, disciplined, and paying for it.",
        },
        { type: "heading", content: "Available Light and the Drive Toward Real" },
        {
          type: "paragraph",
          content:
            "From Thief's neon stylisation to Collateral's Sony HDV grain, Mann spent his career moving toward one thing: the specific texture of the real world at night.",
        },
      ],
      quiz: {
        question: "What specifically does Jean-Pierre Melville contribute to Mann's conception of his criminal characters?",
        options: [
          { id: "a", text: "Melville's slow, contemplative pacing — long takes and minimal dialogue — which Mann adopted as a way of creating tension", isCorrect: false },
          { id: "b", text: "The model of criminals as cool, disciplined professionals operating under a personal code, where moral clarity comes from professional commitment rather than conventional ethics", isCorrect: true },
          { id: "c", text: "Melville's use of jazz soundtracks, which Mann adapted as synthesiser scores for the contemporary urban environment", isCorrect: false },
          { id: "d", text: "The structural device of parallel editing between investigator and criminal, which Melville pioneered and Mann extended", isCorrect: false },
        ],
        explanation:
          "Melville's contribution to Mann is not primarily technical but philosophical: the idea that a criminal's code of professional conduct can be a form of moral seriousness. Melville's thieves and assassins are not glamourised but genuinely respected for their discipline and commitment. Mann takes this further: his criminals in Thief and Heat are professionals first, and the film's moral imagination is organised around professional excellence rather than conventional heroism or villainy.",
      },
    },
    {
      id: "mm-03-style",
      title: "Visual Style & Techniques",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "From Neon to Digital: A Career-Long Journey" },
        {
          type: "paragraph",
          content:
            "Thief is lush and painterly. Heat is photographic and natural. Collateral is grainy HDV immediacy. Mann spent his career moving away from artifice and toward texture.",
        },
        { type: "heading", content: "Hands at Work" },
        {
          type: "paragraph",
          content:
            "Mann's close-ups of hands — cutting safes, drawing weapons, handling tools — aren't decorative. They show you a professional. They prove he researched how it's actually done.",
        },
        { type: "heading", content: "Nocturnal LA as Spiritual Landscape" },
        {
          type: "paragraph",
          content:
            "Freeway light trails, glass towers, ocean at 2am. Mann's Los Angeles isn't a backdrop — it's a character with its own emotional weather. He photographs it like a landscape photographer.",
        },
        { type: "heading", content: "Gunfights With Real Physics" },
        {
          type: "paragraph",
          content:
            "Heat's bank robbery sequence is choreographed with SWAT accuracy. You believe these people know exactly what they're doing. Procedural authenticity creates more tension than spectacle ever could.",
        },
      ],
      quiz: {
        question: "What career-long visual trajectory does Mann's cinematography describe, from Thief (1981) to Collateral (2004)?",
        options: [
          { id: "a", text: "From black-and-white expressionism toward vivid Technicolor saturation as digital colour technology improved", isCorrect: false },
          { id: "b", text: "From stylised neon artifice toward tactile digital realism — a drive toward photographic authenticity and the specific texture of real locations", isCorrect: true },
          { id: "c", text: "From wide-angle location photography toward intimate telephoto close-ups as his interest moved from environment to character", isCorrect: false },
          { id: "d", text: "From available-light documentary realism toward increasingly elaborate studio-constructed environments", isCorrect: false },
        ],
        explanation:
          "Mann's visual evolution is one of the most coherent trajectories in American cinema: from Thief's lush neon stylisation — beautiful, artificial, painting-like — through Heat's more naturalistic rendering of Los Angeles, to Collateral's Sony HDV, with its digital grain, its immediacy, and its ability to capture the actual quality of light in the city at night. Each film moves further from studio artifice and closer to the specific texture of the real world.",
      },
    },
    {
      id: "mm-04-films",
      title: "Essential Films",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Thief (1981)" },
        {
          type: "paragraph",
          content:
            "Every Mann element in one film: the professional criminal with a code, the meticulous expertise, the nocturnal Chicago locations, the synthesiser score. James Caan's Frank is the original Mann protagonist.",
        },
        { type: "heading", content: "Heat (1995)" },
        {
          type: "paragraph",
          content:
            "The definitive American crime film. Pacino and De Niro as mirror images — equally committed, equally alone. The coffee shop scene is one of the great scenes in cinema. Two men who know exactly what they are.",
        },
        { type: "heading", content: "The Insider (1999)" },
        {
          type: "paragraph",
          content:
            "Mann's most underrated film. A tobacco whistleblower, a journalist, institutional machinery grinding against a man trying to tell the truth. The thriller is bureaucracy. It moves like Heat.",
        },
        { type: "heading", content: "Collateral (2004) and Miami Vice (2006)" },
        {
          type: "paragraph",
          content:
            "Tom Cruise as a contract killer, Jamie Foxx as his unwilling driver. Shot partly on Sony HDV — the city at night has never felt more real. Miami Vice strips the pastel glamour and replaces it with grey-blue digital grain.",
        },
      ],
      quiz: {
        question: "What makes the coffee shop scene in Heat (1995) cinematically significant?",
        options: [
          { id: "a", text: "It is the film's only action sequence set in a public space, contrasting the private violence of the rest of the film", isCorrect: false },
          { id: "b", text: "It is the only moment when the film's mirror-image protagonists meet and speak honestly to each other, creating tension between equals through eyelines and silence rather than action", isCorrect: true },
          { id: "c", text: "It was the first scene in American cinema to use a two-camera setup for an intimate conversation, allowing genuine spontaneous reaction", isCorrect: false },
          { id: "d", text: "The scene was entirely improvised by Pacino and De Niro without a written script, making it unique in Mann's otherwise tightly controlled productions", isCorrect: false },
        ],
        explanation:
          "The coffee shop scene is significant because it brings the film's two principals — who have been moving toward each other throughout — into the same frame for the only time before the film's end. Two men who are mirror images, who understand each other completely, who respect each other as professionals: the scene's tension comes from this mutual recognition, and from the fact that they know their relationship must end violently. Mann shoots it simply — eyelines, cuts, silence — which is exactly right.",
      },
    },
    {
      id: "mm-05-themes",
      title: "Themes & Obsessions",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "Professionalism as Identity" },
        {
          type: "paragraph",
          content:
            "Frank, McCauley, Wigand, Vincent — all are their work, entirely. That dedication is both admirable and catastrophic. Mann doesn't judge it. He just shows you what it costs.",
        },
        { type: "heading", content: "Cop and Criminal: The Same Person" },
        {
          type: "paragraph",
          content:
            "Heat's central idea: law and crime aren't moral opposites, they're professional alternatives. Both require discipline, intelligence, and commitment. The moral distinction is secondary.",
        },
        { type: "heading", content: "Alone in a Beautiful City" },
        {
          type: "paragraph",
          content:
            "Mann's LA is extraordinary and lonely. His characters move through its beauty in isolation — they can't connect, because connection would compromise the detachment the work requires.",
        },
        { type: "heading", content: "What It Costs to Be This Kind of Man" },
        {
          type: "paragraph",
          content:
            "Mastery, courage, commitment — Mann genuinely admires these qualities. His films are also clear-eyed about what they destroy: human connection, ordinary life, everything else.",
        },
      ],
      quiz: {
        question: "What does Mann's presentation of cop and criminal as mirror images argue about the moral structure of his films?",
        options: [
          { id: "a", text: "That crime and law enforcement are morally equivalent and that the distinction between them is arbitrary", isCorrect: false },
          { id: "b", text: "That moral distinction between law and crime is secondary to professional identity — both require the same discipline and commitment, and the films' moral imagination is organised around excellence rather than legality", isCorrect: true },
          { id: "c", text: "That criminals are ultimately superior to law enforcement because they operate without institutional constraints", isCorrect: false },
          { id: "d", text: "That the American legal system is so corrupt that there is no genuine moral difference between those within and outside it", isCorrect: false },
        ],
        explanation:
          "Mann's mirror-image structure — most explicit in Heat, present throughout his work — argues that professional identity precedes and shapes moral identity. McCauley and Vincent are not presented as good and evil but as two men of comparable discipline and commitment who have chosen different professional paths. The film respects both equally, and its emotional power comes from this equal respect — the tragedy is not that one is good and one is evil, but that two comparable men must destroy each other.",
      },
    },
    {
      id: "mm-06-learn",
      title: "What You Can Learn",
      type: "text",
      xpReward: 50,
      estimatedMinutes: 3,
      blocks: [
        { type: "heading", content: "What Mann Teaches" },
        {
          type: "paragraph",
          content:
            "Procedural authenticity is one of cinema's most powerful tools. Show how things actually work and audiences will trust you — and follow you anywhere.",
        },
        { type: "heading", content: "1. Research as Respect" },
        {
          type: "paragraph",
          content:
            "Mann hires real professionals, visits real locations, and requires his actors to train in the skills their characters possess. Authenticity isn't window dressing — it generates trust.",
        },
        { type: "heading", content: "2. The Environment as Character" },
        {
          type: "paragraph",
          content:
            "Mann's LA shapes the people who live in it. Glass towers, freeways, the ocean — each location tells you something about your character. Are your environments participants or backdrops?",
        },
        { type: "heading", content: "3. Tension Through Procedure, Not Spectacle" },
        {
          type: "paragraph",
          content:
            "Professional people making competent decisions under extreme pressure — that's more frightening than flashy violence. Heat's gunfight is terrifying because it's accurate.",
        },
        { type: "heading", content: "4. The Close-Up as Characterisation" },
        {
          type: "paragraph",
          content:
            "How a person handles their tools tells you who they are — without a single line of dialogue. Look for the gestures and actions in your own work that reveal character through competence.",
        },
      ],
      reflection: {
        prompt:
          "Find the coffee shop scene in Heat (1995) — two men talking, no action, no violence. Study how Mann uses eyelines, cutting rhythm, and silence to generate tension between two men who understand each other completely. Notice what information is communicated without dialogue. Then watch the bank robbery and subsequent street gunfight from the same film: notice how the procedural accuracy — the way the men move and communicate like trained professionals — creates more genuine tension than spectacle could. What does authenticity do that choreography cannot?",
      },
    },
  ],
}

export default course

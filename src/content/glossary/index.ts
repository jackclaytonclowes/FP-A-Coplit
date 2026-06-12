export interface GlossaryTerm {
  id: string
  term: string
  definition: string
  example: string
  relatedTerms: string[]
  photographerExample?: string
  quizQuestion: string
  quizOptions: { id: string; text: string; isCorrect: boolean }[]
}

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    id: "editorial",
    term: "Editorial",
    definition:
      "A series of photographs published in a magazine or online platform that tells a story or communicates a mood, concept, or narrative. Unlike advertising, editorial work is typically more artistically driven with fewer commercial constraints.",
    example:
      "A 12-page fashion story in Dazed & Confused exploring themes of nocturnal urban life.",
    relatedTerms: ["campaign", "art-direction", "creative-direction"],
    photographerExample: "Nick Knight's SHOWstudio editorials are frequently cited as defining examples of the form.",
    quizQuestion: "What distinguishes an editorial from an advertising campaign?",
    quizOptions: [
      { id: "a", text: "Editorials always use black and white photography", isCorrect: false },
      { id: "b", text: "Editorials are more artistically driven with fewer direct commercial constraints", isCorrect: true },
      { id: "c", text: "Editorials always feature celebrity subjects", isCorrect: false },
      { id: "d", text: "Editorials are always shot in studio", isCorrect: false },
    ],
  },
  {
    id: "campaign",
    term: "Campaign",
    definition:
      "A coordinated series of images (and often video) produced to promote a brand, product, or collection. Campaigns have a specific commercial objective and are often accompanied by a strategy, budget, and media plan.",
    example: "Chanel's seasonal ready-to-wear campaign, shot and distributed across print and digital.",
    relatedTerms: ["editorial", "brand-identity", "creative-direction"],
    quizQuestion: "A fashion campaign differs from an editorial primarily in that it has a:",
    quizOptions: [
      { id: "a", text: "Longer shooting schedule", isCorrect: false },
      { id: "b", text: "Specific commercial objective and promotional intent", isCorrect: true },
      { id: "c", text: "Larger photography team", isCorrect: false },
      { id: "d", text: "More artistic freedom", isCorrect: false },
    ],
  },
  {
    id: "art-direction",
    term: "Art Direction",
    definition:
      "The discipline of making visual decisions — composition, colour, typography, set design, styling — to create a unified aesthetic experience. An art director translates a concept into specific visual choices.",
    example:
      "The art director on a campaign decides the colour palette, location, props, and overall visual tone.",
    relatedTerms: ["creative-direction", "moodboard", "visual-hierarchy"],
    quizQuestion: "An art director's primary role is to:",
    quizOptions: [
      { id: "a", text: "Write the script for a campaign", isCorrect: false },
      { id: "b", text: "Make specific visual decisions that realise a concept", isCorrect: true },
      { id: "c", text: "Handle the production budget", isCorrect: false },
      { id: "d", text: "Direct the models on set", isCorrect: false },
    ],
  },
  {
    id: "creative-direction",
    term: "Creative Direction",
    definition:
      "The broader strategic and conceptual vision behind a creative project or brand. A creative director sets the overall direction — the 'why' and the 'what' — within which art directors, photographers, and designers work.",
    example: "A creative director for a fashion house defines the seasonal vision and ensures all outputs — campaigns, runway, editorial — cohere around a single idea.",
    relatedTerms: ["art-direction", "brand-identity", "moodboard"],
    quizQuestion: "Creative direction differs from art direction in that it is primarily concerned with:",
    quizOptions: [
      { id: "a", text: "Specific visual decisions like colour and typography", isCorrect: false },
      { id: "b", text: "The overall strategic and conceptual vision", isCorrect: true },
      { id: "c", text: "Post-production and retouching", isCorrect: false },
      { id: "d", text: "Casting and model selection", isCorrect: false },
    ],
  },
  {
    id: "moodboard",
    term: "Moodboard",
    definition:
      "A collection of visual references — images, textures, colour swatches, typography samples — assembled to communicate the intended mood, aesthetic, and direction of a project before it is shot.",
    example:
      "Before shooting a campaign, a creative team assembles a moodboard with 20-30 reference images that define the colour temperature, lighting style, and emotional register they're aiming for.",
    relatedTerms: ["art-direction", "creative-direction", "visual-hierarchy"],
    quizQuestion: "The primary purpose of a moodboard in pre-production is to:",
    quizOptions: [
      { id: "a", text: "Provide a final art-approved look for retouchers", isCorrect: false },
      { id: "b", text: "Communicate the intended visual direction and mood before shooting begins", isCorrect: true },
      { id: "c", text: "Select the final images from a shoot", isCorrect: false },
      { id: "d", text: "Plan the shooting schedule", isCorrect: false },
    ],
  },
  {
    id: "chiaroscuro",
    term: "Chiaroscuro",
    definition:
      "From Italian 'chiaro' (light) and 'scuro' (dark). The dramatic treatment of light and shadow in an image to create depth, volume, and emotional impact. Borrowed from Renaissance painting.",
    example:
      "A portrait shot with a single off-axis light source, creating deep shadow on one side of the face.",
    relatedTerms: ["contrast", "negative-space", "golden-hour"],
    photographerExample: "Helmut Newton frequently used chiaroscuro to sculpt his subjects against dark backgrounds.",
    quizQuestion: "Chiaroscuro describes:",
    quizOptions: [
      { id: "a", text: "A colour grading technique applied in post-production", isCorrect: false },
      { id: "b", text: "The dramatic interplay of light and deep shadow in an image", isCorrect: true },
      { id: "c", text: "A lens technique creating soft focus", isCorrect: false },
      { id: "d", text: "A type of film grain visible in low-light photography", isCorrect: false },
    ],
  },
  {
    id: "negative-space",
    term: "Negative Space",
    definition:
      "The empty or unoccupied area surrounding and between the subjects in a composition. Far from being waste space, negative space actively shapes meaning — creating mood, scale, and tension.",
    example:
      "A single figure placed in the lower-left corner of a vast grey sky. The sky is the negative space, and it amplifies the subject's isolation.",
    relatedTerms: ["visual-hierarchy", "minimalism", "rule-of-thirds"],
    photographerExample: "Wolfgang Tillmans uses negative space generously — subjects often occupy a small portion of the frame.",
    quizQuestion: "In composition, 'negative space' refers to:",
    quizOptions: [
      { id: "a", text: "Underexposed areas that are too dark to print", isCorrect: false },
      { id: "b", text: "The empty area around and between subjects that shapes meaning", isCorrect: true },
      { id: "c", text: "The background removal process in post-production", isCorrect: false },
      { id: "d", text: "The use of black in a colour palette", isCorrect: false },
    ],
  },
  {
    id: "golden-hour",
    term: "Golden Hour",
    definition:
      "The period shortly after sunrise and shortly before sunset when the sun is low on the horizon, producing warm, directional, soft light with long shadows. Considered the most flattering natural light for photography.",
    example:
      "Shooting a portrait session in the hour before sunset when the light is amber, directional, and creates long golden shadows.",
    relatedTerms: ["blue-hour", "chiaroscuro", "colour-palette"],
    quizQuestion: "What defines the 'golden hour' in photography?",
    quizOptions: [
      { id: "a", text: "An hour of guaranteed sunshine regardless of weather", isCorrect: false },
      { id: "b", text: "The period after sunrise/before sunset when light is warm, low, and directional", isCorrect: true },
      { id: "c", text: "The time of day when camera sensors perform best", isCorrect: false },
      { id: "d", text: "The first hour after studio lights are warmed up", isCorrect: false },
    ],
  },
  {
    id: "blue-hour",
    term: "Blue Hour",
    definition:
      "The period approximately 20–30 minutes after sunset (or before sunrise) when the sun is below the horizon but still illuminating the sky with a cool, deep blue tone. Cities take on a luminous, cinematic quality during this window.",
    example: "Urban photography shot in the blue hour has a distinctive quality — artificial lights glow warmly against the deep blue sky, creating natural colour contrast.",
    relatedTerms: ["golden-hour", "chiaroscuro", "colour-palette"],
    quizQuestion: "The 'blue hour' occurs:",
    quizOptions: [
      { id: "a", text: "During overcast midday when light is cold and flat", isCorrect: false },
      { id: "b", text: "Approximately 20–30 minutes after sunset when the sky is deep blue", isCorrect: true },
      { id: "c", text: "When shooting with a daylight-balanced flash", isCorrect: false },
      { id: "d", text: "In the hour after dawn when dew is still present", isCorrect: false },
    ],
  },
  {
    id: "rule-of-thirds",
    term: "Rule of Thirds",
    definition:
      "A compositional guideline that divides the frame into a 3×3 grid. Placing subjects along the grid lines or at their intersections (the 'power points') creates visual tension and dynamism compared to centred compositions.",
    example:
      "Placing a portrait subject on the right vertical grid line, with the subject looking left into the negative space.",
    relatedTerms: ["negative-space", "visual-hierarchy", "leading-lines"],
    quizQuestion: "Where are the 'power points' in the rule of thirds?",
    quizOptions: [
      { id: "a", text: "The four corners of the frame", isCorrect: false },
      { id: "b", text: "The intersections of the grid lines", isCorrect: true },
      { id: "c", text: "The exact centre of the frame", isCorrect: false },
      { id: "d", text: "The midpoints of each edge", isCorrect: false },
    ],
  },
  {
    id: "leading-lines",
    term: "Leading Lines",
    definition:
      "Lines within the composition that draw the viewer's eye through the frame, often toward the subject. These can be literal (roads, rivers, architecture) or implied (a gaze, a gesture, light direction).",
    example: "A photograph taken down a long corridor, with the lines of the walls converging at a figure at the far end.",
    relatedTerms: ["rule-of-thirds", "visual-hierarchy", "negative-space"],
    quizQuestion: "Leading lines in composition serve to:",
    quizOptions: [
      { id: "a", text: "Create a sense of depth by showing vanishing points", isCorrect: false },
      { id: "b", text: "Draw the viewer's eye through the frame toward the subject", isCorrect: true },
      { id: "c", text: "Divide the frame into equal sections", isCorrect: false },
      { id: "d", text: "Always appear as straight horizontal or vertical elements", isCorrect: false },
    ],
  },
  {
    id: "minimalism",
    term: "Minimalism",
    definition:
      "An aesthetic approach that strips composition, palette, and subject matter to essential elements. In photography, minimalism typically means simplified backgrounds, limited colour palettes, and uncluttered frames.",
    example: "An Irving Penn portrait against a seamless white background — nothing competes with the subject.",
    relatedTerms: ["negative-space", "visual-hierarchy", "brand-identity"],
    photographerExample: "Irving Penn's studio work is a masterclass in photographic minimalism.",
    quizQuestion: "In photography, minimalism primarily means:",
    quizOptions: [
      { id: "a", text: "Using the smallest camera format available", isCorrect: false },
      { id: "b", text: "Stripping composition to essential elements with simplified backgrounds and palettes", isCorrect: true },
      { id: "c", text: "Shooting only in black and white", isCorrect: false },
      { id: "d", text: "Using a minimum number of lights in a setup", isCorrect: false },
    ],
  },
  {
    id: "surrealism",
    term: "Surrealism",
    definition:
      "An artistic movement originating in the 1920s that juxtaposes unexpected elements to create dreamlike, irrational imagery. In photography, surrealism involves manipulation, unexpected scale relationships, impossible scenarios, or dreamlike lighting.",
    example: "A fashion editorial set in a forest filled with oversized household objects, shot to make the impossible look photographically real.",
    relatedTerms: ["narrative", "minimalism", "documentary"],
    photographerExample: "Tim Walker's elaborately staged surrealist fashion editorials are among the most celebrated examples in contemporary photography.",
    quizQuestion: "Surrealism in photography typically involves:",
    quizOptions: [
      { id: "a", text: "Hyper-realistic documentation of real events", isCorrect: false },
      { id: "b", text: "Dreamlike or irrational juxtapositions that create impossible scenarios", isCorrect: true },
      { id: "c", text: "Monochromatic images with minimal post-processing", isCorrect: false },
      { id: "d", text: "Street photography of urban environments", isCorrect: false },
    ],
  },
  {
    id: "documentary",
    term: "Documentary",
    definition:
      "A photographic approach that prioritises recording reality as it is, without staging or significant manipulation. Documentary photography values authenticity, truth-telling, and the historical record.",
    example: "A photographer spending months embedded with a community, photographing daily life without direction or staging.",
    relatedTerms: ["narrative", "editorial", "surrealism"],
    photographerExample: "Nan Goldin's 'Ballad of Sexual Dependency' is one of the most celebrated documentary projects in photography history.",
    quizQuestion: "Documentary photography is primarily characterised by:",
    quizOptions: [
      { id: "a", text: "Technically perfect, highly controlled studio setups", isCorrect: false },
      { id: "b", text: "Recording reality authentically without staging or significant manipulation", isCorrect: true },
      { id: "c", text: "Abstract or non-representational imagery", isCorrect: false },
      { id: "d", text: "Always using black and white film", isCorrect: false },
    ],
  },
  {
    id: "narrative",
    term: "Narrative",
    definition:
      "The story embedded within or across images. A single image can contain narrative through its elements and their relationships; a series of images tells a story through sequence, progression, and contrast.",
    example: "A fashion editorial where each image advances a character's emotional journey through a city at night.",
    relatedTerms: ["editorial", "documentary", "visual-hierarchy"],
    quizQuestion: "In photography, narrative refers to:",
    quizOptions: [
      { id: "a", text: "The text caption accompanying an image", isCorrect: false },
      { id: "b", text: "The story embedded within or across images through their elements and sequence", isCorrect: true },
      { id: "c", text: "The chronological order of a photographer's career", isCorrect: false },
      { id: "d", text: "The brand messaging in an advertising campaign", isCorrect: false },
    ],
  },
  {
    id: "contrast",
    term: "Contrast",
    definition:
      "The range of tonal difference in an image — between the lightest and darkest areas. High contrast images have stark differences between light and shadow. Low contrast images have a compressed, softer tonal range. Also applies to colour contrast.",
    example: "A high-contrast black-and-white portrait where the lit cheekbone is almost white and the shadow side falls to near-black.",
    relatedTerms: ["chiaroscuro", "colour-palette", "minimalism"],
    quizQuestion: "A 'high contrast' image is one where:",
    quizOptions: [
      { id: "a", text: "The colours are highly saturated", isCorrect: false },
      { id: "b", text: "There are stark differences between the lightest and darkest areas", isCorrect: true },
      { id: "c", text: "The image uses many different colours", isCorrect: false },
      { id: "d", text: "The subject is sharp and the background is blurred", isCorrect: false },
    ],
  },
  {
    id: "visual-hierarchy",
    term: "Visual Hierarchy",
    definition:
      "The arrangement of elements in an image (or design) in order of their importance, guiding the viewer's eye through the composition in a specific order. Achieved through size, colour, contrast, position, and negative space.",
    example: "In a complex fashion editorial, the model's eyes are the first point of focus, then the garment, then the background — created through depth of field and tonal contrast.",
    relatedTerms: ["leading-lines", "negative-space", "rule-of-thirds"],
    quizQuestion: "Visual hierarchy in an image is achieved by:",
    quizOptions: [
      { id: "a", text: "Making all elements in the frame the same size", isCorrect: false },
      { id: "b", text: "Arranging elements to guide the viewer's eye in order of importance", isCorrect: true },
      { id: "c", text: "Always placing the most important element in the centre", isCorrect: false },
      { id: "d", text: "Reducing the number of colours in the composition", isCorrect: false },
    ],
  },
  {
    id: "brand-identity",
    term: "Brand Identity",
    definition:
      "The visual and conceptual system that makes a brand recognisable and distinct — including logo, typography, colour palette, tone of voice, and overall aesthetic. A strong brand identity is consistent and immediately identifiable.",
    example: "Céline under Phoebe Philo had a distinct brand identity: understated luxury, intellectual cool, functional beauty.",
    relatedTerms: ["creative-direction", "campaign", "moodboard"],
    quizQuestion: "A brand's 'visual identity' most directly refers to:",
    quizOptions: [
      { id: "a", text: "The brand's social media following", isCorrect: false },
      { id: "b", text: "The visual system (colour, typography, aesthetic) that makes it recognisable", isCorrect: true },
      { id: "c", text: "The price point of the brand's products", isCorrect: false },
      { id: "d", text: "The brand's advertising budget", isCorrect: false },
    ],
  },
  {
    id: "colour-palette",
    term: "Colour Palette",
    definition:
      "The specific set of colours used in an image, campaign, or brand identity. A well-considered colour palette creates emotional consistency and visual coherence. Palettes can be described by their temperature (warm/cool), saturation (vivid/muted), and harmony type.",
    example: "Peter Lindbergh's palette is almost entirely achromatic — blacks, whites, and greys — which forces emotional focus onto expression and form.",
    relatedTerms: ["brand-identity", "contrast", "chiaroscuro"],
    photographerExample: "Nick Knight treats colour as a conceptual element — sometimes entire images are monochromatic in unexpected hues.",
    quizQuestion: "A 'muted' colour palette is best described as:",
    quizOptions: [
      { id: "a", text: "A palette using only black and white", isCorrect: false },
      { id: "b", text: "A palette of desaturated, soft colours with low intensity", isCorrect: true },
      { id: "c", text: "A palette using only warm colours", isCorrect: false },
      { id: "d", text: "A palette that changes with the season", isCorrect: false },
    ],
  },
  {
    id: "styling",
    term: "Styling",
    definition:
      "The selection and arrangement of clothing, accessories, props, and the overall appearance of subjects in a shoot. A stylist collaborates with the photographer and art director to realise the visual concept through specific garment and accessory choices.",
    example: "A stylist sourcing and selecting the garments, shoes, jewellery, and props for a 10-look fashion editorial, and dressing the model on set.",
    relatedTerms: ["editorial", "campaign", "creative-direction", "moodboard"],
    quizQuestion: "A fashion stylist's primary role on a shoot is to:",
    quizOptions: [
      { id: "a", text: "Operate the lighting equipment", isCorrect: false },
      { id: "b", text: "Select and arrange clothing and accessories to realise the visual concept", isCorrect: true },
      { id: "c", text: "Direct the photographer on composition", isCorrect: false },
      { id: "d", text: "Write the editorial copy that accompanies the images", isCorrect: false },
    ],
  },
]

export const GLOSSARY_BY_ID: Record<string, GlossaryTerm> = Object.fromEntries(
  GLOSSARY_TERMS.map((t) => [t.id, t])
)

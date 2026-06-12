import type { Course } from "@/types"
import photographyFoundations from "./photography-foundations"
import wolfgangTillmans from "./wolfgang-tillmans"
import nanGoldin from "./nan-goldin"
import nickKnight from "./nick-knight"
import timWalker from "./tim-walker"
import peterLindbergh from "./peter-lindbergh"
import aidanZamiri from "./aidan-zamiri"
import annieLeibow from "./annie-leibovitz"
import richardAvedon from "./richard-avedon"
import helmutNewton from "./helmut-newton"
import irvingPenn from "./irving-penn"
import juergenTeller from "./juergen-teller"
import paoloRoversi from "./paolo-roversi"
import harleyWeir from "./harley-weir"
import stevenMeisel from "./steven-meisel"
import herbRitts from "./herb-ritts"
import solveSundsbo from "./solve-sundsbo"
import davidLachapelle from "./david-lachapelle"
import martinParr from "./martin-parr"
import realismPhotography from "./realism-photography"
import documentaryPhotography from "./documentary-photography"
import editorialFashionMovement from "./editorial-fashion-movement"
import surrealismPhotography from "./surrealism-photography"
import minimalismPhotography from "./minimalism-photography"
import midnightAesthetics from "./midnight-aesthetics"
import nocturnalPhotography from "./nocturnal-photography"
import cinematicPhotography from "./cinematic-photography"
import experimentalPhotography from "./experimental-photography"
import romanPolanski from "./roman-polanski"
import davidFincher from "./david-fincher"
import tonyScott from "./tony-scott"
import michaelMann from "./michael-mann"
import bongJoonHo from "./bong-joon-ho"
import parkChanWook from "./park-chan-wook"
import ariAster from "./ari-aster"
import robertEggers from "./robert-eggers"
import davidLynch from "./david-lynch"
import denisVilleneuve from "./denis-villeneuve"
import safdieBrothers from "./safdie-brothers"
import filmLiteracy from "./film-literacy"
import psychologicalThrillers from "./psychological-thrillers"
import koreanCinema from "./korean-cinema"
import wwii from "./wwii"
import irelandTheTroubles from "./ireland-the-troubles"
import coldWar from "./cold-war"
import ancientMedievalHistory from "./ancient-medieval-history"
import modernHistory from "./modern-history"
import sicilianMafia from "./sicilian-mafia"
import americanMafia from "./american-mafia"
import organisedCrimeGlobal from "./organised-crime-global"
import intelligenceEspionage from "./intelligence-espionage"
import politicalViolence from "./political-violence"
import crimeInFilm from "./crime-in-film"
import fashionHistory from "./fashion-history"
import fashionHouses from "./fashion-houses"
import artDirection from "./art-direction"
import conceptDevelopment from "./concept-development"
import moodboarding from "./moodboarding"
import brandStrategy from "./brand-strategy"
import consumerPsychology from "./consumer-psychology"
import luxuryBranding from "./luxury-branding"

export const ALL_COURSES: Course[] = [
  photographyFoundations,
  wolfgangTillmans,
  nanGoldin,
  nickKnight,
  timWalker,
  peterLindbergh,
  aidanZamiri,
  annieLeibow,
  richardAvedon,
  helmutNewton,
  irvingPenn,
  juergenTeller,
  paoloRoversi,
  harleyWeir,
  stevenMeisel,
  herbRitts,
  solveSundsbo,
  davidLachapelle,
  martinParr,
  realismPhotography,
  documentaryPhotography,
  editorialFashionMovement,
  surrealismPhotography,
  minimalismPhotography,
  midnightAesthetics,
  nocturnalPhotography,
  cinematicPhotography,
  experimentalPhotography,
  filmLiteracy,
  psychologicalThrillers,
  koreanCinema,
  romanPolanski,
  davidFincher,
  tonyScott,
  michaelMann,
  bongJoonHo,
  parkChanWook,
  ariAster,
  robertEggers,
  davidLynch,
  denisVilleneuve,
  safdieBrothers,
  wwii,
  irelandTheTroubles,
  coldWar,
  ancientMedievalHistory,
  modernHistory,
  sicilianMafia,
  americanMafia,
  organisedCrimeGlobal,
  intelligenceEspionage,
  politicalViolence,
  crimeInFilm,
  fashionHistory,
  fashionHouses,
  artDirection,
  conceptDevelopment,
  moodboarding,
  brandStrategy,
  consumerPsychology,
  luxuryBranding,
]

export const COURSES_BY_ID: Record<string, Course> = Object.fromEntries(
  ALL_COURSES.map((c) => [c.id, c])
)

export const COURSES_BY_CATEGORY = ALL_COURSES.reduce(
  (acc, course) => {
    if (!acc[course.category]) acc[course.category] = []
    acc[course.category].push(course)
    return acc
  },
  {} as Record<string, Course[]>
)

export function getCourse(id: string): Course | undefined {
  return COURSES_BY_ID[id]
}

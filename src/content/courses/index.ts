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
import bongJoonHo from "./bong-joon-ho"
import parkChanWook from "./park-chan-wook"
import ariAster from "./ari-aster"
import robertEggers from "./robert-eggers"
import davidLynch from "./david-lynch"
import denisVilleneuve from "./denis-villeneuve"
import wwii from "./wwii"
import irelandTheTroubles from "./ireland-the-troubles"
import sicilianMafia from "./sicilian-mafia"

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
  romanPolanski,
  davidFincher,
  bongJoonHo,
  parkChanWook,
  ariAster,
  robertEggers,
  davidLynch,
  denisVilleneuve,
  wwii,
  irelandTheTroubles,
  sicilianMafia,
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

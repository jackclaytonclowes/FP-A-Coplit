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

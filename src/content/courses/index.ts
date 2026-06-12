import type { Course } from "@/types"
import photographyFoundations from "./photography-foundations"
import wolfgangTillmans from "./wolfgang-tillmans"

export const ALL_COURSES: Course[] = [photographyFoundations, wolfgangTillmans]

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

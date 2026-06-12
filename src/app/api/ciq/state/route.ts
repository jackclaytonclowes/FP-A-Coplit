import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/db/prisma"
import { getToken } from "next-auth/jwt"

export async function GET(req: NextRequest) {
  const token = await getToken({ req })
  if (!token?.sub) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  const user = await prisma.user.findUnique({
    where: { id: token.sub },
    select: { id: true, xp: true, level: true, streakCurrent: true, lastActiveAt: true },
  })

  if (!user) return NextResponse.json({ error: "Not found" }, { status: 404 })

  // Fetch all progress data and return as unified state blob
  const [lessonProgress, moodboardItems, journalEntries, achievements] = await Promise.all([
    prisma.lessonProgress.findMany({ where: { userId: user.id } }),
    prisma.moodboardItem.findMany({ where: { userId: user.id }, orderBy: { createdAt: "asc" } }),
    prisma.journalEntry.findMany({ where: { userId: user.id }, orderBy: { createdAt: "desc" } }),
    prisma.userAchievement.findMany({ where: { userId: user.id }, include: { achievement: true } }),
  ])

  // Reconstruct completedLessons shape
  const completedLessons: Record<string, string[]> = {}
  for (const lp of lessonProgress) {
    if (lp.completed) {
      if (!completedLessons[lp.courseId]) completedLessons[lp.courseId] = []
      completedLessons[lp.courseId].push(lp.lessonId)
    }
  }

  const state = {
    xp: user.xp,
    level: user.level,
    streak: user.streakCurrent,
    completedLessons,
    unlockedAchievements: achievements.map((a) => a.achievement.slug),
    moodboardItems: moodboardItems.map((m: typeof moodboardItems[number]) => ({
      id: m.id,
      title: m.title,
      type: m.type,
      imageUrl: m.imageUrl,
      notes: m.notes,
      tags: JSON.parse(m.tags) as string[],
      collection: m.collection,
      createdAt: m.createdAt.toISOString(),
    })),
    journalEntries: journalEntries.map((j: typeof journalEntries[number]) => ({
      id: j.id,
      content: j.content,
      prompt: j.prompt,
      lessonId: j.lessonId,
      courseId: j.courseId,
      createdAt: j.createdAt.toISOString(),
    })),
  }

  return NextResponse.json({ state })
}

export async function PUT(req: NextRequest) {
  const token = await getToken({ req })
  if (!token?.sub) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  const body = await req.json()
  const { state } = body
  if (!state || typeof state !== "object") {
    return NextResponse.json({ error: "Invalid state" }, { status: 400 })
  }

  // Persist XP, level, streak to User row
  await prisma.user.update({
    where: { id: token.sub },
    data: {
      xp: state.xp ?? undefined,
      level: state.level ?? undefined,
      streakCurrent: state.streak ?? undefined,
      lastActiveAt: new Date(),
    },
  })

  return NextResponse.json({ ok: true })
}

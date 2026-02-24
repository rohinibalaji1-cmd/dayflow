import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { google } from "googleapis"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

export async function GET() {
  const session = await getServerSession(authOptions)
  const accessToken = (session as any)?.accessToken as string | undefined

  if (!accessToken) {
    return NextResponse.json(
      { error: "Not authenticated (missing access token). Try signing out/in." },
      { status: 401 }
    )
  }

  const auth = new google.auth.OAuth2()
  auth.setCredentials({ access_token: accessToken })

  const calendar = google.calendar({ version: "v3", auth })

  // "Today" in local time
  const start = new Date()
  start.setHours(0, 0, 0, 0)
  const end = new Date()
  end.setHours(23, 59, 59, 999)

  const res = await calendar.events.list({
    calendarId: "primary",
    timeMin: start.toISOString(),
    timeMax: end.toISOString(),
    singleEvents: true,
    orderBy: "startTime",
    maxResults: 50,
  })

  const items =
    res.data.items?.map((e) => ({
      id: e.id,
      summary: e.summary,
      start: e.start?.dateTime ?? e.start?.date, // dateTime for timed, date for all-day
      end: e.end?.dateTime ?? e.end?.date,
      status: e.status,
      htmlLink: e.htmlLink,
    })) ?? []

  return NextResponse.json({ count: items.length, items })
}

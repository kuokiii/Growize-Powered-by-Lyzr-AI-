import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { message, sessionId } = body

    const response = await fetch("https://agent-prod.studio.lyzr.ai/v3/inference/chat/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "sk-default-8dqOl0HQnZgLp6Urb0a3anctaHzaSbpP",
      },
      body: JSON.stringify({
        user_id: "nirupam@lyzr.ai",
        agent_id: "68565c5551aca848adc226f5",
        session_id: sessionId || "68565c5551aca848adc226f5-k001qr0qj1",
        message: message,
      }),
    })

    if (!response.ok) {
      throw new Error(`Lyzr AI API error: ${response.status}`)
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Error calling Lyzr AI:", error)
    return NextResponse.json({ error: "Failed to get AI insights" }, { status: 500 })
  }
}

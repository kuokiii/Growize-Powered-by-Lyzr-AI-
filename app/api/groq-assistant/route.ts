import { type NextRequest, NextResponse } from "next/server"
import { groq } from "@ai-sdk/groq"
import { generateText } from "ai"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { businessDescription } = body

    const prompt = `
Based on the following business description, extract and structure the information into these specific fields. If information is not available, make reasonable assumptions or leave blank:

Business Description: "${businessDescription}"

Please respond with a JSON object containing:
{
  "companyName": "extracted or suggested company name",
  "industry": "one of: technology, healthcare, finance, ecommerce, education, manufacturing, other",
  "stage": "one of: idea, mvp, early, growth, scale",
  "teamSize": "one of: 1, 2-5, 6-10, 11-25, 25+",
  "revenue": "one of: 0, 1-1k, 1k-10k, 10k-50k, 50k-100k, 100k+",
  "mainChallenge": "detailed description of main growth challenge",
  "goals": "specific growth goals for next 6 months"
}

Only respond with valid JSON, no additional text.
`

    const { text } = await generateText({
      model: groq("llama-3.1-8b-instant"),
      prompt: prompt,
      temperature: 0.3,
    })

    // Parse the JSON response
    const parsedData = JSON.parse(text.trim())

    return NextResponse.json(parsedData)
  } catch (error) {
    console.error("Error calling Groq AI:", error)
    return NextResponse.json({ error: "Failed to process business description" }, { status: 500 })
  }
}

import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import { apiWrapper } from "@/utils/api"
import parseCollection from "@/utils/parsers/parseCollection"

const dataSchema = z.object({
  collectionUrl: z.string().url(),
})

export async function POST(request: NextRequest) {
  return await apiWrapper(request, async () => {
    const { collectionUrl } = dataSchema.parse(await request.json())
    const result = await parseCollection({ collectionUrl })

    return NextResponse.json(result)
  })
}

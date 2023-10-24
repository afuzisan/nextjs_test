// app/api/route/middleware.ts
import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { getList } from "./libs/microcms";

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
    // ランダムな数値を生成
    const { contents } = await getList();

    // JSONファイルの内容を作成
    const data = {
        id: "Hello, Next.js!",
        number: 1
    };

    // JSONファイルのレスポンスを返す
    return NextResponse.json(contents);
}

// マッチするパスを設定します
export const config = {
    matcher: '/api/route',
}

'use client'
import { useRouter } from 'next/navigation'

export default function Custom4044() {
  const router = useRouter()

  return (
    <div>
      <h1>404 - ページが見つかりません</h1>
      <button onClick={() => router.back()}>戻る</button>
    </div>
  )
}


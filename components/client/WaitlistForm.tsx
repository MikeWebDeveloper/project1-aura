"use client"

import { useActionState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { joinWaitlist } from "@/app/actions"

export function WaitlistForm() {
  const [state, formAction, isPending] = useActionState(joinWaitlist, {
    message: "",
    success: false,
  })

  return (
    <div className="space-y-4">
      <form action={formAction} className="space-y-4">
        <div className="flex gap-2">
          <Input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-cyan-300"
            disabled={isPending}
          />
          <Button
            type="submit"
            disabled={isPending}
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-8"
          >
            {isPending ? "Joining..." : "Join Waitlist"}
          </Button>
        </div>

        {state.message && (
          <p className={`text-sm ${state.success ? "text-green-400" : "text-red-400"}`}>{state.message}</p>
        )}
      </form>

      <p className="text-xs text-white/60">Be the first to experience the future of clean air. No spam, ever.</p>
    </div>
  )
}

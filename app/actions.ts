"use server"

export async function joinWaitlist(prevState: any, formData: FormData) {
  const email = formData.get("email") as string

  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000))

  if (!email || !email.includes("@")) {
    return {
      message: "Please enter a valid email address",
      success: false,
    }
  }

  // In a real app, you'd save to database here
  console.log("New waitlist signup:", email)

  return {
    message: "Thanks for joining! We'll be in touch soon.",
    success: true,
  }
}

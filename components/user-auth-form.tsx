"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
// import { zodResolver } from "@hookform/resolvers/zod"
// import { signIn } from "next-auth/react"
// import { useForm } from "react-hook-form"
// import * as z from "zod"

import { cn } from "@/lib/utils";
// import { userAuthSchema } from "@/lib/validations/auth"
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { Icons } from "@/components/icons";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

// type FormData = z.infer<typeof userAuthSchema>

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  //   const {
  //     register,
  //     handleSubmit,
  //     formState: { errors },
  //   } = useForm<FormData>({
  //     resolver: zodResolver(userAuthSchema),
  //   })

  const [isLoading, setIsLoading] = useState(false);
  const [isGitHubLoading, setIsGitHubLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const searchParams = useSearchParams();

  async function onSubmit(data: FormData) {
    setIsLoading(true);

    // const signInResult = await signIn("email", {
    //   email: data.email.toLowerCase(),
    //   redirect: false,
    //   callbackUrl: searchParams?.get("from") || "/dashboard",
    // })

    setIsLoading(false);

    // if (!signInResult?.ok) {
    //   return toast({
    //     title: "Something went wrong.",
    //     description: "Your sign in request failed. Please try again.",
    //     variant: "destructive",
    //   })
    // }

    return toast({
      title: "Check your email",
      description: "We sent you a login link. Be sure to check your spam too.",
    });
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      {/* <form onSubmit={handleSubmit(onSubmit)}> */}
      <form>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading || isGitHubLoading}
              //   {...register("email")}
            />
            {/* {errors?.email && (
              <p className="px-1 text-xs text-red-600">
                {errors.email.message}
              </p>
            )} */}
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              placeholder="Password"
              type="password"
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect="off"
              disabled={isLoading || isGitHubLoading}
              //   {...register("email")}
            />
            {/* {errors?.email && (
              <p className="px-1 text-xs text-red-600">
                {errors.email.message}
              </p>
            )} */}
          </div>
          <div className="grid gap-2">

          </div>
          <button className={cn(buttonVariants())} disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Continue with Email
          </button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or
          </span>
        </div>
      </div>
      <div className="grid gap-2">
        <div className="grid gap-1">
          <button
            type="button"
            className={cn(buttonVariants({ variant: "outline" }))}
            onClick={() => {
              setIsGoogleLoading(true);
              // signIn("google")
            }}
            disabled={isLoading || isGoogleLoading}
          >
            {isGoogleLoading ? (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Icons.google className="mr-2 h-4 w-4" />
            )}{" "}
            Continue with Google
          </button>
        </div>
        <div className="grid gap-1">
          <button
            type="button"
            className={cn(buttonVariants({ variant: "outline" }))}
            onClick={() => {
              setIsGitHubLoading(true);
              // signIn("github")
            }}
            disabled={isLoading || isGitHubLoading}
          >
            {isGitHubLoading ? (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Icons.gitHub className="mr-2 h-4 w-4" />
            )}{" "}
            Continue with Github
          </button>
        </div>
      </div>
    </div>
  );
}

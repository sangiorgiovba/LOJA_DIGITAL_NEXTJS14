"use client";

import { trpc } from "@/trpc/client";
import { Loader2, XCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

interface VerifyEmailProps {
  token: string;
}

const VerifyEmail = ({ token }: VerifyEmailProps) => {
  const { data, isLoading, isError } = trpc.auth.verifyEmail.useQuery({
    token,
  });

  if (isError) {
    return (
      <div className="flex flex-col items-center gap-2">
        <XCircle className="h-8 w-8 text-red-700" />
        <h3 className="font-semibold text-xl">OCORREU UM ERROR</h3>
        <p className=" text-muted-foreground text-sm text-center">
          ESTE TOKEN NAO E VALIDO OU JA FOI VENCIDO. TENTE NOVAMENTE
        </p>
      </div>
    )
  }

  if (data?.success) {
    return (
      <div className="flex h-full  flex-col items-center justify-center">
        <div className="relative mb-4 h-60 w-60 text-muted-foreground">
          <Image src="/email.jpg" fill alt="email" />
        </div>
        <h3 className="font-semibold text-center text-2xl"> SUCESSO !</h3>

        <p className="text-muted-foreground text-center mt-1">
            OBRIGADO POR VERIFICAR SEU EMAIL!
        </p>
        <Link className={buttonVariants({className: "mt-4"})}
          href='/sign-in'>
            Faca seu login
        </Link>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="animate-spin  h-8 w-8 text-zinc-400" />
        <h3 className="font-semibold text-xl">VERIFICANDO</h3>
        <p className=" text-muted-foreground text-sm text-center">
        ISSO NAO LEVA MUITO TEMPO
        </p>
      </div>
    )
  }

}

export default VerifyEmail;

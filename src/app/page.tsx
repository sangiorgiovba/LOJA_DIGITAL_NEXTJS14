import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductReel from "@/components/ProductReel";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const perks = [
  {
    name: "Entrega instantânea",
    Icon: ArrowDownToLine,
    description:
      "Receba seus Pedidos em seu e-mail em segundos e baixe-os imediatamente",
  },
  {
    name: "Qualidade garantida",
    Icon: CheckCircle,
    description:
      "Cada Pedido em nossa plataforma é verificado por nossa equipe para garantir nossos mais altos padrões de qualidade. Infeliz? Oferecemos um reembolso de 30 dias guarantee.",
  },
  {
    name: "Para o Planeta",
    Icon: Leaf,
    description:
      "Destinamos 1% das vendas à preservação e restauração do ambiente natural.",
  },
];

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-orange-600 sm:text-6xl">
            Sua loja de qualidade <br />{" "}
            <span className="text-green-700">Loja Digital</span>
            <p className="mt-6 text-lg max-w-prose text-muted-foreground">
              Seja Bem vindo a loja Digital sangiorgiovba@gmail.com sua loja de
              confianca onde voce compra seus produtos de qualidade
            </p>
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/products" className={buttonVariants()}>
              Navegar | Produtos
            </Link>
            <Button className="bg-green-700 hover:bg-green-600">
              Promessa de qualidade &rarr;
            </Button>
          </div>
        </div>

        <ProductReel
          query={{ sort: "desc", limit: 4 }}
          href="/products"
          title="Produtos recentes"
        />
      </MaxWidthWrapper>

      <section className="border-t border-orange-200 bg-orange-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-green-900 text-green-50">
                    {<perk.Icon className="w-1/3 h-1/3" />}
                  </div>
                </div>

                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}

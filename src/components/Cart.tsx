"use client";

import { ShoppingCart } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import Image from "next/image";
import { useCart } from "@/hooks/use-cart";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import CartItem from "./CartItem";
import { useEffect, useState } from "react";

const Cart = () => {
  const { items } = useCart();
  const itemCount = items.length;

  const [isMounted , setIsMounted] = useState<boolean>(false)


  useEffect(()=>{
    setIsMounted(true)
  },[])

  const cartTotal = items.reduce(
    (total, { product }) => total + product.price,
    0
  );

  const fee = 1;

  return (
    <Sheet>
      <SheetTrigger className="group -m-2 flex items-center p-2">
        <ShoppingCart
          aria-hidden="true"
          className=" h-6 w-6 flex-shrink-0 text-orange-600   group-hover:text-orange-500"
        />

        <span className="ml-2 text-sm font-medium text-green-700 group-hover:text-green-800">
          <SheetTitle className=" text-red-700"> {isMounted  ?   itemCount:0} </SheetTitle>
        </span>
      </SheetTrigger>

      <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
        <SheetHeader className="space-y-2.5 pr-6">
          <SheetTitle> Carrinho({itemCount})</SheetTitle>
        </SheetHeader>

        {itemCount > 0 ? (
          <>
            <div className="flex w-full flex-col pr-6">
              <ScrollArea>
                {items.map(({ product }) => (
                  <CartItem product={product} key={product.id} />
                ))}
              </ScrollArea>
            </div>

            <div className="space-y-4 pr-6">
              <Separator />

              <div className=" space-y-1.5  text-sm">
                <div className="flex">
                  <span className="flex-1">Envio</span>
                  <span>Gratuito</span>
                </div>

                <div className="flex">
                  <span className="flex-1">Taxa de transacao</span>
                  <span>{formatPrice(fee)}</span>
                </div>

                <div className="flex">
                  <span className="flex-1">Preco Total</span>
                  <span>{formatPrice(cartTotal + fee)}</span>
                </div>
              </div>

              <SheetFooter>
                <SheetTrigger asChild>
                  <Link
                    href="/cart"
                    className={buttonVariants({
                      className: "w-full",
                    })}
                  >
                    Efetuar seu pagamento
                  </Link>
                </SheetTrigger>
              </SheetFooter>
            </div>
          </>
        ) : (
          <div className="flex h-full  flex-col  items-center justify-center space-y-1">
            <div
              aria-hidden="true"
              className="relative mb-4 h-60 w-60 text-muted-foreground"
            >
              <Image src="/cart.jpg" fill alt="carrinho vazio" />
            </div>

            <div className="text-xl font-semibold text-center">
              <span className="text-red-600">--- Triste ---</span>
              <br />
              Meu carrinho esta vazio
            </div>

            <SheetTrigger asChild>
              <Link
                href="/products"
                className={buttonVariants({
                  variant: "link",
                  size: "sm",
                  className: "text-sm",
                })}
              >
                <span className="text-green-600">
                  Adicionar Produtos no carrinho
                </span>
              </Link>
            </SheetTrigger>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;

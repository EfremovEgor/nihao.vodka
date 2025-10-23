import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
const buttonVariants = cva(
	"cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap",
	{
		variants: {
			variant: {
				menuButton: "",
				contactsButton:
					"px-3 py-1 border-2 text-white border-white rounded-[10px] hover:text-red hover:bg-white transition-all font-semibold active:font-bold",
				mainButton:
					"px-5 bg-red py-3 text-white rounded-[5px] border-transparent border-2 hover:font-bold transition-all font-semibold active:font-bold active:border-white",
				secondaryButton:
					"px-3 py-1 border-2 text-yellow border-yellow rounded-[5px] hover:border-white transition-all active:border-yellow",
				ageConfirmationButton:
					"px-3 py-1 border-2 border-white rounded-[10px] text-red bg-white transition-all hover:font-bold",
			},
		},
		defaultVariants: {
			variant: "menuButton",
		},
	}
);
const Button = ({
	className,
	variant,
	...props
}: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants>) => {
	const buttonClasses = buttonVariants({ variant, className });

	// Для отладки
	console.log("Variant:", variant);
	console.log("Generated classes:", buttonClasses);
	return (
		<button
			className={cn(buttonVariants({ variant, className }))}
			{...props}
		></button>
	);
};

export default Button;

import React, { ComponentPropsWithoutRef, PropsWithChildren } from 'react'; // Importa PropsWithChildren
import grainImage from '@/assets/images/grain.jpg'; // Assicurati che l'immagine sia correttamente importata
import { twMerge } from 'tailwind-merge'; // Assicurati di avere twMerge installato e importato

export const Card = ({
    className,
    children,
    ...other
}: ComponentPropsWithoutRef<"div">) => {
    return (
        <div className={twMerge("bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:-z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20", 
            className

        )}
        
        {...other}
        >         
            <div className="absolute inset-0 -z-10 opacity-5"
                style={{ backgroundImage: `url(${grainImage})` }}>
            </div>
            {children}
        </div>
    );
};

import { animate, query, style, transition, trigger } from "@angular/animations";




export const topSlide = trigger('routeAnimations', [
    transition('* => topSlide', [
        query(':enter', [
            style({ 
                position: "relative",
                right: "-50%"
            }),
            animate('0.4s ease-out', style({
                right: "0%"
            })),
        ],{ optional: true }),
        ]), 
        transition("topSlide => *", [
            query(':leave', [
                style({
                    position: 'relative',
                    right: '0%'
                }),
                animate("0.2s ease-out", style({
                    right: "-100%"
                }))
            ], { optional: true })
        ])
    ])









































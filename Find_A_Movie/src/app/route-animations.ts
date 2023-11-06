import { animate, query, style, transition, trigger } from "@angular/animations";




export const topSlide = trigger('routeAnimations', [
    transition('* => topSlide', [
        query(':enter', [
            style({ top: 0})
        ]),
        query(':enter', [
            animate('2s ease-out', style({top: 70}))
        ])
    ])
])

export const fader = trigger('routeAnimations', [
    transition('* <=> *', [
        query(':enter, :leave', [
            style({ opacity:0 })
        ]),
        query(':enter', [
            animate('2s ease-in', style({ opacity: 100 }))
        ])
    ])
])
export type Language = 'en' | 'ko'

export interface IndexLocalization {
    readonly welcome: string
    readonly when: string
    readonly blog: string
}

export interface AboutLocalization {
    readonly introduction: string
    readonly iam: string
    readonly interest: string
    readonly minimalism: string
    readonly technical: string
    readonly empty: string
    readonly useless: string
    readonly iamnot: string
    readonly absolutelynot: string
    readonly namehavenomean: string
    readonly nickorigin: string
    readonly here: string
    readonly dislikeconcepts: string
    readonly disliketwitter: string
}

export interface TimeLocalization {
    readonly mytime: string
    readonly mytimeis: string
}

export interface LocalizationValue {
    readonly index: IndexLocalization
    readonly about: AboutLocalization
    readonly time: TimeLocalization
}

export type Localization = {
    readonly [key in Language]: LocalizationValue
}

export const loc: Localization = {
    en: {
        index: {
            welcome: "Welcome to my Home Page.",
            when: "When is Bluehill's time?",
            blog: "Blog (Korean)"
        },
        about: {
            introduction: "Introduction",
            iam: "I am Bluehill.",
            interest: "I have a lot of interest in C# and .NET. I am also interested in TypeScript.",
            minimalism: "I pursue minimalism.",
            technical: "This site was originally made with Blazor WebAssembly, but is now a static site using Astro.",
            empty: "The site may look very empty, but this is the concept.",
            useless: "Useless Chatter",
            iamnot: "I am not an \"otaku\" (pop culture fanatic).",
            absolutelynot: "Absolutely not",
            namehavenomean: "My nickname (Bluehill) and ID (na1307) have no particular meaning.",
            nickorigin: "I've been using the nickname Bluehill since 2018, and I suspect it might have been a parody of Bluehole (now Krafton) back when PUBG was popular.",
            here: "here",
            dislikeconcepts: "I dislike people who adopt strange concepts. Can't we just live a normal life?",
            disliketwitter: "I don't use Twitter (X) and don't intend to. Because Grandfather Ferguson said it was a waste of life."
        },
        time: {
            mytime: "My Time",
            mytimeis: "The time in $1 where Bluehill lives is ..."
        }
    },
    ko: {
        index: {
            welcome: "환영합니다.",
            when: "지금 몇 시지?",
            blog: "블로그"
        },
        about: {
            introduction: "소개",
            iam: "Bluehill입니다.",
            interest: "C#과 닷넷에 관심이 많습니다. 그 외에는 타입스크립트에 관심이 있습니다.",
            minimalism: "미니멀리즘을 추구합니다.",
            technical: "이 사이트는 Blazor WebAssembly로 제작되었다가 지금은 Astro를 사용한 정적 사이트입니다.",
            empty: "사이트가 많이 허전해 보일텐데 이게 컨셉입니다.",
            useless: "쓸데 없는 잡담",
            iamnot: "씹덕은 아닙니다.",
            absolutelynot: "암튼 아님",
            namehavenomean: "닉네임(Bluehill)과 아이디(na1307)의 의미는 없습니다.",
            nickorigin: "Bluehill이라는 닉네임은 2018년부터 썼는데, 아마도 당시 배틀그라운드가 유행하던 때에 블루홀(현 크래프톤) 패러디로 쓰지 않았나 싶습니다.",
            here: "여기",
            dislikeconcepts: "이상한 컨셉 잡는 사람들을 싫어합니다. 우리 평범하게 살 수 있잖아요?",
            disliketwitter: "트위터(X)는 하지 않고, 할 생각도 없습니다. 퍼거슨 할아버지께서 인생의 낭비라 하셨거든요."
        },
        time: {
            mytime: "지금 몇 시지?",
            mytimeis: "Bluehill이 살고 있는 $1의 시간은..."
        }
    }
}
